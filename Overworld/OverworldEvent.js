class OverWorldEvent{
    constructor({ map,event}) {
        this.map = map;
        this.event = event;
    }
    stand(resolve) {
        const who = this.map.gameObjects[ this.event.who ];
        who.startBehavior({
         map: this.map
        }, {
         type:"stand",
         direction: this.event.direction,
         time: this.event.time
        }) 
        const completeHandler = e => {
         if(e.detail.whoId === this.event.who){
             document.removeEventListener("PersonStandingComplete", completeHandler);
             resolve();
         }
 
        }
        document.addEventListener("PersonStandingComplete",completeHandler)

    }
    walk(resolve){
        const who = this.map.gameObjects[this.event.who];
       who.startBehavior({
        map:this.map
       }, {
        type:"walk",
        direction: this.event.direction,
        retry:true
       }) 
       const completeHandler = e => {
        if(e.detail.whoId === this.event.who){
            document.removeEventListener("PersonWalkingComplete", completeHandler);
            resolve();
        }

       }
       document.addEventListener("PersonWalkingComplete",completeHandler)

    }

    interactionBox(resolve) {

        if(this.event.faceHero){
            const obj = this.map.gameObjects[this.event.faceHero];
            obj.direction = utils.oppositeDirection(this.map.gameObjects["hero"].direction);
        }
        
        const interactionBox = new InteractionBox({
            text: this.event.text,
            id: this.event.id,
            inventoryObject: this.event.inventoryObject,
            onComplete: () => resolve()
        })
        interactionBox.init( document.querySelector(".game-container"))
    }
    textMessage(resolve) {

        if(this.event.faceHero){
            const obj = this.map.gameObjects[this.event.faceHero];
            obj.direction = utils.oppositeDirection(this.map.gameObjects["hero"].direction);
        }
        
        const message = new TextMessage({
            text: this.event.text,
            onComplete: () => resolve()
        })
        message.init( document.querySelector(".game-container"))
    }

    actionBox(resolve) {
        const box = new ActionBox({
            text: this.event.text,
            onComplete: () => resolve()
        })
        box.init( document.querySelector(".game-container"))
    }
    caixaCantante(resolve) {
        const caixabox = new CaixaCantante({
            onComplete: () => resolve()
        })
        caixabox.init( document.querySelector(".game-container"))
    }
    metronomo(resolve) {
        const percussao = new Metronomo({
            onComplete: () => resolve()
        })
        percussao.init( document.querySelector(".game-container"))
    }
    hihat(resolve) {
        const percussao = new Hihat({
            onComplete: () => resolve()
        })
        percussao.init( document.querySelector(".game-container"))
    }
    kick(resolve) {
        const percussao = new Kick({
            onComplete: () => resolve()
        })
        percussao.init( document.querySelector(".game-container"))
    }
    clap(resolve) {
        const percussao = new Clap({
            onComplete: () => resolve()
        })
        percussao.init( document.querySelector(".game-container"))
    }
    flor(resolve) {
        const violao = new Flor({
            onComplete: () => resolve()
        })
        violao.init( document.querySelector(".game-container"))
    }
    pescaria(resolve) {

        let hasWorm = false;
        let hasVara = false;

        if(inv.length > 0) {
        inv.forEach((object) => {
            if (object.id == 'vara') {
                hasWorm = true;
                return
            }
            if (object.id == 'isca') {
                hasVara = true;
                return
            }
        })
        
        if (hasWorm && hasVara) {
        const pescar = new Pescaria({
            onComplete: () => resolve()
        });

            pescar.init(document.querySelector(".game-container"));
            }
            return
        }
        const pescar = new TextMessage({
            text: 'sem isca ou vara',
            onComplete: () => resolve()
        })
        pescar.init(document.querySelector(".game-container"))
        };
    bolsa(resolve) {
        const invper = new InventarioPersonagem({
            onComplete: () => resolve()
        })
        invper.init( document.querySelector(".game-container"))
    }
    InventarioPersonagem
    tarot(resolve) {
        const cartas = new Tarot({
            onComplete: () => resolve()
        })
        cartas.init( document.querySelector(".game-container"))
    }

    beatBox(resolve) {
        const beat = new BeatBox({
            onComplete: () => resolve()
        })
        beat.init( document.querySelector(".game-container"))
    }

    changeMap(resolve) {
        this.map.overworld.startMap(window.OverworldMaps[this.event.map]);
        resolve();
    }

    storage(resolve) {
        const storage = new Storage({
            onComplete: () => resolve()
        })
        storage.init( document.querySelector(".game-container"))
    }
    inventory(resolve) {
        const inventory = new Inventory({
            onComplete: () => resolve()
        })
        inventory.init( document.querySelector(".game-container"))
    }
    

    init(){
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}