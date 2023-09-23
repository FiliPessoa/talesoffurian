let estoque4 = [
    new Caixa(),
    new Piano(),
    new Pife(),
];
let loja4asset = [
    `<img width="50" height="50"id="randomImage" src="/image/instrumentos/caixa.png" alt=""onclick="caixa()">
    <img width="50" height="50"id="randomImage" src="/image/instrumentos/piano.png" alt=""onclick="piano()">
    <img width="50" height="50"id="randomImage" src="/image/instrumentos/pife.png" alt=""onclick="pife()">`
];

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
       
        // Add more instances as needed

        // Create an array of image elements based on the loja2 array
      

        this.element.innerHTML = loja4asset;
        selectEstoque=4;
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
}
function caixa() {
    const caixaforsell = new caixa();
    preço = caixaforsell.price;

    if(totalAmount>=preço){
    inv.push(new Caixa());
    console.log('added item');}
    else{
        const textMessage = new TextMessageMinima({
            text: 'Sem Grana',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
    }
    
}
function piano() {
    const pianoforsell = new Piano();
    preço = pianoforsell.price;

    if(totalAmount>=preço){
    inv.push(new Piano());
    console.log('added item');}
    else{
        const textMessage = new TextMessageMinima({
            text: 'Sem Grana',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
    }
    
}
function pife() {
    const pifeforsell = new Pife();
    preço = pifeforsell.price;

    if(totalAmount>=preço){
    inv.push(new Pife());
    console.log('added item');}
    else{
        const textMessage = new TextMessageMinima({
            text: 'Sem Grana',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
    }
    
}