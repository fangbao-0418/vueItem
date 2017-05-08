var Location = window.location
var host = 'https://php1.wanglibao.com'
// var host = 'http://yunying.dev.wanglibao.com'
if (Location.hostname.indexOf('wanglibao.com') > -1) {
  host = Location.host
}
var api = {
  host: host,
  api_list: host + '/yunying/rpc',
  // api_list: host + '/rpc',
  api_account: host + '/passport/service.php?c=account'
  // api_account: 'https://php1.wanglibao.com/passport/service.php?c=account'
}
export default api
