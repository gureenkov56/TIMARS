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
</template>

<script>
export default {
  name: "HeaderMain"
}
</script>

<style lang="scss" scoped>
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
</style>
