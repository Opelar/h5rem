(function(root, doc) {
  function changeFontSize() {
    var screeWidth = window.screen.width;
    doc.documentElement.style.fontSize = screeWidth / 10 + "px";
  }
  changeFontSize();
  addEventListener("resize", changeFontSize, false);
})(window, document);
