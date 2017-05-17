// 处理时间 1小时之内显示n分钟 一天之内显示n小时
export function handleDate (date) {
  var nowTime = Date.parse(new Date())
  var timestamp = dateTotimestamp(date)
  var difference = (nowTime - timestamp) / 1000

  if (difference < 60 * 60) {
    // 1小时之内
    return Math.ceil(difference / 60) + '分钟'
  } else if (difference < 24 * 60 * 60 && difference >= 60 * 60) {
    // 24小时之内
    return Math.ceil(difference / (60 * 60)) + '小时'
  } else {
    return date
  }
}
export function dateTotimestamp (date) {
  var stringTime = date.replace(/-/g, '/')
  var timestamp = Date.parse(new Date(stringTime))
  return timestamp
}
/**
 * [msubstring description]
 * @param  {[String]} str   [截取的字符串]
 * @param  {[Number]} start [开始位置]
 * @param  {[Number]} end   [结束位置]
 * @param  {[String]} chase [末尾追加字符串]
 * @return {[String]}       [处理后的字符串]
 */
export function msubstring (str, start, end, chase = '...') {
  if (str === '') {
    return ''
  }
  var res = str.length > end ? str.substring(start, end) + chase : str.substring(start, end)
  return res
}
