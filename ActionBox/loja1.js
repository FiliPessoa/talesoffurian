class Loja1{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("InventoryPersonal");
        

        this.element.innerHTML = (`
        
        
       
        <img width="50" height="50"id="randomImage" src="/image/plant/flor.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/casca.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/fruto.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/fruto2.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/fruto3.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/semente.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/plant/folha.png" alt="">
        <img width="50" height="50"id="randomImage" src="/image/peixe/worm.png" alt="">
        
         
       
    
        
        `)
       
        
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })
        
                   
                   
                    
                    
        //             const peixes = [
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe1.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe2.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe5.png',
        //   '/image/peixe/peixe25.png',
        //   '/image/peixe/peixe25.png',
        //   '/image/peixe/peixe25.png',
        //   '/image/peixe/peixe25.png',
        //   '/image/peixe/peixe25.png',
        //   '/image/peixe/peixe25.png',
        //   '/image/peixe/peixe25.png',
        //   '/image/peixe/peixe25.png',
        //   '/image/peixe/peixe25.png',
        //   '/image/peixe/peixe50.png',
        //   '/image/peixe/peixe50.png',
        //   '/image/peixe/peixe50.png',
        //   '/image/peixe/peixe50.png',
        //   '/image/peixe/peixe50.png',
        //   '/image/peixe/peixe50.png',
        //   '/image/peixe/peixe100.png',
        //   '/image/peixe/peixe100.png',
        //   '/image/peixe/peixe100.png',
        //   '/image/peixe/peixe1000.png',
        //         ]
               
           
  
       


        
            
                  
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

