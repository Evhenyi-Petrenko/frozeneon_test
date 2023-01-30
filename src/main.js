import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";

import { mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";
import "vuetify/dist/vuetify.min.css";

const options = {
  transition: "Vue-Toastification__slideBlurred",
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  closeButton: "button",
  rtl: false,
};

const pinia = createPinia();
const app = createApp(App);

app.use(Toast, options);
app.use(pinia);
app.use(
  createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      sets: {
        mdi,
        fa,
      },
    },
  })
);
app.mount("#app");
