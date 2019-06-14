<template>
<div>
  
    
  
<router-link :to="{name: 'Login'}">
  <button id="loginButton" type="button" class="btn btn-outline-light">Login</button>
</router-link>
  
<nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <li>
      <img class="madeira" src="/static/Illustrator Files/madeira.png">  
      <div class="madeiraText">
        <h4>Madeira</h4>
        <p>Come and meet the local people of Madeira, their stories and their land.</p>
      </div>
      </li>
            <li class="lisboa">
      <img class="lisbon" src="/static/Illustrator Files/lisbon.png">  
      <div class="lisbonText">
        <h4>Lisboa</h4>
        <p>Come and meet the local people of Lisboa, their stories and their land.</p>
      </div>
      </li>
    </ul>
  </div>
</nav>
  
    <transition name="fade">
      <div v-if="day" class="background"></div>
    </transition>
    <transition name="fade">
      <div v-if="!day" class="backgroundNight"></div>
    </transition>
  
    <div id="div-vue-bar">
      <VueSlideBar v-model="value2" :min="slider.minValue" :max="slider.maxValue" :processStyle="slider.processStyle" :lineHeight="slider.lineHeight" :speed="0.1" :tooltipStyles="{ backgroundColor: 'tomato', borderColor: 'tomato' }" @dragEnd="dragEnd" @dragStart="dragStart"
        @input="input">
        <template slot="tooltip" slot-scope="tooltip">
              <img id="tooltip" src="/static/images/location.png">
</template>
      </VueSlideBar>
    </div>

    <div class="center" id="content" ref="content">
      <transition name="fade">
        <img v-if="day" class="img-buildings" src="/static/Illustrator Files/buildingsDay.png">
      </transition>
      <transition name="fade">
        <img v-if="!day" class="img-buildings" src="/static/Illustrator Files/buildingsNight.png">
      </transition>
      <router-link v-if="image1" :to="{name: 'Room', params: { _id: image1._id }}">
        <img :src="image1.localImage" id="img1">
      </router-link>
      <router-link v-if="image2" :to="{name: 'Room', params: { _id: image2._id }}">
        <img :src="image2.localImage" id="img2">
      </router-link>
      <router-link v-if="image3" :to="{name: 'Room', params: { _id: image3._id }}">
        <img :src="image3.localImage" id="img3">
      </router-link>
      <router-link v-if="image4" :to="{name: 'Room', params: { _id: image4._id }}">
        <img :src="image4.localImage" id="img4">
      </router-link>
      <router-link v-if="image5" :to="{name: 'Room', params: { _id: image5._id }}">
        <img :src="image5.localImage" id="img5">
      </router-link>
      <router-link v-if="image6" :to="{name: 'Room', params: { _id: image6._id }}">
        <img :src="image6.localImage" id="img6">
      </router-link>
      <router-link v-if="image7" :to="{name: 'Room', params: { _id: image7._id }}">
        <img :src="image7.localImage" id="img7">
      </router-link>
      <router-link v-if="image8" :to="{name: 'Room', params: { _id: image8._id }}">
        <img :src="image8.localImage" id="img8">
      </router-link>
    </div>

 <transition name="fade"><img v-if="day" class="sun" src="/static/Illustrator Files/sun.png"></transition>
  <transition name="fade"><img v-if="!day" class="sun" src="/static/Illustrator Files/sunGrey.png"></transition>
    <toggle-button
      id="toggleButton"
      v-model="day"
      :value="true"
      :speed="3500"
      :color="{checked: 'tomato', unchecked: '#299578'}"
      :height="17"
    />
     <transition name="fade"><img v-if="!day" class="moon" src="/static/Illustrator Files/moon.png"></transition>
     <transition name="fade"><img v-if="day" class="moon" src="/static/Illustrator Files/moonGrey.png"></transition>
  </div>
</template>

