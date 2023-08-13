class Sprite {
    constructor(config) {
        
//Set Up the Image
this.image = new Image();
this.image.src = config.src;
this.image.onload = () => {
    this.isLoaded = true;
}
        //Configure Animation & Initial State
        this.animations = config.animations || {
            "idle-down": [ [700,52] ],
            "idle-right": [ [92,366] ],
            "idle-up": [ [1082,366] ],
            "idle-left": [ [93,59] ],
            "walk-down": [[891,52],[700,52],[1082,52],[700,52]],
            "walk-right": [[283,366],[92,366],[472,371],[92,366]],
            "walk-left": [[283,59],[92,59],[472,64],[92,59]],
            "walk-up": [[700,366],[1082,366],[891,366],[1082,366]],
            
        }
        this.currentAnimation = "idle-down"//config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;
        this.animationFrameLimit=config.animationFrameLimit || 8;
        this.animationFrameProgress = this.animationFrameLimit;
        //Reference the game object
        this.gameObject = config.gameObject;
    }

    get frame () {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];

    }

    setAnimation(key) {
       if (this.currentAnimation !== key) {
        this.currentAnimation = key;
        this.currentAnimationFrame = 0;
        this.animationFrameProgress = this.animationFrameLimit;
       } 
    }

    updateAnimationProgress(){
        if(this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;

        }
        //reset the counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;
        if (this.frame === undefined) {
           this.currentAnimationFrame=0; 
        }

    }
    

    draw(ctx, cameraPerson) {
        const x = this.gameObject.x -1+ utils.withGrid(18) - cameraPerson.x;
        const y = this.gameObject.y +8+ utils.withGrid(10) - cameraPerson.y;
        const selectionHeight = this.gameObject.selectionHeight;
        const selectionWidth = this.gameObject.selectionWidth;
        const height = this.gameObject.height;
        const width = this.gameObject.width;
        const left = this.gameObject.left;
        const top = this.gameObject.top;
        
     

        const [framex, framey] = this.frame;
        

        this.isLoaded && ctx.drawImage(this.image,
            framex,framey, 
            selectionWidth, selectionHeight,
            x,y,
            width,height
        )
        this.updateAnimationProgress();

    }
}
