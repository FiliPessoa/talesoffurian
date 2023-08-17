class InteractionBox{
    constructor({ text, onComplete, inventoryObject}) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
        this.inventoryObject = inventoryObject;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("TextMessage1");

        this.element.innerHTML = (`
            <p class="TextMessage_p">${this.text}</p>
            <button class="TextMessage1_button">Pegar</button>
            <button class="TextMessage1_button">Ignorar</button>
        `)
        this.element.querySelector("button").addEventListener("click", () => {
            inv.push(this.inventoryObject);
            console.log('added item');
            this.done();
        });
        
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
        container.appendChild(this.element)
    }
}