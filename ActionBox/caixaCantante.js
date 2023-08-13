class CaixaCantante{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("CaixaCantante");
        

        this.element.innerHTML = (`
        <div class="top">
        <button class ="less"></button>
        <button class ="screen">E</button>
        <button class ="plus"></button>
     </div>
     <div class="bottom">
       <button class ="q drum">1</button>
       <button class ="w drum">2</button>
       <button class ="a drum">3</button>
       <button class ="s drum">4</button>
       <button class ="d drum">5</button>
       <button class ="f drum">6</button>
       <button class ="g drum">7</button>
       <button class ="h drum">8</button>
       <button class ="j drum">9</button>
       <button class ="k drum">10</button>
       <button class ="l drum">11</button>
     </div>
        `)
       
        
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })
        
        
        var notas = 
        ["/sounds/assetscaixa/1.wav",
        "/sounds/assetscaixa/2.wav",
        "/sounds/assetscaixa/3.wav",
        "/sounds/assetscaixa/4.wav",
        "/sounds/assetscaixa/5.wav",
        "/sounds/assetscaixa/6.wav",
        "/sounds/assetscaixa/7.wav",
        "/sounds/assetscaixa/8.wav",
        "/sounds/assetscaixa/9.wav",
        "/sounds/assetscaixa/10.wav",
        "/sounds/assetscaixa/11.wav",
        "/sounds/assetscaixa/12.wav",
        "/sounds/assetscaixa/13.wav",
        "/sounds/assetscaixa/14.wav",
        "/sounds/assetscaixa/15.wav",
        "/sounds/assetscaixa/16.wav",
        "/sounds/assetscaixa/17.wav",
        "/sounds/assetscaixa/18.wav",
        "/sounds/assetscaixa/19.wav",
        "/sounds/assetscaixa/20.wav",
        "/sounds/assetscaixa/21.wav",
        "/sounds/assetscaixa/22.wav",
        "/sounds/assetscaixa/23.wav",
        "/sounds/assetscaixa/24.wav",
        "/sounds/assetscaixa/25.wav",
        "/sounds/assetscaixa/26.wav",
        "/sounds/assetscaixa/27.wav",
        "/sounds/assetscaixa/28.wav",
        "/sounds/assetscaixa/29.wav",];


        

        var tom = 
        ["E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
        "C",
        "C#",
        "D",
        "D#",];
        let currentIndex = 0;

        function PlusTom() {
         currentIndex = (currentIndex + 1) % tom.length;
         screen.innerHTML = tom[currentIndex];
       }
       
       function LessTom() {
         currentIndex = (currentIndex - 1 + tom.length) % tom.length;
         screen.innerHTML = tom[currentIndex];
       }
       
       const less = this.element.querySelector('.less');
       const screen = this.element.querySelector('.screen');
       const plus = this.element.querySelector('.plus');
       
       plus.addEventListener('click', PlusTom);
       less.addEventListener('click', LessTom);
       
       //PlusTom();
       //LessTom();
        
       
        this.actionListener = new KeyPressListener("KeyA", () => {
         const nota1 = new Audio(notas[currentIndex+0]); // Create a new Audio element with the sound file path
         nota1.currentTime = 0;
         nota1.play();
            
         })
         this.actionListener = new KeyPressListener("KeyS", () => {
            const nota2 = new Audio(notas[currentIndex+2]); // Create a new Audio element with the sound file path
            nota2.currentTime = 0;
            nota2.play();
         })
         this.actionListener = new KeyPressListener("KeyD", () => {
            const nota3 = new Audio(notas[currentIndex+4]); // Create a new Audio element with the sound file path
            nota3.currentTime = 0;
            nota3.play();
         })
         this.actionListener = new KeyPressListener("KeyF", () => {
            const nota4 = new Audio(notas[currentIndex+5]); // Create a new Audio element with the sound file path
            nota4.currentTime = 0;
            nota4.play();
         })
         this.actionListener = new KeyPressListener("KeyG", () => {
            const nota5 = new Audio(notas[currentIndex+7]); // Create a new Audio element with the sound file path
            nota5.currentTime = 0;
            nota5.play();
         })
         this.actionListener = new KeyPressListener("KeyH", () => {
            const nota6 = new Audio(notas[currentIndex+9]); // Create a new Audio element with the sound file path
            nota6.currentTime = 0;
            nota6.play();
         })
         this.actionListener = new KeyPressListener("KeyJ", () => {
            const nota7 = new Audio(notas[currentIndex+10]); // Create a new Audio element with the sound file path
            nota7.currentTime = 0;
            nota7.play(); 
         })
         this.actionListener = new KeyPressListener("KeyK", () => {
            const nota8 = new Audio(notas[currentIndex+12]); // Create a new Audio element with the sound file path
            nota8.currentTime = 0;
            nota8.play();  
         })
         this.actionListener = new KeyPressListener("KeyL", () => {
            const nota9 = new Audio(notas[currentIndex+14]); // Create a new Audio element with the sound file path
            nota9.currentTime = 0;
            nota9.play();  
         })
         this.actionListener = new KeyPressListener("Semicolon", () => {
            const nota10 = new Audio(notas[currentIndex+16]); // Create a new Audio element with the sound file path
            nota10.currentTime = 0;
            nota10.play(); 
         })
         this.actionListener = new KeyPressListener("Quote", () => {
            const nota11 = new Audio(notas[currentIndex+17]); // Create a new Audio element with the sound file path
            nota11.currentTime = 0;
            nota11.play();  
            
         })
         this.actionListener = new KeyPressListener("ArrowLeft", () => {
          
         })
         this.actionListener = new KeyPressListener("ArrowRight", () => {
        
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