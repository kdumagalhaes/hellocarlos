<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Basic Button",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 40px;
  background: transparent;
  border: 1px solid $carolina-blue;
  border-radius: 4px;
  padding: 0 20px;
  color: $carolina-blue;
  transition: background 0.3s;

  &:hover {
    background: $celadon-blue;
  }
}
</style>
