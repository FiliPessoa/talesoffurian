//<img width="120" height="120" id="displayImage" src="${item.sprite.image.src}" alt="">\
class MoneyManager{
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
      

        // function addMoney() {
        //     inv.forEach((object) => {
        //         if (object.id == 'moeda') {
        //             hasMoney = true;
        //           }
        //     })
        //     if(hasMoney=true){
        //         amountT = amountX+amountY

        //         amountY = amountT
              
        //       }
        //       if(hasMoney=false){
        //         inv.push(Moeda(amountX));
        //         console.log('added item');
        //         this.done();
              
        //       }
        // }
     

        this.element.querySelector("button").addEventListener("click", () => {
            let hasMoney = false;
            amountX =0;
            amountY =0;
            amountT =0;
             inv.forEach((object) => {
                 if (object.id == 'moeda') {
                     hasMoney = true;
                   }
             })
             if(hasMoney=true){
                 amountT = amountX+amountY

                 amountY = amountT
              
               }
               if(hasMoney=false){
                inv.push(Moeda(amountX));
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
            //  let hasMoney = false;
            //  amountX =0;
            //  amountY =0;
            //  amountT =0;
            //  inv.forEach((object) => {
            //      if (object.id == 'moeda') {
            //          hasMoney = true;
            //        }
            //  })
            //  if(hasMoney=true){
            //      amountT = amountX+amountY
            //      amountY = amountT
            //    }
            //    if(hasMoney=false){
                inv.push(this.inventoryObject);
                console.log('added item');
                this.done();
              
            //   }
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