(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[999],{2445:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication",function(){return r(1381)}])},9744:function(e,s,r){"use strict";var a=r(8014),n=(r(6168),r(5657)),t=r.n(n);s.Z=function(e){var s=e.pageTitle,r=e.homePageUrl,n=e.homePageText,l=e.activePageText;return(0,a.jsxs)("div",{className:"page-title-area",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"page-title-content",children:[(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(t(),{href:r,children:(0,a.jsx)("a",{children:n})})}),(0,a.jsx)("li",{className:"active",children:l})]}),(0,a.jsx)("h2",{children:s})]})}),(0,a.jsx)("div",{className:"shape9",children:(0,a.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})}},1381:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return E}});var a=r(8014),n=r(6168),t=r(9744),l=r(3692),i=r(2299),c=r(5447),o=r(9728),d=r(1157),u=r(1557),m=r(2686),h=r(5657),p=r.n(h),x=r(3024),f=r.n(x),j=r(8081),v=r(2742),g=r(9890),b=r(2084),N=r.n(b),w=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(N(),{id:"42dbd1e0c661fa12",children:".spinner-border.jsx-42dbd1e0c661fa12{height:20px;left:8px;border-bottom:3px solid#fff;border-left:3px solid#fff;border-top:3px solid#fff;top:3px;position:relative;width:20px}"}),(0,a.jsx)("div",{role:"status",className:"jsx-42dbd1e0c661fa12 spinner-border text-secondary",children:(0,a.jsx)("span",{className:"jsx-42dbd1e0c661fa12 visually-hidden",children:"Loading..."})})]})},Z={email:"",password:""},y=function(){var e=(0,d.Z)(n.useState(Z),2),s=e[0],r=e[1],t=(0,d.Z)(n.useState(!0),2),h=t[0],x=t[1],b=(0,d.Z)(n.useState(!1),2),N=b[0],y=b[1],P=(0,d.Z)(n.useState(""),2),_=P[0],E=P[1];n.useEffect((function(){var e=Object.values(s).every((function(e){return Boolean(e)}));x(!e)}),[s]);var C=function(e){var s=e.target,a=s.name,n=s.value;r((function(e){return(0,o.Z)((0,c.Z)({},e),(0,i.Z)({},a,n))}))},S=function(){var e=(0,l.Z)((function(e){var r,a,n,t;return(0,u.__generator)(this,(function(l){switch(l.label){case 0:e.preventDefault(),l.label=1;case 1:return l.trys.push([1,3,4,5]),y(!0),E(""),r="".concat(v.Z,"/api/v1/auth/signin"),a=(0,c.Z)({},s),[4,f().post(r,a)];case 2:return n=l.sent(),(0,g.jc)(n.data),[3,5];case 3:return t=l.sent(),(0,j.Z)(t,E),[3,5];case 4:return y(!1),[7];case 5:return[2]}}))}));return function(s){return e.apply(this,arguments)}}();return(0,a.jsxs)("div",{className:"login-form",children:[(0,a.jsx)("h2",{children:"Login"}),(0,a.jsx)(m.Z,{color:"danger",isOpen:!!_,children:_}),(0,a.jsxs)("form",{onSubmit:S,children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Email"}),(0,a.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",value:s.email,onChange:C})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Password"}),(0,a.jsx)("input",{className:"form-control",placeholder:"Password",name:"password",type:"password",value:s.password,onChange:C})]}),(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 remember-me-wrap",children:(0,a.jsxs)("p",{children:[(0,a.jsx)("input",{type:"checkbox",id:"test2"}),(0,a.jsx)("label",{htmlFor:"test2",children:"Remember me"})]})}),(0,a.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap",children:(0,a.jsx)(p(),{href:"/reset-password",children:(0,a.jsx)("a",{className:"lost-your-password",children:"Lost your password?"})})})]}),(0,a.jsxs)("button",{type:"submit",disabled:h,children:["Log In",N?(0,a.jsx)(w,{}):""]})]})]})},P={name:"",email:"",password:"",confirmPassword:""},_=function(){var e=(0,d.Z)(n.useState(P),2),s=e[0],r=e[1],t=(0,d.Z)(n.useState(!0),2),h=t[0],p=t[1],x=(0,d.Z)(n.useState(!1),2),b=x[0],N=x[1],Z=(0,d.Z)(n.useState(""),2),y=Z[0],_=Z[1];n.useEffect((function(){var e=Object.values(s).every((function(e){return Boolean(e)}));p(!e)}),[s]);var E=function(e){var s=e.target,a=s.name,n=s.value;r((function(e){return(0,o.Z)((0,c.Z)({},e),(0,i.Z)({},a,n))}))},C=function(){var e=(0,l.Z)((function(e){var r,a,n,t;return(0,u.__generator)(this,(function(l){switch(l.label){case 0:e.preventDefault(),l.label=1;case 1:return l.trys.push([1,3,4,5]),N(!0),_(""),r="".concat(v.Z,"/api/v1/auth/signup"),a=(0,c.Z)({},s),[4,f().post(r,a)];case 2:return n=l.sent(),(0,g.jc)(n.data),[3,5];case 3:return t=l.sent(),(0,j.Z)(t,_),[3,5];case 4:return N(!1),[7];case 5:return[2]}}))}));return function(s){return e.apply(this,arguments)}}();return(0,a.jsxs)("div",{className:"register-form",children:[(0,a.jsx)("h2",{children:"Register"}),(0,a.jsx)(m.Z,{color:"danger",isOpen:!!y,children:y}),(0,a.jsxs)("form",{onSubmit:C,children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Name"}),(0,a.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name",name:"name",value:s.name,onChange:E})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Email"}),(0,a.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",value:s.email,onChange:E})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Password"}),(0,a.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:s.password,onChange:E})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Confirm Password"}),(0,a.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm Password",name:"confirmPassword",value:s.confirmPassword,onChange:E})]}),(0,a.jsx)("p",{className:"description",children:'The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )'}),(0,a.jsxs)("button",{type:"submit",disabled:h,children:["Register",b?(0,a.jsx)(w,{}):""]})]})]})},E=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.Z,{pageTitle:"Authentication",homePageUrl:"/",homePageText:"Home",activePageText:"Authentication"}),(0,a.jsx)("div",{className:"profile-authentication-area ptb-100",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,a.jsx)(y,{})}),(0,a.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,a.jsx)(_,{})})]})})})]})}},8081:function(e,s){"use strict";s.Z=function(e,s){var r;e.response?(r=e.response.data,e.response.data.error&&(r=e.response.data.error.message)):e.request&&(r=e.request),s(r)}}},function(e){e.O(0,[2686,9774,2888,179],(function(){return s=2445,e(e.s=s);var s}));var s=e.O();_N_E=s}]);