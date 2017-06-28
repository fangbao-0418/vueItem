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

// import { Http } from 'vue-resource'

import { ruleModal, loading } from '../plugins'

// import router from '../router'
import * as Fn from './global.func'
var pass = 'wlh5_H5~h5#H5'
var clientMask = '7005'
var isPro = process.env.NODE_ENV === 'production'
var isCrossDomain = window.location.hostname.indexOf('wanglibao.com') === -1

axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  if (response.data.error) {
    var code = response.data.error.code
    if (loading.visible && code !== 4004) {
      // loading.show(false)
    }
    var message = response.data.error.message
    console.log(code, 'code')
    if (code === 4004) {
      // ruleModal.show(false)
      // console.log(router, 'router')
      // setTimeout(() => {
      //   wlb.ready({
      //     app: function (mixins) {
      //       mixins.loginApp({ refresh: 1, url: '' })
      //     },
      //     other: function () {
      //       // router.replace({
      //       //   name: 'index'
      //       // })
      //       if (router.app.$route.name === 'index') {
      //
      //       }
      //       //
      //     }
      //   })
      // }, 1000)
    } else {
      if (message) {
        // Toast({
        //   message: message,
        //   duration: 1500
        // })
        // ruleModal.show({ title: '系统提示', content: message, style: 'text-align: center' })
      } else {
        ruleModal.show({ title: '系统提示', content: '请求服务异常，错误未知', style: 'text-align: center' })
      }
    }
  }
  return response
}, function (error) {
  loading.show(false)
  ruleModal.show({
    title: '系统提示',
    content: '网络异常，获取数据失败',
    ok: {
      title: '刷新',
      callback: function () {
        window.location.reload()
      }
    },
    style: 'text-align: center'
  })
  return Promise.reject(error)
})

// Http.interceptors.push(function (request, next) {
//   next(function (response) {
//     if (response.data.error && response.data.error.code === 4004) {
//       ruleModal.show(false)
//       setTimeout(() => {
//         console.log(router, 'router')
//         router.replace({ name: 'index' })
//       }, 1000)
//     }
//     if (!response.ok) {
//       loading.show(false)
//       ruleModal.show({
//         title: '系统提示',
//         content: '网络异常，获取数据失败',
//         ok: {
//           title: '刷新',
//           callback: function () {
//             window.location.reload()
//           }
//         },
//         style: 'text-align: center'
//       })
//     }
//     return response
//   })
// })

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
  params['params'] = params['params'] ? params['params'] : []
  let jsonObj = {
    jsonrpc: '2.0',
    method: params['method'],
    params: params['params'],
    id: 1
  }
  let json = JSON.stringify(jsonObj)

  var debug = Fn.getUrlParam('debug')
  var encryptData = debug === 'true' || !isPro ? json : clientMask + global.XXTEA.encryptToBase64(json, pass)

  /**
   * axios 不兼容safari 9
   */
  return axios({
    url: params.url,
    method: 'post',
    data: encryptData,
    timeout: 10000,
    withCredentials: isCrossDomain || !isPro
  })

  // return Http({
  //   method: 'post',
  //   url: params.url,
  //   body: encryptData,
  //   emulateJSON: true,
  //   timeout: 10000,
  //   credentials: isCrossDomain || !isPro,
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  // })
}
export default http
