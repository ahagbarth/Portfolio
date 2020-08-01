<template>
  <section class="hero is-large about">
    <div style="position:relative">
     <div class="custom-shape-divider-top-1595963035">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>
      <div class="hero-body" style="margin-top:2rem">
        <div class="container">
          <p class="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum nisl sed diam posuere tristique. Vestibulum consectetur eleifend ante, sagittis sagittis nisl congue ut. Vivamus non ipsum id nisl vehicula venenatis. Vestibulum a elit dolor. Nulla lacus dolor, dignissim non tempus quis, hendrerit nec libero. Donec venenatis suscipit ante quis semper. Integer fermentum ut ipsum quis ultrices. Quisque luctus id dolor venenatis interdum. Vivamus ac iaculis odio.
          </p>
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

.custom-shape-divider-top-1595963035 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 144px;
}

.custom-shape-divider-top-1595963035 .shape-fill {
    fill: #171B2C;
}

.about-text{
  font-size: 2em;
  font-weight: 200;
}
</style>
