class InventoryObject {
    constructor(config) {
        this.id = null;
        this.isMounted = false;
        this.selectionHeight = 256;
        this.selectionWidth = 256;
        this.height = 50;
        this.width = 50;    
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src,
        });
    }

update(state) {}

startBehavior(state,behavior) {}

}