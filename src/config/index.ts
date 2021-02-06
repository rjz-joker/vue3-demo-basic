import axios from "axios";
import qs from "qs";
// import Toast from "vue2-toast";
import Cookies from 'js-cookie'
import { AddressParameter } from '../utils/index'
import store from '../store/index'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.VUE_APP_API, // api的base_url
  // baseURL: 'http://apitest.psdpp.com/api', // api的base_url
  baseURL: store.state.baseURL, // api地址从vuex里面进行获取
  timeout: 5000 // 请求超时时间
});

service.defaults.headers["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// request拦截器
service.interceptors.request.use(
  config => {
    if (config.method == "get") {
      config.params = {
        ...config.params
      };
    } else {
      config.data = JSON.stringify(config.data) == '{}' ? JSON.stringify({ ...config.data }) : qs.stringify({ ...config.data });
    }
    // 先从parameter中取token 如果取不到从header中取
    console.log(AddressParameter('token') || Cookies.get('token'))
    config.headers["token"] = AddressParameter('token') || Cookies.get('token');
    return config;
  },
  error => {
    console.log('request拦截器错误信息', error); // for debug
    Promise.reject(error);
  }
);

// response拦截器
service.interceptors.response.use(
  // response => response,
  response => {
    const res = response;
    if (res.data.code != 200) {
      return Promise.reject(response);
    } else {
      return response;
    }
  },
  error => {
    console.log("response拦截器error" + error); // for debug
    var errors = error.toString()
    if (errors.indexOf("5000ms" == -1)) {
      console.log('网络较差');
    } else {
      // Toast.top(error);
    }
    return Promise.reject(error);
  }
);

export default service;