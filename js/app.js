webpackJsonp([0],{172:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=r(o),l=n(24),u=(r(l),n(173)),i=r(u),c=document.getElementById("root");(0,l.render)(a.default.createElement(i.default,null),c),"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js")},173:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(96),s=n(97),p=r(s),d=(n(104),n(199)),m=r(d);r(n(384)).default.initialize("UA-59148422-2");var h=(0,p.default)({basename:"/react-pwa"}),b=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c.default.createElement(f.HashRouter,{history:h},c.default.createElement(m.default,null))}}]),t}(i.Component);t.default=b},199:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),s=n(96),p=n(0),d=(r(p),n(107)),m=n(303),h=r(m),b=n(329),y=r(b),v=n(331),g=r(v),w=n(333),_=r(w),E=n(156),O=r(E),j=n(157),k=r(j),P=n(352),C=r(P),T=n(358),I=r(T),x=n(360),M=r(x),S=n(364),L=r(S),B=n(365),R=r(B),N=n(366),D=r(N),A=n(367),U=r(A),H=n(368),z=(r(H),n(369)),W=(r(z),n(370)),F=(r(W),n(371)),q=(r(F),n(372)),J=r(q),V=n(373),Y=r(V),K=n(374),Q=r(K),X=function(e){return{root:{width:"100%",height:430,marginTop:0,zIndex:1,overflow:"hidden"},appFrame:{position:"relative",display:"flex",width:"100%",height:"100%"},appBar:u({position:"absolute",marginLeft:240},e.breakpoints.up("md"),{width:"calc(100% - 240px)"}),navIconHide:u({},e.breakpoints.up("md"),{display:"none"}),drawerHeader:e.mixins.toolbar,drawerPaper:u({width:250},e.breakpoints.up("md"),{width:240,position:"relative",height:"100%"}),content:u({backgroundColor:e.palette.background.default,width:"100%",padding:3*e.spacing.unit,height:"calc(100% - 56px)",marginTop:56,marginBottom:0},e.breakpoints.up("sm"),{height:"calc(100% - 64px)",marginTop:64})}},Z=function(e){function t(){var e,n,r,l;o(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={mobileOpen:!1},r.handleDrawerToggle=function(){r.setState({mobileOpen:!r.state.mobileOpen})},l=n,a(r,l)}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.theme,r=f.default.createElement("div",null,f.default.createElement("div",{className:t.drawerHeader}),f.default.createElement(I.default,null),f.default.createElement(_.default,null,f.default.createElement("div",null,f.default.createElement(w.ListItem,{button:!0,component:s.Link,to:"/",onClick:this.handleDrawerToggle},f.default.createElement(w.ListItemIcon,null,f.default.createElement(L.default,null)),f.default.createElement(w.ListItemText,{primary:"Home"})),f.default.createElement(w.ListItem,{button:!0,component:s.Link,to:"/page",onClick:this.handleDrawerToggle},f.default.createElement(w.ListItemIcon,null,f.default.createElement(D.default,null)),f.default.createElement(w.ListItemText,{primary:"Page"})),f.default.createElement(w.ListItem,{button:!0,component:s.Link,to:"/push",onClick:this.handleDrawerToggle},f.default.createElement(w.ListItemIcon,null,f.default.createElement(U.default,null)),f.default.createElement(w.ListItemText,{primary:"Push"})),f.default.createElement(w.ListItem,{button:!0,onClick:this.handleDrawerToggle},f.default.createElement(w.ListItemIcon,null,f.default.createElement(R.default,null)),f.default.createElement(w.ListItemText,{primary:"Drafts"})))),f.default.createElement(I.default,null));return f.default.createElement("div",{className:t.root},f.default.createElement("div",{className:t.appFrame},f.default.createElement(y.default,{className:t.appBar},f.default.createElement(g.default,null,f.default.createElement(k.default,{color:"contrast","aria-label":"open drawer",onClick:this.handleDrawerToggle,className:t.navIconHide},f.default.createElement(M.default,null)),f.default.createElement(O.default,{type:"title",color:"inherit",noWrap:!0},"Responsive drawer"))),f.default.createElement(C.default,{mdUp:!0},f.default.createElement(h.default,{type:"temporary",anchor:"rtl"===n.direction?"right":"left",open:this.state.mobileOpen,classes:{paper:t.drawerPaper},onRequestClose:this.handleDrawerToggle,ModalProps:{keepMounted:!0}},r)),f.default.createElement(C.default,{mdDown:!0,implementation:"css"},f.default.createElement(h.default,{type:"permanent",open:!0,classes:{paper:t.drawerPaper}},r)),f.default.createElement("main",{className:t.content},f.default.createElement(s.Switch,null,f.default.createElement(s.Route,{exact:!0,path:"/",component:J.default}),f.default.createElement(s.Route,{path:"/page",component:Y.default}),f.default.createElement(s.Route,{path:"/push",component:Q.default})))))}}]),t}(c.Component);t.default=(0,d.withStyles)(X,{withTheme:!0})(Z)},371:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=function(e,t){return function(n){function i(e){r(this,i);var t=o(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e));return t.Component=null,t.state={Component:i.Component},t}return a(i,n),u(i,[{key:"componentWillMount",value:function(){var t=this;this.state.Component||e().then(function(e){i.Component=e,t.setState({Component:e})})}},{key:"render",value:function(){return this.state.Component?c.default.createElement(this.state.Component,l({},this.props,t)):null}}]),i}(c.default.Component)}},372:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("p",null,"Home"))}}]),t}(u.Component);t.default=c},373:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("p",null,"I'm a simple Page"))}}]),t}(u.Component);t.default=c},374:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(375),s=r(f),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("p",null,"To get started, edit ",c.default.createElement("code",null,"src/App.js")," and save to reload."),c.default.createElement(s.default,null))}}]),t}(i.Component);t.default=p},375:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),s=n(376),p=r(s),d=n(107),m=n(378),h=r(m),b=n(379),y=r(b),v={bar:{},checked:{color:h.default[500],"& + $bar":{backgroundColor:h.default[500]}}},g=function(e){function t(e){a(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.handleChange=function(e){return function(t,r){n.setState(o({},e,r)),n.handleClick(),console.log("test")}},console.log(Notification.permission);var r="";return r="granted"===Notification.permission?"you r granted permissions":"give permission",n.handleClick=n.handleClick.bind(n),n.state={value:r,checked:!1},n}return u(t,e),i(t,[{key:"urlBase64ToUint8Array",value:function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=window.atob(n),o=new Uint8Array(r.length),a=0;a<r.length;++a)o[a]=r.charCodeAt(a);return o}},{key:"handleClick",value:function(){var e=this;Notification.requestPermission().then(function(t){"granted"===t&&e.setState({value:"you`r granted permissions"}),navigator.serviceWorker.ready.then(function(e){console.log(e),e.showNotification("Vibration Sample",{body:"Buzz! Buzz!",icon:"static/images/badge.png",vibrate:[200,100,200,100,200,100,200],tag:"vibration-sample"});var t={userVisibleOnly:!0,applicationServerKey:urlBase64ToUint8Array("BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U")};e.pushManager.subscribe(t).then(function(e){console.log(e)},function(e){console.log(e)})})})}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(p.default,{onClick:this.handleClick.bind(this)},this.state.value),f.default.createElement(y.default,{checked:this.state.checked,onChange:this.handleChange("checked"),"aria-label":"checked"}))}}]),t}(f.default.Component);t.default=(0,d.withStyles)(v)(g)}},[172]);