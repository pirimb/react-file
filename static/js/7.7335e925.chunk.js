(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{229:function(r,t,e){r.exports={formControl:"FormControls_formControl__rJO7G",error:"FormControls_error___zxky",formSummaryError:"FormControls_formSummaryError__1BjOw"}},230:function(r,t,e){"use strict";e.d(t,"a",(function(){return s})),e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return l}));var n=e(3),c=e(243),a=e(229),o=e.n(a),i=e(2),s=function(r){return function(t){var e=t.input,a=t.meta,s=Object(c.a)(t,["input","meta"]),u=a.error&&a.touched;return Object(i.jsxs)("div",{className:o.a.formControl+" "+(u?o.a.error:""),children:[Object(i.jsx)("div",{children:Object(i.jsx)(r,Object(n.a)(Object(n.a)({},e),s))}),u&&Object(i.jsx)("span",{children:a.error})]})}},u=s("input"),l=s("textarea")},232:function(r,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"a",(function(){return c}));var n=function(r){if(!r)return"Field is required"},c=function(r){return function(t){if(t.length>r)return"Max length is ".concat(r," symbols")}}},302:function(r,t,e){"use strict";e.r(t);var n=e(28),c=e(7),a=e(108),o=e(109),i=e(26),s=e(232),u=e(230),l=e(229),j=e.n(l),m=e(2),b=Object(o.a)({form:"login"})((function(r){return Object(m.jsxs)("form",{onSubmit:r.handleSubmit,children:[Object(m.jsx)("div",{children:Object(m.jsx)(a.a,{placeholder:"Email",name:"email",component:u.b,validate:[s.b]})}),Object(m.jsx)("div",{children:Object(m.jsx)(a.a,{placeholder:"Password",name:"password",component:u.b,type:"password",validate:[s.b]})}),Object(m.jsxs)("div",{children:[Object(m.jsx)(a.a,{component:"input",name:"rememberMe",type:"checkBox"}),"Remember me"]}),r.error&&Object(m.jsx)("div",{className:j.a.formSummaryError,children:r.error}),r.captchaUrl&&Object(m.jsx)("img",{src:r.captchaUrl,alt:"captcha"}),r.captchaUrl&&Object(m.jsx)(a.a,{placeholder:"captcha",name:"captcha",component:u.b,validate:s.b}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Login"})})]})}));t.default=Object(n.b)((function(r){return{isAuth:r.auth.isAuth,captchaUrl:r.auth.captchaUrl}}),{login:i.c})((function(r){return r.isAuth?Object(m.jsx)(c.a,{to:"/profile"}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)(b,{onSubmit:function(t){r.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:r.captchaUrl})]})}))}}]);
//# sourceMappingURL=7.7335e925.chunk.js.map