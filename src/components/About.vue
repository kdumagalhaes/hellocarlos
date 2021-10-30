<template>
  <section class="about" id="about">
    <SectionTitle title="About Me" lineWidth="300px" />
  </section>
</template>

<script>
// components
import SectionTitle from "./SectionTitle.vue";
export default {
  name: "About",
  components: {
    SectionTitle,
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: $section-padding;
}
</style>
