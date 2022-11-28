<template>
  <div class="page-wrapper">
    <HeaderMain/>
    <section class="home">
      <FirstScreen/>
      <SecondScreen/>
    </section>
    <FooterMain/>

  </div>
</template>

<script>
import FirstScreen from "@/components/HomePage/FirstScreen";
import SecondScreen from "@/components/HomePage/SecondScreen";
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";

export default {
  name: 'HomeView',
  components: {
    HeaderMain,
    FirstScreen,
    SecondScreen,
    FooterMain
  }
}
</script>

<style>
</style>
