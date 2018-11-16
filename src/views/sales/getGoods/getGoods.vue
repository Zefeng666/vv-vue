<template>
  <div class="getGoods">
    <x-header class="vux-1px-b my-header" :left-options="{backText: '', preventGoBack: true}" @on-click-back="toSale()" fixed>申请拿货</x-header>
    <tab :line-width=2 active-color='#f74c31' v-model="index" class="my-tab">
      <tab-item class="vux-center vux-1px-t" selected>申请拿货</tab-item>
      <tab-item class="vux-center vux-1px-t" @on-item-click="selectChecker">历史订单</tab-item>
    </tab>
    <div class="swiper-box" v-show="index === 0">
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <cell title="拿货地址" align-items="flex-start" :value="getGoodsObj.addressName" value-align="left" is-link @click.native="toSelectAddress()"></cell>
        <!-- <cell title="历史拿货" v-if="userInfo.historyBuyCount" align-items="flex-start" :value="userInfo.historyBuyCount + '件'" value-align="left"></cell> -->
        <x-input title="申请数量" name="username" v-model="getGoodsObj.quantity" placeholder="请输入" :show-clear="false" :disabled="isInpNum">
          <checker slot="right" class="checker-box" v-model="checkerWhich" @on-change="selectCheckerBtn" :radio-required="true" default-item-class="checker-item" selected-item-class="checker-item-selected">
            <checker-item v-if="userInfo.vipLevel === -1" value="1">件</checker-item>
            <checker-item :class="[checkerWhich == 2 ? 'checker-item-selected' : '']" value="2">箱</checker-item>
          </checker>
        </x-input>
        <cell title="支付金额" align-items="flex-start" value-align="left">{{payAmount}}元</cell>
      </group>
      <x-button class="submit-btn" type="primary" @click.native="showToast=true">立即支付</x-button>
    </div>
    <div class="tab-swiper" v-show="index === 1">
      <div class="order-box vux-1px-b" v-for="(item, idx) in orderList" :key="idx">
        <p>
          <span>申请数量：{{item.order.quantity === 1 ? '1件' : item.order.quantity/3 + '箱'}}</span>
          <span class="text-right">{{item.order.orderStatus | orderStatus}}</span>
        </p>
        <p>
          <span>收货地址：{{item.userAddress.province + item.userAddress.city + item.userAddress.area + item.userAddress.detail}}</span>
        </p>
        <p>
          <span>创建时间：{{item.order.createTime | formatDate}}</span>
          <!-- <x-button @click.native="cancelOrder(item.order.id)" v-show="item.order.isAudit == 0" class="btn-right" mini plain>取消</x-button> -->
        </p>
      </div>
    </div>
    <x-dialog v-model="showToast" class="dialog-demo" hide-on-blur>
      <div style="padding:15px;">
        <x-button type="primary" @click.native="insertOrder(0)">微信支付</x-button>
        <x-button type="default" @click.native="insertOrder(1)">线下支付</x-button>
      </div>
      <div @click="showToast=false">
        <span style="font-size: 16px;">关闭</span>
      </div>
    </x-dialog>
  </div>
</template>

