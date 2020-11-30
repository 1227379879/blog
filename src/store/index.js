import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
import {CHANGE_GROUNDGLASSFLAG,CHANGE_PARTICLEFLAG,CHANGE_SPEECHFLAG,CHANGE_MAPTYPEFLAG} from "./mutation-types"

export default new Vuex.Store({
  plugins:[createPersistedState()],
  state: {
    backgroundFlag:true,
    groundGlassFlag:true, // 毛玻璃
    particleFlag:true, //粒子
    speechFlag :true,  //一言
    mapTypeFlag:true, //地图
  },
  mutations: {
    /*
    * 更改毛玻璃
    * */
    [CHANGE_GROUNDGLASSFLAG](state,data){
      state.groundGlassFlag = data
    },
    /**
     * 更改粒子
     * */
    [CHANGE_PARTICLEFLAG](state,data){
      state.particleFlag = data
    },
    /*
    * 一言显示隐藏
    * */
    [CHANGE_SPEECHFLAG](state,data){
      state.speechFlag = data
    },
    /*
    * 地图
    * */
    [CHANGE_MAPTYPEFLAG](state,data){
      state.mapTypeFlag = data
    }
  },
  actions: {
  },
  modules: {
  }
})
