class Inventory{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("InventoryPersonal");
        

        this.element.innerHTML = (`
        
        <img width="50" height="50"id="randomImage" src="/image/tools/vara.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/tools/pa.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/fruto.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/worm.png" alt="">
        
       
        
    
        
        `)
       
        
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })
        
                   
                   
                    
                    
                    const peixes = [
     
                ]
               
           
                function displayRandomImage() {
                    const peixes = [ /* ... Add your array of image URLs here ... */ ];
                    const randomIndex = Math.floor(Math.random() * peixes.length);
                    const randomImageURL = peixes[randomIndex];
                    const randomImage = document.getElementById("randomImage");
                    randomImage.src = randomImageURL;
                }
                
                    
                // const pescarButton = document.querySelector('.pescar');
                // pescarButton.addEventListener('click', () => displayRandomImage());
        
    

       


        
            
                  
             
                        
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