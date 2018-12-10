import Vue from 'vue'
import {
  dateFormat
} from 'vux'
let moment = require('moment')
Vue.filter("formatVipLevel", function (status) {
  if (status == 0) {
    return "VIP";
  } else if (status == 1) {
    return "经销商";
  } else if (status == 2) {
    return "商务批发商";
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
  // let dateVal = new Date(Date.parse(value));
  // let stampTime = Date.parse(value.replace(/-/g, "/"));
  let date = value.substring(0, 10) + ' ' + value.substring(11, 16)
  return date;
  // let formatStringx = formatString || 'YYYY/MM/DD HH:mm:ss';
  // return moment(stampTime).format(formatStringx); // value可以是普通日期 20170723
  // return dateFormat(stampTime, formatStringx); // 这是时间戳转时间
  // return moment(stampTime);
  // return new Date(parseInt(stampTime)).toLocaleString().replace(/:\d{1,2}$/, ' ');
});