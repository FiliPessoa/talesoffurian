class Hihat{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("hihat");
        

        this.element.innerHTML = (`

        <div class=left5>
        <input type ="number" min="40" max="218" value="80" id=" bpm"/>
        <button id="minima">Minima</button>
        <button id="seminima">Seminima</button>
        <button id="colcheia">Colcheia</button>
        <button id="semicolcheia">Semicolcheia</button>
        </div>
        
        
        
        <div class=right5>
        <button class="play">Play</button>
        <button class="textbox">a</button>
        <button class="fechado">k</button>
        <button class="aberto">l</button>
        
        
        </div>
        
        <audio src="/sounds/drums/chocalho1.wav"></audio>
        <audio src="/sounds/drums/bum.wav"></audio>
        <audio src="/sounds/drums/pa.wav"></audio>
        <audio src="/sounds/drums/chocalho1.wav"></audio>
        <button id="play">Play</button>
       
        <script>
            const bpm = document.getElementById(' bpm');
            const h1 = document.querySelector('h1')
            const play = document.getElementById('play')
            const minima = document.getElementById('minima')
            const seminima = document.getElementById('seminima')
            const colcheia = document.getElementById('colcheia')
            const semicolcheia = document.getElementById('semicolcheia')
            const fechado = document.getElementById('fechado')
            const aberto = document.getElementById('aberto')
            const audio = document.querySelector('audio')
      
            
            let currentBpm= 80
            let isPlaying = false
            let isSeminima = false
            let tempo = 0
            let time = false
            let timer = null


            function tick(){     
                audio.currentTime = 0
                audio.play()
            }

            bpm.addEventListener('change', function(){
                h1.innerHTML = this.value + ' bpm'
                currentBpm = parseInt(this.value)
                if (isPlaying){
                clearInterval(timer)
                timer = setInterval(tick,(60*1000)/currentBpm)
            }
            })
            play.addEventListener('click',function(){
                if (isPlaying){
                    play.innerHTML = 'Play'
                    clearInterval(timer)
                }else{
                    play.innerHTML = 'Stop'
                    tick()
                    if(tempo===0){
                timer = setInterval(tick,((60*1000)/currentBpm*2))}
                    if(tempo===1){
                timer = setInterval(tick,((60*1000)/currentBpm))}
                if(tempo===2){
                timer = setInterval(tick,((60*1000)/currentBpm/2))}
                if(tempo===3){
                timer = setInterval(tick,((60*1000)/currentBpm/4))}
            }
        isPlaying=!isPlaying
    })
    minima.addEventListener('click', function(){
        tempo=0
        clearInterval(timer)
        isPlaying= false
        play.innerHTML = 'Play'
            })

    seminima.addEventListener('click', function(){
        tempo=1
        clearInterval(timer)
        isPlaying= false
        play.innerHTML = 'Play'
            })

    colcheia.addEventListener('click', function(){
        tempo=2
        clearInterval(timer)
        isPlaying= false
        play.innerHTML = 'Play'
            })

    semicolcheia.addEventListener('click', function(){
        tempo=3
        clearInterval(timer)
        isPlaying= false
        play.innerHTML = 'Play'
            })

    tum.addEventListener('click', function(){
        audio.play()
            })
            
    

        </script>
        `)
        const bum = new Audio('/sounds/drums/bum.wav');
        const pa = new Audio('/sounds/drums/pa.wav');
        const chocalho1 = new Audio("/sounds/drums/tchi.wav");
        const chocalho2 = new Audio("/sounds/drums/ti.wav");
        
        
 
        
        this.actionListener = new KeyPressListener("Enter", () => {
           this.actionListener.unbind();
           this.done();
        })
        this.actionListener = new KeyPressListener("KeyA", () => {
            bum.currentTime = 0;
            bum.play();  
         })
         this.actionListener = new KeyPressListener("KeyS", () => {
            pa.currentTime = 0;
            pa.play();  
         })
         this.actionListener = new KeyPressListener("KeyK", () => {
            chocalho1.currentTime = 0;
            chocalho1.play();  
         })
         this.actionListener = new KeyPressListener("KeyL", () => {
            chocalho2.currentTime = 0;
            chocalho2.play();   
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

