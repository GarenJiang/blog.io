parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AQoi":[function(require,module,exports) {

},{}],"US5u":[function(require,module,exports) {
var e=document.querySelector("#a>P"),t=1*localStorage.getItem("count")||0,n=document.querySelector("#a>.button1"),o=document.querySelector("#a>.button2"),c=document.querySelector("#a>.button3"),r=document.querySelector("#a>.button4");n.addEventListener("click",function(){t+=1,localStorage.setItem("count",t),e.innerHTML=t||0}),o.addEventListener("click",function(){t-=1,localStorage.setItem("count",t),e.innerHTML=t||0}),c.addEventListener("click",function(){t*=2,localStorage.setItem("count",t),e.innerHTML=t||0}),r.addEventListener("click",function(){t/=2,localStorage.setItem("count",t),e.innerHTML=t||0}),e.innerHTML=t||0;
},{}],"vZ5o":[function(require,module,exports) {
"use strict";require("./2.css");var e=document.querySelector("#b>p"),t=document.querySelector("#b>.div1"),c=document.querySelector("#b>.div2");e.textContent=localStorage.getItem("item")||"盖伦",t.addEventListener("click",function(){e.textContent="盖伦",localStorage.setItem("item","盖伦")}),c.addEventListener("click",function(){e.textContent="德莱尔斯",localStorage.setItem("item","德莱尔斯")});
},{"./2.css":"AQoi"}],"y8lT":[function(require,module,exports) {
"use strict";require("./3.css");var s=document.querySelector("#c>div");/right/.test(localStorage.getItem("class"))&&(s.classList.add("right"),s.classList.add("item")),s.addEventListener("click",function(){/right/.test(s.className)?(s.classList.remove("item"),s.classList.remove("right"),localStorage.setItem("class",s.className)):(s.classList.remove("item"),s.classList.add("right"),localStorage.setItem("class",s.className))});
},{"./3.css":"AQoi"}],"eWpN":[function(require,module,exports) {
"use strict";require("./4.css");
},{"./4.css":"AQoi"}],"Gpe8":[function(require,module,exports) {
"use strict";require("./reset.css"),require("./app1"),require("./app2"),require("./app3"),require("./app4");
},{"./reset.css":"AQoi","./app1":"US5u","./app2":"vZ5o","./app3":"y8lT","./app4":"eWpN"}]},{},["Gpe8"], null)
//# sourceMappingURL=/man.11c99b2e.js.map