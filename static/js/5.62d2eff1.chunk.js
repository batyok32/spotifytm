(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{78:function(e,t,c){"use strict";var n=c(13),s=c(0),i=c(6),l=c(12),a=c(29),o=c(3),r=c(1);t.a=function(e){var t=Object(i.c)((function(e){return Object(a.a)(e)})),c=e.id,d=e.authors,b=e.name,j=e.duration,u=e.date,f=Object(s.useState)(!1),x=Object(n.a)(f,2),h=x[0],p=x[1],O=Object(s.useState)(!1),m=Object(n.a)(O,2),v=m[0],y=m[1],g=Object(i.b)();return Object(s.useEffect)((function(){(null===t||void 0===t?void 0:t.id)===c?y(!0):y(!1)}),[t]),Object(r.jsxs)("div",{className:"row pb-2 mb-2 pt-2 align-items-center btn-nav",style:{color:"#b3b3b3",fontSize:"14px"},children:[Object(r.jsx)("div",{onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},className:"col-1 ps-3 fs-6 d-flex justify-content-center play-btn",role:"button",children:v?Object(r.jsx)("i",{role:"button",class:"bi bi-pause-circle-fill fs-5"}):h?Object(r.jsx)("i",{class:"bi bi-play-circle-fill",onClick:function(){g({type:o.u,payload:e})}}):Object(r.jsx)("i",{class:"bi bi-play-fill"})}),Object(r.jsxs)("div",{className:"col d-flex justify-content-start align-items-center ",children:[Object(r.jsx)("img",{src:"https://i.scdn.co/image/ab67616d00004851c5909eb7b91b1e9a0a3a74bf",style:{width:"40px",borderRadius:"3px",height:"40px"}}),Object(r.jsxs)("div",{className:"d-flex ms-3 flex-column justify-content-between ",children:[Object(r.jsx)("div",{className:"fs-6 fw-bold text-white truncate-overflow-1",children:b}),Array.isArray(d)&&d.length>=1&&Object(r.jsx)("div",{className:"d-flex",children:d.map((function(e,t){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.b,{to:"/singer/".concat(e.slug,"/").concat(e.id),style:{textTransform:"capitalize"},className:"gray-text text-decoration-none d-inline fw-normal truncate-overflow-1",children:null===e||void 0===e?void 0:e.name}),d.length>t+1&&Object(r.jsx)("span",{className:"px-1",children:","})]})}))})]})]}),Object(r.jsxs)("div",{className:"col-3 d-none d-md-flex justify-content-center",children:[function(){var e=new Date,t=new Date(u),c=Math.abs(e-t);return Math.ceil(c/864e5)}()," days ago"]}),Object(r.jsx)("div",{className:"col-2 d-flex justify-content-center",children:function(){var e=parseInt(j,10),t=Math.floor(e/3600),c=Math.floor((e-3600*t)/60),n=e-3600*t-60*c;return c<10&&(c="0"+c),n<10&&(n="0"+n),c+":"+n}()})]})}},81:function(e,t,c){"use strict";c.r(t);var n=c(13),s=c(0),i=c(6),l=c(78),a=c(22),o=c(1);t.default=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),c=t[0],r=t[1],d=Object(s.useState)("\u041f\u043e\u0438\u0441\u043a"),b=Object(n.a)(d,2),j=b[0],u=b[1],f=Object(s.useState)([]),x=Object(n.a)(f,2),h=x[0],p=x[1],O=Object(s.useState)(!1),m=Object(n.a)(O,2),v=m[0],y=m[1],g=Object(s.useState)(null),N=Object(n.a)(g,2),w=N[0],S=N[1],k=Object(s.useState)(0),z=Object(n.a)(k,2),M=z[0],C=z[1],A=Object(i.b)();return Object(o.jsxs)("div",{className:"px-4 py-2",children:[Object(o.jsx)("div",{class:"mb-4",children:Object(o.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},type:"text",className:"form-control search-input ps-4",id:"exampleFormControlInput1",placeholder:"\u041f\u043e\u0438\u0441\u043a..."})}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsxs)("button",{className:"btn text-uppercase fw-bold px-4 py-3 rounded-pill btn-facebook",style:{letterSpacing:"2px",fontSize:"14px",lineHeight:1},onClick:function(){if(c.length>=3){var e="search=".concat(c).concat(M?"&offset=".concat(M):"","&ordering=-created");y(!0),A(Object(a.e)(e)).then((function(e){y(!1),p(e.results),S(e)}))}else u("\u041f\u043e\u0438\u0441\u043a \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 3 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0431\u0443\u043a\u0432"),setTimeout((function(){u("\u041f\u043e\u0438\u0441\u043a")}),3e3)},children:[Object(o.jsx)("i",{class:"bi bi-binoculars-fill  me-2",style:{fontSize:"16px"}}),j]})}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"h1 my-5 text-center truncate-overflow-2",children:v?Object(o.jsx)("div",{class:"spinner-border h6",role:"status",children:Object(o.jsx)("span",{class:"visually-hidden",children:"Loading..."})}):"\u041f\u043e\u0438\u0441\u043a: ".concat(c)}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row my-3 pb-3 align-items-center",style:{color:"#b3b3b3",fontSize:"13px",letterSpacing:"1px",fontWeight:600,borderBottom:"1px solid rgba(255,255,255,.1)"},children:[Object(o.jsx)("div",{className:"col-1 fs-6 d-flex justify-content-center",children:"#"}),Object(o.jsx)("div",{className:"col",children:"\u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0415"}),Object(o.jsx)("div",{className:"col-3 d-none d-md-flex justify-content-center",children:"\u0414\u0410\u0422\u0410 \u0414\u041e\u0411\u0410\u0412\u041b\u0415\u041d\u0418\u042f"}),Object(o.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(o.jsx)("i",{className:"bi bi-clock fs-6"})})]}),Array.isArray(h)&&h.length>=1&&h.map((function(e,t){return Object(o.jsx)(l.a,{id:null===e||void 0===e?void 0:e.id,name:null===e||void 0===e?void 0:e.name,duration:null===e||void 0===e?void 0:e.duration,song_file:e.song_file,date:null===e||void 0===e?void 0:e.created,author:{name:"The Limba",link:"/"}},null===e||void 0===e?void 0:e.id)}))]}),(null===w||void 0===w?void 0:w.next)&&Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsxs)("button",{className:"btn text-uppercase fw-bold my-4  py-3 rounded-pill btn-black",style:{letterSpacing:"2px",boxShadow:"none",fontSize:"14px",lineHeight:1},onClick:function(){return C(M+h.length)},children:[Object(o.jsx)("i",{class:"bi bi-caret-down-fill me-2",style:{fontSize:"16px"}}),"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"]})})]})]})}}}]);
//# sourceMappingURL=5.62d2eff1.chunk.js.map