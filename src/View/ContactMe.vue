<template>
  <section class="hero is-medium contact-me" id="contact">
    <div style="position:relative">
     <div class="custom-shape-divider-top-1596664284">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
          </svg>
      </div>
      <div class="hero-body">
        <div class="container form-body">
          <form class="contact-form" @submit.prevent="sendEmail">
            <div style="display:flex; place-content:center">
            <div class="form" @submit.prevent="sendEmail">
              <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="e.g Alex Smith" name="from_name">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" name="from_email">
                  </div>
                </div>
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea class="textarea" placeholder="Textarea"  name="message"></textarea>
                  </div>
                </div>
                <div class="field" style="display:flex;place-content:center">
                  <div class="control">
                    <button class="button"  type="submit" value="Send">
                      Send message
                    </button>
                  </div>
                </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'Hero',
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('gmail', 'portfolio', e.target, 'user_ifVism3xs8aLPVEZw3BpW')
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text)
        }, (error) => {
          console.log('FAILED...', error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-me{
  background-color: #F0F3F5
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
