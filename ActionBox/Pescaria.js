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

function displayRandomImage() {
    const uniqueSpritePaths = [...new Set([
        '/image/peixe/peixe1.png',
        '/image/peixe/peixe2.png',
        '/image/peixe/peixe5.png',
        '/image/peixe/peixe25.png',
        '/image/peixe/peixe50.png',
        '/image/peixe/peixe100.png',
        '/image/peixe/peixe1000.png',
    ])];
    
    // Create Fish objects using unique sprite paths
    const fishObjects = uniqueSpritePaths.map(path => new Fish({
        src: path,
        name: path.split('/').pop().split('.')[0],  // extracting name from the path, e.g., "peixe1"
        price: Number(path.match(/\d+/)[0]), // You can set appropriate price
        type: 'FishType'  // You can set appropriate type
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
    priceHtml.innerHTML = randomFish.price.match(/\d+/)[0];
    
}

// Example of how to initialize the Pescaria class
// const pescariaInstance = new Pescaria({
//     text: "Example text",
//     onComplete: function() {
//         console.log("Done");
//     }
// });

// const container = document.querySelector("#container");
// pescariaInstance.init(container);