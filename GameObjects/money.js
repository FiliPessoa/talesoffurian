class Moeda extends InventoryObject {
    // Define id and src as constants within the class
    static id = "moeda";
    static src = '/image/peixe/moeda.png';

    constructor(amount) {
        // Use the static properties id and src
        super({
            id: Moeda.id,
            src: Moeda.src
        });

        this.amount = amount || 1; // Set the amount provided or default to 1
        
    }

    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}