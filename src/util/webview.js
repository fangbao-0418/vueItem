/**
 * author wangxiaoqing
 * last update 2016-3-27
 */

const wlb = (function () {
  var unique
  function Mixin (bridge) {
    this.bridge = bridge  // WebViewJavascriptBridge对象
  }

  Mixin.isAPP = function () {
    var u = navigator.userAgent
    if (u.indexOf('wlbAPP') > -1) {
      return true
    }
    return false
  }

  Mixin.filterJSON = function (target) {
    var u = navigator.userAgent
    var toString = Object.prototype.toString
    var newJSON = target

    if (u.indexOf('Android') > -1 && toString.call(newJSON) === '[object String]') {
      try {
        newJSON = JSON.parse(target)
      } catch (e) {
        return newJSON
      }
    }
    return newJSON
  }

  Mixin.prototype = {
    _init: function () {
      this.bridge.init(function (message, responseCallback) {
        var data = { 'init': 'true' }
        responseCallback(data)
      })
    },
    _setData: function (ops, callback) {
      var data = {'post': {}, 'callback': null}
      var toString = Object.prototype.toString

      if (toString.call(ops) === '[object Object]') {
        for (var p in ops) {
          data.post[p] = ops[p]
        }
      }

      if (toString.call(ops) === '[object Function]') {
        data.callback = ops
        return data
      }

      data.callback = toString.call(callback) === '[object Function]' ? callback : null
      return data
    },
    /**
     * 登陆
     * @param data  {refresh: 1||0, url: url||''}
     * @param callback
     */
    loginApp: function (data, callback) {
      var options = this._setData(data, callback)

      this.bridge.callHandler('loginApp', options.post, function (response) {
        options.callback && options.callback(response)
      })
    },
    /**
     * 刷新本页面
     * @param data  {reload: 1||0}
     * @param callback
     */
    reloadPage: function (data, callback) {
      var options = this._setData(data, callback)

      this.bridge.callHandler('reloadPage', options.post, function (response) {
        options.callback && options.callback(response)
      })
    },
    /**
     * 注册
     * @param data {refresh: 1||0, url: url||''}
     * @param callback
     */
    registerApp: function (data, callback) {
      var options = this._setData(data, callback)

      this.bridge.callHandler('registerApp', options.post, function (response) {
        options.callback && options.callback(response)
      })
    },
    /**
     * 数据埋点
     * @param data {name: 活动名称||'',source:faxianye||'',type:1||'' }
     * @param callback
     */
    firstLoadWebView: function (data, callback) {
      var options = this._setData(data, callback)
      this.bridge.callHandler('firstLoadWebView', options.post, function (response) {
        options.callback && options.callback(response)
      })
    },
    /**
     * 跳到理财专区
     * @param callback
     */
    jumpToManageMoney: function (callback) {
      this.bridge.callHandler('jumpToManageMoney', function (response) {
        callback && callback(response)
      })
    },
    /**
     * 跳到发现页  app2.7.6版本
     * @param callback
     */
    jumpToDiscoverView: function (callback) {
      this.bridge.callHandler('jumpToDiscoverView', function (response) {
        callback && callback(response)
      })
    },
    /**
     * 跳到自动投资  app3.1.0版本
     * @param callback
     */
    jumpToAutoInvest: function (callback) {
      this.bridge.callHandler('jumpToAutoInvest', function (response) {
        callback && callback(response)
      })
    },
    /**
     * 判断是否登陆
     * 目前该接口有问题，暂不使用，用senduserinfo先替代
     * @param data  可不传
     * @param callback 返回 [login, ph, tk]
     */
    authenticated: function (data, callback) {
      var options = this._setData(data, callback)
      this.bridge.callHandler('authenticated', options.post, function (response) {
        var responseData = Mixin.filterJSON(response)
        options.callback && options.callback(responseData)
      })
    },
    /**
     * 获取分享信息 app2.7.6版本
     * @param data {title: 活动标题, content: 活动描述, shareUrl:'指定分享的url', image: ''}
     */
    shareData: function (data) {
      this.bridge.registerHandler('shareData', function (backdata, responseCallback) {
        responseCallback(data)
      })
    },
    /**
     * 调用分享按钮 app2.7.6版本
     * @function touchShare
     * @param data 自定义分享信息
     * @param callback 回调 {title: 活动标题, content: 活动描述, shareUrl:'指定分享的url', image: ''}
     */
    touchShare: function (data, callback) {
      var options = this._setData(data, callback)
      this.bridge.callHandler('touchShare', options.post, function (response) {
        var responseData = Mixin.filterJSON(response)
        options.callback && options.callback(responseData)
      })
    },
    shareStatus: function (callback) {
      this.bridge.registerHandler('shareStatus', function (backdata, responseCallback) {
        var responseData = Mixin.filterJSON(backdata)
        callback && callback(responseData)
      })
    },
    /**
     * 获取用户信息
     * @param data 可不传
     * @param callback 返回[secretToken, ts, ph, tk]
     */
    sendUserInfo: function (data, callback) {
      var options = this._setData(data, callback)
      this.bridge.callHandler('sendUserInfo', {}, function (response) {
        var responseData = Mixin.filterJSON(response)
        options.callback && options.callback(responseData)
      })
    },
    /**
     * 充值
     * @param data {refresh: 1||0, url: url||''}
     * @param callback
     */
    rechargeApp: function (data, callback) {
      var options = this._setData(data, callback)
      this.bridge.callHandler('rechargeApp', options.post, function (response) {
        options.callback && options.callback(response)
      })
    },
    /* 跳到我的账户 */
    jumpToAccount: function (callback) {
      this.bridge.callHandler('jumpToAccount', function (response) {
        callback && callback(response)
      })
    },
    /* 关闭页面 */
    touchClose: function (callback) {
      this.bridge.callHandler('touchClose', function (response) {
        callback && callback(response)
      })
    }
  }

  function getMixin (bridge) {
    if (unique === undefined) {
      unique = new Mixin(bridge)
    }
    return unique
  }

  let mixins
  function ready (dics) {
  /**
   * 处理webview初始化问题
   * Mixin为单例模式
   * 检查user-agent： 如果是app就保持侦听
   *
   */

    var WebViewJavascriptBridge = window.WebViewJavascriptBridge
    alert(JSON.stringify(WebViewJavascriptBridge))
    if (Mixin.isAPP()) {
      if (window.WebViewJavascriptBridge) {
        // console.log('check')
        run({ callback: 'app', data: WebViewJavascriptBridge })
      } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function () {
          // console.log('listen.')
          run({ callback: 'app', data: WebViewJavascriptBridge })
        }, false)
      }
    } else {
      run({callback: 'other', data: null})
    }

    function run (target) {
      if (target.callback && target.callback === 'app') {
        if (mixins === undefined) {
          mixins = getMixin(target.data)
          mixins._init()
        }
      }
      try {
        dics[target.callback](mixins)
      } catch (e) {
        console.log('请传入正确的参数格式如{app: function(){}, other: function(){}}, 目前缺少 ' + target.callback)
      }
    }
  }

  return {
    ready: ready
  }
})()

export default wlb

 // wlb.ready({
 //    app: function(mixins){
 //        回调参数是app接口实例对象.
 //        console.log('app场景')
 //    },
 //    other: function(){
 //       console.log('其他场景的业务逻辑')
 //    }
 // })
