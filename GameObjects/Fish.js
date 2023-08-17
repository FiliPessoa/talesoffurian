class Fish extends TradableItem {
    constructor(config) {
        super(config);
        this.isca = new Isca({
            name: config.nameIsca,
            price: config.pricaIsca,
            type: config.rypeIsca,
        });
    }

update(state) {}

startBehavior(state,behavior) {}

}

class TradableItem extends InventoryObject {
    constructor(config) {
        super(config);
        this.name = config.name;
        this.price = config.name;
        this.type = config.type;
    }
}

class Isca extends TradableItem {
    constructor(config) {
        super(config);
    }

update(state) {}

startBehavior(state,behavior) {}

}