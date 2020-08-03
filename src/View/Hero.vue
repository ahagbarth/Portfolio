<template>
  <section class="hero is-fullheight background">
     <div class="hero-head">
    <header class="navbar " >
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" style="color:#ffffff">
            Alexander Hagbarth
          </a>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item active">
              About
            </a>
            <a class="navbar-item test">
              Projects
            </a>
            <a class="navbar-item">
              Contact Me
            </a>
            <a class="navbar-item cv-download">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>

    <div class="hero-body">
      <div class="container">
        <div class="columns">
            <div class="column is-two-thirds">
              <div class="wrapper">
                <h1 class="top montserrat uppercase bold ls-xlarge">
                  Hi, I am<br>
                  <span class="montserrat name ls-xlarge bold" style="color:#1FF2FF">Alex</span><br>
                  <span class="bottom montserrat ls-xlarge bold">A Fullstack Software Developer<span class="fullstop">.</span></span>
                  </h1>
              </div>
            </div>
            <div class="column">
              <div class="image-container">
                  <a ><div class="profile-image"><img src="https://via.placeholder.com/300/171B2C" alt=""></div></a>
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
  .navbar{
    height: 4rem;
  }
  .background {
        background-color: #171B2C;
      }
  .navbar-item {
    color: white;
    margin: 1rem;
  }
  .navbar-item:hover {
    color: #1FF2FF;
    background-color: #171B2C;
    border-bottom: 0.125rem solid #1FF2FF;
  }
  .h1{
    line-height: 1;
    margin-top: 0;
    color: #fff;
    display: inline-block;
    position: relative;
  }
  .top {
  font-size: 2rem; /* 36 / 18 = 2 */
  margin-bottom: 0.825rem;
}
.bottom {
  font-size: 1.16667rem; /* 21 / 18 = 1.1667 */
  margin-bottom: 1.41429rem;
}

.image-container{
    display:flex;
    place-content:center

}

.profile-image{
  border: 6px solid #1FF2FF;
  border-radius: 5px;
  height: 312.5px;
  width: 312.5px;
}
.lato{font-family: 'Lato'}
.ls-medium{letter-spacing: 4px;}
.ls-xlarge{letter-spacing: 12px;}
.thin{font-weight: 100;}
.bold{font-weight: 700;}
.uppercase{text-transform: uppercase;}
.wrapper{
  position: relative;
  text-align: center;
  color: white;
}

/* Full Stop animation */
@keyframes fadeIn {
  from { opacity: 0;}
}

.fullstop{
    animation: fadeIn 1s infinite alternate

}
.name {
  font-size: 8rem; /* 117 / 18 = 6.5 */
  margin-bottom: 0.3rem;
}
.cv-download{
  border: 3px solid #1FF2FF;
  color: #1FF2FF;
  border-radius: 10px;
}
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
</style>
