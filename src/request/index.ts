// 请求接口文档 转接ts
import requests from '../config/index'
export function getDemo(query) {
  return requests({
    url: '/joke/list',
    method: "get",
    params: {
      token: query.token ? query.token : null,
      num: query.num ? query.num : null
    }
  })
}

export function postDemo(query) {
  return requests({
    url: '/active',
    method: "post",
    data: {
      id: query.token ? query.token : null
    }
  })
}


