(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"+Tvm":function(e,t,n){"use strict";n("+2uw");var r=n("9BXY"),a=(n("/7Ld"),n("xwgP")),o=n.n(a),c=n("iczh"),i=n.n(c),l=n("tFyB"),s=function(e){var t=Object(a["useContext"])(l["a"]),n=e.children,c=e.contentWidth,s=e.className,u=e.style,f=Object(a["useContext"])(r["b"].ConfigContext),d=f.getPrefixCls,p=e.prefixCls||d("pro"),v=c||t.contentWidth,m="".concat(p,"-grid-content");return o.a.createElement("div",{className:i()(m,s,{wide:"Fixed"===v}),style:u},o.a.createElement("div",{className:"".concat(p,"-grid-content-children")},n))};t["a"]=s},"/0MY":function(e,t,n){"use strict";var r=n("/AtT"),a=n("zWfh");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("xwgP")),c=r(n("zpf2")),i=r(n("fqIW")),l=function(e,t){return o.createElement(i.default,Object.assign({},e,{ref:t,icon:c.default}))};l.displayName="ArrowLeftOutlined";var s=o.forwardRef(l);t.default=s},"/7Ld":function(e,t,n){},"9Fta":function(e,t,n){},"DfP+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};t.default=r},KEdo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("fPY9"));function a(e){return e&&e.__esModule?e:{default:e}}var o=r;t.default=o,e.exports=o},YitI:function(e,t,n){"use strict";n("tXtI"),n("hccC");var r=n("Vyjn"),a=n.n(r),o=n("rDqp"),c=n.n(o),i=n("eQ3R"),l=n.n(i),s=n("4c61"),u=n.n(s),f=n("7nnc"),d=n.n(f),p=n("wV7d"),v=n.n(p),m=n("yA5w"),h=n.n(m),b=n("xwgP"),y=n.n(b),g=n("iczh"),O=n.n(g),x=n("3CTf"),E=n("t8cx"),P=n("oZU2"),w=n("vNe1"),j=n.n(w),N=n("RfwO"),C=n.n(N);function T(e){var t,n=function(n){return function(){t=null,e.apply(void 0,j()(n))}},r=function(){if(null==t){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];t=C()(n(r))}};return r.cancel=function(){return C.a.cancel(t)},r}function S(){return function(e,t,n){var r=n.value,a=!1;return{configurable:!0,get:function(){if(a||this===e.prototype||this.hasOwnProperty(t))return r;var n=T(r.bind(this));return a=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),a=!1,n}}}}var k=n("onc4");function B(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function R(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function _(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n){var r=window.innerHeight-t.bottom;return n+r}}var M=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],A=[];function F(e,t){if(e){var n=A.find((function(t){return t.target===e}));n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},A.push(n),M.forEach((function(t){n.eventHandlers[t]=Object(k["a"])(e,t,(function(){n.affixList.forEach((function(e){e.lazyUpdatePosition()}))}))})))}}function H(e){var t=A.find((function(t){var n=t.affixList.some((function(t){return t===e}));return n&&(t.affixList=t.affixList.filter((function(t){return t!==e}))),n}));t&&0===t.affixList.length&&(A=A.filter((function(e){return e!==t})),M.forEach((function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()})))}var z,D=function(e,t,n,r){var a,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":h()(Reflect))&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(c=(o<3?a(c):o>3?a(t,n,c):a(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c};function L(){return"undefined"!==typeof window?window:null}(function(e){e[e["None"]=0]="None",e[e["Prepare"]=1]="Prepare"})(z||(z={}));var I=function(e){d()(n,e);var t=v()(n);function n(){var e;return l()(this,n),e=t.apply(this,arguments),e.state={status:z.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props.offsetBottom,n=e.props.offsetTop;return void 0===t&&void 0===n&&(n=0),n},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,n=t.status,r=t.lastAffix,a=e.props.onChange,o=e.getTargetFunc();if(n===z.Prepare&&e.fixedNode&&e.placeholderNode&&o){var c=e.getOffsetTop(),i=e.getOffsetBottom(),l=o();if(l){var s={status:z.None},u=B(l),f=B(e.placeholderNode),d=R(f,u,c),p=_(f,u,i);void 0!==d?(s.affixStyle={position:"fixed",top:d,width:f.width,height:f.height},s.placeholderStyle={width:f.width,height:f.height}):void 0!==p&&(s.affixStyle={position:"fixed",bottom:p,width:f.width,height:f.height},s.placeholderStyle={width:f.width,height:f.height}),s.lastAffix=!!s.affixStyle,a&&r!==s.lastAffix&&a(s.lastAffix),e.setState(s)}}},e.prepareMeasure=function(){e.setState({status:z.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.render=function(){var t=e.context.getPrefixCls,n=e.state,r=n.affixStyle,o=n.placeholderStyle,i=e.props,l=i.prefixCls,s=i.children,u=O()(c()({},t("affix",l),r)),f=Object(x["a"])(e.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return b["createElement"](E["a"],{onResize:function(){e.updatePosition()}},b["createElement"]("div",a()({},f,{ref:e.savePlaceholderNode}),r&&b["createElement"]("div",{style:o,"aria-hidden":"true"}),b["createElement"]("div",{className:u,ref:e.saveFixedNode,style:r},b["createElement"](E["a"],{onResize:function(){e.updatePosition()}},s))))},e}return u()(n,[{key:"getTargetFunc",value:function(){var e=this.context.getTargetContainer,t=this.props.target;return void 0!==t?t:e||L}},{key:"componentDidMount",value:function(){var e=this,t=this.getTargetFunc();t&&(this.timeout=setTimeout((function(){F(t(),e),e.updatePosition()})))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.getTargetFunc(),r=null;n&&(r=n()||null),t!==r&&(H(this),r&&(F(r,this),this.updatePosition()),this.setState({prevTarget:r})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),H(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.getTargetFunc(),t=this.state.affixStyle;if(e&&t){var n=this.getOffsetTop(),r=this.getOffsetBottom(),a=e();if(a&&this.placeholderNode){var o=B(a),c=B(this.placeholderNode),i=R(c,o,n),l=_(c,o,r);if(void 0!==i&&t.top===i||void 0!==l&&t.bottom===l)return}}this.prepareMeasure()}}]),n}(b["Component"]);I.contextType=P["b"],D([S()],I.prototype,"updatePosition",null),D([S()],I.prototype,"lazyUpdatePosition",null);var U=I,Y=(n("+2uw"),n("9BXY")),W=(n("qKLA"),n("kmdJ"),n("kMq8"),n("zrbK"),n("JMyf"),n("/3Oe")),J=n.n(W),K=n("tHdb"),q=n.n(K),X=n("KEdo"),Q=n.n(X),V=n("0ERt"),G=n("QJYX"),Z=n.n(G),$=n("zG6F"),ee=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},te=function(e){var t,n=e.prefixCls,r=e.separator,o=void 0===r?"/":r,c=e.children,i=e.overlay,l=e.dropdownProps,s=ee(e,["prefixCls","separator","children","overlay","dropdownProps"]),u=b["useContext"](P["b"]),f=u.getPrefixCls,d=f("breadcrumb",n),p=function(e){return i?b["createElement"]($["a"],a()({overlay:i,placement:"bottomCenter"},l),b["createElement"]("span",{className:"".concat(d,"-overlay-link")},e,b["createElement"](Z.a,null))):e};return t="href"in s?b["createElement"]("a",a()({className:"".concat(d,"-link")},s),c):b["createElement"]("span",a()({className:"".concat(d,"-link")},s),c),t=p(t),c?b["createElement"]("span",null,t,o&&""!==o&&b["createElement"]("span",{className:"".concat(d,"-separator")},o)):null};te.__ANT_BREADCRUMB_ITEM=!0;var ne=te,re=function(e){var t=e.children,n=b["useContext"](P["b"]),r=n.getPrefixCls,a=r("breadcrumb");return b["createElement"]("span",{className:"".concat(a,"-separator")},t||"/")};re.__ANT_BREADCRUMB_SEPARATOR=!0;var ae=re,oe=n("plyh"),ce=n("4PeS"),ie=n("ORnU"),le=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function se(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|"),r=e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}));return r}function ue(e,t,n,r){var a=n.indexOf(e)===n.length-1,o=se(e,t);return a?b["createElement"]("span",null,o):b["createElement"]("a",{href:"#/".concat(r.join("/"))},o)}var fe=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=j()(e),a=fe(t,n);return a&&r.push(a),r},pe=function(e){var t,n=e.prefixCls,r=e.separator,o=void 0===r?"/":r,i=e.style,l=e.className,s=e.routes,u=e.children,f=e.itemRender,d=void 0===f?ue:f,p=e.params,v=void 0===p?{}:p,m=le(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),h=b["useContext"](P["b"]),y=h.getPrefixCls,g=h.direction,x=y("breadcrumb",n);if(s&&s.length>0){var E=[];t=s.map((function(e){var t,n=fe(e.path,v);return n&&E.push(n),e.children&&e.children.length&&(t=b["createElement"](oe["a"],null,e.children.map((function(e){return b["createElement"](oe["a"].Item,{key:e.path||e.breadcrumbName},d(e,v,s,de(E,e.path,v)))})))),b["createElement"](ne,{overlay:t,separator:o,key:n||e.breadcrumbName},d(e,v,s,E))}))}else u&&(t=Object(V["a"])(u).map((function(e,t){return e?(Object(ce["a"])(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(ie["a"])(e,{separator:o,key:t})):e})));var w=O()(x,c()({},"".concat(x,"-rtl"),"rtl"===g),l);return b["createElement"]("div",a()({className:w,style:i},m),t)};pe.Item=ne,pe.Separator=ae;var ve=pe,me=ve,he=n("b2eH"),be=n("IJDd"),ye=n("JYF3"),ge=function(e,t,n){return t&&n?b["createElement"](ye["a"],{componentName:"PageHeader"},(function(r){var a=r.back;return b["createElement"]("div",{className:"".concat(e,"-back")},b["createElement"](be["a"],{onClick:function(e){n&&n(e)},className:"".concat(e,"-back-button"),"aria-label":a},t))})):null},Oe=function(e){return b["createElement"](me,e)},xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";return void 0!==e.backIcon?e.backIcon:"rtl"===t?b["createElement"](Q.a,null):b["createElement"](q.a,null)},Ee=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",r=t.title,a=t.avatar,o=t.subTitle,c=t.tags,i=t.extra,l=t.onBack,s="".concat(e,"-heading");if(r||o||c||i){var u=xe(t,n),f=ge(e,u,l);return b["createElement"]("div",{className:s},b["createElement"]("div",{className:"".concat(s,"-left")},f,a&&b["createElement"](he["a"],a),r&&b["createElement"]("span",{className:"".concat(s,"-title"),title:"string"===typeof r?r:void 0},r),o&&b["createElement"]("span",{className:"".concat(s,"-sub-title"),title:"string"===typeof o?o:void 0},o),c&&b["createElement"]("span",{className:"".concat(s,"-tags")},c)),i&&b["createElement"]("span",{className:"".concat(s,"-extra")},i))}return null},Pe=function(e,t){return t?b["createElement"]("div",{className:"".concat(e,"-footer")},t):null},we=function(e,t){return b["createElement"]("div",{className:"".concat(e,"-content")},t)},je=function(e){var t=b["useState"](!1),n=J()(t,2),r=n[0],a=n[1],o=function(e){var t=e.width;a(t<768)};return b["createElement"](P["a"],null,(function(t){var n,a=t.getPrefixCls,i=t.pageHeader,l=t.direction,s=e.prefixCls,u=e.style,f=e.footer,d=e.children,p=e.breadcrumb,v=e.className,m=!0;"ghost"in e?m=e.ghost:i&&"ghost"in i&&(m=i.ghost);var h=a("page-header",s),y=p&&p.routes?Oe(p):null,g=O()(h,v,(n={"has-breadcrumb":y,"has-footer":f},c()(n,"".concat(h,"-ghost"),m),c()(n,"".concat(h,"-rtl"),"rtl"===l),c()(n,"".concat(h,"-compact"),r),n));return b["createElement"](E["a"],{onResize:o},b["createElement"]("div",{className:g,style:u},y,Ee(h,e,l),d&&we(h,d),Pe(h,f)))}))},Ne=je,Ce=(n("xsit"),n("4bJo")),Te=n("tFyB"),Se=n("+Tvm"),ke=n("juPF"),Be=(n("9Fta"),n("C9e5"));function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(n),!0).forEach((function(t){Me(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ae(e,t){if(null==e)return{};var n,r,a=Fe(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Fe(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function He(){return He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},He.apply(this,arguments)}var ze=function(e){var t=e.tabList,n=e.tabActiveKey,r=e.onTabChange,a=e.tabBarExtraContent,o=e.tabProps,c=e.prefixedClassName;return t&&t.length?y.a.createElement(Ce["a"],He({className:"".concat(c,"-tabs"),activeKey:n,onChange:function(e){r&&r(e)},tabBarExtraContent:a},o),t.map((function(e,t){return y.a.createElement(Ce["a"].TabPane,He({},e,{tab:e.tab,key:e.key||t}))}))):null},De=function(e,t,n){return e||t?y.a.createElement("div",{className:"".concat(n,"-detail")},y.a.createElement("div",{className:"".concat(n,"-main")},y.a.createElement("div",{className:"".concat(n,"-row")},e&&y.a.createElement("div",{className:"".concat(n,"-content")},e),t&&y.a.createElement("div",{className:"".concat(n,"-extraContent")},t)))):null},Le=function(e,t){var n=e.title,r=e.content,a=e.pageHeaderRender,o=e.header,c=e.extraContent,i=(e.style,e.prefixCls),l=Ae(e,["title","content","pageHeaderRender","header","extraContent","style","prefixCls"]);if(a)return a(_e(_e({},e),t));var s=n;return n||!1===n||(s=t.title),y.a.createElement(Ne,He({},t,{title:s},l,{footer:ze(_e(_e({},l),{},{prefixedClassName:t.prefixedClassName}))},o,{prefixCls:i}),(null===o||void 0===o?void 0:o.children)||De(r,c,t.prefixedClassName))},Ie=function(e){var t=e.children,n=e.loading,r=e.style,a=e.footer,o=e.affixProps,c=e.ghost,i=e.fixedHeader,l=Object(b["useContext"])(Te["a"]),s=Object(b["useContext"])(Y["b"].ConfigContext),u=s.getPrefixCls,f=e.prefixCls||u("pro"),d="".concat(f,"-page-container"),p=O()(d,e.className,Me({},"".concat(f,"-page-container-ghost"),c)),v=t?y.a.createElement("div",null,y.a.createElement("div",{className:"".concat(d,"-children-content")},t),l.hasFooterToolbar&&y.a.createElement("div",{style:{height:48,marginTop:24}})):null,m=y.a.createElement("div",{className:"".concat(d,"-warp")},Le(e,_e(_e({},l),{},{prefixCls:void 0,prefixedClassName:d})));return y.a.createElement("div",{style:r,className:p},i?y.a.createElement(U,He({offsetTop:l.hasHeader&&l.fixedHeader?l.headerHeight:0},o),m):m,y.a.createElement(Se["a"],null,n?y.a.createElement(Be["a"],null):v),a&&y.a.createElement(ke["a"],{prefixCls:f},a))};t["a"]=Ie},fPY9:function(e,t,n){"use strict";var r=n("/AtT"),a=n("zWfh");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("xwgP")),c=r(n("DfP+")),i=r(n("fqIW")),l=function(e,t){return o.createElement(i.default,Object.assign({},e,{ref:t,icon:c.default}))};l.displayName="ArrowRightOutlined";var s=o.forwardRef(l);t.default=s},hccC:function(e,t,n){},juPF:function(e,t,n){"use strict";n("+2uw");var r=n("9BXY"),a=n("xwgP"),o=n.n(a),c=n("iczh"),i=n.n(c),l=n("3CTf"),s=(n("xY/K"),n("tFyB"));function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,a=m(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var h=function(e){var t=e.children,n=e.className,c=e.extra,f=e.style,p=e.renderContent,m=v(e,["children","className","extra","style","renderContent"]),h=Object(a["useContext"])(r["b"].ConfigContext),b=h.getPrefixCls,y=e.prefixCls||b("pro"),g="".concat(y,"-footer-bar"),O=Object(a["useContext"])(s["a"]),x=Object(a["useMemo"])((function(){var e=O.hasSiderMenu,t=O.isMobile,n=O.siderWidth;if(e)return n?t?"100%":"calc(100% - ".concat(n,"px)"):"100%"}),[O.collapsed,O.hasSiderMenu,O.isMobile,O.siderWidth]),E=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"".concat(g,"-left")},c),o.a.createElement("div",{className:"".concat(g,"-right")},t));return Object(a["useEffect"])((function(){return O&&(null===O||void 0===O?void 0:O.setHasFooterToolbar)?(null===O||void 0===O||O.setHasFooterToolbar(!0),function(){O&&(null===O||void 0===O?void 0:O.setHasFooterToolbar)&&(null===O||void 0===O||O.setHasFooterToolbar(!1))}):function(){}}),[]),o.a.createElement("div",u({className:i()(n,"".concat(g)),style:d({width:x},f)},Object(l["a"])(m,["prefixCls"])),p?p(d(d(d({},e),O),{},{leftWidth:x}),E):E)};t["a"]=h},kmdJ:function(e,t,n){},qKLA:function(e,t,n){},tFyB:function(e,t,n){"use strict";var r=n("xwgP"),a=Object(r["createContext"])({});t["a"]=a},tHdb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("/0MY"));function a(e){return e&&e.__esModule?e:{default:e}}var o=r;t.default=o,e.exports=o},"xY/K":function(e,t,n){},zpf2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};t.default=r}}]);