<template>
  <div id="app">
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <ContactMe/>
    <Footer/>
  </div>
</template>

<script>
import Hero from './View/Hero.vue'
import About from './View/About.vue'
import Projects from './View/Projects.vue'
import ContactMe from './View/ContactMe.vue'
import Footer from './View/Footer'
import Navbar from './View/Navbar'
export default {
  name: 'App',
  components: {
    Hero,
    About,
    Projects,
    ContactMe,
    Footer,
    Navbar
  }
}
</script>

<style>

</style>
