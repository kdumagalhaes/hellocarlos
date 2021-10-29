<template>
  <header class="header">
    <span class="logo">
      cp<span class="dot">.</span>
      <h1>Carlos Pereira - Web developer</h1>
    </span>
    <nav class="top-navigation">
      <ul class="nav-list">
        <li><a href="#">about</a></li>
        <li><a href="#">experience</a></li>
        <li><a href="#">developer</a></li>
        <li><a href="#">music</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.nav-list,
.header {
  display: flex;
}

.nav-list {
  li {
    margin-right: 30px;

    a {
        text-decoration: none;
    }
  }
}

.header {
  padding: $safe-area-padding;
  background: black;
  height: 70px;
  backdrop-filter: blur(10px);
  align-items: center;
  justify-content: space-between;
}
.logo {
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: $black;
  color: $light-yellow;

  .dot {
    color: $light-green;
  }
  h1 {
    font-size: 1px;
    color: transparent;
    position: absolute;
    left: -999px;
  }
}
</style>
