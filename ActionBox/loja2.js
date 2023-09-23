let estoque2 = [
    new Bud(),
    new Bong(),
    new Cachimbo(),
    new Cachimbo2(),
];
let loja2asset = [
    `<img width="50" height="50"id="randomImage" src="/image/plant/bud.png" alt=""onclick="openBuyBox({ id: '${estoque2[0].id}', price: '${estoque2[0].price}' ,src: '${estoque2[0].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/tools/bong.png" alt=""onclick="openBuyBox({ id: '${estoque2[1].id}', price: '${estoque2[1].price}' ,src: '${estoque2[1].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/tools/cachimbo.png" alt=""onclick="openBuyBox({ id: '${estoque2[2].id}', price: '${estoque2[2].price}' ,src: '${estoque2[2].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/tools/cachimbo2.png" alt=""onclick="openBuyBox({ id: '${estoque2[3].id}', price: '${estoque2[3].price}' ,src: '${estoque2[3].sprite.image.src}' })">`
];

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
       
       
        // Add more instances as needed

        // Create an array of image elements based on the loja2 array
       

        this.element.innerHTML = loja2asset;
        selectEstoque=2;
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
function bud() {
    const budforsell = new Bud();
    preço = budforsell.price;

    if(totalAmount>=preço){

    inv.push(budforsell);
    console.log('added item');
    updateTotalAmount(totalAmount-preço)}
    else{
        const textMessage = new TextMessageMinima({
            text: 'Sem Grana',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
    }
    
}
function bong() {
    const bongforsell = new Bong();
    preço = bongforsell.price;

    if(totalAmount>=preço){
    inv.push(bongforsell);
    console.log('added item');
    updateTotalAmount(totalAmount-preço)}
    else{
        const textMessage = new TextMessageMinima({
            text: 'Sem Grana',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
    }
    
}
function cachimbo1() {
    const cachimbo1forsell = new Cachimbo();
    preço = cachimbo1forsell.price;
    if(totalAmount>=preço){
    
    inv.push(cachimbo1forsell);
    console.log('added item');
    updateTotalAmount(totalAmount-preço)}
    else{
        const textMessage = new TextMessageMinima({
            text: 'Sem Grana',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
    }
    
}
function cachimbo2() {
    const cachimbo2forsell = new Cachimbo2();
    preço = cachimbo2forsell.price;

    if(totalAmount>=preço){
    inv.push(cachimbo2forsell);
    console.log('added item');
    updateTotalAmount(totalAmount-preço)}
    else{
        const textMessage = new TextMessageMinima({
            text: 'Sem Grana',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
    }
    
}