<script>
  import axios from "axios";
  import VueSlideBar from "vue-slide-bar";
  import Vue from "vue";
  import ToggleButton from "vue-js-toggle-button";
  Vue.use(ToggleButton);
  
  export default {
    name: "SharePortugal",
    data() {
      return {
        value2: 2,
        slider: {
          lineHeight: 15,
          processStyle: {
            backgroundColor: "tomato"
          },
          minValue: 1,
          maxValue: 11,
          isDragging: false
        },
        oldValue: 1, // variavel que guarda o valor anterior do scroll
        image: [],
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        image6: "",
        image7: "",
        image8: "",
        localhost: "http://shareportugal.m-iti.org/api/",
        day: true,
        teste: ""
      };
    },
  
    watch: {
      day(newValue) {
        if (this.day) {
          this.slider.processStyle.backgroundColor = "tomato";
        } else {
          this.slider.processStyle.backgroundColor = "#299578";
        }
      }
    },
  
    methods: {
      scrollTo(element, scrollPixels, duration) {
        const scrollPos = element.scrollLeft;
        // Condition to check if scrolling is required
        if (!(
            (scrollPos === 0 || scrollPixels > 0) &&
            (element.clientWidth + scrollPos === element.scrollWidth ||
              scrollPixels < 0)
          )) {
          // Get the start timestamp
          const startTime =
            "now" in window.performance ?
            performance.now() :
            new Date().getTime();
  
          function scroll(timestamp) {
            //Calculate the timeelapsed
            const timeElapsed = timestamp - startTime;
            //Calculate progress
            const progress = Math.min(timeElapsed / duration, 1);
            //Set the scrolleft
            element.scrollLeft = scrollPos + scrollPixels * progress;
            //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
            if (timeElapsed < duration) {
              //Request for animation
              window.requestAnimationFrame(scroll);
            } else {
              return;
            }
          }
          //Call requestAnimationFrame on scroll function first time
          window.requestAnimationFrame(scroll);
        }
      },
      swipe() {
        // Valor de cada vez que move uma casa
        var sliderSwipeBase = 200;
        // variavel das casas
        const content = this.$refs.content;
        // Quantas casas moveu
        var difference = this.value2 - this.oldValue;
  
        console.log("Quantas casas mexeu? " + difference);
        if (difference != 0) {
          var totalToMove;
          // Mexe para a direita (positivo)
          if (this.oldValue < this.value2) {
            totalToMove = Math.abs(sliderSwipeBase * difference);
          }
          // Mexe para a esquerda (negativo)
          else {
            totalToMove = -Math.abs(sliderSwipeBase * difference);
          }
          console.log("... will move " + totalToMove);
  
          this.scrollTo(content, totalToMove, 600);
  
          // guarda novo valor no valor anterior para ser usado na iteracao seguinte
          this.oldValue = this.value2;
          this.isDragging = false;
        }
      },
      dragEnd(val) {
        this.swipe();
      },
      dragStart(val) {
        this.isDragging = true;
      },
      input(val) {
        if (!this.isDragging) {
          this.swipe();
        }
      }
    },
  
    mounted() {

      var vm = this;
      axios
        .get("http://shareportugal.m-iti.org/api/locals")
        .then(function(response) {
              var res = response.data;
              for (var i in response.data) {
                console.log("entrei");
                if(res[0]) {
                  vm.image1 = res[0]; 
                }
                if(res[1]) {
                  vm.image2 = res[1]; 
                }
                if(res[2]) {
                  vm.image3 = res[2]; 
                }
                if(res[3]) {
                  vm.image4 = res[3]; 
                }
                if(res[4]) {
                  vm.image5 = res[4]; 
                }
                if(res[5]) {
                  vm.image6 = res[5]; 
                }
                if(res[6]) {
                  vm.image7 = res[6]; 
                }
                if(res[7]) {
                  vm.image8 = res[7]; 
                }
                    

              }
                              // console.log(vm.image[1]);

            });


        // .then(response => (
        //   this.image1 = response.data[0],
        //   this.image2 = response.data[1],
        //   this.image3 = response.data[2]
        //   // this.image4 = response.data[3],
        //   // this.image5 = response.data[4],
        //   // this.image6 = response.data[5],
        //   // this.image7 = response.data[6],
        //   // this.image8 = response.data[7]
        //   ));
    },
    components: {
      VueSlideBar
    }
  };
