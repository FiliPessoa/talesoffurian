
class HalfMenu{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("ConsoleLog");
        let imagesHtml = '';
        if (inv.length > 0) {
            for (let i = 0; i < inv.length; i++) {
                const item = inv[i];
                imagesHtml += `<img width="50" height="50" id="inventaryImage" src="${item.sprite.image.src}" alt="" onclick="removeObjectByIndex(${i})">\n`;
            }
        }
        
        this.element.innerHTML = imagesHtml;
        
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