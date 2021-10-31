<template>
  <h2 class="section-title" :style="{ '--lineWidth': lineWidth }">
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: "Section title",
  props: {
    title: {
      type: String,
      required: true,
    },
    lineWidth: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  color: $carolina-blue;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  &::after {
    content: "";
    display: block;
    width: 100%;
    max-width: var(--lineWidth);
    height: 1px;
    background-color: $azure;
    margin-left: 30px;
  }
}
</style>
