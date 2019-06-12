<template>
<div>
  <div v-if="room === 'room1'">
      <div class="wall" v-bind:style="backgroundCss + wallColor"></div>
      <div class="background"></div>
      <div class="roomWall"></div>
            

      
    <img v-on:click="activePhone" src="/static/phoneNotification.png" class="phoneNotification">
      <!-- <div class="padrao"></div> -->

      <div v-if="picked === 'One'" class="padrao"></div>
      <div v-if="picked === 'Two'" class="padrao2"></div>

      <!-- <transition name="fade">
        
      </transition>
      <transition name="fade">
        
      </transition> -->

      <router-link :to="{name: 'SharePortugal'}">
        <img src="/static/Illustrator Files/back.png" class="back">
      </router-link>

      <div class="imageFrame">
        <div class="frameBorder">
          <img :src="frameImage" class="frame">
        </div>
      </div>

      <div v-on:click="activePhone" class="phoneActivated"></div>

      <div v-if="this.phoneOn" class="phone">
        
        <div id="bio">
          <div class="bioImage">
              <img :src="userPicture" alt="Local Picture" class="localPic">
          </div>
          <div class="bioText">
              <p><b>{{ userName }}</b><br>{{ userBio }}</p><br>
              <a :href="this.mailTo + this.userEmail" class="btn btn-success" role="button" aria-pressed="true">Send Email</a><br><br>
              <button type="button" class="btn btn-light" v-on:click="activePhone">Close</button>

          </div>
        </div>
      </div>

      

      <div v-if="flag === '1'">
          <img class="wsPaper" src="/static/workshopPaper.png">
          <div v-on:click="activeWS" class="workshopDiv">
            <p><b>{{ this.activityName }}</b></p>
            <img :src="activityPicture" alt="WS" class="WsPicture"><br><br>   
          </div>
      </div>

    <div v-if="this.wsOn" class="ws">
        
        <div id="wsArea">
          <div class="wsImage">
              <img :src="activityPicture" alt="Local Picture" class="localPic">
          </div>
          <div class="wsText">
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
      <div class="wall" v-bind:style="backgroundCss + wallColor"></div>
      <div v-if="picked === 'One'" class="backgroundRoom2"></div>
      <div v-if="picked === 'Two'" class="backgroundRoom2Inverted"></div>
      
    <img v-on:click="activePhone" src="/static/phoneNotification.png" class="phoneNotification2">
        <div class="vinil"></div>

              <div class="moldure">
        <div class="frameBorder2">
          <img :src="frameImage" class="frame2">
        </div>
      </div>


      <!-- <div v-if="picked === 'One'" class="padrao"></div>
      <div v-if="picked === 'Two'" class="padrao2"></div> -->

      <router-link :to="{name: 'SharePortugal'}">
        <img src="/static/Illustrator Files/back.png" class="back">
      </router-link>

     

      <div v-on:click="activePhone" class="phoneActivated2"></div>

      <div v-if="this.phoneOn" class="phone">
        
        <div id="bio">
          <div class="bioImage">
              <img :src="userPicture" alt="Local Picture" class="localPic">
          </div>
          <div class="bioText">
              <p><b>{{ userName }}</b><br>{{ userBio }}</p><br>
              <a :href="this.mailTo + this.userEmail" class="btn btn-success" role="button" aria-pressed="true">Send Email</a><br><br>
              <button type="button" class="btn btn-light" v-on:click="activePhone">Close</button>

          </div>
        </div>
      </div>

      

      <div v-if="flag === '1'">
        <div v-on:click="activeWS" class="workshopMoldure">
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

    <div v-if="this.wsOn" class="ws2">
        
        <div id="wsArea2">
          <div class="wsImage2">
              <img :src="activityPicture" alt="Local Picture" class="localPic">
          </div>
          <div class="wsText2">
              <p><b>Name: </b>{{ activityName }}<br></p>
              <p><b>When: </b>{{ activityWhen }}<br></p>
              <p><b>Where: </b>{{ activityWhere }}<br></p>
              <p><b>Infos: </b>{{ activityInfo }}<br><br></p>
          </div>

          <div class="wsButton2">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .ws {
    background-image: url("/static/Paper.png"); 
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9999999999;
  }

    .ws2 {
    background-image: url("/static/board.png"); 
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9999999999;
  }

  .phone {
    background-image: url("/static/phone.png"); 
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9999;
  }

.phoneActivated {
    position: absolute;
    top: 60%;
    left: 73%;
    width: 15%;
    height: 22%;

    z-index: 999;
}

