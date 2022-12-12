<template>
  <Transition name="slide-fade">
    <div v-show="isModalOpen"
         class='ModalWrapper'
    >
      <div class="modal">
        <div class="modal__header">
          <button @click="closeModal">
            <img src="/img/close.svg" alt="close">
          </button>
        </div>
        <TimerSettings  v-if="openedModal === 'settings'" />
        <TimerCreate    v-if="openedModal === 'create'"   />
      </div>
    </div>
  </Transition>
</template>

<script>
import TimerSettings from "@/components/Modals/TimerSettings";
import TimerCreate from "@/components/Modals/TimerCreate";
import {mapState} from "vuex";
import store from "@/store";

export default {
  name: 'ModalWrapper',
  components: {
    TimerSettings,
    TimerCreate
  },
  computed: {
    ...mapState(['isModalOpen', 'openedModal']),
  },
  watch: {
    isModalOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'scroll';
      }
    }
  },
  methods: {
    closeModal() {
      store.commit('CLOSE_MODAL');
    }
  }
}
</script>

<style lang="scss">
body.dark .modal {
  background-color: $dark-mode-bg;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;

  .modal {
    transition: all 0.3s ease;
  }
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;

  .modal {
    transform: translateY(40px);
  }
}

.ModalWrapper {
  z-index: 100;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba($color: #000000, $alpha: .5);

  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    max-width: 450px;
    flex: 1;
    padding: 1rem;
    margin: 1rem;
    background-color: #fff;
    border-radius: 8px;

    &__header {
      text-align: right;

      button {
        border: none !important;
        padding: 0 !important;
        margin: 0 !important;

        img {
          width: 15px;
        }
      }
    }
  }

}
</style>
