import { createApp } from 'vue'
import App from '../App.vue'
const app = createApp(App)
import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({ disable: "" });
// app.mount('#app') //확인상 안들어가도 되는 문구
