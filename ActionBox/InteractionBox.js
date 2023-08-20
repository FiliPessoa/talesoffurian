//<img width="120" height="120" id="displayImage" src="${item.sprite.image.src}" alt="">\
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
     <div class="quadro"> <div class="imagem">
     <img width="120" height="120" id="source" src=${this.inventoryObject.sprite.image.src} alt="">
   
     </div>
     <div class="addtoinventory"> 
            <p class="TextMessage_p">${this.text}</p>
            <button class="TextMessage1_button">Pegar</button>
            <button class="TextMessage1_button">Largar</button></div></div>
        `)
        this.element.querySelector("button").addEventListener("click", () => {
            if(inv.length > 13){
             
                const textM = new TextMessage({
                    text: 'sem minhoca',
                    onComplete: () => resolve()
                })
              
               
            }
            else{
            inv.push(this.inventoryObject);
            console.log('added item');
            this.done();
        }
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
            if(inv.length > 13){
             
                new TextMessage({type:"textMessage",text:"Inventory Full"})
                this.done()
               
               
            }
            else{
            inv.push(this.inventoryObject);
            console.log('added item');
            this.done();
        }
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