import Vue from 'vue';
import data from './menu.json';

const Menu = Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})

export default Menu;