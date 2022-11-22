import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import showOnScrollDirective from "@/directives/VShowOnScroll";

const app = createApp(App);
app.directive('show-on-scroll', showOnScrollDirective)
app.use(store).use(router).mount('#app')

