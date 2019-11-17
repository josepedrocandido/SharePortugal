<style>
@import '../css/base.css';
@import '../css/colors.css';
@import '../css/topBar.css';
@import '../css/popup.css';
@import '../css/room.css';
</style>

<template>
<div>

    <div class="top-bar-background"></div>

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

        <div class="top-bar">
            <div @click="popupUserInformation = !popupUserInformation" class="top-button">
                <img src="/static/homePage/user.svg">
                <h5>User Information</h5>
            </div>


            <div @click="popupCreateActivity = !popupCreateActivity" v-if="!popupCreateActivity" class="top-button">
                <img src="/static/room/workshop.svg">
                <h5>Workshops</h5>
            </div>
            <div v-if="popupCreateActivity" class="popup">
                <div class="top-popup-bar">
                    <div class="top-button top-button-no-hover">
                        <img src="/static/room/workshopActive.svg">
                        <h5 class="top-button-active">Workshops</h5>
                    </div>
                    <div @click="popupCreateActivity = !popupCreateActivity" class="top-button">
                        <img style="height:25px;margin:0;" src="/static/homePage/close.svg">
                    </div>
                </div>
                <form>
                    <div class="text-center">
                        <img :src="newActivityPicture" class="profileImage">
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Activity Picture Link</label>
                        <input type="text" class="form-control" v-model="newActivityPicture" id="exampleInputEmail1" placeholder="Picture Link">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Activity Name</label>
                        <input type="text" class="form-control" v-model="newActivityName" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Activity Name">
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Where</label>
                                <input type="text" class="form-control" v-model="newActivityWhere" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Where?">
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="form-group">
                                <label for="exampleInputEmail1">When</label>
                                <input type="date" class="form-control" v-model="newActivityWhen" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="When?">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Activity Info</label>
                        <textarea class="form-control" rows="2" v-model="newActivityInfo"></textarea>
                    </div>
                    <button type="button" class="btn btn-dark" @click.stop.prevent="closeActivityDefinitions()">Close</button>

                    <button type="button" class="btn btn-success" @click.stop.prevent="createActivity()">Submit</button>
                </form>
            </div>

            

            <div @click="popupPersonalizeRoom = !popupPersonalizeRoom" v-if="!popupPersonalizeRoom" class="top-button">
                <img src="/static/room/roomPersonalize.svg">
                <h5>Room Customization</h5>
            </div>
            <div v-if="popupPersonalizeRoom" class="popup">
                <div class="top-popup-bar">
                    <div class="top-button top-button-no-hover">
                        <img src="/static/room/roomPersonalizeActive.svg">
                        <h5 class="top-button-active">Room Customization</h5>
                    </div>
                    <div @click="popupPersonalizeRoom = !popupPersonalizeRoom" class="top-button">
                        <img style="height:25px;margin:0;" src="/static/homePage/close.svg">
                    </div>
                </div>
                
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
                <swatches v-model="wallColor" />
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
                <input type="text" class="form-control" v-model="frameImage" id="exampleInputEmail1" placeholder="Picture Link">
                <br>
                <hr>
                <br>

                <button type="button" class="btn btn-dark" @click.stop.prevent="closeRoomDefinitions()">Close</button>
                <button type="button" class="btn btn-success" @click.stop.prevent="submitRoomChanges()">Submit</button>
            </div>


            </div>

            <router-link :to="{name: 'SharePortugal'}">
                <div class="top-button">
                    <img src="/static/room/logout.svg">
                    <h5>Logout</h5>
                </div>
            </router-link>
        </div>

