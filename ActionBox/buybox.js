let estoque = [];
let selectEstoque = 0;

function updateEstoque(newEstoqueSelected) {
    estoque = newEstoqueSelected;
  }


class BuyBox {
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
                <button class="butao1">buy</button>
                <button class="butao2">undo</button>
            </div>
            <div class="consoleL">
                <img width="100" height="100" id="inventaryImage" src='${this.src}' alt="">
            </div>`;
         
            
        this.element.querySelector(".butao1").addEventListener("click", () => {
            buy2(this.id);
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

function buy2(indexOfObjectToRemove) {
    console.log(indexOfObjectToRemove)
    hasMoney=false;
    removedOne=false;
    const indexToRemove3 = estoque.findIndex((object) => object.id === indexOfObjectToRemove);
     const precio = estoque[indexToRemove3].price;
     
     console.log(precio)
     console.log(indexToRemove3)
     const totalAmount2 = inv.reduce((accumulator, inventoryObject) => {
        if (inventoryObject instanceof Moeda && typeof inventoryObject.amount === 'number') {
            return accumulator + inventoryObject.amount;
        }
        return accumulator;
    }, 0);
 
     if(totalAmount2>=precio){
        console.log(totalAmount2)
     inv.push(estoque[indexToRemove3]);
     console.log('added item');
     inv = inv.filter(object => {
        if (object.id === "moeda" && !removedOne) {
          removedOne = true;
          return false; // This will remove the first occurrence of "garrafa"
        }
        return true; // Keep all other items in the array
      });
      inv.push( new Moeda(totalAmount-precio));
     updateTotalAmount(totalAmount-precio)
     console.log(`Sold object for ${precio} Moeda(s). Current Moeda amount: ${totalAmount}`);
     const troco = inv.findIndex((object) => object.id === "moeda");
     const itemBox = new ItemBox({
        id: inv[troco].id,
        price: inv[troco].price,
        src: inv[troco].sprite.image.src,
      
        onComplete: () => console.log('closed')
    });
    itemBox.init(document.querySelector(".game-container"));}

     else{
         const textMessage = new TextMessageMinima({
             text: 'Sem Grana',
             onComplete: () => resolve()
         })
         textMessage.init(document.querySelector(".game-container"))
     }
 
    } 
    function openBuyBox(estoque) {
    console.log(estoque)
     
    
        const buyBox = new BuyBox({
            id: estoque.id,
            price: estoque.price,
            src: estoque.src,
          
            onComplete: () => console.log('closed')
        });
        buyBox.init(document.querySelector(".game-container"));
    
    
    
    }
    