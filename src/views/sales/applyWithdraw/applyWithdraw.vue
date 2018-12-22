<template>
  <div class="applyWithdraw">
    <x-header class="vux-1px-b my-header" :left-options="{backText: ''}">申请提现</x-header>
    <tab :line-width=2 active-color='#f74c31' v-model="index" class="my-tab">
      <tab-item class="vux-center vux-1px-t" selected>申请提现</tab-item>
      <tab-item class="vux-center vux-1px-t">提现记录</tab-item>
    </tab>
    <div v-show="index === 0" class="swiper-box">
      <group label-width="4.5em" label-margin-right="2em" label-align="left">
        <cell title="我的余额" value-align="left"><span style="color: #f74c31;">{{myIntegral}}</span></cell>
        <cell title="审核金额" value-align="left"><span style="color: #f74c31;">{{freezeIntegral}}</span></cell>
        <x-input title="提现金额" name="username" v-model="withDrawObj.quantity" placeholder="请输入"></x-input>
        <cell title="银行卡" value-align="left" is-link @click.native="toShowCardPopup">{{withDrawObj.cardName}}{{handleCardNo}}</cell>
      </group>
      <p class="attention-msg">注：提现将扣除1%的手续费，星期六、星期天由于银行原因不方便提现。</p>
      <x-button class="submit-btn" type="primary" @click.native="applyWithdraw">提交</x-button>
    </div>
    <div v-show="index === 1" class="tab-swiper">
      <div class="order-box vux-1px-b" v-for="(item, index) in withdrawList" :key="index">
        <p>
          <span>申请金额：{{item.withdraws.quantity}}</span>
          <span class="text-right">{{item.withdraws.isAudit | withdrawStatus}}</span>
        </p>
        <p>
          <span>银行卡号：{{item.userBankCard[0].cardId}}</span>
        </p>
        <p>
          <span>创建时间：{{item.withdraws.createTime | formatDate}}</span>
        </p>
      </div>
    </div>
    <popup v-model="showCardPopup" position="bottom" max-height="50%">
      <group label-width="7em" label-margin-right="2em" label-align="left">
        <cell v-for="(i, idx) in bankCardList" value-align="left" :key="idx" :title="i.cardKind" is-link @click.native="selectCard(i)">{{i.cardId}}</cell>
      </group>
    </popup>
  </div>
</template>

<script>
import { ViewBox, XHeader, Tab, TabItem, Cell, Group, XInput, XButton, Popup, Swiper, SwiperItem } from "vux";
export default {
  name: "applyWithdraw",
  components: {
    ViewBox,
    XHeader,
    Tab,
    TabItem,
    Cell, 
    Group, 
    XInput,
    XButton,
    Popup,
    Swiper,
    SwiperItem
  },
  created() {
    this.queryUserBankCard();
    this.queryWithdraw();
    this.queryUser();
  },
  computed: {
    handleCardNo: function () {
      if (this.withDrawObj.cardNo == '') {
        return '';
      }
      return '****' + this.withDrawObj.cardNo.substr(this.withDrawObj.cardNo.substr.length - 6);
    }
  },
  data() {
    return {
      index: 0,
      withDrawObj: {
        quantity: '',
        cardNo: '',
        cardName: '',
        cardId: ''
      },
      showCardPopup: false,
      bankCardList: [],
      withdrawList: [],
      myIntegral: '',
      isAuditIdCard: '',
      freezeIntegral: ''
    };
  },
  methods: {
    queryUserBankCard() {
      this.$api
        .queryUserBankCard({})
        .then(data => {
          if (data.code === 200) {
            if (data.data.bankCards.length < 1) {
              this.withDrawObj.cardName= '无';
              this.withDrawObj.cardNo = '';
            } else {
              this.bankCardList = data.data.bankCards;
              this.withDrawObj.cardNo = this.bankCardList[0].cardId;
              this.withDrawObj.cardName = this.bankCardList[0].cardKind;
              this.withDrawObj.cardId = this.bankCardList[0].id;
            }
          } else {
            this.$vux.toast.text(data.message, "top");
          }         
        });
    },
    selectCard(item) {
      this.withDrawObj.cardNo = item.cardId;
      this.withDrawObj.cardName = item.cardKind;
      this.withDrawObj.cardId = item.id;
      this.showCardPopup = false;
    },
    applyWithdraw() {
      if (this.isAuditIdCard != 1) {
        this.$vux.toast.text("身份证审核通过才能进行提现操作~", "top");
        return;
      }
      if (!this.withDrawObj.cardId) {
        this.$vux.toast.text("添加银行卡后才能进行提现操作~", "top");        
      }
      if (this.myIntegral < this.withDrawObj.quantity) {
        this.$vux.toast.text("提现金额不足，请重新输入~", "top");
        return;
      }
      let queryObj = {
        cardId: this.withDrawObj.cardId,
        quantity: this.withDrawObj.quantity
      }
      this.$api
        .applyWithdraw(queryObj)
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text("申请提现已提交", "top");
            this.queryWithdraw();
            this.queryUser();
            this.index = 1;
          } else {
            this.$vux.toast.text(data.message, "top");
          }       
        });
    },
    queryWithdraw() {
      this.$api
        .queryWithdraw({
          pageNo: 1,
          pageSize: 100
        })
        .then(data => {
          if (data.code === 200) {
            this.withdrawList = data.data.items;
          } else {
            this.$vux.toast.text(data.message, "top");
          }         
        });
    },
    queryUser() {
      this.$api
        .queryUser({})
        .then(data => {
          if (data.code === 200) {
            this.myIntegral = data.data.user.withdrawAmount;
            this.freezeIntegral = data.data.user.freezeAmount;
            this.isAuditIdCard = data.data.user.isAuditIdCard;
          } else {
            this.$vux.toast.text(data.message, "top");
          }       
        });
    },
    toShowCardPopup() {
      if (this.withDrawObj.cardNo == '') {
        this.$router.push('/myBankCard')
      }
      this.showCardPopup = true
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
.applyWithdraw {
  padding-top: 88px;
}
.submit-btn {
  width: 90%;
  margin-right: 5%;
  margin-top: 1rem;
}
.order-box {
  text-align: left;
  font-size: 14px;
  padding: .3rem .4rem;
  background-color: #fff;
  .text-right {
    float: right;
  }
}
.attention-msg {
  color: #f74c31;
  font-size: 12px;
  margin-top: 12px;
  text-align: left;
  padding-left: .4rem;
}
</style>
