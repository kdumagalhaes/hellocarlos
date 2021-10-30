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
  color: $light-yellow;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  &::after {
    content: "";
    display: block;
    width: var(--lineWidth);
    height: 1px;
    background-color: $light-blue;
    margin-left: 30px;
  }
}
</style>