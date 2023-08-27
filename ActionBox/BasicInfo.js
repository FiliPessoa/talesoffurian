class BasicInfo {
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("ConsoleLog");
        this.element.innerHTML = `
            <div class="username">Furian</div>
            <div class="money"></div>
            <div class="itens">
            <button class="butao1">Quest</button>
            <button class="butao2">Skill</button></div></div>
            <div class="consoleL">
            <img width="100" height="100" id="randomImage" src=" /image/characters/rosto.png" alt=""></div>
        `;
        
        // Calculate the totalAmount as you did before
        let hasMoney = false;
        const totalAmount = inv.reduce((accumulator, inventoryObject) => {
            if (inventoryObject instanceof Moeda && typeof inventoryObject.amount === 'number') {
                return accumulator + inventoryObject.amount;
            }
            return accumulator;
        }, 0);
        
        inv.forEach((object) => {
            if (object.id === 'moeda') {
                hasMoney = true;
                if (object.inventoryObject && object.inventoryObject.amount) {
                    totalAmount += object.inventoryObject.amount;
                }
            }
        });
        
        // Update the "money" <div> with the totalAmount
        const moneyDiv = this.element.querySelector(".money");
        moneyDiv.textContent = `$${totalAmount}`;
        
  
    
        inv.forEach((object) => {
            if (object.id === 'moeda') {
                hasMoney = true;
                // Check if the object has an "amount" property (assuming Moeda objects)
                if (object.inventoryObject && object.inventoryObject.amount) {
                    totalAmount += object.inventoryObject.amount;
                }
            }
        });
    
        console.log(`Total Money: ${totalAmount}`);
        
        
//        this.element.innerHTML = imagesHtml;
        
        // var imageButton = document.getElementById("inventaryImage");
        // let hasVara = false;
        // // Add a click event listener to the image
        // imageButton.addEventListener("click", function() {
        //     hasVara=true
        // });
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