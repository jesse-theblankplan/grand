(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{5802:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r,o,i,c,a=t(168),l=t(7294),u=t(4772),s=t(606),p=t(1163),d=t(642),f=(t(5675),t(5893));var h=function(e){var n=e.p,t=e.i,o=e.current,i=e.wrapperRef,c=e.onClick,u=e.onBlock,s=e.onBlockBtnClick,p=n.text,h=n.person,g=n.block,x=n.name,b=(0,l.useRef)(null),m=(0,l.useState)(!1),v=m[0],w=m[1];return(0,l.useEffect)((function(){if(t===o){var e=i.current.getBoundingClientRect(),n=b.current.getBoundingClientRect();n.top+n.height>e.top+e.height&&i.current.scroll({top:n.height+i.current.scrollTop,behavior:"smooth"}),g&&(console.log("onblock in sentense"),u())}}),[o,t,i,u,g]),(0,f.jsx)("div",{ref:b,style:{visibility:t<=o?"visible":"hidden",opacity:t<=o?1:0,marginTop:t<=o?0:"20px",transition:"all 200ms ease-in-out",padding:"8px 0"},children:(0,f.jsxs)("div",{className:"conv",style:{display:"flex",alignItems:"center"},children:["partner"===h&&(0,f.jsx)("div",{style:{background:"#383838",borderRadius:"8px",color:"#FFF",padding:"3px 11px",whiteSpace:"nowrap"},children:"\u4f34\u4fb6"}),"wei"===h&&(0,f.jsx)("div",{style:{background:"#FFFFFF",borderRadius:"8px",color:"#000",padding:"3px 11px",whiteSpace:"nowrap"},children:"\u7dad\u771f"}),"other"===h&&(0,f.jsx)("div",{style:{color:"#fff",padding:"3px 11px",whiteSpace:"nowrap"},children:x}),"interaction"!==h?(0,f.jsxs)("div",{style:{color:"neutral"===h?"#C9DEB4":"white",marginLeft:"8px",whiteSpace:"pre-wrap",fontFamily:"neutral"===h?"Noto Serif TC, serif":"Noto Sans TC, sans-serif"},children:[p,g&&g.btnText&&!v&&(0,f.jsx)("button",{className:(0,d.iv)(r||(r=(0,a.Z)(["\n                  color: #FFF;\n                  letter-spacing: 0.3em;\n                  background: rgba(0, 0, 0, 0.5);\n                  border: 1px solid #E2E2E2;\n                  padding: 0 20px;\n                  cursor: pointer;\n                "]))),onClick:function(){w(!0),s()},children:g.btnText})]}):(0,f.jsx)("div",{style:{margin:"50px"},children:(0,f.jsx)("button",{onClick:c,children:p})})]})})};function g(e){var n=e.paragraphs,t=e.onClick,r=void 0===t?function(){}:t,g=e.onBlock,x=e.onBlockBtnClick,b=e.onEnd,m=void 0===b?function(){}:b,v=e.disableScroll,w=e.onContiClick,y=(0,l.useState)(-1),j=y[0],k=y[1],C=(0,l.useRef)(null),O=(0,l.useRef)(null),E=(0,l.useRef)(!1),R=(0,p.useRouter)(),S="/ending"===R.pathname?5e3:2500;(0,l.useEffect)((function(){if(!v)new u.Z(O.current,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20,suppressScrollX:!0})}),[]);var P=(0,l.useState)(!1),T=P[0],B=P[1],F=(0,l.useCallback)((function(){console.log("play"),clearTimeout(C.current),C.current=setTimeout((function(){console.log("timeout exec",j),j<n.length-1?k(j+1):(console.log("ended"),clearTimeout(C.current),B(!0),m())}),S)}),[j,n.length,m,S]),N=(0,l.useCallback)((function(){k(j+1),E.current=!1}),[j]);(0,l.useEffect)((function(){E.current||F()}),[j,E]);var D="/0-intro"===R.pathname||"/ending"===R.pathname;return(0,f.jsxs)("div",{style:{display:"flex",justifyContent:"center",position:"absolute",bottom:0,right:0,top:0,left:0},children:[(0,f.jsxs)("div",{className:"wrapper",style:{position:"absolute",bottom:D?"calc(50vh - 372px / 2)":"20px",transition:"all 200ms ease-in-out",color:"#fff",width:"1140px",height:"372px"},children:[(0,f.jsx)("div",{className:(0,d.iv)(o||(o=(0,a.Z)(["\n            position: absolute;\n            width: 100%;\n            height: 100%;\n          "]))),children:(0,f.jsx)(s.ZP,{alt:"bg",src:"".concat(s.O4,"/bg-conv.png"),layout:"fill",objectFit:"cover",quality:100})}),T&&("/ending"===R.pathname?(0,f.jsx)("div",{className:(0,d.iv)(i||(i=(0,a.Z)(["\n              position: absolute;\n              right: 16px;\n              bottom: 16px;\n              color: #C9DEB4;\n            "]))),children:"(\u7e8c)"}):"/0-intro"!==R.pathname&&(0,f.jsx)("div",{onClick:w,className:(0,d.iv)(c||(c=(0,a.Z)(["\n                color: #E0E41E;\n                padding: 8px 36px;\n                background: black;\n                border: 1px solid rgb(80,80,80);\n                position: absolute;\n                cursor: pointer;\n                right: 16px;\n                bottom: 16px;\n                z-index: 50000;\n            "]))),children:"\u7e7c\u7e8c"}))]}),(0,f.jsx)("div",{className:"wrapper",style:{position:"absolute",bottom:D?"calc(50vh - 302px / 2)":"55px",transition:"all 200ms ease-in-out",color:"#fff",overflow:"hidden",width:"1040px",height:"302px"},ref:O,children:(0,f.jsx)("div",{style:{margin:"0 auto",paddingRight:"20px"},children:n.map((function(e,n){return(0,f.jsx)(h,{p:e,current:j,i:n,wrapperRef:O,onClick:r,onBlock:function(){console.log("clear",C.current),E.current=!0,clearTimeout(C.current),g(N,j)},onBlockBtnClick:x},"".concat(e.id))}))})})]})}},606:function(e,n,t){"use strict";t.d(n,{O4:function(){return d}});var r,o=t(168),i=t(4942),c=t(642),a=t(5675),l=t(1752),u=t(5893);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=(0,l.default)().publicRuntimeConfig.staticFolder,f=function(e){var n=e.src;e.width,e.quality;return n};(0,c.iv)(r||(r=(0,o.Z)(["\n  position: absolute;\n\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  box-sizing: border-box;\n  padding: 0;\n  border: none;\n  margin: auto;\n  display: block;\n  width: 0;\n  height: 0;\n  min-width: 100%;\n  max-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  object-fit: cover;\n"])));n.ZP=function(e){return(0,u.jsx)(a.default,p(p({alt:"image",unoptimized:!0},e),{},{loader:f}))}},751:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r,o=t(168),i=t(4942),c=t(642),a=t(3253),l=t.n(a),u=t(7294),s=(t(9008),t(5802)),p=t(1163),d=t(5893);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}l().setAppElement("#__next");var g=[],x=[{w:100,h:100,offsetX:0,offsetY:-230,targetStep:4}],b=function(e,n){var t=n+.02*("in"===e?1:-1)*Math.random(),r=e;return t>1?(t=1,r="out"):t<0&&(t=0,r="in"),{dir:r,alpha:t}},m=[{id:-1,person:"neutral",text:"\u4ee5\u4e0b\u904a\u6232\u96d6\u4ee5\u865b\u69cb\u6545\u4e8b\u4e32\u63a5\uff0c\u4f46\u6bcf\u500b\u91cb\u5b57\u7686\u6709\u76e1\u91cf\u4f9d\u5176\u6642\u4ee3\u8108\u7d61\u5448\u73fe\uff0c\u656c\u8acb\u7d30\u7d30\u89c0\u8cde\u8207\u7406\u89e3"},{id:0,person:"neutral",text:"1\u670811\u65e5\u4e0a\u5348\uff0c\u7dad\u771f\u79c1\u4eba\u5de5\u4f5c\u5ba4"},{id:2,person:"other",name:"\u90f5\u5dee",text:"\u7dad\u771f\u5c0f\u59d0\u7684\u639b\u865f\u4fe1\uff01"},{id:3,person:"wei",text:"\u4f86\u4e86\u3002"},{id:4,person:"partner",text:"\u662f\u6709\u4ec0\u9ebc\u65b0\u7684\u59d4\u8a17\u9084\u662f\u8b1b\u5ea7\u9080\u8acb\u55ce\uff1f"},{id:5,person:"neutral",text:"\u7dad\u771f\u5f9e\u90f5\u5dee\u624b\u4e2d\u63a5\u904e\u4fe1\u4ef6\uff0c\u81c9\u4e0a\u7684\u8868\u60c5\u970e\u6642\u8b8a\u5f97\u6709\u4e9b\u53e4\u602a\uff0c\u4f3c\u4e4e\u6709\u4e9b\u4e0d\u5f97\u5df2\u624d\u6536\u4e0b\u9019\u5c01\u4fe1\uff0c\u5f15\u8d77\u4e86\u6211\u7684\u597d\u5947\u5fc3\u3002"},{id:6,person:"wei",text:"\u662f\u6211\u8001\u7238\u7559\u4e0b\u4f86\u7684\u721b\u6524\u5b50\u3002"},{id:7,person:"neutral",text:"\u4e0a\u500b\u6708\uff0c\u7dad\u771f\u7684\u8001\u7238\u53bb\u4e16\u4e86\u3002\u5979\u7236\u89aa\u5c0d\u6211\u800c\u8a00\u662f\u500b\u8b0e\u4e00\u6a23\u7684\u4eba\u7269\uff0c\u7dad\u771f\u5e7e\u4e4e\u4e0d\u66fe\u958b\u53e3\u63d0\u8d77\u3002\u6211\u53ea\u77e5\u9053\u5979\u7238\u597d\u50cf\u662f\u70ba\u98ef\u5e97\u7d93\u7406\uff0c\u5728\u7dad\u771f\u7684\u8a18\u61b6\u4e4b\u4e2d\uff0c\u5e7e\u4e4e\u90fd\u6ce1\u5728\u98ef\u5e97\u88e1\uff0c\u5c0d\u81ea\u5df1\u59bb\u5973\u4e0d\u805e\u4e0d\u554f\u3002"},{id:8,person:"partner",text:"\u721b\u6524\u5b50\uff1f"},{id:9,person:"wei",text:"\u5c31\u662f\u4ed6\u90a3\u68df\u7834\u98ef\u5e97\u7684\u7d93\u71df\u6b0a\u554f\u984c\u3002"},{id:10,person:"partner",text:"\u6211\u5011\u4e0d\u662f\u6709\u59d4\u8a17\u5f8b\u5e2b\u4e8b\u52d9\u6240\u8655\u7406\u4e86\u55ce\uff1f"},{id:11,person:"wei",text:"\u55ef\uff0c\u9019\u5c01\u4fe1\u5c31\u662f\u5f8b\u5e2b\u5bc4\u4f86\u7684\uff0c\u597d\u50cf\u6709\u4ec0\u9ebc\u554f\u984c\u3002"},{id:12,person:"partner",text:"\u90a3\u771f\u7684\u633a\u9ebb\u7169\u7684\u6b38\uff01"},{id:13,person:"wei",text:"\u5148\u770b\u770b\u4fe1\u4ef6\u5167\u5bb9\u5427\u3002"},{id:14,person:"neutral",text:"\u7dad\u771f\u6253\u958b\u4fe1\u4ef6\uff0c\u6211\u7acb\u523b\u6e4a\u5230\u4e86\u5979\u65c1\u908a\uff0c\u8207\u5979\u4e00\u8d77\u95b1\u8b80\u8457\u4fe1\u4ef6\u5167\u5bb9\u2014\u2014"},{id:15,person:"other",name:"\u4fe1\u4ef6",text:"\u7dad\u771f\u5c0f\u59d0\u60a8\u597d\uff0c\n\n\u6709\u95dc\u4ee4\u5c0a\u907a\u56d1\u4e2d\u6240\u4ea4\u4ee3\u4e4b\u4e8b\u9805\uff0c\u4f86\u4fe1\u544a\u77e5\u60a8\u76ee\u524d\u7684\u8655\u7406\u9032\u5ea6\uff1a\n\u6cd5\u52d9\u5718\u968a\u8fd1\u65e5\u5df2\u5b8c\u6210\u76f8\u95dc\u7e7c\u627f\u624b\u7e8c\u4e4b\u8fa6\u7406\uff0c\u4f46\u4ee4\u5c0a\u751f\u524d\u7d93\u71df\u7684\u7396\u8fea\u4fee\u82d1\u5927\u98ef\u5e97\u4e4b\u8ca0\u8cac\u4eba\u767b\u8a18\u8b8a\u66f4\u5de5\u4f5c\u5c1a\u672a\u8655\u7406\u5b8c\u7562\u3002\u516c\u53f8\u71df\u696d\u767b\u8a18\u8cc7\u6599\u88ab\u5b58\u653e\u65bc\u98ef\u5e97\u8fa6\u516c\u5ba4\uff0c\u4f46\u7531\u65bc\u8fa6\u516c\u5ba4\u5728\u9673\u5148\u751f\u751f\u524d\u5c31\u5df2\u88ab\u4e0a\u9396\uff0c\u9700\u518d\u8acb\u60a8\u89aa\u81ea\u81f3\u98ef\u5e97\u5167\u53d6\u51fa\u76f8\u95dc\u8cc7\u6599\uff0c\u5c07\u6587\u4ef6\u9001\u81f3\u4e3b\u7ba1\u6a5f\u95dc\u5b8c\u6210\u8ca0\u8cac\u4eba\u7684\u8b8a\u66f4\u767b\u8a18\u3002\n"},{id:150,person:"other",name:"\u4fe1\u4ef6",text:"\u4e0a\u8ff0\u4e8b\u5b9c\u518d\u8acb\u60a8\u5354\u52a9\uff0c\u5982\u6709\u554f\u984c\u6b61\u8fce\u8207\u5718\u968a\u806f\u7e6b\u3002\n\u795d\u3000\u5e73\u5b89\u9806\u5fc3\n\n\u53f2\u591a\u79ae\u5f8b\u5e2b\u4e8b\u52d9\u6240\u5168\u9ad4\u540c\u4ec1\u3000\u656c\u4e0a"},{id:16,person:"neutral",text:"\u770b\u5b8c\u4fe1\u4ef6\u5f8c\uff0c\u7dad\u771f\u81c9\u4e0a\u4e0d\u6eff\u7684\u795e\u8272\u66f4\u70ba\u6fc3\u539a\u4e86\u3002\u5979\u5c07\u4fe1\u4ef6\u62cd\u5728\u684c\u4e0a\uff0c\u9577\u8212\u4e00\u53e3\u6c23\uff0c\u4fbf\u62ff\u8d77\u639b\u5728\u8863\u5e3d\u67b6\u4e0a\u7684\u8584\u5916\u5957\uff0c\u671d\u9580\u53e3\u8d70\u53bb\u3002"},{id:17,person:"partner",text:"\u6b38\uff01\u7dad\u771f\uff0c\u59b3\u8981\u53bb\u54ea\uff1f"},{id:18,person:"wei",text:"\u8655\u7406\u9019\u4ef6\u4e8b\u60c5\u3002"},{id:19,person:"partner",text:"\u73fe\u5728\uff1f\u7acb\u523b\uff1f\u4e0d\u7528\u9019\u9ebc\u8d95\u5427\uff1f\u6b38\uff01\u2026\u2026\u7b49\u7b49\u6211\uff0c\u6211\u8ddf\u59b3\u53bb\uff01"}];function v(){var e=(0,p.useRouter)(),n=(0,u.useRef)(null),t=(0,u.useRef)(null),i=(0,u.useRef)(0),a=(0,u.useRef)(0),f=(0,u.useRef)(null),v=(0,u.useRef)(0),w=(0,u.useRef)(0),y=(0,u.useRef)({x:0,y:0}),j=(0,u.useState)(!1),k=j[0],C=j[1],O=(0,u.useState)(-1),E=O[0],R=O[1],S=(0,u.useState)(!1),P=(S[0],S[1]),T=(0,u.useRef)((function(){})),B=(0,u.useState)(0),F=B[0],N=B[1],D=(0,u.useState)(0),_=D[0],Z=D[1],L=(0,u.useState)({x:0,y:0}),X=L[0],Y=L[1],q=(0,u.useRef)(null),z=(0,u.useCallback)((function(e){y.current.x=e.pageX,y.current.y=e.pageY}),[]),A=(0,u.useCallback)((function(){n.current.width=window.innerWidth,n.current.height=window.innerHeight,t.current=n.current.getContext("2d"),i.current=n.current.width,a.current=n.current.height,f.current=n.current.getBoundingClientRect()}),[]),I=(0,u.useCallback)((function(e,n){console.log("onblock in page level called",e,n),R(n),T.current=e}),[]),H=(0,u.useCallback)((function(){t.current.clearRect(0,0,i.current,a.current),t.current.fillStyle="#1B323D",t.current.globalCompositeOperation="source-over",t.current.fillRect(0,0,i.current,a.current);for(var e=0;e<g.length;e+=1){var n=y.current.x-i.current/2,r=y.current.y-a.current/2,o=g[e].img.height*w.current,c=o*g[e].ratio;if(0===e){t.current.save(),t.current.beginPath();var l=i.current/2-c/2;t.current.moveTo(l,0),t.current.lineTo(c+l,0),t.current.lineTo(c+l,a.current),t.current.lineTo(l,a.current),t.current.lineTo(l,0),t.current.closePath(),t.current.clip()}if(g[e].fadeLoop){var u=g[e].fadeLoop,s=u.dir,p=u.alpha,d=b(s,p);t.current.globalAlpha=d.alpha,g[e].fadeLoop=h(h({},g[e].fadeLoop),d)}t.current.drawImage(g[e].img,i.current/2-c/2+g[e].offsetX*w.current+n*g[e].offset,a.current/2-o/2+g[e].offsetY*w.current+r*g[e].offset,c,o),t.current.globalAlpha=1}t.current.restore(),requestAnimationFrame(H)}),[]),M=(0,u.useCallback)((function(e){return function(n){v.current+=1,g[e].ratio=g[e].img.width/g[e].img.height,console.log("img",n,n.currentTarget.width),0===e&&(w.current=a.current/g[e].img.height),v.current==g.length&&(C(!1),H())}}),[H]),W=(0,u.useCallback)((function(){console.log("onRequestClose"),P(!1),F<2?(N(2),T.current()):F<5&&N(5)}),[F]),G=(0,u.useCallback)((function(e){Z(!1),Y({x:e.pageX-q.current.getBoundingClientRect().width/2,y:e.pageY}),setTimeout((function(){return Z(!0)})),console.log(e.pageX,e.pageY,f);var n=e.pageX-i.current/2,t=e.pageY-a.current/2;x.forEach((function(e){var r=e.w,o=e.h,i=e.offsetX,c=e.offsetY,a=e.targetStep;if(console.log(F,a),F===a-1){var l=n-i,u=t-c;l<r/2&&l>-r/2&&u<o/2&&u>-o/2&&(console.log("boom"),N(F+1))}}))}),[F]);(0,u.useEffect)((function(){for(var e=0;e<g.length;e+=1){var n=new Image;n.src=g[e].url,n.onload=M(e),g[e].img=n}}),[M]),(0,u.useEffect)((function(){var e=n.current;return e.addEventListener("click",G),function(){e.removeEventListener("click",G)}}),[G]),(0,u.useEffect)((function(){return A(),window.addEventListener("mousemove",z),window.addEventListener("resize",A),function(){window.removeEventListener("mousemove",z),window.removeEventListener("resize",A)}}),[A,z]);var J=(0,u.useState)(!1),K=J[0],Q=J[1],U=(0,u.useCallback)((function(){Q(!0),setTimeout((function(){e.push("/1-entrance")}),3e3)}),[]);return(0,d.jsxs)("div",{className:(0,c.iv)(r||(r=(0,o.Z)(["\n      position: relative;\n      width: 100%;\n      height: 100vh;\n      display: flex;\n      background-color: black;\n      transition: all 3000ms ease-in-out;\n      opacity: ",";\n      overflow: hidden;\n    "])),K?0:1),children:[k&&(0,d.jsx)("div",{style:{position:"absolute",top:"40%",textAlign:"center",width:"100%",animationName:"blink",animationDuration:"3s",animationIterationCount:"infinite"},children:"loading"}),(0,d.jsxs)("div",{style:{animation:k?"":"3s 1 fadein"},children:[(0,d.jsx)("canvas",{ref:n,width:"100%",height:"100%"}),!k&&F<3&&(0,d.jsx)(s.Z,{paragraphs:m,onClick:function(){N(3)},onBlock:I,onBlockBtnClick:function(){N(1)},onEnd:U})]}),(0,d.jsxs)(l(),{isOpen:1===F||4===F,onRequestClose:W,style:{content:{width:"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",display:"flex",justifyContent:"center"}},children:[F<3&&m[E]&&m[E].block&&(0,d.jsx)(d.Fragment,{children:m[E].block.img&&(0,d.jsx)("img",{src:m[E].block.img,width:"50%"})}),4===F&&(0,d.jsx)(d.Fragment,{children:"\u95dc\u9375\u9ede\u64ca\uff1a\u6642\u9418"})]}),3===F&&(0,d.jsx)("div",{ref:q,style:{animationName:_?"popup":"none",animationDuration:"1.5s",animationDirection:"alternate",animationIterationCount:"1",position:"absolute",opacity:0,top:X.y,left:X.x,background:"white",padding:"12px"},children:"\u6b64\u8655\u6c92\u6709\u7279\u6b8a\u4e4b\u8655"})]})}},9371:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/0-intro",function(){return t(751)}])}},function(e){e.O(0,[774,887,152,888,179],(function(){return n=9371,e(e.s=n);var n}));var n=e.O();_N_E=n}]);