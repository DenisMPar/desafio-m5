import { state } from "../../state";
export function initPageGame(params) {
  const div = document.createElement("div");
  div.className = "container-game";
  div.innerHTML = `
  <div class="game__container-count">
  </div>
 <div class="game__container-plays">
 <div class="game__container-play-piedra">
 <my-play type="piedra"></my-play>
 </div>
 <div class="game__container-play-tijera">
 <my-play type="tijera"></my-play>
 </div>
 <div class="game__container-play-papel">
 <my-play type="papel"></my-play>
 </div>
 </div>
  `;

  function showTimeOutPage() {
    div.innerHTML = ``;
    div.innerHTML = `
    <my-text type="title" class="game__time-over-text">¡Ups! Se acabó tu tiempo</my-text>
    <div class="game__container-buttons">
    <my-button class = "game__try-again-button">Reintentar</my-button>
    <my-button color="red" class = "game__exit-button">Salir</my-button>
    </div>
    `;
    const tryButtonEl = div.querySelector(".game__try-again-button");
    tryButtonEl.addEventListener("click", () => {
      params.goTo("/game");
    });
    const exitButtonEl = div.querySelector(".game__exit-button");
    exitButtonEl.addEventListener("click", () => {
      params.goTo("/home");
    });
  }

  //Crea un intervalo de cuenta regresiva desde 3 a 1
  //usa un auxiliar click para mostrar un pagina de timeout si se acaba el tiempo
  //y el player no eligio nada
  const contCount = div.querySelector(".game__container-count");
  let contador = 3;
  let click = false;
  const intervalId = setInterval(() => {
    contCount.innerHTML = ``;
    const countDiv = document.createElement("div");
    countDiv.classList.add("animate__animated");
    countDiv.classList.add("animate__fadeInDown");
    countDiv.textContent = contador.toString();
    contCount.appendChild(countDiv);

    contador--;
    //cancela el intervalo e imprime la pantalla timeout
    if (contador < 0) {
      window.clearInterval(intervalId);
      if (click == false) {
        showTimeOutPage();
      }
    }
  }, 1000);

  //agrega el evento click a las posibles jugadas
  //El evento guarda las jugadas en el state con el metodo setgame
  //tiene un settimeout para se alcance a ver el cambio de estilo de la jugada elegida
  //cambia el estado de click para evitar la pagina de timeout
  const playsEls = div.querySelectorAll("my-play");
  for (const p of playsEls) {
    p.addEventListener("click", (e) => {
      const target = e.target as any;
      state.setGame(target.type);
      setTimeout(() => {
        showPlays();
      }, 500);
      click = true;
    });
  }

  //muestra la jugada del player y la de la pc
  //luego verifica quien es el ganador para redirigir la pagina al resultado
  function showPlays() {
    const currentState = state.getState();
    const winner = state.whoWins(
      currentState.currentGame.miPlay,
      currentState.currentGame.computerPlay
    );
    div.innerHTML = ``;
    div.innerHTML = `
    <div class= "game__container-result">
    <div class="game__container-result-play animate__animated animate__fadeInDown">
    <my-play type="${currentState.currentGame.computerPlay}" class="game__pc-play " rotate></my-play>
    </div>
    <div class="game__container-result-play animate__animated animate__fadeInUp">
    <my-play type="${currentState.currentGame.miPlay}" class="game__player-play"></my-play>
    </div>
    </div>
    `;
    setTimeout(() => {
      if (winner == 0) {
        params.goTo("/result/lose");
      }
      if (winner == 1) {
        params.goTo("/result/win");
      }
      if (winner == 2) {
        params.goTo("/game");
      }
    }, 1600);
  }

  return div;
}
