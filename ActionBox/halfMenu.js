
class HalfMenu{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("InventoryBank");
        let imagesHtml = '';
        if (inv.length > 0) {
            for (let i = 0; i < inv.length; i++) {
                const item = inv[i];
                imagesHtml += `<img width="50" height="50" id="inventaryImage" src="${item.sprite.image.src}" alt="" onclick="addObjectToStorage(${i})">\n`;
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

function addObjectToStorage(indexToRemove) {
    // Remove the object at the specified index

    console.log(indexToRemove);
    console.log(inv[indexToRemove]);
    storage.push(inv[indexToRemove]);
    let removedOne = false;

    inv = inv.filter(object => {
      if (object.id === inv[indexToRemove].id && !removedOne) {
        removedOne = true;
        return false; // This will remove the first occurrence of "garrafa"
      }
      return true; // Keep all other items in the array
    });
    console.log(storage)
    console.log('Object added to storage');
    // Call the function to update the inventory display
    // updateInventoryDisplay();

}