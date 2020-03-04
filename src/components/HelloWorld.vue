<template>
  <!-- Photo Grid -->
  <div>
    <div class="w3-row">
      <div class="w3-third">
        <img src="/assets/about1.jpg" style="width:100%" class="Photos" @click.stop="dialog1 = true">
      <v-dialog v-model="dialog1" max-width="1000">
      <v-card>
        <img src="/assets/about1.jpg" style="width: 100%; padding: 15px;">
        <v-card-title class="headline">GRATING</v-card-title>
        <v-card-text>
          A grating is any regularly spaced collection of essentially identical, parallel, elongated elements. Gratings usually consist of a single set of elongated elements, but can consist of two sets, in which case the second set is usually perpendicular to the first. When the two sets are perpendicular, this is also known as a grid or a mesh. 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
        <img src="/assets/mainPage.jpg" style="width:100%" class="Photos" @click.stop="dialog2=true">
        <v-dialog v-model="dialog2" max-width="1000">
          <v-card>
            <img src="/assets/mainPage.jpg" style="width: 100%; padding: 15px;">
            <v-card-title class="headline">SUNSET ON THE BRIDGE</v-card-title>
            <v-card-text>
             Neihu, Taipei 2019
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <img src="/assets/mountainView.jpg" style="width:100%" class="Photos" @click.stop="dialog3=true">
        <v-dialog v-model="dialog3" max-width="1000">
          <v-card>
            <img src="/assets/mountainView.jpg" style="width: 100%; padding: 15px;">
            <v-card-title class="headline">Vernal Fall Trail</v-card-title>
            <v-card-text>
             Yosemite Village, California, 2019
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="w3-third">
        <img src="/assets/sf1.jpg" style="width:100%" class="Photos" @click.stop="dialog4=true">
        <v-dialog v-model="dialog4" max-width="1000">
          <v-card>
            <img src="/assets/sf1.jpg" style="width: 100%; padding: 15px;">
            <v-card-title class="headline">TWIN PEAKS</v-card-title>
            <v-card-text>
             San Francisco, California, 2019
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <img src="/assets/sf2.jpg" style="width:100%" class="Photos" @click.stop="dialog5=true">
        <v-dialog v-model="dialog5" max-width="1000">
          <v-card>
            <img src="/assets/sf2.jpg" style="width: 100%; padding: 15px;">
            <v-card-title class="headline">AIR SHOW</v-card-title>
            <v-card-text>
             Annual air show performed by the Blue Eagles at Pier39, San Francisco, California, 2019
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body">
            <p>Some text in the modal.</p>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'HelloWorld',

    data() {
      return {
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,

      };
    }



  }
</script>