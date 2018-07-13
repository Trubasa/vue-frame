
/**
 * Created by Trubasa 1141521502@qq.com on 2017/12/20.
 */
import bus from '../store/bus'
// 配置API接口地址
//var root = '/api/v1'
const config=productConfig

var root=config.apiPath
// 引用axios
var axios = require('axios')
axios.defaults.timeout =  config.timeout;
// 自定义判断元素类型JS
var qs=require('qs'); //axios默认是application/json格式的，如果不适用 qs.stringify 这种形式， 即使添加了请求头 最后的content-type的形式还是 json 的。需要引入改库
axios.spread(function(){
  console.log('网络请求结束')
});
/*
 接口处理函数
 这个函数每个项目都是不一样的，我现在调整的是适用于
 https://cnodejs.org/api/v1 的接口，如果是其他接口
 需要根据接口的参数进行调整。参考说明文档地址：
 https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
 主要是，不同的接口的成功标识和失败提示是不一致的。
 另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
 */

function apiAxios (method, url, params, success, failure,showLoading) {

  let isLoading=false;
  if(showLoading){
    isLoading=true;
    bus.$emit('isLoading',true);
  }

  axios({
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
      headerData: JSON.stringify({
        /*app: 'web',
        brand:'web',
        os:'web',
        osVersion:'web',
        time:new Date().getTime(),
        language:'cn',
        storeCode:'gggggg',
        sessionId:'', //经销商 192.168.0.103*/
      })
    },
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
    .then(function (res) {
      // console.log('数据',res);
      if(isLoading){
        bus.$emit('isLoading',false);
      }
      if(res.data.code&&res.data.code=='10000'){
        bus.$emit('message',{
          msg:'数据获取成功',
          type:'success'
        });
        return;
      }
      if(res.data.code&&res.data.code!='200'){
        bus.$emit('message',{
          msg:'操作失败，'+res.data.msg,
          type:'error'
        });
        return;
      }
      // console.log(url+' 数据',res);

      if (success) {
        success(res.data)
      } else if(failure){
        failure(res.data)
      }
    })
    .catch(function (err) {

      if(isLoading){
        bus.$emit('isLoading',false);
      }
      let pattern=/Error: timeout of/ig;
      if(pattern.test(err)){
        bus.$emit('message',{
          msg:'网络超时',
          type:'error'
        });
      }
      if (err&&err.response&&err.response.status) {

        console.error('错误',err.response);
        bus.$emit('message',{
          msg:err.response.status+' '+err.response.statusText,
          type:'error'
        });
      }
    })
}



// 返回在vue模板中的调用接口
export default {
  get: function (obj) {
    return apiAxios('GET', obj.url||'', {data:JSON.stringify(obj.data||{})}, obj.success||null, obj.error||null,obj.showLoading||null)
  },
  post: function (obj) {
    return apiAxios('POST',obj.url||'', {data:JSON.stringify(obj.data||{})}, obj.success||null, obj.error||null,obj.showLoading||null)
  },
  put: function (obj) {
    return apiAxios('PUT', obj.url||'', {data:JSON.stringify(obj.data||{})}, obj.success||null, obj.error||null,obj.showLoading||null)
  },
  delete: function (obj) {
    return apiAxios('DELETE', obj.url||'', {data:JSON.stringify(obj.data||{})}, obj.success||null, obj.error||null,obj.showLoading||null)
  }
}
