(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{78:function(e,t,c){"use strict";var n=c(13),s=c(0),i=c(6),a=c(12),l=c(29),r=c(3),o=c(1);t.a=function(e){var t=Object(i.c)((function(e){return Object(l.a)(e)})),c=e.id,d=e.authors,b=e.name,j=e.duration,u=e.date,f=Object(s.useState)(!1),x=Object(n.a)(f,2),h=x[0],O=x[1],v=Object(s.useState)(!1),m=Object(n.a)(v,2),p=m[0],y=m[1],g=Object(i.b)();return Object(s.useEffect)((function(){(null===t||void 0===t?void 0:t.id)===c?y(!0):y(!1)}),[t]),Object(o.jsxs)("div",{className:"row pb-2 mb-2 pt-2 align-items-center btn-nav",style:{color:"#b3b3b3",fontSize:"14px"},children:[Object(o.jsx)("div",{onMouseEnter:function(){return O(!0)},onMouseLeave:function(){return O(!1)},className:"col-1 ps-3 fs-6 d-flex justify-content-center play-btn",role:"button",children:p?Object(o.jsx)("i",{role:"button",class:"bi bi-pause-circle-fill fs-5"}):h?Object(o.jsx)("i",{class:"bi bi-play-circle-fill",onClick:function(){g({type:r.u,payload:e})}}):Object(o.jsx)("i",{class:"bi bi-play-fill"})}),Object(o.jsxs)("div",{className:"col d-flex justify-content-start align-items-center ",children:[Object(o.jsx)("img",{src:"https://i.scdn.co/image/ab67616d00004851c5909eb7b91b1e9a0a3a74bf",style:{width:"40px",borderRadius:"3px",height:"40px"}}),Object(o.jsxs)("div",{className:"d-flex ms-3 flex-column justify-content-between ",children:[Object(o.jsx)("div",{className:"fs-6 fw-bold text-white truncate-overflow-1",children:b}),Array.isArray(d)&&d.length>=1&&Object(o.jsx)("div",{className:"d-flex",children:d.map((function(e,t){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.b,{to:"/singer/".concat(e.slug,"/").concat(e.id),style:{textTransform:"capitalize"},className:"gray-text text-decoration-none d-inline fw-normal truncate-overflow-1",children:null===e||void 0===e?void 0:e.name}),d.length>t+1&&Object(o.jsx)("span",{className:"px-1",children:","})]})}))})]})]}),Object(o.jsxs)("div",{className:"col-3 d-none d-md-flex justify-content-center",children:[function(){var e=new Date,t=new Date(u),c=Math.abs(e-t);return Math.ceil(c/864e5)}()," days ago"]}),Object(o.jsx)("div",{className:"col-2 d-flex justify-content-center",children:function(){var e=parseInt(j,10),t=Math.floor(e/3600),c=Math.floor((e-3600*t)/60),n=e-3600*t-60*c;return c<10&&(c="0"+c),n<10&&(n="0"+n),c+":"+n}()})]})}},82:function(e,t,c){"use strict";c.r(t);var n=c(13),s=c(0),i=c(6),a=c(5),l=c(78),r=c(22),o=c(1);t.default=function(){var e=Object(a.h)(),t=e.slug,c=e.id,d=Object(s.useState)(null),b=Object(n.a)(d,2),j=b[0],u=b[1],f=Object(s.useState)([]),x=Object(n.a)(f,2),h=x[0],O=x[1],v=Object(s.useState)(!1),m=Object(n.a)(v,2),p=m[0],y=m[1],g=Object(i.b)();return Object(s.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"}),y(!0),g(Object(r.c)(t,c)).then((function(e){u(e),y(!1)}))}),[t,c]),Object(s.useEffect)((function(){if(j){y(!0);var e="singers=".concat(null===j||void 0===j?void 0:j.id,"&ordering=-created&limit=50");g(Object(r.e)(e)).then((function(e){O(e.results),y(!1)}))}}),[j]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"h1 my-5 text-center truncate-overflow-2",children:p?Object(o.jsx)("div",{class:"spinner-border h6",role:"status",children:Object(o.jsx)("span",{class:"visually-hidden",children:"Loading..."})}):j&&j.name}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row my-3 pb-3 align-items-center",style:{color:"#b3b3b3",fontSize:"13px",letterSpacing:"1px",fontWeight:600,borderBottom:"1px solid rgba(255,255,255,.1)"},children:[Object(o.jsx)("div",{className:"col-1 fs-6 d-flex justify-content-center",children:"#"}),Object(o.jsx)("div",{className:"col",children:"\u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0415"}),Object(o.jsx)("div",{className:"col-3 d-none d-md-flex justify-content-center",children:"\u0414\u0410\u0422\u0410 \u0414\u041e\u0411\u0410\u0412\u041b\u0415\u041d\u0418\u042f"}),Object(o.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(o.jsx)("i",{className:"bi bi-clock fs-6"})})]}),Array.isArray(h)&&h.length>=1&&h.map((function(e,t){return Object(o.jsx)(l.a,{id:null===e||void 0===e?void 0:e.id,name:null===e||void 0===e?void 0:e.name,duration:null===e||void 0===e?void 0:e.duration,song_file:e.song_file,date:e.created,authors:e.singers},null===e||void 0===e?void 0:e.id)}))]})]})}}}]);
//# sourceMappingURL=6.9e001589.chunk.js.map