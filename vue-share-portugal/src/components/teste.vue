<template>
  <div>
    <div id="div-vue-bar">
      <VueSlideBar
        v-model="value2"
        :min="slider.minValue"
        :max="slider.maxValue"
        :processStyle="slider.processStyle"
        :lineHeight="slider.lineHeight"
        :speed="0.1"
        :tooltipStyles="{ backgroundColor: 'red', borderColor: 'red' }"
        @dragEnd="dragEnd"
        @dragStart="dragStart"
        @input="input">
        <template slot="tooltip" slot-scope="tooltip">
          <img id="tooltip" src="/static/images/location.png">
        </template>
      </VueSlideBar>
    </div>
    <div class="center" id="content" ref="content">
      <div class="internal">
        <img id="img-buildings" src="https://i.ibb.co/rvJ3Hwp/buildings.png">
      </div>
    </div> 
  </div>
</template>

<script>
import VueSlideBar from 'vue-slide-bar'
  export default {
    data () {
      return {
        value2: 5,
        slider: {
          lineHeight: 15,
          processStyle: {
            backgroundColor: 'red'
          },
          minValue: 1,
          maxValue: 10,
          isDragging: false
        },
        oldValue: 1 // variavel que guarda o valor anterior do scroll
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
        if(difference != 0) {
          var totalToMove;
          // Mexe para a direita (positivo)
          if(this.oldValue < this.value2) {
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
      dragEnd (val) {
        this.swipe();
      },
      dragStart(val) {
        this.isDragging = true;
      },
      input(val) {
        if(!this.isDragging) {
          this.swipe();
        }
      }
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
    background: #444242;
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
  .center {
    float: left;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    margin: 1px;
    overflow: hidden;
    white-space: nowrap;
  }
  
  .internal > img {
    height: 800px;
  }
  
  #div-vue-bar {
    width: 50%;
    margin-left: 25%;
  }

  #tooltip {
    height: 30px;
  }
</style>