class Violao extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "violao",
             src : '/image/instrumentos/violao.png',
             price:1000
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class DistyGuitar extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "distyguitar",
             src : '/image/instrumentos/guitar1.png',
             price:75000
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class MistyGuitar extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "mistyguitar",
             src : '/image/instrumentos/guitar2.png',
             price:50000
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class BuskyGuitar extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "buskyguitar",
             src : '/image/instrumentos/guitar.png',
             price:100000
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Caixa extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "Caixa Cantante",
             src : '/image/instrumentos/caixa.png',
             price:20000

        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Piano extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "Piano",
             src : '/image/instrumentos/piano.png',
             price:25000

        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Pife extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "Pife",
             src : '/image/instrumentos/pife.png',
             price:750,
             tom : "E",
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}