(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[440],{365:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(5893),r=(n(7294),n(7988)),c=n.n(r),a=n(1664),s=n(8837),o=n.n(s),l=[{title:"GLOBAL PARTNERSHIP",icon:"/assets/images/global_icon.png",linkTo:"/services/partnership"},{title:"ATHLETE PERFORMANCE DEVELOPMENT",icon:"/assets/images/athlete_icon.png",linkTo:"/services/athlete"},{title:"EXECUTIVE SUPPORT",icon:"/assets/images/excecutive_icon.png",linkTo:"/services/executive"},{title:"TEAM AND ORGANISATION REQUEST",icon:"/assets/images/team_icon.png",linkTo:"/services/team"}],u=function(e){var t=e.isSpecificService;return(0,i.jsx)("div",{className:"".concat(t?"".concat(o().container," ").concat(o().specific_service):"".concat(o().container)),children:l.map((function(e,t){return(0,i.jsx)(a.default,{href:e.linkTo,children:(0,i.jsxs)("a",{className:o().link,children:[(0,i.jsx)("img",{src:e.icon,alt:"icon",className:o().icon}),(0,i.jsx)("h3",{className:o().title,children:e.title})]})},t)}))})},f=function(e){var t=e.isSpecificService;return(0,i.jsxs)("div",{className:"".concat(t?"".concat(c().container," ").concat(c().specific_container):c().container),id:"SERVICES",children:[(0,i.jsx)("h1",{className:c().title,children:"OUR SERVICES"}),(0,i.jsx)(u,{isSpecificService:t})]})}},2167:function(e,t,n){"use strict";var i=n(3848);t.default=void 0;var r,c=(r=n(7294))&&r.__esModule?r:{default:r},a=n(1063),s=n(4651),o=n(7426);var l={};function u(e,t,n,i){if(e&&a.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),f=c.default.useMemo((function(){var t=a.resolveHref(r,e.href,!0),n=i(t,2),c=n[0],s=n[1];return{href:c,as:e.as?a.resolveHref(r,e.as):s||c}}),[r,e.href,e.as]),_=f.href,v=f.as,p=e.children,d=e.replace,h=e.shallow,m=e.scroll,x=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var E=(t=c.default.Children.only(p))&&"object"===typeof t&&t.ref,g=o.useIntersection({rootMargin:"200px"}),N=i(g,2),j=N[0],b=N[1],S=c.default.useCallback((function(e){j(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,j]);c.default.useEffect((function(){var e=b&&n&&a.isLocalURL(_),t="undefined"!==typeof x?x:r&&r.locale,i=l[_+"%"+v+(t?"%"+t:"")];e&&!i&&u(r,_,v,{locale:t})}),[v,_,b,x,n,r]);var I={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,c,s,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==s&&i.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](n,i,{shallow:c,locale:o,scroll:s}))}(e,r,_,v,d,h,m,x)},onMouseEnter:function(e){a.isLocalURL(_)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(r,_,v,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof x?x:r&&r.locale,y=r&&r.isLocaleDomain&&a.getDomainLocale(v,k,r&&r.locales,r&&r.domainLocales);I.href=y||a.addBasePath(a.addLocale(v,k,r&&r.defaultLocale))}return c.default.cloneElement(t,I)};t.default=f},7426:function(e,t,n){"use strict";var i=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,o=r.useRef(),l=r.useState(!1),u=i(l,2),f=u[0],_=u[1],v=r.useCallback((function(e){o.current&&(o.current(),o.current=void 0),n||f||e&&e.tagName&&(o.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,c=i.observer,a=i.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),s.delete(r))}}(e,(function(e){return e&&_(e)}),{rootMargin:t}))}),[n,t,f]);return r.useEffect((function(){if(!a&&!f){var e=c.requestIdleCallback((function(){return _(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[v,f]};var r=n(7294),c=n(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},4726:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _},default:function(){return v}});var i=n(5893),r=(n(1163),n(7294),n(8268)),c=n.n(r),a=n(365),s=n(1664),o=n(6848),l=n.n(o),u=function(e){var t=e.title,n=e.image,r=e.paragraphs;return(0,i.jsx)("div",{className:l().container,children:(0,i.jsxs)("div",{className:l().layout,children:[(0,i.jsxs)("div",{className:l().text_wrapper,children:[(0,i.jsx)("h2",{className:l().title,children:t}),r.map((function(e,t){return(0,i.jsx)("p",{className:l().text,children:e},t)})),(0,i.jsx)(s.default,{href:"/",children:(0,i.jsx)("a",{className:l().back_button,children:(0,i.jsx)("span",{children:"\u2039 MAIN PAGE"})})})]}),(0,i.jsx)("img",{src:n,alt:"",className:l().image})]})})},f=function(e){var t=e.service;return(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsx)(a.Z,{isSpecificService:!0}),(0,i.jsx)(u,{title:t.title,paragraphs:t.paragraphs,image:t.image})]})},_=!0,v=function(e){var t=e.data;return console.log(">>data",t),(0,i.jsx)(f,{service:t})}},8655:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/[service]",function(){return n(4726)}])},8837:function(e){e.exports={container:"tile_container__37d_o",specific_service:"tile_specific_service__YMQEy",title:"tile_title__2P55t",link:"tile_link__-xzFA",icon:"tile_icon__2b6us"}},7988:function(e){e.exports={container:"ourServices_container__22tGP",specific_container:"ourServices_specific_container__tcEs1",tile_container:"ourServices_tile_container__HhUfe",tile_title:"ourServices_tile_title__3pshI",title:"ourServices_title__wEL6U"}},6848:function(e){e.exports={container:"servicesItem_container__VBvEG",layout:"servicesItem_layout__2vf1Y",text_wrapper:"servicesItem_text_wrapper__2Cwuf",title:"servicesItem_title__YjY8u",text:"servicesItem_text__24mYO",image:"servicesItem_image__Qusg-",back_button:"servicesItem_back_button__3AAle","text-wrapper":"servicesItem_text-wrapper__20w7o"}},8268:function(e){e.exports={container:"servicesPage_container__1OrfE"}},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){n(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=8655,e(e.s=t);var t}));var t=e.O();_N_E=t}]);