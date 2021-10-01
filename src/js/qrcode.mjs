const url = "https://ideiasdinamicas.com";
const qrcodeArea = document.getElementById("qrcode-area");

new QRCode(qrcodeArea, {
  text: url,
  width: 128,
  height: 128,
  colorDark: "#000000",
  colorLight: "#217629",
  correctLevel: QRCode.CorrectLevel.H,
});
