<template>
  <div class="module">
    <h1>{{msg}}</h1>
    <i class="iconfont icon-icon-test"></i>
  </div>
</template>

<script>
export default {
  name: 'not-found',
  data () {
    return {
      msg:'您输入的地址有误!'
    }
  },
  mounted(){

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.module{
  text-align: center;
}
  .iconfont{
    font-size:150px;
  }
  h1,.iconfont{
    color:#999;
  }
</style>
