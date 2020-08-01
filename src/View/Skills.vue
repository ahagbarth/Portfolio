<template>
  <section class="hero is-fullheight about" >
    <div>
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent skills">
            <img src="https://img.icons8.com/color/240/000000/vue-js.png"/>
            </div>
         <div class="tile is-parent skills">
           <img src="https://img.icons8.com/color/240/000000/react-native.png"/>
         </div>
          <div class="tile is-parent skills">
            <img src="https://img.icons8.com/color/240/000000/javascript.png"/>
          </div>
        </div>
                <div class="tile is-ancestor">
          <div class="tile is-parent skills">
              <img src="https://img.icons8.com/color/256/000000/nodejs.png"/>
            </div>
         <div class="tile is-parent skills">
          <img src="https://img.icons8.com/color/240/000000/git.png"/>
         </div>
         <div class="tile is-parent skills">
          <img src="https://img.icons8.com/color/240/000000/android-os.png"/>
         </div>
        </div>
        <br>
        <br>
        <div class="tile is-ancestor skills">
            <span>and more...</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
  background-color: #fafafa
}
.custom-shape-divider-top-1595963035 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.skills{
  display:flex; place-content:center
}

.custom-shape-divider-top-1595963035 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 144px;
}

.custom-shape-divider-top-1595963035 .shape-fill {
    fill: #fafafa;
}
.title{font-weight: 400;}
.text{
  font-size: 2em;
  font-weight: 200;

}
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

</style>
