customElements.define(
  "my-button",
  class Button extends HTMLElement {
    shadow: ShadowRoot;
    text: string;
    color: string;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.text = this.textContent;
      this.color = this.getAttribute("color");
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
           .button{
           font-family:inherit;
           font-size: 45px;
           width:100%;
           height:87px;
           background-color: #006CFC;
           border: 10px solid #001997;
           border-radius: 10px;
           color: white;
           }
           .button.red{
            background-color:#ff3e3e;
            border: 10px solid #a82c2c;
           }
          `;
      const buttonEl = document.createElement("button");
      buttonEl.classList.add("button");
      if (this.color == "red") {
        buttonEl.classList.add("red");
      }
      buttonEl.textContent = this.text;
      this.shadow.appendChild(buttonEl);
      this.shadow.appendChild(style);
    }
  }
);
