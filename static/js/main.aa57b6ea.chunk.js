(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{19:function(e,t,n){e.exports={resizeButton:"ResizeButton_resizeButton__qCr1c"}},20:function(e,t,n){e.exports={inputArea:"InputArea_inputArea__3PlNZ"}},21:function(e,t,n){e.exports={markedArea:"MarkedArea_markedArea__2Um6_"}},245:function(e,t,n){"use strict";n.r(t);var i=n(4),a=n(2),c=n(16),r=n.n(c),s=n(11),o=n.n(s),u=n(17),d=n.n(u),l=(n(27),n(12)),b=n(18),w=n(19),j=n.n(w),h=n(1);var _=function(e){var t=e.changeVisibility,n=e.changeWindowSize,i=e.icon;return Object(h.jsx)("button",{onClick:function(){t(),n()},className:j.a.resizeButton,children:Object(h.jsx)(b.a,{icon:i})})},g=n(3),f=n.n(g);var v=function(e){var t=e.setRequestingWindow,n=e.className,c=e.titleName,r=e.changeVisibility,s=(e.changeWindowSize,e.children);return function(e){var o=Object(a.useState)(!0),u=Object(i.a)(o,2),d=u[0],b=u[1],w=Object(a.useRef)();return Object(h.jsxs)("div",{className:"window"===n?f.a.window:f.a.invisible,ref:w,children:[Object(h.jsxs)("div",{className:f.a.titleBar,children:[Object(h.jsx)("p",{className:f.a.text,children:c}),Object(h.jsx)(_,{changeVisibility:r,icon:d?l.b:l.a,changeWindowSize:function(){b(!d),t(w)}})]}),Object(h.jsx)("div",{className:f.a.windowContent,children:s})]})}()},O=n(20),m=n.n(O);var x=function(e){var t=e.handleInput,n=e.input;return Object(h.jsx)("textarea",{id:"editor",className:m.a.inputArea,onChange:t,value:n})},p=n(21),k=n.n(p);var N=function(e){var t=e.markedText;return Object(h.jsx)("div",{id:"preview",className:k.a.markedArea,dangerouslySetInnerHTML:{__html:t}})},W=n.p+"static/media/initialMarked.829eb3ae.md",S=n(22),z=n.n(S);n(244);function A(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),u=s[0],l=s[1],b=Object(a.useState)("window"),w=Object(i.a)(b,2),j=w[0],_=w[1],g=Object(a.useState)(!0),O=Object(i.a)(g,2),m=O[0],p=O[1],k=Object(a.useRef)(null);function S(e){var t=o()(e),n=d.a.sanitize(t);l(n)}var z=function(){p(!m),_(m?"invisible":"window")},A=function(e){k.current=e.current};return Object(a.useEffect)((function(){fetch(W).then((function(e){return e.text()})).then((function(e){c(e),S(e)}))}),[]),Object(a.useEffect)((function(){m||(k.current.className=f.a.biggerWindow)}),[m]),Object(h.jsxs)("div",{className:"content-box",children:[Object(h.jsx)(v,{setRequestingWindow:A,className:j,changeVisibility:z,titleName:"Text to be marked",children:Object(h.jsx)(x,{input:n,handleInput:function(e){c(e.target.value),S(e.target.value)}})}),Object(h.jsx)(v,{setRequestingWindow:A,className:j,changeVisibility:z,titleName:"Marked result",children:Object(h.jsx)(N,{markedText:u})})]})}o.a.setOptions({highlight:function(e){return z.a.highlightAuto(e).value},breaks:!0}),r.a.render(Object(h.jsx)(A,{}),document.getElementById("root"))},27:function(e,t,n){},3:function(e,t,n){e.exports={window:"Window_window__uDx5P",biggerWindow:"Window_biggerWindow__3PVjF",windowContent:"Window_windowContent__2g6ga",titleBar:"Window_titleBar__w9buU",text:"Window_text__1kMsZ",invisible:"Window_invisible__1SP98","bigger-window":"Window_bigger-window__3kTzv"}}},[[245,1,2]]]);
//# sourceMappingURL=main.aa57b6ea.chunk.js.map