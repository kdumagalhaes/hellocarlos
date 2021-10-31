<template>
  <section class="projects" id="portfolio">
    <SectionTitle title="Portfolio" lineWidth="300px" />
    <div class="grid">
      <ProjectCard repo="onebithealth" />
      <ProjectCard repo="interactive-pricing-component-vue" />
      <ProjectCard repo="onebitcoin" />
      <ProjectCard repo="signup-form-vue" />
      <ProjectCard repo="onebithealth" />
      <ProjectCard repo="onebithealth" />
    </div>
  </section>
</template>

<script>
// components
import SectionTitle from "./SectionTitle.vue";
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "Projects",
  components: {
    SectionTitle,
    ProjectCard,
  },
};
</script>

<style lang="scss" scoped>
.projects {
  padding: 100px 180px 0 180px;
  margin-bottom: 100px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}

@media only screen and (max-width: $tablet) {
  .projects {
    padding: $safe-area-padding;
  }

  .grid,
  .projects {
    display: flex;
    flex-direction: column;
  }
}
</style>
