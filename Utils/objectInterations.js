let hasIngredient1 = false;
let hasIngredient2 = false;

function prepareCider(){
   
    selectedItems.forEach((object) => {
    
        if (object.id === 'fruto1') {
            hasIngredient1 = true;
            console.log("fruto found")
        }
      if (object.id === 'garrafa') {
           hasIngredient2 = true;
           console.log("bottle found")
       }
   })
   
   if (hasIngredient1 == true && hasIngredient2 == true) {
    
       let removedOneFruto1 = false;

       selectedItems = selectedItems.filter(object => {
         if (object.id === "fruto1" && !removedOneFruto1) {
           removedOneFruto1 = true;
           return false; // This will remove the first occurrence of "garrafa"
         }
         return true; // Keep all other items in the array
       });
      let removedOneGarrafa = false;

      selectedItems = selectedItems.filter(object => {
 if (object.id === "garrafa" && !removedOneGarrafa) {
   removedOneGarrafa = true;
   return false; // This will remove the first occurrence of "garrafa"
 }
 return true; // Keep all other items in the array
});
selectedItemsReset()

       inv.push(new BottleCider())
       updateWitchcraftxp(10)
       updateStamina(-15)
       console.log("Potion Ceated")
       console.log("-15 de Stamina")
       console.log("+10 Xp")} else {
           console.log("no igredients")

   }
   const inventory = new Inventory({
  
    onComplete: () => console.log('closed')
});
inventory.init(document.querySelector(".game-container"));
}

function prepareWine(){
    
    selectedItems.forEach((object) => {
    
        if (object.id === 'fruto3') {
            hasIngredient1 = true;
            console.log("fruto found")
        }
      if (object.id === 'garrafa') {
           hasIngredient2 = true;
           console.log("bottle found")
       }
   })
   
   if (hasIngredient1 == true && hasIngredient2 == true) {
    
       let removedOneFruto3 = false;

       selectedItems = selectedItems.filter(object => {
         if (object.id === "fruto3" && !removedOneFruto3) {
           removedOneFruto3 = true;
           return false; // This will remove the first occurrence of "garrafa"
         }
         return true; // Keep all other items in the array
       });
      let removedOneGarrafa = false;

selectedItems = selectedItems.filter(object => {
 if (object.id === "garrafa" && !removedOneGarrafa) {
   removedOneGarrafa = true;
   return false; // This will remove the first occurrence of "garrafa"
 }
 return true; // Keep all other items in the array
});
selectedItemsReset()
       inv.push(new BottleWine())
       updateWitchcraftxp(20)
       updateStamina(-15)
       console.log("Potion Ceated")
       console.log("-15 de Stamina")
       console.log("+20 Xp")} else {
           console.log("no igredients")

   }
   const inventory = new Inventory({
  
    onComplete: () => console.log('closed')
});
inventory.init(document.querySelector(".game-container"));
}



function makePife(){
    
    inv.forEach((object) => {
    
         if (object.id === 'bambu') {
             hasIngredient1 = true;
             console.log("fruto found")
         }
       if (object.id === 'vergalhaoquente') {
            hasIngredient2 = true;
            console.log("bottle found")
        }
        if (object.id === 'vergalhao') {
          const textMessage = new TextMessageMinima({
            text: 'Esquentar Vergalhão',
            onComplete: () => resolve()
        })
        textMessage.init(document.querySelector(".game-container"))
      }
    })
    
    if (hasIngredient1 == true && hasIngredient2 == true) {
        let removedOne = false;

        inv = inv.filter(object => {
          if (object.id === "bambu" && !removedOne) {
            removedOne = true;
            return false; // This will remove the first occurrence of "garrafa"
          }
          return true; // Keep all other items in the array
        });
        inv.push(new Pife())
        updateMusicxp(20)
        updateStamina(-15)
        console.log("Pife Ceated")
        console.log("-15 de Stamina")
        console.log("+20 Xp")
        stamina=stamina-15;} else {
            console.log("no igredients")

    }
    const inventory = new Inventory({
  
      onComplete: () => console.log('closed')
  });
  inventory.init(document.querySelector(".game-container"));
}

function eatFruit(){
    
    inv.forEach((object) => {
    
         if (object.id === 'fruto1') {
             hasIngredient1 = true;
             console.log("fruto found")
         }
    
    })
    
    if (hasIngredient1) {
        let removedOne = false;

        inv = inv.filter(object => {
          if (object.id === "fruto1" && !removedOne) {
            removedOne = true;
            return false; // This will remove the first occurrence of "garrafa"
          }
          return true; // Keep all other items in the array
        });
        console.log("Fruta Comida")
        console.log("+60 de Stamina")
        updateStamina(60)} else {
            console.log("no igredients")

    }
    const inventory = new Inventory({
  
      onComplete: () => console.log('closed')
  });
  inventory.init(document.querySelector(".game-container"));
}

function drinkCider(){
    
    inv.forEach((object) => {
    
         if (object.id === 'garrafavermelha') {
             hasIngredient1 = true;
             console.log("cider found")
         }
    
    })
    
    if (hasIngredient1) {
      let removedOne = false;

      inv = inv.filter(object => {
        if (object.id === "garrafavermelha" && !removedOne) {
          removedOne = true;
          return false; // This will remove the first occurrence of "garrafa"
        }
        return true; // Keep all other items in the array
      });
      inv.push(new Bottle())
        console.log("Cidra Bebida")
        console.log("+160 de Stamina")
        updateStamina(160)} else {
            console.log("no igredients")

    }
    const inventory = new Inventory({
  
      onComplete: () => console.log('closed')
  });
  inventory.init(document.querySelector(".game-container"));
}

