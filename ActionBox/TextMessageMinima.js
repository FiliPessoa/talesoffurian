class TextMessageMinima{
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }
    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("TextMessage");

        this.element.innerHTML = (`

        <div class=up>
        <button class="bip1">a</button>
        <button class="bip2"></button>
        <button class="bip3"></button>
        <button class="bip4"></button>
        <button class="bip5">s</button>
        <button class="bip6"></button>
        <button class="bip7"></button>
        <button class="bip8"></button>
        <button class="bip9">a</button>
        <button class="bip10"></button>
        <button class="bip11"></button>
        <button class="bip12"></button>
        <button class="bip13">s</button>
        <button class="bip14"></button>
        <button class="bip15"></button>
        <button class="bip16"></button>
        </div>
            <p class="TextMessage_p">${this.text}</p>
            <button src="minima.png" id="minima"></button>
            <button class="TextMessage_button">Next</button>
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

    init(container) {
        this.createElement();
        container.appendChild(this.element)
    }
}