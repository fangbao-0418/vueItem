/**
 * [Jsonrpc 数据请求接口]
 * vue中的调用方式 this.http({url,method,params}) || this.http([{url,method,params},{url,method,params}])
 * [http jsonrpc请求封装方法]
 * @params String url [接口地址]
 * @parmas String method [jsonrpc中的method]
 * @params Array params [jsonrpc中的params]
 * @return Promise
 */

import axios from 'axios'
import { ruleModal } from '../plugins'
var isPro = process.env.NODE_ENV === 'production'
var isCrossDomain = window.location.hostname.indexOf('wanglibao.com') === -1
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  ruleModal.show({ title: '系统提示', content: '网络异常，获取数据失败', style: 'text-align: center' })
  return Promise.reject(error)
})
function http () {
  if (arguments[0] instanceof Array) {
    var resultArr = []
    for (let i in arguments[0]) {
      resultArr.push(fetchData(arguments[0][i]))
    }
    console.log(resultArr)
    return axios.all(resultArr)
  } else {
    let params = arguments[0]
    return fetchData(params)
  }
}
function fetchData (params) {
  params['params'] = params['params'] ? params['params'] : []
  let jsonObj = {
    jsonrpc: '2.0',
    method: params['method'],
    params: params['params'],
    id: 1
  }
  let json = JSON.stringify(jsonObj)
  // console.log(json)
  return axios({
    url: params.url,
    method: 'post',
    data: json,
    // timeout: 1000,
    withCredentials: isCrossDomain || !isPro
  })
}
export default http
