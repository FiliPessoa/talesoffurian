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
        let loja3 = [
            new Pa(),
            new Vara(),
            new Faca(),
        ];

        // Add more instances as needed

        // Create an array of image elements based on the loja2 array
        let imageElements = loja3.map((peixe) => {
            return `<img width="50" height="50" src="${peixe.sprite.image.src}" alt="">`;
        });

        this.element.innerHTML = imageElements.join('');

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