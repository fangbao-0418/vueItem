var Location = window.location
var host = 'https://php1.wanglibao.com'
if (Location.hostname.indexOf('wanglibao.com') > -1) {
  host = Location.host
}
var api = {
  api_list: host + '/yunying/rpc',
  api_account: host + '/passport/service.php?c=account'
}
export default api
