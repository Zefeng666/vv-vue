<template>
  <div class="myIdCard">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">我的身份证</x-header>
    <divider style="font-size: 16px">身份证正面</divider>
    <div class="card-box">
      <div class="show">
        <div class="picture" :style="'backgroundImage:url('+headerImage+')'"></div>
      </div>
      <div style="margin-top:10px;">
        <input class="add-btn" type="file" id="upload" accept="image/*" @change="upload">
        <label for="upload"></label>
      </div>
    </div>
    <divider style="font-size: 16px">身份证反面</divider>
    <div class="card-box">
      <div class="show">
        <div class="picture" :style="'backgroundImage:url('+headerImage2+')'"></div>
      </div>
      <div style="margin-top:10px;">
        <input class="add-btn" type="file" id="upload2" accept="image/*" @change="upload2">
        <label for="upload2"></label>
      </div>
    </div>
    <x-button v-if="userInfo.isAuditIdCard != 1" class="saveBtn" type="primary" action-type="button" @click.native="savePic()">保存</x-button>
  </div>
</template>

<script>
import { ViewBox, XHeader, Divider, XButton } from "vux";
import Uploader from "vux-uploader";
import Exif from "exif-js";
export default {
  name: "myIdCard",
  components: {
    ViewBox,
    XHeader,
    Uploader,
    Divider,
    XButton
  },
  mounted () {
    this.queryUser();
    this.getQnToken();
    this.queryUserIdCard();
  },
  data() {
    return {
      idCardObj: {},
      userInfo: {},
      value: "",
      headerImage: "",
      headerImage2: "",
      picValue: "",
      picValue2: "",
      qnToken: '',
      imgKey: '',
      imgKey2: ''
    };
  },
  methods: {
    savePic() {
      this.$api
        .alterUserIdCard({
          frontPhoto: this.imgKey,
          reversePhoto: this.imgKey2
        })
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text('上传成功', "top");
            this.$router.go(-1);
          } else {
            this.$vux.toast.text(data.message, "top");
          }       
        });     
    },
    getQnToken() {
      this.$api
        .getQnToken({})
        .then(data => {
          if (data.code === 200) {
            this.qnToken = data.data.token;
          } else {
            this.$vux.toast.text(data.message, "top");
          }       
        });
    },
    queryUserIdCard() {
      this.$api
        .queryUserIdCard({})
        .then(data => {
          if (data.code === 200) {
            if (data.data.idCard) {
              this.headerImage = data.data.idCard.frontPhoto;
              this.headerImage2 = data.data.idCard.reversePhoto;
            }
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
            this.userInfo = data.data.user;
          }       
        });
    },
    upload(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.picValue = files[0];
      this.imgPreview(this.picValue, 1);
    },
    upload2(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.picValue2 = files[0];
      this.imgPreview(this.picValue2, 2);
    },
    imgPreview(file, index) {
      let self = this;
      let Orientation;
      //去获取拍照时的信息，解决拍出来的照片旋转问题
      Exif.getData(file, function() {
        Orientation = Exif.getTag(this, "Orientation");
      });
      // 看支持不支持FileReader
      if (!file || !window.FileReader) return;

      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader();
        // 将图片2将转成 base64 格式
        reader.readAsDataURL(file);
        // 读取成功后的回调
        reader.onloadend = function() {
          let result = this.result;
          let img = new Image();
          img.src = result;
          //判断图片是否大于100K,是就直接上传，反之压缩图片
          if (this.result.length <= 100 * 1024) {
            if (index === 1) {
              self.headerImage = this.result;
            } else if (index === 2) {
              self.headerImage2 = this.result;
            }
            self.postImg(this.result, index);
          } else {
            img.onload = function() {
              let data = self.compress(img, Orientation);

              if (index === 1) {
                self.headerImage = data;
              } else if (index === 2) {
                self.headerImage2 = data;
              }
              self.postImg(data, index);
            };
          }
        };
      }
    },
    postImg(data, index) {
      let self = this;
      let pic = data.substring(23);     
      let url = "http://upload.qiniup.com/putb64/-1" //非华东空间需要根据注意事项 1 修改上传域名
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange=function(){
        if (xhr.readyState==4){
          if (index === 1) {
            self.imgKey = JSON.parse(xhr.responseText).key;
          } else if (index === 2) {
            self.imgKey2 = JSON.parse(xhr.responseText).key;            
          }
          console.log(self.imgKey2);
          
        }
      }
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/octet-stream");
      xhr.setRequestHeader("Authorization", "UpToken " + this.qnToken);
      xhr.send(pic);
    },
    rotateImg(img, direction, canvas) {
      //最小与最大旋转方向，图片旋转4次后回到原方向
      const min_step = 0;
      const max_step = 3;
      if (img == null) return;
      //img的高度和宽度不能在img元素隐藏后获取，否则会出错
      let height = img.height;
      let width = img.width;
      let step = 2;
      if (step == null) {
        step = min_step;
      }
      if (direction == "right") {
        step++;
        //旋转到原位置，即超过最大值
        step > max_step && (step = min_step);
      } else {
        step--;
        step < min_step && (step = max_step);
      }
      //旋转角度以弧度值为参数
      let degree = step * 90 * Math.PI / 180;
      let ctx = canvas.getContext("2d");
      switch (step) {
        case 0:
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0);
          break;
        case 1:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(degree);
          ctx.drawImage(img, 0, -height);
          break;
        case 2:
          canvas.width = width;
          canvas.height = height;
          ctx.rotate(degree);
          ctx.drawImage(img, -width, -height);
          break;
        case 3:
          canvas.width = height;
          canvas.height = width;
          ctx.rotate(degree);
          ctx.drawImage(img, -width, 0);
          break;
      }
    },
    compress(img, Orientation) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      //瓦片canvas
      let tCanvas = document.createElement("canvas");
      let tctx = tCanvas.getContext("2d");
      let initSize = img.src.length;
      let width = img.width;
      let height = img.height;
      //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      let ratio;
      if ((ratio = width * height / 4000000) > 1) {
        console.log("大于400万像素");
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
      } else {
        ratio = 1;
      }
      canvas.width = width;
      canvas.height = height;
      //        铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //如果图片像素大于100万则使用瓦片绘制
      let count;
      if ((count = width * height / 1000000) > 1) {
        console.log("超过100W像素");
        count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
        //            计算每块瓦片的宽和高
        let nw = ~~(width / count);
        let nh = ~~(height / count);
        tCanvas.width = nw;
        tCanvas.height = nh;
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            tctx.drawImage(
              img,
              i * nw * ratio,
              j * nh * ratio,
              nw * ratio,
              nh * ratio,
              0,
              0,
              nw,
              nh
            );
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height);
      }
      //修复ios上传图片的时候 被旋转的问题
      if (Orientation != "" && Orientation != 1) {
        switch (Orientation) {
          case 6: //需要顺时针（向左）90度旋转
            this.rotateImg(img, "left", canvas);
            break;
          case 8: //需要逆时针（向右）90度旋转
            this.rotateImg(img, "right", canvas);
            break;
          case 3: //需要180度旋转
            this.rotateImg(img, "right", canvas); //转两次
            this.rotateImg(img, "right", canvas);
            break;
        }
      }
      //进行最小压缩
      let ndata = canvas.toDataURL("image/jpeg", 0.1);
      console.log("压缩前：" + initSize);
      console.log("压缩后：" + ndata.length);
      console.log(
        "压缩率：" + ~~(100 * (initSize - ndata.length) / initSize) + "%"
      );
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
      return ndata;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mine-msg {
  position: relative;
  vertical-align: middle;
  padding-top: 1rem;
  margin-bottom: 1rem;
  p {
    text-align: left;
    padding-left: 50%;
    font-size: 18px;
  }
}
.avator {
  width: 15%;
  position: absolute;
  top: 40%;
  left: 30%;
}

.show {
  width: 7rem;
  height: 4rem;
  position: relative;
  border: 1px solid #d5d5d5;
}
.picture {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-box {
  margin-left: 15%;
}
.add-btn {
  background-color: rgb(238, 184, 68);
  width: 50%;
  border-radius: 5px;
  padding: .2rem 0.2rem;
}
.saveBtn {
  margin-top: .6rem;
  margin-bottom: .6rem;
  width: 90%;
}
</style>
