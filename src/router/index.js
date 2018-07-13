import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routerList=[
  {
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(['../components/HelloWorld'], resolve)
  },
  {
    path: '*',
    name: 'notFound',
    component: resolve => require(['../common/notFound'], resolve)
  },
];

if(productConfig.isDev){
  routerList.push({
    path: '/example',
    component: resolve => require(['../common/example'], resolve),
    children: [
      {path: '', redirect: 'netWork'},
      {path: 'netWork', name: 'netWork', component: resolve => require(['../example/testNetWork'], resolve)},
    ]
  })
}


const router=new Router({
  routes: routerList
})

/*router.afterEach((to, from) => {
  console.log('切换路由',to,from);
  var pattern=/myCustomer/i;  //加载这些页面时要刷新
  // var pattern=/myPage/i;  //加载这些页面时要刷新
  if(pattern.test(to.name)){
    setTimeout(function () {
      store.commit('changeCurTime',true);
    },150);
  }


  var pattern=/orderMake|allOrder/i;  //支付需要刷新
  if(pattern.test(to.name)&&from.name){
    // console.log('reload');
    //location.reload()
    sessionStorage.setItem('isReload',1);
  }else{
    sessionStorage.setItem('isReload',0);
  }
})*/
export default router;
