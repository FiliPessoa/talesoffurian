let inv = [];        // Inventário
let storage = [];    // Banco
let totalAmount = 0; // Dinheiro
let witchcraftxp =0;
let musicxp =0;
let fishingxp =0;
let totalxp=witchcraftxp+musicxp+fishingxp;     // Xp
let stamina = 1000;  //Stamina
// let locationX = 0;
// let locationY = 0;
// let currentMap = 0;

function updateTotalAmount(newAmount) {
    totalAmount = newAmount;
  }
  function updateMusicxp(newmusicxp) {
    musicxp = musicxp + newmusicxp;
  }
  function updateWitchcraftxp(newWitchcraftxp) {
    witchcraftxp = witchcraftxp + newWitchcraftxp;
  }
  function updateFishingxp(newFishingxp) {
    fishingxp = fishingxp + newFishingxp;
  }
  function updateStamina(newStamina) {
    stamina = stamina + newStamina;
  }
     
    
    this.actionListener = new KeyPressListener("KeyI", () => {
        console.log(inv)
        const inventory = new Inventory({
            onComplete: () => console.log('closed'),
            
        })
        inventory.init( document.querySelector(".game-container"));
     })
     this.actionListener = new KeyPressListener("KeyU", () => {
        const skillMenu = new SkillMenu({
            onComplete: () => console.log('closed'),
            
        })
        skillMenu.init( document.querySelector(".game-container"));
     })
    this.actionListener = new KeyPressListener("KeyM", () => {

        const consoleLog = new BasicInfo({
            onComplete: () => console.log('closed'),
            
        })
        consoleLog.init( document.querySelector(".game-container"));
     })
     this.actionListener = new KeyPressListener("KeyO", () => {
     console.log(totalAmount)
     console.log(fishingxp)
     console.log(musicxp)
     console.log(witchcraftxp)
     console.log(stamina)
     })
     this.actionListener = new KeyPressListener("KeyJ", () => {

        const mergeBox = new MergeBox({
            text:"Misturar",
            onComplete: () => console.log('closed')
        })
        mergeBox.init( document.querySelector(".game-container"));
     })


;

