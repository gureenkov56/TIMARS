<template>
  <div id="timers">
    <div class="timers__wrapper">
      <div class="timer one">
        <div class="timer__name">Проекты</div>
        <div class="timer__counter">3:55:23</div>
      </div>

      <div class="timer active">
        <div class="timer__name">Проекты</div>
        <div class="timer__counter">3:55:23</div>
      </div>

      <div class="timer one">
        <div class="timer__name">Проекты</div>
        <div class="timer__counter">3:55:23</div>
      </div>

      <div class="timer plus">
        <div class="timer__counter">+</div>
      </div>

      <div class="timer fake"></div>
      <div class="timer fake"></div>
      <div class="timer fake"></div>
    </div>

    <section class="security">
      <img src="img/security-icon.svg" alt="security" class="security__icon">
      <div>
      <p>Пока вы не авторизованы, ваши таймеры хранятся в памяти браузера.<br/>
      Авторизуйтесь для синхронизации таймеров между устройствами и для более безопасного хранения.</p>

      </div>
      <button>Войти</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "TimersView"
}
</script>

<style lang="scss" scoped>
#timers {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 10px;

  .timers__wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    .timer {
      background-color: #ccc;
      padding: 1rem;
      height: 150px;
      width: 150px;
      cursor: pointer;
      opacity: .7;
      transition: all .3s;

      &.active {
        opacity: 1;
      }

      &:hover {
        transform: scale(1.04);
      }

      &.plus {
        background-color: #f1f1f1;
        transition: background-color .5s;

        &:hover {
          background-color: #a9a9a9;
        }
      }

      &.fake {
        visibility: hidden;
        height: 0;
        padding: 0;
      }
    }
  }

  .security {
    max-width: 900px;
    display: flex;
    //flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    padding: 10px;
    margin-top: 2rem;
    position: absolute;
    bottom: 1rem;

    &__icon {
      width: 40px;
    }
  }
}

body.dark #timers {
  .timer.plus {
    background-color: #171717;

    &:hover {
      background-color: #2a2a2a;
    }
  }
}
</style>
