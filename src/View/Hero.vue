<template>
  <div class="hero is-fullheight background" id="home">
    <div class="bubble-test">
    <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
   <div class="bubble"></div>
    </div>
     <div class="hero-head">
  </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
            <div class="column">
              <div class="wrapper">
                <h1 class="top montserrat uppercase bold ls-xlarge">
                  Hello, I am
                  <span style="color:#1FF2FF">Alex</span><br>
                  <span class="bottom montserrat ls-xlarge bold">A Fullstack Software Developer<span class="fullstop">.</span></span>
                  </h1>
              </div>
            </div>
            <!-- <div class="column">
              <div class="image-container">
                  <a ><div class="profile-image"><img src="https://via.placeholder.com/300/171B2C" alt=""></div></a>
              </div>
            </div> -->
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1597587311">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
      </div>
    </div>
  </div>
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
@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}
@keyframes typing { from { width: 0; } }
.background {
    position: relative;
    top: 0;
    left: 0;
    z-index: -2;
    background: #171b2c;
}
.bubble-test{
  max-width:10rem;
  position: relative;
  z-index: -1;
}
.custom-shape-divider-bottom-1597587311 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}
.custom-shape-divider-bottom-1597587311 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 81px;
    transform: rotateY(180deg);
}
.custom-shape-divider-bottom-1597587311 .shape-fill {
    fill: #fafafa;
}
.background .bubble {
    z-index: -200;
    width: 35vmin;
    height: 35vmin;
    border-radius: 35vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.background .bubble:nth-child(0) {
    color: #1ff2ff;
    top: 29%;
    left: 94%;
    animation-duration: 10s;
    animation-delay: -45s;
    transform-origin: -2vw -15vh;
    box-shadow: 70vmin 0 9.047429213664547vmin currentColor;
}
.background .bubble:nth-child(1) {
    color: #013475;
    top: 8%;
    left: 85%;
    animation-duration: 28s;
    animation-delay: -34s;
    transform-origin: -6vw -3vh;
    box-shadow: 70vmin 0 9.40372821168103vmin currentColor;
}
.background .bubble:nth-child(2) {
    color: #013475;
    top: 93%;
    left: 35%;
    animation-duration: 53s;
    animation-delay: -49s;
    transform-origin: -10vw -2vh;
    box-shadow: -70vmin 0 9.173504949303831vmin currentColor;
}
.background .bubble:nth-child(3) {
    color: #1ff2ff;
    top: 43%;
    left: 41%;
    animation-duration: 52s;
    animation-delay: -7s;
    transform-origin: 9vw -3vh;
    box-shadow: -70vmin 0 8.90891050397937vmin currentColor;
}
.background .bubble:nth-child(4) {
    color: #013475;
    top: 48%;
    left: 28%;
    animation-duration: 17s;
    animation-delay: -22s;
    transform-origin: -3vw -5vh;
    box-shadow: -70vmin 0 9.667596169784668vmin currentColor;
}
.background .bubble:nth-child(5) {
    color: #6179e5;
    top: 86%;
    left: 94%;
    animation-duration: 23s;
    animation-delay: -28s;
    transform-origin: -22vw -1vh;
    box-shadow: 70vmin 0 9.548108544412324vmin currentColor;
}
.background .bubble:nth-child(6) {
    color: #013475;
    top: 50%;
    left: 33%;
    animation-duration: 21s;
    animation-delay: -16s;
    transform-origin: 25vw -23vh;
    box-shadow: -70vmin 0 8.993000961696579vmin currentColor;
}
.background .bubble:nth-child(7) {
    color: #1ff2ff;
    top: 65%;
    left: 48%;
    animation-duration: 29s;
    animation-delay: -9s;
    transform-origin: -8vw 5vh;
    box-shadow: -70vmin 0 9.49682253423909vmin currentColor;
}
.background .bubble:nth-child(8) {
    color: #6179e5;
    top: 98%;
    left: 73%;
    animation-duration: 17s;
    animation-delay: -3s;
    transform-origin: -18vw 13vh;
    box-shadow: -70vmin 0 9.130926341021338vmin currentColor;
}
.background .bubble:nth-child(9) {
    color: #1ff2ff;
    top: 16%;
    left: 76%;
    animation-duration: 29s;
    animation-delay: -46s;
    transform-origin: -11vw 14vh;
    box-shadow: 70vmin 0 9.642285869331939vmin currentColor;
}
.background .bubble:nth-child(10) {
    color: #6179e5;
    top: 35%;
    left: 49%;
    animation-duration: 36s;
    animation-delay: -47s;
    transform-origin: -15vw -12vh;
    box-shadow: -70vmin 0 9.432237713591132vmin currentColor;
}
.background .bubble:nth-child(11) {
    color: #013475;
    top: 29%;
    left: 88%;
    animation-duration: 50s;
    animation-delay: -39s;
    transform-origin: 13vw -13vh;
    box-shadow: -70vmin 0 8.799331421263235vmin currentColor;
}
.background .bubble:nth-child(12) {
    color: #6179e5;
    top: 58%;
    left: 91%;
    animation-duration: 16s;
    animation-delay: -14s;
    transform-origin: 9vw -20vh;
    box-shadow: -70vmin 0 8.771255695042592vmin currentColor;
}
.background .bubble:nth-child(13) {
    color: #013475;
    top: 68%;
    left: 45%;
    animation-duration: 39s;
    animation-delay: -8s;
    transform-origin: -11vw -15vh;
    box-shadow: -70vmin 0 8.919892355008265vmin currentColor;
}
.background .bubble:nth-child(14) {
    color: #013475;
    top: 3%;
    left: 9%;
    animation-duration: 43s;
    animation-delay: -27s;
    transform-origin: 20vw 6vh;
    box-shadow: 70vmin 0 9.351938353967698vmin currentColor;
}
.background .bubble:nth-child(15) {
    color: #1ff2ff;
    top: 53%;
    left: 38%;
    animation-duration: 22s;
    animation-delay: -22s;
    transform-origin: -20vw -6vh;
    box-shadow: 70vmin 0 8.923738526538475vmin currentColor;
}
.background .bubble:nth-child(16) {
    color: #1ff2ff;
    top: 79%;
    left: 98%;
    animation-duration: 33s;
    animation-delay: -12s;
    transform-origin: 16vw -9vh;
    box-shadow: -70vmin 0 9.398607519285434vmin currentColor;
}
.background .bubble:nth-child(17) {
    color: #6179e5;
    top: 16%;
    left: 31%;
    animation-duration: 15s;
    animation-delay: -29s;
    transform-origin: 12vw -10vh;
    box-shadow: -70vmin 0 9.028408256233183vmin currentColor;
}
.background .bubble:nth-child(18) {
    color: #1ff2ff;
    top: 61%;
    left: 29%;
    animation-duration: 12s;
    animation-delay: -43s;
    transform-origin: 6vw -19vh;
    box-shadow: 70vmin 0 9.617670818258167vmin currentColor;
}
.background .bubble:nth-child(19) {
    color: #6179e5;
    top: 83%;
    left: 99%;
    animation-duration: 41s;
    animation-delay: -4s;
    transform-origin: 17vw 9vh;
    box-shadow: 70vmin 0 9.234520675178427vmin currentColor;
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
  font-size: 3rem; /* 36 / 18 = 2 */
  margin-bottom: 0.825rem;
}
.bottom {
  font-size: 2rem; /* 21 / 18 = 1.1667 */
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
  display: flex;
  margin: 1rem;
  place-content: left;
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
