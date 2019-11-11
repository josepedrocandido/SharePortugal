<template>
<div>
    <h1>Admin Area</h1>
    <div v-for="user in users" v-bind:key="user.id">
        <p>{{user.name}}</p>
        <p>{{user.email}}</p>
        <p>{{user._id}}</p>
        <button type="button" class="btn btn-success" @click.stop.prevent="deleteUser(user._id)">Delete User</button>
        <hr>
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
            axios
                .delete(this.getUsersLink + "/" + id, {})
                .then(function (response) {
                    console.log("Ok User")
                });
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
