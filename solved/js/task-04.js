var counter = 0;

window.addEventListener("load", function () {
  let md = document.getElementById("counter");
  for (let child of md.children) {
    if (child.tagName.toLowerCase() === "button") {
      const a = child.dataset.action;
      if (a === "increment") {
        child.addEventListener("click", function () {
          counter++;
          document.getElementById("value").innerText = counter;
        });
      }
      if (a === "decrement") {
        child.addEventListener("click", function () {
          counter--;
          document.getElementById("value").innerText = counter;
        });
      }
    }
  }
});
