(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4853],{744:function(e,r){var t;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var o=n.apply(null,t);o&&e.push(o)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)s.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(r,[]))||(e.exports=t)}()},3171:function(e,r,t){"use strict";var s=t(6454);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,r,t,n,a,o){if(o!==s){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:n};return t.PropTypes=t,t}},862:function(e,r,t){e.exports=t(3171)()},6454:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2856:function(e,r,t){"use strict";var s=t(8515),n=t(2648),a=t(6168),o=t(862),i=t.n(o),c=t(744),l=t.n(c),u=t(6449),p=["className","cssModule","type","size","color","children","tag"],d={tag:u.iC,type:i().string,size:i().string,color:i().string,className:i().string,cssModule:i().object,children:i().string},h=function(e){var r=e.className,t=e.cssModule,o=e.type,i=e.size,c=e.color,d=e.children,h=e.tag,f=(0,n.Z)(e,p),v=(0,u.mx)(l()(r,!!i&&"spinner-"+o+"-"+i,"spinner-"+o,!!c&&"text-"+c),t);return a.createElement(h,(0,s.Z)({role:"status"},f,{className:v}),d&&a.createElement("span",{className:(0,u.mx)("sr-only",t)},d))};h.propTypes=d,h.defaultProps={tag:"div",type:"border",children:"Loading..."},r.Z=h},6449:function(e,r,t){"use strict";t.d(r,{CE:function(){return i},ei:function(){return c},iC:function(){return u},mx:function(){return o},rb:function(){return d},wF:function(){return p}});var s,n=t(862),a=t.n(n);function o(e,r){return void 0===e&&(e=""),void 0===r&&(r=s),r?e.split(" ").map((function(e){return r[e]||e})).join(" "):e}function i(e,r){var t={};return Object.keys(e).forEach((function(s){-1===r.indexOf(s)&&(t[s]=e[s])})),t}function c(e,r){for(var t,s=Array.isArray(r)?r:[r],n=s.length,a={};n>0;)a[t=s[n-=1]]=e[t];return a}var l="object"===typeof window&&window.Element||function(){};a().oneOfType([a().string,a().func,function(e,r,t){if(!(e[r]instanceof l))return new Error("Invalid prop `"+r+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},a().shape({current:a().any})]);var u=a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func}),a().arrayOf(a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},d=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];"undefined"===typeof window||!window.document||window.document.createElement},4712:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teacher/course/[id]",function(){return t(6830)}])},9744:function(e,r,t){"use strict";var s=t(8014),n=(t(6168),t(5657)),a=t.n(n);r.Z=function(e){var r=e.pageTitle,t=e.homePageUrl,n=e.homePageText,o=e.activePageText;return(0,s.jsxs)("div",{className:"page-title-area",children:[(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"page-title-content",children:[(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a(),{href:t,children:(0,s.jsx)("a",{children:n})})}),(0,s.jsx)("li",{className:"active",children:o})]}),(0,s.jsx)("h2",{children:r})]})}),(0,s.jsx)("div",{className:"shape9",children:(0,s.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})}},6830:function(e,r,t){"use strict";t.r(r);var s=t(3692),n=t(2299),a=t(5447),o=t(9728),i=t(1157),c=t(1557),l=t(8014),u=t(6168),p=t(2774),d=t(3024),h=t.n(d),f=t(2742),v=t(9890),m=t(2856),x=t(7083),g=t(8081),j=t(9744),y=t(5169),b=function(e){var r=e.existingData,t=(0,p.parseCookies)().token,d={id:r.id,title:r.title,overview:r.overview,price:r.price,profilePhoto:"",coverPhoto:"",course_preview_img:"",course_preview_video:r.course_preview_video,duration:r.duration,lessons:r.lessons,category:r.category},v=(0,i.Z)(u.useState(d),2),b=v[0],w=v[1],_=(0,i.Z)(u.useState(""),2),N=_[0],C=_[1],Z=(0,i.Z)(u.useState(""),2),P=Z[0],E=Z[1],T=(0,i.Z)(u.useState(""),2),O=T[0],U=T[1],R=(0,i.Z)(u.useState(!1),2),k=R[0],S=R[1],L=(0,i.Z)(u.useState(!1),2),M=L[0],z=L[1],I=(0,i.Z)(u.useState(!0),2),A=I[0],B=I[1],D=(0,i.Z)(u.useState(),2),F=D[0],V=D[1];u.useEffect((function(){var e=Object.values(b).every((function(e){return Boolean(e)}));B(!e)}),[b]);var W=function(e){var r=e.target,t=r.name,s=r.value,i=r.files;if("profilePhoto"===t){if(i[0].size/1024/1024>2)return addToast("The profile photo size greater than 2 MB. Make sure less than 2 MB.",{appearance:"error"}),void(e.target.value=null);w((function(e){return(0,o.Z)((0,a.Z)({},e),{profilePhoto:i[0]})})),C(window.URL.createObjectURL(i[0]))}else if("coverPhoto"===t){if(i[0].size/1024/1024>2)return addToast("The cover photo size greater than 2 MB. Make sure less than 2 MB.",{appearance:"error"}),void(e.target.value=null);w((function(e){return(0,o.Z)((0,a.Z)({},e),{coverPhoto:i[0]})})),E(window.URL.createObjectURL(i[0]))}else if("course_preview_img"===t){if(i[0].size/1024/1024>2)return addToast("The course preview omage size greater than 2 MB. Make sure less than 2 MB.",{appearance:"error"}),void(e.target.value=null);w((function(e){return(0,o.Z)((0,a.Z)({},e),{course_preview_img:i[0]})})),U(window.URL.createObjectURL(i[0]))}else w((function(e){return(0,o.Z)((0,a.Z)({},e),(0,n.Z)({},t,s))}))},q=function(){var e=(0,s.Z)((function(){var e,r;return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return S(!0),(e=new FormData).append("file",b.profilePhoto),e.append("upload_preset","vikings"),e.append("cloud_name","dev-empty"),b.profilePhoto?[4,h().post("Update here CLOUDINARY_URL",e)]:[3,2];case 1:r=t.sent(),t.label=2;case 2:return[2,r.data.url]}}))}));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=(0,s.Z)((function(){var e,r;return(0,c.__generator)(this,(function(t){switch(t.label){case 0:return S(!0),(e=new FormData).append("file",b.coverPhoto),e.append("upload_preset","vikings"),e.append("cloud_name","dev-empty"),b.coverPhoto?[4,h().post("Update here CLOUDINARY_URL",e)]:[3,2];case 1:r=t.sent(),t.label=2;case 2:return[2,r.data.url]}}))}));return function(){return e.apply(this,arguments)}}(),$=function(){var e=(0,s.Z)((function(){var e,r,t;return(0,c.__generator)(this,(function(s){switch(s.label){case 0:return S(!0),(e=new FormData).append("file",b.course_preview_img),e.append("upload_preset","vikings"),e.append("cloud_name","dev-empty"),b.course_preview_img?[4,h().post("Update here CLOUDINARY_URL",e)]:[3,2];case 1:r=s.sent(),s.label=2;case 2:return t=r.data.url,S(!1),z(!0),[2,t]}}))}));return function(){return e.apply(this,arguments)}}(),H=function(){var e=(0,s.Z)((function(e){var r,s,n,a,o,i,l,u,p,d,v,m,j,y,w,_;return(0,c.__generator)(this,(function(c){switch(c.label){case 0:e.preventDefault(),c.label=1;case 1:return c.trys.push([1,7,8,9]),r="",s="",n="",b.profilePhoto&&b.coverPhoto&&b.course_preview_img?[4,q()]:[3,5];case 2:return r=c.sent(),[4,Y()];case 3:return s=c.sent(),[4,$()];case 4:n=c.sent(),r=r.replace(/^http:\/\//i,"https://"),s=s.replace(/^http:\/\//i,"https://"),n=n.replace(/^http:\/\//i,"https://"),c.label=5;case 5:return a="".concat(f.Z,"/api/v1/courses/course/update"),o=b.id,i=b.title,l=b.overview,u=b.price,p=b.published,d=b.duration,v=b.lessons,m=b.category,j=b.course_preview_video,y={id:o,title:i,overview:l,price:u,published:p,duration:d,lessons:v,category:m,profile:r,cover:s,preview:n,course_preview_video:j},[4,h().post(a,y,{headers:{Authorization:t}})];case 6:return w=c.sent(),console.log(w.data),z(!1),x.ZP.success(w.data),[3,9];case 7:return _=c.sent(),(0,g.Z)(_,V),x.ZP.error(F),console.log(_),[3,9];case 8:return z(!1),[7];case 9:return[2]}}))}));return function(r){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j.Z,{pageTitle:"Teacher Course Create",homePageUrl:"/",homePageText:"Home",activePageText:"Teacher Course Create"}),(0,l.jsx)("div",{className:"ptb-100",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-4 col-lg-4",children:(0,l.jsx)("div",{className:"td-sidebar",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(y.Z,{href:"/teacher/courses",activeClassName:"active",children:(0,l.jsx)("a",{children:"My Courses"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(y.Z,{href:"/teacher/course/create",activeClassName:"active",children:(0,l.jsx)("a",{children:"Create A Course"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(y.Z,{href:"/teacher/courses/course-edit",activeClassName:"active",children:(0,l.jsx)("a",{children:"Edit My Course"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(y.Z,{href:"/teacher/course/upload-course-video",activeClassName:"active",children:(0,l.jsx)("a",{children:"Upload Course Video"})})})]})})}),(0,l.jsx)("div",{className:"col-md-8 col-lg-8",children:(0,l.jsxs)("div",{className:"border-box",children:[k&&(0,l.jsx)("h3",{className:"loading-spinner",children:(0,l.jsx)("div",{className:"d-table",children:(0,l.jsxs)("div",{className:"d-table-cell",children:[(0,l.jsx)(m.Z,{color:"primary"})," Image Uploading...."]})})}),M&&(0,l.jsx)("h3",{className:"loading-spinner",children:(0,l.jsx)("div",{className:"d-table",children:(0,l.jsxs)("div",{className:"d-table-cell",children:[(0,l.jsx)(m.Z,{color:"success"})," Wait...."]})})}),(0,l.jsxs)("form",{onSubmit:H,children:[(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Course Title"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter course title",className:"form-control",name:"title",value:b.title,onChange:W})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Course Overview"}),(0,l.jsx)("textarea",{type:"text",placeholder:"Enter course overview",className:"form-control",name:"overview",rows:"10",value:b.overview,onChange:W})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Course Price"}),(0,l.jsx)("input",{type:"number",placeholder:"Enter course price",className:"form-control",name:"price",value:b.price,onChange:W})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Course Lessons"}),(0,l.jsx)("input",{type:"text",placeholder:"30 Lessons",className:"form-control",name:"lessons",value:b.lessons,onChange:W})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Course Duration (Whole numbers of hours & minutes)"}),(0,l.jsx)("input",{type:"text",placeholder:"10 hours 30 minutes",className:"form-control",name:"duration",value:b.duration,onChange:W})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Categories"}),(0,l.jsx)("input",{type:"text",placeholder:"React, Ruby, Rails",className:"form-control",name:"category",value:b.category,onChange:W})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsxs)("label",{children:["Course Profile (",(0,l.jsx)("i",{children:"Image less than 2 MB & size 50x50"}),")"]}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{type:"file",name:"profilePhoto",accept:"image/*",onChange:W}),(0,l.jsx)("br",{}),(0,l.jsx)("img",{src:N,className:"mxw-200 mt-20"})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsxs)("label",{children:["Course Cover Photo (",(0,l.jsx)("i",{children:"Image less than 2 MB & size 1920x500"}),")"]}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{type:"file",name:"coverPhoto",accept:"image/*",onChange:W}),(0,l.jsx)("br",{}),(0,l.jsx)("img",{src:P,className:"mxw-200 mt-20"})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Course Preview Video URL"}),(0,l.jsx)("input",{type:"text",placeholder:"https://www.youtube.com/watch?v=Ke90Tje7VS0",className:"form-control",name:"course_preview_video",value:b.course_preview_video,onChange:W})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsxs)("label",{children:["Course Preview Image (",(0,l.jsx)("i",{children:"Image less than 2 MB & size 750x500"}),")"]}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{type:"file",name:"course_preview_img",accept:"image/*",onChange:W}),(0,l.jsx)("br",{}),(0,l.jsx)("img",{src:O,className:"mxw-200 mt-20"})]}),(0,l.jsxs)("button",{className:"default-btn",disabled:k||A||M,type:"submit",children:[(0,l.jsx)("i",{className:"flaticon-right-chevron"}),"Update",k||M?(0,l.jsx)(m.Z,{color:"success"}):"",(0,l.jsx)("span",{})]})]})]})})]})})})]})};b.getInitialProps=function(){var e=(0,s.Z)((function(e){var r,t,s,n;return(0,c.__generator)(this,(function(a){switch(a.label){case 0:return(r=(0,p.parseCookies)(e).token)||(0,v.a0)(e,"/"),t=e.query.id,s={headers:{Authorization:r}},n="".concat(f.Z,"/api/v1/courses/").concat(t),[4,h().get(n,s)];case 1:return[2,a.sent().data]}}))}));return function(r){return e.apply(this,arguments)}}(),r.default=b},8081:function(e,r){"use strict";r.Z=function(e,r){var t;e.response?(t=e.response.data,e.response.data.error&&(t=e.response.data.error.message)):e.request&&(t=e.request),r(t)}}},function(e){e.O(0,[9774,2888,179],(function(){return r=4712,e(e.s=r);var r}));var r=e.O();_N_E=r}]);