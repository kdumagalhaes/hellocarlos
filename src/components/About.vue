<template>
  <transition enter-active-class="animate__animated animate__fadeIn" appear>
    <section class="about" id="about">
      <div class="text-content">
        <SectionTitle title="About Me" lineWidth="350px" />
        <p class="bio">
          Luso-Brazilian professional graduated in Advertising and studying
          Software Development. In my journey dealing directly with clients, I
          began to understand the importance of creating successful
          relationships and cases, always with creativity and empathy.
          Currently, I’m a Product Technical Leader working on physical stores
          solutions at VTEX, which has given me the opportunity to be directly
          related to our products vision and future.
        </p>
        <p class="bio">
          Now, I intend to continue helping people to have the best experience
          with digital products entering the market as a Front-End Developer.
          One of my premises is that the Web should be a place of access to
          information and content for all people and, as a developer, it is also
          my responsibility to have good practices and accessibility as the
          basis of my work.
        </p>
        <p class="bio">Here are a few technologies I’ve been studying:</p>
        <div class="lists">
          <ul class="tech-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
          </ul>
          <ul class="tech-list">
            <li>Vue</li>
            <li>Node.js</li>
            <li>React Native</li>
          </ul>
        </div>
      </div>
      <img
        class="picture"
        src="@/assets/img/kadu.webp"
        alt="Carlos Pereira's picture"
      />
    </section>
  </transition>
</template>

<script>
// components
import SectionTitle from "./SectionTitle.vue";
export default {
  name: "About",
  components: {
    SectionTitle,
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: 80px 40px 0 300px;
  margin-bottom: 80px;
}

.about,
.lists {
  display: flex;
}

.text-content {
  margin-right: 50px;
}

.tech-list,
.bio {
  color: $sapphire-blue;
}

.tech-list {
  font-family: $monospace;
  margin-right: 50px;

  li {
    margin-bottom: 10px;
    list-style-type: circle;
    list-style-position: inside;
    transition: all 0.4s;

    &:hover {
      color: $carolina-blue;
    }
  }
}

.bio {
  width: 100%;
  max-width: 500px;
  line-height: 26px;
  margin-bottom: 15px;
}

.picture {
  width: 100%;
  max-width: 250px;
  max-height: 375px;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  filter: grayscale(100%);
  transition: filter 0.5s;

  &:hover {
    filter: grayscale(0);
  }
}

@media only screen and (max-width: $tablet) {
  .about {
    padding: $safe-area-padding;
  }
}

@media only screen and (max-width: $mobile) {
  .about {
    flex-direction: column;
    align-items: center;
  }

  .text-content {
    margin: 0 0 40px 0;
  }

  .tech-list {
    margin: 0;

    &:first-child {
      margin-right: 4px;
    }
  }
}
</style>
