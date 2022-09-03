window.addEventListener("load", function () {
  const el = document.getElementById("font-size-control");
  const cb = function () {
    document.getElementById("text").style.fontSize = el.value + "px";
  };
  cb();
  el.addEventListener("input", cb);
});
