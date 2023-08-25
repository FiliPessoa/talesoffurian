class Loja3 {
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("InventoryPersonal");

        // Create instances of Peixe1 and add them to the loja2 array
    
        let loja3asset = [
            `<img width="50" height="50"id="randomImage" src="/image/tools/vara.png" alt=""onclick="vara()">
            <img width="50" height="50"id="randomImage" src="/image/tools/pa.png" alt=""onclick="pa()">
            <img width="50" height="50"id="randomImage" src="/image/tools/faca.png" alt=""onclick="faca()">`
        ];
        // Add more instances as needed

        // Create an array of image elements based on the loja2 array
      

        this.element.innerHTML = loja3asset;

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
}function vara() {
    inv.push(new Vara());
    console.log('added item');
    
}
function pa() {
    inv.push(new Pa());
    console.log('added item');
    
}
function faca() {
    inv.push(new Faca());
    console.log('added item');
    
}