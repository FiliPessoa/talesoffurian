class InventarioPersonagem{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("InventoryPersonal");

        // Create instances of Peixe1 and add them to the loja2 array
        let tesouro = [
            new Moeda(10),
            new Moeda(50),
            new Moeda(10),
            new Chave1(20),
            new Moeda(30),
            new Moeda(10),
            new Moeda(5),
            new Moeda(5),
            new Moeda(5),
            new Moeda(10),
            new Moeda(15),
            new Moeda(10),
            new Moeda(20),
            new Moeda(5),
        ];

        // Add more instances as needed

        // Create an array of image elements based on the loja2 array
        let imageElements = tesouro.map((peixe) => {
            return `<img width="50" height="50" src="${peixe.sprite.image.src}" alt="">`;
        });

        this.element.innerHTML = imageElements.join('');

        this.actionListener = new KeyPressListener("Enter", () => {
            this.actionListener.unbind();
            this.done();
        });
        this.actionListener = new KeyPressListener("KeyP", () => {
            inv.push(tesouro[2]);
            console.log('added item');
            this.done();
            inv.push(tesouro[3]);
            console.log('added item');
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