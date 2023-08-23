class Fish extends InventoryObject {
    constructor(config) {
        super(config);
        this.isca = config.isca;
    }

update(state) {}

startBehavior(state,behavior) {}

}
class Minhoca extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "minhoca",
             src : '/image/peixe/worm.png'
        
        }); 
    }

    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Peixe1 extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "peixe1",
             src : '/image/peixe/peixe1.png'
        
        }); 
    }

    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Peixe5 extends InventoryObject {
    constructor(config) {
        super(config || {
             id : "peixe5",
             src : '/image/peixe/peixe5.png'
        
        }); 
    }


update(state) {}

startBehavior(state,behavior) {}

}
class Peixe10 extends InventoryObject {
    constructor(config) {
        super(config || {
             id : "peixe10",
             src : '/image/peixe/peixe10.png'
        
        }); 
    }


update(state) {}

startBehavior(state,behavior) {}

}

class Peixe25 extends InventoryObject {
    constructor(config) {
        super(config || {
             id : "peixe25",
             src : '/image/peixe/peixe25.png'
        
        }); 
    }


update(state) {}

startBehavior(state,behavior) {}

}

class Peixe50 extends InventoryObject {
    constructor(config) {
        super(config || {
             id : "peixe50",
             src : '/image/peixe/peixe50.png'
        
        }); 
    }


update(state) {}

startBehavior(state,behavior) {}

}
class Peixe100 extends InventoryObject {
    constructor(config) {
        super(config || {
             id : "peixe100",
             src : '/image/peixe/peixe100.png'
        
        }); 
    }

update(state) {}

startBehavior(state,behavior) {}

}

class Peixe200 extends InventoryObject {
    constructor(config) {
        super(config || {
             id : "peixe200",
             src : '/image/peixe/peixe200.png'
        
        }); 
    }

update(state) {}

startBehavior(state,behavior) {}

}

class Peixe500 extends InventoryObject {
    constructor(config) {
        super(config || {
             id : "peixe500",
             src : '/image/peixe/peixe500.png'
        
        }); 
    }

update(state) {}

startBehavior(state,behavior) {}

}