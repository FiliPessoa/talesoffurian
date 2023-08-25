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

     this.actionListener = new KeyPressListener("KeyO", () => {
        let hasMoney = false; // Initialize the flag for presence of "moeda" objects
        const totalAmount = inv.reduce((accumulator, inventoryObject) => {
            // Check if the object is an instance of Moeda and has an 'amount' property
            if (inventoryObject instanceof Moeda && typeof inventoryObject.amount === 'number') {
                return accumulator + inventoryObject.amount;
            }
            // If it's not a Moeda or doesn't have 'amount', return accumulator as-is
            return accumulator;
        }, 0);
        
      
    
        inv.forEach((object) => {
            if (object.id === 'moeda') {
                hasMoney = true;
                // Check if the object has an "amount" property (assuming Moeda objects)
                if (object.inventoryObject && object.inventoryObject.amount) {
                    totalAmount += object.inventoryObject.amount;
                }
            }
        });
        console.log('Inventory:', inv);
        // Now, "totalAmount" will correctly represent the sum of Moeda amounts
        console.log(`Has Money: ${hasMoney}`);
        console.log(`Total Money: ${totalAmount}`);
    });
    overworld.init();
})();

function removeObjectByIndex(indexToRemove) {
    if (indexToRemove >= 0 && indexToRemove < inv.length) {
        // Check if the index is within valid bounds

        // Remove the object at the specified index
        inv.splice(indexToRemove, 1);

        // Call the function to update the inventory display
        // updateInventoryDisplay();
    } else {
        console.log('Invalid index provided or object not found.');
    }
}