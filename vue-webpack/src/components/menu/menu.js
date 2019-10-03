import Vue from 'vue';
import menuHtml from './menu.html';
import menuData from './menu.json';

const Menu = Vue.component('todo-item', {
    template: menuHtml,
    data: function () {
        return {
          menuData
        }
    }
})

export default Menu;