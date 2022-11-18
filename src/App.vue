<template>
  <header>
    <nav>
      <router-link to="/" class="logo">TIMARS</router-link>
      <div class="right-part">
        <span>
          <router-link to="/">О проекте</router-link>
          <router-link to="/">Offline</router-link>
        </span>
        <router-link to="/" class="right-part__reg">Регистрация</router-link>
        <router-link to="/">
          <button class="fill">Вход</button>
        </router-link>
      </div>
    </nav>
  </header>

  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Righteous&display=swap');

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
  //overflow-x: hidden;
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

    header {
      padding: 1rem 3rem;
      border-bottom: 1px solid $grey;
      @media (max-width: $breakpoint-small) {
        padding: 1rem 2rem;
      }

      nav {
        max-width: 1600px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
          font-size: 2rem;
          @media (max-width: $breakpoint-small) {
            font-size: 1.7rem;
          }
          @media (max-width: $breakpoint-smallest) {
            visibility: hidden;
          }
        }

        .right-part {
          span {
            @media screen and (max-width: $breakpoint-large) {
              display: none;
            }
          }

          &__reg {
            margin-left: 2rem;
            @media screen and (max-width: $breakpoint-middle) {
              display: none;
            }
          }

          a {
            padding-left: 2rem;
          }
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
