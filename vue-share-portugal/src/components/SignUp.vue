<style>
@import '../css/base.css';
@import '../css/colors.css';
@import '../css/login.css';
</style>

<template>
<div>
    <div class="background login-background"></div>
    <div class="topBar">
        <router-link :to="{name: 'SharePortugal'}">
            <button id="homeButton" type="button" class="btn btn-light">Home Page</button>
        </router-link>
    </div>
    <div class="wrapper">
        <div class="popup-login white-color">
            <p class="h1">Sign Up</p>
            <br>
            <div v-if="messageFlag">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" name="name" v-model="input.name" class="form-control" placeholder="FirstName LastName">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" v-model="input.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" class="form-control" id="exampleInputPassword1" v-model="input.password" placeholder="Password">
                    </div>
                    <button type="button" @click.stop.prevent="signUp()" class="btn btn-outline-dark">Sign Up</button>
                </form>
            </div>

            <div v-if="message">
                <p class="h6">Account created successfully.</p>
                <a>
                    <p class="h7">Please login!</p>
                </a>
                <router-link :to="{name: 'Login'}">
                    <button type="button" class="btn btn-dark" :to="{name: 'Login'}">Login</button>
                </router-link>
            </div>
            <br>

            <div v-if="!message">
                <hr>
                <br>
                <p class="h5">Do you already have an account?</p>
                <br>
                <router-link v-if="messageFlag" :to="{name: 'Login'}">
                    <button type="button" class="btn btn-dark" :to="{name: 'Login'}">Login</button>
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import {
    rootLink
} from '../../src/main.js';

export default {
    name: "SignUp",
    data() {
        return {
            input: {
                email: "",
                password: "",
                name: ""
            },
            message: "",
            messageFlag: true,
            createUserLink: rootLink + 'locals/signup',
            createDefaultRoomLink: rootLink + 'roomstyle'
        };
    },

    methods: {
        signUp() {
            if (
                this.input.name != "" &&
                this.input.email != "" &&
                this.input.password != ""
            ) {
                var vm = this;
                axios
                    .post(this.createUserLink, {
                        name: this.input.name,
                        email: this.input.email,
                        password: this.input.password,
                        localImage: "/static/Illustrator Files/userPicture.png"
                    })
                    .then(function (response) {
                        vm.message = response.data.message;
                        vm.messageFlag = false;
                        axios
                            .post(vm.createDefaultRoomLink, {
                                localId: response.data.id,
                                wallColor: "#222E3D",
                                tableColor: "#DCE6E8",
                                frameImage: "/static/Illustrator Files/frameStart.png",
                                wallPattern: "Two",
                                flag: "0",
                                roomNumber: "room2"
                            })
                            .then(function (response) {
                                console.log(response);
                            });
                    });
            } else {
                console.log("A name, email and password must be present");
            }
        }
    }
};
</script>
