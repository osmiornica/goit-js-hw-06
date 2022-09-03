window.addEventListener("load", function () {
  let items = document.getElementsByClassName("item");
  console.log("Number of categories = " + items.length);
  console.log(""); // blank line to separate outputs, as in required output
  for (const item of items) {
    let catName = null;
    let elements = null;
    for (const chld of item.children) {
      if (chld.tagName.toLowerCase() === "h2") {
        catName = chld.innerText;
      }
      if (chld.tagName.toLowerCase() === "ul") {
        elements = chld.children.length;
      }
    }
    if (catName === null || elements === null) console.log("ERROR!");
    console.log("Category: " + catName);
    console.log("Elements " + elements);
    console.log(""); // blank line to separate outputs, as in required output
  }
});
