import data from './menu.json';
import template from './menu.handlebars';

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