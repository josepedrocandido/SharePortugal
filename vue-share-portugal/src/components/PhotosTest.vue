<template>
<div class="container">
  <img :src="image1.thumbnailUrl" id="img1">
  <img :src="image2.thumbnailUrl" id="img2">
  <img :src="image3.thumbnailUrl" id="img3">
  <img :src="image4.thumbnailUrl" id="img4">
   <h1>Photos</h1>
  <router-link :to="{name: 'Room', params: { id: image2.id }}"><img :src="image2.thumbnailUrl" id="img2"></router-link>
</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',

  data () {
    return {
      image1: '', image2: '', image3: '', image4: '', 
    }
  },

    mounted () {
    axios.get('https://jsonplaceholder.typicode.com/photos')
         .then(response => (
            this.image1 = response.data[0], 
            this.image2 = response.data[1],
            this.image3 = response.data[2],
            this.image4 = response.data[3]
            ))
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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

#img1 { position: absolute; top: 80px; left: 30px; width: 150px; height: 150px; }
#img2 { position: absolute; top: 80px; left: 230px; width: 150px; height: 150px; }
#img3 { position: absolute; top: 80px; left: 430px; width: 150px; height: 150px; }
#img4 { position: absolute; top: 80px; left: 630px; width: 150px; height: 150px; }

</style>








<template>


</template>

<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',

  data () {
    return {
      // image1: '', image2: '', image3: '', image4: '', 
    }
  },

  //   mounted () {
  //   axios.get('https://jsonplaceholder.typicode.com/photos')
  //        .then(response => (
  //           this.image1 = response.data[0], 
  //           this.image2 = response.data[1],
  //           this.image3 = response.data[2],
  //           this.image4 = response.data[3]
  //           ))
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body,
html {
    height: 100%;
    margin: 0;
}


/* Background and Buildings Navigation */


/* .frame {
    width: 100%;
    height: 100%;
    background-image: url('../images/backgroundNight.svg');
    background-repeat: no-repeat;
}

.frame.day-background {
    width: 100%;
    height: 100%;
    background-image: url('../images/background.svg');
    background-repeat: no-repeat;
} */


/* Responsive */

.frame {
    /* background: url('static/front/images/backgroundNight.svg') no-repeat center center fixed; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    overflow: hidden;
}

.frame.day-background {
    /* background: url('static/front/images/background.svg') no-repeat center center fixed; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    overflow: hidden;
}

img {
    height: 100%;
    margin: 0;
}

.frame .slidee {
    margin: 0;
    padding: 0;
    height: 100%;
    list-style: none;
}

.frame .slidee li {
    float: left;
    margin: 0 5px 0 0;
    padding: 0;
    width: auto;
    height: 100%;
}


/* Buildings Navigation - Slide Bar */

.sly_scrollbar {
    width: 100%;
    height: 10px;
    background: #545454cf;
    border-radius: 100px;
}

.sly_handle {
    width: 100px;
    /* overriden if dynamicHandle: 1 */
    height: 100%;
    background: #ED6463;
    border-radius: 100px;
}

.sly_handle.slyGreen {
    width: 100px;
    /* overriden if dynamicHandle: 1 */
    height: 100%;
    background: rgb(90, 124, 199);
    border-radius: 100px;
}

.slideBar {
    width: 25%;
    position: fixed;
    top: 96%;
    left: 36%;
    z-index: 10;
}


/* Hamburger Menu */

#menuToggle {
    display: block;
    position: fixed;
    top: 50px;
    left: 50px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
}

#menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    /* hide this */
    z-index: 2;
    /* and place it over the hamburger */
    -webkit-touch-callout: none;
}

#menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: white;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.55s ease;
}

#menuToggle span:first-child {
    transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

#menuToggle input:checked~span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
}

#menuToggle input:checked~span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked~span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}

#menu {
    opacity: 0.95;
    position: absolute;
    width: 500px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    height: 600px;
    border-radius: 10px;
}

#menu li {
    padding: 10px 0;
    font-size: 22px;
}

#menuToggle input:checked~ul {
    transform: none;
}


/* Login Button */

.topo {
    position: fixed;
    top: 4%;
    left: 89%;
    z-index: 1;
}

.myButton {
    background-color: transparent;
    -moz-border-radius: 42px;
    -webkit-border-radius: 42px;
    border-radius: 42px;
    border: 2px solid #ffffff;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 17px;
    padding: 7px 36px;
    text-decoration: none;
}

.myButton:hover {
    background-color: rgba(237, 99, 99, 0.671);
}


/* Footer Menu (Social Networks / Slide Bar ) */

.footer {
    position: fixed;
    top: 95%;
    left: 0%;
    width: 97%;
    z-index: 1;
}

.socialNetworks {
    float: left;
    width: 65%;
    padding-left: 45px;
    /* border: 1px solid #CEDCEA; */
}

.fa {
    color: blueviolet;
    padding-right: 20px;
    padding-bottom: 20px;
    font-size: 20px;
}

.fa:hover {
    opacity: 0.7;
}

.textSharingFunchal {
    position: fixed;
    top: 95%;
    left: 89%;
    width: 97%;
    z-index: 1;
}


/* Day and Night Buttons */

.button-con {
    cursor: default;
    position: absolute;
    top: 91%;
    left: 50%;
    margin-left: -76px;
    margin-top: -18px;
    z-index: 1;
}

#dayIcon {
    position: relative;
    width: 26px;
    height: 26px;
    top: -18px;
    margin: 0 7px;
    fill: #ED6463;
}

#nightIcon {
    position: relative;
    width: 26px;
    height: 26px;
    top: -18px;
    margin: 0 7px;
    fill: rgb(90, 124, 199);
    ;
}

#dayIcon,
#nightIcon {
    cursor: pointer;
}

.toggle {
    display: none;
}

.toggle,
.toggle:after,
.toggle:before,
.toggle *,
.toggle *:after,
.toggle *:before,
.toggle+.toggle-button {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.toggle::-moz-selection,
.toggle:after::-moz-selection,
.toggle:before::-moz-selection,
.toggle *::-moz-selection,
.toggle *:after::-moz-selection,
.toggle *:before::-moz-selection,
.toggle+.toggle-button::-moz-selection {
    background: none;
}

.toggle::selection,
.toggle:after::selection,
.toggle:before::selection,
.toggle *::selection,
.toggle *:after::selection,
.toggle *:before::selection,
.toggle+.toggle-button::selection {
    background: none;
}

.toggle+.toggle-button {
    outline: 0;
    display: inline-block;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    border: 2px solid #545454cf;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.toggle+.toggle-button:after,
.toggle+.toggle-button:before {
    position: relative;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
}

.toggle+.toggle-button:after {
    left: 0;
}

.toggle+.toggle-button:before {
    display: none;
}

.toggle:checked+.toggle-button:after {
    left: 50%;
}

.toggle+.toggle-button {
    padding: 2px;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    border: 2px solid #545454cf;
    border-radius: 2em;
}

.toggle+.toggle-button:after {
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    background: #0e0d0df5;
    content: "";
    border-radius: 1em;
}

.toggle:checked+.toggle-button:after {
    left: 50%;
}

</style>
