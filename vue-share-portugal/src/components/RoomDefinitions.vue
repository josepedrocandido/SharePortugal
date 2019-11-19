<style>
@import '../css/base.css';
@import '../css/homePage.css';
@import '../css/colors.css';
@import '../css/topBar.css';
@import '../css/popup.css';
@import '../css/room.css';
@import '../css/roomdefs.css';
</style>

<template>
  <div>
    <div v-if="room === 'room2'">
      <div class="rdwall" v-bind:style="backgroundCss + wallColor"></div>
      <div v-if="picked === 'One'" class="rdbackgroundRoom2"></div>
      <div v-if="picked === 'Two'" class="rdbackgroundRoom2Inverted"></div>

      <div class="rdvinil"></div>
      <div class="rdmoldure">
        <div class="rdframeBorder2">
          <img :src="frameImage" class="rdframe2">
        </div>
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
          <p class="h5">
            <b>Type Of Room</b>
          </p>
          <br>

          <button type="button" class="btn btn-outline-primary" v-on:click="room1">Type 1</button>
          <button type="button" class="btn btn-primary">Type 2</button>

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
          <div v-on:click="mudarPadrao" class="rdpadrao1">
            <img src="/static/room2Padrao1.png">
          </div>

          <div v-on:click="mudarPadrao2" class="rdpadrao22">
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
        <div class="rdworkshopMoldure">
            <div class="rdworkshopDiv2">
              <p>
                <b>{{ this.activityName }}</b>
              </p>
              <img :src="activityPicture" class="rdWsPicture2">
              <br>
              <br> 
            </div>
        </div>
      </div>
    </div>

    <!-- ------------------------------------------------------------------------------------------------ -->
    <div v-if="room === 'room1'">
      <div class="rdwall" v-bind:style="backgroundCss + wallColor"></div>
      <div class="rdbackground"></div>
      <div class="rdroomWall"></div>
      <!-- <div class="padrao"></div> -->

      <div v-if="picked === 'One'" class="rdpadrao"></div>
      <div v-if="picked === 'Two'" class="rdpadrao2"></div>

      <div class="rdimageFrame">
        <div class="rdframeBorder">
          <img :src="frameImage" class="rdframe">
        </div>
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
          <button type="button" class="btn btn-primary">Type 1</button>
          <button type="button" class="btn btn-outline-primary" v-on:click="room2">Type 2</button>
          
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
          <div v-on:click="padrao1" class="rdpadrao1">
            <img src="/static/padrao2.png">
          </div>

          <div v-on:click="padrao2" class="rdpadrao22">
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
        <img class="rdwsPaper" src="/static/workshopPaper.png">
        <div class="rdworkshopDiv">
          <p>
            <b>{{ this.activityName }}</b>
          </p>
          <img :src="activityPicture" class="rdWsPicture">
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
import {
    rootLink
} from '../../src/main.js';

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
      axios.post("http://shareportugal.m-iti.org/api/activities", {
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
    this.baseUrl = "http://shareportugal.m-iti.org/api/locals/";
    this.roomstyleUrl = "http://shareportugal.m-iti.org/api/roomstyle/";
    this.activityUrl = "http://shareportugal.m-iti.org/api/activities/";
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
      console.log("vm.id = " + vm.id);
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
