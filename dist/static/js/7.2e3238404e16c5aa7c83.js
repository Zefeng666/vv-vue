webpackJsonp([7],{"+2gk":function(t,e){},"2jDV":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("1sNz"),s=i("ABCa"),a=i("odqc"),r=i("Znkm"),o=i("1DHf"),h=i("rHil"),c=i("pDNl"),l=i("2sLL"),u=i("HD9R"),d=i("fBcm"),v=i("b+jt"),p=(n.a,s.a,a.a,r.a,o.a,h.a,c.a,l.a,u.a,d.a,v.a,{name:"applyWithdraw",components:{ViewBox:n.a,XHeader:s.a,Tab:a.a,TabItem:r.a,Cell:o.a,Group:h.a,XInput:c.a,XButton:l.a,Popup:u.a,Swiper:d.a,SwiperItem:v.a},created:function(){this.queryUserBankCard(),this.queryWithdraw(),this.queryUser()},computed:{handleCardNo:function(){return"****"+this.withDrawObj.cardNo.substr(this.withDrawObj.cardNo.substr.length-6)}},data:function(){return{index:0,withDrawObj:{quantity:"",cardNo:"",cardName:"",cardId:""},showCardPopup:!1,bankCardList:[],withdrawList:[],myIntegral:""}},methods:{queryUserBankCard:function(){var t=this;this.$api.queryUserBankCard({}).then(function(e){200===e.code?(t.bankCardList=e.data.bankCards,t.withDrawObj.cardNo=t.bankCardList[0].cardId,t.withDrawObj.cardName=t.bankCardList[0].cardKind,t.withDrawObj.cardId=t.bankCardList[0].id):t.$vux.toast.text(e.message,"top")})},selectCard:function(t){this.withDrawObj.cardNo=t.cardId,this.withDrawObj.cardName=t.cardKind,this.withDrawObj.cardId=t.id,this.showCardPopup=!1},applyWithdraw:function(){var t=this,e={cardId:this.withDrawObj.cardId,quantity:this.withDrawObj.quantity};this.$api.applyWithdraw(e).then(function(e){200===e.code?(t.$vux.toast.text("申请提现已提交","top"),t.queryUser()):t.$vux.toast.text(e.message,"top")})},queryWithdraw:function(){var t=this;this.$api.queryWithdraw({pageNo:1,pageSize:10}).then(function(e){200===e.code?t.withdrawList=e.data.items:t.$vux.toast.text(e.message,"top")})},queryUser:function(){var t=this;this.$api.queryUser({}).then(function(e){200===e.code?t.myIntegral=e.data.user.withdrawAmount:t.$vux.toast.text(e.message,"top")})}}}),f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"applyWithdraw"},[i("x-header",{staticClass:"vux-1px-b my-header",attrs:{"left-options":{backText:""}}},[t._v("申请提现")]),t._v(" "),i("tab",{staticClass:"my-tab vux-1px-t",attrs:{"line-width":2,"active-color":"#f74c31"},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[i("tab-item",{staticClass:"vux-center",attrs:{selected:""}},[t._v("申请提现")]),t._v(" "),i("tab-item",{staticClass:"vux-center"},[t._v("提现记录")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.index,expression:"index === 0"}],staticClass:"swiper-box"},[i("group",{attrs:{"label-width":"4.5em","label-margin-right":"2em","label-align":"left"}},[i("cell",{attrs:{title:"我的积分","value-align":"left"}},[i("span",{staticStyle:{color:"#f74c31"}},[t._v(t._s(t.myIntegral))])]),t._v(" "),i("x-input",{attrs:{title:"提现积分",type:"number",name:"username",placeholder:"请输入"},model:{value:t.withDrawObj.quantity,callback:function(e){t.$set(t.withDrawObj,"quantity",e)},expression:"withDrawObj.quantity"}}),t._v(" "),i("cell",{attrs:{title:"银行卡","value-align":"left","is-link":""},nativeOn:{click:function(e){t.showCardPopup=!0}}},[t._v(t._s(t.withDrawObj.cardName)+t._s(t.handleCardNo))])],1),t._v(" "),i("x-button",{staticClass:"submit-btn",attrs:{type:"primary"},nativeOn:{click:function(e){return t.applyWithdraw(e)}}},[t._v("提交")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.index,expression:"index === 1"}],staticClass:"tab-swiper"},t._l(t.withdrawList,function(e,n){return i("div",{key:n,staticClass:"order-box vux-1px-b"},[i("p",[i("span",[t._v("申请积分："+t._s(e.withdraws.quantity)+"分")]),t._v(" "),i("span",{staticClass:"text-right"},[t._v(t._s(t._f("withdrawStatus")(e.withdraws.isAudit)))])]),t._v(" "),i("p",[i("span",[t._v("银行卡号："+t._s(e.userBankCard[0].cardId))])]),t._v(" "),i("p",[i("span",[t._v("创建时间："+t._s(e.withdraws.createTime.substr(0,10)))])])])})),t._v(" "),i("popup",{attrs:{position:"bottom","max-height":"50%"},model:{value:t.showCardPopup,callback:function(e){t.showCardPopup=e},expression:"showCardPopup"}},[i("group",{attrs:{"label-width":"7em","label-margin-right":"2em","label-align":"left"}},t._l(t.bankCardList,function(e,n){return i("cell",{key:n,attrs:{"value-align":"left",title:e.cardKind,"is-link":""},nativeOn:{click:function(i){t.selectCard(e)}}},[t._v(t._s(e.cardId))])}))],1)],1)},staticRenderFns:[]};var m=i("VU/8")(p,f,!1,function(t){i("+2gk")},"data-v-82eaaf36",null);e.default=m.exports},XBV9:function(t,e){},Znkm:function(t,e,i){"use strict";var n=i("piuB"),s=(n.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[n.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},staticRenderFns:[]},r=i("VU/8")(s,a,!1,null,null,null);e.a=r.exports},"b+jt":function(t,e,i){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-swiper-item"},[this._t("default")],2)},staticRenderFns:[]},s=i("VU/8")({name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}},n,!1,null,null,null);e.a=s.exports},fBcm:function(t,e,i){"use strict";var n=i("mvHQ"),s=i.n(n),a=i("Zrlr"),r=i.n(a),o=i("wxAW"),h=i.n(o),c=i("BEQ0"),l=i.n(c),u=function(t){return Array.prototype.slice.call(t)},d=function(){function t(e){if(r()(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=l()(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this._isMoved=!1,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return h()(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth(),t._setOffset(),t._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.realCount;t++)this._position.push(t)}},{key:"_movePosition",value:function(t){if(t>0){var e=this._position.splice(0,1);this._position.push(e[0])}else if(t<0){var i=this._position.pop();this._position.unshift(i)}}},{key:"_setOffset",value:function(){var t=this,e=t._position.indexOf(t._current);t._offset=[],u(t.$items).forEach(function(i,n){t._offset.push((n-e)*t._distance)})}},{key:"_setTransition",value:function(t){var e="none"===(t=t||this._options.duration||"none")?"none":t+"ms";u(this.$items).forEach(function(t,i){t.style.webkitTransition=e,t.style.transition=e})}},{key:"_setTransform",value:function(t){var e=this;t=t||0,u(e.$items).forEach(function(i,n){var s=e._offset[n]+t,a="translate3d("+s+"px, 0, 0)";"vertical"===e._options.direction&&(a="translate3d(0, "+s+"px, 0)"),i.style.webkitTransform=a,i.style.transform=a,e._isMoved=!0})}},{key:"_bind",value:function(){var t=this,e=this;e.touchstartHandler=function(t){e.stop(),e._start.x=t.changedTouches[0].pageX,e._start.y=t.changedTouches[0].pageY,e._setTransition("none"),e._isMoved=!1},e.touchmoveHandler=function(i){if(1!==e.count){e._move.x=i.changedTouches[0].pageX,e._move.y=i.changedTouches[0].pageY;var n=e._move.x-e._start.x,s=e._move.y-e._start.y,a=s,r=Math.abs(n)>Math.abs(s);"horizontal"===e._options.direction&&r&&(a=n),t._options.loop||t._current!==t.count-1&&0!==t._current||(a/=3),((e._options.minMovingDistance&&Math.abs(a)>=e._options.minMovingDistance||!e._options.minMovingDistance)&&r||e._isMoved)&&e._setTransform(a),r&&i.preventDefault()}},e.touchendHandler=function(t){if(1!==e.count){e._end.x=t.changedTouches[0].pageX,e._end.y=t.changedTouches[0].pageY;var i=e._end.y-e._start.y;"horizontal"===e._options.direction&&(i=e._end.x-e._start.x),0!==(i=e.getDistance(i))&&e._options.minMovingDistance&&Math.abs(i)<e._options.minMovingDistance&&!e._isMoved||(i>e._options.threshold?e.move(-1):i<-e._options.threshold?e.move(1):e.move(0),e._loopRender())}},e.transitionEndHandler=function(t){e._activate(e._current);var i=e._eventHandlers.swiped;i&&i.apply(e,[e._prev%e.count,e._current%e.count]),e._auto(),e._loopRender(),t.preventDefault()},e.$container.addEventListener("touchstart",e.touchstartHandler,!1),e.$container.addEventListener("touchmove",e.touchmoveHandler,!1),e.$container.addEventListener("touchend",e.touchendHandler,!1),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var t=this;t._loop()&&(0===t._offset[t._offset.length-1]?(t.$container.appendChild(t.$items[0]),t._loopEvent(1)):0===t._offset[0]&&(t.$container.insertBefore(t.$items[t.$items.length-1],t.$container.firstChild),t._loopEvent(-1)))}},{key:"_loopEvent",value:function(t){var e=this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(t),e._setOffset(),e._setTransform()}},{key:"getDistance",value:function(t){return this._loop()?t:t>0&&0===this._current?0:t<0&&this._current===this.realCount-1?0:t}},{key:"_moveIndex",value:function(t){0!==t&&(this._prev=this._current,this._current+=this.realCount,this._current+=t,this._current%=this.realCount)}},{key:"_activate",value:function(t){var e=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(i,n){i.classList.remove(e),t===Number(i.dataset.index)&&i.classList.add(e)})}},{key:"go",value:function(t){var e=this;return e.stop(),t=t||0,t+=this.realCount,t%=this.realCount,t=this._position.indexOf(t)-this._position.indexOf(this._current),e._moveIndex(t),e._setOffset(),e._setTransition(),e._setTransform(),e._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(t){return this.go(this._current+t),this}},{key:"on",value:function(t,e){return this._eventHandlers[t]&&console.error("[swiper] event "+t+" is already register"),"function"!=typeof e&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[t]=e,this}},{key:"_itemDestoy",value:function(){var t=this;this.$items.length&&u(this.$items).forEach(function(e){e.removeEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var t=this.$container.querySelector(this._options.item+"-clone");t&&this.$container.removeChild(t),(t=this.$container.querySelector(this._options.item+"-clone"))&&this.$container.removeChild(t)}}}]),t}(),v=i("0FxO"),p=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(v.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(s()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new d({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t,e){s()(t)!==s()(e)&&this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,n){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,n){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},staticRenderFns:[]};var m=i("VU/8")(p,f,!1,function(t){i("w6WE")},null,null);e.a=m.exports},odqc:function(t,e,i){"use strict";var n=i("piuB"),s=(n.b,Number,String,String,String,String,Boolean,Function,String,Boolean,Number,String,{name:"tab",mixins:[n.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4},barPosition:{type:String,default:"bottom",validator:function(t){return-1!==["bottom","top"].indexOf(t)}}},computed:{barLeft:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/t)+"%"}},barRight:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(t-this.currentIndex-1)*(100/t)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,i=0;window.requestAnimationFrame(function n(){var s=t.$refs.nav;s.scrollLeft+=(e.offsetLeft-(s.offsetWidth-e.offsetWidth)/2-s.scrollLeft)/15,++i<15&&window.requestAnimationFrame(n)})}}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-wrap",class:"top"===t.barPosition?"vux-tab-bar-top":""},[i("div",{staticClass:"vux-tab-container"},[i("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},staticRenderFns:[]};var r=i("VU/8")(s,a,!1,function(t){i("XBV9")},null,null);e.a=r.exports},w6WE:function(t,e){}});
//# sourceMappingURL=7.2e3238404e16c5aa7c83.js.map