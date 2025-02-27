import globalState from "@/GlobalController/GlobalState";

window.addEventListener("DOMContentLoaded", async function () {
  globalState.onReady();
});

window.addEventListener("load", async function () {
  globalState.onLoad();
});

window.addEventListener("resize", async function () {
  globalState.onResize();
});

window.requestAnimationFrame(scrollEvent);

function scrollEvent () {
  window.addEventListener("scroll", async function() {
    globalState.onScroll();
  })
}
