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
            <div v-if="loginFlag">
                <form>
                    <p class="h1">Welcome Back!</p><br>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" v-model="input.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" v-model="input.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <button type="button" @click.stop.prevent="login()" class="btn btn-outline-dark">Login</button>
                    <br>
                    <br>
                    <hr>
                    <br>
                    <p class="h5">Don't have an account yet?</p>
                    <p class="h6">Just create yours down here and let the journey begins!</p>
                    <br>
                    <router-link :to="{name: 'SignUp'}">
                        <button type="button" class="btn btn-dark" :to="{name: 'SignUp'}">Sign Up</button>
                    </router-link>

                </form>
            </div>
            <div v-if="!loginFlag">
                <p class="h6">Hello again, <b>{{ user }}</b>!</p><br>
                <router-link :to="{name: 'RoomDefinitions', params: { token: token, _id: tokenId }}">
                    <a>
                        <p class="h6">Go to my room!</p>
                    </a>
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
    name: "Login",

    data() {
        return {
            input: {
                email: "",
                password: ""
            },
            token: "",
            tokenId: "",
            loginFlag: true,
            user: "",
            loginUserLink: rootLink + 'locals/login'
        };
    },

    methods: {
        login() {
            if (this.input.email != "" && this.input.password != "") {
                var vm = this;
                axios
                    .post(this.loginUserLink, {
                        email: this.input.email,
                        password: this.input.password
                    })
                    .then(function (response) {
                        vm.token = response.data.token;
                        vm.tokenId = response.data.localId;
                        vm.user = response.data.name;
                        vm.loginFlag = false;
                    });
            } else {
                console.log("A email and password must be present");
            }
        }
    }
};
</script>
