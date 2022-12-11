import { createStore } from 'vuex'

export default createStore({
  state: {
    isModalOpen: false,
    openedModal: 'settings',
    timers: [
      /******
     * count - накопившееся время в таймере
     * startBy - показывает старт (timeStamp) для запущенного таймера
     *
     * Если таймер при загрузке страницы остановлен, то расчет ведется от count
     *
     * Если таймер при загрузке страницы запущен, то расчет ведем от startBy,
     * чтобы посчитать, как давно таймер был запущен
     */
      {
        id: 1,
        name: 'Программирование',
        color: '#9b5de5ff',
        count: 17000,
        formatted: 0,
        isRun: true,
        startBy: 1670776947157,
        countBeforeRun: 10000
      },
      {
        id: 2,
        name: 'Прогулка',
        color: '#00bbf9ff',
        count: 9900000,
        formatted: '2:45:00',
        isRun: false,
        startBy: 0,
        countBeforeRun: 0
      }
    ],
    authToken: false,
  },
  getters: {
    getRunTimers(state) {
      return state.timers.filter(t => t.isRun);
    }
  },
  mutations: {
    OPEN_MODAL(state, name) {
      state.isModalOpen = true;
      state.openedModal = name;
    },
    CLOSE_MODAL(state) {
      state.isModalOpen = false;
    },
    TOGGLE_TIMER(state, timer) {
      timer.isRun = !timer.isRun;
      if (timer.isRun) {
        timer.startBy = Date.now();
        timer.countBeforeRun = timer.count;
      }
    },
    PLUS_SEC_TO_TIMERS(state, timer) {
      timer.count += 1000;

      let res = timer.count;
      let h = ~~(res / (1000 * 60 * 60));
      res -= 1000 * 60 * 60 * h;

      let m = ~~(res / (1000 * 60));
      res -= 1000 * 60 * m;

      let s = ~~(res / 1000);

      function zeroFor10Less(n) {
        return (n < 10) ? '0' + n : n
      }

      timer.formatted = `${h ? h + ':' : ''}${zeroFor10Less(m)}:${zeroFor10Less(s)}`;
    },
    CALC_COUNT_RUNNING_TIMERS(state, timer) {
      timer.count = timer.countBeforeRun + (Date.now() - timer.startBy);
    },
    SET_TIMERS(state, data) {
      state.timers = data;
    }
  },
  actions: {
    plus_sec_to_timers({getters, commit}) {
      getters.getRunTimers.forEach(t => commit('PLUS_SEC_TO_TIMERS', t))
    },
    calc_count_for_running_timers({getters, commit}) {
      getters.getRunTimers.forEach(t => commit('CALC_COUNT_RUNNING_TIMERS', t));
    },
    save_timers({state}, id) {
      console.log('save to LS');
      localStorage.setItem('timersData', JSON.stringify(state.timers));

      if (state.authToken) {
        console.log('id', id);
        // send id by API 
      }
    }
  }
})
