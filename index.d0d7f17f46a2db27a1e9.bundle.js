(()=>{"use strict";var e,r={7562:(e,r,n)=>{var t=n(7294),l=n(745),a=n(7294),c="/home/isaac/project/frontend_mentor/multi-step/src/components/SingleStep.jsx";const m=function(e){var r=e.index,n=e.stepValue,t=e.currentStep;return a.createElement(a.Fragment,null,a.createElement("div",{className:"step",__source:{fileName:c,lineNumber:4,columnNumber:7}},a.createElement("div",{className:" num ".concat(r===t?"active-step":""),__source:{fileName:c,lineNumber:5,columnNumber:9}},a.createElement("span",{__source:{fileName:c,lineNumber:6,columnNumber:11}}," ",r," ")),a.createElement("div",{className:"info",__source:{fileName:c,lineNumber:8,columnNumber:9}},a.createElement("span",{__source:{fileName:c,lineNumber:9,columnNumber:11}}," STEP ",r," "),a.createElement("span",{__source:{fileName:c,lineNumber:10,columnNumber:11}}," ",n.toUpperCase()," "))))};var u=n(7294),o="/home/isaac/project/frontend_mentor/multi-step/src/components/sideNav.jsx";const i=function(e){var r=e.step;return u.createElement(u.Fragment,null,u.createElement("div",{className:"sidebar-nav",__source:{fileName:o,lineNumber:21,columnNumber:7}},[{stepName:"your info"},{stepName:"select plan"},{stepName:"add-ons"},{stepName:"summary"}].map((function(e,n){var t=e.stepName;return u.createElement(m,{key:t,index:++n,stepValue:t,currentStep:r,__source:{fileName:o,lineNumber:23,columnNumber:11}})}))))};var s=n(7294),N="/home/isaac/project/frontend_mentor/multi-step/src/components/MainHeader.jsx";const b=function(e){var r=e.header,n=e.info;return s.createElement(s.Fragment,null,s.createElement("div",{className:"header",__source:{fileName:N,lineNumber:4,columnNumber:7}},s.createElement("h2",{__source:{fileName:N,lineNumber:5,columnNumber:9}}," ",r," "),s.createElement("p",{__source:{fileName:N,lineNumber:6,columnNumber:9}},n)))};var f=n(4649),d=n(9501),p="monthly",_="yearly",y="This field is required",h=new RegExp(/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/),v=n(7294),E=["placeholder","label"],g="/home/isaac/project/frontend_mentor/multi-step/src/components/PersonalInfo.jsx";function P(){return P=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},P.apply(this,arguments)}function O(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,l,a=[],c=!0,m=!1;try{for(n=n.call(e);!(c=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);c=!0);}catch(e){m=!0,l=e}finally{try{c||null==n.return||n.return()}finally{if(m)throw l}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return j(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function S(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const x=function(e){var r=e.handleSubmit;return v.createElement(v.Fragment,null,v.createElement("div",{className:"personal-info",__source:{fileName:g,lineNumber:10,columnNumber:7}},v.createElement(f.J9,{initialValues:{name:localStorage.getItem("name")||"",email:localStorage.getItem("email")||"",phone:localStorage.getItem("phone")||""},validationSchema:d.Ry({name:d.Z_().min("4","${path} must be atleast ${min} chars ").max(40,"${path} must be maximum ${max} long").required(y),email:d.Z_().email("Must be a valid email").required(y),phone:d.Z_().matches(h,"Must be a valid phone number").required(y)}),onSubmit:function(e,n){return r(e,n)},__source:{fileName:g,lineNumber:11,columnNumber:9}},(function(e){return v.createElement(v.Fragment,null,v.createElement(b,{header:"Personal info",info:" Please provide your name, email address, and phone number.",__source:{fileName:g,lineNumber:36,columnNumber:15}}),v.createElement(f.l0,{autoComplete:"off",__source:{fileName:g,lineNumber:41,columnNumber:15}},v.createElement("div",{__source:{fileName:g,lineNumber:42,columnNumber:17}},v.createElement(k,{label:"Name",placeholder:"first name",name:"name",__source:{fileName:g,lineNumber:43,columnNumber:19}})),v.createElement("div",{__source:{fileName:g,lineNumber:49,columnNumber:17}},v.createElement(k,{label:"Email Address",name:"email",placeholder:"example@gmail.com",__source:{fileName:g,lineNumber:50,columnNumber:19}})),v.createElement("div",{__source:{fileName:g,lineNumber:56,columnNumber:17}},v.createElement(k,{label:"Phone Number",name:"phone",placeholder:"e.g +256 1234 57893",__source:{fileName:g,lineNumber:57,columnNumber:19}})),v.createElement("div",{className:"btn-submit",__source:{fileName:g,lineNumber:63,columnNumber:17}},v.createElement("button",{type:"submit",__source:{fileName:g,lineNumber:64,columnNumber:19}},"Next step"))))}))))};var k=function(e){var r=e.placeholder,n=e.label,t=S(e,E),l=O((0,f.U$)(t),2),a=(l[0],l[1]);return v.createElement(v.Fragment,null,v.createElement("div",{__source:{fileName:g,lineNumber:81,columnNumber:7}},v.createElement("label",{htmlFor:t.name,__source:{fileName:g,lineNumber:82,columnNumber:9}}," ",n),a.touched&&a.error?v.createElement("small",{className:"error",__source:{fileName:g,lineNumber:84,columnNumber:11}}," ",a.error," "):null),v.createElement(f.gN,P({name:t.name,id:t.name,placeholder:r,className:"".concat(a.touched&&a.error?"error-input":null," ")},t,{__source:{fileName:g,lineNumber:87,columnNumber:7}})))},w=n(7294),T="/home/isaac/project/frontend_mentor/multi-step/src/components/SelectPlain.jsx";function A(){return A=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},A.apply(this,arguments)}const C=function(e){var r=e.plan,n=e.handleChangePlan,t=e.planPrices,l=e.handleSelectedPlan,a=e.selectedPlan;return w.createElement(w.Fragment,null,w.createElement("div",{className:"selector-plan",__source:{fileName:T,lineNumber:15,columnNumber:7}},w.createElement(b,{header:"Select your Plan",info:"  You have the option of monthly or yearly billing.",__source:{fileName:T,lineNumber:16,columnNumber:9}}),w.createElement("div",{className:"card-container",__source:{fileName:T,lineNumber:21,columnNumber:9}},t.map((function(e){return w.createElement(F,A({key:e.alt},e,{plan:r,selectedPlan:a,handleSelectedPlan:l,__source:{fileName:T,lineNumber:23,columnNumber:13}}))}))),w.createElement("div",{className:"price-switch",__source:{fileName:T,lineNumber:33,columnNumber:9}},w.createElement("div",{className:" plans ".concat(r===p?"monthly":""),__source:{fileName:T,lineNumber:34,columnNumber:11}},w.createElement("span",{__source:{fileName:T,lineNumber:37,columnNumber:13}},"Monthly")),w.createElement("div",{className:"toggle",role:"button",onClick:n,__source:{fileName:T,lineNumber:39,columnNumber:11}},w.createElement("div",{className:"ball ".concat(r===_?"ball-isToggled":""),__source:{fileName:T,lineNumber:40,columnNumber:13}})),w.createElement("div",{className:"plans ".concat(r===_?"yearly":""),__source:{fileName:T,lineNumber:46,columnNumber:11}},w.createElement("span",{__source:{fileName:T,lineNumber:47,columnNumber:13}},"Yearly")))))};var F=function(e){var r=e.srcUrl,n=e.alt,t=e.cardName,l=e.yPrice,a=e.mPrice,c=e.plan,m=e.handleSelectedPlan,u=e.selectedPlan;return w.createElement(w.Fragment,null,w.createElement("div",{onClick:function(){return m({cardName:t})},className:"card ".concat(u.cardName===t?"isSelected":""),__source:{fileName:T,lineNumber:69,columnNumber:7}},w.createElement("div",{className:"image",__source:{fileName:T,lineNumber:79,columnNumber:9}},w.createElement("img",{src:r,alt:n,__source:{fileName:T,lineNumber:80,columnNumber:11}})),w.createElement("div",{className:"card-content",__source:{fileName:T,lineNumber:82,columnNumber:9}},w.createElement("span",{__source:{fileName:T,lineNumber:83,columnNumber:11}},t," "),c===_?w.createElement(w.Fragment,null,w.createElement("small",{__source:{fileName:T,lineNumber:86,columnNumber:15}},"$",l,"/yr"),w.createElement("span",{__source:{fileName:T,lineNumber:87,columnNumber:15}}," 2 months free")):w.createElement("small",{__source:{fileName:T,lineNumber:90,columnNumber:13}},"$",a,"/mo"))))},I=n(7294),$="/home/isaac/project/frontend_mentor/multi-step/src/components/PickAddOns.jsx";function U(){return U=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},U.apply(this,arguments)}const M=function(e){var r=e.pickCardContent,n=e.handlePickAddOns,t=e.checkBoxRefs,l=e.yourPlan,a=e.addOnErr;return I.createElement(I.Fragment,null,I.createElement("div",{className:"pick-addons",__source:{fileName:$,lineNumber:13,columnNumber:7}},I.createElement(b,{header:"Pick add-ons",info:"  Add-ons help enhance your gaming experience.\n",__source:{fileName:$,lineNumber:14,columnNumber:9}}),a&&I.createElement("div",{className:"error",__source:{fileName:$,lineNumber:20,columnNumber:11}},I.createElement("span",{__source:{fileName:$,lineNumber:21,columnNumber:13}},"You must pick atleast one add-on ")),I.createElement("div",{className:"cardlist",__source:{fileName:$,lineNumber:24,columnNumber:9}},r.map((function(e,r){return I.cloneElement(I.createElement(B,U({key:e.boldText},e,{yourPlan:l,handlePickAddOns:n,__source:{fileName:$,lineNumber:29,columnNumber:15}})),{ref:t[r]})})))))};var B=I.forwardRef((function(e,r){var n=e.boldText,t=e.smallText,l=e.monthlyPrice,a=e.yearlyPrice,c=e.handlePickAddOns,m=e.yourPlan,u=e.isSelected;return I.createElement(I.Fragment,null,I.createElement("div",{className:"add-on-card ".concat(u?"isSelected":""," "),__source:{fileName:$,lineNumber:61,columnNumber:9}},I.createElement("div",{className:"checkbox",__source:{fileName:$,lineNumber:62,columnNumber:11}},I.createElement("input",{type:"checkbox",name:n,id:"chckbox",ref:r,onClick:function(){return c({boldText:n,ref:r})},__source:{fileName:$,lineNumber:63,columnNumber:13}})),I.createElement("div",{className:"card-content",__source:{fileName:$,lineNumber:71,columnNumber:11}},I.createElement("div",{__source:{fileName:$,lineNumber:72,columnNumber:13}},I.createElement("span",{__source:{fileName:$,lineNumber:73,columnNumber:15}}," ",n," "),I.createElement("span",{__source:{fileName:$,lineNumber:74,columnNumber:15}}," ",t," ")),I.createElement("div",{__source:{fileName:$,lineNumber:76,columnNumber:13}},m===_?I.createElement("span",{__source:{fileName:$,lineNumber:78,columnNumber:17}}," +$",a,"/yr "):I.createElement("span",{__source:{fileName:$,lineNumber:80,columnNumber:17}}," +$",l,"/mo ")))))})),R=n(7294);const q=function(e){var r=e.price;return R.createElement("span",{__source:{fileName:"/home/isaac/project/frontend_mentor/multi-step/src/components/MonthlyPrice.jsx",lineNumber:1,columnNumber:35}}," +$",r,"/mo ")};var D=n(7294);const Y=function(e){var r=e.price;return D.createElement("span",{__source:{fileName:"/home/isaac/project/frontend_mentor/multi-step/src/components/YearlyPrice.jsx",lineNumber:1,columnNumber:36}}," +$",r,"/yr ")};var V=n(7294),Z="/home/isaac/project/frontend_mentor/multi-step/src/components/FinishingUp.jsx";function z(){return z=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},z.apply(this,arguments)}var G=function(e){var r=e.totalPrice,n=e.yourPlan;return V.createElement(V.Fragment,null,V.createElement("span",{__source:{fileName:Z,lineNumber:39,columnNumber:5}}," Total (per month) "),V.createElement("span",{__source:{fileName:Z,lineNumber:40,columnNumber:5}},n===p?"+$".concat(r.monthly,"/mo"):"+$".concat(r.yearly,"/yr")))};const H=function(e){var r=e.yourPlan,n=e.cart,l=e.totalPlanPrices,a=e.setStep,c=(0,t.useRef)();return V.createElement(V.Fragment,null,V.createElement("div",{className:"finishing-up",__source:{fileName:Z,lineNumber:12,columnNumber:7}},V.createElement(b,{header:"Finishing Up",info:"  Double-check everything looks OK before confirming.",__source:{fileName:Z,lineNumber:13,columnNumber:9}}),V.createElement("div",{className:"finishItems",ref:c,__source:{fileName:Z,lineNumber:18,columnNumber:9}},n.map((function(e,n){return V.createElement(J,z({key:e.boldText},e,{idx:n,yourPlan:r,setStep:a,__source:{fileName:Z,lineNumber:20,columnNumber:13}}))}))),V.createElement("div",{className:"total",__source:{fileName:Z,lineNumber:29,columnNumber:9}},V.createElement(G,{totalPrice:l,yourPlan:r,__source:{fileName:Z,lineNumber:30,columnNumber:11}}))))};var J=function(e){var r=e.yourPlan,n=e.boldText,l=e.monthlyPrice,a=e.yearlyPrice,c=e.idx,m=e.setStep,u=(0,t.useCallback)((function(e){return e.match(/[\b\w\b]+/g).map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" ")}),[r]);return V.createElement(V.Fragment,null,V.createElement("div",{className:" ".concat(0===c?"cardItem":"notActive","  "),__source:{fileName:Z,lineNumber:70,columnNumber:7}},V.createElement("div",{__source:{fileName:Z,lineNumber:71,columnNumber:9}},V.createElement("span",{__source:{fileName:Z,lineNumber:72,columnNumber:11}},n," (",u(r),")"),r!==_?V.createElement(q,{price:l,__source:{fileName:Z,lineNumber:76,columnNumber:13}}):V.createElement(Y,{price:a,__source:{fileName:Z,lineNumber:78,columnNumber:13}})),0===c&&V.createElement("div",{__source:{fileName:Z,lineNumber:82,columnNumber:11}},V.createElement("a",{href:"#",onClick:function(){return m(2)},__source:{fileName:Z,lineNumber:83,columnNumber:13}}," ","Change"," ")),0===c&&V.createElement("hr",{__source:{fileName:Z,lineNumber:89,columnNumber:23}})))};const K=n.p+"ee753f231cc5a5789b8e.svg";var L=n(7294),W="/home/isaac/project/frontend_mentor/multi-step/src/components/ThankYou.jsx";const Q=function(){return L.createElement(L.Fragment,null,L.createElement("div",{className:"thank-you",__source:{fileName:W,lineNumber:6,columnNumber:7}},L.createElement("div",{className:"tick",__source:{fileName:W,lineNumber:7,columnNumber:9}},L.createElement("img",{src:K,alt:"thank_you_icon",__source:{fileName:W,lineNumber:8,columnNumber:11}})),L.createElement("div",{__source:{fileName:W,lineNumber:10,columnNumber:9}},L.createElement("h1",{__source:{fileName:W,lineNumber:11,columnNumber:11}},"Thank you!")),L.createElement("div",{className:"text",__source:{fileName:W,lineNumber:13,columnNumber:9}},"Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.")))};var X=n(7294),ee=["name","handleClick"];function re(){return re=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},re.apply(this,arguments)}function ne(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const te=function(e){var r=e.name,n=e.handleClick,t=ne(e,ee);return X.createElement(X.Fragment,null,X.createElement("button",re({type:"button",id:"btn",onClick:n},t,{__source:{fileName:"/home/isaac/project/frontend_mentor/multi-step/src/components/Button.jsx",lineNumber:4,columnNumber:7}}),r))},le=n.p+"705bd10c4c1f688871d7.svg";var ae=[{cardName:"Arcade",alt:"arcade_icon_svg ",srcUrl:n.p+"a08c098289a31bb2f66d.svg",mPrice:9,yPrice:90},{cardName:"Advanced",alt:"advanced_icon_svg ",srcUrl:le,mPrice:12,yPrice:120},{cardName:"Pro",alt:"pro_icon_svg ",srcUrl:n.p+"2e7e377da9c658d60862.svg",mPrice:15,yPrice:150}],ce=[{boldText:"Online service",smallText:"Access to multiplayer games",monthlyPrice:1,yearlyPrice:10,isSelected:!0},{boldText:"Larger storage",smallText:"Extra 1TB of cloud save",monthlyPrice:2,yearlyPrice:20,isSelected:!0},{boldText:"Customizable Profile",smallText:"Custom theme on your profile",monthlyPrice:2,yearlyPrice:20,isSelected:!1}],me="/home/isaac/project/frontend_mentor/multi-step/src/App.jsx";function ue(e){return function(e){if(Array.isArray(e))return fe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||be(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function ie(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(n),!0).forEach((function(r){se(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function se(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function Ne(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,l,a=[],c=!0,m=!1;try{for(n=n.call(e);!(c=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);c=!0);}catch(e){m=!0,l=e}finally{try{c||null==n.return||n.return()}finally{if(m)throw l}}return a}(e,r)||be(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,r){if(e){if("string"==typeof e)return fe(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(e,r):void 0}}function fe(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function de(){var e=Ne((0,t.useState)(1),2),r=e[0],n=e[1],l=Ne((0,t.useState)(ae),2),a=l[0],c=(l[1],Ne((0,t.useState)(a[0]),2)),m=c[0],u=c[1],o=Ne((0,t.useState)(ce),2),s=o[0],N=o[1],b=Ne((0,t.useState)(p),2),f=b[0],d=b[1],y=Ne((0,t.useState)(!1),2),h=y[0],v=y[1],E=Ne((0,t.useState)([]),2),g=E[0],P=E[1],O=Ne((0,t.useState)({monthly:0,yearly:0}),2),j=O[0],S=O[1];(0,t.useEffect)((function(){S((function(e){return ie(ie({},e),{},{monthly:g.reduce((function(e,r){return r.monthlyPrice+e}),0),yearly:g.reduce((function(e,r){return r.yearlyPrice+e}),0)})}))}),[g]);var k=function(){P((function(e){return[{boldText:m.cardName,monthlyPrice:m.mPrice,yearlyPrice:m.yPrice}].concat(ue(s.filter((function(e){return!0===e.isSelected}))))}))};(0,t.useEffect)((function(){k()}),[s,m]);var w=Array(s.length).fill("").map((function(){return t.createRef()})),T=function(){3!==r||1!==g.length?n((function(e){return 5===e||e>5?5:++e})):v(!0)};(0,t.useEffect)((function(){g.length>=2&&v(!1),s.map((function(e){e.isSelected&&w.map((function(r){var n;(null===(n=r.current)||void 0===n?void 0:n.name)===e.boldText&&(r.current.checked=!0)}))}))}));var A=[t.createElement(x,{key:"s",handleSubmit:function(e){localStorage.setItem("name",e.name),localStorage.setItem("email",e.email),localStorage.setItem("phone",e.phone),setTimeout((function(){T()}),100)},__source:{fileName:me,lineNumber:139,columnNumber:5}}),t.createElement(C,{key:"p",plan:f,handleChangePlan:function(){d((function(e){return e===p?_:e===_?p:void 0}))},handleSelectedPlan:function(e){var r=e.cardName,n=a.find((function(e){return e.cardName===r}));u(n)},planPrices:a,selectedPlan:m,__source:{fileName:me,lineNumber:141,columnNumber:5}}),t.createElement(M,{key:"sp",pickCardContent:s,checkBoxRefs:w,handlePickAddOns:function(e){var r=e.boldText;e.ref;N((function(e){return ue(e.map((function(e){return e.boldText===r?ie(ie({},e),{},{isSelected:!e.isSelected}):e})))})),k()},yourPlan:f,addOnErr:h,__source:{fileName:me,lineNumber:150,columnNumber:5}}),t.createElement(H,{key:"qw",yourPlan:f,cart:g,setStep:n,totalPlanPrices:j,__source:{fileName:me,lineNumber:159,columnNumber:5}}),t.createElement(Q,{key:"th",__source:{fileName:me,lineNumber:166,columnNumber:5}})];return t.createElement(t.Fragment,null,t.createElement("div",{className:"wrapper",__source:{fileName:me,lineNumber:171,columnNumber:7}},t.createElement("div",{className:"container",__source:{fileName:me,lineNumber:172,columnNumber:9}},t.createElement(i,{step:r,__source:{fileName:me,lineNumber:173,columnNumber:11}}),t.createElement("div",{className:"main",__source:{fileName:me,lineNumber:174,columnNumber:11}},A.map((function(e,n){if(++n===r)return e})),5!==r&&1!==r&&t.createElement("div",{className:"ctrls",__source:{fileName:me,lineNumber:180,columnNumber:15}},t.createElement("div",{className:"go-back",__source:{fileName:me,lineNumber:181,columnNumber:17}},1!==r&&t.createElement(te,{name:"Go Back",handleClick:function(){n((function(e){return 1===e?1:--e}))},__source:{fileName:me,lineNumber:183,columnNumber:21}})),t.createElement("div",{className:4===r?"next":"",__source:{fileName:me,lineNumber:186,columnNumber:17}},t.createElement(te,{name:4!==r?"Next Step":"Confirm",handleClick:T,__source:{fileName:me,lineNumber:187,columnNumber:19}})))))))}var pe=document.getElementById("root");(0,l.s)(pe).render(t.createElement(de,{__source:{fileName:"/home/isaac/project/frontend_mentor/multi-step/src/index.js",lineNumber:8,columnNumber:13}}))}},n={};function t(e){var l=n[e];if(void 0!==l)return l.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return r[e](a,a.exports,t),a.loaded=!0,a.exports}t.m=r,e=[],t.O=(r,n,l,a)=>{if(!n){var c=1/0;for(i=0;i<e.length;i++){for(var[n,l,a]=e[i],m=!0,u=0;u<n.length;u++)(!1&a||c>=a)&&Object.keys(t.O).every((e=>t.O[e](n[u])))?n.splice(u--,1):(m=!1,a<c&&(c=a));if(m){e.splice(i--,1);var o=l();void 0!==o&&(r=o)}}return r}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[n,l,a]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={826:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var l,a,[c,m,u]=n,o=0;if(c.some((r=>0!==e[r]))){for(l in m)t.o(m,l)&&(t.m[l]=m[l]);if(u)var i=u(t)}for(r&&r(n);o<c.length;o++)a=c[o],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(i)},n=self.webpackChunkreact=self.webpackChunkreact||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var l=t.O(void 0,[485],(()=>t(7562)));l=t.O(l)})();
//# sourceMappingURL=index.d0d7f17f46a2db27a1e9.bundle.js.map