(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6,10],{252:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("795f2aee",content,!0,{sourceMap:!1})},256:function(t,e,n){"use strict";n.r(e);n(48),n(39),n(104);var r=n(10),o=n(36);n(251);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"autocomplete",props:{items:{type:Array,required:!1,default:function(){return[]}},isAsync:{type:Boolean,required:!1,default:!1},holder:{type:String,default:""}},data:function(){return{isOpen:!1,results:[],search:"",isLoading:!1,arrowCounter:0,cancel:n(397)}},computed:c({},Object(o.c)(["selected_district","top_20"])),methods:c(c({},Object(o.b)(["SET_DISTRICT"])),{},{onChange:function(){this.$emit("input",this),this.isAsync?this.isLoading=!0:(this.filterResults(),this.isOpen=!0)},filterResults:function(){var t=this;this.results=this.items.filter((function(e){return e["จังหวัด"].toLowerCase().indexOf(t.search.toLowerCase())>-1}))},setResult:function(t){this.SET_DISTRICT(t),this.search=t,this.isOpen=!1},onEnter:function(){-1!=this.arrowCounter?this.search=this.results[this.arrowCounter]["จังหวัด"]:this.search=this.selected_district,this.isOpen=!1,this.arrowCounter=-1,this.SET_DISTRICT(this.search)},handleClickOutside:function(t){this.$el.contains(t.target)||(this.isOpen=!1,this.arrowCounter=-1)},cancle:function(){var t=this;this.search="",this.isOpen=!this.isOpen,this.results=this.items.filter((function(e){return e["จังหวัด"].toLowerCase().indexOf(t.search.toLowerCase())>-1}))}}),watch:{items:function(t,e){t.length!==e.length&&(this.results=t,this.isLoading=!1)},selected_district:function(t,e){this.search=t}},mounted:function(){document.addEventListener("click",this.handleClickOutside),this.search=this.selected_district},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},f=(n(398),n(30)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative",attrs:{id:"autocomplete"}},[n("div",{staticClass:"absolute right-0 pr-5 cursor-pointer",staticStyle:{top:"50%"},on:{click:t.cancle}},[n("img",{staticStyle:{width:"15px",transform:"translateY(-50%)"},attrs:{src:t.cancel}})]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"flex mx-3 text-center border-b outline-none border-black-400",attrs:{type:"text",placeholder:t.holder},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.onChange],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}}}),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results",attrs:{id:"autocomplete-results"}},[0===t.results.length||t.isLoading?n("li",{staticClass:"loading"},[t._v("\n      ไม่พบข้อมูล\n    ")]):t._l(t.results,(function(e,i){return n("li",{key:i,staticClass:"px-5 py-1 autocomplete-result",class:{"is-active":i===t.arrowCounter},on:{click:function(n){return t.setResult(e["จังหวัด"])},keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.setResult(e["จังหวัด"])}}},[t._v("\n      "+t._s(e["จังหวัด"])+"\n    ")])}))],2)])}),[],!1,null,"77618e60",null);e.default=component.exports},397:function(t,e,n){t.exports=n.p+"img/cancel.c852ed2.svg"},398:function(t,e,n){"use strict";n(252)},399:function(t,e,n){var r=n(37)(!1);r.push([t.i,"input[data-v-77618e60]::-webkit-input-placeholder{opacity:.3}.autocomplete-results[data-v-77618e60]{padding:0;margin:0;height:-webkit-max-content;height:-moz-max-content;height:max-content;max-height:40vh;overflow:auto;min-width:170px;border:1px solid #787982;position:absolute;background:#fff;z-index:20;left:50%;transform:translateX(-50%)}.autocomplete-result[data-v-77618e60]{list-style:none;text-align:left;font-size:18px;cursor:pointer}.autocomplete-result.is-active[data-v-77618e60],.autocomplete-result[data-v-77618e60]:hover{background:rgba(220,225,230,.25);color:#000}",""]),t.exports=r},400:function(t,e,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("569b8b34",content,!0,{sourceMap:!1})},406:function(t,e,n){t.exports=n.p+"img/info.4330a0a.svg"},407:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiByeD0iNiIgZmlsbD0iYmxhY2siLz4KPHJlY3QgeD0iMy4xNzE1MSIgeT0iMy44Nzg0MiIgd2lkdGg9IjEiIGhlaWdodD0iNyIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDMuMTcxNTEgMy44Nzg0MikiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjguMTIxMjIiIHk9IjMuMTcxMzkiIHdpZHRoPSIxIiBoZWlnaHQ9IjciIHRyYW5zZm9ybT0icm90YXRlKDQ1IDguMTIxMjIgMy4xNzEzOSkiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},408:function(t,e,n){"use strict";n(400)},409:function(t,e,n){var r=n(37)(!1);r.push([t.i,".orgrange{color:#f15a29}.green{color:#2ba3b4}",""]),t.exports=r},418:function(t,e,n){"use strict";n.r(e);n(48);var r=n(10),o=n(36);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["HHI_Overall","HHI_Surname","HHI_Party","selected_district","district"])),data:function(){return{data:[],HHI:null,info:n(406),close:n(407),is_open:!1}},props:{type:{type:String,default:""}},watch:{selected_district:{immediate:!0,deep:!0,handler:function(t,e){"surname-cluster"===this.type?this.data=_.filter(this.HHI_Surname,(function(s){return s.district===t})):this.data=_.filter(this.HHI_Party,(function(s){return s.district===t})),this.data=this.data.sort((function(a,b){return b.percent-a.percent})),this.HHI=_.filter(this.HHI_Overall,(function(e){return e.district===t}))}}},methods:{openInfo:function(){this.is_open=!this.is_open},heightLow:function(t){return t<=1&&t>.7?"สูง":t<.69&&t>.31?"ปานกลาง":"ต่ำ"}}},d=(n(408),n(30)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-16 bg-white"},["mobile"!=t.$mq?n("span",{staticClass:"flex justify-center body2",attrs:{id:"title"}},[n("p",[t._v("หากดู")]),t._v(" "),n("p",{staticClass:"font-bold",class:"surname-cluster"===t.type?"text-orange-400":"text-green-400",domProps:{innerHTML:t._s("surname-cluster"===t.type?"อิทธิพลทางการเมืองของตระกูลต่างๆ":"อิทธิพลทางการเมืองของพรรคต่างๆ")}})]):t._e(),t._v(" "),"mobile"===t.$mq?n("p",{staticClass:"w-5/6 m-auto body2"},[t._v("\n    หากดู"),n("span",{staticClass:"font-bold",class:"surname-cluster"===t.type?"text-orange-400":"text-green-400"},[t._v(t._s("surname-cluster"===t.type?"อิทธิพลทางการเมืองของตระกูลต่างๆ":"อิทธิพลทางการเมืองของพรรคต่างๆ"))]),t._v("ในจังหวัด\n  ")]):t._e(),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center mt-2 body2",attrs:{id:"Autocomplete"}},["mobile"!=t.$mq?n("p",[t._v("ในจังหวัด")]):t._e(),t._v(" "),n("Autocomplete",{attrs:{items:t.district,holder:"เลือกจังหวัด"}}),t._v(" "),n("span",{staticClass:"flex flex-wrap justify-center mt-4 md:mt-0"},[n("p",[t._v("พบว่ามีการกระจุกตัวของอิทธิพลทางการเมือง")]),t._v(" "),n("p",{staticClass:"ml-2 font-bold"},[t._v("\n        "+t._s("surname-cluster"===t.type?t.heightLow(t.HHI[0].HHI_surname):t.heightLow(t.HHI[0].HHI_party))+"\n      ")])])],1),t._v(" "),n("div",{staticClass:"w-9/12 mx-auto mt-5 body6 md:w-full"},[t._v("\n    หมายเหตุ: คำนวณจากจำนวนครั้งที่แต่ละตระกูลได้รับ เลือกเป็น\n    ส.ส.เขตจังหวัดนั้น ในช่วงปี 2535-2563 (ชุด 48-62)\n  ")]),t._v(" "),n("p",{staticClass:"mt-10 opacity-50 body5"},[t._v("(คลิกเพื่อดูจังหวัดอื่นๆ ได้)")]),t._v(" "),n("div",{staticClass:"flex flex-col mt-3 md:flex-row",attrs:{id:"wrapper-body"}},[n("div",{staticClass:"relative flex justify-center flex-1 md:justify-end xl:mx-16"},[n("Map",{attrs:{data:t.HHI_Overall,type:t.type}}),t._v(" "),n("div",{staticClass:"absolute",style:{top:"70%",right:"mobile"===t.$mq?"10%":"-10%"},attrs:{id:"scale"}},[n("p",{staticClass:"body6"},[t._v("Herfindahl-Hirschman Index (HHI)")]),t._v(" "),n("div",{staticClass:"w-4/12",staticStyle:{width:"180px",height:"10px"},style:{background:"surname-cluster"===t.type?" linear-gradient(90deg,rgba(241, 90, 41, 0) 0%,#f15a29 100%)":"linear-gradient(90deg, rgba(43, 163, 180, 0) 0%, #2BA3B4 100%)"}}),t._v(" "),t._m(0)])],1),t._v(" "),n("div",{staticClass:"flex-1 md:mx-16"},[n("div",{staticClass:"flex flex-col px-5 mx-auto mt-10 overflow-hidden rounded-lg shadow md:mt-0",staticStyle:{width:"320px"},style:{height:"mobile"===t.$mq?"400px":"",maxHeight:"mobile"===t.$mq?"":"480px"},attrs:{id:"card-surname"}},[n("div",{staticClass:"pt-5 font-bold body1",attrs:{id:"title"}},[t._v("\n          "+t._s(t.selected_district)+"\n        ")]),t._v(" "),n("div",{staticClass:"flex items-center justify-center mt-3"},[n("p",{staticClass:"body6"},[t._v("Herfindahl-Hirschman Index (HHI)")]),t._v(" "),n("p",{staticClass:"ml-1 font-bold body5",class:"surname-cluster"===t.type?"text-orange-400":"text-green-400"},[t._v("\n            "+t._s("surname-cluster"===t.type?t.HHI[0].HHI_surname.toFixed(2):t.HHI[0].HHI_party.toFixed(2))+"\n          ")]),t._v(" "),t.is_open?t._e():n("img",{staticClass:"ml-2 cursor-pointer",attrs:{src:t.info},on:{click:t.openInfo}}),t._v(" "),t.is_open?n("img",{staticClass:"ml-2 cursor-pointer",attrs:{src:t.close},on:{click:t.openInfo}}):t._e()]),t._v(" "),t.is_open?n("div",{staticClass:"mt-4 body6",staticStyle:{color:"#828282"}},[n("p",{staticClass:"text-left"},[t._v("\n            HHI เป็นค่าที่วัดระดับความเข้มข้นในการแข่งขัน\n            โดยดูจากส่วนแบ่งการตลาด ค่า HHI ที่ใกล้ 1\n            สื่อถึงการที่มีคน/กลุ่มเดียวถือครองอำนาจส่วนใหญ่ ส่วนค่า HHI\n            ที่ใกล้ 0\n            สื่อถึงตลาดที่อำนาจถูกแบ่งให้กับหลากหลายกลุ่มในปริมาณที่เท่าๆ กัน\n          ")]),t._v(" "),n("p",{staticClass:"pt-2 text-left"},[t._v("\n            ค่า HHI ในงานชิ้นนี้\n            คำนวณจากจำนวนครั้งที่แต่ละตระกูลได้รับเลือกเป็น\n            ส.ส.เขตจังหวัดนั้นในช่วงปี 2535-2563 (ชุด 48-62)\n          ")])]):t._e(),t._v(" "),n("div",{staticClass:"flex w-full mt-3",attrs:{id:"progrss-bar"}},t._l(t.data,(function(s,i){return n("div",{key:i,staticClass:"rounded-md",class:"surname-cluster"===t.type?"bg-orange-400":"bg-green-400",style:{width:100*s.percent+"% "||!1,height:"40px",margin:"กรุงเทพมหานคร"===t.selected_district?"0 0.7px":"0 1px"}},[i<3&&"กรุงเทพมหานคร"!=t.selected_district?n("p",{staticClass:"flex items-center justify-center h-full text-white"},[t._v("\n              "+t._s(i+1)+"\n            ")]):t._e()])})),0),t._v(" "),n("div",{staticClass:"mt-3 mb-3 overflow-y-auto",attrs:{id:"rank-surname"}},t._l(t.data,(function(s,e){return n("div",{key:e,staticClass:"py-1"},[n("span",{staticClass:"flex"},[n("div",{staticClass:"flex flex-1"},[n("p",{staticClass:"flex items-center justify-center text-white rounded-full body6",class:"surname-cluster"===t.type?"bg-orange-400":"bg-green-400",staticStyle:{width:"21px",height:"21px"}},[t._v("\n                  "+t._s(e+1)+"\n                ")]),t._v(" "),n("p",{staticClass:"ml-3 font-bold body4",class:"surname-cluster"===t.type?"text-orange-400":"text-green-400"},[t._v("\n                  "+t._s("กรุงเทพมหานคร"===t.selected_district?(100*s.percent).toFixed(1):(100*s.percent).toFixed(0))+"%\n                ")])]),t._v(" "),n("p",{staticClass:"flex justify-start text-left body4",staticStyle:{flex:"2"}},[t._v("\n                "+t._s("surname-cluster"===t.type?s.surname:s.party)+"\n              ")])])])})),0)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between body6"},[n("p",[t._v("ต่ำ (0.0)")]),t._v(" "),n("p",[t._v("สูง (1.0)")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Autocomplete:n(256).default,Map:n(429).default})},428:function(t,e,n){"use strict";var r=n(4),o=n(67).find,l=n(105),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)}}]);