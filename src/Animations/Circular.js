export default class Circular {

    /**
     *
     * @param id
     * @param color
     * @param text
     */
    constructor(
        id,
        color,
        text) {

        this.id = id;
        this.color = color;
        this.text = text;
    }

    loadingText(){
        let text = document.createElement('div');
        text.append(this.text);

        return text;
    }

    makeElement(parentElement) {
        //create main loading container
        let container = document.createElement("div");
        container.style.textAlign = 'center';
        container.style.display = 'block';
        container.style.width = '100%';
        container.style.margin = '40px auto';
        container.setAttribute('id', this.id);
        container.appendChild(this.style());
        container.appendChild(this.animation());
        container.appendChild(this.loadingText());

        return parentElement.appendChild(container);
    }

    style() {
        let style = `
                #${this.id} .lds-circle {
                  display: inline-block;
                  transform: translateZ(1px);
                }
                #${this.id} .lds-circle > div {
                  display: inline-block;
                  width: 51px;
                  height: 51px;
                  margin: 6px;
                  border-radius: 50%;
                  background: ${this.color};
                  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
                }
                @keyframes lds-circle {
                  0%, 100% {
                    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
                  }
                  0% {
                    transform: rotateY(0deg);
                  }
                  50% {
                    transform: rotateY(1800deg);
                    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
                  }
                  100% {
                    transform: rotateY(3600deg);
                  }
                }`;

        //create style element
        let styleElement = document.createElement('style');
        styleElement.append(style);
        return styleElement;
    }

    animation() {
        let loader = document.createElement('div');
        //adding another div inside loader div
        loader.appendChild(document.createElement('div'));
        loader.setAttribute('class', 'lds-circle');

        return loader;
    }
}