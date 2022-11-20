<template>
  <div class="home">
    <FirstScreen/>
    <SecondScreen/>
  </div>
</template>

<script>
import FirstScreen from "@/components/HomePage/FirstScreen";
import SecondScreen from "@/components/HomePage/SecondScreen";

export default {
  name: 'HomeView',
  components: {
    FirstScreen,
    SecondScreen
  }
}
</script>

<style>
.home {
  max-width: 1600px;
  margin: 0 auto;
}
</style>
