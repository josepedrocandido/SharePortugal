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
  <div v-if="room === 'room1'">
      <div class="roomwall" v-bind:style="backgroundCss + wallColor"></div>
      <div class="roombackground"></div>
      <div class="roomroomWall"></div>
            

      
    <img v-on:click="activePhone" src="/static/phoneNotification.png" class="roomphoneNotification">
      <!-- <div class="padrao"></div> -->

      <div v-if="picked === 'One'" class="roompadrao"></div>
      <div v-if="picked === 'Two'" class="roompadrao2"></div>

      <!-- <transition name="fade">
        
      </transition>
      <transition name="fade">
        
      </transition> -->

      <router-link :to="{name: 'SharePortugal'}">
        <img src="/static/Illustrator Files/back.png" class="back">
      </router-link>

      <div class="roomimageFrame">
        <div class="roomframeBorder">
          <img :src="frameImage" class="roomframe">
        </div>
      </div>

      <div v-on:click="activePhone" class="roomphoneActivated"></div>

      <div v-if="this.phoneOn" class="roomphone">
        
        <div id="roombio">
          <div class="roombioImage">
              <img :src="userPicture" alt="Local Picture" class="roomlocalPic">
          </div>
          <div class="roombioText">
              <p><b>{{ userName }}</b><br>{{ userBio }}</p><br>
              <a :href="this.mailTo + this.userEmail" class="btn btn-success" role="button" aria-pressed="true">Send Email</a><br><br>
              <button type="button" class="btn btn-light" v-on:click="activePhone">Close</button>

          </div>
        </div>
      </div>

      

      <div v-if="flag === '1'">
          <img class="roomwsPaper" src="/static/workshopPaper.png">
          <div v-on:click="activeWS" class="roomworkshopDiv">
            <p><b>{{ this.activityName }}</b></p>
            <img :src="activityPicture" alt="WS" class="roomWsPicture"><br><br>   
          </div>
      </div>

    <div v-if="this.wsOn" class="roomws">
        
        <div id="roomwsArea">
          <div class="roomwsImage">
              <img :src="activityPicture" alt="Local Picture" class="roomlocalPic">
          </div>
          <div class="roomwsText">
              <p><b>Name: </b>{{ activityName }}<br></p>
              <p><b>When: </b>{{ activityWhen }}<br></p>
              <p><b>Where: </b>{{ activityWhere }}<br></p>
              <p><b>Infos: </b>{{ activityInfo }}<br><br></p>
              
              <a :href="this.mailTo + this.userEmail  + this.subject" class="btn btn-success" role="button" aria-pressed="true">Register</a>
              <button type="button" class="btn btn-dark" v-on:click="activeWS">Close</button>

          </div>
        </div>
      </div>
  </div>




    <div v-if="room === 'room2'">
      <div class="roomwall" v-bind:style="backgroundCss + wallColor"></div>
      <div v-if="picked === 'One'" class="roombackgroundRoom2"></div>
      <div v-if="picked === 'Two'" class="roombackgroundRoom2Inverted"></div>
      
    <img v-on:click="activePhone" src="/static/phoneNotification.png" class="phoneNotification2">
        <div class="roomvinil"></div>

              <div class="roommoldure">
        <div class="roomframeBorder2">
          <img :src="frameImage" class="roomframe2">
        </div>
      </div>


      <!-- <div v-if="picked === 'One'" class="padrao"></div>
      <div v-if="picked === 'Two'" class="padrao2"></div> -->

      <router-link :to="{name: 'SharePortugal'}">
        <img src="/static/Illustrator Files/back.png" class="back">
      </router-link>

     

      <div v-on:click="activePhone" class="roomphoneActivated2"></div>

      <div v-if="this.phoneOn" class="roomphone">
        
        <div id="roombio">
          <div class="roombioImage">
              <img :src="userPicture" alt="Local Picture" class="roomlocalPic">
          </div>
          <div class="roombioText">
              <p><b>{{ userName }}</b><br>{{ userBio }}</p><br>
              <a :href="this.mailTo + this.userEmail" class="btn btn-success" role="button" aria-pressed="true">Send Email</a><br><br>
              <button type="button" class="btn btn-light" v-on:click="activePhone">Close</button>

          </div>
        </div>
      </div>

      

      <div v-if="flag === '1'">
        <div v-on:click="activeWS" class="roomworkshopMoldure">
            <div class="roomworkshopDiv2">
              <p>
                <b>{{ this.activityName }}</b>
              </p>
              <img :src="activityPicture" class="roomWsPicture2">
              <br>
              <br> 
            </div>
        </div>
      </div>

    <div v-if="this.wsOn" class="roomws2">
        
        <div id="roomwsArea2">
          <div class="roomwsImage2">
              <img :src="activityPicture" alt="Local Picture" class="roomlocalPic">
          </div>
          <div class="roomwsText2">
              <p><b>Name: </b>{{ activityName }}<br></p>
              <p><b>When: </b>{{ activityWhen }}<br></p>
              <p><b>Where: </b>{{ activityWhere }}<br></p>
              <p><b>Infos: </b>{{ activityInfo }}<br><br></p>
          </div>

          <div class="roomwsButton2">
            <a :href="this.mailTo + this.userEmail  + this.subject" class="btn btn-success" role="button" aria-pressed="true">Register</a>
            <button type="button" class="btn btn-dark" v-on:click="activeWS">Close</button>
          </div>
        </div>
      </div>
  </div>