</script>

<style scoped>

.center {
    position: fixed;
    width: 100%;
    height: 650px;
    overflow: hidden;
    bottom: 0px;
    left: 0px;
  }
  
  
  .img-buildings {
    position: absolute;
    height: 650px;
    bottom: 0px;
  }
  
  #img1 {
    position: absolute;
    height: 44px;
    top: 215px;
    left: 689px;
  }
  
  #img1:hover {
    transform: scale(2);
  }

  #img2 {
    position: absolute;
    height: 44px;
    top: 215px;
    left: 761px;
  }
  
  #img2:hover {
    transform: scale(2);
  }

  #img3 {
    position: absolute;
    height: 44px;
    top: 215px;
    left: 887px;
  }
  
  #img3:hover {
    transform: scale(2);
  }

  #img4 {
    position: absolute;
    height: 44px;
    top: 215px;
    left: 1014px;
  }
  
  #img4:hover {
    transform: scale(2);
  }

  #img5 {
    position: absolute;
    height: 44px;
    top: 215px;
    left: 1086px;
  }
  
  #img5:hover {
    transform: scale(2);
  }
  
  #img6 {
    position: absolute;
    height: 44px;
    top: 222px;
    left: 1462px;
  }
  
  #img6:hover {
    transform: scale(2);
  }

  #img7 {
    position: absolute;
    height: 44px;
    top: 222px;
    left: 1546px;
  }
  
  #img8:hover {
    transform: scale(2);
  }

  #img8 {
    position: absolute;
    height: 44px;
    top: 222px;
    left: 1630px;
  }
  
  #img7:hover {
    transform: scale(2);
  }

  #div-vue-bar {
    width: 30%;
    position: absolute;
    bottom: 3.5%;
    left: 29%;
    z-index: 99999;
  }
  
  #toggleButton {
    position: absolute;
    bottom: 2.4%;
    right: 29%;
    z-index: 99999;
  }
  
  #tooltip {
    height: 70px;
    position: relative;
    bottom: 48px;
  }
  
  .background {
    background-image: url("/static/front/images/background.png");
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
  
  .backgroundNight {
    background-image: url("/static/front/images/backgroundNight.png");
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
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 3s;
  }
  
  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */
  
  {
    opacity: 0;
  }
  
  #loginButton {
    position: absolute;
    top: 50px;
    right: 3%;
  }
  
  .sun {
    position: absolute;
    bottom: 2.5%;
    right: 25.5%;
    width: 35px;
    height: 35px;
  }
  
  .moon {
    position: absolute;
    bottom: 2.5%;
    left: 64.2%;
    width: 35px;
    height: 35px;
  }

  .madeira {
  position: absolute;
  top: 20%;
  left: 5%;
  width: 150px;
  height: 150px;
  }

    .madeiraText {
  position: absolute;
  top: 20%;
  left: 35%;
  width: 350px;
  height: 150px;
  }

.lisbon {
  position: absolute;
  bottom: 13%;
  left: 5%;
  width: 150px;
  height: 150px;
  }

.lisboa {
opacity: 0.2;
}

      .lisbonText {
  position: absolute;
  bottom: 14%;
  left: 35%;
  width: 350px;
  height: 150px;
  }
  /*
 * Made by Erik Terwan
 * 24th of November 2015
 * MIT License
 *
 *
 * If you are thinking of using this in
 * production code, beware of the browser
 * prefixes.
 */



#menuToggle
{
  display: block;
  position: absolute;
  top: 50px;
  left: 3%;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: white;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: fixed;
  top: 3%;
  left: 1%;
  width: 600px;
  height: 500px;
  /* padding: 50px; */
  /* padding-top: 125px; */
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-200%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  border-radius: 20px;
  opacity: 0.9;

}

/* #menu li
{
  padding: 10px 0;
  font-size: 22px;
} */

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}

  
</style>