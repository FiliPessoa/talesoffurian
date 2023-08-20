class OverworldMap{
    constructor(config){
        this.overworld = null;
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {};
        this.cutsceneSpaces = config.cutsceneSpaces || {};
        this.lowerImage=new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage=new Image();
        this.upperImage.src = config.upperSrc;

        this.isCutscenePlaying = false;

    }
    drawLowerImage(ctx, cameraPerson){
        ctx.drawImage(this.lowerImage,utils.withGrid(10)-cameraPerson.x,utils.withGrid(12) - cameraPerson.y)
    }
    drawUpperImage(ctx,cameraPerson){
      ctx.drawImage(this.upperImage,utils.withGrid(10)-cameraPerson.x,utils.withGrid(12) - cameraPerson.y)
    }
    isSpaceTaken(currentX, currentY, direction) {
      const {x,y} = utils.nextPosition(currentX,currentY,direction);
      return this.walls[`${x},${y}`] || false;
    }

    mountObjects() {
      Object.keys(this.gameObjects).forEach(key => {
         let object = this.gameObjects[key];
         object.id = key;
         object.mount(this);

    })
    }

    async startCutscene(events){

      this.isCutscenePlaying = true;

      for (let i=0; i<events.length;i++) {
         const eventHandler = new OverWorldEvent({
            event: events[i],
            map: this,

         })
         await eventHandler.init();
      }
     
      this.isCutscenePlaying = false;

      Object.values(this.gameObjects).forEach(object => object.doBehaviorEvent(this))

    }
    async nextCutscene(events){

      this.isCutscenePlaying = true;

      for (let i=0; i<events.length;i++) {
         const eventHandler = new OverWorldEvent({
            event: events[i],
            map: this,

         })
         await eventHandler.init();
      }
     
      this.isCutscenePlaying = false;

      Object.values(this.gameObjects).forEach(object => object.doBehaviorEvent(this))

    }
    

    checkForActionCutscene(){
      const hero = this.gameObjects["hero"];
      const nextCoords = utils.nextPosition(hero.x,hero.y,hero.direction);
      const match = Object.values(this.gameObjects).find(object => {
         return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`
      });
      if (!this.isCutscenePlaying && match && match.talking.length) {
         this.startCutscene(match.talking[0].events)
      }
    }

    checkForFutstepCutscene() {
      const hero = this.gameObjects["hero"];
      const match = this.cutsceneSpaces[ `${hero.x},${hero.y}` ];
      if(!this.isCutscenePlaying && match ) {
         this.startCutscene(match[0].events)
      }
    }

    

    addWall(x,y) {
      this.walls[`${x},${y}`]=true;
    }
    removeWall(x,y) {
      delete this.walls[`${x},${y}`]
    }
    moveWall(wasX,wasY,direction) {
      this.removeWall(wasX,wasY);
      const {x,y} = utils.nextPosition(wasX, wasY, direction);
      this.addWall(x,y);
    }
}

window.OverworldMaps = {
   
    World: {
      
        lowerSrc: "/image/maps/map.png",
        
        upperSrc: "",
        gameObjects:{
           
            
           character2: new Person({
            x:utils.withGrid(80), 
            y:utils.withGrid(53), 
            behaviorLoop:[
               {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
               {type:"walk",direction:"up"},
               {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"walk",direction:"right"},
             {type:"stand",direction:"up",time:1800},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"up"},
             {type:"walk",direction:"right"},
             {type:"stand",direction:"left",time:100},
             {type:"stand",direction:"left",time:90000},
             
              
            ],
            talking: [
               {
                  events: [
                     {type:"textMessage", text:"Entre e Fique a Vontade", faceHero: "character2"},
                  ]
               }
            ]
            
        }),
      //   planta5: new GameObject({
      //    x:utils.withGrid(35),
      //    y:utils.withGrid(48),
      //    selectionHeight:241,
      //    selectionWidth:111,
      //    height:100,
      //    width:40,
      //    src:"/image/objects/planta5.png"
      // }),
        lovetree1: new GameObject({
         x:1353-utils.withGrid(64),
         y:1230+utils.withGrid(-26),
         selectionHeight:280,
selectionWidth:300,
height:60,
width:70,
         src:"/image/objects/lovetree.png"
      }),
      winetree1: new GameObject({
         x:utils.withGrid(109), 
         y:utils.withGrid(46),    
         selectionHeight:280,
selectionWidth:320,
height:60,
width:70,
         src:"/image/objects/winetree.png"
      }),
      wisetree: new GameObject({
         x:utils.withGrid(37), 
                y:utils.withGrid(76),  
         selectionHeight:280,
selectionWidth:320,
height:60,
width:70,
         src:"/image/objects/wisetree.png"
      }),
      spirittree1: new GameObject({
         x:utils.withGrid(48), 
         y:utils.withGrid(91)+2,   
         selectionHeight:280,
selectionWidth:300,
height:120,
width:120,
         src:"/image/objects/spiritree.png"
      }),
      herotree1: new GameObject({
         x:utils.withGrid(15), 
         y:utils.withGrid(80),   
         selectionHeight:280,
selectionWidth:300,
height:160,
width:160,
         src:"/image/objects/herotree.png"
      }),
      strongtree1: new GameObject({
         x:utils.withGrid(66), 
         y:utils.withGrid(27),    
         selectionHeight:280,
selectionWidth:300,
height:160,
width:170,
         src:"/image/objects/strongtree.png"
      }),
                guitar: new GameObject({
                  x:utils.withGrid(90)+6,
                  y:utils.withGrid(56)+2,
                selectionHeight:68,
                selectionWidth:232,
                height:12,
                width:38,
                src:"/image/instrument/violao2.png"
             }),
             guitar2: new GameObject({
               x:utils.withGrid(86)+6,
               y:utils.withGrid(56)+2,
             selectionHeight:68,
             selectionWidth:232,
             height:12,
             width:38,
             src:"/image/instrument/guitar1.png"
          }),
          guitar3: new GameObject({
            x:utils.withGrid(82)+6,
            y:utils.withGrid(56)+2,
          selectionHeight:68,
          selectionWidth:232,
          height:12,
          width:38,
          src:"/image/instrument/guitar2.png"
       }),
       guitar4: new GameObject({
         x:utils.withGrid(78)+6,
         y:utils.withGrid(56)+2,
       selectionHeight:68,
       selectionWidth:232,
       height:12,
       width:38,
       src:"/image/instrument/guitar3.png"
    }),
    tambor: new GameObject({
      x:utils.withGrid(80)+6,
      y:utils.withGrid(51)+2,
      selectionHeight:152,
      selectionWidth:185,
      height:25,
      width:30,
      src:"/image/instrument/tambor.png"
   }),
   bateria: new GameObject({
      x:utils.withGrid(88)+8,
      y:utils.withGrid(50)+6,
      selectionHeight:152,
      selectionWidth:185,
      height:40,
      width:55,
      src:"/image/instrument/drums.png"
   }),
    loja1: new GameObject({
      x:utils.withGrid(78)-1,
      y:utils.withGrid(59)+10,
    selectionHeight:205,
    selectionWidth:235,
    height:40,
    width:51,
    src:"/image/instrument/mesa2.png"
 }),
 loja2: new GameObject({
   x:utils.withGrid(82)-1,
   y:utils.withGrid(59)+10,
 selectionHeight:205,
 selectionWidth:235,
 height:40,
 width:51,
 src:"/image/instrument/mesa.png"
}),
loja3: new GameObject({
   x:utils.withGrid(86)-1,
   y:utils.withGrid(59)+10,
 selectionHeight:205,
 selectionWidth:235,
 height:40,
 width:51,
 src:"/image/instrument/mesa3.png"
}),
loja4: new GameObject({
   x:utils.withGrid(90)-1,
   y:utils.withGrid(59)+10,
 selectionHeight:205,
 selectionWidth:235,
 height:40,
 width:51,
 src:"/image/instrument/mesa4.png"
}),

            passaro: new GameObject({
               x:utils.withGrid(104),
                y:utils.withGrid(45),
               selectionHeight:146,
               selectionWidth:161,
               height:10,
               width:12,
               src:"/image/objects/passaro.png"
            }),
         
            hero: new Person({
               isPlayerControlled: true,   
                x:utils.withGrid(80), 
                y:utils.withGrid(59),                
           }),
             barco: new GameObject({
                x:1353-utils.withGrid(23),
                y:1220+utils.withGrid(-23),
                selectionHeight:36,
                selectionWidth:53,
                height:60,
                width:100,
                src:"/image/objects/barco.png"
             }),
           
            lovetree: new GameObject({
               x:utils.withGrid(50),
               y:utils.withGrid(50),
               selectionHeight:512,
               selectionWidth:512,
               height:60,
               width:100,
               src:"/image/tree/lovetree.png"
            }),
            
            fogueira: new GameObject({
               x:1360-utils.withGrid(34),
               y:1220+utils.withGrid(-10),
               selectionHeight:280,
      selectionWidth:219,
      height:60,
      width:40,
               src:"/image/objects/fogueira.png"
            }),
            fogueira2: new GameObject({
               x:1353-utils.withGrid(45),
               y:1230+utils.withGrid(46),
               selectionHeight:280,
      selectionWidth:219,
      height:60,
      width:40,
               src:"/image/objects/fogueira.png"
            }),
             vara: new GameObject({
                x:utils.withGrid(35),
                y:utils.withGrid(60),
                selectionHeight:183,
                selectionWidth:131,
                height:50,
                width:30,
                src:"/image/objects/vara.png"
             }),
       
       },
       cutsceneSpaces:{
         // [utils.asGridCoord(14,25)]
          [utils.asGridCoord(85,76)] : [
            
             {
                events:[
                   {type:"pescaria", text:"Pescar"},
 
                ]
             }
          ],
          [utils.asGridCoord(85,77)] : [
            
            {
               events:[
                  {type:"pescaria", text:"Pescar"},

               ]
            }
         ],
         [utils.asGridCoord(50,50)] : [
            
            {
               events:[
                  {type:"pescaria", text:"Pescar"},

               ]
            }
         ],
         [utils.asGridCoord(51,50)] : [
            
            {
               events:[
                  {type:"pescaria", text:"Pescar"},

               ]
            }
         ],
         [utils.asGridCoord(111,96)] : [
            
            {
               events:[
                  {type:"changeMap", map:"Lake"},


               ]
            }
         ],
         [utils.asGridCoord(50,57)] : [
            
            {
               events:[
                  {type:"pescaria", text:"Pescar"},

               ]
            }
         ], 
          
        
         [utils.asGridCoord(51,57)] : [
            
            {
               events:[
                  {type:"pescaria", text:"Pescar"},

               ]
            }
         ],
         [utils.asGridCoord(20,13)] : [
            
            {
               events:[
                  {type:"tesouro", text:"Tesouro"},

               ]
            }
         ], 
         [utils.asGridCoord(80,59)] : [
            
            {
               events:[
                  {type:"loja1", text:"Tesouro"},

               ]
            }
         ], 
         [utils.asGridCoord(79,59)] : [
            
            {
               events:[
                  {type:"loja1", text:"Tesouro"},

               ]
            }
         ], 
         [utils.asGridCoord(78,59)] : [
            
            {
               events:[
                  {type:"loja1", text:"Tesouro"},

               ]
            }
         ], 
         [utils.asGridCoord(110,46)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Fruto3",
                  id:"fruto bendito",
                  inventoryObject: new Isca({
                     id: "fruto bendito",
                     src: '/image/plant/fruto3.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(21,51)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Fruta",
                  id:"fruto proibido",
                  inventoryObject: new Isca({
                     id: "fruto proibido",
                     src: '/image/plant/fruto.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(22,51)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Fruta",
                  id:"fruto proibido",
                  inventoryObject: new Isca({
                     id: "fruto proibido",
                     src: '/image/plant/fruto.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(23,51)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Fruta",
                  id:"fruto proibido",
                  inventoryObject: new Isca({
                     id: "fruto proibido",
                     src: '/image/plant/fruto.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(24,51)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Fruta",
                  id:"fruto proibido",
                  inventoryObject: new Isca({
                     id: "fruto proibido",
                     src: '/image/plant/fruto.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(38,76)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Folha",
                  id:"folha",
                  inventoryObject: new Isca({
                     id: "fruto proibido",
                     src: '/image/plant/folha.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(39,76)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Folha",
                  id:"folha",
                  inventoryObject: new Isca({
                     id: "fruto proibido",
                     src: '/image/plant/folha.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(40,76)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Folha",
                  id:"folha",
                  inventoryObject: new Isca({
                     id: "fruto proibido",
                     src: '/image/plant/folha.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(34,60)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Vara de Pescar",
                  id:"vara",
                  inventoryObject: new Isca({
                     id: "vara",
                     src: '/image/tools/vara.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(36,60)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Vara de Pescar",
                  id:"vara",
                  inventoryObject: new Isca({
                     id: "vara",
                     src: '/image/tools/vara.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(33,51)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(34,51)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(35,51)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(36,51)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(37,51)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(38,51)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(33,50)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(34,50)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(35,50)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(36,50)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(37,50)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(38,50)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(33,49)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(34,49)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(35,49)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(36,49)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(37,49)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(38,49)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(33,48)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(34,48)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(35,48)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(36,48)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(37,48)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(38,48)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Minhoca",
                  id:"minhoca",
                  inventoryObject: new Isca({
                     id: "minhoca",
                     src: '/image/peixe/worm.png',  
                 })},

               ]
            }
         ], 
         [utils.asGridCoord(71,33)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Casca",
                  id:"casca",
                  inventoryObject: new Isca({
                     id: "casca",
                     src: '/image/plant/casca.png',  
                 })},

               ]
            }
         ],  
         [utils.asGridCoord(72,33)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Casca",
                  id:"casca",
                  inventoryObject: new Isca({
                     id: "casca",
                     src: '/image/plant/casca.png',  
                 })},

               ]
            }
         ],  
         [utils.asGridCoord(51,95)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Flor",
                  id:"flor",
                  inventoryObject: new Isca({
                     id: "flor",
                     src: '/image/plant/flor.png',  
                 })},

               ]
            }
         ],  
         [utils.asGridCoord(52,95)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Flor",
                  id:"flor",
                  inventoryObject: new Isca({
                     id: "flor",
                     src: '/image/plant/flor.png',  
                 })},

               ]
            }
         ],  
         [utils.asGridCoord(19,86)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Fruta 2",
                  id:"fruta2",
                  inventoryObject: new Isca({
                     id: "fruta2",
                     src: '/image/plant/fruto2.png',  
                 })},

               ]
            }
         ],  
         [utils.asGridCoord(20,86)] : [
            
            {
               events:[
                  {
                  type:"interactionBox", 
                  text:"Fruta 2",
                  id:"fruta2",
                  inventoryObject: new Isca({
                     id: "fruta2",
                     src: '/image/plant/fruto2.png',  
                 })},

               ]
            }
         ],  
          [utils.asGridCoord(29,46)] : [
             {
                events:[
                   {type:"changeMap", map:"Galpao"},
                  
   
                ]
             }
          ],
        
          [utils.asGridCoord(95,37)] : [
             {
                events:[
                   {type:"changeMap", map:"Church"},
                  
 
                ]
             }
          ],
          [utils.asGridCoord(29,55)] : [
            {
               events:[
                  {type:"inventory", map:"Church"},
                 

               ]
            }
         ]
          
          
 
         },
       walls: {
         [utils.asGridCoord(49,35)] : true,
         [utils.asGridCoord(49,36)] : true,
         [utils.asGridCoord(49,37)] : true,
         [utils.asGridCoord(50,38)] : true,
         [utils.asGridCoord(50,39)] : true,
         [utils.asGridCoord(50,40)] : true,
         [utils.asGridCoord(50,41)] : true,
         [utils.asGridCoord(49,42)] : true,
         [utils.asGridCoord(48,43)] : true,
         [utils.asGridCoord(47,44)] : true,
         [utils.asGridCoord(46,45)] : true,
         [utils.asGridCoord(45,46)] : true,
         [utils.asGridCoord(44,47)] : true,
         [utils.asGridCoord(44,48)] : true,
         [utils.asGridCoord(44,49)] : true,
         [utils.asGridCoord(44,50)] : true,
         [utils.asGridCoord(44,51)] : true,
         [utils.asGridCoord(44,52)] : true,
         [utils.asGridCoord(45,52)] : true,
         [utils.asGridCoord(46,52)] : true,
         [utils.asGridCoord(47,52)] : true,
         [utils.asGridCoord(48,52)] : true,
         [utils.asGridCoord(49,52)] : true,
         [utils.asGridCoord(49,51)] : true,
         [utils.asGridCoord(49,50)] : true,
         [utils.asGridCoord(50,49)] : true,
         [utils.asGridCoord(57,49)] : true,
         [utils.asGridCoord(58,50)] : true,
         [utils.asGridCoord(58,51)] : true,
         [utils.asGridCoord(58,52)] : true,
         [utils.asGridCoord(58,53)] : true,
         [utils.asGridCoord(58,54)] : true,
         [utils.asGridCoord(58,55)] : true,
         [utils.asGridCoord(58,56)] : true,
         [utils.asGridCoord(58,57)] : true,
         [utils.asGridCoord(57,58)] : true,
         [utils.asGridCoord(50,58)] : true,
         [utils.asGridCoord(49,57)] : true,
         [utils.asGridCoord(49,56)] : true,
         [utils.asGridCoord(49,55)] : true,
         [utils.asGridCoord(48,55)] : true,
         [utils.asGridCoord(47,55)] : true,
         [utils.asGridCoord(46,55)] : true,
         [utils.asGridCoord(45,55)] : true,
         [utils.asGridCoord(44,55)] : true,
         [utils.asGridCoord(44,56)] : true,
         [utils.asGridCoord(44,57)] : true,
         [utils.asGridCoord(44,58)] : true,
         [utils.asGridCoord(45,59)] : true,
         [utils.asGridCoord(46,60)] : true,
         [utils.asGridCoord(47,61)] : true,
         [utils.asGridCoord(48,61)] : true,
         [utils.asGridCoord(49,61)] : true,
         [utils.asGridCoord(50,61)] : true,
         [utils.asGridCoord(51,61)] : true,
         [utils.asGridCoord(52,61)] : true,
         [utils.asGridCoord(53,61)] : true,
         [utils.asGridCoord(54,62)] : true,
         [utils.asGridCoord(55,63)] : true,
         [utils.asGridCoord(56,64)] : true,
         [utils.asGridCoord(56,65)] : true,
         [utils.asGridCoord(56,66)] : true,
         [utils.asGridCoord(56,67)] : true,
         [utils.asGridCoord(56,68)] : true,
         [utils.asGridCoord(56,69)] : true,
         [utils.asGridCoord(56,70)] : true,
         [utils.asGridCoord(56,71)] : true,
         [utils.asGridCoord(56,72)] : true,
         [utils.asGridCoord(56,73)] : true,
         [utils.asGridCoord(56,74)] : true,
         [utils.asGridCoord(55,75)] : true,
         [utils.asGridCoord(55,76)] : true,
         [utils.asGridCoord(54,77)] : true,
         [utils.asGridCoord(54,78)] : true,
         [utils.asGridCoord(53,79)] : true,
         [utils.asGridCoord(52,80)] : true,
         [utils.asGridCoord(52,81)] : true,
         [utils.asGridCoord(51,80)] : true,
         
      }
    },
    

    Church: {
        lowerSrc:"/image/maps/church1.png",
        upperSrc: "",
        
        gameObjects:{
         caixote1: new GameObject({
            x:216-50+utils.withGrid(-6),
            y:142-12,
            selectionHeight:241,
            selectionWidth:113,
            height:50,
            width:21,
            src:"/image/objects/caixote.png"
         }),
         planta1: new GameObject({
            x:216-50+utils.withGrid(-6),
            y:142-12,
            selectionHeight:241,
            selectionWidth:111,
            height:50,
            width:21,
            src:"/image/objects/planta1.png"
         }),
         caixote2: new GameObject({
            x:216-50+utils.withGrid(-4),
            y:142-12,
            selectionHeight:241,
            selectionWidth:113,
            height:50,
            width:21,
            src:"/image/objects/caixote.png"
         }),
         planta2: new GameObject({
            x:216-50+utils.withGrid(-4),
            y:142-12,
            selectionHeight:241,
            selectionWidth:111,
            height:50,
            width:21,
            src:"/image/objects/planta2.png"
         }),
         caixote3: new GameObject({
            x:216+62-utils.withGrid(8),
            y:142-12,
            selectionHeight:241,
            selectionWidth:113,
            height:50,
            width:21,
            src:"/image/objects/caixote.png"
         }),
         planta3: new GameObject({
            x:216+62-utils.withGrid(8),
            y:142-12,
            selectionHeight:241,
            selectionWidth:111,
            height:50,
            width:21,
            src:"/image/objects/planta3.png"
         }),
         caixote4: new GameObject({
           x:216+62+utils.withGrid(-6),
           y:142-12,
           selectionHeight:241,
           selectionWidth:113,
           height:50,
           width:21,
           src:"/image/objects/caixote.png"
        }),
        planta4: new GameObject({
           x:216+62+utils.withGrid(-6),
           y:142-12,
           selectionHeight:241,
           selectionWidth:111,
           height:50,
           width:21,
           src:"/image/objects/planta4.png"
        }),
        
        violao: new GameObject({
         x:243-utils.withGrid(7),
         y:207-utils.withGrid(0),
         selectionHeight:232,
         selectionWidth:67,
         height:38,
         width:12,
         src:"/image/instrument/violao.png"
      }),
      
        hero: new Person({
            isPlayerControlled: true,
            x:utils.withGrid(8),
            y:utils.withGrid(25),
        }),
        character2: new Person({
         x:utils.withGrid(8), 
         y:utils.withGrid(25), 
         behaviorLoop:[
            
          
           
         ],
         talking: [
            {
               events: [
                  {type:"textMessage", text:"Entre e Fique a Vontade", faceHero: "character2"},
               ]
            }
         ]
         
     }),
         
         tambor: new GameObject({
            x:185+utils.withGrid(-4),
            y:217+utils.withGrid(6),
            selectionHeight:152,
            selectionWidth:185,
            height:25,
            width:30,
            src:"/image/instrument/tambor.png"
         }),
         mesa: new GameObject({
           x:192.5-utils.withGrid(6),
           y:267-15,
           selectionHeight:130,
           selectionWidth:219,
           height:30,
           width:81,
           src:"/image/objects/mesa.png"
        }),
        
         bud: new GameObject({
            x:212-utils.withGrid(6),
            y:250,
            selectionHeight:163,
            selectionWidth:112,
            height:10,
            width:5,
            src:"/image/objects/bud.png"
         }),
         cachimbo: new GameObject({
            x:204-utils.withGrid(6),
            y:261,
            selectionHeight:38,
            selectionWidth:132,
            height:3,
            width:9,
            src:"/image/objects/cachimbo.png"
         }),
         tarot: new GameObject({
           x:220-utils.withGrid(6),
           y:256,
           selectionHeight:186,
           selectionWidth:198,
           height:7,
           width:6,
           src:"/image/objects/tarot.png"
        }),
         moeda: new GameObject({
            x:231-utils.withGrid(6),
            y:260,
            selectionHeight:100,
            selectionWidth:100,
            height:10,
            width:10,
            src:"/image/objects/moeda.png"
         }),
         moeda2: new GameObject({
           x:228-utils.withGrid(6),
           y:255,
           selectionHeight:100,
           selectionWidth:100,
           height:10,
           width:10,
           src:"/image/objects/moeda.png"
        }),
        moeda3: new GameObject({
           x:234-utils.withGrid(6),
           y:255,
           selectionHeight:100,
           selectionWidth:100,
           height:10,
           width:10,
           src:"/image/objects/moeda.png"
        }),
         caixa: new GameObject({
            x:240-utils.withGrid(6),
            y:255,
            selectionHeight:50,
            selectionWidth:137,
            height:7,
            width:20,
            src:"/image/objects/caixa.png"
         }),             
        },
        cutsceneSpaces:{
        // [utils.asGridCoord(14,25)]
         [utils.asGridCoord(9,14)] : [
            {
               events:[
                  {type:"caixaCantante", text:"Caixa Cantante"},

               ]
            }
         ],
         [utils.asGridCoord(8,12)] : [
            {
               events:[
                  {type:"flor", text:"Violao"},

               ]
            }
         ],
         [utils.asGridCoord(8,14)] : [
            {
               events:[
                  {type:"tarot", text:"Oraculo"},

               ]
            }
         ],
         [utils.asGridCoord(7,14)] : [
            {
               events:[
                  {type:"textMessage", text:"Beck"},

               ]
            }
         ],
         [utils.asGridCoord(8,18)] : [
            {
               events:[
                  {type:"metronomo", text:"Tambor"},

               ]
            }
         ],
         [utils.asGridCoord(8,22)] : [
            {
               events:[
                  {type:"textMessage", text:"Meditar"},

               ]
            }
         ],
         [utils.asGridCoord(8,21)] : [
            {
               events:[
                  {type:"changeMap", map:"Galpao"},

               ]
            }
         ],
         [utils.asGridCoord(8,25)] : [
            {
               events:[
                  {type:"changeMap", map:"World"},

               ]
            }
         ]
         
         

        },
        walls: {
         [utils.asGridCoord(3,4)] : true,
         [utils.asGridCoord(4,4)] : true,
         [utils.asGridCoord(5,4)] : true,
         [utils.asGridCoord(6,4)] : true,
         [utils.asGridCoord(7,4)] : true,
         [utils.asGridCoord(8,4)] : true,
         [utils.asGridCoord(9,4)] : true,
         [utils.asGridCoord(10,4)] : true,
         [utils.asGridCoord(11,4)] : true,
         [utils.asGridCoord(12,4)] : true,
         [utils.asGridCoord(13,4)] : true,

         [utils.asGridCoord(3,4)] : true,
         [utils.asGridCoord(3,5)] : true,
         [utils.asGridCoord(3,6)] : true,
         [utils.asGridCoord(3,7)] : true,
         [utils.asGridCoord(3,8)] : true,
         [utils.asGridCoord(3,9)] : true,
         [utils.asGridCoord(3,10)] : true,
         [utils.asGridCoord(3,11)] : true,
         [utils.asGridCoord(3,12)] : true,
         [utils.asGridCoord(3,13)] : true,
         [utils.asGridCoord(3,14)] : true,
         [utils.asGridCoord(3,15)] : true,
         [utils.asGridCoord(3,16)] : true,
         [utils.asGridCoord(3,17)] : true,
         [utils.asGridCoord(3,18)] : true,
         [utils.asGridCoord(3,19)] : true,
         [utils.asGridCoord(3,20)] : true,
         [utils.asGridCoord(3,21)] : true,
         [utils.asGridCoord(3,22)] : true,
         [utils.asGridCoord(3,23)] : true,
         [utils.asGridCoord(3,24)] : true,
         [utils.asGridCoord(3,25)] : true,

         [utils.asGridCoord(13,4)] : true,
         [utils.asGridCoord(13,5)] : true,
         [utils.asGridCoord(13,6)] : true,
         [utils.asGridCoord(13,7)] : true,
         [utils.asGridCoord(13,8)] : true,
         [utils.asGridCoord(13,9)] : true,
         [utils.asGridCoord(13,10)] : true,
         [utils.asGridCoord(13,11)] : true,
         [utils.asGridCoord(13,12)] : true,
         [utils.asGridCoord(13,13)] : true,
         [utils.asGridCoord(13,14)] : true,
         [utils.asGridCoord(13,15)] : true,
         [utils.asGridCoord(13,16)] : true,
         [utils.asGridCoord(13,17)] : true,
         [utils.asGridCoord(13,18)] : true,
         [utils.asGridCoord(13,19)] : true,
         [utils.asGridCoord(13,20)] : true,
         [utils.asGridCoord(13,21)] : true,
         [utils.asGridCoord(13,22)] : true,
         [utils.asGridCoord(13,23)] : true,
         [utils.asGridCoord(13,24)] : true,
         [utils.asGridCoord(13,25)] : true,

         
         [utils.asGridCoord(4,9)] : true,
         [utils.asGridCoord(5,9)] : true,
         [utils.asGridCoord(6,9)] : true,
         [utils.asGridCoord(10,9)] : true,
         [utils.asGridCoord(11,9)] : true,
         [utils.asGridCoord(12,9)] : true,

         
         [utils.asGridCoord(4,25)] : true,
         [utils.asGridCoord(5,25)] : true,
         [utils.asGridCoord(6,25)] : true,
         [utils.asGridCoord(7,25)] : true,
         [utils.asGridCoord(8,26)] : true,
         [utils.asGridCoord(9,25)] : true,
         [utils.asGridCoord(10,25)] : true,
         [utils.asGridCoord(11,25)] : true,

         [utils.asGridCoord(6,15)] : true,
         [utils.asGridCoord(7,15)] : true,
         [utils.asGridCoord(8,15)] : true,
         [utils.asGridCoord(9,15)] : true,
         [utils.asGridCoord(10,15)] : true,
         [utils.asGridCoord(6,16)] : true,
         [utils.asGridCoord(7,16)] : true,
         [utils.asGridCoord(8,16)] : true,
         [utils.asGridCoord(9,16)] : true,
         [utils.asGridCoord(10,16)] : true,
      },
    },
    Galpao: {
      
      lowerSrc: "/image/maps/galpao.png",
      
      upperSrc: "",
      gameObjects:{
         
     guitar: new GameObject({
      x:260+utils.withGrid(-4),
      y:215+utils.withGrid(7),
    selectionHeight:68,
    selectionWidth:232,
    height:12,
    width:38,
    src:"/image/instrument/violao2.png"
 }),
armario1: new GameObject({
      x:210+utils.withGrid(-2),
      y:283-15+utils.withGrid(7),
      
      selectionHeight:280,
      selectionWidth:219,
      height:60,
      width:60,
      src:"/image/objects/estante.png"
   }),
   
   armario12: new GameObject({
      x:200+utils.withGrid(-10),
      y:283-15+utils.withGrid(7),
      
      selectionHeight:280,
      selectionWidth:219,
      height:60,
      width:60,
      src:"/image/objects/gaveta.png"
   }),  
   mesinha: new GameObject({
      x:193+utils.withGrid(-9),
      y:290-15+utils.withGrid(-2),
      
      selectionHeight:280,
      selectionWidth:219,
      height:33,
      width:33,
      src:"/image/objects/mesinha.png"
   }),
   caixa: new GameObject({
      x:248+utils.withGrid(-12),
      y:258+utils.withGrid(-1),
      selectionHeight:50,
      selectionWidth:137,
      height:7,
      width:20,
      src:"/image/objects/caixa.png"
   }),
  
   escrivainha1: new GameObject({
      x:181+utils.withGrid(-12),
      y:279-15+utils.withGrid(-9),
      selectionHeight:130,
      selectionWidth:219,
      height:35,
      width:301,
      src:"/image/objects/bancada.png"
   }),
   bancada1: new GameObject({
      x:182+utils.withGrid(-10),
      y:295-15+utils.withGrid(-9),
      selectionHeight:170,
      selectionWidth:219,
      height:70,
      width:82,
      src:"/image/objects/bancada1.png"
   }),
   bancada2: new GameObject({
      x:177+utils.withGrid(2),
      y:295-15+utils.withGrid(-9),
      selectionHeight:170,
      selectionWidth:219,
      height:70,
      width:82,
      src:"/image/objects/bancada1.png"
   }),
   mesa: new GameObject({
      x:200-utils.withGrid(0),
      y:271-utils.withGrid(2),
      selectionHeight:130,
      selectionWidth:219,
      height:28,
      width:25,
      src:"/image/objects/mesa.png"
   }),
   piano: new GameObject({
      x:255+utils.withGrid(-4),
      y:255+utils.withGrid(-1),
      selectionHeight:50,
      selectionWidth:137,
      height:14,
      width:40,
      src:"/image/objects/piano.png"
   }),
   // caixote4: new GameObject({
   //    x:216+62+utils.withGrid(-6),
   //    y:142-12,
   //    selectionHeight:241,
   //    selectionWidth:113,
   //    height:50,
   //    width:21,
   //    src:"/image/objects/caixote.png"
   // }),
   // planta4: new GameObject({
   //    x:216+62+utils.withGrid(-6),
   //    y:142-12,
   //    selectionHeight:241,
   //    selectionWidth:111,
   //    height:50,
   //    width:21,
   //    src:"/image/objects/planta4.png"
   // }),
   hero: new Person({
      isPlayerControlled: true,
      x:utils.withGrid(8),
      y:utils.withGrid(25),
  }),   
  tambor: new GameObject({
   x:183+utils.withGrid(-9),
   y:200+utils.withGrid(7),
   selectionHeight:152,
   selectionWidth:185,
   height:40,
   width:55,
   src:"/image/instrument/drums.png"
}),
bottle: new GameObject({
   x:utils.withGrid(4),
   y:utils.withGrid(24),
   selectionHeight:163,
   selectionWidth:112,
   height:20,
   width:10,
   src:"/image/objects/bottle.png"
}),

tarot: new GameObject({
  x:utils.withGrid(6),
  y:utils.withGrid(8),
  selectionHeight:512,
  selectionWidth:512,
  height:50,
  width:50,
  src:"/image/peixe/peixe1.png"
}),

},
     cutsceneSpaces:{
      
       
  
  
       [utils.asGridCoord(8,25)] : [
          {
             events:[
                {type:"changeMap", map:"World"},
               

             ]
          }
       ],
       [utils.asGridCoord(12,24)] : [
         {
            events:[
               {type:"storage", text:"inventario"},

            ]
         }
      ],
      [utils.asGridCoord(13,24)] : [
         {
            events:[
               {type:"inventory", text:"inventario"},

            ]
         }
      ],
      [utils.asGridCoord(4,19)] : [
         {
            events:[
               {type:"metronomo", text:"Tambor"},

            ]
         }
      ],
      [utils.asGridCoord(4,14)] : [
         {
            events:[
               {type:"caixaCantante", text:"Tambor"},

            ]
         }
      ],
      [utils.asGridCoord(12,14)] : [
         {
            events:[
               {type:"flor", text:"Tambor"},

            ]
         }
      ],
   
      [utils.asGridCoord(5,24)] : [
            
         {
            events:[
               {type:"textMessage", text:"Você encontra uma garrafa de vidro selada com um pergaminho dentro"},
               {type:"textMessage", text:"O pergaminho diz:"},
               //{type:"textMessage", text:"no pergaminho está escrito:"},
               {type:"textMessage", text:"Vá Para o Norte! Quando chegar onde o mar e o rio se encontram, encontrará um tesouro"},
               //{type:"walk",who:"hero",direction:"left"},
               //{type:"changeMap", map:"World"},
               {
                  type:"interactionBox", 
                  text:"bottle",
                  id:"bottle",
                  inventoryObject: new Isca({
                     id: "bottle",
                     src: '/image/tools/bottlePerg.png',  
                 },
                 
                 )},
               {
                  type:"interactionBox", 
                  text:"bottle",
                  id:"bottle",
                  inventoryObject: new Isca({
                     id: "bottle",
                     src: '/image/tools/bottle.png',  
                 },
                 
                 )},
                 
                 {
                  type:"interactionBox", 
                  text:"pergaminho",
                  id:"pergaminho",
                  inventoryObject: new Isca({
                     id: "pergaminho",
                     src: '/image/peixe/pergaminho.png',  
                 },
                 )},

            ]
         }
      ], 
      [utils.asGridCoord(8,7)] : [
         {
            events:[
               {type:"changeMap", map:"Church"},
              

            ]
         }
      ],

      },
  },
  Lake: {
      
   lowerSrc: "/image/maps/lake.png",
   
   upperSrc: "",
   gameObjects:{
      peixe1: new GameObject({
         x:utils.withGrid(8),
         y:utils.withGrid(10),
         
         selectionHeight:280,
         selectionWidth:219,
         height:60,
         width:50,
         src:"/image/objects/peixe1.png"
      }),
      peixe1v: new GameObject({
         x:utils.withGrid(15),
         y:utils.withGrid(15),
         
         selectionHeight:280,
         selectionWidth:219,
         height:60,
         width:50,
         src:"/image/objects/peixe1v.png"
      }),
      peixe2: new GameObject({
         x:utils.withGrid(17),
         y:utils.withGrid(12),
         
         selectionHeight:280,
         selectionWidth:219,
         height:70,
         width:50,
         src:"/image/objects/peixe5.png"
      }),
      peixe2v: new GameObject({
         x:utils.withGrid(2),
         y:utils.withGrid(12),
         
         selectionHeight:280,
         selectionWidth:219,
         height:70,
         width:50,
         src:"/image/objects/peixe5v.png"
      }),
      peixe3: new GameObject({
         x:utils.withGrid(-5),
         y:utils.withGrid(12),
         
         selectionHeight:280,
         selectionWidth:219,
         height:70,
         width:60,
         src:"/image/objects/peixe10.png"
      }),
      peixe3v: new GameObject({
         x:utils.withGrid(18),
         y:utils.withGrid(15),
         
         selectionHeight:280,
         selectionWidth:219,
         height:70,
         width:60,
         src:"/image/objects/peixe10v.png"
      }),
      peixe4: new GameObject({
         x:utils.withGrid(5),
         y:utils.withGrid(21),
         
         selectionHeight:280,
         selectionWidth:280,
         height:60,
         width:70,
         src:"/image/objects/peixe25.png"
      }),
      peixe4v: new GameObject({
         x:utils.withGrid(9),
         y:utils.withGrid(19),
         
         selectionHeight:280,
         selectionWidth:280,
         height:60,
         width:70,
         src:"/image/objects/peixe25v.png"
      }),
      peixe5: new GameObject({
         x:utils.withGrid(10),
         y:utils.withGrid(13),
         
         selectionHeight:280,
         selectionWidth:280,
         height:60,
         width:60,
         src:"/image/objects/peixe100.png"
      }),
      peixe5v: new GameObject({
         x:utils.withGrid(3),
         y:utils.withGrid(17),
         
         selectionHeight:280,
         selectionWidth:280,
         height:60,
         width:60,
         src:"/image/objects/peixe100v.png"
      }),
      peixe6v: new GameObject({
         x:utils.withGrid(16),
         y:utils.withGrid(19),
         
         selectionHeight:280,
         selectionWidth:280,
         height:50,
         width:50,
         src:"/image/objects/peixe200v.png"
      }),
      peixe6: new GameObject({
         x:utils.withGrid(-3),
         y:utils.withGrid(17),
         
         selectionHeight:280,
         selectionWidth:280,
         height:50,
         width:50,
         src:"/image/objects/peixe200.png"
      }),
      peixe7: new GameObject({
         x:utils.withGrid(0),
         y:utils.withGrid(15),
         
         selectionHeight:280,
         selectionWidth:280,
         height:60,
         width:60,
         src:"/image/objects/peixe50.png"
      }),
      peixe7v: new GameObject({
         x:utils.withGrid(13),
         y:utils.withGrid(11),
         
         selectionHeight:280,
         selectionWidth:280,
         height:60,
         width:60,
         src:"/image/objects/peixe50v.png"
      }),
      peixe8: new GameObject({
         x:utils.withGrid(-5),
         y:utils.withGrid(20),
         
         selectionHeight:280,
         selectionWidth:400,
         height:60,
         width:95,
         src:"/image/objects/peixe500.png"
      }),
      peixe8v: new GameObject({
         x:utils.withGrid(15),
         y:utils.withGrid(22),
         
         selectionHeight:280,
         selectionWidth:400,
         height:60,
         width:95,
         src:"/image/objects/peixe500v.png"
      }),
      // peixe9: new GameObject({
      //    x:utils.withGrid(-7),
      //    y:utils.withGrid(25)-10,
         
      //    selectionHeight:280,
      //    selectionWidth:400,
      //    height:120,
      //    width:200,
      //    src:"/image/objects/peixe1000.png"
      // }),
      // peixe9v: new GameObject({
      //    x:utils.withGrid(9),
      //    y:utils.withGrid(27)-10,
         
      //    selectionHeight:280,
      //    selectionWidth:400,
      //    height:120,
      //    width:200,
      //    src:"/image/objects/peixe1000v.png"
      // }),
      hero: new Person({
         isPlayerControlled: true,
         x:utils.withGrid(7),
         y:utils.withGrid(15),
     }),   
   },cutsceneSpaces:{  [utils.asGridCoord(7,7)] : [
      {
         events:[
            {type:"changeMap", map:"World"},
           

         ]
         
      }
   ],}},
   
    
}