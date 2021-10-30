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
  border: 1px solid $light-green;
  border-radius: 4px;
  padding: 0 20px;
  color: $light-green;
  transition: background 0.3s;

  &:hover {
    background: $primary-green;
  }
}
</style>
