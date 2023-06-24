(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4927],{2856:function(e,r,s){"use strict";var a=s(8515),n=s(2648),t=s(6168),c=s(862),i=s.n(c),o=s(744),l=s.n(o),d=s(6449),u=["className","cssModule","type","size","color","children","tag"],h={tag:d.iC,type:i().string,size:i().string,color:i().string,className:i().string,cssModule:i().object,children:i().string},p=function(e){var r=e.className,s=e.cssModule,c=e.type,i=e.size,o=e.color,h=e.children,p=e.tag,m=(0,n.Z)(e,u),v=(0,d.mx)(l()(r,!!i&&"spinner-"+c+"-"+i,"spinner-"+c,!!o&&"text-"+o),s);return t.createElement(p,(0,a.Z)({role:"status"},m,{className:v}),h&&t.createElement("span",{className:(0,d.mx)("sr-only",s)},h))};p.propTypes=h,p.defaultProps={tag:"div",type:"border",children:"Loading..."},r.Z=p},4777:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/teacher/course/upload-course-video",function(){return s(6038)}])},9744:function(e,r,s){"use strict";var a=s(8014),n=(s(6168),s(5657)),t=s.n(n);r.Z=function(e){var r=e.pageTitle,s=e.homePageUrl,n=e.homePageText,c=e.activePageText;return(0,a.jsxs)("div",{className:"page-title-area",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"page-title-content",children:[(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(t(),{href:s,children:(0,a.jsx)("a",{children:n})})}),(0,a.jsx)("li",{className:"active",children:c})]}),(0,a.jsx)("h2",{children:r})]})}),(0,a.jsx)("div",{className:"shape9",children:(0,a.jsx)("img",{src:"/images/shape8.svg",alt:"image"})})]})}},6038:function(e,r,s){"use strict";s.r(r);var a=s(3692),n=s(2299),t=s(5447),c=s(9728),i=s(1157),o=s(1557),l=s(8014),d=s(6168),u=s(2774),h=s(3024),p=s.n(h),m=s(2686),v=s(2742),x=s(2856),j=s(7083),f=s(8081),g=s(9744),N=s(5169),_={video_url:"",order:0,name:"",description:"",courseId:""},b=function(e){var r=e.courses,s=(0,u.parseCookies)().token,h=(0,i.Z)(d.useState(_),2),b=h[0],Z=h[1],C=(0,i.Z)(d.useState(!1),2),y=C[0],E=C[1],P=(0,i.Z)(d.useState(!0),2),w=P[0],T=P[1];d.useEffect((function(){var e=b.order,r=b.video_url,s=b.name,a=Object.values({video_url:r,name:s,order:e}).every((function(e){return Boolean(e)}));T(!a)}),[b]);var k=function(){var e=(0,a.Z)((function(){var e,r;return(0,o.__generator)(this,(function(s){switch(s.label){case 0:return(e=new FormData).append("file",b.video_url),e.append("upload_preset","vikingsvideo"),e.append("cloud_name","dev-empty"),[4,p().post("Update here CLOUDINARY_VIDEO_URL",e)];case 1:return r=s.sent(),[2,r.data.url]}}))}));return function(){return e.apply(this,arguments)}}(),U=function(e){var r=e.target,s=r.name,a=r.value,i=r.files;if("video_url"===s){if(i[0].size/1024/1024>20)return addToast("The video size greater than 20 MB. Make sure less than 20 MB.",{appearance:"error"}),void(e.target.value=null);Z((function(e){return(0,c.Z)((0,t.Z)({},e),{video_url:i[0]})}))}else Z((function(e){return(0,c.Z)((0,t.Z)({},e),(0,n.Z)({},s,a))}))},M=function(){var e=(0,a.Z)((function(e){var r,a,n,t,c,i,l,d,u,h;return(0,o.__generator)(this,(function(o){switch(o.label){case 0:e.preventDefault(),E(!0),o.label=1;case 1:return o.trys.push([1,5,6,7]),r="",b.video_url?[4,k()]:[3,3];case 2:a=o.sent(),r=a.replace(/^http:\/\//i,"https://"),o.label=3;case 3:return n="".concat(v.Z,"/api/v1/courses/course/video-upload"),t=b.order,c=b.name,i=b.description,l=b.courseId,d={order:t,name:c,description:i,courseId:l,videoUrl:r},[4,p().post(n,d,{headers:{Authorization:s}})];case 4:return u=o.sent(),console.log(u.data),E(!1),j.ZP.success(u.data),Z(_),[3,7];case 5:return h=o.sent(),(0,f.Z)(h,setError),j.ZP.error(error),console.log(h),[3,7];case 6:return E(!1),[7];case 7:return[2]}}))}));return function(r){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.Z,{pageTitle:"Upload Course Video",homePageUrl:"/",homePageText:"Home",activePageText:"Upload Course Video"}),(0,l.jsx)("div",{className:"ptb-100",children:(0,l.jsxs)("div",{className:"container",children:[0==r.length&&(0,l.jsxs)(m.Z,{color:"danger",className:"text-center",children:["You have to create course first here ",(0,l.jsx)(N.Z,{href:"/teacher/course/create",children:(0,l.jsx)("a",{children:"Create Course"})})]}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-4 col-lg-4",children:(0,l.jsx)("div",{className:"td-sidebar",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(N.Z,{href:"/teacher/courses",activeClassName:"active",children:(0,l.jsx)("a",{children:"My Courses"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(N.Z,{href:"/teacher/course/create",activeClassName:"active",children:(0,l.jsx)("a",{children:"Create A Course"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(N.Z,{href:"/teacher/courses/course-edit",activeClassName:"active",children:(0,l.jsx)("a",{children:"Edit My Course"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(N.Z,{href:"/teacher/course/upload-course-video",activeClassName:"active",children:(0,l.jsx)("a",{children:"Upload Course Video"})})})]})})}),(0,l.jsx)("div",{className:"col-md-8 col-lg-8",children:(0,l.jsx)("div",{className:"border-box",children:(0,l.jsxs)("form",{onSubmit:M,children:[y&&(0,l.jsx)("h3",{className:"loading-spinner",children:(0,l.jsx)("div",{className:"d-table",children:(0,l.jsxs)("div",{className:"d-table-cell",children:[(0,l.jsx)(x.Z,{color:"danger"})," Vide uploading..."]})})}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Select Course"}),(0,l.jsxs)("select",{onChange:U,name:"courseId",className:"form-control",children:[(0,l.jsx)("option",{children:"Select Course"}),r.map((function(e){return(0,l.jsx)("option",{value:e.id,children:e.title},e.id)}))]})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Video Order (1 or 2...)"}),(0,l.jsx)("input",{type:"number",placeholder:"Order Number",className:"form-control",name:"order",value:b.order,onChange:U})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Name"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter course title",className:"form-control",name:"name",value:b.name,onChange:U})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Deescription"}),(0,l.jsx)("input",{type:"text",placeholder:"Enter course title",className:"form-control",name:"description",value:b.description,onChange:U})]}),(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{children:"Video"}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{type:"file",name:"video_url",accept:"video/*",onChange:U})]}),(0,l.jsx)("br",{}),(0,l.jsxs)("button",{className:"default-btn",disabled:w||y,children:[(0,l.jsx)("i",{className:"flaticon-right-chevron"}),"Upload"]})]})})})]})]})})]})};b.getInitialProps=function(){var e=(0,a.Z)((function(e){var r,s,a;return(0,o.__generator)(this,(function(n){switch(n.label){case 0:return(r=(0,u.parseCookies)(e).token)?(s={headers:{Authorization:r}},a="".concat(v.Z,"/api/v1/courses/my-courses"),[4,p().get(a,s)]):[2,{courses:[]}];case 1:return[2,n.sent().data]}}))}));return function(r){return e.apply(this,arguments)}}(),r.default=b},8081:function(e,r){"use strict";r.Z=function(e,r){var s;e.response?(s=e.response.data,e.response.data.error&&(s=e.response.data.error.message)):e.request&&(s=e.request),r(s)}}},function(e){e.O(0,[2686,9774,2888,179],(function(){return r=4777,e(e.s=r);var r}));var r=e.O();_N_E=r}]);