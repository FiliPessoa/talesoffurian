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
             
                const textMessage = new TextMessageMinima({
                    text: 'Inventário Cheio',
                    onComplete: () => resolve()
                })
                textMessage.init(document.querySelector(".game-container"))
              
               
            }
            else{


               let hasMoney = false;


               

               if (this.inventoryObject.id === 'moeda') {
                inv.forEach((object) => {
                    if (object.id === 'moeda') {
                        hasMoney = true;
                    }
                })
                
                    if (hasMoney == true) {
                        const coinValue = this.inventoryObject.amount;
                        inv = inv.filter(object => object.id !== "moeda");
                        const moeda = new Moeda(totalAmount+coinValue);
                    inv.push(moeda);
                    }else{
                        inv.push(this.inventoryObject);
                    }
                      
              
        
            }else{ 
                inv.push(this.inventoryObject);

            }







            const totalAmount1 = inv.reduce((accumulator, inventoryObject) => {
                if (inventoryObject instanceof Moeda && typeof inventoryObject.amount === 'number') {
                    return accumulator + inventoryObject.amount;
                }
                return accumulator;
            }, 0);
            console.log(totalAmount1)
            updateTotalAmount(totalAmount1);
            
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
             
                const textMessage = new TextMessageMinima({
                    text: 'Inventário Cheio',
                    onComplete: () => resolve()
                })
                textMessage.init(document.querySelector(".game-container"))
               
               
            }
            else{
            inv.push(this.inventoryObject);
            console.log('added item');

            const totalAmount1 = inv.reduce((accumulator, inventoryObject) => {
                if (inventoryObject instanceof Moeda && typeof inventoryObject.amount === 'number') {
                    return accumulator + inventoryObject.amount;
                }
                return accumulator;
            }, 0);
            console.log(totalAmount1)
            updateTotalAmount(totalAmount1);
           
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



function takeObject(){}