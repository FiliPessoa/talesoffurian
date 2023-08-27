
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
            //     imagesHtml += `<img width="50" height="50" id="inventaryImage" src="${item.sprite.image.src}" alt="" onclick="removeObjectByIndex(${i})">\n`;
             imagesHtml += `<img width="50" height="50" id="inventaryImage" src="${itemList.sprite.image.src}" alt="" onclick="openItemBox({ id: '${itemList.id}', price: '${itemList.price}' ,src: '${itemList.sprite.image.src}' })">\n`;
             }
        }
        
        this.element.innerHTML = imagesHtml;
        
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
// function openItemBox(id, price, src, indexToRemove) {
//     const itemBox = new ItemBox({
//         id: id,
//         price: price,
//         src: src,
//         indexToRemove: indexToRemove,
//         onComplete: () => console.log('closed')
//     });

//     itemBox.init(document.querySelector(".game-container"));
// }
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
