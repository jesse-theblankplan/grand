(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[729],{9722:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r,o,i,c,a=n(168),l=n(7294),s=n(4772),u=n(606),p=n(1163),f=n(642),d=(n(5675),n(5893));var g=function(e){var t=e.p,n=e.i,o=e.current,i=e.wrapperRef,c=e.onClick,s=e.onBlock,u=e.onBlockBtnClick,p=t.text,g=t.person,h=t.block,x=t.name,b=(0,l.useRef)(null),m=(0,l.useState)(!1),v=m[0],w=m[1];return(0,l.useEffect)((function(){if(n===o){var e=i.current.getBoundingClientRect(),t=b.current.getBoundingClientRect();t.top+t.height>e.top+e.height&&i.current.scroll({top:t.height+i.current.scrollTop,behavior:"smooth"}),h&&(console.log("onblock in sentense"),s())}}),[o,n,i,s,h]),(0,d.jsx)("div",{ref:b,style:{visibility:n<=o?"visible":"hidden",opacity:n<=o?1:0,marginTop:n<=o?0:"20px",transition:"all 200ms ease-in-out",padding:"8px 0"},children:(0,d.jsxs)("div",{className:"conv",style:{display:"flex",alignItems:"center"},children:["partner"===g&&(0,d.jsx)("div",{style:{background:"#383838",borderRadius:"8px",color:"#FFF",padding:"3px 11px",whiteSpace:"nowrap"},children:"\u4f34\u4fb6"}),"wei"===g&&(0,d.jsx)("div",{style:{background:"#FFFFFF",borderRadius:"8px",color:"#000",padding:"3px 11px",whiteSpace:"nowrap"},children:"\u7dad\u771f"}),"other"===g&&(0,d.jsx)("div",{style:{color:"#fff",padding:"3px 11px",whiteSpace:"nowrap"},children:x}),"interaction"!==g?(0,d.jsxs)("div",{style:{color:"neutral"===g?"#C9DEB4":"white",marginLeft:"8px",whiteSpace:"pre-wrap",fontFamily:"neutral"===g?"Noto Serif TC, serif":"Noto Sans TC, sans-serif"},children:[p,h&&h.btnText&&!v&&(0,d.jsx)("button",{className:(0,f.iv)(r||(r=(0,a.Z)(["\n                  color: #FFF;\n                  letter-spacing: 0.3em;\n                  background: rgba(0, 0, 0, 0.5);\n                  border: 1px solid #E2E2E2;\n                  padding: 0 20px;\n                  cursor: pointer;\n                "]))),onClick:function(){w(!0),u()},children:h.btnText})]}):(0,d.jsx)("div",{style:{margin:"50px"},children:(0,d.jsx)("button",{onClick:c,children:p})})]})})};function h(e){var t=e.paragraphs,n=e.onClick,r=void 0===n?function(){}:n,h=e.onBlock,x=e.onBlockBtnClick,b=e.onEnd,m=void 0===b?function(){}:b,v=e.disableScroll,w=e.onContiClick,y=(0,l.useState)(-1),j=y[0],k=y[1],C=(0,l.useRef)(null),O=(0,l.useRef)(null),E=(0,l.useRef)(!1),R=(0,p.useRouter)(),S="/ending"===R.pathname?5e3:2500;(0,l.useEffect)((function(){if(!v)new s.Z(O.current,{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:20,suppressScrollX:!0})}),[]);var B=(0,l.useState)(!1),P=B[0],T=B[1],F=(0,l.useCallback)((function(){console.log("play"),clearTimeout(C.current),C.current=setTimeout((function(){console.log("timeout exec",j),j<t.length-1?k(j+1):(console.log("ended"),clearTimeout(C.current),T(!0),m())}),S)}),[j,t.length,m,S]),N=(0,l.useCallback)((function(){k(j+1),E.current=!1}),[j]);(0,l.useEffect)((function(){E.current||F()}),[j,E]);var D="/0-intro"===R.pathname||"/ending"===R.pathname;return(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"center",position:"absolute",bottom:0,right:0,top:0,left:0},children:[(0,d.jsxs)("div",{className:"wrapper",style:{position:"absolute",bottom:D?"calc(50vh - 372px / 2)":"20px",transition:"all 200ms ease-in-out",color:"#fff",width:"1140px",height:"372px"},children:[(0,d.jsx)("div",{className:(0,f.iv)(o||(o=(0,a.Z)(["\n            position: absolute;\n            width: 100%;\n            height: 100%;\n          "]))),children:(0,d.jsx)(u.ZP,{alt:"bg",src:"/bg-conv.png",layout:"fill",objectFit:"cover",quality:100})}),P&&("/ending"===R.pathname?(0,d.jsx)("div",{className:(0,f.iv)(i||(i=(0,a.Z)(["\n              position: absolute;\n              right: 16px;\n              bottom: 16px;\n              color: #C9DEB4;\n            "]))),children:"(\u7e8c)"}):"/0-intro"!==R.pathname&&(0,d.jsx)("div",{onClick:w,className:(0,f.iv)(c||(c=(0,a.Z)(["\n                color: #E0E41E;\n                padding: 8px 36px;\n                background: black;\n                border: 1px solid rgb(80,80,80);\n                position: absolute;\n                cursor: pointer;\n                right: 16px;\n                bottom: 16px;\n                z-index: 50000;\n            "]))),children:"\u7e7c\u7e8c"}))]}),(0,d.jsx)("div",{className:"wrapper",style:{position:"absolute",bottom:D?"calc(50vh - 302px / 2)":"55px",transition:"all 200ms ease-in-out",color:"#fff",overflow:"hidden",width:"1040px",height:"302px"},ref:O,children:(0,d.jsx)("div",{style:{margin:"0 auto",paddingRight:"20px"},children:t.map((function(e,t){return(0,d.jsx)(g,{p:e,current:j,i:t,wrapperRef:O,onClick:r,onBlock:function(){console.log("clear",C.current),E.current=!0,clearTimeout(C.current),h(N,j)},onBlockBtnClick:x},"".concat(e.id))}))})})]})}},606:function(e,t,n){"use strict";var r,o=n(168),i=n(4942),c=n(642),a=n(5675),l=n(1752),s=n(5893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(0,l.default)().publicRuntimeConfig.staticFolder;var f=function(e){var t=e.src;e.width,e.quality;return t};(0,c.iv)(r||(r=(0,o.Z)(["\n  position: absolute;\n\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  box-sizing: border-box;\n  padding: 0;\n  border: none;\n  margin: auto;\n  display: block;\n  width: 0;\n  height: 0;\n  min-width: 100%;\n  max-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  object-fit: cover;\n"])));t.ZP=function(e){return(0,s.jsx)(a.default,p(p({alt:"image",unoptimized:!0},e),{},{loader:f}))}},387:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(4942),o=n(3253),i=n.n(o),c=n(7294),a=(n(9008),n(9722)),l=n(1163),s=n(5893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}i().setAppElement("#__next");var f=[{url:"/p2/bg.png",offset:.005,offsetX:0,offsetY:1,img:null,ratio:0},{url:"/p2/r1.png",offset:.018,offsetX:40,offsetY:70,img:null,ratio:0},{url:"/p2/r2.png",offset:.1,offsetX:10,offsetY:-250,img:null,ratio:0}],d=[{w:100,h:100,offsetX:0,offsetY:-230,targetStep:4}],g=function(e,t){var n=t+.02*("in"===e?1:-1)*Math.random(),r=e;return n>1?(n=1,r="out"):n<0&&(n=0,r="in"),{dir:r,alpha:n}},h=[{id:1,person:"neutral",text:"----- \u7dad\u771f\u8207\u3007\u3007\u4f86\u5230\u4e86\u4e00\u9593\u8207\u6559\u5ba4\u985e\u4f3c\u7684\u7a7a\u9593\uff0c\u4f46\u8ab2\u684c\u6905\u537b\u662f\u76f8\u7576\u81ea\u7531\u5954\u653e\u7684\u5206\u6563\u5728\u5404\u500b\u89d2\u843d\uff0c\u4e0a\u9762\u653e\u8457\u66f8\u5305\u3001\u8003\u5377\u3001\u5b89\u5168\u5e3d\u7b49\u7b49\u8207\u5b78\u751f\u606f\u606f\u76f8\u95dc\u7684\u6771\u897f\uff0c\u6574\u500b\u7a7a\u9593\u4e2d\u6563\u767c\u8457\u4e00\u80a1\u6e05\u7d14\u6d0b\u6ea2\u3001\u7121\u6240\u754f\u61fc\u7684\u6c1b\u570d\u3002-----"},{id:2,person:"partner",text:"\u9019\u88e1\u2026\u2026\u662f\u6559\u5ba4\u5427?\u7e3d\u7b97\u6709\u4e00\u500b\u5834\u666f\u662f\u6bd4\u8f03\u719f\u6089\u7684\u5730\u65b9\u4e86\u3002"},{id:3,person:"wei",text:"\u55ef\uff0c\u4e0d\u904e\u5982\u679c\u628a\u6559\u5ba4\u5f04\u6210\u9019\u500b\u6a23\u5b50\uff0c\u6703\u88ab\u8001\u5e2b\u7f75\u5427\u3002"},{id:4,person:"partner",text:"\u5c0d\u554a\uff0c\u771f\u597d\u5947\u5728\u5b78\u6821\u9019\u7a2e\u5730\u65b9\u80fd\u767c\u751f\u4ec0\u9ebc\u8ddf\u6cd5\u5f8b\u689d\u6587\u6709\u95dc\u7684\u4e8b\u3002"},{id:5,person:"wei",text:"\u8fd1\u5e7e\u5e74\u4f86\u5b78\u751f\u4e5f\u6f38\u6f38\u7684\u958b\u59cb\u722d\u53d6\u81ea\u5df1\u7684\u6b0a\u76ca\uff0c\u4f8b\u5982\u9aee\u7981\u3001\u5236\u670d\u3001\u6559\u5b98\u7b49\u7b49\u5728\u6211\u5011\u90a3\u6642\u5019\u7fd2\u4ee5\u70ba\u5e38\u7684\u898f\u5b9a\u90fd\u53d7\u5230\u4e0d\u5c0f\u6311\u6230\u3002"},{id:6,person:"partner",text:"\u8aaa\u7684\u4e5f\u662f\uff0c\u4e0d\u904e\u4e5f\u4e0d\u77e5\u9053\u9019\u4e9b\u60c5\u6cc1\u662f\u597d\u9084\u662f\u4e0d\u597d\u3002"},{id:7,person:"wei",text:"\u61c2\u5f97\u722d\u53d6\u6b0a\u76ca\u4e00\u5b9a\u662f\u597d\u4e8b\u5427\uff0c\u53ea\u662f\u4e0d\u80fd\u77ef\u6789\u904e\u6b63\u5c31\u662f\u4e86\u3002"},{id:8,person:"partner",text:"\u7dad\u771f\u4f60\u770b\u770b\u9019\u4e9b\u7167\u7247\uff0c\u4e5f\u592a\u72c2\u4e86\u5427\uff1f",isBlock:!0,block:{btnText:"\u7167\u7247",img:"/p1/b1.jpg"}},{id:9,person:"neutral",text:"----- \u7167\u7247\u4e0a\u662f\u4e00\u7fa4\u7a7f\u8457\u5236\u670d\u3001\u9577\u76f8\u6709\u4e9b\u7a1a\u5ae9\u7684\u5b78\u751f\uff0c\u800c\u4ed6\u5011\u7684\u8eab\u4e0a\u537b\u90fd\u6709\u4e9b\u8207\u5b78\u751f\u7684\u523b\u677f\u5370\u8c61\u4e0d\u592a\u4e00\u6a23\u7684\u5730\u65b9\u3002----- "},{id:10,person:"partner",text:"\u8863\u670d\u6c92\u7d2e\u3001\u6234\u8033\u74b0\u3001\u5857\u6307\u7532\u6cb9\u3001\u67d3\u982d\u9aee\u3001\u700f\u6d77\u8d85\u904e\u7709\u6bdb\u3001\u88d9\u5b50\u5728\u819d\u84cb\u4ee5\u4e0a\u2026\u2026\u771f\u9177\uff0c\u9019\u4e9b\u4eba\u8eab\u4e0a\u61c9\u8a72\u90fd\u80cc\u4e0d\u5c11\u8b66\u544a\u8ddf\u5c0f\u904e\u5427\u3002"},{id:11,person:"wei",text:"\u73fe\u5728\u60f3\u60f3\uff0c\u5100\u5bb9\u4e0a\u7684\u898f\u5b9a\u6709\u4e9b\u78ba\u5be6\u77ef\u6789\u904e\u6b63\u3002"},{id:12,person:"partner",text:"\u7dad\u771f\u4ee5\u524d\u6709\u56e0\u70ba\u9019\u4e9b\u60c5\u6cc1\u88ab\u8a18\u904e\u55ce?"},{id:13,person:"wei",text:"\u6c92\u6709\u3002"},{id:14,person:"partner",text:"\u4e5f\u662f\uff0c\u59b3\u9019\u9ebc\u81ea\u5f8b\u7684\u4eba\uff0c\u6c92\u4e8b\u61c9\u8a72\u4e0d\u6703\u6311\u6230\u9019\u4e9b\u898f\u5b9a\u3002"},{id:15,person:"wei",text:"\u55ef\uff0c\u6703\u9075\u5b88\u53ea\u662f\u7701\u5f97\u9ebb\u7169\u800c\u5df2\u3002"},{id:16,person:"partner",text:"\u770b\u4f86\u7dad\u771f\u5c0d\u65bc\u9019\u4e9b\u898f\u5b9a\u4e5f\u4e0d\u662f\u9019\u9ebc\u8a8d\u540c\u561b\uff01"},{id:17,person:"wei",text:"\u53ea\u662f\u89ba\u5f97\u9019\u4e9b\u786c\u6027\u898f\u5b9a\uff0c\u5c0d\u65bc\u4e00\u4e9b\u6709\u8457\u7279\u6b8a\u60c5\u6cc1\u7684\u5b78\u751f\u800c\u8a00\u4e26\u4e0d\u53cb\u5584\u3002"},{id:18,person:"wei",text:"\u627e\u627e\u623f\u9593\u7684\u95dc\u9375\u7269\u4ef6\u5427"},{id:19,person:"interaction",text:"\u56de\u5230\u623f\u9593"}],x=[{id:16,person:"partner",text:"\u770b\u4f86\u7dad\u771f\u5c0d\u65bc\u9019\u4e9b\u898f\u5b9a\u4e5f\u4e0d\u662f\u9019\u9ebc\u8a8d\u540c\u561b\uff01"},{id:17,person:"wei",text:"\u53ea\u662f\u89ba\u5f97\u9019\u4e9b\u786c\u6027\u898f\u5b9a\uff0c\u5c0d\u65bc\u4e00\u4e9b\u6709\u8457\u7279\u6b8a\u60c5\u6cc1\u7684\u5b78\u751f\u800c\u8a00\u4e26\u4e0d\u53cb\u5584\u3002"},{id:18,person:"wei",text:"\u770b\u770b\u623f\u578b\u4ecb\u7d39\u4e0a\u600e\u9ebc\u8aaa\u5427\u3002"},{id:19,person:"interaction",text:"\u6253\u958b\u623f\u578b\u4ecb\u7d39"}];function b(){var e=(0,l.useRouter)(),t=(0,c.useRef)(null),n=(0,c.useRef)(null),r=(0,c.useRef)(0),o=(0,c.useRef)(0),u=(0,c.useRef)(null),b=(0,c.useRef)(0),m=(0,c.useRef)(0),v=(0,c.useRef)({x:0,y:0}),w=(0,c.useState)(!0),y=w[0],j=w[1],k=(0,c.useState)(-1),C=k[0],O=k[1],E=(0,c.useState)(!1),R=(E[0],E[1]),S=(0,c.useRef)((function(){})),B=(0,c.useState)(0),P=B[0],T=B[1],F=(0,c.useState)(0),N=F[0],D=F[1],_=(0,c.useState)({x:0,y:0}),X=_[0],Z=_[1],L=(0,c.useRef)(null),Y=(0,c.useCallback)((function(e){v.current.x=e.pageX,v.current.y=e.pageY}),[]),q=(0,c.useCallback)((function(){t.current.width=window.innerWidth,t.current.height=window.innerHeight,n.current=t.current.getContext("2d"),r.current=t.current.width,o.current=t.current.height,u.current=t.current.getBoundingClientRect()}),[]),z=(0,c.useCallback)((function(e,t){console.log("onblock in page level called",e,t),O(t),S.current=e}),[]),A=(0,c.useCallback)((function(){n.current.clearRect(0,0,r.current,o.current),n.current.fillStyle="#1B323D",n.current.globalCompositeOperation="source-over",n.current.fillRect(0,0,r.current,o.current);for(var e=0;e<f.length;e+=1){var t=v.current.x-r.current/2,i=v.current.y-o.current/2,c=f[e].img.height*m.current,a=c*f[e].ratio;if(0===e){n.current.save(),n.current.beginPath();var l=r.current/2-a/2;n.current.moveTo(l,0),n.current.lineTo(a+l,0),n.current.lineTo(a+l,o.current),n.current.lineTo(l,o.current),n.current.lineTo(l,0),n.current.closePath(),n.current.clip()}if(f[e].fadeLoop){var s=f[e].fadeLoop,u=s.dir,d=s.alpha,h=g(u,d);n.current.globalAlpha=h.alpha,f[e].fadeLoop=p(p({},f[e].fadeLoop),h)}n.current.drawImage(f[e].img,r.current/2-a/2+f[e].offsetX*m.current+t*f[e].offset,o.current/2-c/2+f[e].offsetY*m.current+i*f[e].offset,a,c),n.current.globalAlpha=1}n.current.restore(),requestAnimationFrame(A)}),[]),I=(0,c.useCallback)((function(e){return function(t){b.current+=1,f[e].ratio=f[e].img.width/f[e].img.height,console.log("img",t,t.currentTarget.width),0===e&&(m.current=o.current/f[e].img.height),b.current==f.length&&(j(!1),A())}}),[A]),H=(0,c.useCallback)((function(){console.log("onRequestClose"),R(!1),P<2?(T(2),S.current()):P<5&&T(5)}),[P]),M=(0,c.useCallback)((function(e){D(!1),Z({x:e.pageX-L.current.getBoundingClientRect().width/2,y:e.pageY}),setTimeout((function(){return D(!0)})),console.log(e.pageX,e.pageY,u);var t=e.pageX-r.current/2,n=e.pageY-o.current/2;d.forEach((function(e){var r=e.w,o=e.h,i=e.offsetX,c=e.offsetY,a=e.targetStep;if(console.log(P,a),P===a-1){var l=t-i,s=n-c;l<r/2&&l>-r/2&&s<o/2&&s>-o/2&&(console.log("boom"),T(P+1))}}))}),[P]);return(0,c.useEffect)((function(){for(var e=0;e<f.length;e+=1){var t=new Image;t.src=f[e].url,t.onload=I(e),f[e].img=t}}),[I]),(0,c.useEffect)((function(){var e=t.current;return e.addEventListener("click",M),function(){e.removeEventListener("click",M)}}),[M]),(0,c.useEffect)((function(){return q(),window.addEventListener("mousemove",Y),window.addEventListener("resize",q),function(){window.removeEventListener("mousemove",Y),window.removeEventListener("resize",q)}}),[q,Y]),(0,s.jsxs)("div",{style:{position:"relative",width:"100%",height:"100vh",display:"flex"},children:[y&&(0,s.jsx)("div",{style:{position:"absolute",top:"40%",textAlign:"center",width:"100%",animationName:"blink",animationDuration:"3s",animationIterationCount:"infinite"},children:"loading"}),(0,s.jsxs)("div",{style:{animation:y?"":"3s 1 fadein"},children:[(0,s.jsx)("canvas",{ref:t,width:"100%",height:"100%"}),!y&&P<3&&(0,s.jsx)(a.Z,{paragraphs:h,onClick:function(){T(3)},onBlock:z,onBlockBtnClick:function(){T(1)}}),!y&&P>=5&&(0,s.jsx)(a.Z,{paragraphs:x,onClick:function(){e.push("/2")},onBlock:z,onBlockBtnClick:function(){}})]}),(0,s.jsxs)(i(),{isOpen:1===P||4===P,onRequestClose:H,style:{content:{width:"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",display:"flex",justifyContent:"center"}},children:[P<3&&h[C]&&h[C].block&&(0,s.jsx)(s.Fragment,{children:h[C].block.img&&(0,s.jsx)("img",{src:h[C].block.img,width:"50%"})}),4===P&&(0,s.jsx)(s.Fragment,{children:"\u95dc\u9375\u9ede\u64ca\uff1a\u6642\u9418"})]}),3===P&&(0,s.jsx)("div",{ref:L,style:{animationName:N?"popup":"none",animationDuration:"1.5s",animationDirection:"alternate",animationIterationCount:"1",position:"absolute",opacity:0,top:X.y,left:X.x,background:"white",padding:"12px"},children:"\u6b64\u8655\u6c92\u6709\u7279\u6b8a\u4e4b\u8655"})]})}},5271:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/8-jail-bkp",function(){return n(387)}])}},function(e){e.O(0,[774,887,152,888,179],(function(){return t=5271,e(e.s=t);var t}));var t=e.O();_N_E=t}]);