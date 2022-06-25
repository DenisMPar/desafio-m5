type Jugada = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Jugada;
  miPlay: Jugada;
};

const state = {
  data: {
    currentGame: {
      computerPlay: "",
      miPlay: "",
    },
    history: [],
  },
  listeners: [],
  setGame(movePlayer: Jugada) {
    //jugada player
    const currentState = this.getState();
    currentState.currentGame.miPlay = movePlayer;
    this.setState(currentState);
  },
  setHistory(game: Game) {
    const currentState = this.getState();
    currentState.history.push(game);
    this.setState(currentState);
  },
  //calcula los resultados con las jugadas guardadas en history
  historyResults() {
    const lastState = state.getState();
    const score = {
      computer: 0,
      player: 0,
    };
    for (const i of lastState.history) {
      const resultado = state.whoWins(i.miPlay, i.computerPlay);
      if (resultado == 0) {
        score.computer++;
      }
      if (resultado == 1) {
        score.player++;
      }
    }
    return score;
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    localStorage.setItem("state", JSON.stringify(newState));
  },
  //calcula quien gano la partida. 0 para pc, 1 para player y 2 para empate
  whoWins(myPlay: Jugada, playerTwoPlay: Jugada) {
    let winner = 0;
    const jugadasGanadoras = [
      { myPlay: "piedra", playerTwoPlay: "tijera" },
      { myPlay: "papel", playerTwoPlay: "piedra" },
      { myPlay: "tijera", playerTwoPlay: "papel" },
    ];
    for (const j of jugadasGanadoras) {
      if (j.myPlay == myPlay && j.playerTwoPlay == playerTwoPlay) {
        winner = 1;
      }
    }
    if (myPlay == playerTwoPlay) {
      winner = 2;
    }
    return winner;
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};
//sincroniza el state con localstorage
(function () {
  const localState = localStorage.getItem("state");
  if (localState) {
    state.setState(JSON.parse(localState));
  }
})();
export { state };
