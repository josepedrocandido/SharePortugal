<template>
  <div>
    <div v-if="room === 'room2'">
      <div class="wall" v-bind:style="backgroundCss + wallColor"></div>
      <div v-if="picked === 'One'" class="backgroundRoom2"></div>
      <div v-if="picked === 'Two'" class="backgroundRoom2Inverted"></div>
      <div class="frameBorder2">
        <img :src="frameImage" class="frame2">
      </div>
      <div class="vinil"></div>

      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox">
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li></li>
            <li v-on:click="profileAction">
              <img class="madeira" src="/static/Illustrator Files/profile.png">
              <h4>Personal Information</h4>
            </li>
            <br>
            <li v-on:click="roomAction">
              <img class="madeira" src="/static/Illustrator Files/room.png">
              <h4>Room Customization</h4>
            </li>
            <br>
            <li v-on:click="activityAction">
              <img class="madeira" src="/static/Illustrator Files/activities.png">
              <h4>Create Activity</h4>
            </li>
          </ul>
        </div>
      </nav>

      <div v-if="this.profileDefinitionsOn" id="profileDefinitions">
        <form>
          <div class="text-center">
            <img :src="userPicture" class="profileImage">
          </div>
          <br>
          <div class="form-group">
            <label for="exampleInputEmail1">Picture Link</label>
            <input
              type="text"
              class="form-control"
              v-model="userPicture"
              id="exampleInputEmail1"
              placeholder="Picture Link"
            >
          </div>
          <hr>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              v-model="userName"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="New FirstName LastName"
            >
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              v-model="userEmail"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="New email address"
            >
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Biography</label>
            <textarea class="form-control" rows="2" v-model="userBio"></textarea>
          </div>
          <button
            type="button"
            class="btn btn-dark"
            @click.stop.prevent="closeProfileDefinitions()"
          >Close</button>

          <button
            type="button"
            class="btn btn-success"
            @click.stop.prevent="submitProfileDefinitions()"
          >Submit</button>
        </form>
      </div>

      <div v-if="this.roomDefinitionsOn" id="roomDefinitions">
        <div class="row-centered">
          <p class="h5">
            <b>Type Of Room</b>
          </p>
          <br>
          <div v-on:click="room1" class="room1"></div>

          <div v-on:click="room2" class="room2"></div>

          <br>
          <br>

          <p class="h5">
            <b>Wall Color</b>
          </p>
          <br>
          <swatches v-model="wallColor"/>
          <br>
          <hr>

          <p class="h5">
            <b>Wall Pattern</b>
          </p>
          <br>
          <div v-on:click="mudarPadrao" class="padrao1">
            <img src="/static/room2Padrao1.png">
          </div>

          <div v-on:click="mudarPadrao2" class="padrao22">
            <img src="/static/room2Padrao2.png">
          </div>

          <br>
          <br>

          <br>
          <hr>
          <br>
          <p class="h5">
            <b>Frame Link</b>
          </p>
          <input
            type="text"
            class="form-control"
            v-model="frameImage"
            id="exampleInputEmail1"
            placeholder="Picture Link"
          >
          <br>
          <hr>
          <br>

          <button
            type="button"
            class="btn btn-dark"
            @click.stop.prevent="closeRoomDefinitions()"
          >Close</button>
          <button
            type="button"
            class="btn btn-success"
            @click.stop.prevent="submitRoomChanges()"
          >Submit</button>
        </div>
      </div>

      <div v-if="this.activityDefinitionsOn" id="activityDefinitions">
        <form>
          <div class="text-center">
            <img :src="newActivityPicture" class="profileImage">
          </div>
          <br>
          <div class="form-group">
            <label for="exampleInputEmail1">Activity Picture Link</label>
            <input
              type="text"
              class="form-control"
              v-model="newActivityPicture"
              id="exampleInputEmail1"
              placeholder="Picture Link"
            >
          </div>
          <hr>
          <div class="form-group">
            <label for="exampleInputEmail1">Activity Name</label>
            <input
              type="text"
              class="form-control"
              v-model="newActivityName"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Activity Name"
            >
          </div>
          <div class="row">
            <div class="col-sm">
              <div class="form-group">
                <label for="exampleInputEmail1">Where</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="newActivityWhere"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Where?"
                >
              </div>
            </div>
            <div class="col-sm">
              <div class="form-group">
                <label for="exampleInputEmail1">When</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="newActivityWhen"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="When?"
                >
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Activity Info</label>
            <textarea class="form-control" rows="2" v-model="newActivityInfo"></textarea>
          </div>
          <button
            type="button"
            class="btn btn-dark"
            @click.stop.prevent="closeActivityDefinitions()"
          >Close</button>

          <button
            type="button"
            class="btn btn-success"
            @click.stop.prevent="createActivity()"
          >Submit</button>
        </form>
      </div>

      <div v-if="flag === '1'">
        <!-- <img class="wsPaper" src="/static/workshopPaper.png"> -->
        <div class="workshopDiv2">
          <p>
            <b>{{ this.activityName }}</b>
          </p>
          <img :src="activityPicture" class="WsPicture2">
          <br>
          <br> 
        </div>
      </div>
    </div>

    <!-- ------------------------------------------------------------------------------------------------ -->
    <div v-if="room === 'room1'">
      <div class="wall" v-bind:style="backgroundCss + wallColor"></div>
      <div class="background"></div>
      <div class="roomWall"></div>
      <!-- <div class="padrao"></div> -->

      <div v-if="picked === 'One'" class="padrao"></div>
      <div v-if="picked === 'Two'" class="padrao2"></div>

      <div class="frameBorder">
        <img :src="frameImage" class="frame">
      </div>

      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox">
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li></li>
            <li v-on:click="profileAction">
              <img class="madeira" src="/static/Illustrator Files/profile.png">
              <h4>Personal Information</h4>
            </li>
            <br>
            <li v-on:click="roomAction">
              <img class="madeira" src="/static/Illustrator Files/room.png">
              <h4>Room Customization</h4>
            </li>
            <br>
            <li v-on:click="activityAction">
              <img class="madeira" src="/static/Illustrator Files/activities.png">
              <h4>Create Activity</h4>
            </li>
          </ul>
        </div>
      </nav>

      <div v-if="this.profileDefinitionsOn" id="profileDefinitions">
        <form>
          <div class="text-center">
            <img :src="userPicture" class="profileImage">
          </div>
          <br>
          <div class="form-group">
            <label for="exampleInputEmail1">Picture Link</label>
            <input
              type="text"
              class="form-control"
              v-model="userPicture"
              id="exampleInputEmail1"
              placeholder="Picture Link"
            >
          </div>
          <hr>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              v-model="userName"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="New FirstName LastName"
            >
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              v-model="userEmail"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="New email address"
            >
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Biography</label>
            <textarea class="form-control" rows="2" v-model="userBio"></textarea>
          </div>
          <button
            type="button"
            class="btn btn-dark"
            @click.stop.prevent="closeProfileDefinitions()"
          >Close</button>

          <button
            type="button"
            class="btn btn-success"
            @click.stop.prevent="submitProfileDefinitions()"
          >Submit</button>
        </form>
      </div>

      <div v-if="this.roomDefinitionsOn" id="roomDefinitions">
        <div class="row-centered">
          <!-- --------------------------------------------- -->
          <p class="h5">
            <b>Type Of Room</b>
          </p>
          <br>
          <div v-on:click="room1" class="room1"></div>

          <div v-on:click="room2" class="room2"></div>
          <!-- --------------------------------------------- -->

          <br>
          <br>

          <p class="h5">
            <b>Wall Color</b>
          </p>
          <br>
          <swatches v-model="wallColor"/>
          <br>
          <hr>

          <p class="h5">
            <b>Wall Pattern</b>
          </p>
          <br>
          <div v-on:click="padrao1" class="padrao1">
            <img src="/static/padrao2.png">
          </div>

          <div v-on:click="padrao2" class="padrao22">
            <img src="/static/padrao1.png">
          </div>

          <br>
          <br>

          <br>
          <hr>
          <br>
          <p class="h5">
            <b>Frame Link</b>
          </p>
          <input
            type="text"
            class="form-control"
            v-model="frameImage"
            id="exampleInputEmail1"
            placeholder="Picture Link"
          >
          <br>
          <hr>
          <br>

          <button
            type="button"
            class="btn btn-dark"
            @click.stop.prevent="closeRoomDefinitions()"
          >Close</button>
          <button
            type="button"
            class="btn btn-success"
            @click.stop.prevent="submitRoomChanges()"
          >Submit</button>
        </div>
      </div>

      <div v-if="this.activityDefinitionsOn" id="activityDefinitions">
        <form>
          <div class="text-center">
            <img :src="newActivityPicture" class="profileImage">
          </div>
          <br>
          <div class="form-group">
            <label for="exampleInputEmail1">Activity Picture Link</label>
            <input
              type="text"
              class="form-control"
              v-model="newActivityPicture"
              id="exampleInputEmail1"
              placeholder="Picture Link"
            >
          </div>
          <hr>
          <div class="form-group">
            <label for="exampleInputEmail1">Activity Name</label>
            <input
              type="text"
              class="form-control"
              v-model="newActivityName"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Activity Name"
            >
          </div>
          <div class="row">
            <div class="col-sm">
              <div class="form-group">
                <label for="exampleInputEmail1">Where</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="newActivityWhere"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Where?"
                >
              </div>
            </div>
            <div class="col-sm">
              <div class="form-group">
                <label for="exampleInputEmail1">When</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="newActivityWhen"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="When?"
                >
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Activity Info</label>
            <textarea class="form-control" rows="2" v-model="newActivityInfo"></textarea>
          </div>
          <button
            type="button"
            class="btn btn-dark"
            @click.stop.prevent="closeActivityDefinitions()"
          >Close</button>

          <button
            type="button"
            class="btn btn-success"
            @click.stop.prevent="createActivity()"
          >Submit</button>
        </form>
      </div>

      <div v-if="flag === '1'">
        <img class="wsPaper" src="/static/workshopPaper.png">
        <div class="workshopDiv">
          <p>
            <b>{{ this.activityName }}</b>
          </p>
          <img :src="activityPicture" class="WsPicture">
          <br>
          <br>
        </div>
      </div>
    </div>
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
      userPicture: "",
      userEmail: "",
      userPassword: "",
      workshop: "",
      workshopName: "",
      workshopImageLink: "",
      wallColor: "",
      frameImage: "",
      tableColor: "",
      roomstyleId: "",
      activityId: "",
      activities: "",
      frameDefs: false,
      frameLink: "",
      // color: '#BDC3C8',
      backgroundCss: "background-color :",
      profileDefinitionsOn: false,
      roomDefinitionsOn: false,
      activityDefinitionsOn: false,
      activityPicture: "",
      activityName: "",
      activityWhere: "",
      activityWhen: "",
      activityInfo: "",
      newActivityPicture: "/static/Illustrator Files/activityPicture.png",
      newActivityName: "",
      newActivityWhere: "",
      newActivityWhen: "",
      newActivityInfo: "",
      picked: "One",
      room: "",
      flag: "",
      tipoPadrao: "padraoNormal"
    };
  },

  methods: {
    profileAction: function(event) {
      if (this.profileDefinitionsOn) {
        this.profileDefinitionsOn = false;
      } else this.profileDefinitionsOn = true;
    },

    roomAction: function(event) {
      if (this.roomDefinitionsOn) {
        this.roomDefinitionsOn = false;
      } else this.roomDefinitionsOn = true;
    },

    activityAction: function(event) {
      if (this.activityDefinitionsOn) {
        this.activityDefinitionsOn = false;
      } else this.activityDefinitionsOn = true;
    },
    padrao1: function(event) {
      this.picked = "One";
    },
    padrao2: function(event) {
      this.picked = "Two";
    },

    room1: function(event) {
      this.room = "room1";
    },
    room2: function(event) {
      this.room = "room2";
    },
    mudarPadrao: function(event) {
      this.picked = "One";
    },
    mudarPadrao2: function(event) {
      this.picked = "Two";
    },
    submitProfileDefinitions() {
      var vm = this;
      axios.patch(this.baseUrl + this.id, [
        {
          propName: "localImage",
          value: vm.userPicture
        },
        {
          propName: "name",
          value: vm.userName
        },
        {
          propName: "email",
          value: vm.userEmail
        },
        {
          propName: "aboutMe",
          value: vm.userBio
        }
      ]);
      this.profileDefinitionsOn = false;
    },

    closeProfileDefinitions() {
      this.profileDefinitionsOn = false;
    },

    closeRoomDefinitions() {
      this.roomDefinitionsOn = false;
    },

    closeActivityDefinitions() {
      this.activityDefinitionsOn = false;
    },

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

    submitRoomChanges() {
      var vm = this;
      axios.patch(this.roomstyleUrl + this.roomstyleId, [
        {
          propName: "wallColor",
          value: vm.wallColor
        },
        {
          propName: "tableColor",
          value: vm.tableColor
        },
        {
          propName: "frameImage",
          value: vm.frameImage
        },
        {
          propName: "wallPattern",
          value: vm.picked
        },
        {
          propName: "roomNumber",
          value: vm.room
        }
      ]);
      this.roomDefinitionsOn = false;
    },

    createActivity() {
      var vm = this;
      axios.post("http://localhost:3000/activities", {
        localId: this.id,
        nameOfActivity: this.newActivityName,
        aboutActivity: this.newActivityInfo,
        activityImage: this.newActivityPicture,
        schedule: this.newActivityWhen,
        where: this.newActivityWhere,
        flag: "1"
      });
      // .then(function(response) {
      //   vm.activityName = response.data.nameOfActivity;
      //   vm.activityInfo = response.data.aboutActivity,
      //   vm.activityPicture = response.data.activityImage,
      //   vm.activityWhen = response.data.schedule,
      //   vm.activityWhere = response.data.where
      // });
      this.activityDefinitionsOn = false;
      window.location.reload();
    }
  },

  created() {
    this.baseUrl = "http://localhost:3000/locals/";
    this.roomstyleUrl = "http://localhost:3000/roomstyle/";
    this.activityUrl = "http://localhost:3000/activities/";
    this.id = this.$route.params._id;
    this.token = this.$route.params.token;

    //Pull local personal info
    axios
      .get(this.baseUrl + this.id)
      .then(
        response => (
          (this.userName = response.data.local.name),
          (this.userBio = response.data.local.aboutMe),
          (this.userPicture = response.data.local.localImage),
          (this.userEmail = response.data.local.email)
        )
      );
    // -----------------------------------------------------------------
    var vm = this;
    axios.get(this.activityUrl).then(function(response) {
      var res = response.data.activities;
      console.log(vm.id);
      for (var i in response.data.activities) {
        if (res[i].local._id === vm.id) {
          vm.activityId = res[i]._id;
        }
      }
      getActivity(vm);
    });

    //Pull local roomstyle
    function getActivity(vm) {
      axios
        .get(vm.activityUrl + vm.activityId)
        .then(
          response => (
            (vm.activityName = response.data.activity.nameOfActivity),
            (vm.activityPicture = response.data.activity.activityImage),
            (vm.flag = response.data.activity.flag)
          )
        );
    }

    // -----------------------------------------------------------------

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
            (vm.frameImage = response.data.roomstyle.frameImage),
            (vm.picked = response.data.roomstyle.wallPattern),
            (vm.room = response.data.roomstyle.roomNumber)
          )
        );
    }
  },

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.room1 {
  position: absolute;
  width: 18%;
  height: 6%;
  top: 5%;
  left: 25%;
  word-wrap: break-word;
  text-align: center;
  overflow: hidden;
  border-style: solid;
  border-color: green;
  border-radius: 10px;
  margin-top: 20px;
}

