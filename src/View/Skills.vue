<template>
  <section class="hero is-large about" >
    <div style="position:relative">
      <div class="container">
        <div class="title">
          <div class="is-size-1 montserrat">Skills</div>
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
.title{
  display:flex; place-content:center
}
.montserrat{
  font-weight: 600;
  font-family: 'Montserrat';
  margin-bottom: 2rem;
}
.text{
  font-size: 2em;
  font-weight: 200;
}
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

</style>
