<template>
<div class="wall">
  <img src="static/quadroCortica.svg" alt="Computer Man" style="width:650px;height:650px;position:absolute;top:5%;right:5%;">
  <p class="bio"><b>{{ userName }}</b><br>{{ userBio }} {{ this.$route.params.id }}</p>
  <div class="rectangle"></div>
  <img src="https://imagens.publicocdn.com/imagens.aspx/805367?tp=UH&db=IMAGENS&type=JPG" alt="Smiley face" class="frame">
  <div class="table"></div>
  <div v-bind:style="style1"> 
    <p class="activityDescription"><b>{{ userName }}</b><br>{{ userBio }} {{ this.$route.params.id }}</p> 
  </div>
  <!-- <h1>Photo Id:</h1>   -->
      
  <!-- <img :src="image1.thumbnailUrl" id="img1"> -->
</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Photo',

  data () {


    return {
      style1: '',
      userName: '',
      userBio: '',
    }



  },

      mounted () {
    axios.get('static/styletest.json')
         .then(response => (
            this.style1 = response.data.stylePart,
            this.userName = response.data.userInfo.name,
            this.userBio = response.data.userInfo.bio
            ))
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wall {
  background-color: #C9C39B;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; 
  left: 0;
  }

 .bio {
  width:180px;
  height:248px;
  position: absolute;
  top: 12%; 
  left: 61%;
  -ms-transform: rotate(-11deg); /* IE 9 */
  -webkit-transform: rotate(-11deg); /* Safari 3-8 */
  transform: rotate(-11deg);
  word-wrap: break-word;
  text-align: left;
  overflow: hidden;
} 

.rectangle {
  height: 30px;
  width: 450px;
  position: absolute;
  top: 28%; 
  left: 3%;
  background-color: white;
}

.table {
  height: 170px;
  width: 100%;
  position: absolute;
  bottom: 0%; 
  left: 0px;
  background-color: brown;
}

.frame {
  height: 500px;
  width: 330px;
  position: absolute;
  top: 9%; 
  left: 33%;
  border-style: solid;
  border-width: 15px;
  border-color: black;
  object-fit: cover;
}

/* .activity {
  height: 250px;
  width: 200px;
  position: absolute;
  top: 40%; 
  right: 10%;
  background-color: blanchedalmond;
} */

 .activityDescription {
  width:180px;
  height:248px;
  position: absolute;
  top: 12%; 
  right: 8%;
  word-wrap: break-word;
  text-align: left;
  overflow: hidden;
} 
</style>
