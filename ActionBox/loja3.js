let estoque3 = [
    new Vara(),
    new Tools(),
    new Pa(),
];
let loja3asset = [
    `<img width="50" height="50"id="randomImage" src="/image/tools/vara.png" alt=""onclick="vara()">
    <img width="50" height="50"id="randomImage" src="/image/tools/pa.png" alt=""onclick="pa()">
    <img width="50" height="50"id="randomImage" src="/image/tools/faca.png" alt=""onclick="faca()">`
];

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
       
        // Add more instances as needed

        // Create an array of image elements based on the loja2 array
      

        this.element.innerHTML = loja3asset;
        selectEstoque=3;
        updateEstoque()
        if (selectEstoque==1) {
            estoque = estoque1
        }
        if (selectEstoque==2) {
            estoque = estoque2
        }
        if (selectEstoque==3) {
            estoque = estoque3
        }
        if (selectEstoque==4) {
            estoque = estoque4
        }

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
    const varaforsell = new Vara();
    preço = varaforsell.price;

    if(totalAmount>=preço){
    inv.push(new Vara());
    console.log('added item');}
    else{
        const textMessage = new TextMessageMinima({
            text: 'Sem Grana',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
    }
    
}
function pa() {
    const paforsell = new Pa();
    preço = paforsell.price;

    if(totalAmount>=preço){
    inv.push(new Pa());
    console.log('added item');}
    else{
        const textMessage = new TextMessageMinima({
            text: 'Sem Grana',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
    }
    
}
function faca() {
    const facaforsell = new Faca();
    preço = facaforsell.price;

    if(totalAmount>=preço){
    inv.push(new Faca());
    console.log('added item');}
    else{
        const textMessage = new TextMessageMinima({
            text: 'Sem Grana',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
    }
    
}