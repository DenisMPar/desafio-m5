!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequire6f0b;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){let t=a[e];delete a[e];let i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){a[e]=t},t.parcelRequire6f0b=i),i.register("3OOJ5",(function(t,n){var a,i;e(t.exports,"resolve",(()=>a),(e=>a=e)),e(t.exports,"register",(()=>i),(e=>i=e));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},a=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("3OOJ5").register(JSON.parse('{"2DFqQ":"index.b239d63a.js","4V9f0":"Star-lose.c6180098.png","63jLw":"Star-win.02d44708.png","61WpP":"piedra.578f3049.svg","2Oq9a":"papel.411bce94.svg","44GbG":"tijera.0403a6bb.svg"}')),customElements.define("my-text",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type"),this.text=this.textContent}connectedCallback(){this.render()}render(){const e=document.createElement("style");if(e.innerHTML="\n         .text{\n            font-family: inherit;\n            font-weight: 300;\n            font-size: inherit;\n            text-align: center;\n            margin:0;\n         }\n         .title{\n           margin:0;\n            font-weight: 400;\n            font-size: inherit;\n            color: #009048;\n         }\n        ","text"===this.type){const e=document.createElement("p");e.className="text",e.textContent=this.text,this.shadow.appendChild(e)}if("title"===this.type){const e=document.createElement("h1");e.className="title",e.textContent=this.text,this.shadow.appendChild(e)}this.shadow.appendChild(e)}}),customElements.define("my-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.text=this.textContent,this.color=this.getAttribute("color")}connectedCallback(){this.render()}render(){const e=document.createElement("style");e.innerHTML="\n           .button{\n           font-family:inherit;\n           font-size: 45px;\n           width:100%;\n           height:87px;\n           background-color: #006CFC;\n           border: 10px solid #001997;\n           border-radius: 10px;\n           color: white;\n           }\n           .button.red{\n            background-color:#ff3e3e;\n            border: 10px solid #a82c2c;\n           }\n          ";const t=document.createElement("button");t.classList.add("button"),"red"==this.color&&t.classList.add("red"),t.textContent=this.text,this.shadow.appendChild(t),this.shadow.appendChild(e)}}),i.register("7KTGs",(function(e,t){e.exports=i("31oBo").getBundleURL()+i("3XRD4")("2DFqQ","4V9f0")})),i.register("31oBo",(function(t,n){var a;e(t.exports,"getBundleURL",(()=>a),(e=>a=e));var i=null;function r(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(){return i||(i=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return r(e[0])}return"/"}()),i}})),i.register("3XRD4",(function(e,t){"use strict";var n=i("3OOJ5").resolve;function a(e){if(""===e)return".";var t="/"===e[e.length-1]?e.slice(0,e.length-1):e,n=t.lastIndexOf("/");return-1===n?".":t.slice(0,n)}function r(e,t){if(e===t)return"";var n=e.split("/");"."===n[0]&&n.shift();var a,i,r=t.split("/");for("."===r[0]&&r.shift(),a=0;(a<r.length||a<n.length)&&null==i;a++)n[a]!==r[a]&&(i=a);var s=[];for(a=0;a<n.length-i;a++)s.push("..");return r.length>i&&s.push.apply(s,r.slice(i)),s.join("/")}e.exports=function(e,t){return r(a(n(e)),n(t))},e.exports._dirname=a,e.exports._relative=r})),i.register("uxqJK",(function(e,t){e.exports=i("31oBo").getBundleURL()+i("3XRD4")("2DFqQ","63jLw")})),customElements.define("my-result",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.text=this.textContent,this.type=this.getAttribute("type")}connectedCallback(){this.render()}render(){const e=i("7KTGs"),t=i("uxqJK"),n=document.createElement("style");n.innerHTML=`\n            *{ \n              box-sizing: border-box;\n            }\n             .result{\n                 width:254px;\n                 height:259px;\n                font-family: inherit;\n                font-size: 55px;\n                color:white;\n                display: flex;\n                align-items: center;\n                justify-content:center;\n                text-align: center;\n\n             }\n             .result.lose{\n                background-image:url(${e});\n             }\n             .result.win{\n                background-image:url(${t});\n             }\n            `;const a=document.createElement("div");a.classList.add("result"),a.textContent=this.text,"lose"==this.type&&a.classList.add("lose"),"win"==this.type&&a.classList.add("win"),this.shadow.appendChild(a),this.shadow.appendChild(n)}}),customElements.define("my-score",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.playerScore=this.getAttribute("player"),this.computerScore=this.getAttribute("computer")}connectedCallback(){this.render()}render(){const e=document.createElement("style");e.innerHTML="\n               *{\n                box-sizing:border-box;\n                }\n               .score{\n                 padding:10px;\n                width: 100%;\n                height: 100%;\n                background-color: #FFFFFF;\n                border: 10px solid #000000; \n                border-radius: 10px;\n                display:flex;\n                flex-direction: column;\n                align-items:center;\n                justify-content:center;\n               }\n               .title{\n                font-size: inherit;\n                margin:0;\n                margin-bottom:15px;\n                text-decoration:underline;\n               }\n               .result{\n                   display:block;\n                font-size: inherit;\n                margin:0;\n                text-align:right;\n               }\n              ";const t=document.createElement("div");t.classList.add("score"),t.innerHTML=`\n      <h4 class="title">Score</h4>\n      <div>\n      <span class="result">Vos: ${this.playerScore}</span>\n      <span class="result">Máquina: ${this.computerScore}</span>\n      </div>\n      `,this.shadow.appendChild(t),this.shadow.appendChild(e)}}),i.register("40UOD",(function(e,t){e.exports=i("31oBo").getBundleURL()+i("3XRD4")("2DFqQ","61WpP")})),i.register("6MYu8",(function(e,t){e.exports=i("31oBo").getBundleURL()+i("3XRD4")("2DFqQ","2Oq9a")})),i.register("67XdK",(function(e,t){e.exports=i("31oBo").getBundleURL()+i("3XRD4")("2DFqQ","44GbG")})),customElements.define("my-play",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.type=this.getAttribute("type"),this.rotate=this.hasAttribute("rotate")}connectedCallback(){this.render()}render(){const e=i("40UOD"),t=i("6MYu8"),n=i("67XdK"),a=document.createElement("style");a.innerHTML="\n               .play{\n                   width:100%;\n                   height:100%;\n               }\n              .img{\n                  width:100%;\n                  height:100%;\n              }\n              .rotate{\n                transform: rotate(-180deg);\n              }\n              ";const r=document.createElement("div");if(r.classList.add("play"),"piedra"==this.type){const t=document.createElement("img");t.className="img",t.src=e,r.appendChild(t)}if("tijera"==this.type){const e=document.createElement("img");e.className="img",e.src=n,r.appendChild(e)}if("papel"==this.type){const e=document.createElement("img");e.className="img",e.src=t,r.appendChild(e)}this.rotate&&r.classList.add("rotate"),this.shadow.appendChild(r),this.shadow.appendChild(a)}});const r={data:{currentGame:{computerPlay:"",miPlay:""},history:[]},listeners:[],setGame(e){const t=this.getState();t.currentGame.miPlay=e;const n=Math.floor(-3*Math.random())+3,a=[{random:0,play:"piedra"},{random:1,play:"papel"},{random:2,play:"tijera"}];for(const e of a)e.random==n&&(t.currentGame.computerPlay=e.play);this.setState(t)},setHistory(e){const t=this.getState();t.history.push(e),this.setState(t)},historyResults(){const e=r.getState(),t={computer:0,player:0};for(const n of e.history){const e=r.whoWins(n.miPlay,n.computerPlay);0==e&&t.computer++,1==e&&t.player++}return t},getState(){return this.data},setState(e){this.data=e;for(const e of this.listeners)e();localStorage.setItem("state",JSON.stringify(e))},whoWins(e,t){let n=0;const a=[{myPlay:"piedra",computerPlay:"tijera"},{myPlay:"papel",computerPlay:"piedra"},{myPlay:"tijera",computerPlay:"papel"}];for(const i of a)i.myPlay==e&&i.computerPlay==t&&(n=1);return e==t&&(n=2),n},subscribe(e){this.listeners.push(e)}};!function(){const e=localStorage.getItem("state");e&&r.setState(JSON.parse(e))}();const s=[{path:/piedra-papel-tijera'\/home/,handler:function(e){const t=document.createElement("div");return t.className="container-home",t.innerHTML='\n  <div class="home__container-title">\n  <my-text type="title" class="home__title">Piedra, Papel o Tijera</my-text>\n  </div> \n  <div class="home__container-button">\n  <my-button class="home__button">Empezar</my-button>\n  </div>\n <div class="home__container-plays">\n <div class="home__container-play-piedra">\n <my-play type="piedra"></my-play>\n </div>\n <div class="home__container-play-tijera">\n <my-play type="tijera"></my-play>\n </div>\n <div class="home__container-play-papel">\n <my-play type="papel"></my-play>\n </div>\n </div>\n  ',t.querySelector("my-button").addEventListener("click",(()=>{e.goTo("/instructions")})),t}},{path:/piedra-papel-tijera'\/instructions/,handler:function(e){const t=document.createElement("div");return t.className="container-instructions",t.innerHTML='\n  <div class="inst__container-title">\n  <my-text type="text" class="inst__text">Presioná jugar\n  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>\n  </div>\n  <div class="instructions__container-button">\n  <my-button>¡Jugar!</my-button>\n  </div>\n <div class="home__container-plays">\n <div class="home__container-play-piedra">\n <my-play type="piedra"></my-play>\n </div>\n <div class="home__container-play-tijera">\n <my-play type="tijera"></my-play>\n </div>\n <div class="home__container-play-papel">\n <my-play type="papel"></my-play>\n </div>\n </div>\n  ',t.querySelector("my-button").addEventListener("click",(()=>{e.goTo("/game")})),t}},{path:/piedra-papel-tijera'\/game/,handler:function(e){const t=document.createElement("div");t.className="container-game",t.innerHTML='\n  <div class="game__container-count">\n  </div>\n <div class="game__container-plays">\n <div class="game__container-play-piedra">\n <my-play type="piedra"></my-play>\n </div>\n <div class="game__container-play-tijera">\n <my-play type="tijera"></my-play>\n </div>\n <div class="game__container-play-papel">\n <my-play type="papel"></my-play>\n </div>\n </div>\n  ';const n=t.querySelector(".game__container-count");let a=3,i=!1;const s=setInterval((()=>{n.innerHTML="";const e=document.createElement("div");e.classList.add("animate__animated"),e.classList.add("animate__fadeInDown"),e.textContent=a.toString(),n.appendChild(e),a--,a<0&&window.clearInterval(s)}),1e3),o=t.querySelectorAll("my-play");for(const e of o)e.addEventListener("click",(e=>{const t=e.target;r.setGame(t.type),setTimeout((()=>{l()}),500),i=!0}));function l(){const n=r.getState(),a=r.whoWins(n.currentGame.miPlay,n.currentGame.computerPlay);t.innerHTML="",t.innerHTML=`\n    <div class= "game__container-result">\n    <div class="game__container-result-play animate__animated animate__fadeInDown">\n    <my-play type="${n.currentGame.computerPlay}" class="game__pc-play " rotate></my-play>\n    </div>\n    <div class="game__container-result-play animate__animated animate__fadeInUp">\n    <my-play type="${n.currentGame.miPlay}" class="game__player-play"></my-play>\n    </div>\n    </div>\n    `,setTimeout((()=>{0==a&&e.goTo("/piedra-papel-tijera/result/lose"),1==a&&e.goTo("/piedra-papel-tijera/result/win"),2==a&&e.goTo("/piedra-papel-tijera/game")}),1600)}return t}},{path:/piedra-papel-tijera'\/result\/win/,handler:function(e){const t=r.getState(),n={computerPlay:t.currentGame.computerPlay,miPlay:t.currentGame.miPlay};r.setHistory(n);const a=r.historyResults(),i=document.createElement("div");return i.classList.add("container-result-win"),i.classList.add("animate__animated"),i.classList.add("animate__fadeIn"),i.innerHTML=`\n  <div class="result-win__background">\n  </div>  \n  <div class="result__container-result">\n  <my-result type="win">Ganaste</my-result>\n  </div>\n  <div class="result__container-score">\n  <my-score computer="${a.computer}" player="${a.player}"></my-score>\n  </div>\n  <div class="result__container-button">\n  <my-button>Volver a jugar</my-button>\n  </div>\n  `,i.querySelector("my-button").addEventListener("click",(t=>{t.preventDefault,e.goTo("/game")})),i}},{path:/piedra-papel-tijera'\/result\/lose/,handler:function(e){const t=r.getState(),n={computerPlay:t.currentGame.computerPlay,miPlay:t.currentGame.miPlay};r.setHistory(n);const a=r.historyResults(),i=document.createElement("div");return i.classList.add("animate__animated"),i.classList.add("animate__fadeIn"),i.classList.add("container-result-lose"),i.innerHTML=`\n    <div class="result-lose__background">\n    </div>  \n    <div class="result__container-result">\n    <my-result type="lose">Perdiste</my-result>\n    </div>\n    <div class="result__container-score">\n    <my-score computer="${a.computer}" player="${a.player}"></my-score>\n    </div>\n    <div class="result__container-button">\n    <my-button>Volver a jugar</my-button>\n    </div>\n    `,i.querySelector("my-button").addEventListener("click",(t=>{t.preventDefault,e.goTo("/game")})),i}}];!function(e){function t(e){history.pushState({},"",e),n(e)}function n(n){for(const a of s)if(1==a.path.test(n)){const n=a.handler({goTo:t});e.firstChild?.remove(),e.appendChild(n)}}"/piedra-papel-tijera/"==location.pathname?t("/piedra-papel-tijera/home"):n(location.pathname),window.onpopstate=()=>{n(location.pathname)}}(document.querySelector(".root"))}();
//# sourceMappingURL=index.b239d63a.js.map
