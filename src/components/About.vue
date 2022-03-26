<template>
  <transition enter-active-class="animate__animated animate__fadeIn" appear>
    <section class="about" id="about">
      <div class="text-content">
        <SectionTitle title="About Me" lineWidth="350px" />
        <p class="bio">
          <strong>Luso-Brazilia</strong> professional graduated in Advertising
          and studying <strong>Software Development</strong>, passionate for
          <strong>Front-end</strong>. As a <strong>Product Support</strong> I am
          accountable for analysis, troubleshooting and driving the resolution
          of product issues while engaging with all levels in the Support
          Organization, Product (Product Managers), Development (Engineer
          Managers, Software Engineers), Operations teams, like a support layer
          inside the product.
        </p>
        <p class="bio">
          Previously, I was responsible for managing the
          <strong>Physical Stores Product Support Analysts team</strong>. As a
          <strong>Product Support Leader</strong>, my role was to well-being and
          provide the best environment for the team to work with high
          performance and engagement. In addition, I also conducted the planning
          of actions based on our demands and goals.
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
  padding: 60px 180px 0 180px;
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
  filter: grayscale(0);
  transition: filter 0.5s;

  &:hover {
    filter: grayscale(100%);
  }
}

@media only screen and (max-width: $tablet) {
  .about {
    padding: $safe-area-padding;
  }

  .lists {
    flex-direction: column;
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

  .lists {
    flex-direction: column;
  }

  .tech-list {
    margin: 0;

    &:first-child {
      margin-right: 4px;
    }
  }
}
</style>
