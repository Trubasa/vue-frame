<template>
  <div class="message-box">

  </div>
</template>

<script>
export default {
  name: 'message-box',
  data () {
    return {

    }
  },
  beforeMount(){
    this.$bus.$on('message',this.message)
  },
  mounted(){

  },
  beforeDestroy(){
    this.$bus.$off('message',this.message)
  },
  methods:{
    message(res){
      console.log('message',res);
      this.$message({
        dangerouslyUseHTMLString: true,
        message: res.msg,
        type: res.type,
        duration:res.duration||3000, //持续时间，0则不关闭
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
