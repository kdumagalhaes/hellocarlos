<template>
  <Header />
  <Hero />
  <SocialMedia />
</template>

<script>
// components
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import SocialMedia from "./components/SocialMedia.vue";
export default {
  name: "App",
  components: {
    Header,
    Hero,
    SocialMedia,
  },
};
</script>