</div>


</template>

 

   <!-- <div class="shelf"></div> -->

    <!-- <div class="table" v-bind:style="backgroundCss + tableColor"></div> -->
    <!-- <div class="presentationArea">
      <div class="bioPaper">
          <img src="/static/Illustrator Files/bioPaper.png" alt="Biography Paper" class="whitePaper">
          <p id="bio" class="h8"><b>{{ userName }}</b><br>{{ userBio }}</p>
      </div>
      <div class="photoPaper">
      <img src="/static/Illustrator Files/photoPaper.png" alt="Polaroid" class="polaroid">
      <img :src="userPicture" alt="Local Picture" class="localPic">
      </div>
      <div class="boardArea">
      <img src="/static/Illustrator Files/board.png" alt="Polaroid" class="board">
      <a v-on:click="activityAction"><p class="boardText">{{ activityName }}</p></a>
      <p class="boardText"></p>
      <p class="boardText"></p>
      <p class="boardText"></p>
      </div>
    </div> -->
      




    <!-- <div v-if="this.workshopOn" id="workshops">
      <div class="workshop1">
        <img :src="activityPicture" alt="WS" class="workshopPicture">
        <p id="workshopTitle" class="h3">{{ activityName }}</p>
      </div>
      <div class="workshopInfos">
        <p id="infos" class="h5"><b>Name:</b> {{ activityName }}</p><br>
        <p id="infos" class="h5"><b>When:</b> {{ activityWhen }}</p><br>
        <p id="infos" class="h5"><b>Where:</b> {{ activityWhere }}</p><br>
        <p id="infos" class="h5"><b>Infos:</b> {{ activityInfo }}</p>
        <hr><br>
                <button
          type="button"
          class="btn btn-dark"
          @click.stop.prevent="closeWorkshopTab()"
        >Close</button>
      <a :href="this.mailTo + this.userEmail  + this.subject" class="btn btn-success" role="button" aria-pressed="true">Register</a>




      </div>
    </div> -->

    











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
      workshopOn: false,
      activityPicture: "",
      activityName: "",
      activityWhere: "",
      activityWhen: "",
      activityInfo: "",
      mailTo: "mailto:",
      subject: "?subject=Poncha Workshop Register",
      picked: "",
      phoneOn: false,
      wsOn: false,
      room: "",
      flag: "",
      tipoPadrao: "padraoNormal"


    };
  },

  methods: {

    closeWorkshopTab() {
      this.workshopOn = false;
    },


    activityAction: function(event) {

      this.workshopOn = true;
    },

    activePhone: function(event) {
            if (this.phoneOn) {
        this.phoneOn = false;
      } else this.phoneOn = true;
    },

    activeWS: function(event) {
            if (this.wsOn) {
        this.wsOn = false;
      } else this.wsOn = true;
    },



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
            (vm.activityWhen = response.data.activity.schedule),
            (vm.activityWhere = response.data.activity.where),
            (vm.activityInfo = response.data.activity.aboutActivity),
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