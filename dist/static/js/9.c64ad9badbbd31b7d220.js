webpackJsonp([9],{"/0UN":function(t,e,i){"use strict";String,String,String,String,String,Number,Array,Object,Number,Boolean;var a={name:"checker",props:{defaultItemClass:String,selectedItemClass:String,disabledItemClass:String,type:{type:String,default:"radio"},value:[String,Number,Array,Object],max:Number,radioRequired:Boolean},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)}},data:function(){return{currentValue:this.value}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-checker-box"},[this._t("default")],2)},staticRenderFns:[]};var s=i("VU/8")(a,r,!1,function(t){i("Luh7")},null,null);e.a=s.exports},Bpdp:function(t,e){},E87U:function(t,e){},Luh7:function(t,e){},NVq3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("1sNz"),r=i("ABCa"),s=i("odqc"),n=i("Znkm"),u=i("fBcm"),c=i("b+jt"),l=i("1DHf"),h=i("rHil"),o=i("pDNl"),p=i("7Ah8"),d=i("2sLL"),v=i("QTi7"),f=i("cHu4"),m=i("FHgB"),_=i.n(m),x=i("/0UN"),$=i("hGvq"),b=(a.a,r.a,s.a,n.a,u.a,c.a,l.a,h.a,o.a,p.a,d.a,v.a,f.a,_.a,x.a,$.a,{name:"shippingApplication",components:{ViewBox:a.a,XHeader:r.a,Tab:s.a,TabItem:n.a,Swiper:u.a,SwiperItem:c.a,Cell:l.a,Group:h.a,XInput:o.a,PopupPicker:p.a,XButton:d.a,Box:v.a,XAddress:f.a,ChinaAddressV4Data:_.a,Checker:x.a,CheckerItem:$.a},created:function(){this.queryHistoryShipOrder(),this.queryShipOrder()},computed:{},data:function(){return{index:0,checkerWhich:2,userInfo:{},orderList:[],shipOrderList:[]}},methods:{queryHistoryShipOrder:function(){var t=this;this.$api.queryHistoryShipOrder({pageNo:1,pageSize:1e3}).then(function(e){200===e.code&&(t.orderList=e.data.items)})},queryShipOrder:function(){var t=this;this.$api.queryShipOrder({pageNo:1,pageSize:1e3}).then(function(e){200===e.code&&(t.shipOrderList=e.data.items)})},cancelOrder:function(t){var e=this;this.$api.cancelOrder({id:t}).then(function(t){200===t.code&&(e.$vux.toast.text("取消订单成功","top"),e.queryOrder())})},toSale:function(){this.$router.push({name:"sales"})},selectChecker:function(t){console.log(t)}}}),g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shippingApplication"},[i("x-header",{staticClass:"vux-1px-b my-header",attrs:{"left-options":{backText:"",preventGoBack:!0},fixed:""},on:{"on-click-back":function(e){t.toSale()}}},[t._v("发货申请")]),t._v(" "),i("tab",{staticClass:"my-tab",attrs:{"line-width":2,"active-color":"#f74c31"},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[i("tab-item",{staticClass:"vux-center vux-1px-t",attrs:{selected:""}},[t._v("发货申请")]),t._v(" "),i("tab-item",{staticClass:"vux-center vux-1px-t"},[t._v("历史订单")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.index,expression:"index === 0"}],staticClass:"swiper-box"},[i("div",[i("div",{staticClass:"order-box vux-1px-b"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("p",{staticStyle:{"text-align":"right"}},[i("x-button",{attrs:{mini:""}},[t._v("转上级发货")]),t._v(" "),i("x-button",{attrs:{type:"primary",mini:""}},[t._v("发货")])],1)])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.index,expression:"index === 1"}],staticClass:"tab-swiper"},t._l(t.orderList,function(e,a){return i("div",{key:a,staticClass:"order-box vux-1px-b"},[i("p",[i("span",[t._v("申请数量："+t._s(e.order.quantity)+"件")])]),t._v(" "),i("p",[i("span",[t._v("申请数量："+t._s(e.order.quantity)+"件")]),t._v(" "),i("span",{staticClass:"text-right"},[t._v(t._s(t._f("orderStatus")(e.order.isAudit)))])]),t._v(" "),i("p",[i("span",[t._v("收货地址："+t._s(e.userAddress.province+e.userAddress.city+e.userAddress.area+e.userAddress.detail))])]),t._v(" "),i("p",[i("span",[t._v("创建时间："+t._s(t._f("formatDate")(e.order.createTime)))]),t._v(" "),i("x-button",{directives:[{name:"show",rawName:"v-show",value:0==e.order.isAudit,expression:"item.order.isAudit == 0"}],staticClass:"btn-right",attrs:{mini:"",plain:""},nativeOn:{click:function(i){t.cancelOrder(e.order.id)}}},[t._v("取消")])],1)])}))],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",[this._v("商品：洁瑞白净化剂")]),this._v(" "),e("span",{staticClass:"text-right"},[this._v("已发货")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",[this._v("用户：哦可")]),this._v(" "),e("span",{staticClass:"text-right"},[this._v("申请数量：100件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",[this._v("手机号：17866665555")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",[this._v("收货地址：撒基地附近爱哦分解到房价低哦")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",[this._v("创建时间：2018-10-19")])])}]};var y=i("VU/8")(b,g,!1,function(t){i("E87U")},"data-v-297ad3cc",null);e.default=y.exports},QTi7:function(t,e,i){"use strict";String;var a={name:"box",props:{gap:String}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{margin:this.gap}},[this._t("default")],2)},staticRenderFns:[]},s=i("VU/8")(a,r,!1,null,null,null);e.a=s.exports},hGvq:function(t,e,i){"use strict";var a=i("mvHQ"),r=i.n(a),s=i("pFYg"),n=i.n(s);String,Number,Object,Boolean;var u={name:"checker-item",props:{value:{type:[String,Number,Object],required:!0},disabled:Boolean},watch:{disabled:function(t){t&&"radio"===this.$parent.type&&this.value===this.$parent.currentValue&&(this.$parent.currentValue="")}},computed:{classNames:function(){var t=this,e="string"==typeof this.value||"number"==typeof this.value,i={"vux-tap-active":!this.disabled};if(this.$parent.defaultItemClass&&(i[this.$parent.defaultItemClass]=!0),this.$parent.selectedItemClass){var a=!1;if("radio"===this.$parent.type)e&&this.$parent.currentValue===this.value?a=!0:"object"===n()(this.value)&&c(this.$parent.currentValue,this.value)&&(a=!0);else if("string"==typeof this.value)this.$parent.currentValue.indexOf(this.value)>-1&&(a=!0);else if(this.$parent.currentValue&&this.$parent.currentValue.length){a=this.$parent.currentValue.filter(function(e){return c(e,t.value)}).length>0}i[this.$parent.selectedItemClass]=a}return this.$parent.disabledItemClass&&(i[this.$parent.disabledItemClass]=this.disabled),i}},methods:{select:function(){"radio"===this.$parent.type?this.selectRadio():this.selectCheckbox()},selectRadio:function(){this.disabled||(this.$parent.currentValue===this.value?this.$parent.radioRequired||(this.$parent.currentValue=""):this.$parent.currentValue=this.value),this.$emit("on-item-click",this.value,this.disabled)},selectCheckbox:function(){this.$parent.currentValue&&null!==this.$parent.currentValue||(this.$parent.currentValue=[]);var t="string"==typeof this.value||"number"==typeof this.value;if(!this.disabled){var e=-1;(e=t?this.$parent.currentValue.indexOf(this.value):this.$parent.currentValue.map(function(t){return r()(t)}).indexOf(r()(this.value)))>-1?this.$parent.currentValue.splice(e,1):(!this.$parent.max||this.$parent.max&&null!==this.$parent.currentValue&&this.$parent.currentValue.length<this.$parent.max)&&(this.$parent.currentValue&&this.$parent.currentValue.length||(this.$parent.currentValue=[]),this.$parent.currentValue.push(this.value))}this.$emit("on-item-click",this.value,this.disabled)}}};function c(t,e){return r()(t)===r()(e)}var l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-checker-item",class:this.classNames,on:{click:this.select}},[this._t("default")],2)},staticRenderFns:[]};var h=i("VU/8")(u,l,!1,function(t){i("Bpdp")},null,null);e.a=h.exports}});
//# sourceMappingURL=9.c64ad9badbbd31b7d220.js.map