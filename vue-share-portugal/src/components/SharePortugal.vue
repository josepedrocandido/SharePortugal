<style>
@import '../css/base.css';
@import '../css/homePage.css';
@import '../css/colors.css';
</style>

<template>
<div>
    <div class="topBar">
        <div class="hamburguer-menu">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu" class="white-color">
                    <li class="city-menu city-hover">
                        <img src="/static/homePage/madeira.png" class="city-image">
                        <div>
                            <h4>Madeira</h4>
                            <p>Come and meet the local people of Madeira, their stories and their land.</p>
                        </div>
                    </li>
                    <li class="city-menu" style="opacity:0.3;">
                        <img src="/static/homePage/lisbon.png" class="city-image">
                        <div>
                            <h4>Lisboa</h4>
                            <p>Come and meet the local people of Lisboa, their stories and their land.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <router-link :to="{name: 'Login'}">
            <button id="loginButton" type="button" class="btn btn-light">Login</button>
        </router-link>
    </div>

    <transition name="fade">
        <div v-if="day" class="background day-background"></div>
    </transition>
    <transition name="fade">
        <div v-if="!day" class="background night-background"></div>
    </transition>

    <div id="div-vue-bar">
        <VueSlideBar v-model="value2" :min="slider.minValue" :max="slider.maxValue" :processStyle="slider.processStyle" :lineHeight="slider.lineHeight" :speed="0.1" :tooltipStyles="{ backgroundColor: 'tomato', borderColor: 'tomato' }" @dragEnd="dragEnd" @dragStart="dragStart" @input="input">
            <template slot="tooltip" slot-scope="tooltip">
                <img id="tooltip" src="/static/images/location.png">
            </template>
        </VueSlideBar>
    </div>

    <div class="center" id="content" ref="content">
        <transition name="fade">
            <img v-if="day" class="img-buildings" src="/static/homePage/buildingsDay.png">
        </transition>
        <transition name="fade">
            <img v-if="!day" class="img-buildings" src="/static/homePage/buildingsNight.png">
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
    <toggle-button id="toggleButton" v-model="day" :value="true" :speed="3500" :color="{checked: 'tomato', unchecked: '#299578'}" :height="17" />
    <transition name="fade"><img v-if="!day" class="moon" src="/static/Illustrator Files/moon.png"></transition>
    <transition name="fade"><img v-if="day" class="moon" src="/static/Illustrator Files/moonGrey.png"></transition>
</div>
</template>

<script>
import axios from "axios";
import VueSlideBar from "vue-slide-bar";
import Vue from "vue";
import ToggleButton from "vue-js-toggle-button";
import {
    rootLink
} from '../../src/main.js';

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
            getUsersLink: rootLink + 'locals',
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
                this.scrollTo(content, totalToMove, 600);
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
            .get(this.getUsersLink)
            .then(function (response) {
                var res = response.data;
                for (var i in response.data) {
                    if (res[0]) {
                        vm.image1 = res[0];
                    }
                    if (res[1]) {
                        vm.image2 = res[1];
                    }
                    if (res[2]) {
                        vm.image3 = res[2];
                    }
                    if (res[3]) {
                        vm.image4 = res[3];
                    }
                    if (res[4]) {
                        vm.image5 = res[4];
                    }
                    if (res[5]) {
                        vm.image6 = res[5];
                    }
                    if (res[6]) {
                        vm.image7 = res[6];
                    }
                    if (res[7]) {
                        vm.image8 = res[7];
                    }
                }
            });
    },
    components: {
        VueSlideBar
    }
};
</script>
