const nav = document.getElementById("floating-nav");
let offsetX, offsetY, isDown = false;

nav.addEventListener("mousedown", (e) => {
  isDown = true;
  offsetX = e.clientX - nav.offsetLeft;
  offsetY = e.clientY - nav.offsetTop;
});

document.addEventListener("mouseup", () => isDown = false);

document.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  nav.style.left = `${e.clientX - offsetX}px`;
  nav.style.top = `${e.clientY - offsetY}px`;
});
