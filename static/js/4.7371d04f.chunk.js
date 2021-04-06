/*! For license information please see 4.7371d04f.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{293:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t(5),o=t(51),s=t(52),i=t(54),a=t(53),u=t(0),c=t.n(u),l=t(22),f=t(11),p=t(1),h=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var n=function(n){Object(i.a)(u,n);var t=Object(a.a)(u);function u(){return Object(o.a)(this,u),t.apply(this,arguments)}return Object(s.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(r.a)({},this.props)):Object(p.jsx)(f.a,{to:"/login"})}}]),u}(c.a.Component);return Object(l.b)(h)(n)}},295:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(93);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){o=!0,s=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw s}}return t}}(e,n)||Object(r.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},297:function(e,n,t){e.exports={userPhoto:"Users_userPhoto__Dj6M4",userContainer:"Users_userContainer__Q4PBm",btnContainer:"Users_btnContainer__3D_RZ",btn:"Users_btn__2q5-i",infoContainer:"Users_infoContainer__1HsC0"}},298:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var a in r)t.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},299:function(e,n,t){e.exports={selectedPage:"Paginator_selectedPage__1nHf-",pages:"Paginator_pages__ONJo9",pagesContainer:"Paginator_pagesContainer__s1c5l"}},304:function(e,n,t){"use strict";t.r(n);var r=t(51),o=t(52),s=t(54),i=t(53),a=t(22),u=t(106),c=t(0),l=t.n(c),f=t(297),p=t.n(f),h=t(135),g=t(96),j=t(295),b=t(298),d=t.n(b),v=t(299),O=t.n(v),y=t(1),P=function(e){for(var n=Math.ceil(e.totalUsersCount/e.pageSize),t=[],r=1;r<=n;r++)t.push(r);var o=Math.ceil(n/e.portionSize),s=Object(c.useState)(1),i=Object(j.a)(s,2),a=i[0],u=i[1],l=(a-1)*e.portionSize+1,f=a*e.portionSize;return Object(y.jsxs)("div",{className:O.a.pagesContainer,children:[a>1&&Object(y.jsx)("button",{onClick:function(){u(a-1)},children:"prev"}),t.filter((function(e){return e>=l&&e<=f})).map((function(n){return Object(y.jsx)("div",{className:d()(O.a.pages,Object(g.a)({},O.a.selectedPage,e.currentPage===n)),onClick:function(){e.onPageChange(n)},children:n},n.id)})),o>a&&Object(y.jsx)("button",{onClick:function(){u(a+1)},children:"next"})]})},m=t(16),x=function(e){var n=e.user;return Object(y.jsxs)("div",{className:p.a.userContainer,children:[Object(y.jsxs)("div",{className:p.a.ava,children:[Object(y.jsx)("div",{children:Object(y.jsx)(m.b,{to:"/profile/"+n.id,children:Object(y.jsx)("img",{className:p.a.userPhoto,src:null!=n.photos.small?n.photos.small:h.a,alt:"photo"})})}),Object(y.jsx)("div",{className:p.a.btnContainer,children:n.followed?Object(y.jsx)("button",{className:p.a.btn,disabled:e.followInProgress.some((function(e){return e===n.id})),onClick:function(){e.unfollow(n.id)},children:"Unfollow"}):Object(y.jsx)("button",{className:p.a.btn,disabled:e.followInProgress.some((function(e){return e===n.id})),onClick:function(){e.follow(n.id)},children:"Follow"})})]}),Object(y.jsxs)("div",{className:p.a.infoContainer,children:[Object(y.jsxs)("div",{className:p.a.name,children:[Object(y.jsx)("div",{children:n.name}),Object(y.jsx)("div",{children:n.status})]}),Object(y.jsxs)("div",{className:p.a.location,children:[Object(y.jsx)("div",{children:"u.location.country"}),Object(y.jsx)("div",{children:"u.location.city"})]})]})]})},w=t(55),C=function(e){return Object(y.jsxs)("div",{className:p.a.usersContainer,children:[Object(y.jsx)(P,{currentPage:e.currentPage,onPageChange:e.onPageChange,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,portionSize:"10"}),Object(y.jsx)("div",{children:e.isFetching?Object(y.jsx)(w.a,{}):e.users.map((function(n){return Object(y.jsx)(x,{user:n,followInProgress:e.followInProgress,unfollow:e.unfollow,follow:e.follow},n.id)}))})]})},_=(t(293),t(10));function S(e,n){return e===n}function U(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}function z(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var N=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var s=0,i=r.pop(),a=z(r),u=e.apply(void 0,[function(){return s++,i.apply(null,arguments)}].concat(t)),c=e((function(){for(var e=[],n=a.length,t=0;t<n;t++)e.push(a[t].apply(null,arguments));return u.apply(null,e)}));return c.resultFunc=i,c.dependencies=a,c.recomputations=function(){return s},c.resetRecomputations=function(){return s=0},c}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S,t=null,r=null;return function(){return U(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var A=function(e){return e.usersPage.pageSize},I=function(e){return e.usersPage.totalUsersCount},k=function(e){return e.usersPage.currentPage},F=function(e){return e.usersPage.isFetching},M=function(e){return e.usersPage.followInProgress},D=N((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),J=function(e){Object(s.a)(t,e);var n=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=n.call.apply(n,[this].concat(s))).onPageChange=function(n){e.props.getUsers(n,e.props.pageSize)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,users:this.props.users,followInProgress:this.props.followInProgress,follow:this.props.follow,unfollow:this.props.unfollow,isFetching:this.props.isFetching})})}}]),t}(l.a.Component);n.default=Object(_.d)(Object(a.b)((function(e){return{users:D(e),pageSize:A(e),totalUsersCount:I(e),currentPage:k(e),isFetching:F(e),followInProgress:M(e)}}),{toggleFollow:u.e,setCurrentPage:u.d,toggleFollowInProgress:u.f,getUsers:u.c,follow:u.b,unfollow:u.g}))(J)}}]);
//# sourceMappingURL=4.7371d04f.chunk.js.map