<template>
  <transition enter-active-class="animate__animated animate__fadeIn" appear>
    <section class="about" id="about">
      <div class="text-content">
        <SectionTitle title="About Me" lineWidth="350px" />
        <p class="bio">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          facilis tempora impedit architecto magnam quo voluptatem quod,
          voluptatum et id numquam in repudiandae accusantium consequatur iusto
          molestias, aliquid, deleniti ipsam.
        </p>
        <p class="bio">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sed
          culpa omnis temporibus beatae illum, sapiente dolore corrupti delectus
          iure veniam harum assumenda! Aspernatur consequatur voluptate velit
          voluptatibus enim ipsa!
        </p>
        <p class="bio">
          Here are a few technologies I’ve been studying recently:
        </p>
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

  .text-content {
    margin: 0 0 40px 0;
  }
}

@media only screen and (max-width: $mobile) {
  .about {
    flex-direction: column;
    align-items: center;
  }
}
</style>
