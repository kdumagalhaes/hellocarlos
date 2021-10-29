<template>
  <header class="header">
    <span class="logo">
      cp <span class="dot">.</span>
      <h1>Carlos Pereira - Web developer</h1>
    </span>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.logo {
  text-transform: uppercase;
  h1 {
    font-size: 1px;
    color: transparent;
    position: absolute;
    left: -999px;
  }
}
</style>
