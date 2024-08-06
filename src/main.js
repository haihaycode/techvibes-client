import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';
import 'notyf/notyf.min.css';
import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(CKEditor);

app.mount('#app')
