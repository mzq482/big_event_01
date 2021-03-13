//开发
var baseURL = 'http://ajax.frontend.itheima.net/api'

//测试
//let baseURL = 'http://ajax.frontend.itheima.net/api'

//生产
//let baseURL = 'http://ajax.frontend.itheima.net/api'

$.ajaxPrefilter(function (options) {
    options.url = baseURL + options.url
})