class BeatBox{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("BeatBox");
        

        this.element.innerHTML = (`
        <div class="top8">
        <button class ="less8"></button>
        <button class ="screen8"></button>
        <button class ="plus8"></button>
     </div>
     <div class="bottom8">
       <button class ="q8 drum8"></button>
       <button class ="w8 drum8"></button>
       <button class ="a8 drum8"></button>
       <button class ="s8 drum8"></button>
       <button class ="d8 drum8"></button>
       <button class ="f8 drum8"></button>
       <button class ="g8 drum8"></button>
       <button class ="h8 drum8"></button>
       <button class ="j8 drum8"></button>
       <button class ="k8 drum8"></button>
       <button class ="l8 drum8"></button>
     </div>
        `)
       
        
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })
        var nota1 = new Audio('/sounds/assets-mellow/1.wav');
        var nota2 = new Audio('/sounds/assets-mellow/2.wav');
        var nota3 = new Audio('/sounds/assets-mellow/3.wav');
        var nota4 = new Audio('/sounds/assets-mellow/4.wav');
        var nota5 = new Audio('/sounds/assets-mellow/5.wav');
        var nota6 = new Audio('/sounds/assets-mellow/6.wav');
        var nota7 = new Audio('/sounds/assets-mellow/7.wav');
        var nota8 = new Audio('/sounds/assets-mellow/8.wav');
        var nota9 = new Audio('/sounds/assets-mellow/9.wav');
        var nota10 = new Audio('/sounds/assets-mellow/10.wav');
        var nota11 = new Audio('/sounds/assets-mellow/11.wav');
 
      
        this.actionListener = new KeyPressListener("KeyA", () => {
            nota1.currentTime = 0;
            nota1.play();  
         })
         this.actionListener = new KeyPressListener("KeyS", () => {
            nota2.currentTime = 0;
            nota2.play();  
         })
         this.actionListener = new KeyPressListener("KeyD", () => {
            nota3.currentTime = 0;
            nota3.play();  
         })
         this.actionListener = new KeyPressListener("KeyF", () => {
            nota4.currentTime = 0;
            nota4.play();  
         })
         this.actionListener = new KeyPressListener("KeyG", () => {
            nota5.currentTime = 0;
            nota5.play();  
         })
         this.actionListener = new KeyPressListener("KeyH", () => {
            nota6.currentTime = 0;
            nota6.play();  
         })
         this.actionListener = new KeyPressListener("KeyJ", () => {
            nota7.currentTime = 0;
            nota7.play();  
         })
         this.actionListener = new KeyPressListener("KeyK", () => {
            nota8.currentTime = 0;
            nota8.play();  
         })
         this.actionListener = new KeyPressListener("KeyL", () => {
            nota9.currentTime = 0;
            nota9.play();  
         })
         this.actionListener = new KeyPressListener("Semicolon", () => {
            nota10.currentTime = 0;
            nota10.play();  
         })
         this.actionListener = new KeyPressListener("Quote", () => {
            nota11.currentTime = 0;
            nota11.play();  
         })
         musicxp=musicxp+15;
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