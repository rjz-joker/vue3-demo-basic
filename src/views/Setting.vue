<template>
    <div class="joker-div">
      <div class="joker-list">
        VUEX配置
        <p v-for="(item,key) in store.state" :key="key">
          {{key}}:{{item}}
        </p>
        路由配置
         <div v-for="(item,key) in createRouter.options.routes" :key="key">
           <p v-for="(n,keys) in item" :key="keys">
             {{keys}}:{{n}}
           </p>
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
  import createRouter from '../router/index'
  
  import {
    getDemo,
  } from '../request/index'
  import store from '../store/index'
  const state = reactive({
    count: 0,
    jokerList:  []
  })
  onload: {
    console.log(createRouter) // 路由总设置
    console.log(createRouter.options.routes)  //路由路径
  }
</script>

<style scoped lang="scss">
  .joker-div{
    background: yellowgreen;
    .joker-list{
      width: 500px;
      margin: 0 auto;
      padding: 10px 20px;
      margin-top: 20px;
      border-radius: 20px;
      text-align: left;
      font-size: 24px;
      line-height: 40px;
      font-weight: 600;
    }
  }
</style>