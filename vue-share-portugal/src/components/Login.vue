<template>
  <div id="login">
    <h1>Welcome Back!</h1>
    <input type="text" name="email" v-model="input.email" placeholder="email">
    <br>
    <input type="password" name="password" v-model="input.password" placeholder="Password">
    <br>

    <router-link :to="{name: 'RoomDefinitions', params: { _id: tokenId }}">
      <button type="button" @click.stop.prevent="login()">Register</button>
    </router-link>
    <router-link :to="{name: 'RoomDefinitions', params: { _id: tokenId }}">    </router-link>



    {{ token }}
    {{ tokenId }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",

  data() {
    return {
      input: {
        email: "",
        password: ""
      },
      token: "",
      tokenId: ""
    };
  },

  methods: {
    login() {
      if (this.input.email != "" && this.input.password != "") {
        var vm = this;
        axios
          .post("http://localhost:3000/locals/login", {
            email: this.input.email,
            password: this.input.password
          })
          .then(function(response) {
            vm.token = response.data.token;
            vm.tokenId = response.data.localId;
          });
      } else {
        console.log("A email and password must be present");
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 500px;
  background-color: rgba(226, 216, 216, 0.541);
  margin: auto;
  margin-top: 200px;
  padding: 20px;
  text-align: center;
  border-radius: 30px;
}
</style>