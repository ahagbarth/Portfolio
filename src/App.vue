<template>
  <div id="app">
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <ContactMe/>
    <Footer/>
  </div>
</template>

<script>
import Hero from './View/Hero.vue'
import About from './View/About.vue'
import Skills from './View/Skills.vue'
import Projects from './View/Projects.vue'
import ContactMe from './View/ContactMe.vue'
import Footer from './View/Footer'
export default {
  name: 'App',
  components: {
    Hero,
    About,
    Skills,
    Projects,
    ContactMe,
    Footer
  }
}
</script>

<style>

</style>
