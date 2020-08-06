<template>
  <section class="hero contact-me">
    <div style="position:relative">
      <div class="hero-body">
        <div class="container">
          <div style="display:flex; place-content:center">
            <p class="buttons">
             <button class="button is-small">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
              </span>
            </button>
            <button class="button is-small">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x"/>
              </span>
            </button>
            <button class="button is-small">
              <span class="icon">
                <font-awesome-icon :icon="['fab', 'facebook-f']" size="2x"/>
              </span>
            </button>
            </p>
          </div>
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
.contact-me{
  background-color: #171B2C
}
.button{
  margin: 1rem;
  transition: 0.3s;
}
.button:hover{
  color: white;
  background-color:#012475;
-webkit-box-shadow: 0px 0px 15px 2px rgba(31,242,255,1);
-moz-box-shadow: 0px 0px 15px 2px rgba(31,242,255,1);
box-shadow: 0px 0px 15px 2px rgba(31,242,255,1);
}
</style>
