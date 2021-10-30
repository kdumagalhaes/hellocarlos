<template>
  <transition enter-active-class="animate__animated animate__slideInUp" appear>
    <main class="hero">
      <p class="greeting">Hello! My name is</p>
      <h1 class="name">Carlos Pereira</h1>
      <p class="bio">
        I’m a software developer student passionate about
        <strong>frontend</strong> stuff, and sometimes a
        <strong>musician</strong>. Currently, I’m a
        <strong>Product Technical Leader</strong> working on physical stores
        solutions at
        <a href="https://vtex.com" target="_blank" class="link vtex">vtex</a>.
      </p>
      <ul class="social-media-responsive">
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
    </main>
  </transition>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 400px;
  padding: 0 40px 0 180px;
}

.greeting {
  color: $light-green;
  font-family: $monospace;
  font-size: 1.3rem;
}

.name,
.bio {
  color: $light-yellow;
  margin-bottom: 20px;
}

.name {
  font-size: 5rem;
}

.bio {
  width: 100%;
  max-width: 600px;
  line-height: 26px;
  color: $light-blue;
}

.link {
  color: $light-green;
  transition: color 0.3s;
  font-weight: $bold;
  text-decoration: none;

  &:hover {
    color: $light-yellow;
  }
}

.vtex {
  text-transform: uppercase;
}

.social-media-responsive {
  display: none;
}

@media only screen and (max-width: $tablet) {
  .hero {
    padding: $safe-area-padding;
  }

  .greeting {
    font-size: 1rem;
  }

  .name {
    font-size: 3.5rem;
  }

  .bio {
    max-width: 400px;
    font-size: 0.9rem;
  }

  .social-media-responsive {
    display: flex;
  }

  .social-media-icon {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
}
</style>