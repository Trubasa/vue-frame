<template>
  <div id="app">
    <message-box></message-box>
    <window-resize></window-resize>

    <router-view/>
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

</style>
