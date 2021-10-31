<template>
  <transition
    enter-active-class="animate__animated animate__slideInDown"
    appear
  >
    <header class="header">
      <span class="logo">
        cp<span class="dot">.</span>
        <h1>Carlos Pereira - Web developer</h1>
      </span>

      <nav class="top-navigation">
        <ul class="nav-list">
          <li><a href="#about">about</a></li>
          <li><a href="#portfolio">portfolio</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
        <BasicButton
          text="Resume"
          height="40px"
          fontSize="1rem"
          link="https://www.dropbox.com/s/w76q57xlhaf56w8/DevCV.pdf?dl=0"
        />
      </nav>
    </header>
  </transition>
</template>

<script>
// components
import BasicButton from "./BasicButton.vue";

export default {
  name: "Header",
  components: {
    BasicButton,
  },
};
</script>

<style lang="scss" scoped>
.nav-list,
.top-navigation,
.header {
  display: flex;
  align-items: center;
}

.nav-list {
  font-family: $monospace;
  font-size: 1.1rem;

  li {
    margin-right: 30px;

    a {
      text-decoration: none;
      color: $azure;
      transition: color 0.3s;

      &:hover {
        color: $carolina-blue;
      }
    }
  }
}

.header {
  padding: $safe-area-padding;
  height: 80px;
  justify-content: space-between;
  border-top: 2px solid $carolina-blue;
}

.logo-responsive {
  display: none;
}

.logo {
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: $black;
  color: $azure;

  .dot {
    color: $carolina-blue;
  }
  h1 {
    font-size: 1px;
    color: transparent;
    position: absolute;
    left: -999px;
  }
}

@media only screen and (max-width: $mobile) {
  .top-navigation {
    display: none;
  }
}
</style>
