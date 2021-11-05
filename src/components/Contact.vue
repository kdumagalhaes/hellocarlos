<template>
  <section class="contact" id="contact">
    <p class="text">
      If you want to get in touch with me about new opportunities, or just say
      hi, click on the button below to send me an email!
    </p>
    <BasicButton
      text="Get In Touch"
      maxWidth="350px"
      height="70px"
      fontSize="2rem"
      link="mailto:ce.magalhaespereira@gmail.com"
    />
    <BasicButton
      text="Resume"
      maxWidth="350px"
      height="70px"
      fontSize="2rem"
      link="https://www.dropbox.com/s/w76q57xlhaf56w8/DevCV.pdf?dl=0"
      margin="20px 0"
    />
  </section>
</template>

<script>
// component
import BasicButton from "./BasicButton.vue";

export default {
  name: "Contact",
  components: {
    BasicButton,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $safe-area-padding;
  text-align: center;
  height: 100vh;
}

.text {
  margin-bottom: 40px;
  color: $sapphire-blue;
  max-width: 700px;
  line-height: 26px;
}
</style>