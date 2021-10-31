<template>
  <keep-alive>
    <transition enter-active-class="animate__animated animate__fadeIn" appear>
      <a :href="url" target="_blank" class="card">
        <h3 class="title">🔗 {{ name }}</h3>
        <p class="description">
          {{ description }}
        </p>
        <p class="tech">{{ language }}</p>
      </a>
    </transition>
  </keep-alive>
</template>

<script>
export default {
  name: "ProjectCard",
  data() {
    return {
      name: null,
      url: null,
      description: null,
      language: null,
      repoName: "onebithealth",
    };
  },
  props: {
    repo: {
      type: String,
      required: true,
    },
  },
  methods: {
    fetchRepoApi(repo) {
      console.log("ola");
      repo = this.repo;
      fetch(`https://api.github.com/repos/kdumagalhaes/${repo}`)
        .then((res) => res.json())
        .then((data) => {
          this.name = data.name;
          this.url = data.html_url;
          this.description = data.description;
          this.language = data.language;
        });
    },
  },
  mounted() {
    this.fetchRepoApi();
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 435px;
  height: 200px;
  background-color: $dark-blue;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  text-decoration: none;
  padding: 10px;
  position: relative;
  color: $sapphire-blue;

  &:hover {
    transform: scale(0.99);
    box-shadow: none;
  }
}

.description {
  line-height: 20px;
  font-size: 0.9rem;
}

.tech {
  color: $sapphire-blue;
  background-color: $prussian-blue;
  border-radius: 2px;
  padding: 5px;
  font-size: 0.7rem;
  font-weight: $black;
  position: absolute;
  top: 80%;
}

.title {
  margin-bottom: 20px;
  color: $azure;
}
</style>
