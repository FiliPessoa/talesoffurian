class Storage{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("Inventory");
        

        this.element.innerHTML = (`
        
        
       
        
        <img width="50" height="50"id="randomImage" src="/image/peixe/moeda.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/peixe1.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/peixe5.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/peixe10.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/peixe25.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/peixe50.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/peixe100.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/peixe200.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/peixe500.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/bud.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/tools/cachimbo.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/flor.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/fruto.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/fruto2.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/semente.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/folha.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/casca.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/fruto3.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/chave/chave1.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/chave/chave2.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/chave/chave3.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/chave/chave4.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/tools/pa.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/tools/faca.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/tools/vara.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/worm.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/pergaminho.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/tools/bottle.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/bambu.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/tarot.png" alt="">
         
       
    
        
        `)
       
        
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })
        
                   
                   
                    
                    
                    const peixes = [
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe1.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe5.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe10.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe25.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peixe50.png',
          '/image/peixe/peix100.png',
          '/image/peixe/peix100.png',
          '/image/peixe/peix100.png',
          '/image/peixe/peix100.png',
          '/image/peixe/peix100.png',
          '/image/peixe/peixe200.png',
          '/image/peixe/peixe200.png',
          '/image/peixe/peixe200.png',
          '/image/peixe/peixe500.png',
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