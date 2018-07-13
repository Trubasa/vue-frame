<template>
  <div class="test-net-work">
    <el-button @click="getList">调用get方法</el-button>
  </div>
</template>

<script>
  export default {
    name: "test-net-work",
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      getList(){
        this.$netWork.get({
          url:'/goodList',
          success(res){
            console.log(res);
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
