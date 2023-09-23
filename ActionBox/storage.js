class Storage{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("Bank");
        let storageItem = '';
        if (storage.length > 0) {
            for (let j = 0; j < storage.length; j++) {
                const storageList = storage[j];
             storageItem += `<img width="50" height="50" id="inventaryImage" src="${storageList.sprite.image.src}" alt="" onclick="openItemBox({ id: '${storageList.id}', price: '${storageList.price}' ,src: '${storageList.sprite.image.src}' })">\n`;
             }
        }
        
        this.element.innerHTML = storageItem;

        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })
        
                   
                   
           
       


        
            
                  
             
                        
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