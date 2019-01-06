<template>
<div>
<!-- <nav role="navigation">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <a href="#">
                    <li><img src="static/front/images/madeira.png" height="120" width="120">
                    </li>
                </a>
                <a href="#">
                    <li>Lisbon</li>
                </a>
            </ul>
        </div>
    </nav> -->

    <!-- Login Button   -->
    <!-- <div class="topo">
        <a href="./signup/signup.html" class="myButton">Login</a>
    </div> -->

    <!-- Buildings Navigation   -->
    <div class="frame" id="basic">
        <ul class="slidee">
            <li>
                <img id="buildings" src="static/front/images/buildings.png">
            </li>
        </ul>
    </div>

    <!-- Footer Menu (Social Networks / Slide Bar )   -->
    <!-- <div class="footer">
        <div class="socialNetworks">
            <a class="fa fa-facebook"></a>
            <a class="fa fa-twitter"></a>
            <a class="fa fa-instagram"></a>
        </div>
        <div class="textSharingFunchal">
            <p>Sharing <b>Funchal</b></p>
        </div>
    </div> -->
    <div class="slideBar">
        <div class="sly_scrollbar">
            <div class="sly_handle">
            </div>
        </div>
        <div style="clear:both;"></div>
    </div>


    <!-- Day and Night Buttons   -->
    <!-- <div class="button-con">

        <label for='cb1'>

          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="dayIcon" x="0px" y="0px" viewBox="0 0 35 35" style="enable-background:new 0 0 35 35;" xml:space="preserve">
            <g id="Sun">
              <g>
                <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M6,17.5C6,16.672,5.328,16,4.5,16h-3C0.672,16,0,16.672,0,17.5    S0.672,19,1.5,19h3C5.328,19,6,18.328,6,17.5z M7.5,26c-0.414,0-0.789,0.168-1.061,0.439l-2,2C4.168,28.711,4,29.086,4,29.5    C4,30.328,4.671,31,5.5,31c0.414,0,0.789-0.168,1.06-0.44l2-2C8.832,28.289,9,27.914,9,27.5C9,26.672,8.329,26,7.5,26z M17.5,6    C18.329,6,19,5.328,19,4.5v-3C19,0.672,18.329,0,17.5,0S16,0.672,16,1.5v3C16,5.328,16.671,6,17.5,6z M27.5,9    c0.414,0,0.789-0.168,1.06-0.439l2-2C30.832,6.289,31,5.914,31,5.5C31,4.672,30.329,4,29.5,4c-0.414,0-0.789,0.168-1.061,0.44    l-2,2C26.168,6.711,26,7.086,26,7.5C26,8.328,26.671,9,27.5,9z M6.439,8.561C6.711,8.832,7.086,9,7.5,9C8.328,9,9,8.328,9,7.5    c0-0.414-0.168-0.789-0.439-1.061l-2-2C6.289,4.168,5.914,4,5.5,4C4.672,4,4,4.672,4,5.5c0,0.414,0.168,0.789,0.439,1.06    L6.439,8.561z M33.5,16h-3c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h3c0.828,0,1.5-0.672,1.5-1.5S34.328,16,33.5,16z     M28.561,26.439C28.289,26.168,27.914,26,27.5,26c-0.828,0-1.5,0.672-1.5,1.5c0,0.414,0.168,0.789,0.439,1.06l2,2    C28.711,30.832,29.086,31,29.5,31c0.828,0,1.5-0.672,1.5-1.5c0-0.414-0.168-0.789-0.439-1.061L28.561,26.439z M17.5,29    c-0.829,0-1.5,0.672-1.5,1.5v3c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-3C19,29.672,18.329,29,17.5,29z M17.5,7    C11.71,7,7,11.71,7,17.5S11.71,28,17.5,28S28,23.29,28,17.5S23.29,7,17.5,7z M17.5,25c-4.136,0-7.5-3.364-7.5-7.5    c0-4.136,3.364-7.5,7.5-7.5c4.136,0,7.5,3.364,7.5,7.5C25,21.636,21.636,25,17.5,25z" />
              </g>
            </g>
          </svg>

        </label>

        <input class='toggle' id='cb1' type='checkbox'>


        <label class='toggle-button' for='cb1'></label>

        <label for='cb1'>

          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="nightIcon" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
            <path d="M96.76,66.458c-0.853-0.852-2.15-1.064-3.23-0.534c-6.063,2.991-12.858,4.571-19.655,4.571  C62.022,70.495,50.88,65.88,42.5,57.5C29.043,44.043,25.658,23.536,34.076,6.47c0.532-1.08,0.318-2.379-0.534-3.23  c-0.851-0.852-2.15-1.064-3.23-0.534c-4.918,2.427-9.375,5.619-13.246,9.491c-9.447,9.447-14.65,22.008-14.65,35.369  c0,13.36,5.203,25.921,14.65,35.368s22.008,14.65,35.368,14.65c13.361,0,25.921-5.203,35.369-14.65  c3.872-3.871,7.064-8.328,9.491-13.246C97.826,68.608,97.611,67.309,96.76,66.458z" />
          </svg>
        </label>
    </div> -->
</div>

</template>

<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',

  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* body,
html {
    height: 100%;
    margin: 0;
} */


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

/* #menuToggle {
    display: block;
    position: fixed;
    top: 50px;
    left: 50px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
} */

/* #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
} */

/* #menuToggle span {
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
} */

/* #menuToggle span:first-child {
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
} */

/* #menu {
    opacity: 0.95;
    position: absolute;
    width: 500px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    height: 600px;
    border-radius: 10px;
} */

/* #menu li {
    padding: 10px 0;
    font-size: 22px;
}

#menuToggle input:checked~ul {
    transform: none;
} */


/* Login Button */

/* .topo {
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
} */


/* Footer Menu (Social Networks / Slide Bar ) */

/* .footer {
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
} */


/* Day and Night Buttons */

/* .button-con {
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
} */

</style>
