<template>
  <section class="hero is-fullheight about" >
    <div style="position:relative">
      <div class="hero-body" style="margin-top:2rem; margin-bottom:3rem">
        <div class="container">
          <div class="title">
            <div class="is-size-1 montserrat">Projects</div>
          </div>
          <SparkAnime></SparkAnime>
          <br>
          <PokerApp></PokerApp>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SparkAnime from '../components/SparkAnimeProject'
import PokerApp from '../components/PokerApp'
export default {
  name: 'Hero',
  components: {
    SparkAnime,
    PokerApp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
  background-color: #fafafa
}
.title{
  font-weight: 400;
  display:flex; place-content:center
}
.center{
  display: flex;
  place-content: center
}
.text{
  font-size: 2em;
  font-weight: 200;
}
.montserrat{
  font-weight: 600;
  font-family: 'Montserrat';
  margin-bottom: 2rem;
}
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

</style>
