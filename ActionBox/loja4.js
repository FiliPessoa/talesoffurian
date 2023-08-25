class Loja4 {
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("InventoryPersonal");

        // Create instances of Peixe1 and add them to the loja2 array
    
        let loja4asset = [
            `<img width="50" height="50"id="randomImage" src="/image/instrumentos/caixa.png" alt=""onclick="caixa()">
            <img width="50" height="50"id="randomImage" src="/image/instrumentos/piano.png" alt=""onclick="piano()">
            <img width="50" height="50"id="randomImage" src="/image/instrumentos/pife.png" alt=""onclick="pife()">`
        ];
        // Add more instances as needed

        // Create an array of image elements based on the loja2 array
      

        this.element.innerHTML = loja4asset;

        this.actionListener = new KeyPressListener("Enter", () => {
            this.actionListener.unbind();
            this.done();
        });
    }

    done() {
        this.element.remove();
        this.onComplete();
    }

    init(container) {
        this.createElement();
        container.appendChild(this.element);
    }
}
function caixa() {
    inv.push(new Caixa());
    console.log('added item');
    
}
function piano() {
    inv.push(new Piano());
    console.log('added item');
    
}
function pife() {
    inv.push(new Pife());
    console.log('added item');
    
}