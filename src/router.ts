import { initPageGame } from "./pages/game";
import { initPageIndex } from "./pages/home";
import { initPageInstructions } from "./pages/instructions";
import { initPageResultWin } from "./pages/result-win";
import { initPageResultLose } from "./pages/result-lose";
const routes = [
  {
    path: /home/,
    handler: initPageIndex,
  },
  {
    path: /instructions/,
    handler: initPageInstructions,
  },
  {
    path: /game/,
    handler: initPageGame,
  },
  {
    path: /result\/win/,
    handler: initPageResultWin,
  },
  {
    path: /result\/lose/,
    handler: initPageResultLose,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route) == true) {
        const el = r.handler({ goTo: goTo });
        container.firstChild?.remove();
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/desafio-m5/") {
    goTo("/home");
  } else {
    handleRoute(location.pathname.replace("/desafio-m5", ""));
  }
  window.onpopstate = () => {
    handleRoute(location.pathname.replace("/desafio-m5", ""));
  };
}
