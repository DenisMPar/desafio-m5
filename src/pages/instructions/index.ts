export function initPageInstructions(params) {
  const div = document.createElement("div");
  div.className = "container-instructions";
  div.innerHTML = `
  <div class="inst__container-title">
  <my-text type="text" class="inst__text">Presioná jugar
  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
  </div>
  <div class="instructions__container-button">
  <my-button>¡Jugar!</my-button>
  </div>
 <div class="home__container-plays">
 <div class="home__container-play-piedra">
 <my-play type="piedra"></my-play>
 </div>
 <div class="home__container-play-tijera">
 <my-play type="tijera"></my-play>
 </div>
 <div class="home__container-play-papel">
 <my-play type="papel"></my-play>
 </div>
 </div>
  `;
  const buttonEl = div.querySelector("my-button");
  buttonEl.addEventListener("click", () => {
    params.goTo("/game");
  });
  return div;
}