.phoneActivated2 {
    position: absolute;
    top: 47%;
    right: 50%;
    width: 10%;
    height: 20%;
    /* border: 2px solid red; */
    z-index: 999;
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

  .imageFrame {
  position: absolute;
  top: 9%;
  left: 34%;
  width: 200px;
  height: 260px;
  background-image: url("/static/imageFrame.png");
  background-repeat: no-repeat;
  background-size: contain;
  /* border: 1px solid red; */
  z-index: -15;
}

  .workshopMoldure {
  position: absolute;
  top: 39%;
  left: 21%;
  width: 150px;
  height: 100px;
  background-image: url("/static/workshopMoldure.png");
  background-repeat: no-repeat;
  background-size: contain;
  /* border: 1px solid red; */
  z-index: 10;
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

  .phoneNotification {
    position: fixed;
    top: 55%;
    right: 15%;
    height: 30%;
    z-index: 9999;
  }

    .phoneNotification2 {
    position: fixed;
    top: 47%;
    right: 50%;
    height: 20%;
    z-index: 9999;
  }


  .phoneNotification:hover {
  opacity: 0.5;
  transform: scale(1.3);
}

  .phoneNotification2:hover {
  opacity: 0.5;
  transform: scale(1.3);
}

      .workshopArea {
    /* background-image: url("/static/workshopPaper.png");  */
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99999999;
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
  position: relative;
  top: 2%;
  left: 2.5%;
  height: 96%;
  width: 92%;
  object-fit: cover;
  z-index: -1;
}

.frameBorder2 {
  position: relative;
  top: 5%;
  left: 4%;
  height: 90%;
  width: 92%;
  /* border: 2px solid red; */
  z-index: -1;
}

.moldure {
  position: absolute;
  top: 3%;
  left: 37%;
  width: 285px;
  height: 200px;
  background-image: url("/static/moldure.png");
  background-repeat: no-repeat;
  background-size: contain;
  /* border: 1px solid red; */
  z-index: -15;
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
  position: relative;
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

.workshopDiv:hover {
  opacity: 0.5;
  
}

.workshopMoldure:hover {
  opacity: 0.5;
  
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

#workshops {
  position: absolute;
  top: 3%;
  left: 30%;
  width: 550px;
  height: 600px;
  background-color: #ededed;
  opacity: 0.97;
  margin: auto;
  margin-top: 25px;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
}

.workshop1 {
  position: absolute;
  top: 15%;
  left: 2%;
  width: 96%;
  height: 20%;
  
}

.workshopPicture {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  object-fit: cover;
}

#workshopTitle {
 position: relative;
 float: right;
 right: 10%;
 top: 30%;
}

#infos {
text-align: left;
 position: relative;
 left: 0%;
 top: 0%;
}

.workshopInfos {
  position: absolute;
  top: 40%;
  left: 2%;
  width: 96%;
  height: 40%;
}


.profileImage {
  width: 125px;
  height: 125px;
}

.presentationArea
{
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

.wsPaper {
  position: absolute;
  top: 6%;
  left: 48%;
  width: 11%;

}

#bio {
  position: absolute;
  width: 15%;
  height: 50%;
  top: 25%;
  left: 5.5%;
  word-wrap: break-word;
  text-align: left;
  overflow: hidden;
  z-index: 2;
  /* border-style: solid;
  border-color: red; */
}

#wsArea {
  position: absolute;
  width: 17%;
  height: 50%;
  top: 25%;
  left: 3%;
  word-wrap: break-word;
  text-align: left;
  overflow: hidden;
  z-index: 2;
  /* border-style: solid;
  border-color: red; */
}

#wsArea2 {
  position: absolute;
  width: 30%;
  height: 43%;
  top: 30%;
  right: 5.5%;
  word-wrap: break-word;
  text-align: left;
  overflow: hidden;
  z-index: 2;
  /* border-style: solid;
  border-color: red; */
}

.bioText  {
  color: white;
  text-align: center;
  z-index: 2;
  /* border-style: solid; 
  border-color: green; */
  padding-top: 9%;
}

.wsText  {
  color: black;
  text-align: center;
  z-index: 2;
  /* border-style: solid; 
  border-color: green; */
  padding-top: 9%;
}

.wsText2  {
  position: absolute;
  left: 35%;
  width: 60%;
  color: black;
  text-align: left;
  z-index: 2;
  /* border-style: solid; 
  border-color: green; */
}

.wsButton2  {
  text-align: center;
  z-index: 2;
  /* border-style: solid; 
  border-color: green; */
  padding-top: 50%;
}



.bioImage  {
  text-align: center;
  z-index: 2;
  /* border-style: solid;
  border-color: blue; */
}

.wsImage  {
  text-align: center;
  z-index: 2;
  /* border-style: solid;
  border-color: blue; */
}

.wsImage2  {
  position: absolute;
  text-align: left;
  z-index: 2;
  /* border-style: solid;
  border-color: blue; */

}

.workshopDiv  {
  position: absolute;
  width: 8%;
  height: 23%;
  top: 12%;
  left: 49%;
  word-wrap: break-word;
  text-align: center;
  overflow: hidden;
  z-index: 2;
  /* border-style: solid;
  border-color: red; */
}

.workshopDiv2 {
  position: relative;
  width: 85%;
  height: 90%;
  top: 3%;
  left: 11%;
  word-wrap: break-word;
  text-align: center;
  overflow: hidden;
  z-index: -1;
  /* border-style: solid; */
  /* border-color: green; */
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
  width: 152px;
}

.WsPicture {
  width: 95px;
}

.WsPicture2 {
  width: 50px;
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

.back {
  position: fixed;
  top: 4.5%;
  left: 2.5%;
  height: 50px;
}

.back:hover {
  opacity: 0.4;
}

</style>
