<template>
          <div class="box">
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <article class="tile is-child ">
                  <figure class="image image is-5by4">
                    <img src="../assets/SparkAnime.png">
                  </figure>
                </article>
              </div>
              <div class="tile is-parent is-8">
                <article class="tile is-child">
                  <p class="title is-size-3">Mobile Poker App</p>
                  <div class="text">
                    <p>This is an app developed for android devices for users to play poker in real-time. Using Firebase, the app has a login system which is used to maintain the user stats, money and add friends. The app achieves real-time communication between the devices with the use of SocketIO, so that the gameplay is as smooth as possible.</p>
                  </div>
                  <div class="text">
                    <div class="center">Tech Stack:</div>
                  </div>
                  <div class="text">
                    <div class="center">
                      <div><img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/></div>
                      <div><img src="https://img.icons8.com/color/48/000000/javascript.png"/></div>
                      <div><img src="../assets/1195870361551952104 (1).svg"/></div>
                    </div>
                  </div>
                  <div>
                    <div class="buttons center">
                        <button class="button is-outlined is-rounded is-small text" @click="handleSourceCodePokerAppClient">Source Code Client</button>
                        <button class="button is-outlined is-rounded is-small text" @click="handleSourceCodePokerAppServer">Source Code Server</button>
                    </div>
                  </div>
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
  font-weight: 500;
  font-family: 'Montserrat';
  display:flex; place-content:center
}
.center{
  display: flex;
  place-content: center
}
.text{
  font-family: 'Montserrat';
  margin: 1rem
}
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

</style>
