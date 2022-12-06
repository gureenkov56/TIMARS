<template>
  <footer>
    <ModalWrapper/>
    <span>Made with</span>
    <img src="/img/heart.svg" alt="love">
    <span>by <a id="footerLink" href="https://gureenkov56.github.io">@gureenkov56</a></span>
  </footer>
</template>

<script>
import ModalWrapper from "@/components/Modals/ModalWrapper";

export default {
  name: "FooterMain",
  components: {ModalWrapper}
}
</script>

<style lang="scss" scoped>
footer {
  background-color: #f6f6f6;
  text-align: center;
  font-size: .8rem;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    margin: 0 5px;
  }

  #footerLink {
    text-decoration: underline;
  }
}

body.dark footer {
  background-color: #0A0A0A;
}
</style>
