class BottleWine extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "garrafaroxa",
             src : '/image/potions/bottlewine.png',
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
class BottleCider extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "garrafavermelha",
             src : '/image/potions/bottlecider.png',
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
class PoçãoForça extends InventoryObject {

    constructor(config) {
        const stptcoocked = false;
        super(config || {
             id : stptcoocked ?"rawstrenghtpotion" :"strenghtpotion",
             src : stptcoocked?'/image/potions/rawstrenghtpotion.png':'/image/potions/strenghtpotion.png',
             price:300
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class PoçãoSabedoria extends InventoryObject {
   
    constructor(config) {
        const wiptcoocked = false;
        super(config || {
             id : wiptcoocked ?"wisepotion" :"rawwisepotion",
             src : wiptcoocked ?'/image/potions/wisepotion.png' :'/image/potions/rawwisepotion.png',
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
class PoçãoRiqueza extends InventoryObject {

    constructor(config) {
        const weptcoocked = false;
        super(config || {
             id : weptcoocked ?"rawwealthpotion" :"wealthpotion",
             src : weptcoocked ?'/image/potions/wealthpotion.png' :'/image/potions/rawwealthpotion.png',
             price:400
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}
class CháTranquilidade extends InventoryObject {

    constructor(config) {
        const ctcoocked = false;
        super(config || {
             id : ctcoocked ?"rawcalmtea" :"calmtea",
             src : ctcoocked ?'/image/potions/calmtea.png':'/image/potions/rawcalmtea.png',
             price:200
        }); 
    }
    update(state) {
        // Your update logic here
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}