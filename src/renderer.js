const si = require("systeminformation");
const { ipcRenderer } = require("electron");

// Botão para obter informações da CPU
document.getElementById("cpu-info-btn").addEventListener("click", async () => {
  const cpuInfo = await ipcRenderer.invoke("get-cpu-info");
  document.getElementById("output").innerText = JSON.stringify(
    cpuInfo,
    null,
    2
  );
});

// Botão para pegar informações de memória
document.getElementById("mem-info-btn").addEventListener("click", async () => {
  const memInfo = await ipcRenderer.invoke("get-mem-info");
  document.getElementById("output").innerText = JSON.stringify(
    memInfo,
    null,
    2
  );
});

async function getHardwareInfo() {
  const cpu = await si.cpu();

  const hardwareInfo = `
    CPU Information:
    Manufacturer: ${cpu.manufacturer}
`;

  document.getElementById("hardware-info").textContent = hardwareInfo;
}

getHardwareInfo;
