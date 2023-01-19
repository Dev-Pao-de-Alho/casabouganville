// Carrosel
document.getElementById("btnRight").addEventListener("click", () => {
  document.getElementById("images").style.transform = "translateX(-100%)";
});

document.getElementById("btnLeft").addEventListener("click", () => {
  document.getElementById("images").style.transform = "translateX(-0%)";
});

document.getElementById("first").addEventListener("click", () => {
  document.getElementById("images").style.transform = "translateX(-0%)";
});

document.getElementById("second").addEventListener("click", () => {
  document.getElementById("images").style.transform = "translateX(-100%)";
});

document.getElementById("third").addEventListener("click", () => {
  document.getElementById("images").style.transform = "translateX(-200%)";
});

