var Location = window.location
var host, api

host = 'https://'
if (Location.hostname.indexOf('wanglibao.com') > -1) {
  host = 'https://' + Location.host
}
api = {
  host: host
}

export default api
