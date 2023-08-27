class ItemBox {
    constructor({id, price,src,indexToRemove ,onComplete }) {
        this.id = id;
        this.price = price;
        this.src = src;
        this.indexToRemove = indexToRemove; // Store the index
        this.onComplete = onComplete;
        this.element = null;
    }
    
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("ConsoleLog");
        this.element.innerHTML = `
          
            <div class="username">${this.id}</div>
            <div class="money">$${this.price}</div>
            <div class="itens" onclick="removeObjectByIndex(${this.indexToRemove})">
            <button class="butao1">use</button>
            <button class="butao2">drop</button></div>
            <div class="consoleL">
          <img width="100" height="100" id="inventaryImage" src='${this.src}' alt="" >\n</div>`;
        
      

        
        
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

function removeObjectByIndex(indexToRemove) {
    if (indexToRemove >= 0 && indexToRemove < inv.length) {
        // Check if the index is within valid bounds

        // Remove the object at the specified index
        inv.splice(indexToRemove, 1);
        console.log('Object Droped.');
        // Call the function to update the inventory display
        // updateInventoryDisplay();
    } else {
        console.log('Invalid index provided or object not found.');
    }
}