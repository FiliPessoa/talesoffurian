
class Inventory{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("InventoryPersonal");
        let imagesHtml = '';
        if(inv.length >0) {

        for (let item of inv) {
            imagesHtml += `<img width="50" height="50" id="inventaryImage" src="${item.sprite.image.src}" alt="">\n`;
        }

  this.element.innerHTML = imagesHtml;
        }
        var imageButton = document.getElementById("inventaryImage");
        let hasVara = false;
        // Add a click event listener to the image
        imageButton.addEventListener("click", function() {
            hasVara=true
        });
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })
        
                      
    
                    
                    
                    const peixes = [
     
                ]
               
               
       


        
            
                  
             
                        
     //       pescar.addEventListener('click', function(){
       //         let x = Math.floor(Math.random()*55);
       // console.log(x);
       // console.log(peixe[x]);
     //   fish = new Image(64,64);
      //  document.body.appendChild()
                //    })
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
//rgb(67, 153, 80);