(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],{123:function(e,n,t){e.exports=t(249)},128:function(e,n,t){},248:function(e,n,t){},249:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),c=t(24),o=t.n(c),i=(t(128),t(47)),r=(t(129),t(256)),u=t(257),C=t(255),m=function(){var e=Object(l.useState)([0,0,0,0,0,0,0]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(l.useState)([["*","*","*","*","*","*","*"],["*","*","*","*","*","*","*"],["*","*","*","*","*","*","*"],["*","*","*","*","*","*","*"],["*","*","*","*","*","*","*"],["*","*","*","*","*","*","*"]]),m=Object(i.a)(o,2),f=m[0],E=m[1],k=Object(l.useState)(!0),s=Object(i.a)(k,2),v=s[0],w=s[1],d=function(e,n){var l=t;if(l[n]=l[n]+1,c(l),console.log("Column "+n+" updated."),l[n]>6)alert("Invalid move!");else{var a=f;a[6-l[n]][n]=v?"X":"O",E(a),(O(0,0,1,"z")||p(0,0,1,"z")||b(0,0,1,"z")||g(0,0,1,"z"))&&(v?alert("X wins!"):alert("O wins!"),h()),w(!v)}},h=function(){c([0,0,0,0,0,0]),E([["*","*","*","*","*","*","*"],["*","*","*","*","*","*","*"],["*","*","*","*","*","*","*"],["*","*","*","*","*","*","*"],["*","*","*","*","*","*","*"],["*","*","*","*","*","*","*"]])},p=function e(n,t,l,a){if(4===l)return!0;if(n>5||t>6)return!1;var c=1;return("z"===a||a===f[n][t]&&"*"!==f[n][t])&&(c=l+1),e(n,t+1,c,f[n][t])||e(n+1,t,1,f[n][t])},O=function e(n,t,l,a){if(4===l)return!0;if(n>5||t>6)return!1;var c=1;return("z"===a||a===f[n][t]&&"*"!==f[n][t])&&(c=l+1),e(n+1,t,c,f[n][t])||e(n,t+1,1,f[n][t])},b=function e(n,t,l,a){if(4===l)return!0;if(n>5||t>6)return!1;var c=1;return("z"===a||a===f[n][t]&&"*"!==f[n][t])&&(c=l+1),e(n+1,t+1,c,f[n][t])||e(n,t+1,1,f[n][t])||e(n+1,t,1,f[n][t])},g=function e(n,t,l,a){if(4===l)return!0;if(n>5||t>6||t<0)return!1;var c=1;return("z"===a||a===f[n][t]&&"*"!==f[n][t])&&(c=l+1),e(n+1,t-1,c,f[n][t])||e(n,t+1,1,f[n][t])||e(n+1,t,1,f[n][t])};return a.a.createElement(r.a,{centered:!0},a.a.createElement(r.a.Content,{color:"olive"},a.a.createElement(u.a,{as:"h1",textAlign:"center"},"Connect 4"),a.a.createElement(r.a.Description,null,a.a.createElement(u.a,{as:"h2",textAlign:"center"},v?"X's turn...":"O's turn..."),a.a.createElement(C.a,{celled:!0},a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Cell,{onClick:function(){d(0,0)}},f[0][0]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,1)}},f[0][1]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,2)}},f[0][2]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,3)}},f[0][3]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,4)}},f[0][4]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,5)}},f[0][5]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,6)}},f[0][6])),a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Cell,{onClick:function(){d(0,0)}},f[1][0]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,1)}},f[1][1]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,2)}},f[1][2]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,3)}},f[1][3]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,4)}},f[1][4]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,5)}},f[1][5]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,6)}},f[1][6])),a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Cell,{onClick:function(){d(0,0)}},f[2][0]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,1)}},f[2][1]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,2)}},f[2][2]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,3)}},f[2][3]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,4)}},f[2][4]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,5)}},f[2][5]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,6)}},f[2][6])),a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Cell,{onClick:function(){d(0,0)}},f[3][0]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,1)}},f[3][1]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,2)}},f[3][2]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,3)}},f[3][3]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,4)}},f[3][4]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,5)}},f[3][5]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,6)}},f[3][6])),a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Cell,{onClick:function(){d(0,0)}},f[4][0]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,1)}},f[4][1]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,2)}},f[4][2]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,3)}},f[4][3]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,4)}},f[4][4]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,5)}},f[4][5]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,6)}},f[4][6])),a.a.createElement(C.a.Row,null,a.a.createElement(C.a.Cell,{onClick:function(){d(0,0)}},f[5][0]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,1)}},f[5][1]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,2)}},f[5][2]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,3)}},f[5][3]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,4)}},f[5][4]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,5)}},f[5][5]),a.a.createElement(C.a.Cell,{onClick:function(){d(0,6)}},f[5][6]))))))};t(248);var f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.2f13dddd.chunk.js.map