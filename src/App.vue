<template>
<!--    <router-view/>-->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
</template>

<script>
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";

export default {
  components: {
    HeaderMain,
    FooterMain
  },
  beforeMount() {
    if (
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ||
        localStorage.getItem('theme') === 'dark'
    ) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Righteous&display=swap');

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 0;
  height: 0;
}

html, body {
  position: relative;
  width: 100vw;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

html,
body {
  margin: 0;
  font-family: 'Inter', sans-serif;

  #app {

    .page_wrapper > * {
      max-width: 1600px;
      margin: 0 auto;
    }

    .page-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;

      > section {
        flex: 1;
        position: relative;
      }
    }


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

      &.grey {
        color: $text-light;
        border-color: $text-light;
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
        background-color: inherit;

        & ~ label {
          position: absolute;
          top: 1.7rem;
          left: 5px;
          color: $text-light;
          font-size: .9rem;
          transition: all .5s;
        }

        &:focus ~ label {
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

  body.dark {
    background-color: $dark-mode-bg;
    color: $dark-mode-text;

    h1, h2, h3, h4, h5, h6, li, p, input {
      color: $dark-mode-text !important;
    }
  }
}

</style>

<!--
TODO: 1. Add functional:
      ** Add timer
      ** Remove timer
      ** Change name / color / zeroing timer
      * ====
      2. Auth
      3. Save statistics
      4. About project page
      5. Icon for change color theme
-->
