class MergeBox{
    constructor({ text, onComplete, inventoryObject}) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
        this.inventoryObject = inventoryObject;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("TextMessage");

        this.element.innerHTML = (`
     <div class="quadro"> <div class="imagem">
     <img width="120" height="120" id="displayImage" src="/image/plant/fruto3.png" alt="">
     </div>
    
            <div class="quadro3"> <div class="imagem3">
            <img width="120" height="120" id="displayImage" src="/image/tools/bottle.png" alt="">
            </div></div>

            <div class="mergeinventory"> 
            <p class="TextMessage_p">${this.text}</p>
            <button class="TextMessage1_button">Juntar</button>
            <button class="TextMessage1_button">Largar</button></div>
            <div class="quadro2"> <div class="imagem2">
            <img width="120" height="120" id="displayImage" src="/image/tools/bottlewine.png" alt="">
            </div>
        `)
        this.element.querySelector("button").addEventListener("click", () => {
        
        });
        
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })
        this.actionListener = new KeyPressListener("KeyL", () => {
            this.actionListener.unbind();
            this.done();
         })
         this.actionListener = new KeyPressListener("KeyP", () => {
         
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