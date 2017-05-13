var Location = window.location
var host, api

host = 'https://php1.wanglibao.com'
if (Location.hostname.indexOf('wanglibao.com') > -1) {
  host = 'https://' + Location.host
}
api = {
  host: host,
  api_list: host + '/yunying/rpc',
  api_account: host + '/passport/service.php?c=account'
}

export default api
