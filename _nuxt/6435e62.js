(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6],{252:function(t,e,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("795f2aee",content,!0,{sourceMap:!1})},255:function(t,e,r){"use strict";r.r(e);r(48),r(39),r(105);var n=r(10),o=r(36);r(251);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"autocomplete",props:{items:{type:Array,required:!1,default:function(){return[]}},isAsync:{type:Boolean,required:!1,default:!1},holder:{type:String,default:""}},data:function(){return{isOpen:!1,results:[],search:"",isLoading:!1,arrowCounter:0,cancel:r(397)}},computed:l({},Object(o.c)(["selected_district","top_20"])),methods:l(l({},Object(o.b)(["SET_DISTRICT"])),{},{onChange:function(){this.$emit("input",this),this.isAsync?this.isLoading=!0:(this.filterResults(),this.isOpen=!0)},filterResults:function(){var t=this;this.results=this.items.filter((function(e){return e["จังหวัด"].toLowerCase().indexOf(t.search.toLowerCase())>-1}))},setResult:function(t){this.SET_DISTRICT(t),this.search=t,this.isOpen=!1},onEnter:function(){-1!=this.arrowCounter?this.search=this.results[this.arrowCounter]["จังหวัด"]:this.search=this.selected_district,this.isOpen=!1,this.arrowCounter=-1,this.SET_DISTRICT(this.search)},handleClickOutside:function(t){this.$el.contains(t.target)||(this.isOpen=!1,this.arrowCounter=-1)},cancle:function(){var t=this;this.search="",this.isOpen=!this.isOpen,this.results=this.items.filter((function(e){return e["จังหวัด"].toLowerCase().indexOf(t.search.toLowerCase())>-1}))}}),watch:{items:function(t,e){t.length!==e.length&&(this.results=t,this.isLoading=!1)},selected_district:function(t,e){this.search=t}},mounted:function(){document.addEventListener("click",this.handleClickOutside),this.search=this.selected_district},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},h=(r(398),r(30)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative",attrs:{id:"autocomplete"}},[r("div",{staticClass:"absolute right-0 pr-5 cursor-pointer",staticStyle:{top:"50%"},on:{click:t.cancle}},[r("img",{staticStyle:{width:"15px",transform:"translateY(-50%)"},attrs:{src:t.cancel}})]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"flex mx-3 text-center border-b outline-none border-black-400",attrs:{type:"text",placeholder:t.holder},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.onChange],keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}}}),t._v(" "),r("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results",attrs:{id:"autocomplete-results"}},[0===t.results.length||t.isLoading?r("li",{staticClass:"loading"},[t._v("\n      ไม่พบข้อมูล\n    ")]):t._l(t.results,(function(e,i){return r("li",{key:i,staticClass:"px-5 py-1 autocomplete-result",class:{"is-active":i===t.arrowCounter},on:{click:function(r){return t.setResult(e["จังหวัด"])},keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.setResult(e["จังหวัด"])}}},[t._v("\n      "+t._s(e["จังหวัด"])+"\n    ")])}))],2)])}),[],!1,null,"77618e60",null);e.default=component.exports},397:function(t,e,r){t.exports=r.p+"img/cancel.c852ed2.svg"},398:function(t,e,r){"use strict";r(252)},399:function(t,e,r){var n=r(37)(!1);n.push([t.i,"input[data-v-77618e60]::-webkit-input-placeholder{opacity:.3}.autocomplete-results[data-v-77618e60]{padding:0;margin:0;height:-webkit-max-content;height:-moz-max-content;height:max-content;max-height:40vh;overflow:auto;min-width:170px;border:1px solid #787982;position:absolute;background:#fff;z-index:20;left:50%;transform:translateX(-50%)}.autocomplete-result[data-v-77618e60]{list-style:none;text-align:left;font-size:18px;cursor:pointer}.autocomplete-result.is-active[data-v-77618e60],.autocomplete-result[data-v-77618e60]:hover{background:rgba(220,225,230,.25);color:#000}",""]),t.exports=n},410:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDExIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjY0NDA5OSAzLjY0NTg0QzAuNDQ4NTMxIDMuODQwOCAwLjQ0ODAzNSA0LjE1NzM4IDAuNjQyOTkxIDQuMzUyOTVMMy44MTk5OCA3LjUzOTkxQzQuMDE0OTQgNy43MzU0OCA0LjMzMTUyIDcuNzM1OTggNC41MjcwOSA3LjU0MTAyQzQuNzIyNjUgNy4zNDYwNyA0LjcyMzE1IDcuMDI5NDggNC41MjgxOSA2LjgzMzkyTDEuNzA0MiA0LjAwMTA2TDQuNTM3MDYgMS4xNzcwN0M0LjczMjYzIDAuOTgyMTE0IDQuNzMzMTIgMC42NjU1MzEgNC41MzgxNyAwLjQ2OTk2M0M0LjM0MzIxIDAuMjc0Mzk2IDQuMDI2NjMgMC4yNzM4OTkgMy44MzEwNiAwLjQ2ODg1NUwwLjY0NDA5OSAzLjY0NTg0Wk0xMC45OTc5IDMuNTE1NjNMMC45OTc4ODIgMy40OTk5NUwwLjk5NjMxNCA0LjQ5OTk1TDEwLjk5NjMgNC41MTU2MkwxMC45OTc5IDMuNTE1NjNaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},411:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMS4zNDk3IDQuOTAyOThDMTEuNTQ1MiA0LjcwODAzIDExLjU0NTcgNC4zOTE0NCAxMS4zNTA4IDQuMTk1ODhMOC4xNzM3OCAxLjAwODkxQzcuOTc4ODIgMC44MTMzNDUgNy42NjIyNCAwLjgxMjg0OSA3LjQ2NjY3IDEuMDA3ODFDNy4yNzExIDEuMjAyNzYgNy4yNzA2MSAxLjUxOTM0IDcuNDY1NTYgMS43MTQ5MUwxMC4yODk2IDQuNTQ3NzdMNy40NTY3IDcuMzcxNzZDNy4yNjExMyA3LjU2NjcxIDcuMjYwNjMgNy44ODMzIDcuNDU1NTkgOC4wNzg4NkM3LjY1MDU1IDguMjc0NDMgNy45NjcxMyA4LjI3NDkzIDguMTYyNyA4LjA3OTk3TDExLjM0OTcgNC45MDI5OFpNMC45OTU4OSA1LjAzMzJMMTAuOTk1OSA1LjA0ODg4TDEwLjk5NzQgNC4wNDg4OEwwLjk5NzQ1NyA0LjAzMzJMMC45OTU4OSA1LjAzMzJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"},419:function(t,e,r){"use strict";r.r(e);r(48);var n=r(10),o=r(36),c=r(402),l=r(251),d=r.n(l);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={computed:y({},Object(o.c)(["HHI_Overall","selected_district","district"])),data:function(){return{pot:null,svg:null,left:r(410),right:r(411),HHI:null}},mounted:function(){this.draw()},methods:y(y({},Object(o.b)(["SET_HHI_OVERALL","SET_DISTRICT"])),{},{draw:function(){var t=this,e="mobile"===this.$mq?330:460,r="mobile"===this.$mq?390:400;this.pot=c.d("#pot");var n=10,o=30,l=60,d=60,h=e-d-o,y=r-n-l;this.svg=c.d("#pot").append("svg").attr("class","mx-auto mt-16").attr("id","pot_svg").attr("width",h+d+o).attr("height",y+n+l).append("g").attr("transform","translate("+d+","+n+")");var f=c.c().domain([0,1]).range([0,h]);this.svg.append("g").attr("transform","translate(0,"+y+")").call(c.a(f)).call((function(g){return g.selectAll("line").remove()}));var m=c.c().domain([0,1]).range([y,0]);this.svg.append("g").call(c.b(m)).call((function(g){return g.selectAll("line").remove()})),this.svg.append("g").selectAll("dot").data(this.HHI_Overall).enter().append("circle").attr("class",(function(t){return t.district})).attr("cx",(function(t){return f(t.HHI_surname)})).attr("cy",(function(t){return m(t.HHI_party)})).attr("r",5).style("fill",(function(t){return t.HHI_party>.7?"#2BA3B4":t.HHI_surname>.7?"#F15A29":t.HHI_party<.7&&t.HHI_party>.5?"#95B6BA":t.HHI_surname<.7&&t.HHI_surname>.5?"#CBA295":"#BDBDBD"})).style("cursor","pointer").on("mouseenter",(function(e){return t.mouseenter(e)})).on("mouseout",(function(e){return t.mouseout(e)})).on("click",(function(e){return t.click(e)})),this.pot.append("div").attr("class","tooltip"),this.svg.append("g").attr("class","grid").attr("transform","translate(0,"+y+")").style("opacity","0.1").call(c.a(f).ticks(10).tickSize(-y).tickFormat("")),this.svg.append("g").attr("class","grid").style("opacity","0.1").call(c.b(m).ticks(10).tickSize(-h).tickFormat("")),this.svg.selectAll("text").style("opacity",(function(t){return 0!=t&&.5!=t&&1!=t?.5:1})),this.svg.append("text").attr("text-anchor","end").attr("x",h/2+35).attr("y",y+n+35).text("ยึดโยงตระกูล").style("font-size","14px").style("font-weight","bold"),this.svg.append("text").attr("text-anchor","end").attr("transform","rotate(-90)").attr("y",15-d).attr("x",-n-h/2+60).text("ยึดโยงพรรค").style("font-size","14px").style("font-weight","bold"),this.svg.selectAll(".".concat(this.selected_district)).style("stroke","black").style("stroke-width","2px")},mouseenter:function(t){var e=d.a.get(t,"target.className.baseVal");this.pot.select(".tooltip").style("top",t.offsetY+"px").style("left",t.clientX+15+"px").style("display","inline").text(e),e!=this.selected_district&&this.svg.selectAll(".".concat(e)).style("stroke","black").style("stroke-width","1px")},mouseout:function(t){var e=d.a.get(t,"target.className.baseVal");c.e(".tooltip").style("display","none"),e!=this.selected_district&&this.svg.selectAll(".".concat(e)).style("stroke","black").style("stroke-width","0")},click:function(t){var e=d.a.get(t,"target.className.baseVal");this.SET_DISTRICT(e)},heightLow:function(t){return t<=1&&t>.7?"สูง":t<.69&&t>.31?"ปานกลาง":"ต่ำ"}}),watch:{selected_district:{immediate:!0,deep:!0,handler:function(t,e){c.d("#pot_svg").remove(),this.draw(),this.svg.selectAll(".".concat(e)).style("stroke","black").style("stroke-width","0"),this.svg.selectAll(".".concat(t)).style("stroke","black").style("stroke-width","2px"),this.HHI=d.a.filter(this.HHI_Overall,(function(e){return e.district===t}))}}}},m=r(30),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-40 bg-white",attrs:{id:"scatter-pot "}},[r("div",{attrs:{id:"header"}},[r("div",[r("div",{staticClass:"flex flex-col items-center justify-center w-9/12 m-auto md:flex-row md:w-full"},[r("p",{staticClass:"mb-3 md:mb-0 body2"},[t._v("\n          เมื่อนำตระกูลและพรรคมาเทียบกัน ในจังหวัด\n        ")]),t._v(" "),r("Autocomplete",{staticClass:"mb-3 md:mb-0 body2",attrs:{items:t.district,holder:"เลือกจังหวัด"}})],1),t._v(" "),"mobile"!=t.$mq?r("p",{staticClass:"mt-3 body2"},[t._v("\n        พบว่ามีการกระจุกตัวของอิทธิพลทางการเมืองของตระกูล"),r("span",{staticClass:"font-bold"},[t._v(t._s(t.heightLow(t.HHI[0].HHI_surname)))]),t._v("\n        ขณะที่ของพรรค"),r("span",{staticClass:"font-bold"},[t._v("\n          "+t._s(t.heightLow(t.HHI[0].HHI_party)))])]):t._e(),t._v(" "),"mobile"===t.$mq?r("span",{domProps:{innerHTML:t._s("<p> พบว่ามีการกระจุกตัวของ</p> <p>อิทธิพลทางการเมืองของตระกูล<b> สูง</b> </p>ขณะที่ของพรรค<b> ต่ำ</b>")}}):t._e(),t._v(" "),r("p",{staticClass:"mt-5 opacity-50 body5"},[t._v("(คลิกเพื่อดูจังหวัดอื่นๆ ได้)")]),t._v(" "),r("div",{staticClass:"relative flex mx-auto mt-10 body5",style:{width:"mobile"===t.$mq?"250px":"350px"},attrs:{id:"scale-scatter"}},[r("div",{staticClass:"absolute mx-auto",style:{height:"5px",width:"mobile"===t.$mq?"250px":"350px",background:"linear-gradient(90deg,#2ba3b4 0%,#bdbdbd 51.56%,#f15a29 100%)"}}),t._v(" "),r("span",{staticClass:"flex w-full mt-2"},[r("p",{staticClass:"flex flex-1 text-left"},[r("img",{staticClass:"mr-1",attrs:{src:t.left}}),t._v("ยึดโยงพรรค\n          ")]),t._v(" "),r("p",{staticClass:"flex-1"},[t._v("พอๆ กัน")]),t._v(" "),r("p",{staticClass:"flex justify-end flex-1"},[t._v("\n           ยึดโยงตระกูล "),r("img",{staticClass:"ml-1",attrs:{src:t.right}})])])])]),t._v(" "),r("div",{staticClass:"relative pb-20",attrs:{id:"pot"}})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Autocomplete:r(255).default})}}]);