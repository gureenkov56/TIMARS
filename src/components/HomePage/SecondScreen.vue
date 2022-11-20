<template>
  <section class="home__second-screen">
    <div class="wrapper">
      <div class="form-wrapper">
        <h2>Авторизация</h2>
        <form>
          <div class="input-wrapper">
            <input v-model="login"
                   type="text"
                   id="login"
            >
            <label :class="{'active': login.length}"
                   for="login">
              Логин
            </label>
            <div class="error">Ошибка в логине</div>
          </div>
          <div class="input-wrapper">
            <input v-model="password"
                   type="text"
                   id="password"
            >
            <label :class="{'active': password.length}"
                   for="password">
              Пароль
            </label>
            <div class="error">Ошибка в логине</div>
          </div>
          <div>
            <button class="fill">Вход</button>
          </div>
          <div class="ask">
            Еще нет аккаунта? <span>Регистрация</span>
          </div>
        </form>
        <div class="or">или</div>
        <div>
          <button>Войти как гость</button>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <ul>
        <li>Статистика за день, неделю, месяц</li>
        <li>Кастомизация оформления</li>
        <li>С любых устройств</li>
        <li>Авторизуйтесь для синхронизации таймеров</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "SecondScreen",
  data: () => ({
    login: '',
    password: ''
  })
}
</script>

<style lang="scss" scoped>
.home__second-screen {
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: $breakpoint-large) {
    flex-direction: column-reverse;
  }

  .wrapper {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;


    .form-wrapper {
      text-align: center;
      border-radius: 8px;
      border: 1px solid #ccc;
      width: 100%;
      max-width: 350px;
      margin: 10px;
      padding: 30px;

      h2 {
        margin-bottom: 1rem;
        color: $text-dark;
      }

      button {
        width: 70%;
      }

      form {
        margin-top: 1rem;

        .input-wrapper {
          width: 100%;
          max-width: 230px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 10px;
        }

        button {
          margin-top: 1rem;
        }

        .ask {
          color: $text-light;
          font-size: .8rem;
          margin-top: .5rem;
          span {
            color: $blue;
          }
        }
      }


      .or {
        margin: 1rem;
        font-size: .7rem;
        color: $text-light;
      }
    }

    ul {
      width: 100%;
      margin-bottom: 3rem;

      li {
        font-weight: 200;
        margin-top: 2rem;
        font-size: 1.2rem;
        color: $text-dark;
      }
    }
  }
}
</style>
