(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/twitter-black-shape.87fdbe47.svg"},function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(10),n(1)),u=n(4),s=n.n(u);n(11);var l=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),u=Object(i.a)(r,2),l=u[0],m=u[1];function h(){fetch("https://api.quotable.io/random").then((function(e){return e.json()})).then((function(e){m(e.author),c(e.content)}))}return Object(a.useEffect)((function(){h()}),[]),o.a.createElement("div",{className:"quote-box"},o.a.createElement("p",{id:"text",className:"quote-box__text"},n),o.a.createElement("p",{id:"author",className:"quote-box__author"},"- ",l),o.a.createElement("div",{className:"quote-box--twitter"},o.a.createElement("a",{id:"tweet-quote",href:"http://twitter.com/intent/tweet"},o.a.createElement("img",{src:s.a,alt:"twitter-icon",className:"quote-box__tweet-quote"})),o.a.createElement("button",{id:"new-quote",className:"quote-box__new-quote",onClick:h},"New Quote")))};var m=function(){return o.a.createElement("div",{id:"quote-box"},o.a.createElement(l,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.35fc85d9.chunk.js.map