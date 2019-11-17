<template>
<div>
    <div class="background login-background"></div>

    <div class="top-bar">
        <router-link :to="{name: 'SharePortugal'}">
            <div class="top-button">
                <img src="/static/login/home.svg">
                <h5>Back to The City</h5>
            </div>
        </router-link>
    </div>
    <div class="wrapperAdmin">
        <div class="about-layout">
            <h1 class="titleAbout">Share Portugal</h1>
            <p>Share Portugal is a participatory platform designed
                and implemented with the aim of fostering dialogue
                between locals and tourists. The platform exploits the crowdsourcing
                paradigm to collect the voice of the locals in order
                to provide tourists with authentic experiences. The system was
                designed as an immersive visual storytelling experience, to let the
                user discover the locals’ story in an interactive rich environment.
                The insights that emerged during a preliminary evaluation with
                users point out that the system is able to deepen the relationship
                between locals and tourists while interacting with the platform.</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "AboutProject",

    data() {
        return {}
    },

    methods: {

    },

    mounted() {

    }
};
</script>

<style>
@import '../css/base.css';
@import '../css/colors.css';
@import '../css/admin.css';
@import '../css/login.css';
@import '../css/topBar.css';
@import '../css/admin.css';

.about-layout {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
}

.titleAbout {
    font-size: 5rem;
    
}
</style>
