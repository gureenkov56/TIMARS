<template>
  <div class="page">
    <div class="page__first-screen">
      <div class="text">
        <h1 class="logo">TIMARS</h1>
        <p>
          Трекинг самого дорогого<br/>
          Трекинг вашего времени
        </p>
        <button>
          Старт
        </button>
      </div>
      <div class="images">
        <div class="images__desktop">
          <div class="content"></div>
          <img src="img/macbook.png" alt="desktop">
        </div>
        <div class="images__mobile">
          <div class="content"></div>
          <img src="img/mobile.png" alt="desktop">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "FirstScreen"
}
</script>

<style lang="scss" scoped>
.page {
  max-width: 1600px;
  margin: 0 auto;

  &__first-screen {
    display: flex;
    @media screen and (max-width: $breakpoint-large) {
      display: block;
    }

    .text {
      flex: 4;
      margin-top: 250px;
      text-align: center;
      @media (max-width: $breakpoint-small) {
        margin-top: 150px;
      }

      h1 {
        font-size: 4rem;
        font-weight: normal;
        @media (max-width: $breakpoint-small) {
          font-size: 3rem;
        }
      }
      p {
        color: $text-dark;
        font-size: 1.2rem;
        @media (max-width: $breakpoint-small) {
          font-size: 1rem;
        }
      }
      button {
        margin-top: 1rem;
        width: 120px;

      }
    }

    .images {
      flex: 6;
      position: relative;
      height: 90vh;
      &__desktop {
        position: absolute;
        right: -70%;
        top: 65px;
        width: 160%;
        height: 70vh;
        max-height: 900px;
        img {
          height: 100%;
          position: relative;
        }
        .content {
          @media (max-width: 950px) {
            left: 13%;
          }
          @media (max-width: $breakpoint-large) {
            left: 10%;
          }
          @media (max-width: 575px) {
            left: 13%;
          }
          @media (max-width: 440px) {
            left: 16%;
          }
          @media (max-width: 360px) {
            left: 20%;
          }
          background-color: #fff;
          position: absolute;

          top: 5%;
          left: 7%;
          right: 0;
          bottom: 10%;
        }
      }
      &__mobile {
        position: absolute;
        top: 33vh;
        height: 50vh;
        max-height: 600px;
        img {
          height: 100%;
          position: relative;
          z-index: 10;
        }

        .content {
          background-color: #0A0A0A;
          border-radius: 25px;
          position: absolute;
          top: 2%;
          left: 15%;
          right: 15%;
          bottom: 4%;
        }

      }
    }
  }
}
</style>
