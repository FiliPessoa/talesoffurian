class ItemBox {
    constructor({ id, price, src, i, onComplete }) {
        this.id = id;
        this.price = price;
        this.src = src;
        this.onComplete = onComplete;
        this.element = null;
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("ConsoleLog");
        this.element.innerHTML = `
            <div class="username">${this.id}</div>
            <div class="money">$${this.price}</div>
            <div class="itens">
                <button class="butao1">use</button>
                <button class="butao2">drop</button>
            </div>
            <div class="consoleL">
                <img width="100" height="100" id="inventaryImage" src='${this.src}' alt="">
            </div>`;
         
            
        this.element.querySelector(".butao1").addEventListener("click", () => {
            prepareCider();
        });

        this.element.querySelector(".butao2").addEventListener("click", () => {
            removeObjectByIndex(this.id);
        });

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
//  function openItemBox(itemList, index) {
//      const itemBox = new ItemBox({
//          id: itemList.id,
//          price: itemList.price,
//          src: itemList.src,
//          indexToRemove: index, // Pass the selected index
//          onComplete: () => console.log('closed')
//      });

//      itemBox.init(document.querySelector(".game-container"));

//      console.log("itemList.id:", itemList.id);
//      console.log("itemList.price:", itemList.price);
//      console.log("itemList.src:", itemList.src);
//      console.log("Value of index:",index);
//  }

// Function to remove the selected object


function removeObjectByIndex(indexToRemove) {

        // Check if the index is within valid bounds
        const indexToRemove1 = inv.findIndex((object) => object.id === indexToRemove);
        // Remove the object at the specified index
        console.log(indexToRemove)
        inv.splice(indexToRemove1, 1);
        console.log('Object Droped.');
        // Call the function to update the inventory display
        // updateInventoryDisplay();
        const inventory = new Inventory({
  
            onComplete: () => console.log('closed')
        });
        inventory.init(document.querySelector(".game-container"));
   
}

