<template>
          <div class="box"   data-aos="fade-up" data-aos-duration="6000">
            <div class="tile is-ancestor">
              <div class="tile is-parent is-8">
                <article class="tile is-child">
                  <p class="title is-size-3">Running Tracker App</p>
                  <div class="text">
                    <p>A fitness distance tracker app developed for Android devices. The app displays a list of the history of the user's runs which displays the run time, speed, distance and, with the integration of google maps, the route.</p>
                  </div>
                  <div class="text">
                    <div class="center">Tech Stack:</div>
                  </div>
                  <div class="text">
                    <div class="center">
                      <div><img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/></div>
                    </div>
                  </div>
                  <div>
                    <div class="buttons center">
                        <button class="button is-outlined is-rounded is-small text" @click="handleSourceCode">Source Code</button>                    </div>
                  </div>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child ">
                  <figure class="image image is-5by4">
                    <img src="../assets/runningapp.jpeg">
                  </figure>
                </article>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: 'RunningTrackerApp',
  methods: {
    handleSourceCode: function () {
      window.open('https://github.com/ahagbarth/RunningTracker')
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
.image{
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.75);
}
.text{
  font-family: 'Montserrat';
  margin: 1rem
}
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

</style>
