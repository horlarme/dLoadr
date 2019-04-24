export default class Facebook {

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
                #${this.id} .lds-facebook {display: inline-block;position: relative;width: 64px;height: 64px;}
                #${this.id} .lds-facebook div {display: inline-block;position: absolute;left: 6px;width: 13px;background: ${this.color};animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;}
                #${this.id} .lds-facebook div:nth-child(1) {left: 6px;animation-delay: -0.24s;}
                #${this.id} .lds-facebook div:nth-child(2) {left: 26px;animation-delay: -0.12s;}
                #${this.id} .lds-facebook div:nth-child(3) {left: 45px;animation-delay: 0;}
                @keyframes lds-facebook {0% {top: 6px;height: 51px;}50%, 100% {top: 19px;height: 26px;}}`;

        //create style element
        let styleElement = document.createElement('style');
        styleElement.append(style);
        return styleElement;
    }

    animation() {
        let loader = document.createElement('div');
        //adding another div inside loader div
        loader.appendChild(document.createElement('div'));
        loader.appendChild(document.createElement('div'));
        loader.appendChild(document.createElement('div'));
        loader.setAttribute('class', 'lds-facebook');

        return loader;
    }
}