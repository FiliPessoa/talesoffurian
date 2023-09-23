let estoque1 = [
    new Flor(),
    new Casca(),
    new Fruto1(),
    new Fruto2(),
    new Fruto3(),
    new Semente(),
    new Folha(),
    new Minhoca(),
    new Bambu(),
];
let loja1asset = [
    `<img width="50" height="50"id="randomImage" src="/image/plant/flor.png" alt=""onclick="openBuyBox({ id: '${estoque1[0].id}', price: '${estoque1[0].price}' ,src: '${estoque1[0].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/plant/casca.png" alt=""onclick="openBuyBox({ id: '${estoque1[1].id}', price: '${estoque1[1].price}' ,src: '${estoque1[1].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/plant/fruto.png" alt=""onclick="openBuyBox({ id: '${estoque1[2].id}', price: '${estoque1[2].price}' ,src: '${estoque1[2].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/plant/fruto2.png" alt=""onclick="openBuyBox({ id: '${estoque1[3].id}', price: '${estoque1[3].price}' ,src: '${estoque1[3].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/plant/fruto3.png" alt=""onclick="openBuyBox({ id: '${estoque1[4].id}', price: '${estoque1[4].price}' ,src: '${estoque1[4].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/plant/semente.png" alt=""onclick="openBuyBox({ id: '${estoque1[5].id}', price: '${estoque1[5].price}' ,src: '${estoque1[5].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/plant/folha.png" alt=""onclick="openBuyBox({ id: '${estoque1[6].id}', price: '${estoque1[6].price}' ,src: '${estoque1[6].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/peixe/worm.png" alt=""onclick="openBuyBox({ id: '${estoque1[7].id}', price: '${estoque1[7].price}' ,src: '${estoque1[7].sprite.image.src}' })">
    <img width="50" height="50"id="randomImage" src="/image/plant/bambu.png" alt=""onclick="openBuyBox({ id: '${estoque1[8].id}', price: '${estoque1[8].price}' ,src: '${estoque1[8].sprite.image.src}' })">`
    
];

class Loja1{
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
       
        this.element.innerHTML = loja1asset;
        selectEstoque=1;
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
