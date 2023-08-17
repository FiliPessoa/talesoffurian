let inv = [];

(function(){
    const overworld = new Overworld({
        element:document.querySelector(".game-container")

    });
    
    this.actionListener = new KeyPressListener("KeyI", () => {
        const inventory = new Inventory({
            onComplete: () => console.log('closed')
        })
        inventory.init( document.querySelector(".game-container"));
     })
    overworld.init();
})();