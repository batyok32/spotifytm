(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[3],{78:function(e,t,n){"use strict";var c=n(13),i=n(0),s=n(6),l=n(12),a=n(29),r=n(3),o=n(1);t.a=function(e){var t=Object(s.c)((function(e){return Object(a.a)(e)})),n=e.id,d=e.authors,b=e.name,j=e.duration,u=e.date,f=Object(i.useState)(!1),x=Object(c.a)(f,2),m=x[0],v=x[1],h=Object(i.useState)(!1),O=Object(c.a)(h,2),p=O[0],g=O[1],y=Object(s.b)();return Object(i.useEffect)((function(){(null===t||void 0===t?void 0:t.id)===n?g(!0):g(!1)}),[t]),Object(o.jsxs)("div",{className:"row pb-2 mb-2 pt-2 align-items-center btn-nav",style:{color:"#b3b3b3",fontSize:"14px"},children:[Object(o.jsx)("div",{onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)},className:"col-1 ps-3 fs-6 d-flex justify-content-center play-btn",role:"button",children:p?Object(o.jsx)("i",{role:"button",class:"bi bi-pause-circle-fill fs-5"}):m?Object(o.jsx)("i",{class:"bi bi-play-circle-fill",onClick:function(){y({type:r.u,payload:e})}}):Object(o.jsx)("i",{class:"bi bi-play-fill"})}),Object(o.jsxs)("div",{className:"col d-flex justify-content-start align-items-center ",children:[Object(o.jsx)("img",{src:"https://i.scdn.co/image/ab67616d00004851c5909eb7b91b1e9a0a3a74bf",style:{width:"40px",borderRadius:"3px",height:"40px"}}),Object(o.jsxs)("div",{className:"d-flex ms-3 flex-column justify-content-between ",children:[Object(o.jsx)("div",{className:"fs-6 fw-bold text-white truncate-overflow-1",children:b}),Array.isArray(d)&&d.length>=1&&Object(o.jsx)("div",{className:"d-flex",children:d.map((function(e,t){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l.b,{to:"/singer/".concat(e.slug,"/").concat(e.id),style:{textTransform:"capitalize"},className:"gray-text text-decoration-none d-inline fw-normal truncate-overflow-1",children:null===e||void 0===e?void 0:e.name}),d.length>t+1&&Object(o.jsx)("span",{className:"px-1",children:","})]})}))})]})]}),Object(o.jsxs)("div",{className:"col-3 d-none d-md-flex justify-content-center",children:[function(){var e=new Date,t=new Date(u),n=Math.abs(e-t);return Math.ceil(n/864e5)}()," days ago"]}),Object(o.jsx)("div",{className:"col-2 d-flex justify-content-center",children:function(){var e=parseInt(j,10),t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),c=e-3600*t-60*n;return n<10&&(n="0"+n),c<10&&(c="0"+c),n+":"+c}()})]})}},84:function(e,t,n){"use strict";n.r(t);var c=n(13),i=n(0),s=n(6),l=n(12),a=n(22),r=n(78),o=n(1);var d=function(e){var t=e.genre,n=Object(i.useState)([]),d=Object(c.a)(n,2),b=d[0],j=d[1],u=Object(s.b)();return Object(i.useEffect)((function(){var e="genres=".concat(null===t||void 0===t?void 0:t.id,"&ordering=-created&limit=5");u(Object(a.e)(e)).then((function(e){j(e.results)}))}),[t]),Object(o.jsxs)("div",{className:"d-flex mt-5 flex-column container",children:[Object(o.jsxs)("div",{className:"d-flex  justify-content-between align-items-center",children:[Object(o.jsxs)("div",{className:"flex-column d-flex mb-3",children:[Object(o.jsx)(l.b,{to:"/genre/".concat(t.slug,"/").concat(t.id),className:"fw-bold  text-white text-decoration-none",style:{fontSize:"24px"},children:null===t||void 0===t?void 0:t.name}),Object(o.jsx)("div",{className:"gray-text my-2 truncate-overflow-1",children:null===t||void 0===t?void 0:t.description})]}),Object(o.jsx)(l.b,{to:"/genre/".concat(t.slug,"/").concat(t.id),className:"fw-bold ms-2 mb-4 muted-text text-decoration-none",style:{fontSize:"12px",letterSpacing:"2px"},children:"\u0415\u0429\u0401"})]}),Object(o.jsxs)("div",{className:"w-100",children:[Object(o.jsxs)("div",{className:"row my-3 pb-3 align-items-center",style:{color:"#b3b3b3",fontSize:"13px",letterSpacing:"1px",fontWeight:600,borderBottom:"1px solid rgba(255,255,255,.1)"},children:[Object(o.jsx)("div",{className:"col-1 fs-6 d-flex justify-content-center",children:"#"}),Object(o.jsx)("div",{className:"col",children:"\u041d\u0410\u0417\u0412\u0410\u041d\u0418\u0415"}),Object(o.jsx)("div",{className:"col-3 d-none d-md-flex justify-content-center",children:"\u0414\u0410\u0422\u0410 \u0414\u041e\u0411\u0410\u0412\u041b\u0415\u041d\u0418\u042f"}),Object(o.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(o.jsx)("i",{className:"bi bi-clock fs-6"})})]}),Array.isArray(b)&&b.length>=1&&b.map((function(e,t){return Object(o.jsx)(r.a,{id:null===e||void 0===e?void 0:e.id,name:null===e||void 0===e?void 0:e.name,duration:null===e||void 0===e?void 0:e.duration,song_file:e.song_file,date:null===e||void 0===e?void 0:e.created,authors:e.singers},null===e||void 0===e?void 0:e.id)}))]})]})},b=function(e){return{genres:e.main.genres}};t.default=function(){var e=Object(s.c)(b).genres,t=Object(i.useState)([]),n=Object(c.a)(t,2),l=n[0],a=n[1],r=function(t){var n=e.reverse().slice(0,t);a(n)};return Object(i.useEffect)((function(){Array.isArray(e)&&e.length>=1&&r(5)}),[e]),Object(o.jsxs)("div",{className:"px-4 py-2",children:[Array.isArray(e)&&e.length>=1&&l.length>=1&&l.map((function(e){return Object(o.jsx)(d,{genre:e})})),Array.isArray(e)&&e.length>=1&&l.length<e.length&&Object(o.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(o.jsxs)("button",{className:"btn text-uppercase fw-bold my-4  py-3 rounded-pill btn-black",style:{letterSpacing:"2px",boxShadow:"none",fontSize:"14px",lineHeight:1},onClick:function(){return r(l.length+5)},children:[Object(o.jsx)("i",{class:"bi bi-caret-down-fill me-2",style:{fontSize:"16px"}}),"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"]})})]})}}}]);
//# sourceMappingURL=3.7886450e.chunk.js.map