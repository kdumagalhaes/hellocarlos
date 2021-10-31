<template>
  <a
    :href="link"
    target="_blank"
    class="button"
    :style="{
      '--maxWidth': maxWidth,
      '--height': height,
      '--fontSize': fontSize,
    }"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "Basic Button",
  props: {
    text: {
      type: String,
      required: true,
    },
    maxWidth: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    fontSize: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  max-width: var(--maxWidth);
  height: var(--height);
  background: transparent;
  border: 1px solid $carolina-blue;
  border-radius: 4px;
  padding: 0 20px;
  color: $carolina-blue;
  transition: background 0.3s;
  text-decoration: none;
  font-size: var(--fontSize);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: $celadon-blue;
  }
}
</style>
