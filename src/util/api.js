var Location = window.location
var isPro = process.env.NODE_ENV.trim() === 'production'
var host, api
if (!isPro) {
  host = 'https://php1.wanglibao.com'
  if (Location.hostname.indexOf('wanglibao.com') > -1) {
    host = Location.host
  }
  api = {
    host: host,
    api_list: host + '/yunying/rpc',
    api_account: host + '/passport/service.php?c=account'
  }
} else {
  host = 'http://yunying.dev.wanglibao.com'
  if (Location.hostname.indexOf('wanglibao.com') > -1) {
    host = Location.host
  }
  api = {
    host: host,
    api_list: host + '/rpc',
    api_account: 'https://php1.wanglibao.com/passport/service.php?c=account'
  }
}

export default api
