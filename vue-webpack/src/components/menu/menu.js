import Vue from 'vue';
import menuData from './menu.json';

const Menu = Vue.component('todo-item', {
    template: `<ul>
                <li v-for="el in menuData.items">{{el}}</li>
              </ul>`,
    data: function () {
        return {
          menuData
        }
    }
})

export default Menu;