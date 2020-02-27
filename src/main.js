import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import hello from './components/HelloWorld.vue';
import scenery from './components/scenery.vue';
import portrait from './components/portrait.vue';
import streetsnap from './components/streetsnap.vue';

Vue.use(VueRouter);
const routes = [
  { path: "/", component: hello },
  { path: "/scenery", component: scenery},
  { path: "/portrait", component: portrait},
  { path: "/streetsnap", component: streetsnap},
];

const router = new VueRouter({
  routes
});
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
