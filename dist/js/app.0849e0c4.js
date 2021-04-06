(function(t){function e(e){for(var r,o,a=e[0],u=e[1],c=e[2],h=0,p=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5",attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("4989"),n("ab8b"),n("2dd8"),n("5f5b"));r["default"].use(o["a"]);var a={name:"App"},u=a,c=n("2877"),l=Object(c["a"])(u,i,s,!1,null,null,null),h=l.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",{staticClass:"text-center"},[t._v("Invoice Checker")]),n("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.checkingMonth,expression:"checkingMonth"}],staticClass:"form-control my-5",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.checkingMonth=e.target.multiple?n:n[0]}}},t._l(t.shownPeriod,(function(e,r){return n("option",{key:e.value,domProps:{value:e.value,selected:0===r}},[t._v(t._s(e.text))])})),0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkingNumber,expression:"checkingNumber"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入統一發票末三碼",maxlength:"3"},domProps:{value:t.checkingNumber},on:{input:function(e){e.target.composing||(t.checkingNumber=e.target.value)}}}),n("div",{staticClass:"text-center py-5"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.winningPossibility}},[t.checking?n("div",{staticClass:"spinner-border text-light",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t.checking?t._e():n("div",[t._v("查詢")])])])]),n("form",{directives:[{name:"show",rawName:"v-show",value:t.winningPossibility,expression:"winningPossibility"}],staticClass:"py-3",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.furtherCheckWinnings(e)}}},[n("label",{attrs:{for:"fullNumberInput"}},[t._v("您有可能中大獎！請輸入完整發票號碼：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.furtherInput,expression:"furtherInput"}],attrs:{type:"text",id:"fullNumberInput",max:"8"},domProps:{value:t.furtherInput},on:{input:function(e){e.target.composing||(t.furtherInput=e.target.value)}}}),n("button",{staticClass:"btn-primary ml-1"},[t._v("提交")])]),n("div",{staticClass:"row mt-5 mb-3"},[n("div",{staticClass:"col"},[n("span",[t._v("查詢次數："+t._s(t.queryingCount))])]),n("div",{staticClass:"col"},[n("span",[t._v("中獎次數："+t._s(t.winningCount))])])]),n("table",{directives:[{name:"show",rawName:"v-show",value:t.results.length,expression:"results.length"}],staticClass:"table"},[t._m(0),t._l(t.results,(function(e,r){return n("tbody",{key:r},[n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),n("td",[t._v(t._s(e.month))]),n("td",[t._v(t._s(e.number))]),n("td",[t._v(t._s(e.isWinner))]),n("td",[t._v(t._s(t._f("toThousands")(e.amount)))])])])}))],2)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("序號")]),n("th",{attrs:{scope:"col"}},[t._v("期別")]),n("th",{attrs:{scope:"col"}},[t._v("發票號碼")]),n("th",{attrs:{scope:"col"}},[t._v("是否中獎")]),n("th",{attrs:{scope:"col"}},[t._v("中獎金額")])])])}],m=(n("4de4"),n("1276"),n("ac1f"),n("d3b7"),n("25f0"),n("fb6a"),n("bc3a")),v=n.n(m),g="https://fathomless-journey-79826.herokuapp.com/",b={name:"Home",data:function(){return{today:"",period:["01-02","03-04","05-06","07-08","09-10","11-12"],shownPeriod:[{value:"01-02 2021",text:"2021年01-02月"},{value:"11-12 2020",text:"2020年11-12月"}],checkingMonth:"01-02 2021",checkingNumber:"",results:JSON.parse(localStorage.getItem("results"))||[],checking:!1,furtherInput:"",winningPossibility:!1,jackpotNumber:"",possiblyWinnings:"",possiblyWinningPrize:""}},computed:{queryingCount:function(){return this.results.length},winningCount:function(){return this.results.filter((function(t){return 0!==t.amount})).length}},mounted:function(){this.today=new Date},methods:{handleSubmit:function(){var t=this;return this.checking=!0,this.checkingMonth?this.checkingNumber.length<3?alert("請確認發票號碼是否輸入正確"):void v.a.post(g,{checkingMonth:this.checkingMonth,checkingNumber:this.checkingNumber}).then((function(e){e.data.isWinner&&200!==e.data.amount?(t.winningPossibility=!0,t.jackpotNumber=e.data.invoice,t.possiblyWinnings=e.data.amount,t.possiblyWinningPrize=e.data.prize):t.saveResult(e.data.isWinner,e.data.amount)})).then((function(){t.checking=!1})):alert("請選擇查詢月份")},furtherCheckWinnings:function(){if(8!==this.furtherInput.length)return alert("請確認發票號碼是否輸入正確");for(var t=[],e=0,n=this.furtherInput.split(""),r=this.jackpotNumber.split(""),i=0,s=0;s<n.length;s++)t.push(n[s]===r[i]),i++;var o=t.lastIndexOf(!1);if(-1===o)e=this.possiblyWinnings;else if("First Prize"!==this.possiblyWinningPrize)e=0;else switch(o){case 0:e=4e4;break;case 1:e=1e4;break;case 2:e=4e3;break;case 3:e=1e3;break;default:e=200}this.saveResult(e,e),this.jackpotNumber="",this.winningPossibility=!1,this.possiblyWinnings="",this.possiblyWinningPrize=""},saveResult:function(t,e){this.results.push({month:this.checkingMonth,number:this.furtherInput?this.furtherInput:this.checkingNumber,isWinner:t?"是":"否",amount:e||0}),localStorage.setItem("results",JSON.stringify(this.results)),this.checkingNumber="",this.furtherInput=""}},filters:{toThousands:function(t){t=(t||0).toString();var e="";while(t.length>3)e=","+t.slice(-3)+e,t=t.slice(0,t.length-3);return t&&(e=t+e),e}},watch:{checkingNumber:function(){3===this.checkingNumber.length&&this.handleSubmit()}}},y=b,_=Object(c["a"])(y,f,d,!1,null,null,null),k=_.exports;r["default"].use(p["a"]);var w=[{path:"/",name:"Home",component:k}],N=new p["a"]({mode:"history",base:"/",routes:w}),P=N;r["default"].config.productionTip=!1,new r["default"]({router:P,render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.0849e0c4.js.map