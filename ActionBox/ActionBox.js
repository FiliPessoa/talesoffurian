class ActionBox{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("ActionBox");
        

        this.element.innerHTML = (`
            <p class="ActionBox_p">${this.text}</p>
            <button class="ActionBox_button">Pescar</button>
        `)
        this.element.querySelector("button").addEventListener("click", () => {
            this.done();

        });
        
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })

    }
    done() {
        this.element.remove();
        this.onComplete();

    

    }
   loadCaixa() {
        document.getElementById("content").innerHTML='<object type="text/html" data="caixaCantante.html" ></object>';
   }

    init(container) {
        this.createElement();
        container.appendChild(this.element)
       
    }
}