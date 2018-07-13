<template>
  <div class="window-resize">

  </div>
</template>

<script>
  export default {
    name: "window-resize",
    data() {
      return {
        $window:{},
        timer:null
      }
    },
    beforeMount(){

    },
    mounted(){
      this.$window=$(window);
      this.setWindow();
      $(window).on('resize',this.resize);
    },
    beforeDestroy(){
      $(window).off('resize',this.resize)
    },
    methods:{
      resize(){
        var that=this;
        //改变窗口尺寸后，只有在停止变化后300ms才会进行store参数的设置
        clearTimeout(this.timer);
        this.timer=setTimeout(function () {
          that.setWindow()
        },300)

      },
      setWindow(){
        // console.log('resize');
        var width=this.$window.width();
        var height=this.$window.height();

        this.$store.commit('changeWindowObj',{
          width:width,
          height:height
        });


        var screenType=width<720?'mobile':'pc';
        this.$store.commit('changeScreenType',screenType)
      }
    }
  }
</script>

<style scoped>

</style>
