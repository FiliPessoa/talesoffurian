class Loja5 {
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("fishStore");

        // Create instances of Peixe1 and add them to the loja2 array
    
        let loja4asset = [
            `<img width="50" height="50"id="randomImage" src="/image/instrumentos/caixa.png" alt=""onclick="caixa()">
            <img width="50" height="50"id="randomImage" src="/image/instrumentos/piano.png" alt=""onclick="piano()">
            <img width="50" height="50"id="randomImage" src="/image/instrumentos/pife.png" alt=""onclick="pife()">`
        ];
        // Add more instances as needed

        // Create an array of image elements based on the loja2 array
           let imagesHtml = '';
        if(inv.length >0) {

        for (let item of inv) {
            imagesHtml += `<img width="50" height="50" id="inventaryImage" src="${item.sprite.image.src}" alt="" onclick="sell()">\n`;
        }}

        this.element.innerHTML = imagesHtml;
        this.actionListener = new KeyPressListener("KeyM", () => {
            const totalAmount = inv.reduce((accumulator, inventoryObject) => {
                // Check if the object is an instance of Moeda and has an 'amount' property
                if (inventoryObject instanceof Moeda && typeof inventoryObject.amount === 'number') {
                    return accumulator + inventoryObject.amount;
                }
                // If it's not a Moeda or doesn't have 'amount', return accumulator as-is
                return accumulator;
            }, 0);
            
            console.log(`Total amount: ${totalAmount}`);
        })
        this.actionListener = new KeyPressListener("Enter", () => {
            this.actionListener.unbind();
            this.done();
        });
    }

    done() {
        this.element.remove();
        this.onComplete();
    }

    init(container) {
        this.createElement();
        container.appendChild(this.element);
    }
}
function caixa() {
    inv.push(new Caixa());
    console.log('added item');
    
}
function piano() {
    inv.push(new Piano());
    console.log('added item');
    
}
function pife() {
    inv.push(new Pife());
    console.log('added item');
    
}
function sell() {
    const sellableObjects = ['peixe','peixe1', 'peixe5', 'peixe10', 'peixe25', 'peixe50', 'peixe100', 'peixe200', 'peixe500','mistyguitar','distyguitar','buskyguitar','flor','casca','fruto1','fruto2','fruto3','semente','folha','minhoca','bambu','bud','bong','cachimbo1','cachimbo2','vara','pa','faca','caixa','piano','pife',]; // Define the objects that can be sold
    const indexOfObjectToRemove = inv.findIndex((object) => {
        return sellableObjects.includes(object.id) && !object.amount && object.price;
    });
    
    if (indexOfObjectToRemove !== -1) {
        // Get the price of the removed object
        const price = inv[indexOfObjectToRemove].price;
    
        // Remove the object
        inv.splice(indexOfObjectToRemove, 1);
    
        // Add a Moeda with the amount equal to the price
        const moeda = new Moeda(price);
        inv.push(moeda);
        
        // Log the amount of the Moeda object
        console.log(`Sold object for ${price} Moeda(s). Current Moeda amount: ${moeda.amount}`);
    } else {
        // Object not found or doesn't meet the criteria
        console.log("Object not found in inventory or doesn't meet the criteria.");
    }
}