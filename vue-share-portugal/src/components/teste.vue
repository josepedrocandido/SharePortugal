<template>
  <div>
    <VueSlideBar
      v-model="slider.value"
      :data="slider.data"
      :range="slider.range"
      :labelStyles="{ color: '#4a4a4a', backgroundColor: '#4a4a4a' }"
      :processStyle="{ backgroundColor: '#d8d8d8' }"
      @callbackRange="callbackRange">
      <template slot="tooltip" slot-scope="tooltip">
        <img src="static/images/rectangle-slider.svg">
      </template>
    </VueSlideBar>
    <h2>Value: {{slider.value}}</h2>
    <h2>Label: {{rangeValue.label}}</h2>
    <br><br>

            
  <div id="app">
    
  
    <button id="left-button" @click="swipeLeft">swipe left</button>
    <button id="right-button" @click="swipeRight">swipe right</button>

  
    <div class="center" id="content" ref="content">
      <div class="internal">
        <img src="https://i.ibb.co/rvJ3Hwp/buildings.png" alt="Smiley face">
        <img src="https://i.ibb.co/rvJ3Hwp/buildings.png" alt="Smiley face">
      </div>
    </div>
  
  
  </div>
  </div>
</template>

<script>
import VueSlideBar from 'vue-slide-bar'

export default {
  data () {
    return {
      rangeValue: {},
      slider: {
        value: 400,
        data: [
          400,
          800,
          1200,
          1600,
          2000,
          2400,
          2800
        ],
        range: [
          {
            label: '1'
          },
          {
            label: '2',
            isHide: true
          },
          {
            label: '3'
          },
          {
            label: '4',
            isHide: true
          },
          {
            label: '5'
          },
          {
            label: '6',
            isHide: true
          },
          {
            label: '7'
          }
        ]
      }
    }
  },
  methods: {


          /**
       * scrollTo - Horizontal Scrolling
       * @param {(HTMLElement ref)} element - Scroll Container
       * @param {number} scrollPixels - pixel to scroll
       * @param {number} duration -  Duration of scrolling animation in millisec
       */
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
  
      swipeLeft() {
        const content = this.$refs.content;
        this.scrollTo(content, -400, 800);
      },
      swipeRight() {
        const content = this.$refs.content;
        this.scrollTo(content, 400, 800);
      },
          callbackRange (val) {
      this.rangeValue = val
      this.scrollTo(content, 400, 800);
    },
  },
  components: {
    VueSlideBar
  }
}
</script>

<style scoped>
 #app {
    text-align: center;
    font-size: 20px;
  }
  
  h1 {
    font-family: "Arial";
    text-align: center;
  }
  
  
  /* The slider itself */
  
  .slider {
    -webkit-appearance: none;
    /* Override default CSS styles */
    appearance: none;
    height: 25px;
    /* Specified height */
    background: #d3d3d3;
    /* Grey background */
    outline: none;
    /* Remove outline */
    opacity: 0.7;
    /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: 0.2s;
    /* 0.2 seconds transition on hover */
    transition: opacity 0.2s;
  }
  
  
  /* Mouse-over effects */
  
  .slider:hover {
    opacity: 1;
    /* Fully shown on mouse-over */
  }
  
  
  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Override default look */
    appearance: none;
    width: 65px;
    /* Set a specific slider handle width */
    height: 25px;
    /* Slider handle height */
    background: #4caf50;
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
  }
  
  .slider::-moz-range-thumb {
    width: 25px;
    /* Set a specific slider handle width */
    height: 25px;
    /* Slider handle height */
    background: #4caf50;
    /* Green background */
    cursor: pointer;
    /* Cursor on hover */
  }
  
  
  /* .left {
        float: left;
        width: 30%;
        height: 200px;
        border: 1px solid green;
      } */
  
  
  /* .internal {
        width: 31.75%;
        height: 100%;
        border: 1px solid black;
        display: inline-block;
      } */
  
  .center {
    float: left;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    margin: 1px;
    overflow: hidden;
    white-space: nowrap;
  }
  
  img {
    height: 500px;
  }
  
  
  /* .right {
        float: right;
        width: 30%;
        height: 200px;
        border: 1px solid black;
      } */
</style>
