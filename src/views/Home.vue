<template>
    <div class="joker-div">
      <div v-for="(item , key) in state.jokerList" :key="key" class="joker-list">
        {{item}}
      </div>
    </div>
</template>

<script setup>
  import {
    computed,
    defineProps,
    reactive,
  } from 'vue'
  import {
    getDemo,
  } from '../request/index'
  import store from '../store/index'
  const state = reactive({
    count: 0,
    jokerList:  []
  })
  onload: {
    // 修改接口地址 为笑话地址
    store.commit("updateBaseUrl", store.state.jokersUrl);
    getDemo({
      token: '123',
      num: String(store.state.count)
    }).then(res => {
      console.log('这里是正确信息',err)
      state.jokerList = res.jokes
    }).catch(err => {
      console.log('这里是错误信息',err)
      state.jokerList = err.data.jokes
    })
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