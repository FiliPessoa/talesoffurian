class Overworld{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
        

    }
    startGameLoop() {
        const step = () => {
            
            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);

            //estabilish the camera person
            const cameraPerson = this.map.gameObjects.hero;

            Object.values(this.map.gameObjects).forEach(object=>{
                object.update({
                    arrow: this.directionInput.direction,
                    map: this.map,
                })

            })

           this.map.drawLowerImage(this.ctx, cameraPerson);

            Object.values(this.map.gameObjects).sort((a,b)=>{
            //    return a.y - b.y;

            }).forEach(object=>{
                object.sprite.draw(this.ctx, cameraPerson);
            })
            this.map.drawUpperImage(this.ctx,cameraPerson);
            
            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    bindActionInput() {
        new KeyPressListener("Enter", () => {
            this.map.checkForActionCutscene()
        })
    }

    bindHeroPositionCheck() {
        document.addEventListener("PersonWalkingComplete", e => {
            if (e.detail.whoId === "hero") {
               this.map.checkForFutstepCutscene()
            }

        })
    }
    startMap(mapConfig) {
        this.map = new OverworldMap(mapConfig);
        this.map.overworld = this;
        this.map.mountObjects();
    }



    init() {

        this.startMap(window.OverworldMaps.World);

        this.bindActionInput(); 
        this.bindHeroPositionCheck();

        this.directionInput = new DirectionInput();
        this.directionInput.init();  
        
         

        this.startGameLoop();


          this.map.startCutscene([
            // {type:"metronomo", text:"Tambor"},
            // {who: "hero",type:"walk",direction:"up"},
            // {who: "hero",type:"walk",direction:"up"},
            // {who: "hero",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"right"},
            // {who: "character2",type:"walk",direction:"right"},
            // {who: "character2",type:"walk",direction:"right"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},  
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"left"},
            // {who: "character2",type:"walk",direction:"left"},
            // {who: "character2",type:"walk",direction:"left"},
            // {who: "character2",type:"stand",direction:"down",time:1800},
            // {who: "character2",type:"walk",direction:"left"},
            // {who: "character2",type:"walk",direction:"left"},
            // {who: "character2",type:"walk",direction:"left"},
            // {who: "character2",type:"walk",direction:"down"},  
            // {who: "character2",type:"walk",direction:"down"},
            // {who: "character2",type:"walk",direction:"down"},
            // {who: "character2",type:"walk",direction:"down"},
            // {who: "character2",type:"walk",direction:"down"},
            // {who: "character2",type:"walk",direction:"down"},
            // {who: "character2",type:"walk",direction:"down"},
            // {who: "character2",type:"walk",direction:"right"},
            // {who: "hero",type:"stand",direction:"up",time:800},
            
          
          
          
            
            // {type:"textMessage", text:" Laurian: in the next full moon there will be a festival in this island"},
            // {type:"textMessage", text:" Laurian: and i don`t have a drummer yet."},
            // {type:"textMessage", text:" Laurian: I was wondering if you'd be interested in playing drums with me for the full moon party."},
            // {who: "hero",type:"stand",direction:"up",time:800},
            // {type:"textMessage", text:" Furian: Wow, that would be awesome! I'd love to play with you."},
            // {who: "hero",type:"stand",direction:"up",time:800},
            // {type:"textMessage", text:" Laurian: Great! I'll show you the rhythms we'll be playing."},
            // {type:"textMessage", text:" Laurian: But first we start with the basics."},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"up"},
            // {who: "character2",type:"walk",direction:"right"},
            // {who: "character2",type:"walk",direction:"right"},
            // {who: "character2",type:"stand",direction:"down",time:800},
            // {type:"textMessage", text:"Laurian: The percussion has 3 main elements. the hi hat, the kick, and the snare."},
            // {type:"textMessage", text:"Laurian: The hi hat has the higher pitch and it counts the tempo of the beat."},
            // {type:"textMessage", text:"Laurian: "},
            // {type:"textMessage", text:"Laurian: In partitures, the note has diferent names acording to the amount of times it plays in one compass loop."},
            // {type:"textMessage", text:"Laurian: If the note is played twice in the compass it is called minima."},
            // {type:"textMessage", text:"Laurian: If the note is played 4 times is called seminima."},
            // {type:"textMessage", text:"Laurian: If the note is played 8 times is called colcheia."},
            // {type:"textMessage", text:"Laurian: and if the note is played 16 times it is called semicolcheia."},
            // {type:"hihat", text:"Tambor"},
            // {type:"textMessage", text:"Laurian: while the hi hat marks the cadence of the music, the kick and the snare accentuate certain positions of the beat"},
            // {type:"textMessage", text:"Laurian: The kick accentuate the lowest tone of the percussion"},
            // {type:"kick", text:"Tambor"},
            // {type:"textMessage", text:"Laurian: and the snare accentuate a higher tone of the percussion"},
            // {type:"clap", text:"Tambor"},
            // {type:"textMessage", text:"Laurian: the way that kick and snare are combined in the beat determinate the rhythm of the song."},
            // {type:"textMessage", text:"Laurian: come here so i can show you the first rhythm"},
            // {who: "character2",type:"walk",direction:"left"},
            // {who: "character2",type:"walk",direction:"left"},
            // {who: "character2",type:"stand",direction:"right",time:800},
            // {who: "hero",type:"walk",direction:"right"},
            // {who: "hero",type:"walk",direction:"right"},
            // {who: "hero",type:"walk",direction:"up"}, 
            // {who: "hero",type:"walk",direction:"up"}, 
            // {who: "hero",type:"walk",direction:"up"}, 
            // {who: "hero",type:"walk",direction:"up"}, 
            // {who: "hero",type:"walk",direction:"left"},
            // {who: "hero",type:"walk",direction:"left"},
            // {who: "hero",type:"stand",direction:"down",time:800},
            // {type:"textMessage", text:"Laurian: in the first song the hi hat will be played in Colcheia"},
            
            
            // {type:"metronomo", text:"Tambor"},
           
             
          
              
           
            
          
       
          ])
          
          
          
  

    }
}