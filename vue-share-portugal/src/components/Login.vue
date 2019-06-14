<template>
  <div>
    <div class="background"></div>

    <div id="login">
      <div v-if="loginFlag">
              <form>
        <p class="h1">Welcome Back!</p><br>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label> 
          <input
            type="email"
            name="email"
            v-model="input.email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            v-model="input.password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          >
        </div>
        <button type="button" @click.stop.prevent="login()" class="btn btn-outline-dark">Login</button>
        <br>
        <br>
        <hr>
        <br>
        <p class="h5">Don't have and account yet?</p>
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
          <a><p class="h6">Go to my room!</p></a>
        </router-link>
      </div>
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
          .post("http://shareportugal.m-iti.org/api/locals/login", {
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

<style>
.background {
  background-image: url("/static/Illustrator Files/loginBackground.png");
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
#login {
  width: 700px;
  background-color: #ededed;
  opacity: 0.98;
  margin: auto;
  margin-top: 130px;
  padding: 20px;
  text-align: center;
  border-radius: 30px;
}
</style>



