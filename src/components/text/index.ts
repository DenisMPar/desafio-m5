customElements.define(
  "my-text",
  class Text extends HTMLElement {
    shadow: ShadowRoot;
    type: String;
    text: string;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.type = this.getAttribute("type" || "text");
      this.text = this.textContent;
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
         .text{
            font-family: inherit;
            font-weight: 300;
            font-size: inherit;
            text-align: center;
            margin:0;
         }
         .title{
           margin:0;
            font-weight: 400;
            font-size: inherit;
            color: #009048;
         }
        `;
      if (this.type === "text") {
        const textEl = document.createElement("p");
        textEl.className = "text";
        textEl.textContent = this.text;
        this.shadow.appendChild(textEl);
      }
      if (this.type === "title") {
        const titleEl = document.createElement("h1");
        titleEl.className = "title";
        titleEl.textContent = this.text;
        this.shadow.appendChild(titleEl);
      }
      this.shadow.appendChild(style);
    }
  }
);
