<template>
  <div id="login">
    <h1>Sign Up</h1>
    <div v-if="messageFlag">
      <input type="text" name="name" v-model="input.name" placeholder="First and Last Name">
      <br>
      <input type="text" name="email" v-model="input.email" placeholder="Email">
      <br>
      <input type="password" name="password" v-model="input.password" placeholder="Password">
      <br>
      <button type="button" @click.stop.prevent="signUp()">Sign Up</button>
    </div>

    <router-link v-if="message" :to="{name: 'Login'}">
      <p>Account created successfully.
        <br>Please login!
      </p>
      <br>
      <button type="button">Login</button>
    </router-link>
    <br>
    <br>

    <router-link v-if="messageFlag" :to="{name: 'Login'}">
      <p>Do you already have an account?</p>
      <button type="button">Login</button>
    </router-link>
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
            password: this.input.password
          })
          .then(function(response) {
            vm.message = response.data.message;
            vm.messageFlag = false;
          });
      } else {
        console.log("A name, email and password must be present");
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



