<template>
  <HeaderMain/>
  <router-view/>
  <FooterMain/>
</template>

<script>
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";

export default {
  components: {
    HeaderMain,
    FooterMain
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Righteous&display=swap');

//@font-face {
//  font-family: 'Roboto';
//  src: url('assets/fonts/Roboto/Roboto-Regular.ttf')  format('truetype');
//}
//
//@font-face {
//  font-family: 'Righteous';
//  src: url('assets/fonts/Righteous/Righteous-Regular.ttf')  format('truetype');
//}

html, body {
  overflow-x: hidden;
  position: relative;
  width: 100vw;
  height: 100%;
}

html,
body {
  margin: 0;
  font-family: 'Inter', sans-serif;

  #app {
    .logo {
      font-family: 'Righteous', cursive;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      border-radius: 10px;
      border: 1px solid $blue;
      padding: .5rem 1.5rem;
      cursor: pointer;
      background-color: transparent;
      color: $blue;

      &.fill {
        background-color: $blue;
        color: white;
      }
    }

    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
    }

    .input-wrapper {
      position: relative;
      padding-top: 1.5rem;
      input {
        border: none;
        border-bottom: 2px solid #ccc;
        font-size: 1.2rem;
        color: $text-dark;
        outline: none;
        width: 100%;
        &~label {
          position: absolute;
          top: 1.7rem;
          left: 5px;
          color: $text-light;
          font-size: .9rem;
          transition: all .5s;
        }
        &:focus~label {
          top: .5rem;
          left: 0;
          font-size: .7rem;
        }
      }
      label.active {
        top: .5rem;
        left: 0;
        font-size: .7rem;
      }
      .error {
        text-align: left;
        font-size: .7rem;
        margin-top: 10px;
        color: $error;
        visibility: hidden;
        opacity: 0;
        transition: opacity .5s;
        &.show {
          visibility: visible;
          opacity: 1;
        }
      }

    }


    .timer {
      opacity: .9;
      border-radius: 8px;
      color: white;
      position: relative;
      &__counter {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;

      }
    }


  }
}

</style>
