let selectedItems = [];
function selectedItemsReset(){
    selectedItems = []
}

class MergeBox{
    constructor({ object1,object2,id1,src1,id2,src2,id3,src3,text, onComplete}) {
        this.object1 = object1;
        this.object2 = object2;
        this.id1 = id1;
        this.src1 = src1;
        this.id2 = id2;
        this.src2 = src2;
        this.id3 = id3;
        this.src3 = src3;
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("TextMessage");

        this.element.innerHTML = (`
     <div class="quadro"> <div class="imagem"onclick="openSelection1Inv()">
     <img width="120" height="120" id='${this.id1}' src='${this.src1}' alt=""onclick="openSelection1Inv()" >
            </div></div>
     </div>
    
            <div class="quadro3"> <div class="imagem3"onclick="openSelection1Inv()">
            <img width="120" height="120" id='${this.id2}' src='${this.src2}' alt=""onclick="openSelection1Inv()" >
            </div></div>

            <div class="mergeinventory"> 
            <p class="TextMessage_p">${this.text}</p>
            <button class="misturar">Misturar</button>
            <button class="voltar">Voltar</button></div>
            <div class="quadro2"> <div class="imagem2">
            <img width="120" height="120" id='${this.id3}' src='${this.src3}' alt="">
            </div>
        `)

        


        this.element.querySelector(".voltar").addEventListener("click", () => {
            this.actionListener.unbind();
            this.done();
            selectedItems = []
        });
        this.element.querySelector(".voltar").addEventListener("click", () => {
            this.actionListener.unbind();
            this.done();
            selectedItems = []
        });
        this.element.querySelector(".misturar").addEventListener("click", () => {
            misturar()
        });
       
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
           selectedItems = []
        })
        this.actionListener = new KeyPressListener("KeyL", () => {
            this.actionListener.unbind();
            this.done();
            selectedItems = []
            // const firstItem = this.object1
            // inv.push(new firstItem)
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



function openSelection1Inv() { 
    const invToMerge1 = new InventoryToMerge1({

        onComplete: () => console.log('closed')
    });

    invToMerge1.init(document.querySelector(".game-container"));
}
function openSelection2Inv() { 
    const invToMerge1 = new InventoryToMerge2({

        onComplete: () => console.log('closed')
    });

    invToMerge1.init(document.querySelector(".game-container"));
}

function misturar(){
console.log(selectedItems[1].id)

         if (selectedItems[0].id === 'garrafa'||selectedItems[1].id === 'garrafa' && selectedItems[0].id === 'fruto1'||selectedItems[1].id === 'fruto1') {
            prepareCider()
         }
         if (selectedItems[0].id === 'garrafa'||selectedItems[1].id === 'garrafa' && selectedItems[0].id === 'fruto3'||selectedItems[1].id === 'fruto3') {
            prepareWine()
         }
         if (selectedItems[0].id === 'vergalhao'||selectedItems[1].id === 'vergalhao' && selectedItems[0].id === 'bambu'||selectedItems[1].id === 'bambu') {
            makePife()
         } 
         if (selectedItems[0].id === 'panelacomagua'||selectedItems[1].id === 'panelacomagua' && selectedItems[0].id === 'casca'||selectedItems[1].id === 'casca') {
            makeStrenghtPotion()
         }
         if (selectedItems[0].id === 'panelacomagua'||selectedItems[1].id === 'panelacomagua' && selectedItems[0].id === 'flor'||selectedItems[1].id === 'flor') {
            makeWisePotion()
         }
         if (selectedItems[0].id === 'panelacomagua'||selectedItems[1].id === 'panelacomagua' && selectedItems[0].id === 'fruto2'||selectedItems[1].id === 'fruto2') {
            makeWealthPotion()
         }
         if (selectedItems[0].id === 'panelacomagua'||selectedItems[1].id === 'panelacomagua' && selectedItems[0].id === 'folha'||selectedItems[1].id === 'folha') {
            makeCalmTea()
         }
         else{
            console.log("não tem ingredientes")
         }
  
  
   
console.log(object)
}

function selectItem(selectedIndex) {
    const selectedObject = inv[selectedIndex];
    const ObjectSrc = selectedObject.sprite.image.src;
    const ObjectId = selectedObject.id;

    // console.log(selectedObject.id);
    // console.log(selectedObject.price);
    // console.log(selectedObject.sprite.image.src);
    let removedOne = false;

    inv = inv.filter(object => {
      if (object.id === selectedObject.id && !removedOne) {
        removedOne = true;
        return false; // This will remove the first occurrence of "garrafa"
       }
       return true; // Keep all other items in the array
     });
    const invToMerge1 = new InventoryToMerge1({

        onComplete: () => console.log('closed')
    });

    invToMerge1.init(document.querySelector(".game-container"));
    selectedItems.push({ object:selectedObject, src: ObjectSrc, id: ObjectId });
    

    // Check if both items are selected
    if (selectedItems.length === 2) {
        reOpenMergeBox(selectedItems[0], selectedItems[1]);
       // selectedItems = []; // Reset the selectedItems array
    }
}
function reOpenMergeBox(item1, item2) {
console.log(selectedItems[0].object)
    const invToMerge = new MergeBox({
        object1: item1.object,
        src1: item1.src,
        id1: item1.id,
        object2: item1.object,
        src2: item2.src,
        id2: item2.id,
        
        // Add other parameters as needed
        onComplete: () => console.log('closed')
    });
// console.log(object1)

    invToMerge.init(document.querySelector(".game-container"));
}