webpackJsonp([15],{"1o76":function(t,a){},"2jDV":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("1sNz"),r=e("ABCa"),s=e("odqc"),n=e("Znkm"),d=e("1DHf"),o=e("rHil"),u=e("pDNl"),l=e("2sLL"),c=e("HD9R"),h=e("fBcm"),w=e("b+jt"),p=(i.a,r.a,s.a,n.a,d.a,o.a,u.a,l.a,c.a,h.a,w.a,{name:"applyWithdraw",components:{ViewBox:i.a,XHeader:r.a,Tab:s.a,TabItem:n.a,Cell:d.a,Group:o.a,XInput:u.a,XButton:l.a,Popup:c.a,Swiper:h.a,SwiperItem:w.a},created:function(){this.queryUserBankCard(),this.queryWithdraw(),this.queryUser()},computed:{handleCardNo:function(){return""==this.withDrawObj.cardNo?"":"****"+this.withDrawObj.cardNo.substr(this.withDrawObj.cardNo.substr.length-6)}},data:function(){return{index:0,withDrawObj:{quantity:"",cardNo:"",cardName:"",cardId:""},showCardPopup:!1,bankCardList:[],withdrawList:[],myIntegral:"",isAuditIdCard:"",freezeIntegral:""}},methods:{queryUserBankCard:function(){var t=this;this.$api.queryUserBankCard({}).then(function(a){200===a.code?a.data.bankCards.length<1?(t.withDrawObj.cardName="无",t.withDrawObj.cardNo=""):(t.bankCardList=a.data.bankCards,t.withDrawObj.cardNo=t.bankCardList[0].cardId,t.withDrawObj.cardName=t.bankCardList[0].cardKind,t.withDrawObj.cardId=t.bankCardList[0].id):t.$vux.toast.text(a.message,"top")})},selectCard:function(t){this.withDrawObj.cardNo=t.cardId,this.withDrawObj.cardName=t.cardKind,this.withDrawObj.cardId=t.id,this.showCardPopup=!1},applyWithdraw:function(){var t=this;if(1==this.isAuditIdCard)if(this.withDrawObj.cardId||this.$vux.toast.text("添加银行卡后才能进行提现操作~","top"),this.myIntegral<this.withDrawObj.quantity)this.$vux.toast.text("提现金额不足，请重新输入~","top");else{var a={cardId:this.withDrawObj.cardId,quantity:this.withDrawObj.quantity};this.$api.applyWithdraw(a).then(function(a){200===a.code?(t.$vux.toast.text("申请提现已提交","top"),t.queryWithdraw(),t.queryUser(),t.index=1):t.$vux.toast.text(a.message,"top")})}else this.$vux.toast.text("身份证审核通过才能进行提现操作~","top")},queryWithdraw:function(){var t=this;this.$api.queryWithdraw({pageNo:1,pageSize:100}).then(function(a){200===a.code?t.withdrawList=a.data.items:t.$vux.toast.text(a.message,"top")})},queryUser:function(){var t=this;this.$api.queryUser({}).then(function(a){200===a.code?(t.myIntegral=a.data.user.withdrawAmount,t.freezeIntegral=a.data.user.freezeAmount,t.isAuditIdCard=a.data.user.isAuditIdCard):t.$vux.toast.text(a.message,"top")})},toShowCardPopup:function(){""==this.withDrawObj.cardNo&&this.$router.push("/myBankCard"),this.showCardPopup=!0}}}),v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"applyWithdraw"},[e("x-header",{staticClass:"vux-1px-b my-header",attrs:{"left-options":{backText:""}}},[t._v("申请提现")]),t._v(" "),e("tab",{staticClass:"my-tab",attrs:{"line-width":2,"active-color":"#f74c31"},model:{value:t.index,callback:function(a){t.index=a},expression:"index"}},[e("tab-item",{staticClass:"vux-center vux-1px-t",attrs:{selected:""}},[t._v("申请提现")]),t._v(" "),e("tab-item",{staticClass:"vux-center vux-1px-t"},[t._v("提现记录")])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0===t.index,expression:"index === 0"}],staticClass:"swiper-box"},[e("group",{attrs:{"label-width":"4.5em","label-margin-right":"2em","label-align":"left"}},[e("cell",{attrs:{title:"我的余额","value-align":"left"}},[e("span",{staticStyle:{color:"#f74c31"}},[t._v(t._s(t.myIntegral))])]),t._v(" "),e("cell",{attrs:{title:"审核金额","value-align":"left"}},[e("span",{staticStyle:{color:"#f74c31"}},[t._v(t._s(t.freezeIntegral))])]),t._v(" "),e("x-input",{attrs:{title:"提现金额",name:"username",placeholder:"请输入"},model:{value:t.withDrawObj.quantity,callback:function(a){t.$set(t.withDrawObj,"quantity",a)},expression:"withDrawObj.quantity"}}),t._v(" "),e("cell",{attrs:{title:"银行卡","value-align":"left","is-link":""},nativeOn:{click:function(a){return t.toShowCardPopup(a)}}},[t._v(t._s(t.withDrawObj.cardName)+t._s(t.handleCardNo))])],1),t._v(" "),e("p",{staticClass:"attention-msg"},[t._v("注意：提现将收取5%的手续费")]),t._v(" "),e("x-button",{staticClass:"submit-btn",attrs:{type:"primary"},nativeOn:{click:function(a){return t.applyWithdraw(a)}}},[t._v("提交")])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:1===t.index,expression:"index === 1"}],staticClass:"tab-swiper"},t._l(t.withdrawList,function(a,i){return e("div",{key:i,staticClass:"order-box vux-1px-b"},[e("p",[e("span",[t._v("申请金额："+t._s(a.withdraws.quantity))]),t._v(" "),e("span",{staticClass:"text-right"},[t._v(t._s(t._f("withdrawStatus")(a.withdraws.isAudit)))])]),t._v(" "),e("p",[e("span",[t._v("银行卡号："+t._s(a.userBankCard[0].cardId))])]),t._v(" "),e("p",[e("span",[t._v("创建时间："+t._s(t._f("formatDate")(a.withdraws.createTime)))])])])})),t._v(" "),e("popup",{attrs:{position:"bottom","max-height":"50%"},model:{value:t.showCardPopup,callback:function(a){t.showCardPopup=a},expression:"showCardPopup"}},[e("group",{attrs:{"label-width":"7em","label-margin-right":"2em","label-align":"left"}},t._l(t.bankCardList,function(a,i){return e("cell",{key:i,attrs:{"value-align":"left",title:a.cardKind,"is-link":""},nativeOn:{click:function(e){t.selectCard(a)}}},[t._v(t._s(a.cardId))])}))],1)],1)},staticRenderFns:[]};var b=e("VU/8")(p,v,!1,function(t){e("1o76")},"data-v-6122b966",null);a.default=b.exports}});
//# sourceMappingURL=15.d3915b43ba46158f3536.js.map