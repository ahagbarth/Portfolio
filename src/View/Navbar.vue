<template>
   <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" style="color:#ffffff"  v-scroll-to="'#home'">
            Alexander Hagbarth
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item active"  v-scroll-to="'#about'">
               <span class="text">About</span>
            </a>
            <a class="navbar-item test"  v-scroll-to="'#project'">
              <span class="text">Projects</span>
            </a>
            <a class="navbar-item"  v-scroll-to="'#contact'">
              <span class="text">Let's Chat</span>
            </a>
            <!-- REMEMBER TO CHANGE THE HREF!!!!!!!!! -->
            <a class="navbar-item cv-download" href="http://127.0.0.1:8080/Alex_CV.pdf" download="Alex_CV.pdf">
              <div class="cv-button">
                <span class="text">Download CV</span>
              </div>
            </a>

          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  background-color: transparent;
}
.navbar-item{
  color:white
}
.navbar-item:hover{
  color: #1ff2ff;
}
.cv-button{
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  color: #1ff2ff;
  transition: all 0.3s ease 0s;
}
.cv-button:hover{
  border-radius: 50px;
  transition: all 0.3s ease 0s;

}
.text{
  margin: 1rem;
}
</style>
