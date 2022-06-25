customElements.define(
  "my-button",
  class Button extends HTMLElement {
    shadow: ShadowRoot;
    text: string;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.text = this.textContent;
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
           height:100%;
           background-color: #006CFC;
           border: 10px solid #001997;
           border-radius: 10px;
           color: white;
           cursor:pointer;
           }
           button:hover{
            background-color: #006CFC;
            background-color: #008DFC
           }
          `;
      const buttonEl = document.createElement("button");
      buttonEl.classList.add("button");
      buttonEl.textContent = this.text;
      this.shadow.appendChild(buttonEl);
      this.shadow.appendChild(style);
    }
  }
);
