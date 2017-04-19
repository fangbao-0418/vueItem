// resize
(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    // if(clientWidth >= 750){
    //   clientWidth=640;
    // }
    docEl.style.fontSize = 20 * (clientWidth / 750) + 'px'
    // console.log("1+   "+docEl.style.fontSize);
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)

  // DOMContentLoaded是firefox下特有的Event, 当所有DOM解析完以后会触发这个事件。
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
