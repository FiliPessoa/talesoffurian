class Flor{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("Flor");
        

        this.element.innerHTML = (`
      
        <canvas id="myCanvas" width="384" height="160";">
</canvas>
<div >
<input type ="range" min="1" max="6" value="1" id="setTempo8"/>
<input type ="range" min="1" max="6"  value="4" id="setTempo1"/>
</div>
<div ></div>
<input type ="range" min="1" max="6"  value="5" id="setTempo7"/>
<input type ="range" min="1" max="6"  value="1" id="setTempo2"/>
</div>
<div >
    <input type ="range" min="1" max="6" value="1" id="setTempo6"/>
    <input type ="range" min="1" max="6"  value="5" id="setTempo3"/>
</div>
    <div class=""></div>
    <input type ="range" min="1" max="6"  value="4" id="setTempo5"/>
    <input type ="range" min="1" max="6"  value="1" id="setTempo4"/>
    </div>
    
    <button id="print">print</button>
        <script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

const print = document.getElementById('print')
let setTempo1 = document.getElementById('setTempo1');
let setTempo2 = document.getElementById('setTempo2');
let setTempo3 = document.getElementById('setTempo3');
let setTempo4 = document.getElementById('setTempo4');
let setTempo5 = document.getElementById('setTempo5');
let setTempo6 = document.getElementById('setTempo6');
let setTempo7 = document.getElementById('setTempo7');
let setTempo8 = document.getElementById('setTempo8');
const color1 = "yellow"
const color2 = "orange"
const color3 = "purple"
const color4 = "green"
const color5 = "red"
const color6 = "blue"
const color0 = "grey"
var tempo1 = color4
var tempo2 = color1
var tempo3 = color5
var tempo4 = color1
var tempo5 = color4
var tempo6 = color1
var tempo7 = color5
var tempo8 = color1


 
 setTempo1.addEventListener('change', function(){
    setTempo1 = this.value
    if(setTempo1==1){
          tempo1 = color1
          

     }
     if(setTempo1==2){
          tempo1 = color2

     }
     if(setTempo1==3){
          tempo1 = color3

     }
     if(setTempo1==4){
          tempo1 = color4

     }
     if(setTempo1==5){
          tempo1 = color5

     }
     if(setTempo1==6){
          tempo1 = color6

     }         
     ctx.beginPath();
ctx.fillStyle = tempo1;
ctx.moveTo(192-112, 80);
ctx.lineTo(192-112, 10);
ctx.lineTo(241-112, 31);
ctx.closePath();
ctx.fill();                  
            })

            setTempo2.addEventListener('change', function(){
    setTempo2 = this.value
    if(setTempo2==1){
          tempo2 = color1
          

     }
     if(setTempo2==2){
          tempo2 = color2

     }
     if(setTempo2==3){
          tempo2 = color3

     }
     if(setTempo2==4){
          tempo2 = color4

     }
     if(setTempo2==5){
          tempo2 = color5

     }
     if(setTempo2==6){
          tempo2 = color6

     }         
     ctx.beginPath();
ctx.fillStyle = tempo2;
 ctx.lineTo(192-112, 80);
 ctx.lineTo(241-112, 31);
 ctx.lineTo(262-112, 80);
ctx.closePath();
ctx.fill();                
            })

            setTempo3.addEventListener('change', function(){
    setTempo3 = this.value
    if(setTempo3==1){
          tempo3 = color1
          

     }
     if(setTempo3==2){
          tempo3 = color2

     }
     if(setTempo3==3){
          tempo3 = color3

     }
     if(setTempo3==4){
          tempo3 = color4

     }
     if(setTempo3==5){
          tempo3 = color5

     }
     if(setTempo3==6){
          tempo3 = color6

     }         
     ctx.beginPath();
ctx.fillStyle = tempo3;
ctx.lineTo(192-112, 80);
ctx.lineTo(262-112, 80);
ctx.lineTo(241-112, 122);
ctx.closePath();
ctx.fill();              
            })

            setTempo4.addEventListener('change', function(){
    setTempo4 = this.value
    if(setTempo4==1){
          tempo4 = color1
          

     }
     if(setTempo4==2){
          tempo4 = color2

     }
     if(setTempo4==3){
          tempo4 = color3

     }
     if(setTempo4==4){
          tempo4 = color4

     }
     if(setTempo4==5){
          tempo4 = color5

     }
     if(setTempo4==6){
          tempo4 = color6

     }         
     ctx.beginPath();
ctx.fillStyle = tempo4;
ctx.lineTo(192-112, 80);
ctx.lineTo(241-112, 122);
ctx.lineTo(192-112, 150);
ctx.closePath();
ctx.fill();           
            })

            setTempo5.addEventListener('change', function(){
    setTempo5 = this.value
    if(setTempo5==1){
          tempo5 = color1
          

     }
     if(setTempo5==2){
          tempo5 = color2

     }
     if(setTempo5==3){
          tempo5 = color3

     }
     if(setTempo5==4){
          tempo5 = color4

     }
     if(setTempo5==5){
          tempo5 = color5

     }
     if(setTempo5==6){
          tempo5 = color6

     }         
     ctx.beginPath();
ctx.fillStyle = tempo5;
ctx.lineTo(192-112, 80);
ctx.lineTo(192-112, 150);
ctx.lineTo(143-112, 122);
ctx.closePath();
ctx.fill();          
            })

            setTempo6.addEventListener('change', function(){
    setTempo6 = this.value
    if(setTempo6==1){
          tempo6 = color1
          

     }
     if(setTempo6==2){
          tempo6 = color2

     }
     if(setTempo6==3){
          tempo6 = color3

     }
     if(setTempo6==4){
          tempo6 = color4

     }
     if(setTempo6==5){
          tempo6 = color5

     }
     if(setTempo6==6){
          tempo6 = color6

     }         
     ctx.beginPath();
ctx.fillStyle = tempo6;
ctx.lineTo(192-112, 80);
ctx.lineTo(143-112, 122);
ctx.lineTo(122-112, 80);
ctx.closePath();
ctx.fill();        
            })

            setTempo7.addEventListener('change', function(){
    setTempo7 = this.value
    if(setTempo7==1){
          tempo7 = color1
          

     }
     if(setTempo7==2){
          tempo7 = color2

     }
     if(setTempo7==3){
          tempo7 = color3

     }
     if(setTempo7==4){
          tempo7 = color4

     }
     if(setTempo7==5){
          tempo7 = color5

     }
     if(setTempo7==6){
          tempo7 = color6

     }         
     ctx.beginPath();
ctx.fillStyle = tempo7;
ctx.lineTo(192-112, 80);
ctx.lineTo(122-112, 80);
ctx.lineTo(143-112, 31);
ctx.closePath();
ctx.fill();      
            })

            setTempo8.addEventListener('change', function(){
    setTempo8 = this.value
    if(setTempo8==1){
          tempo8 = color1
          

     }
     if(setTempo8==2){
          tempo8 = color2

     }
     if(setTempo8==3){
          tempo8 = color3

     }
     if(setTempo8==4){
          tempo8 = color4

     }
     if(setTempo8==5){
          tempo8 = color5

     }
     if(setTempo8==6){
          tempo8 = color6

     }         
     ctx.beginPath();
ctx.fillStyle = tempo8;
ctx.lineTo(192-112, 80);
ctx.lineTo(143-112, 31);
ctx.lineTo(192-112, 10);
ctx.closePath();
ctx.fill();   
            })




            

            

           




            ctx.beginPath();
ctx.fillStyle = tempo1;
ctx.moveTo(192-112, 80);
ctx.lineTo(192-112, 10);
ctx.lineTo(241-112, 31);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.fillStyle = tempo2;
 ctx.lineTo(192-112, 80);
 ctx.lineTo(241-112, 31);
 ctx.lineTo(262-112, 80);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.fillStyle = tempo3;
ctx.lineTo(192-112, 80);
ctx.lineTo(262-112, 80);
ctx.lineTo(241-112, 122);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.fillStyle = tempo4;
ctx.lineTo(192-112, 80);
ctx.lineTo(241-112, 122);
ctx.lineTo(192-112, 150);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.fillStyle = tempo5;
ctx.lineTo(192-112, 80);
ctx.lineTo(192-112, 150);
ctx.lineTo(143-112, 122);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.fillStyle = tempo6;
ctx.lineTo(192-112, 80);
ctx.lineTo(143-112, 122);
ctx.lineTo(122-112, 80);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.fillStyle = tempo7;
ctx.lineTo(192-112, 80);
ctx.lineTo(122-112, 80);
ctx.lineTo(143-112, 31);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.fillStyle = tempo8;
ctx.lineTo(192-112, 80);
ctx.lineTo(143-112, 31);
ctx.lineTo(192-112, 10);
ctx.closePath();
ctx.fill();


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