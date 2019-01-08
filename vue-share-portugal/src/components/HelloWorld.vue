<template>
  <div class="container">
    <!-- <img :src="localhost + image1.localImage" id="img1">
    <img :src="localhost + image2.localImage" id="img2">-->
    <!-- <img :src="image3.thumbnailUrl" id="img3">
    <img :src="image4.thumbnailUrl" id="img4">-->
    <router-link :to="{name: 'Login'}">
      <button type="button">Login</button>
    </router-link>
    <router-link :to="{name: 'Room', params: { _id: image1._id }}">
      <img :src="localhost + image1.localImage" id="img1">
    </router-link>
    <router-link :to="{name: 'Room', params: { _id: image2._id }}">
      <img :src="localhost + image2.localImage" id="img2">
    </router-link>
    <router-link :to="{name: 'Room', params: { _id: image3._id }}">
      <img :src="image3.localImage" id="img3">
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",

  data() {
    return {
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      localhost: "http://localhost:3000/"
    };
  },

  mounted() {
    axios
      .get("http://localhost:3000/locals")
      .then(
        response => (
          (this.image1 = response.data[0]), (this.image2 = response.data[1]), (this.image3 = response.data[2])
        )
      );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#img1 {
  position: absolute;
  top: 80px;
  left: 30px;
  width: 150px;
  height: 150px;
}
#img2 {
  position: absolute;
  top: 80px;
  left: 230px;
  width: 150px;
  height: 150px;
}
#img3 {
  position: absolute;
  top: 80px;
  left: 430px;
  width: 150px;
  height: 150px;
}
#img4 {
  position: absolute;
  top: 80px;
  left: 630px;
  width: 150px;
  height: 150px;
}
</style>