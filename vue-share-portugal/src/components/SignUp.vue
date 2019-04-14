<template>
  <div>
    <div class="background"></div>
    <div id="login">
      <p class="h1">Sign Up</p>
      <br>
      <div v-if="messageFlag">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              name="name"
              v-model="input.name"
              class="form-control"
              placeholder="FirstName LastName"
            >
          </div>
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
              class="form-control"
              id="exampleInputPassword1"
              v-model="input.password"
              placeholder="Password"
            >
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
</template>

<script>
import axios from "axios";

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
      messageFlag: true
    };
  },

  methods: {
    // createRoomStyle(id) {

    // },

    signUp() {
      if (
        this.input.name != "" &&
        this.input.email != "" &&
        this.input.password != ""
      ) {
        var vm = this;
        axios
          .post("http://localhost:3000/locals/signup", {
            name: this.input.name,
            email: this.input.email,
            password: this.input.password,
            localImage: "/static/Illustrator Files/userPicture.png"

          })
          .then(function(response) {
            vm.message = response.data.message;
            vm.messageFlag = false;
            console.log(response.data.id);
            // createRoomStyle(response.data.id);
            axios
              .post("http://localhost:3000/roomstyle", {
                localId: response.data.id,
                wallColor: "#222E3D",
                tableColor: "#DCE6E8",
                frameImage:
                  "/static/Illustrator Files/frameStart.png",
                wallPattern: "Two"
              })
              .then(function(response) {
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



