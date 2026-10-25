import { createApp } from 'vue';
import 'v-tweakpane/dist/index.css';
import './style.css';
import App from './App.vue';
import { initGoogleAnalytics } from './analytics';

initGoogleAnalytics();
createApp(App).mount('#app');
