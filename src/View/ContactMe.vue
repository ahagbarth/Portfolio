<template>
  <section class="hero is-medium contact-me">
    <div style="position:relative">
     <div class="custom-shape-divider-top-1596664284">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
          </svg>
      </div>
      <div class="hero-body">
        <div class="container form-body">
          <div class="form">
             <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="e.g Alex Smith">
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button">
                    Send message
                  </button>
                </div>
              </div>
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
  background-color: #D3D3D3
}
.form-body{
  display: flex;
  place-content: center;
  width: 50%;
}
.custom-shape-divider-top-1596664284 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}
.form{
  width: 50%
}
.custom-shape-divider-top-1596664284 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 47px;
}

.custom-shape-divider-top-1596664284 .shape-fill {
    fill: #FAFAFA;
}
.button{
  background-color:#012475;
  color: white
}
</style>
