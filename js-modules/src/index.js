import Menu from './components/menu/menu.js';

const appNode = document.querySelector('#app');
const menu = new Menu();

appNode.appendChild(menu.node);