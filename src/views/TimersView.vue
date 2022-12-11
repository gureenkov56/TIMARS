<template>
  <div class="page-wrapper">
    <HeaderMain/>
    <section>
      <div id="timers">
        <div class="timers__wrapper">

          <div v-for="timer in $store.state.timers"
               :key="timer.id"
               @click="timerToggle(timer)"
               :class="{'stopped': !timer.isRun}"
               :style="{'background-color': timer.color}"
               class="timer"
          >
            <div class="timer__name">{{ timer.name }}</div>
            <div class="timer__counter">{{ timer.formatted }}</div>
          </div>

          <div @click="openModalCreateTimer"
              class="timer plus"
          >
            <div class="timer__counter">+</div>
          </div>

          <div class="timer fake"></div>
          <div class="timer fake"></div>
          <div class="timer fake"></div>
        </div>

        <Transition>
          <section v-if="timersViewAuthMessage"
                   class="security"
          >
            <img src="img/security-icon.svg" alt="security" class="security__icon">
            <div>
              <p>Пока вы не авторизованы, ваши таймеры хранятся в памяти браузера.<br/>
                Авторизуйтесь для синхронизации таймеров между устройствами и для более безопасного хранения.</p>

            </div>
            <div>
              <button>Войти</button>
              <br/>
              <button @click="timersViewAuthMessage = false"
                      class="grey"
              >
                Скрыть
              </button>
            </div>
          </section>

        </Transition>

      </div>

    </section>
    <FooterMain/>
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain";
import FooterMain from "@/components/FooterMain";
import store from "@/store";


export default {
  /*
  TODO: * Настроить таймер (цвет, обнулить, удалить)
        * Добавить таймер 
  */
  name: "TimersView",
  components: {
    HeaderMain,
    FooterMain
  },
  data: () => ({
    timersViewAuthMessage: !localStorage.getItem('timersViewAuthMessage'),
  }),
  computed: {
    runTimers() {
      return this.timers.filter(t => t.isRun)
    },
  },
  methods: {
    formattedTime(now, res) {
      let h = ~~(res / (1000 * 60 * 60));
      res -= 1000 * 60 * 60 * h;

      let m = ~~(res / (1000 * 60));
      res -= 1000 * 60 * m;

      let s = ~~(res / 1000);

      return `${h}:${this.zeroFor10Less(m)}:${this.zeroFor10Less(s)}`
    },
    zeroFor10Less(n) {
      return (n < 10) ? '0' + n : n
    },
    timerToggle(timer) {
      store.commit('TOGGLE_TIMER', timer);
      store.dispatch('save_timers', timer.id);
    },
    saveTimers() {
      localStorage.setItem('timersData', JSON.stringify(this.timers))
    },
    openModalCreateTimer() {
      store.commit('OPEN_MODAL', 'settings');
    }
  },
  watch: {
    timersViewAuthMessage() {
      localStorage.setItem('timersViewAuthMessage', 'hide');
    },
    
  },
  created() {
    // if (auth)
    // if (false) {
      // getData by BD
      // save timers in local storage
    // } else {
      const localStorageTimers = localStorage.getItem('timersData');
      if (localStorageTimers) {
        store.commit('SET_TIMERS', JSON.parse(localStorageTimers));
      }
    // }

    store.dispatch('calc_count_for_running_timers');

    setInterval(() => {
      store.dispatch('plus_sec_to_timers');
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

#timers {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 10px;

  .timers__wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;

    .timer {
      padding: 1rem;
      height: 150px;
      min-width: 150px;
      cursor: pointer;
      transition: all .3s;
      flex: 1;

      &.stopped {
        background-color: #848484 !important;
      }

      &:hover {
        transform: scale(1.04);
      }

      @media (hover: none) {
        &:hover {
          transform: none;
        }
      }

      &__name {
        word-wrap: break-word;
      }

      &.plus {
        background-color: #f1f1f1;
        transition: background-color .5s;

        &:hover {
          background-color: #a9a9a9;
        }
      }

      &.fake {
        display: none;
        visibility: hidden;
        height: 0;
        padding: 0;
      }
    }
  }

  .security {
    max-width: 900px;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 10px;
    margin-top: 2rem;
    bottom: 1rem;

    p {
      color: #7f7f7f !important;
    }

    @media (max-width: $breakpoint-middle) {
      flex-direction: column;
      text-align: center;
    }

    button {
      margin-bottom: .5rem;
      width: 130px;

      &.grey {
        color: #7f7f7f;
        border-color: #7f7f7f;
      }
    }

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
