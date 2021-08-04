import "./components/text";
import "./components/button";
import "./components/result";
import "./components/score";
import "./components/play";
import { initRouter } from "./router";

(function () {
  const rootEl = document.querySelector(".root");
  initRouter(rootEl);
})();
