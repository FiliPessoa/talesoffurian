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
class Fruto1 extends InventoryObject {

    constructor(config) {
        super(config || {
             id : "fruto1",
             src : '/image/plant/fruto.png',
             price:5
        
        }); 
    }
    update(state) {
        function possion(indexToRemove){
            inv.splice(indexToRemove, 1);
            inv.push(new BottleCider())
        }
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
             price:40
        
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
             price:10
        
        }); 
    }
    update(state) {
        function possion(indexToRemove){
            inv.splice(indexToRemove, 1);
            inv.push(new BottleWine())
        }
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
             price:30
        
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
class Canabis extends InventoryObject {

    constructor(config) {
        let canabisGrow='/image/plant/weed.png'
        let x=5;
        if (x==0){
            canabisGrow='/image/plant/weed.png'
        }
        if (x==1){
            canabisGrow='/image/plant/weed1.png'
        }
        if (x==2){
            canabisGrow='/image/plant/weed2.png'
        }
        if (x==3){
            canabisGrow='/image/plant/weed3.png'
        }
        if (x==4){
            canabisGrow='/image/plant/weed4.png'
        }
        if (x==5){
            canabisGrow='/image/plant/weed5.png'
        }
        if (x==6){
            canabisGrow='/image/plant/weed6.png'
        }
        super(config || {
             id : "bud",
             src : canabisGrow,
             price:0
        
        }); 
    };
 
    update(x) {
      // Define a function to increment x
function incrementX() {
    x++;
    console.log(`x is now ${x}`);
  }
  
  // Set up an interval to call incrementX every 5 minutes (300,000 milliseconds)
  const interval = setInterval(incrementX, 300000);
  
  // Optionally, you can clear the interval after a certain number of iterations
  const maxIterations = 6; // For example, stop after 10 increments
  let iterations = 0;
  
  function checkIterations() {
    iterations++;
    if (iterations >= maxIterations) {
      clearInterval(interval); // Stop the interval after reaching the desired number of iterations
      console.log('Interval stopped.');
    }
  }
  
  // Set up a timeout to stop the interval after a certain number of iterations
  setTimeout(checkIterations, maxIterations * 300000);
        
    }

    startBehavior(state, behavior) {
        // Your behavior logic here
    }
}