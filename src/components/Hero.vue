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
</style>