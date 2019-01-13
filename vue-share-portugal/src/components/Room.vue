<template>
  <div class="wall" v-bind:style="backgroundCss + wallColor">
    <img src="static/quadroCortica.svg" alt="Computer Man" style="width:650px;height:650px;position:absolute;top:5%;right:5%;">
    <p class="bio">
      <b>{{ userName }}</b>
      <br><br> {{ userBio }}
    </p>
    <div class="rectangle"></div>
    <img :src="frameImage" alt="Smiley face" class="frame">
    <div class="table" v-bind:style="backgroundCss + tableColor"></div>
    <div v-if="workshop" class="activity" v-bind:style="style1">
      <p class="activityDescription">
        <b>{{ workshopName }}</b>
      </p>
      <img :src="workshopImageLink" alt="Smiley face" class="workshopImage">
    </div>
    <!-- <h1>Photo Id:</h1>   -->
    <!-- <img :src="image1.thumbnailUrl" id="img1"> -->
  </div>
</template>

<script>
  import axios from "axios";
  
  export default {
    name: "Room",
  
    data() {
      return {
        style1: "",
        userName: "",
        userBio: "",
        workshop: "",
        workshopName: "",
        workshopImageLink: "",
        wallColor: "",
        tableColor: "",
        backgroundCss: "background-color :"
      };
    },
    created() {
      this.baseUrl = "http://localhost:3000/locals/";
      this.roomstyleUrl = "http://localhost:3000/roomstyle/";
      this.id = this.$route.params._id;
  
      //Check for roomstyle id for local id
      var vm = this;
      axios.get(this.roomstyleUrl).then(function(response) {
        var res = response.data.roomstyles;
        for (var i in response.data.roomstyles) {
          if (res[i].local === vm.id) {
            vm.roomstyleId = res[i]._id;
          }
        }
        getstyle(vm);
      });
  
      //Pull local roomstyle
      function getstyle(vm) {
        axios
          .get(vm.roomstyleUrl + vm.roomstyleId)
          .then(
            response => (
              (vm.wallColor = response.data.roomstyle.wallColor),
              (vm.tableColor = response.data.roomstyle.tableColor),
              (vm.frameImage = response.data.roomstyle.frameImage)
            )
          );
      }
  
      axios
        .get(this.baseUrl + this.id)
        .then(
          response => (
            (this.userName = response.data.local.name),
            (this.userBio = response.data.local.aboutMe)
          )
        );
    },
  
    mounted() {
  
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wall {
    /* background-color: #C9C39B; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .bio {
    width: 180px;
    height: 248px;
    position: absolute;
    top: 12%;
    left: 61%;
    -ms-transform: rotate(-11deg);
    /* IE 9 */
    -webkit-transform: rotate(-11deg);
    /* Safari 3-8 */
    transform: rotate(-11deg);
    word-wrap: break-word;
    text-align: left;
    overflow: hidden;
  }
  
  .rectangle {
    height: 30px;
    width: 450px;
    position: absolute;
    top: 28%;
    left: 3%;
    background-color: white;
  }
  
  .table {
    height: 170px;
    width: 100%;
    position: absolute;
    bottom: 0%;
    left: 0px;
    /* background-color: brown; */
  }
  
  .frame {
    height: 500px;
    width: 330px;
    position: absolute;
    top: 9%;
    left: 33%;
    border-style: solid;
    border-width: 15px;
    border-color: black;
    object-fit: cover;
  }
  
  .activity {
    height: 250px;
    width: 200px;
    position: absolute;
    top: 40%;
    right: 10%;
    background-color: blanchedalmond;
  }
  
  .activityDescription {
    width: 180px;
    height: 248px;
    position: absolute;
    top: 12%;
    right: 8%;
    word-wrap: break-word;
    text-align: center;
    overflow: hidden;
  }
  
  .workshopImage {
    height: 75px;
    width: 150px;
    position: absolute;
    top: 50%;
    right: 12%;
    object-fit: cover;
  }
</style>
