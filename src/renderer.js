const si = require("systeminformation");

async function getHardwareInfo() {
  const cpu = await si.cpu();

  const hardwareInfo = `
    CPU Information:
    Manufacturer: ${cpu.manufacturer}
`;

  document.getElementById("hardware-info").textContent = hardwareInfo;
}

getHardwareInfo;
