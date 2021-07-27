document.addEventListener("DOMContentLoaded", function () {
    requirejs(["lodash"], function (lodash) {
      //const headerEl = document.getElementById("text-block-4");
      //headerEl.textContent = lodash.upperCase("hello world");
      x = document.getElementsByClassName("text-block-4");
      x[0].innerText = lodash.upperCase("hello world");
    });
  });