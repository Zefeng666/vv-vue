webpackJsonp([8],{EbL4:function(t,e,a){var n,i;void 0===(i="function"==typeof(n=function(t,e,a){return function(t,e,a,n,i,s){function r(t){return"number"==typeof t&&!isNaN(t)}var o=this;if(o.version=function(){return"1.9.3"},o.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e},formattingFn:function(t){var e,a,n,i,s,r,l=t<0;if(t=Math.abs(t).toFixed(o.decimals),a=(e=(t+="").split("."))[0],n=e.length>1?o.options.decimal+e[1]:"",o.options.useGrouping){for(i="",s=0,r=a.length;s<r;++s)0!==s&&s%3==0&&(i=o.options.separator+i),i=a[r-s-1]+i;a=i}return o.options.numerals.length&&(a=a.replace(/[0-9]/g,function(t){return o.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return o.options.numerals[+t]})),(l?"-":"")+o.options.prefix+a+n+o.options.suffix},prefix:"",suffix:"",numerals:[]},s&&"object"==typeof s)for(var l in o.options)s.hasOwnProperty(l)&&null!==s[l]&&(o.options[l]=s[l]);""===o.options.separator?o.options.useGrouping=!1:o.options.separator=""+o.options.separator;for(var u=0,c=["webkit","moz","ms","o"],d=0;d<c.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[c[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[d]+"CancelAnimationFrame"]||window[c[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var a=(new Date).getTime(),n=Math.max(0,16-(a-u)),i=window.setTimeout(function(){t(a+n)},n);return u=a+n,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),o.initialize=function(){return!(!o.initialized&&(o.error="",o.d="string"==typeof t?document.getElementById(t):t,o.d?(o.startVal=Number(e),o.endVal=Number(a),r(o.startVal)&&r(o.endVal)?(o.decimals=Math.max(0,n||0),o.dec=Math.pow(10,o.decimals),o.duration=1e3*Number(i)||2e3,o.countDown=o.startVal>o.endVal,o.frameVal=o.startVal,o.initialized=!0,0):(o.error="[CountUp] startVal ("+e+") or endVal ("+a+") is not a number",1)):(o.error="[CountUp] target is null or undefined",1)))},o.printValue=function(t){var e=o.options.formattingFn(t);"INPUT"===o.d.tagName?this.d.value=e:"text"===o.d.tagName||"tspan"===o.d.tagName?this.d.textContent=e:this.d.innerHTML=e},o.count=function(t){o.startTime||(o.startTime=t),o.timestamp=t;var e=t-o.startTime;o.remaining=o.duration-e,o.options.useEasing?o.countDown?o.frameVal=o.startVal-o.options.easingFn(e,0,o.startVal-o.endVal,o.duration):o.frameVal=o.options.easingFn(e,o.startVal,o.endVal-o.startVal,o.duration):o.countDown?o.frameVal=o.startVal-(o.startVal-o.endVal)*(e/o.duration):o.frameVal=o.startVal+(o.endVal-o.startVal)*(e/o.duration),o.countDown?o.frameVal=o.frameVal<o.endVal?o.endVal:o.frameVal:o.frameVal=o.frameVal>o.endVal?o.endVal:o.frameVal,o.frameVal=Math.round(o.frameVal*o.dec)/o.dec,o.printValue(o.frameVal),e<o.duration?o.rAF=requestAnimationFrame(o.count):o.callback&&o.callback()},o.start=function(t){o.initialize()&&(o.callback=t,o.rAF=requestAnimationFrame(o.count))},o.pauseResume=function(){o.paused?(o.paused=!1,delete o.startTime,o.duration=o.remaining,o.startVal=o.frameVal,requestAnimationFrame(o.count)):(o.paused=!0,cancelAnimationFrame(o.rAF))},o.reset=function(){o.paused=!1,delete o.startTime,o.initialized=!1,o.initialize()&&(cancelAnimationFrame(o.rAF),o.printValue(o.startVal))},o.update=function(t){if(o.initialize()){if(!r(t=Number(t)))return void(o.error="[CountUp] update() - new endVal is not a number: "+t);o.error="",t!==o.frameVal&&(cancelAnimationFrame(o.rAF),o.paused=!1,delete o.startTime,o.startVal=o.frameVal,o.endVal=t,o.countDown=o.startVal>o.endVal,o.rAF=requestAnimationFrame(o.count))}},o.initialize()&&o.printValue(o.startVal)}})?n.call(e,a,e,t):n)||(t.exports=i)},"F/LU":function(t,e){},FYUJ:function(t,e,a){"use strict";var n=a("EbL4"),i=a.n(n),s=(String,Boolean,Number,Number,Number,Number,Object,{name:"countup",mounted:function(){var t=this;this.$nextTick(function(){t._countup=new i.a(t.$el,t.startVal,t.endVal,t.decimals,t.duration,t.options),t.start&&t._countup.start()})},props:{tag:{type:String,default:"span"},start:{type:Boolean,default:!0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:2},options:{type:Object,default:function(){return{}}}},render:function(t){return t(this.tag,{},[this.startVal])},watch:{start:function(t){t&&this._countup.start()},endVal:function(t){this._countup.update(t)}}}),r=a("VU/8")(s,null,!1,null,null,null);e.a=r.exports},HI5m:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("1sNz"),i=a("1DHf"),s=a("rHil"),r=a("dQSc"),o=a("FYUJ"),l=a("y7b9"),u=(n.a,l.a,i.a,s.a,r.a,o.a,{name:"sales",components:{ViewBox:n.a,Tabbar:l.a,Cell:i.a,Group:s.a,Card:r.a,Countup:o.a},created:function(){this.queryUser()},data:function(){return{userInfo:""}},methods:{queryUser:function(){var t=this;this.$api.queryUser({}).then(function(e){200===e.code?(t.userInfo=e.data.user,localStorage.setItem("uid",e.data.user.uid)):t.$vux.toast.text(e.message,"top")})},login:function(){var t=this;this.$api.login({username:"oak",password:123456}).then(function(e){200===e.code||t.$vux.toast.text(e.message,"top")})}}}),c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sales"},[a("div",{staticClass:"sale-box"},[a("div",{staticClass:"sale-box-header"},[a("span",[t._v("您的可提金额：")]),t._v(" "),a("span",{staticClass:"float-right"},[t._v("等级："+t._s(t._f("formatVipLevel")(t.userInfo.vipLevel)))])]),t._v(" "),a("countup",{staticClass:"countup-box",attrs:{"start-val":0,"end-val":t.userInfo.withdrawAmount||0,duration:1}}),t._v(" "),a("span",[t._v("元")]),t._v(" "),a("card",[a("div",{staticClass:"card-demo-flex card-demo-content01",attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"vux-1px-r"},[a("span",{staticClass:"card-top-text"},[t._v("您的推荐人")]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"card-bottom-text"},[t._v(t._s(t.userInfo.recommendUser||"无"))])]),t._v(" "),a("div",{staticClass:"vux-1px-r"},[a("span",{staticClass:"card-top-text"},[t._v("您最近的经销商")]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"card-bottom-text"},[t._v(t._s(t.userInfo.recentDealer||"无"))])]),t._v(" "),a("div",[a("span",{staticClass:"card-top-text"},[t._v("您最近的总代理")]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"card-bottom-text"},[t._v(t._s(t.userInfo.recentProxy||"无"))])])])]),t._v(" "),a("div",{staticClass:"proxyArea vux-1px-b"},[a("span",{},[t._v("代理地区:")]),t._v(" "),a("span",{},[t._v(t._s(t.userInfo.proxyArea||"无"))])]),t._v(" "),1===t.userInfo.vipLevel||2===t.userInfo.vipLevel?a("div",{staticClass:"proxyArea vux-1px-b"},[a("span",{},[t._v("剩余库存:")]),t._v(" "),a("span",{},[t._v(t._s(t.userInfo.lastQuantity))])]):t._e()],1),t._v(" "),a("group",[a("cell",{staticClass:"my-cell",attrs:{title:"我要拿货","value-align":"left",link:"/goodsInfo"}}),t._v(" "),a("cell",{staticClass:"my-cell",attrs:{title:"申请提现","value-align":"left",link:"/applyWithdraw"}}),t._v(" "),a("cell",{staticClass:"my-cell",attrs:{title:"积分明细","value-align":"left",link:"/pointDetails"}}),t._v(" "),a("cell",{staticClass:"my-cell",attrs:{title:"发货申请","value-align":"left",link:"/shippingApplication"}})],1),t._v(" "),a("tabbar",{attrs:{activeIndex:0}})],1)},staticRenderFns:[]};var d=a("VU/8")(u,c,!1,function(t){a("pUQw")},"data-v-5c4fe8e9",null);e.default=d.exports},McE9:function(t,e){},XCwc:function(t,e){},pUQw:function(t,e){},y7b9:function(t,e,a){"use strict";var n=a("piuB"),i=(n.b,String,{mounted:function(){},name:"tabbar",mixins:[n.b],props:{iconClass:String}}),s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-tabbar"},[this._t("default")],2)},staticRenderFns:[]};var r=a("VU/8")(i,s,!1,function(t){a("F/LU")},null,null).exports,o=(String,Number,{name:"badge",props:{text:[String,Number]}}),l={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:["vux-badge",{"vux-badge-dot":void 0===this.text,"vux-badge-single":void 0!==this.text&&1===this.text.toString().length}],domProps:{textContent:this._s(this.text)}})},staticRenderFns:[]};var u=a("VU/8")(o,l,!1,function(t){a("McE9")},null,null).exports,c=(n.a,Boolean,String,String,Object,String,{name:"tabbar-item",components:{Badge:u},mounted:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[n.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}),d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():a("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?a("sup",[a("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),a("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]},m=a("VU/8")(c,d,!1,null,null,null).exports,p={components:{Tabbar:r,TabbarItem:m},data:function(){return{index:0,isShow:!0}},props:["activeIndex"],computed:{},watch:{},created:function(){this.index=this.activeIndex},methods:{}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("tabbar",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[a("tabbar-item",{attrs:{link:"/sales"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("销售")])]),t._v(" "),a("tabbar-item",{attrs:{link:"/mine"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("我的")])])],1)],1)},staticRenderFns:[]};var v=a("VU/8")(p,f,!1,function(t){a("XCwc")},"data-v-5bab00a2",null);e.a=v.exports}});
//# sourceMappingURL=8.fec477b439ac3e90b793.js.map