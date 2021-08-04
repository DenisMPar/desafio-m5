customElements.define(
  "my-score",
  class Score extends HTMLElement {
    shadow: ShadowRoot;

    playerScore: string;
    computerScore: string;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.playerScore = this.getAttribute("player");
      this.computerScore = this.getAttribute("computer");
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
               *{
                box-sizing:border-box;
                }
               .score{
                 padding:10px;
                width: 100%;
                height: 100%;
                background-color: #FFFFFF;
                border: 10px solid #000000; 
                border-radius: 10px;
                display:flex;
                flex-direction: column;
                align-items:center;
                justify-content:center;
               }
               .title{
                font-size: inherit;
                margin:0;
                margin-bottom:15px;
                text-decoration:underline;
               }
               .result{
                   display:block;
                font-size: inherit;
                margin:0;
                text-align:right;
               }
              `;
      const scoreEl = document.createElement("div");
      scoreEl.classList.add("score");
      scoreEl.innerHTML = `
      <h4 class="title">Score</h4>
      <div>
      <span class="result">Vos: ${this.playerScore}</span>
      <span class="result">Máquina: ${this.computerScore}</span>
      </div>
      `;
      this.shadow.appendChild(scoreEl);
      this.shadow.appendChild(style);
    }
  }
);
