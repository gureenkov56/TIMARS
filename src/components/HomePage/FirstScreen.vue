<template>
  <section class="home__first-screen">
    <div class="text" v-show-on-scroll>
      <h1 class="logo">TIMARS</h1>
      <p>
        Трекинг самого дорогого<br/>
        Трекинг вашего времени
      </p>
      <router-link to="timers">
        <button>
          Старт
        </button>
      </router-link>
    </div>
    <div class="images" v-show-on-scroll>
      <div class="images__desktop">
        <div class="content">
          <div class="timer one">
            <div class="timer__name">Проекты</div>
            <div class="timer__counter">3:55:23</div>
          </div>
          <div class="timer two">
            <div class="timer__name">Спорт</div>
            <div class="timer__counter">1:05:35</div>
          </div>
          <div class="timer three">
            <div class="timer__name">Отдых</div>
            <div class="timer__counter">1:34:27</div>
          </div>

        </div>
        <img src="img/macbook.png" alt="desktop">
      </div>
      <div class="images__mobile">
        <div class="content">
          <div class="timers">
            <div class="timer one">
              <div class="timer__name">Проекты</div>
              <div class="timer__counter">3:55:24</div>
            </div>
            <div class="timer two">
              <div class="timer__name">Спорт</div>
              <div class="timer__counter">1:05:35</div>
            </div>
            <div class="timer three">
              <div class="timer__name">Отдых</div>
              <div class="timer__counter">1:34:27</div>
            </div>
          </div>
        </div>
        <img src="img/mobile.png" alt="desktop">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FirstScreen",
}
</script>

<style lang="scss" scoped>
.home {
  &__first-screen {
    overflow-x: hidden;
    display: flex;
    @media screen and (max-width: $breakpoint-large) {
      display: block;
    }

    > div {
      opacity: 0;
      transform: translateY(100px);
      transition: all .5s;
      transition-delay: .5s;

      &.show-on-scroll {
        opacity: 1;
        transform: translateY(0);
      }
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

      .content {
        display: flex;
        flex-wrap: wrap;

        .timer {
          &.one {
            background-color: $capri;
          }

          &.two {
            background-color: $amethyst;
          }

          &.three {
            background-color: $minion-yellow;
          }
        }
      }


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
          @media (max-width: $breakpoint-middle) {
            flex-direction: column;
            padding: 2rem;
          }
          background-color: #fff;
          position: absolute;
          padding: 4rem;

          top: 5%;
          left: 7%;
          right: 0;
          bottom: 10%;

          gap: 1rem;

          .timer {
            height: 170px;
            width: 170px;
            padding: 1rem;
            @media (max-width: $breakpoint-middle) {
              height: 100px;
              width: 100px;
            }

            &__name {
              font-size: 20px;
            }

            &__counter {
              font-size: 2rem;
              @media (max-width: $breakpoint-middle) {
                font-size: 1.5rem;
              }
            }

            &.three {
              @media (max-width: 430px) {
                display: none;
              }
            }
          }
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
          padding: 2rem 1rem;
          justify-content: space-around;

          .timers {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: .6rem;
            height: 180px;
            @media (max-width: $breakpoint-middle) {
              flex-direction: column;
            }

            .timer {
              height: 70px;
              padding: 5px;
              flex: 1;

              &__name {
                font-size: 12px;
                margin-left: 5px;
              }

              &__counter {
                margin-top: .5rem;
                margin-bottom: .5rem;
                font-size: .9rem;
              }
            }
          }
        }

      }
    }
  }
}

body.dark {
  .images__desktop .content {
    background-color: $dark-mode-bg;
  }
}

</style>

<!--
TODO: * Функция преобразователь времени
      * Директива отслеживающая скролл для анимации
-->
