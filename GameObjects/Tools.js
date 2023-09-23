class Vara extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "vara",
             src : '/image/tools/vara.png',
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
class Vergalhão extends InventoryObject {

    constructor(config) {
        var isHot=true;
        super(config || {
             id : isHot ?"vergalhaoquente" : "vergalhao",
             src : isHot ? '/image/tools/vergalhaoquente.png' :'/image/tools/vergalhao.png' ,
             price:20
             
        
        }); 
    }
    update(state) {
     if (isHot === false) { // Use '===' for comparison, not '='
           
                console.log("It's hot!");
                console.log(isHot);
            } else if (isHot === true) { // Use '===' for comparison, not '='
                isHot = false;
                console.log("It's not hot.");
                console.log(isHot);
            }
     
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Pa extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "Pa",
             src : '/image/tools/pa.png',
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
class Faca extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "Faca",
             src : '/image/tools/faca.png',
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
class Cachimbo extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "Cachimbo",
             src : '/image/tools/cachimbo.png',
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
class Cachimbo2 extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "Cachimbo2",
             src : '/image/tools/cachimbo2.png',
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
class Bong extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "Bong",
             src : '/image/tools/bong.png',
             price:2000
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class Panela extends InventoryObject {
    constructor(config) {
        const hasWater = true;
        super(config || {
             id : hasWater ? "panelacomagua" : "panela",
             src : hasWater ? '/image/tools/panelacomagua.png' :'/image/tools/panela.png',
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
class Bottle extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "garrafa",
             src : '/image/tools/bottle.png',
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
class BottlePerg extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "garrafa com pergaminho",
             src : '/image/tools/bottlePerg.png'
        
        }); 
    }
    update(state) {
        function possion(indexToRemove){
            inv.splice(indexToRemove, 1);
            inv.push(new Bottle())
            inv.push(new Pergaminho())
        }
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}

class Pergaminho extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "pergaminho",
             src : '/image/peixe/pergaminho.png'
        
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
