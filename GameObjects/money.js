class Moeda extends InventoryObject {

    constructor(config) {
      
        super(config || {
             id : "moeda",
             src : '/image/peixe/moeda.png'
        
        }); 
         
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}