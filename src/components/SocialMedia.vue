<template>
  <transition enter-active-class="animate__animated animate__slideInUp" appear>
    <ul class="social-media">
      <li>
        <a href="https://github.com/kdumagalhaes" target="blank"
          ><img
            class="social-media-icon"
            src="@/assets/img/social-media-icons/github.svg"
            alt="github"
        /></a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/kdumagalhaes/" target="blank"
          ><img
            class="social-media-icon"
            src="@/assets/img/social-media-icons/linkedin.svg"
        /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/kdumagalhaes/" target="blank"
          ><img
            class="social-media-icon"
            src="@/assets/img/social-media-icons/instagram.svg"
            alt="instagram"
        /></a>
      </li>
      <li>
        <a href="https://twitter.com/kdumagalhaes" target="blank"
          ><img
            class="social-media-icon"
            src="@/assets/img/social-media-icons/twitter.svg"
            alt="twitter"
        /></a>
      </li>
      <li>
        <a
          href="https://open.spotify.com/artist/7Kckvhfw7lWaH6ptEuneQv"
          target="blank"
          ><img
            class="social-media-icon"
            src="@/assets/img/social-media-icons/spotify.svg"
            alt="spotify"
        /></a>
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "Social Media",
};
</script>

<style lang="scss" scoped>
.social-media {
  position: fixed;
  bottom: 70px;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 80px;
    background-color: $azure;
    margin-left: 58px;
  }
}

.social-media-icon {
  width: 20px;
  height: 20px;
  margin: 0 0 15px 50px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.3);
  }
}

@media only screen and (max-width: $tablet) {
  .social-media {
    display: none;
  }
}
</style>
