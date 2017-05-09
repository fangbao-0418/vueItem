export function handleDate (date) {
  // var nowTime = Date.parse(new Date())
  // var timestamp = dateTotimestamp(date)
  // var difference = (nowTime - timestamp) / 1000
  // switch (difference) {
  //   case difference < 60*60:
  //     return date
  //     break
  //   default:
  //     return date
  //     break
  // }
  return date
}
export function dateTotimestamp (date) {
  var timestamp = Date.parse(new Date(date))
  return timestamp
}
