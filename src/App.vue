<template>
  <div id="app">
    <message-box></message-box>
    <window-resize></window-resize>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    msg(){
      return this.$store.state.msg;
    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style>
  .fade-enter-active, {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