.room2 {
  position: absolute;
  width: 18%;
  height: 6%;
  top: 5%;
  left: 50%;
  word-wrap: break-word;
  text-align: center;
  overflow: hidden;
  border-style: solid;
  border-color: blue;
  border-radius: 10px;
  margin-top: 20px;
}

.padrao1 {
  position: absolute;
  width: 18%;
  height: 6%;
  top: 40%;
  left: 25%;
  word-wrap: break-word;
  text-align: center;
  overflow: hidden;
  /* border-style: solid;
  border-color: red; */
  border-radius: 10px;
  margin-top: 20px;
}

.padrao22 {
  position: absolute;
  width: 18%;
  height: 6%;
  top: 40%;
  left: 57%;
  word-wrap: break-word;
  text-align: center;
  overflow: hidden;
  /* border-style: solid;
  border-color: green; */
  border-radius: 10px;
  margin-top: 20px;
}

.WsPicture {
  width: 100px;
}

.WsPicture2 {
  width: 50px;
}

.wsPaper {
  position: absolute;
  top: 6%;
  left: 48%;
  width: 11%;
  z-index: -1;
}

.workshopDiv {
  position: absolute;
  width: 80%;
  height: 23%;
  top: 12%;
  left: 13.1%;
  word-wrap: break-word;
  text-align: center;
  overflow: hidden;
  z-index: -1;
  /* border-style: solid;
  border-color: red; */
}

