webpackJsonp([17],{"2TCf":function(t,s){},TK2b:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("1sNz"),o=a("ABCa"),i=a("dQSc"),n=a("2sLL"),r=(e.a,o.a,i.a,n.a,{name:"mall",components:{ViewBox:e.a,XHeader:o.a,Card:i.a,XButton:n.a},created:function(){this.queryAllProducts()},data:function(){return{productList:[]}},methods:{queryAllProducts:function(){var t=this;this.$api.queryAllProducts({pageNo:1,pageSize:100}).then(function(s){200===s.code?t.productList=s.data.items:t.$vux.toast.text(s.message,"top")})}}}),c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mall"},[a("x-header",{staticClass:"vux-1px-b my-header",attrs:{"left-options":{showBack:!1}}},[t._v("商城")]),t._v(" "),t._l(t.productList,function(s,e){return[a("div",{key:e,staticClass:"mall-goods-item vux-1px-b"},[a("div",{staticClass:"goods-img-box"},[a("img",{staticClass:"goods-img",attrs:{src:s.url}})]),t._v(" "),a("div",{staticClass:"goods-info-box"},[a("span",{staticClass:"goods-info-name"},[t._v(t._s(s.name))]),a("br"),t._v(" "),a("span",{staticClass:"goods-info-detail"},[t._v(t._s(s.detail.substring(0,50)+"..."))]),a("br")])])]})],2)},staticRenderFns:[]};var d=a("VU/8")(r,c,!1,function(t){a("2TCf")},"data-v-1ef893b1",null);s.default=d.exports}});
//# sourceMappingURL=17.4d2af4f342980189aa61.js.map