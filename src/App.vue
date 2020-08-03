<template>
  <div id="app">
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
  </div>
</template>

<script>
import Hero from './View/Hero.vue'
import About from './View/About.vue'
import Skills from './View/Skills.vue'
import Projects from './View/Projects.vue'

export default {
  name: 'App',
  components: {
    Hero,
    About,
    Skills,
    Projects
  }
}
</script>

<style>

</style>