.workshopDiv2 {
  position: absolute;
  width: 9%;
  height: 11%;
  top: 37.6%;
  left: 21.7%;
  word-wrap: break-word;
  text-align: center;
  overflow: hidden;
  z-index: -1;
  /* border-style: solid;
  border-color: red; */
}

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
/* .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: red;
  border-radius: 0%;
} */

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}
.background {
  background-image: url("/static/room.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -999;
}

.backgroundRoom2 {
  background-image: url("/static/room2.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -999;
}

.backgroundRoom2WS {
  background-image: url("/static/room2WS.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -999;
}


.backgroundRoom2Inverted {
  background-image: url("/static/room2Inverted.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -999;
}

.vinil {
  background-image: url("/static/vinis.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0;
}
.roomWall {
  background-image: url("/static/roomWall.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -9999;
}

.padrao {
  background-image: url("/static/padrao.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -9999;
}

.padrao2 {
  background-image: url("/static/padraoInvert.png");
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -9999;
}

.wall {
  /* background-color: #C9C39B; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000000;
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
  position: fixed;
  bottom: 0%;
  width: 100%;
  height: 150px;
  margin: 0px;
  z-index: -1;
}

.frameBorder {
  position: absolute;
  top: 0.8%;
  left: 33.9%;
  height: 26.8%;
  width: 9.7%;
  /* border: 15px solid black; */
  object-fit: cover;
  z-index: -1;
}

.frameBorder2 {
  position: absolute;
  top: 3.3%;
  left: 38%;
  height: 19.7%;
  width: 14.2%;
  /* border: 2px solid red; */
  object-fit: cover;
  z-index: -1;
}

.frameMoldure {
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  border: 25px solid white;
  object-fit: cover;
  z-index: -1;
}
.frame {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}

.frame2 {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  /* border: 2px solid green; */
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
  width: 450px;
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

li:hover {
  opacity: 0.4;
}

#profileDefinitions {
  width: 550px;
  background-color: #ededed;
  opacity: 0.97;
  margin: auto;
  margin-top: 25px;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  z-index: 999999999999999;
}

#roomDefinitions {
  position: fixed;
  bottom: 0%;
  height: 100%;
  right: 0%;
  width: 300px;
  background-color: #ededed;
  opacity: 0.9;
  margin: auto;
  margin-top: 25px;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  z-index: 999999999999999;
}

#activityDefinitions {
  width: 550px;
  background-color: #ededed;
  opacity: 0.97;
  margin: auto;
  margin-top: 25px;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  z-index: 999999999999999;
}

.profileImage {
  width: 125px;
  height: 125px;
}

.presentationArea {
  position: fixed;
  width: 30%;
  height: 70%;
  right: 0%;
  top: 3%;
  /* border: 1px solid yellow; */
}

.bioPaper {
  position: absolute;
  width: 250px;
  height: 300px;
  left: 0%;
  top: 0%;
  /* border: 1px solid pink; */
}

.whitePaper {
  position: absolute;
  width: 250px;
  height: 300px;
  left: 0%;
  top: 0%;
}

#bio {
  position: absolute;
  width: 170px;
  height: 200px;
  top: 15%;
  left: 17%;
  word-wrap: break-word;
  text-align: left;
  overflow: hidden;
  z-index: 2;
}

.photoPaper {
  position: absolute;
  width: 250px;
  height: 300px;
  right: 0%;
  top: 0%;
}

.polaroid {
  position: absolute;
  width: 225px;
  right: 0%;
  top: 0%;
}

.localPic {
  position: absolute;
  width: 152px;
  right: 18%;
  top: 14%;
}

.boardArea {
  position: absolute;
  width: 515px;
  height: 270px;
  left: 0%;
  bottom: 0%;
  /* border: 1px solid pink; */
}

.board {
  position: absolute;
  width: 460px;
  left: 5%;
  bottom: 0%;
}

.boardText {
  position: relative;
  left: 12%;
  color: white;
  font-family: "Papyrus", Times, serif;
  font-size: 25px;
  z-index: 4;
}

.boardText:hover {
  opacity: 0.5;
}
</style>
