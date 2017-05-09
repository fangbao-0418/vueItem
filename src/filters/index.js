export function handleDate (date) {
  var nowTime = Date.parse(new Date())
  var timestamp = dateTotimestamp(date)
  var difference = (nowTime - timestamp) / 1000
  if (difference < 60 * 60) {
    // 一小时之内
    return Math.ceil(difference / 60) + '分钟'
  } else if (difference < 24 * 60 * 60 && difference >= 60 * 60) {
    return Math.ceil(difference / (60 * 60)) + '小时'
  } else {
    return date
  }
}
export function dateTotimestamp (date) {
  var timestamp = Date.parse(new Date(date))
  return timestamp
}
