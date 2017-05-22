// 图片延迟加载
import 'jquery-lazyload'
export const lazyload = {
  bind: function (el, binding) {
    $(el).lazyload({
      placeholder: binding.value.placeholder,
      effect: 'fadeIn', // 效果
      // threshold: 200,
      event: 'sporty',
      failure_limit: 20,
      skip_invisible: true
    })
    $(el).one('error', function (e) {
      $(this).attr('src', binding.value.placeholder)
    })
    // setTimeout(function () {
    //   $(el).trigger('sporty')
    // }, 10000)
  },
  update: function (el, binding) {
    $(el).lazyload({
      placeholder: binding.value.placeholder,
      effect: 'fadeIn',
      // threshold: 200,
      event: 'sporty',
      failure_limit: 20,
      skip_invisible: true
    })
    $(el).one('error', function (e) {
      $(this).attr('src', binding.value.placeholder)
    })
  },
  unbind: function () {
    // 解绑
  }
}
