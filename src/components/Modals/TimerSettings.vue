<template>
  <div class="ModalTimerSettings">
    <h2>Новый таймер</h2>
    <form>
      <div class="input-wrapper">
        <input v-model="newName"
               type="text"
               id="newName"
        >
        <label :class="{'active': newName.length}"
               for="newName">
          Имя таймера
        </label>
        <div class="error">Ошибка в логине</div>
      </div>

      <h3>Выберите цвет</h3>
      <div class="colors">

        <div>
          <input type="radio" id="color1" name="colors" hidden>
          <img src="/img/sign-ok.svg" alt="OK">
          <label for="color1"></label>
        </div>

        <div>
          <input type="radio" id="color2" name="colors" hidden>
          <img src="/img/sign-ok.svg" alt="OK">
          <label for="color2"></label>
        </div>

        <div>
          <input type="radio" id="color3" name="colors" hidden>
          <img src="/img/sign-ok.svg" alt="OK">
          <label for="color3"></label>
        </div>

        <div>
          <input type="radio" id="color4" name="colors" hidden>
          <img src="/img/sign-ok.svg" alt="OK">
          <label for="color4"></label>
        </div>
      </div>

      <button @click.prevent>ОК</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TimerSetting",
  data: () => ({
    newName: ''
  })

}
</script>

<style lang="scss" scoped>
form {
  .colors {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;

    > div {
      position: relative;
      height: 30px;
      width: 60px;
      border-radius: 8px;
      cursor: pointer;

      img {
        position: absolute;
        height: 1rem;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        opacity: 0;
        transition: opacity .5s;
      }

      input[type='radio']:checked ~img {
        opacity: 1;
      }

      label {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
      }

      &:nth-child(1) {
        background-color: $amethyst;
      }

      &:nth-child(2) {
        background-color: $magenta-crayola;
      }

      &:nth-child(3) {
        background-color: $capri;
      }

      &:nth-child(4) {
        background-color: $sea-green-crayola;
      }

    }






  }

  input[type='time'] {
    background-color: transparent;
    color: #ccc;
  }

  button {
    margin-top: 1rem;
  }
}
</style>
