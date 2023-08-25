class Plant extends InventoryObject {
    constructor(config) {
        super(config);
    }

update(state) {}

startBehavior(state,behavior) {}

}
class Bambu extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "bambu",
             src : '/image/plant/bambu.png',
             price:20
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Fruto1 extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "fruto1",
             src : '/image/plant/fruto.png',
             price:5
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Fruto2 extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "fruto2",
             src : '/image/plant/fruto2.png',
             price:20
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Fruto3 extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "fruto3",
             src : '/image/plant/fruto3.png',
             price:15
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Casca extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "casca",
             src : '/image/plant/casca.png',
             price:75
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Folha extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "folha",
             src : '/image/plant/folha.png',
             price:10
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
} 
class Flor extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "flor",
             src : '/image/plant/flor.png',
             price:50
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Semente extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "semente",
             src : '/image/plant/semente.png',
             price:100
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Bud extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "bud",
             src : '/image/plant/bud.png',
             price:500
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}