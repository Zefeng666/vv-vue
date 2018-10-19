import Vue from 'vue'
import {
  dateFormat
} from 'vux'

Vue.filter("formatVipLevel", function (status) {
  if (status == 0) {
    return "VIP";
  } else if (status == 1) {
    return "经销商";
  } else if (status == 2) {
    return "总代理";
  } else if (status == -1) {
    return "普通用户";
  }
});
Vue.filter("orderStatus", function (status) {
  if (status == 0) {
    return "未支付";
  } else if (status == 1) {
    return "待发货";
  } else if (status == 2) {
    return "已发货";
  }
});
Vue.filter("withdrawStatus", function (status) {
  if (status == 0) {
    return "审核中";
  } else if (status == 1) {
    return "审核通过";
  } else if (status == 2) {
    return "审核未通过";
  }
});
Vue.filter('formatDate', function (value, formatString) {
  let dateVal = new Date(value);
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  // return moment(value).format(formatString); // value可以是普通日期 20170723
  return dateFormat(dateVal, formatString); // 这是时间戳转时间
});