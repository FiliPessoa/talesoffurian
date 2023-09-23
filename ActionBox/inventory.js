
class Inventory{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("InventoryPersonal");
        let imagesHtml = '';
        if (inv.length > 0) {
            for (let i = 0; i < inv.length; i++) {
                const itemList = inv[i];
             //  imagesHtml += `<img width="50" height="50" id="inventaryImage" src="${itemList.sprite.image.src}" alt="" onclick="removeObjectByIndex(${i})">\n`;
             imagesHtml += `<img width="50" height="50" id="inventaryImage" src="${itemList.sprite.image.src}" alt="" onclick="openItemBox({ id: '${itemList.id}', price: '${itemList.price}' ,src: '${itemList.sprite.image.src}' })">\n`;
             }
        }
        
        this.element.innerHTML = imagesHtml;
        
    
     
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


  function openItemBox(itemList) {
    
          const itemBox = new ItemBox({
              id: itemList.id,
              price: itemList.price,
              src: itemList.src,
            
              onComplete: () => console.log('closed')
          });
          itemBox.init(document.querySelector(".game-container"));
 
      console.log("itemList.id:", itemList.id);
  console.log("itemList.price:", itemList.price);
  console.log("itemList.src:", itemList.src);
      itemBox.init(document.querySelector(".game-container"));

  
  }

  