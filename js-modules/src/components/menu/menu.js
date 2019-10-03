class Menu {
    constructor(){
        this.node = document.createElement("div");
        fetch(`/components/menu/menu.json`).then(r => r.json()).then(data => {
            this.template = this.getTemplate(data);
            this.render()
        })
    }

    getTemplate(data) {
        return (
            `<h1>Hola</h1>`
        );
    }

    render() {
        this.node.innerHTML = this.template;
    }
}

export default Menu;