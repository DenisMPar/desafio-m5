import { state } from "../../state";
export function initPageResultWin(params) {
  const lastState = state.getState();
  const game = {
    computerPlay: lastState.currentGame.computerPlay,
    miPlay: lastState.currentGame.miPlay,
  };
  state.setHistory(game);
  const score = state.historyResults();
  const div = document.createElement("div");
  div.classList.add("container-result-win");
  div.classList.add("animate__animated");
  div.classList.add("animate__fadeIn");
  div.innerHTML = `
  <div class="result-win__background">
  </div>  
  <div class="result__container-result">
  <my-result type="win">Ganaste</my-result>
  </div>
  <div class="result__container-score">
  <my-score computer="${score.computer}" player="${score.player}"></my-score>
  </div>
  <div class="result__container-button">
  <my-button>Volver a jugar</my-button>
  </div>
  `;
  const buttonEl = div.querySelector("my-button");
  buttonEl.addEventListener("click", (e) => {
    e.preventDefault;
    params.goTo("/game");
  });
  return div;
}
