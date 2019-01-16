<template>
  <div>
    <div class="background"></div>

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
        @input="input"
      >
        <template slot="tooltip" slot-scope="tooltip">
          <img id="tooltip" src="/static/images/location.png">
        </template>
      </VueSlideBar>
    </div>

    <div class="center" id="content" ref="content">
      <img class="img-buildings" src="/static/Illustrator Files/buildingsDay.png">
      <router-link :to="{name: 'Room', params: { _id: image1._id }}">
        <img :src="localhost + image1.localImage" id="img1">
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueSlideBar from "vue-slide-bar";
export default {
  data() {
    return {
      value2: 2,
      slider: {
        lineHeight: 15,
        processStyle: {
          backgroundColor: "red"
        },
        minValue: 1,
        maxValue: 11,
        isDragging: false
      },
      oldValue: 1, // variavel que guarda o valor anterior do scroll
      image1: "",
      localhost: "http://localhost:3000/"
    };
  },
  methods: {
    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      // Condition to check if scrolling is required
      if (
        !(
          (scrollPos === 0 || scrollPixels > 0) &&
          (element.clientWidth + scrollPos === element.scrollWidth ||
            scrollPixels < 0)
        )
      ) {
        // Get the start timestamp
        const startTime =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();

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
    axios
      .get("http://localhost:3000/locals")
      .then(response => (this.image1 = response.data[0]));
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

#div-vue-bar {
  width: 30%;
  position: absolute;
  top: 90.5%;
  left: 35%;
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
</style>