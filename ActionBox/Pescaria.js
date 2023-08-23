class Pescaria {
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("Fish");

        this.element.innerHTML = `
        <div class="center">
            <div class="menu1">
                <button class="nome">nome</button>
                <button id="nome" class="nome">nome</button>
                <button class="preco">preco</button>
                <button id="preco" class="preco">preco</button>
                <button id="tipo" class="tipo">tipo</button>
            </div>
        </div>

        <div class="frame">
            <div class="peixe">
                <img width="120" height="120" id="randomImage" src="/image/peixe/peixe100.png" alt="">
            </div>
        </div>

        <div class="right2">
            <button class="pescar">pescar</button>
        </div>`;

        const pescarButton = this.element.querySelector('.pescar');
        pescarButton.addEventListener('click', displayRandomImage);

        // If you had a KeyPressListener, include its initialization here as you had before.
        this.actionListener = new KeyPressListener("Enter", () => {
            this.actionListener.unbind();
            this.done();
         })
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
this.actionListener = new KeyPressListener("KeyP", () => {
    displayRandomImage()
 })

function displayRandomImage() {
    const uniqueSpritePaths = [...new Set([
        '/image/peixe/peixe1.png',
        '/image/peixe/peixe5.png',
        '/image/peixe/peixe25.png',
        '/image/peixe/peixe50.png',
        '/image/peixe/peixe100.png',
        '/image/peixe/peixe200.png',
        '/image/peixe/peixe500.png',
    ])];
           const peixes = [
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peix100.png',
          '/image/peixe/peix100.png',
          '/image/peixe/peix100.png',
          '/image/peixe/peix100.png',
          '/image/peixe/peix100.png',
          '/image/peixe/peixe200.png',
          '/image/peixe/peixe200.png',
          '/image/peixe/peixe200.png',
          '/image/peixe/peixe500.png',
                ]
    
    // Create Fish objects using unique sprite paths
    const fishObjects = uniqueSpritePaths.map(path => new Fish({
        src: path,
        name: path.split('/').pop().split('.')[0],  // extracting name from the path, e.g., "peixe1"
        price: Number(path.match(/\d+/)[0]), // You can set appropriate price
        type: 'FishType',  // You can set appropriate type
        isca: Number(path.match(/\d+/)[0]) == 1 ? new Isca({name: 'minhoca'}) : new Isca({}),
        isca: Number(path.match(/\d+/)[0]) == 5 ? new Isca({name: 'Fruta'}) : new Isca({}),
        isca: Number(path.match(/\d+/)[0]) == 10 ? new Isca({name: 'peixe1'}) : new Isca({}),
        isca: Number(path.match(/\d+/)[0]) == 25 ? new Isca({name: 'minhoca'}) : new Isca({}),
        isca: Number(path.match(/\d+/)[0]) == 50 ? new Isca({name: 'peixe1'}) : new Isca({}),
        isca: Number(path.match(/\d+/)[0]) == 100 ? new Isca({name: 'peixe50'}) : new Isca({}),
        isca: Number(path.match(/\d+/)[0]) == 200 ? new Isca({name: 'peixe50'}) : new Isca({}),
        isca: Number(path.match(/\d+/)[0]) == 500 ? new Isca({name: 'peixe5'}) : new Isca({}),
    }));

    // Get a random index from the array of Fish objects
    const randomIndex = Math.floor(Math.random() * fishObjects.length);
    const randomFish = fishObjects[randomIndex];
    const randomImageURL = randomFish.sprite.image.src;
    const randomImage = document.getElementById("randomImage");
    const nameHtml = document.getElementById("nome");
    const typeHtml = document.getElementById("tipo");
    const priceHtml = document.getElementById("preco");

    randomImage.src = randomImageURL;

    
    nameHtml.innerHTML = randomFish.name;
    typeHtml.innerHTML = randomFish.type;
    priceHtml.innerHTML = randomFish.price;
   

    if(inv.length > 13){
             
        const textM = new TextMessage({
            text: 'Inventory Full',
            onComplete: () => resolve()
        })
 
       
    }
    else{
 
        //  inv.forEach((object) => {
        //     if (object.id == 'minhoca') {
        //         hasMinhoca = true;
        //     }
        //     if (object.id == 'fruto proibido') {
        //         hasFruta = true;
        //     }
        //     if (object.id == 'peixe1') {
        //         hasPeixe1 = true;
        //     }
        //     if (object.id == 'peixe5') {
        //         hasPeixe5 = true;
        //     }
        //     if (object.id == 'peixe50') {
        //         hasPeixe50 = true;
        //     }}),
        //      console.log(nameHtml)
        //   if(nameHtml=="peixe1"){
        //     console.log("peixe1")
        //     //  if(hasMinhoca=true){  inv.push(new Fish({
        //     //      id: "peixe",
        //     //      src:randomFish.sprite.image.src,  
        //     //  }))}
        //     //  if(hasMinhoca=false){ this.done(); }
        //   } 
        setTimeout('', 5000);
   inv.push(new Fish({
    id: "peixe",
    src:randomFish.sprite.image.src,  
}))
    console.log('added item');
    this.done(); 
    
}
// let hasMinhoca = false;
// let hasVara = false;
// let hasPeixe1 = false;
// let hasPeixe5 = false;
// let hasPeixe50 = false;
// inv.forEach((object) => {
//     if (object.id == 'minhoca') {
//         hasMinhoca = true;
//     }
//     if (object.id == 'fruit') {
//         hasFruit = true;
//     }
//     if (object.id == 'peixe1') {
//         hasPeixe1 = true;
//     }
//     if (object.id == 'peixe5') {
//         hasPeixe5 = true;
//     }
//     if (object.id == 'peixe50') {
//         hasPeixe50 = true;
//     }
//     if (object.id == 'vara') {
//         hasVara = true;
//     }
//     console.log(hasMinhoca,hasPeixe1,hasPeixe5,hasPeixe50);
// })
// if (hasPeixe1 == true) {
//     inv.push(new Fish({
//         id: "peixe1",
//         src:randomFish.sprite.image.src,  
//     }))}
//     if (hasPeixe1 == false) {
//         this.done();
        }