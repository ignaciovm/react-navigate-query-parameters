(this["webpackJsonpreact-nav-query-params"]=this["webpackJsonpreact-nav-query-params"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(17),j=c.n(o),r=c(19),a=c(2),i=Object(n.createContext)(),s=c(7),b="[AUTH] LOGIN",u="[AUTH] LOGOUT",O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(s.a)(Object(s.a)({},t.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},d=c(1),l=function(){console.log("login");var e=Object(n.useContext)(i).dispatch;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Login Screen"}),Object(d.jsx)("button",{onClick:function(){e({type:b})},children:"Login"})]})},h=function(){return console.log("about"),Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"About Screen"})})},x=function(){return console.log("home"),Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Home Screen"})})},p=c(8),g=function(){var e=Object(n.useContext)(i).dispatch;return Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(p.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(p.b,{to:"/?page=about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){e({type:u})},children:"Logout"})})]})},m=function(e){var t=e.location;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsxs)(a.d,{location:t,children:[Object(d.jsx)(a.b,{exact:!0,path:"/about",component:h}),Object(d.jsx)(a.b,{exact:!0,path:"/",component:x}),Object(d.jsx)(a.a,{to:"/"})]})]})},v=c(11),f=["isAuthenticated","component"],A=function(e){var t=e.isAuthenticated,c=e.component,n=Object(v.a)(e,f);return Object(d.jsx)(a.b,Object(s.a)(Object(s.a)({},n),{},{component:function(e){return t?Object(d.jsx)(c,Object(s.a)({},e)):Object(d.jsx)(a.a,{to:"/?page=login"})}}))},y=["isAuthenticated","component"],C=function(e){var t=e.isAuthenticated,c=e.component,n=Object(v.a)(e,y);return Object(d.jsx)(a.b,Object(s.a)(Object(s.a)({},n),{},{component:function(e){return t?Object(d.jsx)(a.a,{to:"/"}):Object(d.jsx)(c,Object(s.a)({},e))}}))},L=function(){var e=Object(n.useContext)(i).auth,t=k();return Object(d.jsx)("div",{children:Object(d.jsxs)(a.d,{location:{pathname:"/".concat(t.get("page")||"")},children:[Object(d.jsx)(C,{path:"/login",exact:!0,isAuthenticated:e.logged,component:l}),Object(d.jsx)(A,{path:"/",isAuthenticated:e.logged,component:m})]})})},k=function(){return new URLSearchParams(Object(a.g)().search)},w=function(){var e=Object(n.useReducer)(O,{logged:!1}),t=Object(r.a)(e,2),c=t[0],o=t[1];return Object(d.jsx)(i.Provider,{value:{auth:c,dispatch:o},children:Object(d.jsx)(p.a,{children:Object(d.jsx)(L,{})})})};c(30);j.a.render(Object(d.jsx)(w,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.7872a6a4.chunk.js.map