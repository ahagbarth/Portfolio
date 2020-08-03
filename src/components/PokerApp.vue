<template>
          <div class="box">
            <div class="tile is-ancestor">
              <div class="tile is-parent is-8">
                <article class="tile is-child">
                  <p class="title">Mobile Poker App</p>
                  <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                  </div>
                  <div class="content">
                    <div class="center">Tech Stack:</div>
                  </div>
                  <div class="content">
                    <div class="center">
                      <div><img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/></div>
                      <div><img src="https://img.icons8.com/color/48/000000/javascript.png"/></div>
                      <div><img src="../assets/1195870361551952104 (1).svg"/></div>
                    </div>
                  </div>
                  <div class="content">
                    <div class="buttons center">
                        <button class="button is-outlined is-rounded is-small" @click="handleSourceCodePokerAppClient">Source Code Client</button>
                        <button class="button is-outlined is-rounded is-small" @click="handleSourceCodePokerAppServer">Source Code Server</button>
                    </div>
                  </div>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child ">
                  <figure class="image image is-5by4">
                    <img src="../assets/SparkAnime.png">
                  </figure>
                </article>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: 'PokerApp',
  methods: {
    handleSourceCodePokerAppClient: function () {
      window.open('https://github.com/ahagbarth/Poker-Android')
    },
    handleSourceCodePokerAppServer: function () {
      window.open('https://github.com/ahagbarth/PokerServer2')
    }
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
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

</style>
