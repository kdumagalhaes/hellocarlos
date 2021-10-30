<template>
  <Header />
  <Hero />
  <SocialMedia />
  <About />
  <Projects />
</template>

<script>
// components
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import SocialMedia from "./components/SocialMedia.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    SocialMedia,
    About,
    Projects,
  },
};
</script>
