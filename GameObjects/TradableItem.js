
class TradableItem extends InventoryObject {
    constructor(config) {
        super(config);
        this.name = config.name;
        this.price = config.name;
        this.type = config.type;
    }
}

