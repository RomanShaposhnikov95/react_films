(this.webpackJsonpreact_films=this.webpackJsonpreact_films||[]).push([[5],{59:function(c,e,i){},60:function(c,e,i){},70:function(c,e,i){"use strict";i.r(e);var n=i(9),s=(i(59),i(60),i(64)),t=i(2),l=function(c){return Object(t.jsxs)("div",{className:"raitings",children:[Object(t.jsx)(r,{color:c.valueFromSer>0,onClick:c.onClick,value:1}),Object(t.jsx)(r,{color:c.valueFromSer>1,onClick:c.onClick,value:2}),Object(t.jsx)(r,{color:c.valueFromSer>2,onClick:c.onClick,value:3}),Object(t.jsx)(r,{color:c.valueFromSer>3,onClick:c.onClick,value:4}),Object(t.jsx)(r,{color:c.valueFromSer>4,onClick:c.onClick,value:5})]})},r=function(c){return Object(t.jsx)("span",{onClick:function(){c.onClick(c.value)},children:c.color?Object(t.jsx)(s.a,{className:"stars"}):Object(t.jsx)(s.b,{className:"starsJust"})})},a=i(1),o=i(3),j=i(13),b=i(16),u=i(14);e.default=function(){var c=Object(o.h)().id,e=Object(j.b)(),i=Object(j.c)((function(c){return c.allFilms})),s=i.filmInfo,r=i.filmsLoadingStatus,O=Object(o.g)(),d=function(){return O(-1)};Object(a.useEffect)((function(){e(Object(b.c)(c))}),[c,e]);var f=s.posterUrl,m=s.ratingKinopoisk,v=s.nameOriginal,x=s.description,k=Math.floor(m/2),h=Object(a.useState)(k),C=Object(n.a)(h,2),p=C[0],g=C[1],N=function(c,e){return"loading"===e?Object(t.jsx)(u.a,{}):"error"===e?Object(t.jsx)("p",{children:"Loading error"}):c?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"filmInfoPoster",children:Object(t.jsx)("img",{src:f,alt:f,className:"filInfoImg"})}),Object(t.jsxs)("div",{className:"Info",children:[Object(t.jsx)("div",{className:"infoTitle",children:v}),Object(t.jsx)("div",{className:"description",children:x}),Object(t.jsxs)("div",{className:"raiting",children:[Object(t.jsx)(l,{valueFromSer:p,onClick:g}),Object(t.jsx)("span",{children:m})]}),Object(t.jsx)("div",{onClick:d,className:"back",children:Object(t.jsx)("p",{children:"\u2190 Back"})})]})]}):void 0}(s,r);return Object(t.jsx)("div",{className:"filmInfo",children:N})}}}]);
//# sourceMappingURL=5.a504e3b0.chunk.js.map