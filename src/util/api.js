var host, api

host = 'https://php1.wanglibao.com' // 接口地址

export host
export const api_list = host + '/yunying/rpc'

import axios from 'axios'

var isPro = process.env.NODE_ENV === 'production'

axios.interceptors.request.use(function (config) {
  // 请求前
  return config
}, function (error) {
  // 异常
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // 请求后
  return response
}, function (error) {
  // 异常
  return Promise.reject(error)
})

function http () {
  if (arguments[0] instanceof Array) {
    var resultArr = []
    for (let i in arguments[0]) {
      resultArr.push(fetchData(arguments[0][i]))
    }
    return axios.all(resultArr)
    // return Promise.all(resultArr)
  } else {
    let params = arguments[0]
    return fetchData(params)
  }
}
function fetchData (params) {
  var url = params['url']
  var data = params['data']
  var method = params['method'] ? params['method'] : 'post'
  return axios({
    url: url,
    method: method,
    data: params,
    timeout: 10000
  })
}
export default http
