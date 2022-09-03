function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

window.addEventListener("load", function () {
  const body = document.querySelector("body");
  const out = document.querySelector("body > div.widget > p > span.color");
  const btn = document.querySelector("body > div.widget > button.change-color");
  btn.addEventListener("click", function () {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    out.innerText = color;
  });
});
