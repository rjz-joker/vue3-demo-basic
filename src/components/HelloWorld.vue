<template>
  <div id="HelloWorld">
    <h1>{{ msg }}</h1>
    <h1>默认API地址：{{store.state.baseURL}}</h1>
    <h2>每日笑话</h2>
    <button @click="addCount()">数量: {{ store.state.count }}</button>
    <button @click="$router.push('/')">每日一笑</button>
    <button @click="$router.push('/setting')">当前vuex配置</button>
    <button @click="addCount()">添加vuex 数量</button>
    <div class="divs">
      <div class="ddd">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    computed,
    defineProps,
    reactive,
  } from 'vue'
  import store from '../store/index'
  import createRouter from '../router/index'
  defineProps({
    msg: String
  })

  const state = reactive({
    count: 0,
    jokerList:  []
  })
  const stores = reactive({
    value:store.state
  })
  onload: {
    console.log(store)
    console.log(stores.value.count)
  }
  function addCount(){
    store.state.count++
    store.commit("updateCount", store.state.count);
  }
</script>

<style scoped lang="scss">
  a {
    color: #42b983;
  }

  .joker-div{
    width: 750px;
    background: yellowgreen;
    .joker-list{
      width: 500px;
      margin: 0 auto;
      padding: 10px 20px;
      background: red;
      margin-top: 20px;
      border-radius: 20px;
    }
  }

  .divs {
    width: 750px;
    .ddd {
      width: 700px;
      margin: 0 auto;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
</style>