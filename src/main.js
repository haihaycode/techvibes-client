import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';
import 'notyf/notyf.min.css';
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
