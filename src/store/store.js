/**
 * Created by Trubasa 1141521502@qq.com on 2018/1/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    msg:'hello vuex store',
    windowObj:{},
    screenType:'mobile', //mobile 手机 pc 电脑
  },
  mutations: {
    changeMsg: (state, val) => {
      state.msg = val;
    },
    changeWindowObj: (state, val) => {
      state.windowObj = val;
    },
    changeScreenType: (state, val) => {
      state.screenType = val;
    },
  }
});


export default store
