import data from './menu.json';
import template from './menu.pug';

class Menu {
    constructor(){
        this.node = document.createElement("div");
        this.template = template(data);
        this.render();
    }

    render() {
        this.node.innerHTML = this.template;
    }
}

export default Menu;