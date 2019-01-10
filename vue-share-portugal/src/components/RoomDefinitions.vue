<template>

  <div class="wall" v-bind:style="wallColor">
    <p>Welcome to your room user:<b> {{ token }} <br><br>{{ id }}</b></p>
    <img
      src="static/quadroCortica.svg"
      alt="Computer Man"
      style="width:650px;height:650px;position:absolute;top:5%;right:5%;"
    >
    <p class="bio">
      <b>{{ userName }}</b>
      <br><br>
      {{ userBio }}
    </p>
    <div class="rectangle"></div>
    <img :src="framePath" alt="Smiley face" class="frame">
    <div class="table" v-bind:style="tableColor"></div>
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
  name: "RoomDefinitions",

  data() {
    return {
      style1: "",
      userName: "",
      userBio: "",
      framePath: "",
      workshop: "",
      workshopName: "",
      workshopImageLink: "",
      wallColor: "",
      tableColor: ""
    };
  },
  created() {},

  mounted() {
    this.baseUrl = "http://localhost:3000/locals/";
    this.id = this.$route.params._id;
    this.token = this.$route.params.token;


    axios
      .get("static/styletest.json")
      .then(
        response => (
          (this.style1 = response.data.stylePart),
          (this.framePath = response.data.frameImage.frameLink),
          (this.wallColor = response.data.wallColor),
          (this.tableColor = response.data.tableColor),
          (this.workshop = response.data.workshopActivity),
          (this.workshopName = response.data.workshopActivity.name),
          (this.workshopImageLink = response.data.workshopActivity.photo)
        )
      );

    axios
      .get(this.baseUrl + this.id)
      .then(
        response => (
          (this.userName = response.data.local.name),
          (this.userBio = response.data.local.aboutMe)
        )
      );
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
  -ms-transform: rotate(-11deg); /* IE 9 */
  -webkit-transform: rotate(-11deg); /* Safari 3-8 */
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
