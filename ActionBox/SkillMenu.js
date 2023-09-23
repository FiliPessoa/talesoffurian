class SkillMenu {
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("SkillMenu");
        this.element.innerHTML = `
            <div class="musicxp"></div>
            <div class="fishingxp"></div>
            <div class="witchcraftxp"></div>
            <div class="totalxp"></div>
        `;
        
        // Calculate the totalAmount as you did before
        totalxp=musicxp+fishingxp+witchcraftxp;
        const musicxpDiv = this.element.querySelector(".musicxp");
        musicxpDiv.textContent =  `M  Xp: ${musicxp}`;
        

         const fishingxpDiv = this.element.querySelector(".fishingxp");
         fishingxpDiv.textContent = `F Xp: ${fishingxp}`;

         const witchcraftxpDiv = this.element.querySelector(".witchcraftxp");
         witchcraftxpDiv.textContent = `WC Xp: ${witchcraftxp}`;

          const totalxpDiv = this.element.querySelector(".totalxp");
          totalxpDiv.textContent =  `Total Xp: ${totalxp}`;
        
        
//        this.element.innerHTML = imagesHtml;
        
        // var imageButton = document.getElementById("inventaryImage");
        // let hasVara = false;
        // // Add a click event listener to the image
        // imageButton.addEventListener("click", function() {
        //     hasVara=true
        // });
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