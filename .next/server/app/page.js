(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},1932:e=>{"use strict";e.exports=require("url")},5050:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(9637),n=r(130),a=r(7484),o=r.n(a),i=r(2699),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2621)),"C:\\Users\\user\\Projects\\node\\portfolio\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,2689))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9194)),"C:\\Users\\user\\Projects\\node\\portfolio\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9400,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9201,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,8558,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,2689))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\user\\Projects\\node\\portfolio\\src\\app\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9252:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,330,23)),Promise.resolve().then(r.bind(r,5965)),Promise.resolve().then(r.bind(r,5739)),Promise.resolve().then(r.bind(r,7409))},2404:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,7578,23)),Promise.resolve().then(r.bind(r,5845)),Promise.resolve().then(r.bind(r,9481)),Promise.resolve().then(r.bind(r,313))},962:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8062,23)),Promise.resolve().then(r.t.bind(r,600,23)),Promise.resolve().then(r.t.bind(r,7484,23)),Promise.resolve().then(r.t.bind(r,9343,23)),Promise.resolve().then(r.t.bind(r,119,23)),Promise.resolve().then(r.t.bind(r,1481,23)),Promise.resolve().then(r.t.bind(r,1182,23))},9114:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8766,23)),Promise.resolve().then(r.t.bind(r,6288,23)),Promise.resolve().then(r.t.bind(r,2628,23)),Promise.resolve().then(r.t.bind(r,4975,23)),Promise.resolve().then(r.t.bind(r,9895,23)),Promise.resolve().then(r.t.bind(r,465,23)),Promise.resolve().then(r.t.bind(r,1710,23))},2886:()=>{},6446:()=>{},7265:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return j}});let s=r(8538),n=r(9053),a=r(843),o=n._(r(8382)),i=s._(r(1683)),l=s._(r(7324)),d=r(5213),c=r(7072),u=r(5579);r(2328);let m=r(1240),p=s._(r(857)),f=r(5954),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function x(e,t,r,s,n,a,o){let i=null==e?void 0:e.src;e&&e["data-loaded-src"]!==i&&(e["data-loaded-src"]=i,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{s=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==s?void 0:s.current)&&s.current(e)}}))}function g(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:s,sizes:n,height:i,width:l,decoding:d,className:c,style:u,fetchPriority:m,placeholder:p,loading:h,unoptimized:v,fill:b,onLoadRef:j,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:N,sizesInput:P,onLoad:_,onError:C,...S}=e,k=(0,o.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&x(e,p,j,y,w,v,P))},[r,p,j,y,w,C,v,P]),z=(0,f.useMergedRef)(t,k);return(0,a.jsx)("img",{...S,...g(m),loading:h,width:l,height:i,decoding:d,"data-nimg":b?"fill":"1",className:c,style:u,sizes:n,srcSet:s,src:r,ref:z,onLoad:e=>{x(e.currentTarget,p,j,y,w,v,P)},onError:e=>{N(!0),"empty"!==p&&w(!0),C&&C(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,s={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&i.default.preload?(i.default.preload(r.src,s),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...s},"__nimg-"+r.src+r.srcSet+r.sizes)})}let j=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(m.RouterContext),s=(0,o.useContext)(u.ImageConfigContext),n=(0,o.useMemo)(()=>{var e;let t=h||s||c.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),n=t.deviceSizes.sort((e,t)=>e-t),a=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:n,qualities:a}},[s]),{onLoad:i,onLoadingComplete:l}=e,f=(0,o.useRef)(i);(0,o.useEffect)(()=>{f.current=i},[i]);let x=(0,o.useRef)(l);(0,o.useEffect)(()=>{x.current=l},[l]);let[g,j]=(0,o.useState)(!1),[y,w]=(0,o.useState)(!1),{props:N,meta:P}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:g,showAltText:y});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{...N,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:f,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:w,sizesInput:e.sizes,ref:t}),P.priority?(0,a.jsx)(b,{isAppRouter:!r,imgAttributes:N}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8347:(e,t,r)=>{"use strict";e.exports=r(9677).vendored.contexts.AmpContext},93:(e,t,r)=>{"use strict";e.exports=r(9677).vendored.contexts.HeadManagerContext},5579:(e,t,r)=>{"use strict";e.exports=r(9677).vendored.contexts.ImageConfigContext},1240:(e,t,r)=>{"use strict";e.exports=r(9677).vendored.contexts.RouterContext},6728:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:s=!1}=void 0===e?{}:e;return t||r&&s}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},5213:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return i}}),r(2328);let s=r(8348),n=r(7072);function a(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function i(e,t){var r,i;let l,d,c,{src:u,sizes:m,unoptimized:p=!1,priority:f=!1,loading:h,className:x,quality:g,width:v,height:b,fill:j=!1,style:y,overrideSrc:w,onLoad:N,onLoadingComplete:P,placeholder:_="empty",blurDataURL:C,fetchPriority:S,decoding:k="async",layout:z,objectFit:M,objectPosition:O,lazyBoundary:E,lazyRoot:A,...I}=e,{imgConf:R,showAltText:T,blurComplete:G,defaultLoader:U}=t,D=R||n.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t),s=null==(r=D.qualities)?void 0:r.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t,qualities:s}}if(void 0===U)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=I.loader||U;delete I.loader,delete I.srcSet;let q="__next_img_default"in L;if(q){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...s}=t;return e(s)}}if(z){"fill"===z&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!m&&(m=t)}let F="",B=o(v),W=o(b);if((i=u)&&"object"==typeof i&&(a(i)||void 0!==i.src)){let e=a(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(d=e.blurWidth,c=e.blurHeight,C=C||e.blurDataURL,F=e.src,!j){if(B||W){if(B&&!W){let t=B/e.width;W=Math.round(e.height*t)}else if(!B&&W){let t=W/e.height;B=Math.round(e.width*t)}}else B=e.width,W=e.height}}let H=!f&&("lazy"===h||void 0===h);(!(u="string"==typeof u?u:F)||u.startsWith("data:")||u.startsWith("blob:"))&&(p=!0,H=!1),l.unoptimized&&(p=!0),q&&!l.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(p=!0);let V=o(g),$=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:O}:{},T?{}:{color:"transparent"},y),X=G||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:B,heightInt:W,blurWidth:d,blurHeight:c,blurDataURL:C||"",objectFit:$.objectFit})+'")':'url("'+_+'")',Y=X?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},J=function(e){let{config:t,src:r,unoptimized:s,width:n,quality:a,sizes:o,loader:i}=e;if(s)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:s,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(r);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:s,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,o),c=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,s)=>i({config:t,src:r,quality:a,width:e})+" "+("w"===d?e:s+1)+d).join(", "),src:i({config:t,src:r,quality:a,width:l[c]})}}({config:l,src:u,unoptimized:p,width:B,quality:V,sizes:m,loader:L});return{props:{...I,loading:H?"lazy":h,fetchPriority:S,width:B,height:W,decoding:k,className:x,style:{...$,...Y},sizes:J.sizes,srcSet:J.srcSet,src:w||J.src},meta:{unoptimized:p,priority:f,placeholder:_,fill:j}}}},7324:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return u}});let s=r(8538),n=r(9053),a=r(843),o=n._(r(8382)),i=s._(r(3503)),l=r(8347),d=r(93),c=r(6728);function u(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2328);let p=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(m,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,s={};return n=>{let a=!0,o=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){o=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?a=!1:t.add(n.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?a=!1:r.add(t);else{let e=n.props[t],r=s[t]||new Set;("name"!==t||!o)&&r.has(e)?a=!1:(r.add(e),s[t]=r)}}}}return a}}()).reverse().map((e,t)=>{let s=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:s})})}let h=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),s=(0,o.useContext)(d.HeadManagerContext);return(0,a.jsx)(i.default,{reduceComponentsToState:f,headManager:s,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8348:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:s,blurHeight:n,blurDataURL:a,objectFit:o}=e,i=s?40*s:t,l=n?40*n:r,d=i&&l?"viewBox='0 0 "+i+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7072:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return s}});let r=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},129:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return i}});let s=r(8538),n=r(5213),a=r(7265),o=s._(r(857));function i(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=a.Image},857:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:s,width:n,quality:a}=e,o=a||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(s)+"&w="+n+"&q="+o+(s.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),r.__next_img_default=!0;let s=r},3503:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let s=r(8382),n=()=>{},a=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function i(){if(r&&r.mountedInstances){let t=s.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),i(),n(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),n(()=>(r&&(r._pendingUpdate=i),()=>{r&&(r._pendingUpdate=i)})),a(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},5845:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var s=r(843),n=r(8382),a=r(7578),o=r.n(a);function i(){let[e,t]=(0,n.useState)(0),[r,a]=(0,n.useState)("Software Engineer"),[i,l]=(0,n.useState)(!0);return(0,s.jsxs)("section",{className:"min-h-screen pt-32 pb-16 px-4 flex items-center relative overflow-hidden",children:[(0,s.jsxs)("div",{className:"absolute inset-0 -z-10",children:[(0,s.jsx)("div",{className:"absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl"}),(0,s.jsx)("div",{className:"absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"})]}),(0,s.jsxs)("div",{className:"max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("p",{className:"text-teal font-medium flex items-center space-x-2",children:[(0,s.jsx)("span",{className:"w-2 h-2 bg-teal rounded-full animate-pulse"}),(0,s.jsx)("span",{children:"Welcome to my digital space"})]}),(0,s.jsx)("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold",children:"Hi, I'm Gregory Odiase"}),(0,s.jsx)("div",{className:"h-12 flex items-center",children:(0,s.jsxs)("p",{className:"text-xl text-gray-600 typing-text",children:["I'm a"," ",(0,s.jsxs)("span",{className:"text-teal font-medium",children:[r,(0,s.jsx)("span",{className:"inline-block w-0.5 h-5 bg-teal animate-blink ml-1"})]})]})})]}),(0,s.jsx)("p",{className:"text-gray-600 text-lg leading-relaxed max-w-xl",children:"Passionate about crafting efficient solutions and turning complex problems into elegant code. Let's build something extraordinary together."}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6",children:[(0,s.jsxs)(o(),{href:"#projects",className:"px-8 py-4 bg-teal text-white rounded-lg hover:bg-teal-dark transition-colors text-center   relative overflow-hidden group",children:[(0,s.jsx)("span",{className:"relative z-10",children:"View My Work"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-white opacity-20 transform translate-y-full    transition-transform group-hover:translate-y-0"})]}),(0,s.jsxs)(o(),{href:"#",className:"px-8 py-4 border-2 border-teal text-teal rounded-lg hover:bg-teal/10    transition-colors text-center group",children:["Get in Touch",(0,s.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1",children:"→"})]})]}),(0,s.jsxs)("div",{className:"pt-8",children:[(0,s.jsx)("p",{className:"text-sm text-gray-500 mb-3",children:"Tech Stack"}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2",children:["React","Next.js","TypeScript","Python","Node.js","Nest.js","MySQL","Oracle","PostgreSQL","MongoDB","Docker","AWS","GCP"].map(e=>(0,s.jsx)("span",{className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm   hover:bg-teal/10 hover:text-teal transition-colors cursor-default",children:e},e))})]})]}),(0,s.jsxs)("div",{className:"relative hidden lg:block",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-teal/20 to-purple-500/20 rounded-full blur-2xl"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("div",{className:"bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-md mx-auto   transform hover:scale-105 transition-transform cursor-pointer",children:(0,s.jsx)("pre",{className:"text-sm font-mono",children:(0,s.jsxs)("code",{className:"text-gray-800",children:[(0,s.jsx)("span",{className:"text-purple-600",children:"const"})," ",(0,s.jsx)("span",{className:"text-blue-600",children:"developer"})," = ","{",(0,s.jsx)("br",{}),"\xa0\xa0name: ",(0,s.jsx)("span",{className:"text-green-600",children:'"Gregory"'}),",",(0,s.jsx)("br",{}),"\xa0\xa0type: ",(0,s.jsx)("span",{className:"text-green-600",children:'"Full Stack"'}),",",(0,s.jsx)("br",{}),"\xa0\xa0loves: [",(0,s.jsx)("span",{className:"text-green-600",children:'"coding"'}),", ",(0,s.jsx)("span",{className:"text-green-600",children:'"coffee"'}),"],",(0,s.jsx)("br",{}),"\xa0\xa0isOpenToWork: ",(0,s.jsx)("span",{className:"text-orange-600",children:"true"}),(0,s.jsx)("br",{}),"}",";"]})})})})]})]})]})}},9481:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(843),n=r(8382),a=r(7578),o=r.n(a),i=r(129),l=r.n(i);let d=[{name:"Accupuncture and Herbs",description:"A web platform for a local acupuncturist to receive appointment bookings and display their services. This project was built using Next.js, Tailwind CSS, and TypeScript. Integrations were made to google calendar for bookings and google maps for location services.",image:"https://res.cloudinary.com/diyms5sde/image/upload/v1737336613/portfolio/323c712f-a8b3-445c-be68-0493aff5e6a3.png",link:"https://acupunctureandherbaltreatment.com",category:"fullstack"},{name:"FRED",description:"An e-commerce platform for local farmers to sell their products online. This layered architecture was built using Next.js, Node js, AWS RDS. Integrations were made to Stripe for payment processing, Cloudinary for image storage and Ably for real-time notifications.",image:"https://res.cloudinary.com/diyms5sde/image/upload/v1737340162/portfolio/Screenshot_2025-01-19_212709_w2uxs2.png",link:"https://fred-frontend.vercel.app",category:"fullstack"}];function c(){let[e,t]=(0,n.useState)("fullstack"),r=d.filter(t=>t.category===e);return(0,s.jsx)("section",{id:"projects",className:"py-20 px-4 lg:px-8",children:(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-center mb-4",children:"Projects"}),(0,s.jsxs)("div",{className:"flex justify-center space-x-8 mb-12",children:[(0,s.jsx)("button",{onClick:()=>t("fullstack"),className:`text-lg font-medium pb-2 border-b-2 transition-colors ${"fullstack"===e?"border-teal text-teal":"border-transparent hover:text-teal"}`,children:"Full-stack"}),(0,s.jsx)("button",{onClick:()=>t("data"),className:`text-lg font-medium pb-2 border-b-2 transition-colors ${"data"===e?"border-teal text-teal":"border-transparent hover:text-teal"}`,children:"Data"})]}),(0,s.jsxs)("div",{className:"w-3/4 mx-auto space-y-8",children:[0===r.length&&(0,s.jsx)("p",{className:"text-center text-gray-600",children:"Coming Soon!"}),r.map((e,t)=>(0,s.jsx)("div",{className:"bg-white rounded-lg overflow-hidden shadow-lg",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[(0,s.jsxs)("div",{className:"order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center",children:[(0,s.jsx)("h3",{className:"text-2xl font-bold mb-4",children:e.name}),(0,s.jsx)("p",{className:"text-gray-600 mb-6 text-justify leading-relaxed",children:e.description}),(0,s.jsx)("div",{children:(0,s.jsx)(o(),{href:e.link,className:"inline-block px-6 py-3 border-2 border-teal text-teal rounded-lg hover:bg-teal hover:text-white transition-colors",children:"View Project"})})]}),(0,s.jsx)("div",{className:"order-1 lg:order-2 relative w-full h-64 lg:h-auto",children:(0,s.jsx)(l(),{src:e.image,alt:e.name,layout:"fill",objectFit:"contain",sizes:"(max-width: 1024px) 100vw, 50vw"})})]})},t))]})]})})}},313:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var s=r(843),n=r(8382),a=r(7578),o=r.n(a);function i(){let[e,t]=(0,n.useState)(!1),[r,a]=(0,n.useState)("");return(0,s.jsx)("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-white/80 backdrop-blur-md shadow-sm py-4":"bg-transparent py-6"}`,children:(0,s.jsxs)("nav",{className:"max-w-6xl mx-auto px-4 flex justify-between items-center",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("div",{className:"relative",children:(0,s.jsxs)("div",{className:"w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center",children:[(0,s.jsx)("span",{className:"text-teal font-bold text-xl",children:"G"}),(0,s.jsx)("div",{className:"absolute -top-1 -right-1 w-2 h-2 bg-teal rounded-full animate-pulse"}),(0,s.jsx)("div",{className:"absolute -bottom-1 -left-1 w-2 h-2 bg-teal rounded-full animate-pulse delay-150"})]})}),(0,s.jsxs)("div",{className:"hidden sm:block",children:[(0,s.jsx)("div",{className:"text-sm text-gray-500",children:r}),(0,s.jsx)("div",{className:"text-xs text-teal",children:"EST • Available for hire"})]})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-8",children:[(0,s.jsxs)(o(),{href:"/resume",className:"nav-link relative text-gray-600 hover:text-teal transition-colors",children:["Resume",(0,s.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full"})]}),(0,s.jsxs)(o(),{href:"#",className:"nav-link relative text-gray-600 hover:text-teal transition-colors",children:["Blog",(0,s.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full"})]}),(0,s.jsxs)(o(),{href:"#",className:"relative px-4 py-2 text-teal border-2 border-teal rounded-lg hover:bg-teal hover:text-white transition-colors",children:["Let's Talk",(0,s.jsx)("div",{className:"absolute -top-1 -right-1 w-2 h-2 bg-teal rounded-full"}),(0,s.jsx)("div",{className:"absolute -bottom-1 -left-1 w-2 h-2 bg-teal rounded-full"})]})]})]})})}},330:(e,t,r)=>{let{createProxy:s}=r(9554);e.exports=s("C:\\Users\\user\\Projects\\node\\portfolio\\node_modules\\.pnpm\\next@15.1.5_react-dom@19.0.0_react@19.0.0__react@19.0.0\\node_modules\\next\\dist\\client\\app-dir\\link.js")},9194:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>n});var s=r(4531);r(8762);let n={title:"Gregory Odiase - Software Engineer",description:"Portfolio website of Gregory Odiase, Software Engineer"};function a({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:"antialiased bg-gray-100 text-black",children:e})})}},2621:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(4531),n=r(7409),a=r(5965),o=r(5739),i=r(330),l=r.n(i);function d(){return(0,s.jsx)("footer",{className:"bg-white py-12 px-4",children:(0,s.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center",children:[(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("h3",{className:"text-2xl font-bold",children:["Let's create something"," ",(0,s.jsx)("span",{className:"text-teal",children:"amazing"})," together!"]}),(0,s.jsxs)("p",{className:"text-gray-600",children:[(0,s.jsx)("span",{className:"font-mono",children:"while"})," (",(0,s.jsx)("span",{className:"text-aqua",children:"coffee"})," === ",(0,s.jsx)("span",{className:"text-green-500",children:"true"}),") ","{",(0,s.jsx)("br",{}),"\xa0\xa0",(0,s.jsx)("span",{className:"text-purple-600",children:"keepCoding"}),"();",(0,s.jsx)("br",{}),"}"]})]}),(0,s.jsxs)("div",{className:"flex flex-col md:items-end space-y-4",children:[(0,s.jsxs)("div",{className:"flex space-x-6",children:[(0,s.jsx)(l(),{href:"https://github.com/greglacinto",target:"_blank",className:"text-gray-600 hover:text-teal transition-colors",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})})}),(0,s.jsx)(l(),{href:"https://www.linkedin.com/in/gregoryjs/",target:"_blank",className:"text-gray-600 hover:text-teal transition-colors",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",clipRule:"evenodd"})})}),(0,s.jsx)(l(),{href:"mailto:gregory.odiase01@gmail.com",target:"_blank",className:"text-gray-600 hover:text-teal transition-colors",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})})]}),(0,s.jsxs)("p",{className:"text-gray-500 text-sm",children:["Built with",(0,s.jsx)("span",{className:"text-red-500",children:" ❤️ "}),"using Next.js & Tailwind"]}),(0,s.jsxs)("p",{className:"text-gray-400 text-sm",children:["\xa9 ",new Date().getFullYear()," Gregory Odiase. All rights reserved."]})]})]})})})}function c(){return(0,s.jsxs)("div",{className:"min-h-screen relative overflow-hidden",children:[(0,s.jsx)(n.default,{}),(0,s.jsx)(a.default,{}),(0,s.jsx)(o.default,{}),(0,s.jsx)(d,{})]})}},5965:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(4693).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\user\\\\Projects\\\\node\\\\portfolio\\\\src\\\\components\\\\home\\\\hero.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\user\\Projects\\node\\portfolio\\src\\components\\home\\hero.tsx","default")},5739:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(4693).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\user\\\\Projects\\\\node\\\\portfolio\\\\src\\\\components\\\\home\\\\projects.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\user\\Projects\\node\\portfolio\\src\\components\\home\\projects.tsx","default")},7409:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(4693).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\user\\\\Projects\\\\node\\\\portfolio\\\\src\\\\components\\\\shared\\\\navigation.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\user\\Projects\\node\\portfolio\\src\\components\\shared\\navigation.tsx","default")},2689:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5480);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},8762:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[109,326,455],()=>r(5050));module.exports=s})();