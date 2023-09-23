class SellBox {
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
                <button class="butao1">sell</button>
                <button class="butao2">undo</button>
            </div>
            <div class="consoleL">
                <img width="100" height="100" id="inventaryImage" src='${this.src}' alt="">
            </div>`;
         
            
        this.element.querySelector(".butao1").addEventListener("click", () => {
            sell(this.id);
        });

        this.element.querySelector(".butao2").addEventListener("click", () => {
            close();
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

function sell(indexOfObjectToRemove) {
    hasMoney=false;
    const indexToRemove1 = inv.findIndex((object) => object.id === indexOfObjectToRemove);
    console.log(indexToRemove1)
     const price = inv[indexToRemove1].price;
     const ObjectId = inv[indexToRemove1].id;
     const sourceImage = inv[indexToRemove1].sprite.image.src;
     const totalAmount2 = inv.reduce((accumulator, inventoryObject) => {
        if (inventoryObject instanceof Moeda && typeof inventoryObject.amount === 'number') {
            return accumulator + inventoryObject.amount;
        }
        return accumulator;
    }, 0);
    if (ObjectId === 'moeda') {
        const itemBox = new ItemBox({
            id: ObjectId,
            price: price,
            src: sourceImage,
          
            onComplete: () => console.log('closed')
        });
        itemBox.init(document.querySelector(".game-container"));
    

    }else{

    inv.forEach((object) => {
        if (object.id === 'moeda') {
            hasMoney = true;
            if (object.inventoryObject && object.inventoryObject.amount) {
                totalAmount2 += object.inventoryObject.amount;
               
            }
        }
    });
     // Remove the object
     inv.splice(indexToRemove1, 1);

     // Add a Moeda with the amount equal to the price

     inv.forEach((object) => {
        if (object.id === 'moeda') {
            hasMoney = true;
        }
    })
        if (hasMoney == true) {
          
  console.log(price)
  let removedOne = false;

  inv = inv.filter(object => {
    if (object.id === "moeda" && !removedOne) {
      removedOne = true;
      return false; // This will remove the first occurrence of "garrafa"
    }
    return true; // Keep all other items in the array
  });
  const moeda = new Moeda(totalAmount2+price);
        inv.push(moeda);

}else{ const moeda = new Moeda(price);
        inv.push(moeda);
     // Log the amount of the Moeda object
}
updateTotalAmount(totalAmount2+price);
     console.log(`Sold object for ${price} Moeda(s). Current Moeda amount: ${totalAmount}`);
     const troco = inv.findIndex((object) => object.id === "moeda");
     const itemBox = new ItemBox({
        id: inv[troco].id,
        price: inv[troco].price,
        src: inv[troco].sprite.image.src,
      
        onComplete: () => console.log('closed')
    });
    itemBox.init(document.querySelector(".game-container"));
    }
// sellBox.removeElement();
const inventory = new Loja5({

onComplete: () => console.log('closed')
});
inventory.init(document.querySelector(".game-container"));
    } 