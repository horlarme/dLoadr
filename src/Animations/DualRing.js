export default class DualRing {

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
                #${this.id} .lds-dual-ring {display: inline-block;width: 64px;height: 64px;}
                #${this.id} .lds-dual-ring:after {content: " ";display: block;width: 46px;height: 46px;margin:
                 1px;border-radius: 50%;border: 5px solid ${this.color};border-color: ${this.color} transparent
                  ${this.color}
                  transparent;animation: lds-dual-ring 1.2s linear infinite;}
                @keyframes lds-dual-ring {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}`;

        //create style element
        let styleElement = document.createElement('style');
        styleElement.append(style);
        return styleElement;
    }

    animation() {
        let loader = document.createElement('div');
        //adding another div inside loader div
        loader.appendChild(document.createElement('div'));
        loader.setAttribute('class', 'lds-dual-ring');

        return loader;
    }
}