<script>
import {
  ViewBox,
  XHeader,
  Tab,
  TabItem,
  Swiper,
  SwiperItem,
  Cell,
  Group,
  XInput,
  PopupPicker,
  XButton,
  Box,
  XAddress,
  ChinaAddressV4Data,
  Checker, 
  CheckerItem,
  XDialog
} from "vux";
export default {
  name: "getGoods",
  components: {
    ViewBox,
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Cell,
    Group,
    XInput,
    PopupPicker,
    XButton,
    Box,
    XAddress,
    ChinaAddressV4Data,
    Checker, 
    CheckerItem,
    XDialog
  },
  created() {
    this.queryOrder();
    if (JSON.stringify(this.$route.params) === "{}") {
      this.queryUserAddress();
    } else {
      this.getGoodsObj.addressId = this.$route.params.addressId;
      this.getGoodsObj.addressName = this.$route.params.addressName;
    }
    this.queryUser();
  },
  computed: {
    payAmount: function () {
      if (this.userInfo.vipLevel === 1) {
        if (this.getGoodsObj.quantity >= 100) {
          return this.getGoodsObj.quantity * 3 * this.productInfo.proxyPrice;
        } else {
          return this.getGoodsObj.quantity * 3 * this.price;
        }
      } else if (this.userInfo.vipLevel === 2) {
        return this.getGoodsObj.quantity * 3 * this.price;
      } else {
        console.log(this.checkerWhich);
        
        if (this.checkerWhich == 2) {
          if (this.getGoodsObj.quantity >= 20 && this.getGoodsObj.quantity < 100) {
            return this.getGoodsObj.quantity * 3 * this.productInfo.dealerPrice;
          } else if (this.getGoodsObj.quantity >= 100) {
            return this.getGoodsObj.quantity * 3 * this.productInfo.proxyPrice;
          } else {
            return this.getGoodsObj.quantity * 3 * this.price;
          }
        } else {
          if (this.getGoodsObj.quantity >= 60) {
            this.$vux.toast.text("超过60件建议按箱拿货", "top");
          }
          return this.getGoodsObj.quantity  * this.price;
        }
      }
    }
  },
  data() {
    return {
      index: 0,
      checkerWhich: 2,
      price: 1,
      userInfo: {},
      productInfo: {},
      getGoodsObj: {
        quantity: "",
        addressId: "",
        proxyProvice: "",
        proxyCity: "",
        proxyArea: "",
        addressName: "",
        addressValue: []
      },
      orderList: [],
      addressData: ChinaAddressV4Data,
      isInpNum: false,
      showToast: false
    };
  },
  methods: {
    queryUser() {
      this.$api
        .queryUser({})
        .then(data => {
          if (data.code === 200) {
            this.userInfo = data.data.user; 
            this.queryProduct();
          } else {
            this.$vux.toast.text(data.message, "top");
          }       
        });
    },
    queryProduct() {
      this.$api.queryProduct().then(data => {
        if (data.code === 200) {
          this.productInfo = data.data.product;
          switch(this.userInfo.vipLevel)
            {
                case 1: // 经销商
                    this.price = this.productInfo.dealerPrice
                    break;
                case 2: // 总代理
                    this.price = this.productInfo.proxyPrice
                    break;
                default: // 会员 普通用户
                    this.price = this.productInfo.vipPrice
            }     
        } else {
          this.$vux.toast.text(data.message, "top");
        }
      });
    },
    queryUserAddress() {
      this.$api.queryUserAddress({}).then(data => {
        if (data.code === 200) {
          if (data.data.address.length < 1) {
            this.getGoodsObj.addressName = '无'
          } else {
            this.getGoodsObj.addressId = data.data.address[0].id;
            this.getGoodsObj.addressName =
              data.data.address[0].province +
              data.data.address[0].city +
              data.data.address[0].area +
              data.data.address[0].detail;
          }        
        }
      });
    },
    queryOrder() {
      this.$vux.loading.show({
        text: ''
      });
      this.$api
        .queryOrder({
          pageNo: 1,
          pageSize: 500
        })
        .then(data => {
          if (data.code === 200) {
            this.orderList = data.data.items;
          }
          this.$vux.loading.hide();
        });
    },
    wechatCallPay() {
      this.$api
        .wechatCallPay({
          totalFee: this.payAmount * 100
        })
        .then(data => {
          if (data.code === 200) {
              this.onBridgeReady(data.data.appId, data.data.nonceStr, data.data.package, data.data.paySign)

            // if (typeof WeixinJSBridge == "undefined"){
            //   if( document.addEventListener ){
            //       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            //   }else if (document.attachEvent){
            //       document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
            //       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            //   }
            // }else{
            // }
          }
        });
    },
    cancelOrder(id) {
      this.$api
        .cancelOrder({
          id: id
        })
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text("取消订单成功", "top");
            this.queryOrder();
          }
        });
    },
    insertOrder(isOffline) {
      let insertObj = {};
      if (!this.getGoodsObj.addressId) {
        return this.$vux.toast.text("请添加地址后再拿货~", "top");
      }
      insertObj.addressId = this.getGoodsObj.addressId;
      insertObj.paidFee = this.payAmount;
      insertObj.isOffline = isOffline;
      insertObj.productId = this.productInfo.productId;
      if (this.checkerWhich == 2) {
        insertObj.quantity = this.getGoodsObj.quantity * 3;
      } else {
        insertObj.quantity = this.getGoodsObj.quantity;
      }
      this.$api.insertOrder(insertObj).then(data => {
        if (data.code === 200) {
          if (isOffline === 0) {
            this.onBridgeReady(data.data.appId, data.data.nonceStr, data.data.package, data.data.paySign, data.data.timeStamp)   
          } else {
            this.$vux.toast.text("添加线下支付订单成功~", "top");
          }
        } else {
          this.$vux.toast.text(data.message, "top");
        }
      });
    },
    toSelectAddress() {
      this.$router.push({
        name: "selectAddress",
        params: {
          addressId: this.getGoodsObj.addressId,
          addressName: this.getGoodsObj.addressName
        }
      });
    },
    toSale() {
      this.$router.push({
        name: "sales"
      });
    },
    selectChecker(val) {
      if (val === 1) {
        this.queryOrder();
      }
    },
    selectCheckerBtn(val) {
      if (val == '1') {
        if (this.userInfo.vipLevel === -1) {
          this.getGoodsObj.quantity = 1;
          this.isInpNum = true;
        }
      } else {
        this.isInpNum = false;
      }   
    },
    onBridgeReady(appId, nonceStr, wxPackage, paySign, timeStamp){
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": appId,     //公众号名称，由商户传入     
          "timeStamp": timeStamp.toString(),         //时间戳，自1970年以来的秒数     
          "nonceStr": nonceStr, //随机串     
          "package": wxPackage,
          "signType": "MD5",         //微信签名方式：     
          "paySign": paySign //微信签名 
        },
        function(res){
          // alert(JSON.stringify(res));
          if(res.err_msg == "get_brand_wcpay_request:ok" ){
          // 使用以上方式判断前端返回,微信团队郑重提示：
          // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            this.$vux.toast.text("支付成功", "top");  
            this.queryOrder();
            this.index = 1;
          } else {
            this.$vux.toast.text("支付失败", "top"); 
          }
        }
      ); 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-header {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
}
.my-tab {
  width: 100%;
  position: absolute;
  left: 0;
  top: 44px;
  z-index: 100;
}
.getGoods {
  padding-top: 88px;
}
.submit-btn {
  width: 90%;
  margin-right: 5%;
  margin-top: 1rem;
}
.getGoods-msg {
  font-size: 14px;
  color: #f74c31;
  padding: 0.2rem 0.5rem 0;
  text-align: left;
}
.order-box {
  text-align: left;
  font-size: 14px;
  padding: 0.5rem 0.4rem;
  background-color: #fff;
  .text-right {
    float: right;
  }
}
.btn-right {
  float: right;
  margin-bottom: 0.2rem;
}
.checker-box {
  // position: absolute;
  // right: 0.5rem;
  // top: 1.95rem;
}
.checker-item {
  border: 1px solid #ececec;
  padding: 2px 8px;
}
.checker-item-selected {
  border: 1px solid #f74c31;
  color: #f74c31;
}
</style>
