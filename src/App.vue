<template>
  <Header />
  <Hero />
  <SocialMedia />
  <About />
</template>

<script>
// components
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import SocialMedia from "./components/SocialMedia.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    SocialMedia,
    About,
  },
};
</script>
