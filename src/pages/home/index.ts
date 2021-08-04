export function initPageIndex(params) {
  const div = document.createElement("div");
  div.className = "container-home";
  div.innerHTML = `
  <div class="home__container-title">
  <my-text type="title" class="home__title">Piedra, Papel o Tijera</my-text>
  </div> 
  <div class="home__container-button">
  <my-button class="home__button">Empezar</my-button>
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
    params.goTo("/instructions");
  });
  return div;
}
