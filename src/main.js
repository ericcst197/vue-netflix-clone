import { createApp, toRaw } from "vue";

import App from "./App.vue";
import router from './router.js';
import store from "./store/index.js";

import BaseButton from './UI/BaseButton.vue'
import BaseContainer from './UI/BaseContainer.vue'


import "./style.css";


const app = createApp(App)

app.component('base-button',BaseButton)
app.component('base-container',BaseContainer)

app.use(store)
app.use(router)

app.mount("#app");
