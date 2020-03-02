<template>
        <!-- Photo Grid -->
        <div>
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

    data: () => ({
     
    }),
    
  }
</script>
