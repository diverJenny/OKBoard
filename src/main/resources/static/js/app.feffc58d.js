(function(){"use strict";var e={7341:function(e,t,n){var o=n(9963),a=n(6252),i=n(1457),r=n(9289);function l(e,t,n,o,l,s){const u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i.q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1})])),_:1})}var s={name:"App",data:()=>({})},u=n(3744);const c=(0,u.Z)(s,[["render",l]]);var d=c,p=n(2201),m=n(9788);function f(e,t,n,o,i,r){const l=(0,a.up)("PageHeader"),s=(0,a.up)("BoardList");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l),(0,a.Wm)(s,{class:"d-flex align-center justify-center"}),(0,a.Wm)(m.T,{icon:"mdi-plus",size:"small",color:"indigo"})],64)}var h=n(3577),g=n(2762);const w=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"text-left"},"Title"),(0,a._)("th",{class:"text-left"},"Writer"),(0,a._)("th",{class:"text-left"},"Date Created")])],-1);function v(e,t,n,o,i,r){return(0,a.wg)(),(0,a.j4)(g.Y,{density:"compact"},{default:(0,a.w5)((()=>[w,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.posts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,h.zw)(e.title),1),(0,a._)("td",null,(0,h.zw)(e.user?e.user.name:"N/A"),1),(0,a._)("td",null,(0,h.zw)(e.createdAt),1)])))),128))])])),_:1})}var b=n(6154),y={data(){return{posts:[]}},created(){this.fetchPosts()},methods:{fetchPosts(){b.Z.get("/post").then((e=>{this.posts=e.data})).catch((e=>{console.error(e)}))}}};const k=(0,u.Z)(y,[["render",v]]);var _=k,x=n(3907);const W=(0,x.MT)({state(){return{account:{id:0}}},mutations:{setAccount(e,t){e.account.id=t}}});var j=W,O=n.p+"img/logo.194f4cde.png",C=n(2194),U=n(4806),V=n(2139),P=n(7074);const S=(0,a._)("link",{rel:"icon",href:"/public/favicon.ico",type:"image/x-icon"},null,-1);function T(e,t,n,o,i,r){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[S,(0,a.Wm)(C.L,null,{append:(0,a.w5)((()=>[e.$store.state.account.id?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(l,{key:0,to:"/sign-in"},{default:(0,a.w5)((()=>[(0,a.Wm)(m.T,{flat:""},{default:(0,a.w5)((()=>[(0,a.Uk)(" Sign In ")])),_:1})])),_:1})),(0,a.Wm)(l,{to:"/sign-up"},{default:(0,a.w5)((()=>[e.$store.state.account.id?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(m.T,{key:0,variant:"text"},{default:(0,a.w5)((()=>[(0,a.Uk)(" Sign Up ")])),_:1}))])),_:1}),e.$store.state.account.id?((0,a.wg)(),(0,a.j4)(l,{key:1,to:"/"},{default:(0,a.w5)((()=>[(0,a.Wm)(m.T,{variant:"text",onClick:r.logout},{default:(0,a.w5)((()=>[(0,a.Uk)(" Logout ")])),_:1},8,["onClick"])])),_:1})):(0,a.kq)("",!0)])),default:(0,a.w5)((()=>[(0,a.Wm)(V.V,{size:"36",style:{"margin-left":"30px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(P.f,{src:O})])),_:1}),(0,a.Wm)(U.o,{class:"ml-2"},{default:(0,a.w5)((()=>[(0,a.Uk)(" OK Board")])),_:1})])),_:1})],64)}n(7658);var A={name:"PageHeader",methods:{logout(){j.commit("setAccount",0),sessionStorage.removeItem("id"),oe.push("/")}}};const Z=(0,u.Z)(A,[["render",T]]);var I=Z,E={name:"HomeView",components:{PageHeader:I,BoardList:_},setup(){const e=sessionStorage.getItem("id");console.log(e),e&&j.commit("setAccount",e)}};const z=(0,u.Z)(E,[["render",f]]);var D=z,H=n(6229),L=n(5911),N=n(7737),q=n(2123);const F=(0,a._)("div",{class:"text-subtitle-1 text-medium-emphasis"},"Account",-1),B=(0,a._)("div",{class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"},[(0,a.Uk)(" Password "),(0,a._)("a",{class:"text-caption text-decoration-none text-blue",href:"#",rel:"noopener noreferrer",target:"_blank"}," Forgot login password?")],-1),M={class:"text-blue text-decoration-none",href:"#",rel:"noopener noreferrer",target:"_blank"};function Y(e,t,n,o,i,r){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(P.f,{class:"mx-auto my-6","max-width":"50",src:O}),(0,a.Wm)(H._,{class:"mx-auto pa-12 pb-8",elevation:"8","max-width":"448",rounded:"lg"},{default:(0,a.w5)((()=>[(0,a.Wm)(L.Z,{class:"text-center text-blue",style:{"font-size":"x-large"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Sign In")])),_:1}),F,(0,a.Wm)(q.h,{modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),density:"compact",placeholder:"Email address","prepend-inner-icon":"mdi-email-outline",variant:"outlined"},null,8,["modelValue"]),B,(0,a.Wm)(q.h,{"append-inner-icon":e.visible?"mdi-eye-off":"mdi-eye",type:e.visible?"text":"password",modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":t[2]||(t[2]=t=>e.visible=!e.visible)},null,8,["append-inner-icon","type","modelValue"]),(0,a.Wm)(H._,{class:"mb-12",color:"surface-variant",variant:"tonal"},{default:(0,a.w5)((()=>[(0,a.Wm)(L.Z,{class:"text-medium-emphasis text-caption"},{default:(0,a.w5)((()=>[(0,a.Uk)(' Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password. ')])),_:1})])),_:1}),(0,a.Wm)(m.T,{block:"",class:"mb-8",color:"blue",size:"large",variant:"tonal",onClick:r.login},{default:(0,a.w5)((()=>[(0,a.Uk)(" Log In ")])),_:1},8,["onClick"]),(0,a.Wm)(L.Z,{class:"text-center"},{default:(0,a.w5)((()=>[(0,a._)("a",M,[(0,a.Uk)(" Sign up now "),(0,a.Wm)(N.t,{icon:"mdi-chevron-right"})])])),_:1})])),_:1})])}var $={data:()=>({visible:!1,email:"",password:""}),methods:{login(){const e=new FormData;e.append("email",this.email),e.append("password",this.password),b.Z.post("/sign-api/sign-in",e).then((e=>{200===e.status?(console.log("로그인 성공"),j.commit("setAccount",e.data),sessionStorage.setItem("id",e.data),oe.push("/")):console.log("로그인 실패")})).catch((e=>{console.error(e)}))}}};const K=(0,u.Z)($,[["render",Y]]);var R=K,G=n(4498);function J(e,t,n,o,i,r){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(P.f,{class:"mx-auto my-6","max-width":"50",src:O}),(0,a.Wm)(H._,{class:"mx-auto pa-12 pb-8",elevation:"8","max-width":"448",rounded:"lg"},{default:(0,a.w5)((()=>[(0,a.Wm)(L.Z,{class:"text-center text-blue",style:{"font-size":"x-large"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Sign up")])),_:1}),(0,a.Wm)(q.h,{modelValue:e.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),density:"compact",placeholder:"Email address","prepend-inner-icon":"mdi-email-outline",variant:"outlined"},null,8,["modelValue"]),(0,a.Wm)(q.h,{modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.name=t),density:"compact",placeholder:"Name","prepend-inner-icon":"mdi-account-outline",variant:"outlined"},null,8,["modelValue"]),(0,a.Wm)(q.h,{modelValue:e.password,"onUpdate:modelValue":t[2]||(t[2]=t=>e.password=t),"append-inner-icon":e.visible?"mdi-eye-off":"mdi-eye",type:e.visible?"text":"password",density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":t[3]||(t[3]=t=>e.visible=!e.visible)},null,8,["modelValue","append-inner-icon","type"]),(0,a.Wm)(q.h,{modelValue:e.passwordChk,"onUpdate:modelValue":t[4]||(t[4]=t=>e.passwordChk=t),"append-inner-icon":e.visible2?"mdi-eye-off":"mdi-eye",type:e.visible2?"text":"password",density:"compact",placeholder:"Confirm password","prepend-inner-icon":"mdi-checkbox-marked-circle-outline",variant:"outlined","onClick:appendInner":t[5]||(t[5]=t=>e.visible2=!e.visible2)},null,8,["modelValue","append-inner-icon","type"]),(0,a.Wm)(G.x,{modelValue:e.terms,"onUpdate:modelValue":t[6]||(t[6]=t=>e.terms=t),color:"secondary",label:"I agree to site terms and conditions"},null,8,["modelValue"]),(0,a.Wm)(m.T,{block:"",class:"mb-8",color:"blue",size:"large",variant:"tonal",onClick:r.signUp},{default:(0,a.w5)((()=>[(0,a.Uk)(" Sign Up ")])),_:1},8,["onClick"])])),_:1})])}var Q={data:()=>({visible:!1,visible2:!1,email:null,name:null,password:null,passwordChk:null,terms:!1}),methods:{signUp(){const e={email:this.email,name:this.name,password:this.password,passwordChk:this.passwordChk};this.email&&this.name&&this.password&&this.passwordChk&&this.terms?this.password===this.passwordChk?b.Z.post("sign-api/sign-up",e).then((e=>{200===e.status&&(console.log("회원가입 성공"),window.alert("회원가입을 축하합니다."),oe.push("/"))})):window.alert("패스워드가 일치하지 않습니다."):window.alert("모든 필드를 입력해야 합니다.")}}};const X=(0,u.Z)(Q,[["render",J]]);var ee=X;const te=[{path:"/",name:"Home",component:D},{path:"/sign-in",name:"SignIn",component:R},{path:"/sign-up",name:"SignUp",component:ee}],ne=(0,p.p7)({history:(0,p.PO)("/"),routes:te});var oe=ne,ae=(n(9773),n(4047)),ie=(0,ae.Rd)();async function re(){const e=await n.e(461).then(n.t.bind(n,5933,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}re(),(0,o.ri)(d).use(oe).use(j).use(ie).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],i=e[c][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,i<r&&(r=i));if(l){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,a,i]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var r={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){r[e]=function(){return o[e]}}));return r["default"]=function(){return o},n.d(i,r),i}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.93f3cf47.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";n.l=function(o,a,i,r){if(e[o])e[o].push(a);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=o),e[o]=[a];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,a[1](l)}};n.l(r,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],l=o[1],s=o[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var c=s(n)}for(t&&t(o);u<r.length;u++)i=r[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7341)}));o=n.O(o)})();
//# sourceMappingURL=app.feffc58d.js.map