function OpenText(){
    const message = new TextMessage({
        text: "Vá Para o Norte! Quando chegar onde o mar e o rio se encontram, encontrará um tesouro",
        onComplete: () => resolve()
    })
    message.init( document.querySelector(".game-container"))
    
}


function makeStrenghtPotion(){
    
  inv.forEach((object) => {
    
    if (object.id === 'casca') {
        hasIngredient1 = true;
        console.log("fruto found")
    }
  if (object.id === 'panelacomagua') {
       hasIngredient2 = true;
       console.log("bottle found")
   }
})

if (hasIngredient1 == true && hasIngredient2 == true) {

   let removedOnecasca = false;

   inv = inv.filter(object => {
     if (object.id === "casca" && !removedOnecasca) {
       removedOneFruto3 = true;
       return false; // This will remove the first occurrence of "panelacomagua"
     }
     return true; // Keep all other items in the array
   });
  let removedOnepanelacomagua = false;

inv = inv.filter(object => {
if (object.id === "panelacomagua" && !removedOnepanelacomagua) {
removedOnepanelacomagua = true;
return false; // This will remove the first occurrence of "garrafa"
}
return true; // Keep all other items in the array
});
   inv.push(new PoçãoForça())
   updateWitchcraftxp(60)
   updateStamina(-15)
   console.log("Potion Ceated")
   console.log("-15 de Stamina")
   console.log("+60 Xp")} else {
       console.log("no igredients")

}
const inventory = new Inventory({

onComplete: () => console.log('closed')
});
inventory.init(document.querySelector(".game-container"));
}


function makeWisePotion(){
    
  inv.forEach((object) => {
    
    if (object.id === 'flor') {
        hasIngredient1 = true;
        console.log("fruto found")
    }
  if (object.id === 'panelacomagua') {
       hasIngredient2 = true;
       console.log("bottle found")
   }
})

if (hasIngredient1 == true && hasIngredient2 == true) {

   let removedOneflor = false;

   inv = inv.filter(object => {
     if (object.id === "flor" && !removedOneflor) {
       removedOneFruto3 = true;
       return false; // This will remove the first occurrence of "panelacomagua"
     }
     return true; // Keep all other items in the array
   });
  let removedOnepanelacomagua = false;

inv = inv.filter(object => {
if (object.id === "panelacomagua" && !removedOnepanelacomagua) {
removedOnepanelacomagua = true;
return false; // This will remove the first occurrence of "garrafa"
}
return true; // Keep all other items in the array
});
   inv.push(new PoçãoSabedoria())
   updateWitchcraftxp(80)
   updateStamina(-15)
   console.log("Potion Ceated")
   console.log("-15 de Stamina")
   console.log("+80 Xp")} else {
       console.log("no igredients")

}
const inventory = new Inventory({

onComplete: () => console.log('closed')
});
inventory.init(document.querySelector(".game-container"));
}



function makeWealthPotion(){
    
  inv.forEach((object) => {
    
    if (object.id === 'fruto2') {
        hasIngredient1 = true;
        console.log("fruto found")
    }
  if (object.id === 'panelacomagua') {
       hasIngredient2 = true;
       console.log("bottle found")
   }
})

if (hasIngredient1 == true && hasIngredient2 == true) {

   let removedOneflor = false;

   inv = inv.filter(object => {
     if (object.id === "fruto2" && !removedOneflor) {
       removedOneFruto3 = true;
       return false; // This will remove the first occurrence of "panelacomagua"
     }
     return true; // Keep all other items in the array
   });
  let removedOnepanelacomagua = false;

inv = inv.filter(object => {
if (object.id === "panelacomagua" && !removedOnepanelacomagua) {
removedOnepanelacomagua = true;
return false; // This will remove the first occurrence of "garrafa"
}
return true; // Keep all other items in the array
});
   inv.push(new PoçãoRiqueza())
   updateWitchcraftxp(70)
   updateStamina(-15)
   console.log("Potion Ceated")
   console.log("-15 de Stamina")
   console.log("+70 Xp")} else {
       console.log("no igredients")

}
const inventory = new Inventory({

onComplete: () => console.log('closed')
});
inventory.init(document.querySelector(".game-container"));
}

function makeCalmTea(){
    
  inv.forEach((object) => {
    
    if (object.id === 'folha') {
        hasIngredient1 = true;
        console.log("fruto found")
    }
  if (object.id === 'panelacomagua') {
       hasIngredient2 = true;
       console.log("bottle found")
   }
})

if (hasIngredient1 == true && hasIngredient2 == true) {

   let removedOneflor = false;

   inv = inv.filter(object => {
     if (object.id === "folha" && !removedOneflor) {
       removedOneFruto3 = true;
       return false; // This will remove the first occurrence of "panelacomagua"
     }
     return true; // Keep all other items in the array
   });
  let removedOnepanelacomagua = false;

inv = inv.filter(object => {
if (object.id === "panelacomagua" && !removedOnepanelacomagua) {
removedOnepanelacomagua = true;
return false; // This will remove the first occurrence of "garrafa"
}
return true; // Keep all other items in the array
});
   inv.push(new CháTranquilidade())
   updateWitchcraftxp(30)
   updateStamina(-15)
   console.log("Potion Ceated")
   console.log("-15 de Stamina")
   console.log("+30 Xp")} else {
       console.log("no igredients")

}
const inventory = new Inventory({

onComplete: () => console.log('closed')
});
inventory.init(document.querySelector(".game-container"));
}