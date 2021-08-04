const imgpiedra = require("url:../../img/piedra.svg");
const imgpapel = require("url:../../img/papel.svg");
const imgtijera = require("url:../../img/tijera.svg");

customElements.define(
  "my-play",
  class Play extends HTMLElement {
    shadow: ShadowRoot;
    type: String;
    rotate: boolean;
    imgpiedra: string;
    imgtijera: string;
    imgpapel: string;
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
               .play{
                   width:100%;
                   height:100%;
               }
              .img{
                  width:100%;
                  height:100%;
              }
              .rotate{
                transform: rotate(-180deg);
              }
              `;
      const playEl = document.createElement("div");
      playEl.classList.add("play");

      //condicionales que eligen la imagen correspondiente a cada tipo de jugada
      if (this.type == "piedra") {
        const imgPlayEl = document.createElement("img");
        imgPlayEl.className = "img";
        imgPlayEl.src = imgpiedra;
        playEl.appendChild(imgPlayEl);
      }
      if (this.type == "tijera") {
        const imgPlayEl = document.createElement("img");
        imgPlayEl.className = "img";
        imgPlayEl.src = imgtijera;
        playEl.appendChild(imgPlayEl);
      }
      if (this.type == "papel") {
        const imgPlayEl = document.createElement("img");
        imgPlayEl.className = "img";
        imgPlayEl.src = imgpapel;
        playEl.appendChild(imgPlayEl);
      }
      if (this.rotate) {
        playEl.classList.add("rotate");
      }
      this.shadow.appendChild(playEl);
      this.shadow.appendChild(style);
    }
  }
);
