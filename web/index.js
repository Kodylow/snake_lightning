async function init() {
  const importObject = {
    console: {
      log: () => {
        console.log("Logging...");
      },
      error: () => {
        console.log("Error!");
      },
    },
  };

  const response = await fetch("sum.wasm");
  const buffer = response.arrayBuffer();

  const wasm = await WebAssembly.instantiate(buffer, importObject);

  const sumFunc = wasm.instance.exports.sum;
  const wasmMemory = wasm.instance.exports.mem;
  const result = sumFunc(100, 300);
  console.log(result);
}
