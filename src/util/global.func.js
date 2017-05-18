export function getUrlParam (val) {
  var uri = window.location.href
  var re = new RegExp('' + val + '=([^&?]*)', 'ig')
  return ((uri.match(re)) ? (decodeURI(uri.match(re)[0].substr(val.length + 1))) : '')
}
