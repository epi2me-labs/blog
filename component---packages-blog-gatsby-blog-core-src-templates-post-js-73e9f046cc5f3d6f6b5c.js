(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_minimal_v2=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_minimal_v2||[]).push([[621],{5365:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},9090:function(e,t,r){var n=r(5365);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},639:function(e,t,r){var n=r(7276),o=r(7321);function i(t,r,a){return o()?(e.exports=i=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},e.exports.default=e.exports,e.exports.__esModule=!0),i.apply(null,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},7321:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},8850:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},5929:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},6292:function(e,t,r){var n=r(9090),o=r(8850),i=r(4595),a=r(5929);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},4595:function(e,t,r){var n=r(5365);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},8676:function(e){"use strict";e.exports=function(e,t){t=t||JSON.stringify;for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t(i);n[a]||(r.push(i),n[a]=!0)}return r}},1437:function(e,t,r){var n=r(9263);e.exports={MDXRenderer:n}},9263:function(e,t,r){var n=r(639),o=r(6292),i=r(5526),a=r(5600);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7378),l=r(1368).mdx,f=r(5172).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=a(e,["scope","children"]),s=f(t),d=u.useMemo((function(){if(!r)return null;var e=c({React:u,mdx:l},s),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,t]);return u.createElement(d,c({},i))}},7028:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ct}});var n=r(9603),o=r(6250),i=r(120),a=r(7378),s=r(8945),c=r(333),u=r(7425),l=r(8092),f=r(4459),d=r(9341),p=r(72),h=(0,p.ZP)((function(){return r.e(722).then(r.bind(r,722))})),v=(0,p.ZP)((function(){return r.e(521).then(r.bind(r,5521))})),g=r(3450),y=r(6185),b=r(1025),m=r(7125),x=r(6805);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={regular:{minHeight:"23rem",img:{borderRadius:"lg"}},wide:{img:{borderRadius:"lg"}},inCard:{mt:-4,mx:-4,img:{borderRadius:function(e){return e.radii.lg+" "+e.radii.lg+" 0 0"}}},inCardLarge:{mt:[-4,-5],mx:[-4,-5],img:{borderRadius:function(e){return e.radii.lg+" "+e.radii.lg+" 0 0"}}}},O=function(e){var t=e.title,r=e.thumbnail,n=e.wide,o=e.full,i=e.inCard,s=e.inCardLarge;if(!r)return null;var c=(n?"wide":o&&"full")||"regular",u=(0,m.Z)(r,"hero");return(0,x.tZ)(a.Fragment,null,(0,x.tZ)(y.G,{image:u,alt:t,css:(0,b.i)(w(w(w({},Z[c]),i&&Z.inCard),s&&Z.inCardLarge)),imgStyle:"wide"===c||"full"===c?Z.full:void 0}),(0,x.tZ)(f.Z,{space:3}))},j=r(1437),P=r(5013),S=r(7566),_={heading:{svg:{visibility:"hidden",size:"icon.xs",position:"absolute",top:"50%",transform:"translate(0,-50%)",pl:2},":hover svg":{visibility:"visible"},pointerEvents:"painted"},link:{position:"relative"}},A=function(e){return function(t){return(0,x.tZ)(e,(0,n.Z)({},t,{css:(0,b.i)(_.heading)}),(0,x.tZ)(s.rU,{href:"#"+t.id,variant:"text."+e,sx:_.link},t.children,(0,x.tZ)(S.gjK,null)))}},C={h1:A("h1"),h2:A("h2"),h3:A("h3")},E=function(e){return(0,x.tZ)("figure",(0,n.Z)({},e,{css:(0,b.i)((function(e){return e.styles.figure}))}),e.children)},$=function(e){return(0,x.tZ)("figcaption",(0,n.Z)({},e,{css:(0,b.i)((function(e){return e.styles.figcaption}))}),e.children)},M=(0,p.ZP)((function(){return r.e(482).then(r.bind(r,482))}));function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var T=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,g.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({figure:E,figcaption:$,pre:function(e){return e.children},code:function(e){return(0,x.tZ)(M,(0,n.Z)({},e,{fallback:(0,x.tZ)(P.RQ.pre,null,e.children)}))}},C),R=function(e){var t=e.body;return(0,x.tZ)(P.Zo,{components:T},(0,x.tZ)(j.MDXRenderer,null,t))},L=r(5414),N={wrapper:{alignItems:"center"},heading:{color:"omegaDark",mr:3,mb:0}},z=function(e){var t=e.tags;return t&&t.length>0?(0,x.tZ)(s.kC,{sx:N.wrapper},(0,x.tZ)(s.X6,{variant:"h5",sx:N.heading},"Tags"),(0,x.tZ)(s.xu,{variant:"lists.badges"},t.map((function(e){var t=e.id,r=e.name,n=e.slug;return(0,x.tZ)(s.Ct,{variant:"tag",key:t,as:L.Link,to:n},r)})))):null},B={flex:{alignItems:["flex-start","center"],justifyContent:"space-between",flexDirection:["column","row"],"& > div + div":{mt:[3,0],flexBasis:"1/2",justifyContent:"flex-end"}}},I=function(e){return(0,x.tZ)(s.xu,null,(0,x.tZ)(s.iz,null),(0,x.tZ)(s.kC,{sx:B.flex},(0,x.tZ)(z,e),(0,x.tZ)(v,e)))},q=r(1368);var F=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),U=Math.abs,X=String.fromCharCode;function K(e){return e.trim()}function G(e,t,r){return e.replace(t,r)}function H(e,t){return e.indexOf(t)}function J(e,t){return 0|e.charCodeAt(t)}function Q(e,t,r){return e.slice(t,r)}function V(e){return e.length}function W(e){return e.length}function Y(e,t){return t.push(e),e}var ee=1,te=1,re=0,ne=0,oe=0,ie="";function ae(e,t,r,n,o,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:ee,column:te,length:a,return:""}}function se(e,t,r){return ae(e,t.root,t.parent,r,t.props,t.children,0)}function ce(){return oe=ne>0?J(ie,--ne):0,te--,10===oe&&(te=1,ee--),oe}function ue(){return oe=ne<re?J(ie,ne++):0,te++,10===oe&&(te=1,ee++),oe}function le(){return J(ie,ne)}function fe(){return ne}function de(e,t){return Q(ie,e,t)}function pe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function he(e){return ee=te=1,re=V(ie=e),ne=0,[]}function ve(e){return ie="",e}function ge(e){return K(de(ne-1,me(91===e?e+2:40===e?e+1:e)))}function ye(e){for(;(oe=le())&&oe<33;)ue();return pe(e)>2||pe(oe)>3?"":" "}function be(e,t){for(;--t&&ue()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return de(e,fe()+(t<6&&32==le()&&32==ue()))}function me(e){for(;ue();)switch(oe){case e:return ne;case 34:case 39:return me(34===e||39===e?e:oe);case 40:41===e&&me(e);break;case 92:ue()}return ne}function xe(e,t){for(;ue()&&e+oe!==57&&(e+oe!==84||47!==le()););return"/*"+de(t,ne-1)+"*"+X(47===e?e:ue())}function ke(e){for(;!pe(le());)ue();return de(e,ne)}var we="-ms-",Ze="-moz-",Oe="-webkit-",je="comm",Pe="rule",Se="decl";function _e(e,t){for(var r="",n=W(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function Ae(e,t,r,n){switch(e.type){case"@import":case Se:return e.return=e.return||e.value;case je:return"";case Pe:e.value=e.props.join(",")}return V(r=_e(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ce(e,t){switch(function(e,t){return(((t<<2^J(e,0))<<2^J(e,1))<<2^J(e,2))<<2^J(e,3)}(e,t)){case 5103:return Oe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+e+Ze+e+we+e+e;case 6828:case 4268:return Oe+e+we+e+e;case 6165:return Oe+e+we+"flex-"+e+e;case 5187:return Oe+e+G(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return Oe+e+we+"flex-item-"+G(e,/flex-|-self/,"")+e;case 4675:return Oe+e+we+"flex-line-pack"+G(e,/align-content|flex-|-self/,"")+e;case 5548:return Oe+e+we+G(e,"shrink","negative")+e;case 5292:return Oe+e+we+G(e,"basis","preferred-size")+e;case 6060:return Oe+"box-"+G(e,"-grow","")+Oe+e+we+G(e,"grow","positive")+e;case 4554:return Oe+G(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+e+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,Oe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(V(e)-1-t>6)switch(J(e,t+1)){case 109:if(45!==J(e,t+4))break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+Ze+(108==J(e,t+3)?"$3":"$2-$3"))+e;case 115:return~H(e,"stretch")?Ce(G(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==J(e,t+1))break;case 6444:switch(J(e,V(e)-3-(~H(e,"!important")&&10))){case 107:return G(e,":",":"+Oe)+e;case 101:return G(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Oe+(45===J(e,14)?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+we+"$2box$3")+e}break;case 5936:switch(J(e,t+11)){case 114:return Oe+e+we+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Oe+e+we+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Oe+e+we+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Oe+e+we+e+e}return e}function Ee(e){return ve($e("",null,null,null,[""],e=he(e),0,[0],e))}function $e(e,t,r,n,o,i,a,s,c){for(var u=0,l=0,f=a,d=0,p=0,h=0,v=1,g=1,y=1,b=0,m="",x=o,k=i,w=n,Z=m;g;)switch(h=b,b=ue()){case 34:case 39:case 91:case 40:Z+=ge(b);break;case 9:case 10:case 13:case 32:Z+=ye(h);break;case 92:Z+=be(fe()-1,7);continue;case 47:switch(le()){case 42:case 47:Y(De(xe(ue(),fe()),t,r),c);break;default:Z+="/"}break;case 123*v:s[u++]=V(Z)*y;case 125*v:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+l:p>0&&V(Z)-f&&Y(p>32?Te(Z+";",n,r,f-1):Te(G(Z," ","")+";",n,r,f-2),c);break;case 59:Z+=";";default:if(Y(w=Me(Z,t,r,u,l,o,s,m,x=[],k=[],f),i),123===b)if(0===l)$e(Z,t,w,w,x,i,f,s,k);else switch(d){case 100:case 109:case 115:$e(e,w,w,n&&Y(Me(e,w,w,0,0,o,s,m,o,x=[],f),k),o,k,f,s,n?x:k);break;default:$e(Z,w,w,w,[""],k,f,s,k)}}u=l=p=0,v=y=1,m=Z="",f=a;break;case 58:f=1+V(Z),p=h;default:if(v<1)if(123==b)--v;else if(125==b&&0==v++&&125==ce())continue;switch(Z+=X(b),b*v){case 38:y=l>0?1:(Z+="\f",-1);break;case 44:s[u++]=(V(Z)-1)*y,y=1;break;case 64:45===le()&&(Z+=ge(ue())),d=le(),l=V(m=Z+=ke(fe())),b++;break;case 45:45===h&&2==V(Z)&&(v=0)}}return i}function Me(e,t,r,n,o,i,a,s,c,u,l){for(var f=o-1,d=0===o?i:[""],p=W(d),h=0,v=0,g=0;h<n;++h)for(var y=0,b=Q(e,f+1,f=U(v=a[h])),m=e;y<p;++y)(m=K(v>0?d[y]+" "+b:G(b,/&\f/g,d[y])))&&(c[g++]=m);return ae(e,t,r,0===o?Pe:s,c,u,l)}function De(e,t,r){return ae(e,t,r,je,X(oe),Q(e,2,-2),0)}function Te(e,t,r,n){return ae(e,t,r,Se,Q(e,0,n),Q(e,n+1,-1),n)}var Re=function(e,t){return ve(function(e,t){var r=-1,n=44;do{switch(pe(n)){case 0:38===n&&12===le()&&(t[r]=1),e[r]+=ke(ne-1);break;case 2:e[r]+=ge(n);break;case 4:if(44===n){e[++r]=58===le()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=X(n)}}while(n=ue());return e}(he(e),t))},Le=new WeakMap,Ne=function(e){if("rule"===e.type&&e.parent&&e.length){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Le.get(r))&&!n){Le.set(e,!0);for(var o=[],i=Re(t,o),a=r.props,s=0,c=0;s<i.length;s++)for(var u=0;u<a.length;u++,c++)e.props[c]=o[s]?i[s].replace(/&\f/g,a[u]):a[u]+" "+i[s]}}},ze=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},Be=[function(e,t,r,n){if(!e.return)switch(e.type){case Se:e.return=Ce(e.value,e.length);break;case"@keyframes":return _e([se(G(e.value,"@","@"+Oe),e,"")],n);case Pe:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _e([se(G(t,/:(read-\w+)/,":-moz-$1"),e,"")],n);case"::placeholder":return _e([se(G(t,/:(plac\w+)/,":-webkit-input-$1"),e,""),se(G(t,/:(plac\w+)/,":-moz-$1"),e,""),se(G(t,/:(plac\w+)/,we+"input-$1"),e,"")],n)}return""}))}}],Ie=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||Be;var o,i,a={},s=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)a[t[r]]=!0;s.push(e)}));var c,u,l,f,d=[Ae,(f=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],p=(u=[Ne,ze].concat(n,d),l=W(u),function(e,t,r,n){for(var o="",i=0;i<l;i++)o+=u[i](e,t,r,n)||"";return o});i=function(e,t,r,n){c=r,function(e){_e(Ee(e),p)}(e?e+"{"+t.styles+"}":t.styles),n&&(h.inserted[t.name]=!0)};var h={key:t,sheet:new F({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:a,registered:{},insert:i};return h.sheet.hydrate(s),h},qe=r(1057),Fe=r(5520);var Ue=/[A-Z]|^ms/g,Xe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ke=function(e){return 45===e.charCodeAt(1)},Ge=function(e){return null!=e&&"boolean"!=typeof e},He=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return Ke(e)?e:e.replace(Ue,"-$&").toLowerCase()})),Je=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Xe,(function(e,t,r){return Ve={name:t,styles:r,next:Ve},t}))}return 1===Fe.Z[e]||Ke(e)||"number"!=typeof t||0===t?t:t+"px"};function Qe(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return Ve={name:r.name,styles:r.styles,next:Ve},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)Ve={name:n.name,styles:n.styles,next:Ve},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=Qe(e,t,r[o])+";";else for(var i in r){var a=r[i];if("object"!=typeof a)null!=t&&void 0!==t[a]?n+=i+"{"+t[a]+"}":Ge(a)&&(n+=He(i)+":"+Je(i,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var s=Qe(e,t,a);switch(i){case"animation":case"animationName":n+=He(i)+":"+s+";";break;default:n+=i+"{"+s+"}"}}else for(var c=0;c<a.length;c++)Ge(a[c])&&(n+=He(i)+":"+Je(i,a[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=Ve,i=r(e);return Ve=o,Qe(e,t,i)}break;case"string":}if(null==t)return r;var a=t[r];return void 0!==a?a:r}var Ve,We=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var Ye=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,o="";Ve=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,o+=Qe(r,t,i)):o+=i[0];for(var a=1;a<e.length;a++)o+=Qe(r,t,e[a]),n&&(o+=i[a]);We.lastIndex=0;for(var s,c="";null!==(s=We.exec(o));)c+="-"+s[1];return{name:(0,qe.Z)(o)+c,styles:o,next:Ve}},et=(Object.prototype.hasOwnProperty,(0,a.createContext)("undefined"!=typeof HTMLElement?Ie({key:"css"}):null)),tt=(et.Provider,function(e){return(0,a.forwardRef)((function(t,r){var n=(0,a.useContext)(et);return e(t,n,r)}))}),rt=(0,a.createContext)({});r(2398),r(5466);var nt=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),ot=tt((function(e,t){var r=e.styles,n=Ye([r],void 0,"function"==typeof r||Array.isArray(r)?(0,a.useContext)(rt):void 0),o=(0,a.useRef)();return(0,a.useLayoutEffect)((function(){var e=t.key+"-global",r=new nt({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),i=!1,a=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==a&&(i=!0,a.setAttribute("data-emotion",e),r.hydrate([a])),o.current=[r,i],function(){r.flush()}}),[t]),(0,a.useLayoutEffect)((function(){var e=o.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==n.next&&function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+n:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}}(t,n.next,!0),r.tags.length){var i=r.tags[r.tags.length-1].nextElementSibling;r.before=i,r.flush()}t.insert("",n,r,!1)}}),[t,n.name]),null}));function it(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Ye(t)}var at;var st={Bokeh:function(e){var t,r,n=e.plotJson,o=e.plotName,i=e.plotCaption,s=e.bokehVersion,c=function(e){var t=a.useState(e?"loading":"idle"),r=t[0],n=t[1];return a.useEffect((function(){if(e){var t=document.querySelector('script[src="'+e+'"]');if(t)n(t.getAttribute("data-status"));else{(t=document.createElement("script")).src=e,t.async=!0,t.setAttribute("data-status","loading"),document.body.appendChild(t);var r=function(e){t.setAttribute("data-status","load"===e.type?"ready":"error")};t.addEventListener("load",r),t.addEventListener("error",r)}var o=function(e){n("load"===e.type?"ready":"error")};return t.addEventListener("load",o),t.addEventListener("error",o),function(){t&&(t.removeEventListener("load",o),t.removeEventListener("error",o))}}n("idle")}),[e]),r}("https://cdn.bokeh.org/bokeh/release/bokeh-"+(void 0===s?"2.2.2":s)+".min.js"),u=a.useState(!1),l=u[0],d=u[1];return a.useEffect((function(){"ready"!==c||l||(window.Bokeh.embed.embed_item(n,o),d(!0))}),[c,l,n,o]),(0,x.tZ)(a.Fragment,null,(0,x.tZ)(ot,{styles:it(at||(t=["\n                .bk-root {\n                    margin: auto;\n                }\n            "],r||(r=t.slice(0)),t.raw=r,at=t))}),(0,x.tZ)(E,null,(0,x.tZ)("div",{class:"wrap-{plotName}",style:{display:"flex"}},(0,x.tZ)("div",{id:o,className:"bk-root"})),(0,x.tZ)($,null,i)),(0,x.tZ)(f.Z,{space:3}))}},ct=function(e){var t=e.data,r=t.post,a=t.tagCategoryPosts,p=t.tagPosts,v=t.categoryPosts,g=(t.previous,t.next,(0,i.Z)(e,["data"])),y=[].concat((0,o.Z)(a?a.nodes:[]),(0,o.Z)(p?p.nodes:[]),(0,o.Z)(v?v.nodes:[])),b=g.pageContext,m=(b=void 0===b?{}:b).services,k=void 0===m?{}:m,w=b.siteUrl;return(0,x.tZ)(q.MDXProvider,{components:st},(0,x.tZ)(c.Ar,g,(0,x.tZ)(d.Z,(0,n.Z)({},r,{siteUrl:w})),(0,x.tZ)(f.Z,null),(0,x.tZ)(c.Kq,{effectProps:{effect:"fadeInDown"}},(0,x.tZ)(c.or,null,(0,x.tZ)(l.Z,(0,n.Z)({},r,{variant:"horizontal-hero",omitExcerpt:!0,omitMedia:!0})))),(0,x.tZ)(f.Z,{space:3}),(0,x.tZ)(c.Kq,{effectProps:{fraction:0}},(0,x.tZ)(c.or,null,(0,x.tZ)(s.Zb,{variant:"paper-lg"},(0,x.tZ)(O,(0,n.Z)({},r,{inCard:!0})),(0,x.tZ)(R,r),(0,x.tZ)(I,(0,n.Z)({},r,{location:g.location})),k.disqus&&(0,x.tZ)(h,r)),(0,x.tZ)(f.Z,null),r.category&&(0,x.tZ)(u.Z,{title:"Related Posts",nodes:y,variant:["horizontal-aside"],columns:[1,2,2,2],limit:6,distinct:!0,omitMedia:!0,omitCategory:!0})))))}},7425:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var n=r(9603),o=r(120),i=r(7378),a=r(8945),s=r(6741),c=r(8175),u=r(8676),l=r.n(u),f=r(7619),d=r(3450),p=r(503),h=r(1025),v=r(7566),g={slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:"auto",top:["auto",5],bottom:[3,"auto"],left:[2,4],p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}},y=r(72),b=r(6805);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=(0,y.ZP)((function(){return r.e(636).then(r.bind(r,2324))})),w=i.forwardRef((function(e,t){var r=e.columns,o=e.slidesToScroll,i=e.smoothAutoScroll,s=e.autoPlay,c=e.autoplaySpeed,u=e.fade,l=e.dots,f=e.arrows,d=e.centerMode,y=e.centerPadding,m=e.controlPosition,w=e.beforeChange,Z=e.children,O=(0,p.B7)(),j={slidesToScroll:1,autoplay:!0,cssEase:"linear"},P={centerMode:!u,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!l||!u)},S=O.theme.breakpoints.map((function(e,t){var n=r[t>=r.length?r.length-1:t],i=o[t>=o.length?o.length-1:t];return{breakpoint:parseInt(e),settings:x({slidesToShow:n,slidesToScroll:i},0===t?P:{})}})),_={ref:t,beforeChange:w,slidesToShow:r[r.length-1],slidesToScroll:o[o.length-1],speed:800,dots:l,arrows:f,centerMode:d,centerPadding:y,infinite:!0,cssEase:u?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:u,responsive:S,css:(0,h.i)(x(x(x(x({},u?g.fade:g.slide),"bottom"===m&&g.controlBottom),"center"===m&&g.controlCenter),"over"===m&&g.controlOver)),prevArrow:(0,b.tZ)(a.hU,{sx:g.arrowPrev},(0,b.tZ)(v.bUI,null)),nextArrow:(0,b.tZ)(a.hU,{sx:g.arrowNext},(0,b.tZ)(v.Dli,null))};i&&(_=x(x(x({},_),j),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!i&&s&&(_=x(x(x({},_),j),{},{speed:300,autoplaySpeed:c}));var A=Z.slice(0,r[r.length-1]);return(0,b.tZ)(k,(0,n.Z)({},_,{fallback:A}),Z)})),Z=w;w.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var O=r(8092),j=i.forwardRef((function(e,t){var r=e.nodes,i=e.variant,u=e.title,d=e.withTitleLink,p=e.limit,h=e.skip,v=e.distinct,g=e.slider,y=e.aside,m=e.asNavFor,x=e.loading,k=(0,o.Z)(e,["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"]),w=function(e,t){var r=t.limit,n=t.skip,o=t.distinct;if(!e)return null;if(!r&&!n&&!o)return e;var i=e;return o&&(i=l()(i,(function(e){return e.id}))),n&&(i=i.slice(n)),r&&(i=i.slice(0,r)),i}(r,{distinct:v,limit:p,skip:h});if(!w||!w.length)return null;var j=d?w[0].category&&w[0].category.slug:"",P=u&&""+(0,c.Z)(w.map((function(e){return e.id})).join()),S=(0,s.Z)(g?"lists.cards.slider":"lists.cards.fixed",i),_=function(e){m&&m.current&&(m.current.slickPause(),m.current.slickGoTo(e))},A=w.map((function(t,r){return(0,b.tZ)(O.Z,(0,n.Z)({key:t.id,variant:i,onMouseOver:function(){return _(r)},onFocus:function(){return _(r)},loading:e.fade?0===r?x:void 0:x},t,k))})),C=function(){return(0,b.tZ)(a.xu,{sx:{variant:S}},g?(0,b.tZ)(Z,(0,n.Z)({ref:t},k),A):A)};return u?(0,b.tZ)(f.Z,{title:u,titleLink:j,key:P,aside:y},(0,b.tZ)(C,null)):(0,b.tZ)(C,null)})),P=j;j.defaultProps={variant:"vertical",columns:[1],aside:!1}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-post-js-73e9f046cc5f3d6f6b5c.js.map