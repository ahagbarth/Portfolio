<template>
  <div id="app">
    <Hero/>
    <About/>
    <Skills/>
  </div>
</template>

<script>
import Hero from './View/Hero.vue'
import About from './View/About.vue'
import Skills from './View/Skills.vue'

export default {
  name: 'App',
  components: {
    Hero,
    About,
    Skills
  }
}
</script>

<style>

</style>
