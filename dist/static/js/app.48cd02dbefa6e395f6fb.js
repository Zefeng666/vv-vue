webpackJsonp([16],{"+h80":function(t,e){},"/kga":function(t,e,n){"use strict";var a=n("JkZY"),i=(a.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[a.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]};var s=n("VU/8")(i,r,!1,function(t){n("+h80")},null,null);e.a=s.exports},"4cMe":function(t,e){},"5pdL":function(t,e){},Bfwr:function(t,e,n){"use strict";Boolean,String,String,String;var a={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]};var r=n("VU/8")(a,i,!1,function(t){n("5pdL")},null,null);e.a=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(t){n("jNKB")},null,null).exports,s=n("/ocq");a.a.use(s.a);var o=new s.a({mode:"history",routes:[{path:"/",redirect:"/sales"},{path:"/sales",name:"sales",component:function(t){return Promise.all([n.e(0),n.e(9)]).then(function(){var e=[n("HI5m")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/applyWithdraw",name:"applyWithdraw",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){var e=[n("2jDV")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/getGoods",name:"getGoods",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("Ahvm")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/myTeam",name:"myTeam",component:function(t){return Promise.all([n.e(0),n.e(11)]).then(function(){var e=[n("n4fA")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/pointDetails",name:"pointDetails",component:function(t){return Promise.all([n.e(0),n.e(13)]).then(function(){var e=[n("f+EO")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/mine",name:"mine",component:function(t){return Promise.all([n.e(0),n.e(10)]).then(function(){var e=[n("EXwE")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/myAddress",name:"myAddress",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("vriP")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/selectAddress",name:"selectAddress",component:function(t){return Promise.all([n.e(0),n.e(3)]).then(function(){var e=[n("vriP")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/insertAddress",name:"insertAddress",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("d394")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/editAddress",name:"editAddress",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("d394")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/qrcode",name:"qrcode",component:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("hm3V")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/myBankCard",name:"myBankCard",component:function(t){return Promise.all([n.e(0),n.e(12)]).then(function(){var e=[n("Rn7G")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/editBankCard",name:"editBankCard",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("mXWx")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/insertBankCard",name:"insertBankCard",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("mXWx")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/myIdCard",name:"myIdCard",component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){var e=[n("A7c1")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/register",name:"register",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){var e=[n("+xEf")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/wxLogin",name:"wxLogin",component:function(t){return n.e(14).then(function(){var e=[n("oS3t")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}),u=n("Peep"),l=n("3BeM"),c=n("Y+qm");n("QKTF");a.a.filter("formatVipLevel",function(t){return 0==t?"VIP":1==t?"总代理":2==t?"CEO":void 0}),a.a.filter("orderStatus",function(t){return 0==t?"审核中":1==t?"审核通过":2==t?"审核未通过":void 0}),a.a.filter("withdrawStatus",function(t){return 0==t?"审核中":1==t?"审核通过":2==t?"审核未通过":void 0}),a.a.filter("formatDate",function(t){return new Date(t).toLocaleString()});var d=n("mtWM"),h=n.n(d),p=n("0Qa9"),m=n("mtWM"),f=n("mw3O");m.defaults.timeout=5e3,m.defaults.baseURL="http://119.23.14.187:8080/client",m.interceptors.response.use(function(t){return t.data.code,t},function(t){return p.reject(t)});var v={request:function(t){t.params||(t.params={}),t.method||(t.method="post"),t.method=t.method.toLowerCase(),m.defaults.headers.common.Authorization=localStorage.getItem("token"),t.params.pageSize;var e={url:t.url,method:t.method,data:f.stringify(t.params)};return"get"===t.method&&(e.params=t.params),new p(function(t,n){m(e).then(function(e){t(e.data)}).catch(function(t){n(t.message)})})}}.request,w={login:function(t){return v({url:"/login",params:t})},sendSms:function(t){return v({url:"/sendSms",params:t})},register:function(t){return v({url:"/register",params:t})},insertOrder:function(t){return v({url:"/insertOrder",params:t})},cancelOrder:function(t){return v({url:"/cancelOrder",params:t})},queryOrder:function(t){return v({url:"/queryOrder",params:t})},applyWithdraw:function(t){return v({url:"/applyWithdraw",params:t})},queryWithdraw:function(t){return v({url:"/queryWithdraw",params:t})},queryIntegrals:function(t){return v({url:"/queryIntegrals",params:t})},insertUserAddress:function(t){return v({url:"/insertUserAddress",params:t})},queryUserAddress:function(t){return v({url:"/queryUserAddress",params:t})},deleteUserAddress:function(t){return v({url:"/deleteUserAddress",params:t})},updateUserAddress:function(t){return v({url:"/updateUserAddress",params:t})},updateUserBankCard:function(t){return v({url:"/updateUserBankCard",params:t})},insertUserBankCard:function(t){return v({url:"/insertUserBankCard",params:t})},deleteUserBankCard:function(t){return v({url:"/deleteUserBankCard",params:t})},queryUserBankCard:function(t){return v({url:"/queryUserBankCard",params:t})},queryUser:function(t){return v({url:"/queryUser",params:t})},getQnToken:function(t){return v({url:"/getQnToken",params:t})},alterUserIdCard:function(t){return v({url:"/alterUserIdCard",params:t})},queryUserIdCard:function(t){return v({url:"/queryUserIdCard",params:t})}};a.a.prototype.axios=h.a,a.a.prototype.$api=w,a.a.use(u.a),a.a.use(l.a),a.a.use(c.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:o,components:{App:r},template:"<App/>"})},jNKB:function(t,e){},mzja:function(t,e,n){"use strict";var a=n("/kga"),i=(a.a,Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:a.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]};var s=n("VU/8")(i,r,!1,function(t){n("4cMe")},null,null);e.a=s.exports},rLAy:function(t,e,n){"use strict";var a=n("xNvf"),i=(a.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[a.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]};var s=n("VU/8")(i,r,!1,function(t){n("x6LS")},null,null);e.a=s.exports},x6LS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.48cd02dbefa6e395f6fb.js.map