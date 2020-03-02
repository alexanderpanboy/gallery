<template>
  <v-app>
    <!-- !PAGE CONTENT! -->
    <div class="w3-content" style="max-width:1500px; background-color:darkslategrey;">

      <!-- Header -->
      <header class="w3-container w3-xlarge w3-padding-24">
        <div class="dropdown">
          <router-link to="/"><a href="#" class="w3-left w3-button w3-white">MY ART</a></router-link>
          <div class="dropdown-content">
            <router-link to="/portrait">Portrait</router-link>
            <router-link to="/scenery">Scenery</router-link>
            <router-link to="/streetsnap">Streetsnap</router-link>
          </div>
        </div>
        <a href="#about" class="w3-right w3-button w3-white">About</a>
      </header>

      <router-view></router-view>
      <!-- End Page Content -->
    </div>

    <!-- Footer / About Section -->
    <footer class=" w3-padding-64 w3-center" style="background-color: darkslategrey;" id="about" >
      <h2>About</h2>
      <img src="/assets/pf.jpg" class="w3-image w3-padding-32" width="300" height="300">
      <form style="margin:auto;width:60%" action="/action_page.php" target="_blank">
        <p>Me, myself and I, LMFAO.</p>
        <p class="w3-large w3-text-white">Do not hesitate to contact me!</p>
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
      <v-footer style="background-color: darkslategrey;">
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
  import { mdiCopyright } from '@mdi/js';

  export default {
    name: 'App',

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

  .Photos> {
    z-index: 1;
  }

  .Photos:hover {
    transition: all 500ms ease-in;
    filter: grayscale(1);
    opacity: 0.5;
  }

  .Photos {
    overflow: hidden;
  }

  .dropbtn {
    background-color: rgb(91, 107, 91);
    color: white;
    padding: 16px;
    font-size: 24px;
    border: none;
    cursor: pointer;
  }


  .dropdown-content {
    display: none;
    margin-top: 55px;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black !important;
    padding: 12px 16px;
    font-size: 18px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>