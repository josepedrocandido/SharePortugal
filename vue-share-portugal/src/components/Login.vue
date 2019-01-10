<template>
  <div id="login">
    <h1>Welcome Back!</h1>
    <div v-if="loginFlag">
      <input type="text" name="email" v-model="input.email" placeholder="email">
      <br>
      <input type="password" name="password" v-model="input.password" placeholder="Password">
      <br>
      <button type="button" @click.stop.prevent="login()">Login</button>

      <p>Don't have and account yet?
        <br>Just create yours down here and let the journey begins!
      </p>
      <router-link :to="{name: 'SignUp'}">
        <button type="button">Sign Up</button>
      </router-link>
      <!-- {{ token }}
      {{ tokenId }}-->
    </div>
    <div v-if="!loginFlag">
      <p>Hello again, {{ user }}!</p>
      <router-link :to="{name: 'RoomDefinitions', params: { _id: tokenId }}">
        <a>Go to my room!</a>
      </router-link>
    </div>
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
      tokenId: "",
      loginFlag: true,
      user: ""
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



