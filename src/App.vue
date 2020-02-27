<template>
  <v-app>
    <!-- !PAGE CONTENT! -->
    <div class="w3-content" style="max-width:1500px">

      <!-- Header -->
      <header class="w3-container w3-xlarge w3-padding-24">
        <a href="#" class="w3-left w3-button w3-white">MY ART</a>
        <a href="#about" class="w3-right w3-button w3-white">About</a>
      </header>

      <!-- Photo Grid -->
      <div class="w3-row">
        <div class="w3-third">
          <img src="/assets/about1.jpg" style="width:100%" class="Photos">
          <img src="/assets/mainPage.jpg" style="width:100%" class="Photos">
          <img src="/assets/mountainView.jpg" style="width:100%" class="Photos">
        </div>
        <div class="w3-third">
          <img src="/assets/sf1.jpg" style="width:100%" class="Photos">
          <img src="/assets/sf2.jpg" style="width:100%" class="Photos">
          <img src="/assets/bw5.jpg" style="width:100%" class="Photos">
        </div>
        <div class="w3-third">
          <img src="/assets/bw1.jpg" style="width:100%" class="Photos">
          <img src="/assets/bw4.jpg" style="width:100%" class="Photos">
          <img src="/assets/bw3.jpg" style="width:100%" class="Photos">
        </div>
      </div>

      <div class="w3-row">
        <div class="w3-third">
          <img src="/assets/bw6.jpg" style="width:100%" class="Photos">
        </div>
        <div class="w3-third">
          <img src="/assets/bw7.jpg" style="width:100%" class="Photos">
        </div>
        <div class="w3-third">
          <img src="/assets/bw8.jpg" style="width:100%" class="Photos">
        </div>
      </div>

      <HelloWorld />

      <!-- End Page Content -->
    </div>

    <!-- Footer / About Section -->
    <footer class="w3-light-grey w3-padding-64 w3-center" id="about">
      <h2>About</h2>
      <img src="/assets/pf.jpg" class="w3-image w3-padding-32" width="300" height="300">
      <form style="margin:auto;width:60%" action="/action_page.php" target="_blank">
        <p>Just me, myself and I, LMFAO.</p>
        <p class="w3-large w3-text-indigo">Do not hesitate to contact me!</p>
        <div class="w3-section">
          <label><b>Name</b></label>
          <input class="w3-input w3-border" type="text" required name="Name">
        </div>
        <div class="w3-section">
          <label><b>Email</b></label>
          <input class="w3-input w3-border" type="text" required name="Email">
        </div>
        <div class="w3-section">
          <label><b>Message</b></label>
          <input class="w3-input w3-border" required name="Message">
        </div>
        <button type="submit" class="w3-button w3-block w3-gray">Send</button>
      </form>
      <br>
      <v-footer>
        <v-card-text class="w3-dark-grey py-2 white--text text-center">
          <v-icon>{{copyRight}}</v-icon>
          {{ new Date().getFullYear() }} —
          <strong>Alexander Pan</strong>
        </v-card-text>
      </v-footer>
    </footer>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld';
  import { mdiCopyright } from '@mdi/js';

  export default {
    name: 'App',

    components: {
      HelloWorld,
    },

    data() {
      return {
        copyRight: mdiCopyright,
      };
    }
  };
</script>
<style>
  body {
    font-family: "Raleway", Arial, sans-serif
  }

  .w3-row img {
    margin-bottom: -8px
  }

  .Photos>{
    z-index: 1;
  }

  .Photos:hover{
    transition: all 500ms ease-in;
    filter: grayscale(1);
    opacity: 0.5;
  }

  .Photos {
    overflow: hidden;
  }
</style>