<div class="wrapper">


            <div v-if="popupUserInformation" class="popup">
                <div class="top-popup-bar">
                    <div class="top-button top-button-no-hover">
                        <img src="/static/room/userActive.svg">
                        <h5 class="top-button-active">User Information</h5>
                    </div>
                    <div @click="popupUserInformation = !popupUserInformation" class="top-button">
                        <img style="height:25px;margin:0;" src="/static/homePage/close.svg">
                    </div>
                </div>
                <form>
                    <div class="text-center">
                        <img :src="userPicture" class="profileImage">
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Picture Link</label>
                        <input type="text" class="form-control" v-model="userPicture" id="exampleInputEmail1" placeholder="Picture Link">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" v-model="userName" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New FirstName LastName">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" v-model="userEmail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="New email address">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Biography</label>
                        <textarea class="form-control" rows="2" v-model="userBio"></textarea>
                    </div>
                    <button type="button" class="btn btn-success" @click.stop.prevent="submitProfileDefinitions()">Submit</button>
                </form>
            </div></div>

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
                <swatches v-model="wallColor" />
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
                <input type="text" class="form-control" v-model="frameImage" id="exampleInputEmail1" placeholder="Picture Link">
                <br>
                <hr>
                <br>

                <button type="button" class="btn btn-dark" @click.stop.prevent="closeRoomDefinitions()">Close</button>
                <button type="button" class="btn btn-success" @click.stop.prevent="submitRoomChanges()">Submit</button>
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
                    <input type="text" class="form-control" v-model="newActivityPicture" id="exampleInputEmail1" placeholder="Picture Link">
                </div>
                <hr>
                <div class="form-group">
                    <label for="exampleInputEmail1">Activity Name</label>
                    <input type="text" class="form-control" v-model="newActivityName" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Activity Name">
                </div>
                <div class="row">
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Where</label>
                            <input type="text" class="form-control" v-model="newActivityWhere" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Where?">
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="exampleInputEmail1">When</label>
                            <input type="date" class="form-control" v-model="newActivityWhen" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="When?">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Activity Info</label>
                    <textarea class="form-control" rows="2" v-model="newActivityInfo"></textarea>
                </div>
                <button type="button" class="btn btn-dark" @click.stop.prevent="closeActivityDefinitions()">Close</button>

                <button type="button" class="btn btn-success" @click.stop.prevent="createActivity()">Submit</button>
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
            tipoPadrao: "padraoNormal",
            popupUserInformation: false,
            popupCreateActivity: false,
            popupPersonalizeRoom: false
        };
    },

    methods: {

        openPopup: function (event) {
            if (this.popupUserInformation | this.popupCreateActivity) {
                this.popupUserInformation = false;
                this.popupCreateActivity = false;
                this.popupPersonalizeRoom = false;
            } else {
                this.popupUserInformation = true;
                this.popupCreateActivity = true;
                this.popupPersonalizeRoom = true;
            }
        },
        profileAction: function (event) {
            if (this.profileDefinitionsOn) {
                this.profileDefinitionsOn = false;
            } else this.profileDefinitionsOn = true;
        },

        roomAction: function (event) {
            if (this.roomDefinitionsOn) {
                this.roomDefinitionsOn = false;
            } else this.roomDefinitionsOn = true;
        },

        activityAction: function (event) {
            if (this.activityDefinitionsOn) {
                this.activityDefinitionsOn = false;
            } else this.activityDefinitionsOn = true;
        },
        padrao1: function (event) {
            this.picked = "One";
        },
        padrao2: function (event) {
            this.picked = "Two";
        },

        room1: function (event) {
            this.room = "room1";
        },
        room2: function (event) {
            this.room = "room2";
        },
        mudarPadrao: function (event) {
            this.picked = "One";
        },
        mudarPadrao2: function (event) {
            this.picked = "Two";
        },
        submitProfileDefinitions() {
            var vm = this;
            axios.patch(this.baseUrl + this.id, [{
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
            axios.patch(this.roomstyleUrl + this.roomstyleId, [{
                propName: "frameImage",
                value: vm.frameImage
            }]);
        },

        submitRoomChanges() {
            var vm = this;
            axios.patch(this.roomstyleUrl + this.roomstyleId, [{
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
        axios.get(this.activityUrl).then(function (response) {
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
        axios.get(this.roomstyleUrl).then(function (response) {
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
