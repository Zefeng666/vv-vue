let Promise = require('bluebird');
let axios = require('axios');
let qs = require('qs');
import router from '../router/index'
// import store from '../store/store'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = "http://119.23.14.187:8080/client"; //10.0.8.177:8080
// axios.defaults.baseURL = "http://172.18.66.159:8080/client"; //10.0.8.177:8080
// axios.defaults.baseURL = "http://10.0.8.177:8080/client"; //10.0.8.177:8080
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.code !== 200) {
    if (response.data.code === 900) {
      localStorage.clear()
      router.push('/wxLogin')
    }
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  // router.push('/wechatLogin')

  return Promise.reject(error);
});
const config = {
  request: (opt) => {
    // let opt;
    if (!opt.params) {
      opt.params = {}
    }
    if (!opt.method) {
      opt.method = 'post'
    }
    opt.method = opt.method.toLowerCase();
    // opt.params['handleUserId'] = 33;
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    // axios.defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDAxMDI4MzksInVzZXJuYW1lIjoi5pyI6ZOt5rO98J-UhSJ9.b9yfEat49GUzjLX75WGsrYZtaAHBQ7SifhX2XpxRak0';
    if (!opt.params.pageSize) {
      // opt.params['pageSize'] = 50;
    }

    let option = {
      url: opt.url,
      method: opt.method,
      data: qs.stringify(opt.params),
    };
    if (opt.method === 'get') {
      option.params = opt.params
    }
    return new Promise((resolve, reject) => {

      axios(option).then((response) => {
        resolve(response.data);

      }).catch((err) => {
        // 响应错误回调
        reject(err.message);
      });
    })
  }
};

export default config;
