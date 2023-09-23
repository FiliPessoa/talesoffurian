class BasicInfo {
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("ConsoleLog");
        this.element.innerHTML = `
            <div class="username">Furian</div>
            <div class="money"></div>
            <div class="itens"></div>
            <div class="profilepic">
            <img width="100" height="100" id="randomImage" src=" /image/characters/rosto.png" alt=""></div>
        `;
        
        // Calculate the totalAmount as you did before
        
        
        // Update the "money" <div> with the totalAmount
        const moneyDiv = this.element.querySelector(".money");
        moneyDiv.textContent = `$${totalAmount}`;
        
        const staminaDiv = this.element.querySelector(".itens");
        staminaDiv.textContent = `Stamina: ${stamina}`;
    
        console.log(totalAmount)
       
        console.log(`Total Money: ${totalAmount}`);
        
        
//        this.element.innerHTML = imagesHtml;
        
        // var imageButton = document.getElementById("inventaryImage");
        // let hasVara = false;
        // // Add a click event listener to the image
        // imageButton.addEventListener("click", function() {
        //     hasVara=true
        // });
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })
        
    
   
      }
    done() {
        this.element.remove();
        this.onComplete();

    

    }
 

    init(container) {
        this.createElement();
        container.appendChild(this.element)
       
    }
}