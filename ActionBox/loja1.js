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
    
        let loja1asset = [
            `<img width="50" height="50"id="randomImage" src="/image/plant/flor.png" alt=""onclick="flor()">
            <img width="50" height="50"id="randomImage" src="/image/plant/casca.png" alt=""onclick="casca()">
            <img width="50" height="50"id="randomImage" src="/image/plant/fruto.png" alt=""onclick="fruto1()">
            <img width="50" height="50"id="randomImage" src="/image/plant/fruto2.png" alt=""onclick="fruto2()">
            <img width="50" height="50"id="randomImage" src="/image/plant/fruto3.png" alt=""onclick="fruto3()">
            <img width="50" height="50"id="randomImage" src="/image/plant/semente.png" alt=""onclick="semente()">
            <img width="50" height="50"id="randomImage" src="/image/plant/folha.png" alt=""onclick="folha()">
            <img width="50" height="50"id="randomImage" src="/image/peixe/worm.png" alt=""onclick="minhoca()">
            <img width="50" height="50"id="randomImage" src="/image/plant/bambu.png" alt=""onclick="bambu()">`
        ];
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

        // Add more instances as needed

        

        // Create an array of image elements based on the loja2 array
       
        this.element.innerHTML = loja1asset;
        

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

function flor() {
    inv.push(new Flor());
    console.log('added item');
    
}
function casca() {
    inv.push(new Casca());
    console.log('added item');
    
}
function fruto1() {
    inv.push(new Fruto1());
    console.log('added item');
    
}
function fruto2() {
    inv.push(new Fruto2());
    console.log('added item');
    
}
function fruto3() {
    inv.push(new Fruto3());
    console.log('added item');
    
}
function semente() {
    inv.push(new Semente());
    console.log('added item');
    
}
function folha() {
    inv.push(new Folha());
    console.log('added item');
    
}
function minhoca() {
    inv.push(new Minhoca());
    console.log('added item');
    
}
function bambu() {
    inv.push(new Bambu());
    console.log('added item');
    
}

function buy() {

    
   
   if(totalAmount > inventoryObject.price){
    inv.push(object);
    console.log('added item');
    totalAmount = totalAmount - inventoryObject.price

   }
   if(totalAmount < InventoryObjectbject){

    console.log('Saldo Insuficiente');

   }
    
}