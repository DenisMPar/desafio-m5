const imgpiedra = require("url:../../img/piedra.svg");
const imgpapel = require("url:../../img/papel.svg");
const imgtijera = require("url:../../img/tijera.svg");

customElements.define(
  "my-play",
  class Play extends HTMLElement {
    shadow: ShadowRoot;
    type: String;
    rotate: boolean;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.type = this.getAttribute("type");
      this.rotate = this.hasAttribute("rotate");
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      *{
        
      }
               .play{
                overflow: auto
                   width:100%;
                   height:100%;
               }
              .rotate{
                transform: rotate(-180deg);
              }
              `;
      const playEl = document.createElement("img");
      playEl.classList.add("play");
      //condicionales que eligen la imagen correspondiente a cada tipo de jugada
      if (this.type == "piedra") {
        playEl.src = imgpiedra;
      }
      if (this.type == "papel") {
        playEl.src = imgpapel;
      }
      if (this.type == "tijera") {
        playEl.src = imgtijera;
      }
      if (this.rotate) {
        playEl.classList.add("rotate");
      }
      this.shadow.appendChild(playEl);
      this.shadow.appendChild(style);
    }
  }
);
