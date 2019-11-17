<style>
@import '../css/base.css';
@import '../css/colors.css';
@import '../css/admin.css';
@import '../css/login.css';
@import '../css/topBar.css';
</style>

<template>
<div>
    <div class="background login-background"></div>

        <div class="top-bar">
        <router-link :to="{name: 'SharePortugal'}">
            <div class="top-button">
                <img src="/static/login/home.svg">
                <h5>Back to The City</h5>
            </div>
        </router-link>
    </div>
    <div class="wrapperAdmin">
        <div class="admin-layout">
            <div v-for="user in users" v-bind:key="user.id">
                <div class="user-section white-color"> <img :src="user.localImage" height="100" width="100" style="margin-bottom:20px;">
                    <h2>{{user.name}}</h2>
                    <p><b>Email:</b> {{user.email}}</p>
                    <p><b>id:</b> {{user._id}}</p>
                    <button type="button" class="btn btn-danger" @click.stop.prevent="deleteUser(user._id)" style="margin-top: 20px;">Delete User</button>
                </div>
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
    name: "admin",

    data() {
        return {
            getUsersLink: rootLink + 'locals',
            users: []
        }
    },

    methods: {
        deleteUser(id) {
            var vm = this;
            axios
                .delete(this.getUsersLink + "/" + id, {})
                .then(function (response) {
                    console.log("Ok User")
                });
            window.location.reload();
        }
    },

    mounted() {
        var vm = this;
        axios
            .get(this.getUsersLink)
            .then(function (response) {
                vm.users = response.data;
            });
    }
};
</script>
