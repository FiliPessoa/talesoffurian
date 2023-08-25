class Loja2 {
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("InventoryPersonal");

        // Create instances of Peixe1 and add them to the loja2 array
       
        let loja2asset = [
            `<img width="50" height="50"id="randomImage" src="/image/plant/bud.png" alt=""onclick="bud()">
            <img width="50" height="50"id="randomImage" src="/image/tools/bong.png" alt=""onclick="bong()">
            <img width="50" height="50"id="randomImage" src="/image/tools/cachimbo.png" alt=""onclick="cachimbo1()">
            <img width="50" height="50"id="randomImage" src="/image/tools/cachimbo2.png" alt=""onclick="cachimbo2()">`
        ];
        // Add more instances as needed

        // Create an array of image elements based on the loja2 array
       

        this.element.innerHTML = loja2asset;

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
function bud() {
    inv.push(new Bud());
    console.log('added item');
    
}
function bong() {
    inv.push(new Bong());
    console.log('added item');
    
}
function cachimbo1() {
    inv.push(new Cachimbo());
    console.log('added item');
    
}
function cachimbo2() {
    inv.push(new Cachimbo2());
    console.log('added item');
    
}