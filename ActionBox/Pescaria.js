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
                <img width="120" height="120" id="randomImage" src="" alt="">
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
    hasMinhoca = false;
    hasFruta = false;
    hasPeixe1 = false;
    hasPeixe50 = false;
    hasPeixe5 = false;
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
    const fishObjects = [uniqueSpritePaths].map(path => new Fish({
        src: path,
        name: path.split('/').pop().split('.')[0],  // extracting name from the path, e.g., "peixe1"
        price: Number(path.match(/\d+/)[0]), // You can set appropriate price
        // type: 'FishType',  // You can set appropriate type
        // isca: Number(path.match(/\d+/)[0]) == 1 ? new Isca({name: 'minhoca'}) : new Isca({}),
        // isca: Number(path.match(/\d+/)[0]) == 5 ? new Isca({name: 'Fruta'}) : new Isca({}),
        // isca: Number(path.match(/\d+/)[0]) == 10 ? new Isca({name: 'peixe1'}) : new Isca({}),
        // isca: Number(path.match(/\d+/)[0]) == 25 ? new Isca({name: 'minhoca'}) : new Isca({}),
        // isca: Number(path.match(/\d+/)[0]) == 50 ? new Isca({name: 'peixe1'}) : new Isca({}),
        // isca: Number(path.match(/\d+/)[0]) == 100 ? new Isca({name: 'peixe50'}) : new Isca({}),
        // isca: Number(path.match(/\d+/)[0]) == 200 ? new Isca({name: 'peixe50'}) : new Isca({}),
        // isca: Number(path.match(/\d+/)[0]) == 500 ? new Isca({name: 'peixe5'}) : new Isca({}),
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
        if (randomFish.price==1){
            inv.forEach((object) => {
                if (object.id === 'minhoca') {
                    hasMinhoca = true;
                }})
                if (hasMinhoca == true){
            const indexOfWorm = inv.findIndex((object) => object.id === 'minhoca');
            iscaNoAnzol(indexOfWorm);
            inv.push(new Peixe1())
            console.log("Peixe Pescado")
                }else{
                   
                    console.log("Peixe Escapou")
                }
            
            
        }
        if (randomFish.price==5){
            inv.forEach((object) => {
                if (object.id === 'fruto1') {
                    hasFruta = true;
                }})
                if (hasFruta == true){
            const indexOfFruta = inv.findIndex((object) => object.id === 'fruto1');
            iscaNoAnzol(indexOfFruta);
            inv.push(new Peixe5())
            console.log("Peixe Pescado")
                }else{
                   
                    console.log("Peixe Escapou")
                }
            
        }
        if (randomFish.price==10){
            inv.forEach((object) => {
                if (object.id === 'peixe1') {
                    hasPeixe1 = true;
                }})
                if (hasPeixe1 == true){
            const indexOfPeixe1 = inv.findIndex((object) => object.id === 'peixe1');
            iscaNoAnzol(indexOfPeixe1);
            inv.push(new Peixe10())
            console.log("Peixe Pescado")
                }else{
                   
                    console.log("Peixe Escapou")
                }
            
        }
        if (randomFish.price==25){
            inv.forEach((object) => {
                if (object.id === 'peixe1') {
                    hasPeixe1 = true;
                }})
                if (hasPeixe1 == true){
            const indexOfPeixe1 = inv.findIndex((object) => object.id === 'peixe1');
            iscaNoAnzol(indexOfPeixe1);
            inv.push(new Peixe25())
            console.log("Peixe Pescado")
                }else{
                   
                    console.log("Peixe Escapou")
                }
            
        }
        if (randomFish.price==50){
            inv.forEach((object) => {
                if (object.id === 'minhoca') {
                    hasMinhoca = true;
                }})
                if (hasMinhoca == true){
            const indexOfWorm = inv.findIndex((object) => object.id === 'minhoca');
            iscaNoAnzol(indexOfWorm);
            inv.push(new Peixe50())
            console.log("Peixe Pescado")
                }else{
                   
                    console.log("Peixe Escapou")
                }
            
        }
        if (randomFish.price==100){
            inv.forEach((object) => {
                if (object.id === 'peixe50') {
                    hasPeixe50 = true;
                }})
                if (hasPeixe50 == true){
            const indexOfPeixe50 = inv.findIndex((object) => object.id === 'peixe50');
            iscaNoAnzol(indexOfPeixe50);
            inv.push(new Peixe100())
            console.log("Peixe Pescado")
                }else{
                   
                    console.log("Peixe Escapou")
                }
            
        }
        if (randomFish.price==200){
            inv.forEach((object) => {
                if (object.id === 'peixe50') {
                    hasPeixe50 = true;
                }})
                if (hasPeixe50 == true){
            const indexOfPeixe50 = inv.findIndex((object) => object.id === 'peixe50');
            iscaNoAnzol(indexOfPeixe50);
            inv.push(new Peixe200())
            console.log("Peixe Pescado")
                }else{
                   
                    console.log("Peixe Escapou")
                }
            
        }
        if (randomFish.price==500){
            inv.forEach((object) => {
                if (object.id === 'peixe5') {
                    hasPeixe5 = true;
                }})
                if (hasPeixe5 == true){
            const indexOfPeixe5 = inv.findIndex((object) => object.id === 'peixe5');
            iscaNoAnzol(indexOfPeixe5);
            inv.push(new Peixe500())
            console.log("Peixe Pescado")
                }else{
                   
                    console.log("Peixe Escapou")
                }
            
        }
//         setTimeout('', 5000);
//    inv.push(new Fish({
//     id: "peixe",
//     src:randomFish.sprite.image.src,  
//   }))
// const indexOfWorm = inv.findIndex((object) => object.id === 'minhoca');

// iscaNoAnzol(indexOfWorm);
    console.log(randomFish.price);  
    
}
        }

        function iscaNoAnzol(indexToRemove) {
            if (indexToRemove >= 0 && indexToRemove < inv.length) {
                // Check if the index is within valid bounds
        
                // Remove the object at the specified index
                inv.splice(indexToRemove, 1);
        
                // Call the function to update the inventory display
                // updateInventoryDisplay();
                
                // Something to do when the worm is found
               
            } else {
                // Something to do when the worm is not found
                console.log('Sem Isca');
                done();
            }
        }


        // function pescare(){
        //     if (randomFish.price=1){
        //         const indexOfWorm = inv.findIndex((object) => object.id === 'minhoca');
        //         iscaNoAnzol(indexOfWorm);
        //         inv.push(new Peixe1())
                
        //     }
        //     if (randomFish.price=5){
        //         const indexOfFruta = inv.findIndex((object) => object.id === 'fruta1');
        //         iscaNoAnzol(indexOfFruta);
        //         inv.push(new Peixe5())
                
        //     }
        //     if (randomFish.price=10){
        //         const indexOfPeixe1 = inv.findIndex((object) => object.id === 'peixe1');
        //         iscaNoAnzol(indexOfPeixe1);
        //         inv.push(new Peixe10())
                
        //     }
        //     if (randomFish.price=25){
        //         const indexOfPeixe25 = inv.findIndex((object) => object.id === 'peixe1');
        //         iscaNoAnzol(indexOfPeixe25);
        //         inv.push(new Peixe25())
                
        //     }
        //     if (randomFish.price=50){
        //         const indexOfPeixe50 = inv.findIndex((object) => object.id === 'minhoca');
        //         iscaNoAnzol(indexOfPeixe50);
        //         inv.push(new Peixe50())
                
        //     }
        //     if (randomFish.price=100){
        //         const indexOfPeixe100 = inv.findIndex((object) => object.id === 'peixe50');
        //         iscaNoAnzol(indexOfPeixe100);
        //         inv.push(new Peixe100())
                
        //     }
        //     if (randomFish.price=200){
        //         const indexOfPeixe200 = inv.findIndex((object) => object.id === 'peixe50');
        //         iscaNoAnzol(indexOfPeixe200);
        //         inv.push(new Peixe200())
                
        //     }
        //     if (randomFish.price=500){
        //         const indexOfPeixe500 = inv.findIndex((object) => object.id === 'peixe50');
        //         iscaNoAnzol(indexOfPeixe500);
        //         inv.push(new Peixe500())
                
        //     }
        // }