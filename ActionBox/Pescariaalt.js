class PescariaAlt {
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
    const uniqueSpritePaths = [
        'peixe/peixe1.png',
        'peixe/peixe1.png',
        'peixe/peixe1.png',
        'peixe/peixe1.png',
        'peixe/peixe1.png',
        'peixe/peixe1.png',
        'peixe/peixe1.png',
        'peixe/peixe1.png',
        'peixe/peixe1.png',
        'peixe/peixe1.png',
        'peixe/peixe1.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe2.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe5.png',
        'peixe/peixe25.png',
        'peixe/peixe25.png',
        'peixe/peixe25.png',
        'peixe/peixe25.png',
        'peixe/peixe25.png',
        'peixe/peixe25.png',
        'peixe/peixe25.png',
        'peixe/peixe25.png',
        'peixe/peixe25.png',
        'peixe/peixe50.png',
        'peixe/peixe50.png',
        'peixe/peixe50.png',
        'peixe/peixe50.png',
        'peixe/peixe50.png',
        'peixe/peixe50.png',
        'peixe/peixe100.png',
        'peixe/peixe100.png',
        'peixe/peixe100.png',
        'peixe/peixe1000.png',
              ]

   
         
              const randomIndex = Math.floor(Math.random() * uniqueSpritePaths.length);

// Get the random fish object
const randomFish = uniqueSpritePaths[randomIndex];

// Extract properties from the random fish
const randomImageURL = randomFish.src;
const nameHtml = randomFish.name;
const typeHtml = 'FishType'; // You can set the appropriate type here
const priceHtml = randomFish.price;

// Now you can use these extracted properties as needed
const randomImage = document.getElementById("randomImage");
// Update the image source
randomImage.src = randomImageURL;

const nameHtmlElement = document.getElementById("nome");
// Update the name element
nameHtmlElement.textContent = nameHtml;

const typeHtmlElement = document.getElementById("tipo");
// Update the type element
typeHtmlElement.textContent = typeHtml;

const priceHtmlElement = document.getElementById("preco");
// Update the price element
priceHtmlElement.textContent = priceHtml;
  


    randomImage.src = randomImageURL;

    
    // nameHtml.innerHTML = randomFish.name;
    // typeHtml.innerHTML = randomFish.type;
    // priceHtml.innerHTML = randomFish.price;
   
   
    if(inv.length > 13){
             
        const textM = new TextMessage({
            text: 'Inventory Full',
            onComplete: () => resolve()
        })
 
       
    }
    else{
    //  pescare();
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
//         setTimeout('', 5000);
//    inv.push(new Fish({
//     id: "peixe",
//     src:randomFish.sprite.image.src,  
// }))
// const indexOfWorm = inv.findIndex((object) => object.id === 'minhoca');

// iscaNoAnzol(indexOfWorm);
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
//         hasIsca = true;
//     }
//     if (object.id == 'fruit') {
//         hasIsca = true;
//     }
//     if (object.id == 'peixe1') {
//         hasIsca = true;
//     }
//     if (object.id == 'peixe5') {
//         hasIsca = true;
//     }
//     if (object.id == 'peixe50') {
//         hasIsca = true;
//     }
//     if (object.id == 'vara') {
//         hasVara = true;
//     }
//     console.log(hasMinhoca,hasPeixe1,hasPeixe5,hasPeixe50);
// })
// if (hasPeixe1 == true) {
     inv.push(new Fish({
         id: "peixe1",
         src:randomFish.sprite.image.src,  
    }))}
//     if (hasPeixe1 == false) {
//         this.done();
//        }

        function iscaNoAnzol(indexToRemove) {
            if (indexToRemove >= 0 && indexToRemove < inv.length) {
                // Check if the index is within valid bounds
        
                // Remove the object at the specified index
                inv.splice(indexToRemove, 1);
        
                // Call the function to update the inventory display
                // updateInventoryDisplay();
                
                // Something to do when the worm is found
                console.log('Botou a Isca');
            } else {
                // Something to do when the worm is not found
                console.log('Sem Isca');
                done();
            }
        }

        function pescare(){
            if (peixe=1){
                const indexOfWorm = inv.findIndex((object) => object.id === 'minhoca');
                iscaNoAnzol(indexOfWorm);
                inv.push(new Peixe1())
                
            }
            if (peixe=5){
                const indexOfFruta = inv.findIndex((object) => object.id === 'fruta1');
                iscaNoAnzol(indexOfFruta);
                inv.push(new Peixe5())
                
            }
            if (peixe=10){
                const indexOfPeixe1 = inv.findIndex((object) => object.id === 'peixe1');
                iscaNoAnzol(indexOfPeixe1);
                inv.push(new Peixe10())
                
            }
            if (peixe=25){
                const indexOfPeixe25 = inv.findIndex((object) => object.id === 'peixe1');
                iscaNoAnzol(indexOfPeixe25);
                inv.push(new Peixe25())
                
            }
            if (peixe=50){
                const indexOfPeixe50 = inv.findIndex((object) => object.id === 'minhoca');
                iscaNoAnzol(indexOfPeixe50);
                inv.push(new Peixe50())
                
            }
            if (peixe=100){
                const indexOfPeixe100 = inv.findIndex((object) => object.id === 'peixe50');
                iscaNoAnzol(indexOfPeixe100);
                inv.push(new Peixe100())
                
            }
            if (peixe=200){
                const indexOfPeixe200 = inv.findIndex((object) => object.id === 'peixe50');
                iscaNoAnzol(indexOfPeixe200);
                inv.push(new Peixe200())
                
            }
            if (peixe=500){
                const indexOfPeixe500 = inv.findIndex((object) => object.id === 'peixe50');
                iscaNoAnzol(indexOfPeixe500);
                inv.push(new Peixe500())
                
            }
        }