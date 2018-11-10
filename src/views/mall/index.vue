<template>
    <div class="mall">
        <x-header class="vux-1px-b my-header" :left-options="{showBack: false}">商城</x-header>
        <template v-for="(item, index) in productList">
          <div class="mall-goods-item vux-1px-b" :key="index">
            <div class="goods-img-box">
              <img class="goods-img" :src="item.url">
            </div>
            <div class="goods-info-box">
              <span class="goods-info-name">{{item.name}}</span><br>
              <span class="goods-info-detail">{{item.detail.substring(0, 50) + '...'}}</span><br>
              <!-- <p class="goods-info-price">￥<span style="font-weight: 600;">{{item.vipPrice}}</span>/件</p> -->
            </div>
          </div>
        </template>
    </div>
</template>

<script>
import { ViewBox, XHeader, Card, XButton } from "vux";
export default {
  name: "mall",
  components: {
    ViewBox,
    XHeader,
    Card,
    XButton
  },
  created() {
      this.queryAllProducts();
  },
  data() {
    return {
        productList: [],
    };
  },
  methods: {
    queryAllProducts() {
      this.$api.queryAllProducts(
        {
          pageNo: 1,
          pageSize: 100
        }
      ).then(data => {
        if (data.code === 200) {
          this.productList = data.data.items;
        } else {
          this.$vux.toast.text(data.message, "top");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mall {
  padding-top: 44px;
}
.my-header {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
}
.mall-goods-item {
  height: 130px;
  text-align: left;
  background-color: #fff;
  padding: .3rem .4rem;
  position: relative;
}
.goods-img-box {
  display: inline-block;
  width: 32%;
  height: 32vw;
  font-size: 0;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  left: .4rem;
  top: 50%;
  transform: translateY(-50%);
  .goods-img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.goods-info-box {
  width: 62%;
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  padding-left: 38%;
  padding-top: .1rem;
  .goods-info-name {
    font-weight: 600;
  }
  .goods-info-detail {
    font-size: 14px;
    color: #999;
    line-height: 1;
  }
  .goods-info-price {
    text-align: right;
    font-size: 18px;
    color: #f74c31;
  }
}
</style>
