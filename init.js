let inv = [];

(function(){
    const overworld = new Overworld({
        element:document.querySelector(".game-container")

    });
    
    this.actionListener = new KeyPressListener("KeyI", () => {
        console.log(inv)
        const inventory = new Inventory({
            onComplete: () => console.log('closed'),
            
        })
        inventory.init( document.querySelector(".game-container"));
     })
     this.actionListener = new KeyPressListener("KeyJ", () => {

        const mergeBox = new MergeBox({
            text:"Misturar",
            onComplete: () => console.log('closed')
        })
        mergeBox.init( document.querySelector(".game-container"));
     })
    overworld.init();
})();