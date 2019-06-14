<template>
  <div class="wall" v-bind:style="backgroundCss + wallColor">
    <!-- <p>
      {{ token }}
      <br> {{ roomstyleId }}
      <br> {{ id }}
    </p>-->
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox">
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li></li>
          <li>
            <img class="madeira" src="/static/Illustrator Files/profile.png">
            <h4>Personal Information</h4>
          </li><br>
          <li>
            <img class="madeira" src="/static/Illustrator Files/room.png">
            <h4>Room Customization</h4>
          </li><br>
          <li>
            <img class="madeira" src="/static/Illustrator Files/activities.png">
            <h4>My Places & Activities</h4>
          </li>
        </ul>
      </div>
    </nav>
    <!-- <img
      src="static/quadroCortica.svg"
      alt="activityFrame"
      style="width:650px;height:650px;position:absolute;top:5%;right:5%;z-index: -1;"
    > -->
    <!-- <p class="bio">
      <b>{{ userName }}</b>
      <br>
      <br>
      {{ userBio }}
    </p> -->
    <!-- <div v-if="workshop" class="activity" v-bind:style="style1">
      <p class="activityDescription">
        <b>{{ workshopName }}</b>
      </p>
      <img :src="workshopImageLink" alt="Smiley face" class="workshopImage">
    </div>
    <div>
      <img :src="frameImage" alt="localFrame" class="frame">
      <button v-on:click="frameDefs = true">Change photo</button>
    </div>
    <div class="table" v-bind:style="backgroundCss + tableColor"></div>
    <div class="shelf"></div>
    <div v-if="frameDefs" class="frameDefs">
      <input type="text" name="frameImage" v-model="frameImage" placeholder="New link">
      <button type="button" @click.stop.prevent="submitFrameLink()">Submit</button>
      <div>
        <swatches v-model="wallColor"/>
        <button type="button" @click.stop.prevent="submitWallColorChange()">Submit</button>
      </div>
    </div> -->
  </div>
</template>








<script>
import axios from "axios";
import Swatches from "vue-swatches";

// Import the styles too, globally
import "vue-swatches/dist/vue-swatches.min.css";

export default {
  name: "RoomDefinitions",
  components: {
    Swatches
  }, // window.VueSwatches.default - from CDN

  data() {
    return {
      style1: "",
      userName: "",
      userBio: "",
      workshop: "",
      workshopName: "",
      workshopImageLink: "",
      wallColor: "",
      frameImage: "",
      tableColor: "",
      roomstyleId: "",
      frameDefs: false,
      frameLink: "",
      // color: '#BDC3C8',
      backgroundCss: "background-color :"
    };
  },

  methods: {
    //Change roomstyle data in database
    submitFrameLink() {
      var vm = this;
      axios.patch(this.roomstyleUrl + this.roomstyleId, [
        {
          propName: "frameImage",
          value: vm.frameImage
        }
      ]);
    },

    submitWallColorChange() {
      var vm = this;
      axios.patch(this.roomstyleUrl + this.roomstyleId, [
        {
          propName: "wallColor",
          value: vm.wallColor
        }
      ]);
    }
  },

  created() {
    this.baseUrl = "http://shareportugal.m-iti.org/api/locals/";
    this.roomstyleUrl = "http://shareportugal.m-iti.org/api/roomstyle/";
    this.id = this.$route.params._id;
    this.token = this.$route.params.token;

    //Pull local personal info
    axios
      .get(this.baseUrl + this.id)
      .then(
        response => (
          (this.userName = response.data.local.name),
          (this.userBio = response.data.local.aboutMe)
        )
      );

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
  },

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.wall {
  /* background-color: #C9C39B; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
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
  z-index: -1;
}

.shelf {
  height: 30px;
  width: 450px;
  position: absolute;
  top: 28%;
  left: 3%;
  background-color: white;
  z-index: -1;
}

.table {
  height: 170px;
  width: 100%;
  position: absolute;
  bottom: 0%;
  left: 0px;
  z-index: -1;
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
  z-index: -1;
}

.activity {
  height: 250px;
  width: 200px;
  position: absolute;
  top: 40%;
  right: 10%;
  background-color: blanchedalmond;
  z-index: -1;
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
  z-index: -1;
}

.workshopImage {
  height: 75px;
  width: 150px;
  position: absolute;
  top: 50%;
  right: 12%;
  object-fit: cover;
  z-index: -1;
}

.frameDefs {
  width: 900px;
  height: 400px;
  background-color: white;
  opacity: 0.95;
  margin: auto;
  margin-top: 100px;
  text-align: center;
  border-radius: 30px;
  z-index: 2;
}

#menuToggle {
  display: block;
  position: absolute;
  top: 50px;
  left: 3%;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: white;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: fixed;
  top: 3%;
  left: 1%;
  width: 600px;
  height: 550px;
  /* padding: 50px; */
  /* padding-top: 125px; */
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-200%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  border-radius: 20px;
  opacity: 0.9;
}

/* #menu li
{
  padding: 10px 0;
  font-size: 22px;
} */

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul {
  transform: none;
}

.madeira {
  position: relative;
  margin-right: 30px;
  float: left;
  width: 100px;
  height: 100px;
}

h4 {
  position: relative;
  padding-top: 30px;
}

li {
  padding-top: 50px;
}
</style>
