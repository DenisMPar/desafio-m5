!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},s=t.parcelRequire6f0b;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in a){let t=a[e];delete a[e];let s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){a[e]=t},t.parcelRequire6f0b=s),s.register("3OOJ5",(function(t,n){var a,s;e(t.exports,"register",(()=>a),(e=>a=e)),e(t.exports,"resolve",(()=>s),(e=>s=e));var i={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},s=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("3OOJ5").register(JSON.parse('{"2DFqQ":"index.15162b14.js","4V9f0":"Star-lose.c6180098.png","63jLw":"Star-win.02d44708.png","61WpP":"piedra.578f3049.svg","2Oq9a":"papel.411bce94.svg","44GbG":"tijera.0403a6bb.svg"}')),customElements.define("my-text",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type"),this.text=this.textContent}connectedCallback(){this.render()}render(){const e=document.createElement("style");if(e.innerHTML="\n         .text{\n            font-family: inherit;\n            font-weight: 300;\n            font-size: inherit;\n            text-align: center;\n            margin:0;\n         }\n         .title{\n           margin:0;\n            font-weight: 400;\n            font-size: inherit;\n            color: #009048;\n         }\n        ","text"===this.type){const e=document.createElement("p");e.className="text",e.textContent=this.text,this.shadow.appendChild(e)}if("title"===this.type){const e=document.createElement("h1");e.className="title",e.textContent=this.text,this.shadow.appendChild(e)}this.shadow.appendChild(e)}}),customElements.define("my-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.text=this.textContent,this.color=this.getAttribute("color")}connectedCallback(){this.render()}render(){const e=document.createElement("style");e.innerHTML="\n           .button{\n           font-family:inherit;\n           font-size: 45px;\n           width:100%;\n           height:87px;\n           background-color: #006CFC;\n           border: 10px solid #001997;\n           border-radius: 10px;\n           color: white;\n           }\n           .button.red{\n            background-color:#ff3e3e;\n            border: 10px solid #a82c2c;\n           }\n          ";const t=document.createElement("button");t.classList.add("button"),"red"==this.color&&t.classList.add("red"),t.textContent=this.text,this.shadow.appendChild(t),this.shadow.appendChild(e)}}),s.register("7KTGs",(function(e,t){e.exports=s("31oBo").getBundleURL()+s("3XRD4")("2DFqQ","4V9f0")})),s.register("31oBo",(function(t,n){var a;e(t.exports,"getBundleURL",(()=>a),(e=>a=e));var s=null;function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(){return s||(s=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[0])}return"/"}()),s}})),s.register("3XRD4",(function(e,t){"use strict";var n=s("3OOJ5").resolve;function a(e){if(""===e)return".";var t="/"===e[e.length-1]?e.slice(0,e.length-1):e,n=t.lastIndexOf("/");return-1===n?".":t.slice(0,n)}function i(e,t){if(e===t)return"";var n=e.split("/");"."===n[0]&&n.shift();var a,s,i=t.split("/");for("."===i[0]&&i.shift(),a=0;(a<i.length||a<n.length)&&null==s;a++)n[a]!==i[a]&&(s=a);var r=[];for(a=0;a<n.length-s;a++)r.push("..");return i.length>s&&r.push.apply(r,i.slice(s)),r.join("/")}e.exports=function(e,t){return i(a(n(e)),n(t))},e.exports._dirname=a,e.exports._relative=i})),s.register("uxqJK",(function(e,t){e.exports=s("31oBo").getBundleURL()+s("3XRD4")("2DFqQ","63jLw")})),customElements.define("my-result",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.text=this.textContent,this.type=this.getAttribute("type")}connectedCallback(){this.render()}render(){const e=s("7KTGs"),t=s("uxqJK"),n=document.createElement("style");n.innerHTML=`\n            *{ \n              box-sizing: border-box;\n            }\n             .result{\n                 width:254px;\n                 height:259px;\n                font-family: inherit;\n                font-size: 55px;\n                color:white;\n                display: flex;\n                align-items: center;\n                justify-content:center;\n                text-align: center;\n\n             }\n             .result.lose{\n                background-image:url(${e});\n             }\n             .result.win{\n                background-image:url(${t});\n             }\n            `;const a=document.createElement("div");a.classList.add("result"),a.textContent=this.text,"lose"==this.type&&a.classList.add("lose"),"win"==this.type&&a.classList.add("win"),this.shadow.appendChild(a),this.shadow.appendChild(n)}}),customElements.define("my-score",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.playerScore=this.getAttribute("player"),this.computerScore=this.getAttribute("computer")}connectedCallback(){this.render()}render(){const e=document.createElement("style");e.innerHTML="\n               *{\n                box-sizing:border-box;\n                }\n               .score{\n                 padding:10px;\n                width: 100%;\n                height: 100%;\n                background-color: #FFFFFF;\n                border: 10px solid #000000; \n                border-radius: 10px;\n                display:flex;\n                flex-direction: column;\n                align-items:center;\n                justify-content:center;\n               }\n               .title{\n                font-size: inherit;\n                margin:0;\n                margin-bottom:15px;\n                text-decoration:underline;\n               }\n               .result{\n                   display:block;\n                font-size: inherit;\n                margin:0;\n                text-align:right;\n               }\n              ";const t=document.createElement("div");t.classList.add("score"),t.innerHTML=`\n      <h4 class="title">Score</h4>\n      <div>\n      <span class="result">Vos: ${this.playerScore}</span>\n      <span class="result">Máquina: ${this.computerScore}</span>\n      </div>\n      `,this.shadow.appendChild(t),this.shadow.appendChild(e)}});var i;i=s("31oBo").getBundleURL()+s("3XRD4")("2DFqQ","61WpP");var r;r=s("31oBo").getBundleURL()+s("3XRD4")("2DFqQ","2Oq9a");var o;o=s("31oBo").getBundleURL()+s("3XRD4")("2DFqQ","44GbG"),customElements.define("my-play",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type"),this.rotate=this.hasAttribute("rotate")}connectedCallback(){this.render()}render(){const e=document.createElement("style");e.innerHTML="\n               .play{\n                   width:100%;\n                   height:100%;\n               }\n              .img{\n                  width:100%;\n                  height:100%;\n              }\n              .rotate{\n                transform: rotate(-180deg);\n              }\n              ";const t=document.createElement("div");if(t.classList.add("play"),"piedra"==this.type){const e=document.createElement("img");e.className="img",e.src=i,t.appendChild(e)}if("tijera"==this.type){const e=document.createElement("img");e.className="img",e.src=o,t.appendChild(e)}if("papel"==this.type){const e=document.createElement("img");e.className="img",e.src=r,t.appendChild(e)}this.rotate&&t.classList.add("rotate"),this.shadow.appendChild(t),this.shadow.appendChild(e)}});const l={data:{currentGame:{computerPlay:"",miPlay:""},history:[]},listeners:[],setGame(e){const t=this.getState();t.currentGame.miPlay=e;const n=Math.floor(-3*Math.random())+3,a=[{random:0,play:"piedra"},{random:1,play:"papel"},{random:2,play:"tijera"}];for(const e of a)e.random==n&&(t.currentGame.computerPlay=e.play);this.setState(t)},setHistory(e){const t=this.getState();t.history.push(e),this.setState(t)},historyResults(){const e=l.getState(),t={computer:0,player:0};for(const n of e.history){const e=l.whoWins(n.miPlay,n.computerPlay);0==e&&t.computer++,1==e&&t.player++}return t},getState(){return this.data},setState(e){this.data=e;for(const e of this.listeners)e();localStorage.setItem("state",JSON.stringify(e))},whoWins(e,t){let n=0;const a=[{myPlay:"piedra",computerPlay:"tijera"},{myPlay:"papel",computerPlay:"piedra"},{myPlay:"tijera",computerPlay:"papel"}];for(const s of a)s.myPlay==e&&s.computerPlay==t&&(n=1);return e==t&&(n=2),n},subscribe(e){this.listeners.push(e)}};!function(){const e=localStorage.getItem("state");e&&l.setState(JSON.parse(e))}();const c=[{path:/home/,handler:function(e){const t=document.createElement("div");return t.className="container-home",t.innerHTML='\n  <div class="home__container-title">\n  <my-text type="title" class="home__title">Piedra, Papel o Tijera</my-text>\n  </div> \n  <div class="home__container-button">\n  <my-button class="home__button">Empezar</my-button>\n  </div>\n <div class="home__container-plays">\n <div class="home__container-play-piedra">\n <my-play type="piedra"></my-play>\n </div>\n <div class="home__container-play-tijera">\n <my-play type="tijera"></my-play>\n </div>\n <div class="home__container-play-papel">\n <my-play type="papel"></my-play>\n </div>\n </div>\n  ',t.querySelector("my-button").addEventListener("click",(()=>{e.goTo("/instructions")})),t}},{path:/instructions/,handler:function(e){const t=document.createElement("div");return t.className="container-instructions",t.innerHTML='\n  <div class="inst__container-title">\n  <my-text type="text" class="inst__text">Presioná jugar\n  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>\n  </div>\n  <div class="instructions__container-button">\n  <my-button>¡Jugar!</my-button>\n  </div>\n <div class="home__container-plays">\n <div class="home__container-play-piedra">\n <my-play type="piedra"></my-play>\n </div>\n <div class="home__container-play-tijera">\n <my-play type="tijera"></my-play>\n </div>\n <div class="home__container-play-papel">\n <my-play type="papel"></my-play>\n </div>\n </div>\n  ',t.querySelector("my-button").addEventListener("click",(()=>{e.goTo("/game")})),t}},{path:/game/,handler:function(e){const t=document.createElement("div");t.className="container-game",t.innerHTML='\n  <div class="game__container-count">\n  </div>\n <div class="game__container-plays">\n <div class="game__container-play-piedra">\n <my-play type="piedra"></my-play>\n </div>\n <div class="game__container-play-tijera">\n <my-play type="tijera"></my-play>\n </div>\n <div class="game__container-play-papel">\n <my-play type="papel"></my-play>\n </div>\n </div>\n  ';const n=t.querySelector(".game__container-count");let a=3,s=!1;const i=setInterval((()=>{n.innerHTML="";const r=document.createElement("div");r.classList.add("animate__animated"),r.classList.add("animate__fadeInDown"),r.textContent=a.toString(),n.appendChild(r),a--,a<0&&(window.clearInterval(i),0==s&&(t.innerHTML="",t.innerHTML='\n    <my-text type="title" class="game__time-over-text">¡Ups! Se acabó tu tiempo</my-text>\n    <div class="game__container-buttons">\n    <my-button class = "game__try-again-button">Reintentar</my-button>\n    <my-button color="red" class = "game__exit-button">Salir</my-button>\n    </div>\n    ',t.querySelector(".game__try-again-button").addEventListener("click",(()=>{e.goTo("/game")})),t.querySelector(".game__exit-button").addEventListener("click",(()=>{e.goTo("/home")}))))}),1e3),r=t.querySelectorAll("my-play");for(const e of r)e.addEventListener("click",(e=>{const t=e.target;l.setGame(t.type),setTimeout((()=>{o()}),500),s=!0}));function o(){const n=l.getState(),a=l.whoWins(n.currentGame.miPlay,n.currentGame.computerPlay);t.innerHTML="",t.innerHTML=`\n    <div class= "game__container-result">\n    <div class="game__container-result-play animate__animated animate__fadeInDown">\n    <my-play type="${n.currentGame.computerPlay}" class="game__pc-play " rotate></my-play>\n    </div>\n    <div class="game__container-result-play animate__animated animate__fadeInUp">\n    <my-play type="${n.currentGame.miPlay}" class="game__player-play"></my-play>\n    </div>\n    </div>\n    `,setTimeout((()=>{0==a&&e.goTo("/result/lose"),1==a&&e.goTo("/result/win"),2==a&&e.goTo("/game")}),1600)}return t}},{path:/result\/win/,handler:function(e){const t=l.getState(),n={computerPlay:t.currentGame.computerPlay,miPlay:t.currentGame.miPlay};l.setHistory(n);const a=l.historyResults(),s=document.createElement("div");return s.classList.add("container-result-win"),s.classList.add("animate__animated"),s.classList.add("animate__fadeIn"),s.innerHTML=`\n  <div class="result-win__background">\n  </div>  \n  <div class="result__container-result">\n  <my-result type="win">Ganaste</my-result>\n  </div>\n  <div class="result__container-score">\n  <my-score computer="${a.computer}" player="${a.player}"></my-score>\n  </div>\n  <div class="result__container-button">\n  <my-button>Volver a jugar</my-button>\n  </div>\n  `,s.querySelector("my-button").addEventListener("click",(t=>{t.preventDefault,e.goTo("/game")})),s}},{path:/result\/lose/,handler:function(e){const t=l.getState(),n={computerPlay:t.currentGame.computerPlay,miPlay:t.currentGame.miPlay};l.setHistory(n);const a=l.historyResults(),s=document.createElement("div");return s.classList.add("animate__animated"),s.classList.add("animate__fadeIn"),s.classList.add("container-result-lose"),s.innerHTML=`\n    <div class="result-lose__background">\n    </div>  \n    <div class="result__container-result">\n    <my-result type="lose">Perdiste</my-result>\n    </div>\n    <div class="result__container-score">\n    <my-score computer="${a.computer}" player="${a.player}"></my-score>\n    </div>\n    <div class="result__container-button">\n    <my-button>Volver a jugar</my-button>\n    </div>\n    `,s.querySelector("my-button").addEventListener("click",(t=>{t.preventDefault,e.goTo("/game")})),s}}];!function(e){function t(e){history.pushState({},"",e),n(e)}function n(n){for(const a of c)if(1==a.path.test(n)){const n=a.handler({goTo:t});e.firstChild?.remove(),e.appendChild(n)}}"/desafio-m5/"==location.pathname?t("/home"):n(location.pathname.replace("/desafio-m5","")),window.onpopstate=()=>{n(location.pathname.replace("/desafio-m5",""))}}(document.querySelector(".root"))}();
//# sourceMappingURL=index.15162b14.js.map