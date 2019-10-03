import Vue from 'vue';
import Menu from './components/menu/menu';

var app = new Vue({
  components: {
    Menu
  },
  template: '<Menu></Menu>'
})

app.$mount('#app');