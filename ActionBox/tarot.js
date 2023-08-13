class Tarot{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("Tarot");
        

        this.element.innerHTML = (`
        
        
       
        <div class="tarot">        
      
     
    
        <button class="baralho1">
        <img width="100" height="45" src='virada.jpg',id: baralho1  /></button>
        <button class="baralho2">
        <img width="100" height="45" src='virada.jpg',id: baralho2 /></button>
        <button class="baralho3">
        <img width="100" height="45" src='virada.jpg',id: baralho3  /></button>
        
        <button class="carta1">
        <img width="55" height="100" src='/image/tarot/34.jpg',id: carta3  /></button>
       
        <button class="carta2">
        <img width="55" height="100" src='/image/tarot/8.jpg',id: carta3  /></button>
   
   
    
        <button class="carta3">
        <img width="55" height="100" src='/image/tarot/71.jpg',id: carta3  /></button>
 
    </div>    
       
    
        
        
        
        <script>

let baralho1 = document.getElementById('baralho1');
let baralho2 = document.getElementById('baralho2');
let baralho3 = document.getElementById('baralho3');
           
           
           

            
    baralho1.addEventListener('click', function(){
        let nobre = Math.floor(Math.random()*55);
console.log(nobre);
console.log(peixe[nobre]);
fish = new Image(64,64);
document.body.appendChild()
            })
            baralho2.addEventListener('click', function(){
        let maior = Math.floor(Math.random()*55);
console.log(maior);
console.log(peixe[maior]);
fish = new Image(64,64);
document.body.appendChild()
            })
            baralho3.addEventListener('click', function(){
        let menor = Math.floor(Math.random()*55);
console.log(menor);
console.log(peixe[menor]);
fish = new Image(64,64);
document.body.appendChild()
            })
           

  
    
            
    

        </script>
        `)
       
        
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
//rgb(67, 153, 80);