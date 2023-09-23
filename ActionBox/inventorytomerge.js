
class InventoryToMerge1{
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
             imagesHtml += `<img width="50" height="50" id="inventaryImage" src="${itemList.sprite.image.src}" alt="" onclick="selectItem('${i}')">\n`;
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

class InventoryToMerge2{
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
             imagesHtml += `<img width="50" height="50" id="inventaryImage" src="${itemList.sprite.image.src}" alt="" onclick="selectItem2('${i}')">\n`;
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



  function selectItem1(selectedIndex){

  const selectedObject = inv[selectedIndex];
  const ObjectSrc1 = selectedObject.sprite.image.src;
  const ObjectId1 = selectedObject.id
  console.log(selectedObject.id)
  console.log(selectedObject.price)
  console.log(selectedObject.sprite.image.src)
  selectedItems.push({ src: ObjectSrc1, id: ObjectId1 });

}

function reOpenMergeBox1(ObjectSrc1,ObjectId1){
    const invToMerge1 = new MergeBox({
        src1: ObjectSrc1,
        id1: ObjectId1,
        // Add other parameters as needed
        onComplete: () => console.log('closed')  });
    
        invToMerge1.init(document.querySelector(".game-container"));
}
