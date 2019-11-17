<style>
@import '../css/base.css';
@import '../css/homePage.css';
@import '../css/colors.css';
@import '../css/topBar.css';
@import '../css/popup.css';
@import '../css/windowsPositions.css';
</style>

<template>
<div>
    <div class="top-bar">
        <div @click="popup = !popup" v-if="!popup" class="top-button">
            <img src="/static/homePage/pin.svg">
            <h5>Madeira</h5>
        </div>
        <div v-if="popup" class="popup">
            <div class="top-popup-bar">
                <div class="top-button top-button-no-hover">
                    <img src="/static/homePage/pinColored.svg">
                    <h5 class="top-button-active">Madeira</h5>
                </div>
                <div @click="popup = !popup" class="top-button">
                    <img style="height:25px;margin:0;" src="/static/homePage/close.svg">
                </div>
            </div>

            <div @click="popup = !popup" class="city-picker">
                <img src="/static/homePage/madeira.png" class="city-image">
                <div class="madeira-city">
                    <h4>Madeira</h4>
                    <p>In the middle of the Atlantic, the islands of Madeira and Porto Santo are a haven of natural beauty. Come discover the locals of these islands that sit between the blue of the sea and the emerald green of the vegetation!</p>
                </div>
            </div>
            <div class="city-picker city-picker-disabled">
                <img src="/static/homePage/lisbon.png" class="city-image">
                <div class="lisboa-city">
                    <h4>Lisboa</h4>
                    <p>The city of the seven hills and the gateway to continental Europe. The self-pronounced ‘alfacinhas’ have a lot to show you in Europe’s sunniest capital. Join them in discovering all the hidden treasures of this beautiful city!</p>
                </div>
            </div>
        </div>
        <router-link :to="{name: 'Login'}">
            <div class="top-button">
                <img src="/static/homePage/user.svg">
                <h5>Login</h5>
            </div>
        </router-link>
    </div>

    <transition name="fade">
        <div v-if="day" class="background day-background"></div>
    </transition>
    <transition name="fade">
        <div v-if="!day" class="background night-background"></div>
    </transition>

    <div class="center" id="content" ref="content">
        <transition name="fade">
            <img v-if="day" class="img-buildings" src="/static/homePage/buildingsDay.png">
        </transition>
        <transition name="fade">
            <img v-if="!day" class="img-buildings" src="/static/homePage/buildingsNight.png">
        </transition>
        <router-link v-if="image1" :to="{name: 'Room', params: { _id: image1._id }}">
            <img :src="image1.localImage" id="img1" class="windows">
        </router-link>
        <router-link v-if="image2" :to="{name: 'Room', params: { _id: image2._id }}">
            <img :src="image2.localImage" id="img2" class="windows">
        </router-link>
        <router-link v-if="image3" :to="{name: 'Room', params: { _id: image3._id }}">
            <img :src="image3.localImage" id="img3" class="windows">
        </router-link>
        <router-link v-if="image4" :to="{name: 'Room', params: { _id: image4._id }}">
            <img :src="image4.localImage" id="img4" class="windows">
        </router-link>
        <router-link v-if="image5" :to="{name: 'Room', params: { _id: image5._id }}">
            <img :src="image5.localImage" id="img5" class="windows">
        </router-link>
        <router-link v-if="image6" :to="{name: 'Room', params: { _id: image6._id }}">
            <img :src="image6.localImage" id="img6" class="windows">
        </router-link>
        <router-link v-if="image7" :to="{name: 'Room', params: { _id: image7._id }}">
            <img :src="image7.localImage" id="img7" class="windows">
        </router-link>
        <router-link v-if="image8" :to="{name: 'Room', params: { _id: image8._id }}">
            <img :src="image8.localImage" id="img8" class="windows">
        </router-link>
        <router-link v-if="image9" :to="{name: 'Room', params: { _id: image9._id }}">
            <img :src="image9.localImage" id="img9" class="windows">
        </router-link>
        <router-link v-if="image10" :to="{name: 'Room', params: { _id: image10._id }}">
            <img :src="image10.localImage" id="img10" class="windows">
        </router-link>
        <router-link v-if="image11" :to="{name: 'Room', params: { _id: image11._id }}">
            <img :src="image11.localImage" id="img11" class="windows">
        </router-link>
        <router-link v-if="image12" :to="{name: 'Room', params: { _id: image12._id }}">
            <img :src="image12.localImage" id="img12" class="windows">
        </router-link>
        <router-link v-if="image13" :to="{name: 'Room', params: { _id: image13._id }}">
            <img :src="image13.localImage" id="img13" class="windows">
        </router-link>
        <router-link v-if="image14" :to="{name: 'Room', params: { _id: image14._id }}">
            <img :src="image14.localImage" id="img14" class="windows">
        </router-link>
        <router-link v-if="image15" :to="{name: 'Room', params: { _id: image15._id }}">
            <img :src="image15.localImage" id="img15" class="windows">
        </router-link>
        <router-link v-if="image16" :to="{name: 'Room', params: { _id: image16._id }}">
            <img :src="image16.localImage" id="img16" class="windows">
        </router-link>

    </div>
    <div class="bottom-menu">
        <div class="bottom-bar">
            <div class="contacts">
                <a href="https://github.com/josepedrocandido/SharePortugal" target="_blank"><img src="/static/homePage/github.svg"></a>
                <router-link :to="{name: 'Login'}"><a href="">More about the project</a></router-link>
            </div>
            <div id="div-vue-bar">
                <VueSlideBar v-model="value2" :min="slider.minValue" :max="slider.maxValue" :processStyle="slider.processStyle" :lineHeight="slider.lineHeight" :speed="0.1" :tooltipStyles="{ backgroundColor: 'tomato', borderColor: 'tomato' }" @dragEnd="dragEnd" @dragStart="dragStart" @input="input">
                    <template slot="tooltip" slot-scope="tooltip">
                        <img id="tooltip" src="/static/homePage/location.svg">
                    </template>
                </VueSlideBar>
            </div>
            <div class="day-to-night-secion">
                <img v-if="!day" class="sun-night-icon" src="/static/homePage/moon.svg">
                <img v-if="day" class="sun-night-icon" src="/static/homePage/moonGrey.svg">
                <toggle-button id="toggleButton" v-model="day" :value="true" :speed="3500" :color="{checked: 'tomato', unchecked: '#299578'}" :height="17" />
                <img v-if="day" class="sun-night-icon" src="/static/homePage//sun.svg">
                <img v-if="!day" class="sun-night-icon" src="/static/homePage/sunGrey.svg">
            </div>
        </div>
    </div>
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
            image9: "",
            image10: "",
            image11: "",
            image12: "",
            image13: "",
            image14: "",
            image15: "",
            image16: "",
            getUsersLink: rootLink + 'locals',
            day: true,
            teste: "",
            popup: false
        };
    },

    watch: {
        day(newValue) {
            if (this.day) {
                this.slider.processStyle.backgroundColor = "tomato";
            } else {
                this.slider.processStyle.backgroundColor = "#299578";
            }
        },

    },

    methods: {

        openPopup: function (event) {
            if (this.popup) {
                this.popup = false;
            } else this.popup = true;
        },
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
                    if (res[8]) {
                        vm.image9 = res[8];
                    }
                    if (res[9]) {
                        vm.image10 = res[9];
                    }
                    if (res[10]) {
                        vm.image11 = res[10];
                    }
                    if (res[11]) {
                        vm.image12 = res[11];
                    }
                    if (res[12]) {
                        vm.image13 = res[12];
                    }
                    if (res[13]) {
                        vm.image14 = res[13];
                    }
                    if (res[14]) {
                        vm.image15 = res[14];
                    }
                    if (res[15]) {
                        vm.image16 = res[15];
                    }
                }
            });
    },
    components: {
        VueSlideBar
    }
};
</script>
