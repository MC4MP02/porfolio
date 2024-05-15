import { createApp } from 'vue'
import { inject } from '@vercel/analytics';
inject();
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
