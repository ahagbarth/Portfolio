<template>
  <div id="app">
    <Hero/>
    <About/>
  </div>
</template>

<script>
import Hero from './View/Hero.vue'
import About from './View/About.vue'

export default {
  name: 'App',
  components: {
    Hero,
    About
  }
}
</script>

<style>

</style>
