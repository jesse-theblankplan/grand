(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{9722:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r,o,i,c,a=t(168),s=t(7294),u=t(4772),l={src:"/_next/static/image/public/bg-conv.f36420f1fe819f4baba181053f3f9776.png",height:372,width:1140,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAARklEQVR4nE2MwQ2AMAwDY2ceBA9ACPZfoWIZEtz000tsPywZ97G+kZGWJkZA6k4SuPalZXzVlBXQmdEdeM6tzQsD1XrS8QOjahhjoSHSvgAAAABJRU5ErkJggg=="},p=t(606),d=t(1163),f=t(642),g=(t(5675),t(5893));var h=function(e){var n=e.p,t=e.i,o=e.current,i=e.wrapperRef,c=e.onClick,u=e.onBlock,l=e.onBlockBtnClick,p=n.text,d=n.person,h=n.block,x=n.name,m=(0,s.useRef)(null),b=(0,s.useState)(!1),v=b[0],w=b[1];return(0,s.useEffect)((function(){if(t===o){var e=i.current.getBoundingClientRect(),n=m.current.getBoundingClientRect();n.top+n.height>e.top+e.height&&i.current.scroll({top:n.height+i.current.scrollTop,behavior:"smooth"}),h&&(console.log("onblock in sentense"),u())}}),[o,t,i,u,h]),(0,g.jsx)("div",{ref:m,style:{visibility:t<=o?"visible":"hidden",opacity:t<=o?1:0,marginTop:t<=o?0:"20px",transition:"all 200ms ease-in-out",padding:"8px 0"},children:(0,g.jsxs)("div",{className:"conv",style:{display:"flex",alignItems:"center"},children:["partner"===d&&(0,g.jsx)("div",{style:{background:"#383838",borderRadius:"8px",color:"#FFF",padding:"3px 11px",whiteSpace:"nowrap"},children:"\u4f34\u4fb6"}),"wei"===d&&(0,g.jsx)("div",{style:{background:"#FFFFFF",borderRadius:"8px",color:"#000",padding:"3px 11px",whiteSpace:"nowrap"},children:"\u7dad\u771f"}),"other"===d&&(0,g.jsx)("div",{style:{color:"#fff",padding:"3px 11px",whiteSpace:"nowrap"},children:x}),"interaction"!==d?(0,g.jsxs)("div",{style:{color:"neutral"===d?"#C9DEB4":"white",marginLeft:"8px",whiteSpace:"pre-wrap",fontFamily:"neutral"===d?"Noto Serif TC, serif":"Noto Sans TC, sans-serif"},children:[p,h&&h.btnText&&!v&&(0,g.jsx)("button",{className:(0,f.iv)(r||(r=(0,a.Z)(["\n                  color: #FFF;\n                  letter-spacing: 0.3em;\n                  background: rgba(0, 0, 0, 0.5);\n                  border: 1px solid #E2E2E2;\n                  padding: 0 20px;\n                  cursor: pointer;\n                "]))),onClick:function(){w(!0),l()},children:h.btnText})]}):(0,g.jsx)("div",{style:{margin:"50px"},children:(0,g.jsx)("button",{onClick:c,children:p})})]})})};function x(e){var n=e.paragraphs,t=e.onClick,r=void 0===t?function(){}:t,x=e.onBlock,m=e.onBlockBtnClick,b=e.onEnd,v=void 0===b?function(){}:b,w=e.disableScroll,k=e.onContiClick,y=(0,s.useState)(-1),j=y[0],C=y[1],E=(0,s.useRef)(null),O=(0,s.useRef)(null),R=(0,s.useRef)(!1),A=(0,d.useRouter)(),S="/ending"===A.pathname?5e3:2500;(0,s.useEffect)((function(){if(!w)new u.Z(O.current,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20,suppressScrollX:!0})}),[]);var Z=(0,s.useState)(!1),P=Z[0],B=Z[1],T=(0,s.useCallback)((function(){console.log("play"),clearTimeout(E.current),E.current=setTimeout((function(){console.log("timeout exec",j),j<n.length-1?C(j+1):(console.log("ended"),clearTimeout(E.current),B(!0),v())}),S)}),[j,n.length,v,S]),N=(0,s.useCallback)((function(){C(j+1),R.current=!1}),[j]);(0,s.useEffect)((function(){R.current||T()}),[j,R]);var F="/0-intro"===A.pathname||"/ending"===A.pathname;return(0,g.jsxs)("div",{style:{display:"flex",justifyContent:"center",position:"absolute",bottom:0,right:0,top:0,left:0},children:[(0,g.jsxs)("div",{className:"wrapper",style:{position:"absolute",bottom:F?"calc(50vh - 372px / 2)":"20px",transition:"all 200ms ease-in-out",color:"#fff",width:"1140px",height:"372px"},children:[(0,g.jsx)("div",{className:(0,f.iv)(o||(o=(0,a.Z)(["\n            position: absolute;\n            width: 100%;\n            height: 100%;\n          "]))),children:(0,g.jsx)(p.ZP,{alt:"bg",src:l,layout:"fill",objectFit:"cover",quality:100})}),P&&("/ending"===A.pathname?(0,g.jsx)("div",{className:(0,f.iv)(i||(i=(0,a.Z)(["\n              position: absolute;\n              right: 16px;\n              bottom: 16px;\n              color: #C9DEB4;\n            "]))),children:"(\u7e8c)"}):"/0-intro"!==A.pathname&&(0,g.jsx)("div",{onClick:k,className:(0,f.iv)(c||(c=(0,a.Z)(["\n                color: #E0E41E;\n                padding: 8px 36px;\n                background: black;\n                border: 1px solid rgb(80,80,80);\n                position: absolute;\n                cursor: pointer;\n                right: 16px;\n                bottom: 16px;\n                z-index: 50000;\n            "]))),children:"\u7e7c\u7e8c"}))]}),(0,g.jsx)("div",{className:"wrapper",style:{position:"absolute",bottom:F?"calc(50vh - 302px / 2)":"55px",transition:"all 200ms ease-in-out",color:"#fff",overflow:"hidden",width:"1040px",height:"302px"},ref:O,children:(0,g.jsx)("div",{style:{margin:"0 auto",paddingRight:"20px"},children:n.map((function(e,n){return(0,g.jsx)(h,{p:e,current:j,i:n,wrapperRef:O,onClick:r,onBlock:function(){console.log("clear",E.current),R.current=!0,clearTimeout(E.current),x(N,j)},onBlockBtnClick:m},"".concat(e.id))}))})})]})}},4259:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r,o=t(168),i=t(642),c=t(5893);function a(e){var n=e.children;return(0,c.jsx)("div",{className:(0,i.iv)(r||(r=(0,o.Z)(["\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      padding: 11px 40px;\n      background: rgba(0, 0, 0, 0.5);\n      border: 1px solid #E2E2E2;\n      position: absolute;\n      top: 7%;\n      left: 50%;\n      transform: translate(-50%, 0);\n      color: #FFF;\n      letter-spacing: 0.3em;\n      font-size: 20px;\n    "]))),children:n})}},606:function(e,n,t){"use strict";var r,o=t(168),i=t(4942),c=t(642),a=t(5675),s=t(5893);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var l=function(e){var n=e.src;e.width,e.quality;return"".concat("/grand","/").concat(n)};(0,c.iv)(r||(r=(0,o.Z)(["\n  position: absolute;\n\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  box-sizing: border-box;\n  padding: 0;\n  border: none;\n  margin: auto;\n  display: block;\n  width: 0;\n  height: 0;\n  min-width: 100%;\n  max-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  object-fit: cover;\n"])));n.ZP=function(e){return console.log("in MyImage",e),(0,s.jsx)(a.default,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({alt:"image",unoptimized:!0,loader:l},e))}},291:function(e,n,t){"use strict";var r,o=t(168),i=t(7294),c=t(642),a=t(5893),s=(0,i.forwardRef)((function(e,n){var t=e.triggered,i=e.popupLoc;return(0,a.jsx)("div",{ref:n,className:(0,c.iv)(r||(r=(0,o.Z)(["\n      animation-name: ",";\n      animation-duration: 1.5s;\n      animation-direction: alternate;\n      animation-iterationCount: 1;\n      position: absolute;\n      opacity: 0;\n      top: ","px;\n      left: ","px;\n      background: white;\n      padding: 12px;\n      pointer-events: none;\n    "])),t?"popup":"none",i.y,i.x),children:"\u6b64\u8655\u6c92\u6709\u7279\u6b8a\u4e4b\u8655"})}));s.displayName="P",n.Z=s},5534:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){(0,r.useEffect)((function(){setTimeout((function(){e()}),5e3)}),[])}},8375:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r,o=t(168),i=t(4942),c=t(3253),a=t.n(c),s=t(7294),u=t(9722),l=t(4259),p=t(642),d=t(1163),f=t(291),g=t(5534),h=t(5893);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}a().setAppElement("#__next");var b=[{url:"/p1-1/bg.jpg",offset:.001,offsetX:0,offsetY:1,img:null,ratio:0}],v=[{w:300,h:600,offsetX:0,offsetY:-130,targetStep:2}],w=function(e,n){var t=n+.02*("in"===e?1:-1)*Math.random(),r=e;return t>1?(t=1,r="out"):t<0&&(t=0,r="in"),{dir:r,alpha:t}},k=[{id:1,person:"neutral",text:"\u6b61\u8fce\u4f86\u5230\u7396\u8fea\u4fee\u82d1\u5927\u98ef\u5e97"},{id:2,person:"wei",text:"\u2026\u2026"}],y=[{id:1,person:"partner",text:"\u5c31\u662f\u9019\u88e1\uff1f\u4e0d\u662f\u5427\uff1f\u8ddf\u6211\u5728\u7167\u7247\u4e0a\u770b\u5230\u7684\u7396\u8fea\u4fee\u82d1\u5927\u98ef\u5e97\u4e0d\u4e00\u6a23\u554a\uff01"},{id:2,person:"wei",text:"\u662f\u9019\u88e1\u6c92\u932f\u3002"},{id:3,person:"partner",text:"\u6211\u9084\u662f\u7b2c\u4e00\u6b21\u770b\u898b\u98ef\u5e97\u5927\u9580\u6df1\u9396\u7684\u5462\uff01\u4e00\u65c1\u9084\u6709\u8b66\u5bdf\u6b38\uff0c\u770b\u8d77\u4f86\u4e00\u9ede\u4e5f\u4e0d\u50cf\u662f\u71df\u696d\u4e2d\u7684\u6a23\u5b50\u3002"},{id:4,person:"wei",text:"\u8ab0\u77e5\u9053\u6211\u90a3\u500b\u6df7\u86cb\u8001\u7238\u600e\u9ebc\u628a\u98ef\u5e97\u7d93\u71df\u6210\u9019\u500b\u6a23\u5b50\uff1f"},{id:5,person:"partner",text:"\u54c7\uff01\u59b3\u8ddf\u59b3\u7238\u7684\u95dc\u4fc2\u771f\u7684\u5f88\u5dee\u6b38\u2026\u2026"},{id:6,person:"wei",text:"\u2026\u2026\u6211\u73fe\u5728\u4e0d\u60f3\u8a0e\u8ad6\u9019\u500b\u554f\u984c\u3002"},{id:7,person:"partner",text:"\u597d\u5566\uff01\u90a3\u6211\u5011\u5feb\u9ede\u9032\u53bb\u5427\uff0c\u65c1\u908a\u7684\u8b66\u5bdf\u4e00\u76f4\u76ef\u8457\u6211\u5011\u770b\uff0c\u597d\u50cf\u61f7\u7591\u6211\u5011\u662f\u8cca\u4f3c\u7684\u3002"},{id:8,person:"other",name:"\u8b66\u5bdf\u7532",text:"\u5582\uff01\u4f60\u5011\u5169\u500b\u7d66\u6211\u7ad9\u4f4f\uff01"},{id:9,person:"partner",text:"\u6211\u5011\uff1f"},{id:10,person:"other",name:"\u8b66\u5bdf\u4e59",text:"\u5c31\u662f\u4f60\u5011\uff01\u4f86\u9019\u88e1\u5e79\u4ec0\u9ebc?"},{id:11,person:"wei",text:"\u9019\u662f\u6211\u5bb6\u7d93\u71df\u7684\u98ef\u5e97\uff0c\u6211\u56de\u4f86\u62ff\u4e9b\u6771\u897f\u3002"},{id:12,person:"other",name:"\u8b66\u5bdf\u7532",text:"\u55ef\u54fc\uff0c\u597d\u5594\uff0c\u8eab\u5206\u8b49\u62ff\u51fa\u4f86"},{id:13,person:"wei",text:"\u6211\u6c92\u6709\u5e36\u8eab\u5206\u8b49\uff0c\u70ba\u4ec0\u9ebc\u51fa\u9580\u4e00\u5b9a\u8981\u5e36\u8eab\u5206\u8b49\uff1f"},{id:14,person:"other",name:"\u8b66\u5bdf\u7532",text:"\u90a3\u8eab\u5206\u8b49\u5b57\u865f\u4f86\u4e00\u4e0b\u3002"},{id:15,person:"wei",text:"\u70ba\u4f55\uff1f"},{id:16,person:"other",name:"\u8b66\u5bdf\u4e59",text:"\u59b3\u5982\u679c\u4e0d\u914d\u5408\u7684\u8a71\uff0c\u90a3\u5c31\u8ddf\u6211\u5011\u56de\u6d3e\u51fa\u6240\u67e5\u9a57\u8eab\u4efd\u3002"},{id:17,person:"partner",text:"\u6211\u5011\u662f\u53c8\u6c92\u5e79\u561b\uff0c\u70ba\u4ec0\u9ebc\u8981\u53bb\u6d3e\u51fa\u6240\uff1f"},{id:18,person:"neutral",text:"\u9762\u5c0d\u8b66\u5bdf\u7684\u6253\u91cf\uff0c\u7dad\u771f\u9762\u4e0d\u6539\u8272\uff0c\u5f9e\u96a8\u8eab\u5305\u5305\u88e1\u62ff\u51fa\u9470\u5319\uff0c\u5728\u8b66\u5bdf\u7684\u9762\u524d\u6643\u4e86\u6643\u3002"},{id:19,person:"wei",text:"\u9019\u662f\u98ef\u5e97\u7684\u9470\u5319\u3002"},{id:20,person:"other",name:"\u8b66\u5bdf\u7532",text:"\u5594\uff1f"},{id:21,person:"neutral",text:"\u7dad\u771f\u8d70\u5230\u4e86\u98ef\u5e97\u9580\u53e3\uff0c\u4fd0\u843d\u5730\u6253\u958b\u5927\u9580\u3002"},{id:22,person:"partner",text:"\u54c8\uff01\u9019\u4e0b\u6253\u81c9\u4e86\u5427\uff01"},{id:23,person:"other",name:"\u8b66\u5bdf\u7532",text:"\u5616\uff0c\u9470\u5319\u54ea\u4f86\u7684\uff0c\u8a72\u4e0d\u6703\u662f\u5077\u4f86\u7684\u5427\uff1f"},{id:24,person:"partner",text:"\u4f60\u5011\u5728\u8b1b\u4ec0\u9ebc\uff0c\u9470\u5319\u5979\u7238\u904e\u4e16\u7559\u7d66\u5979\u7684\u5566\uff01"},{id:26,person:"neutral",text:"\u7dad\u771f\u53c8\u5f9e\u5305\u88e1\u62ff\u51fa\u4e0a\u5348\u6211\u5011\u6536\u5230\u5f8b\u5e2b\u5bc4\u4f86\u7684\u90a3\u5c01\u4fe1\uff0c\u5979\u9023\u5fd9\u6253\u958b\u4fe1\u5c01\uff0c\u5c07\u7d19\u905e\u7d66\u8b66\u5bdf\u3002"},{id:27,person:"wei",text:"\u8b66\u5bdf\u5148\u751f\uff0c\u9019\u662f\u5f8b\u5e2b\u5bc4\u7d66\u6211\u7684\u4fe1\uff0c\u53ef\u4ee5\u8b49\u660e\u9019\u662f\u6211\u5bb6\u7684\u98ef\u5e97\u3002"},{id:28,person:"other",name:"\u8b66\u5bdf\u4e59",text:"\u5594\u2026\u2026\u90a3\u4f60\u5011\u53bb\u5fd9\u5566\uff01"},{id:30,person:"partner",text:"\u6211\u4e00\u5b9a\u8981\u4e0a\u7db2\u8ddf\u5927\u5bb6\u8aaa\u9019\u4ef6\u4e8b\u60c5\u3002"},{id:31,person:"wei",text:"\u5225\u9b27\uff0c\u8d70\u4e86\u3002"},{id:32,person:"partner",text:"\u6b38\u2014\u2014\u9673\u7dad\u771f\u7b49\u7b49\u6211\uff01"}];function j(){var e=(0,d.useRouter)(),n=(0,s.useRef)(null),t=(0,s.useRef)(null),i=(0,s.useRef)(0),c=(0,s.useRef)(0),a=(0,s.useRef)(null),x=(0,s.useRef)(0),j=(0,s.useRef)(0),C=(0,s.useRef)({x:0,y:0}),E=(0,s.useState)(!0),O=E[0],R=E[1],A=(0,s.useState)(-1),S=(A[0],A[1]),Z=(0,s.useState)(!1),P=(Z[0],Z[1]),B=(0,s.useRef)((function(){})),T=(0,s.useState)(0),N=T[0],F=T[1],D=(0,s.useState)(0),L=D[0],_=D[1],X=(0,s.useState)({x:0,y:0}),Y=X[0],z=X[1],I=(0,s.useRef)(null),M=(0,s.useCallback)((function(e){C.current.x=e.pageX,C.current.y=e.pageY}),[]),Q=(0,s.useCallback)((function(){n.current.width=window.innerWidth,n.current.height=window.innerHeight,t.current=n.current.getContext("2d"),i.current=n.current.width,c.current=n.current.height,a.current=n.current.getBoundingClientRect()}),[]),q=(0,s.useCallback)((function(e,n){console.log("onblock in page level called",e,n),S(n),B.current=e}),[]),U=(0,s.useRef)(0),G=((0,s.useRef)(1),(0,s.useCallback)((function(){t.current.clearRect(0,0,i.current,c.current),t.current.fillStyle="#1B323D",t.current.globalCompositeOperation="source-over",t.current.fillRect(0,0,i.current,c.current);for(var e=0;e<b.length;e+=1){var n=C.current.x-i.current/2,r=C.current.y-c.current/2,o=b[e].img.height*j.current,a=o*b[e].ratio;if(0===e){t.current.save(),t.current.beginPath();var s=i.current/2-a/2;t.current.moveTo(s,0),t.current.lineTo(a+s,0),t.current.lineTo(a+s,c.current),t.current.lineTo(s,c.current),t.current.lineTo(s,0),t.current.closePath(),t.current.clip()}if(b[e].fadeLoop){var u=b[e].fadeLoop,l=u.dir,p=u.alpha,d=w(l,p);t.current.globalAlpha=d.alpha,b[e].fadeLoop=m(m({},b[e].fadeLoop),d)}t.current.drawImage(b[e].img,i.current/2-a/2+b[e].offsetX*j.current+n*b[e].offset,c.current/2-o/2+b[e].offsetY*j.current+r*b[e].offset,a,o),t.current.globalAlpha=1}t.current.restore(),0===U.current&&requestAnimationFrame(G)}),[])),J=(0,s.useCallback)((function(e){return function(n){x.current+=1,b[e].ratio=b[e].img.width/b[e].img.height,console.log("img",n,n.currentTarget.width),0===e&&(j.current=c.current/b[e].img.height),x.current==b.length&&(R(!1),G())}}),[G]),V=((0,s.useCallback)((function(){console.log("onRequestClose"),P(!1),N<2?(F(2),B.current()):N<5&&F(5)}),[N]),(0,s.useCallback)((function(e){var n;_(!1),console.log(e.pageX,e.pageY,a);var t=e.pageX-i.current/2,r=e.pageY-c.current/2;v.forEach((function(e){var o=e.w,i=e.h,c=e.offsetX,a=e.offsetY,s=e.targetStep;if(console.log(N,s),N===s-1){var u=t-c,l=r-a;u<o/2&&u>-o/2&&l<i/2&&l>-i/2&&(console.log("boom"),F(N+1),n=!0)}})),n||(z({x:e.pageX-I.current.getBoundingClientRect().width/2,y:e.pageY}),setTimeout((function(){return _(!0)})))}),[N]));(0,s.useEffect)((function(){for(var e=0;e<b.length;e+=1){var n=new Image;n.src=b[e].url,n.onload=J(e),b[e].img=n}}),[J]),(0,s.useEffect)((function(){var e=n.current;return e.addEventListener("click",V),function(){e.removeEventListener("click",V)}}),[V]),(0,s.useEffect)((function(){return Q(),window.addEventListener("mousemove",M),window.addEventListener("resize",Q),function(){window.removeEventListener("mousemove",M),window.removeEventListener("resize",Q)}}),[Q,M]);var W=(0,s.useState)(!1),H=W[0],K=W[1],$=(0,s.useCallback)((function(){}),[N]),ee=(0,s.useState)(!1),ne=ee[0],te=ee[1];return(0,g.Z)((function(){te(!0)})),(0,h.jsxs)("div",{className:(0,p.iv)(r||(r=(0,o.Z)(["\n      position: relative;\n      width: 100%;\n      height: 100vh;\n      display: flex;\n      background-color: black;\n      transition: all 3000ms ease-in-out;\n      opacity: ",";\n      overflow: hidden;\n    "])),H?0:1),children:[O&&(0,h.jsx)("div",{style:{position:"absolute",top:"40%",textAlign:"center",width:"100%",animationName:"blink",animationDuration:"3s",animationIterationCount:"infinite"},children:"loading"}),(0,h.jsxs)("div",{style:{animation:O?"":"3s 1 fadein"},children:[(0,h.jsx)("canvas",{ref:n,width:"100%",height:"100%"}),!O&&0===N&&ne&&(0,h.jsx)(u.Z,{paragraphs:k,onClick:function(){F(3)},onBlock:q,onBlockBtnClick:function(){F(1)},onEnd:$,onContiClick:function(){F(N+1)}}),!O&&2===N&&(0,h.jsx)(u.Z,{paragraphs:y,onClick:function(){F(3)},onBlock:q,onBlockBtnClick:function(){F(1)},onEnd:$,onContiClick:function(){K(!0),setTimeout((function(){e.push("/2-reception")}),3e3)}})]}),1===N&&(0,h.jsx)(l.Z,{children:"\u8acb\u9ede\u64ca\u5927\u9580\u9032\u5165"}),N>0&&(0,h.jsx)(f.Z,{ref:I,triggered:L,popupLoc:Y})]})}},4288:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/1a-entrance-gate",function(){return t(8375)}])}},function(e){e.O(0,[774,499,152,888,179],(function(){return n=4288,e(e.s=n);var n}));var n=e.O();_N_E=n}]);