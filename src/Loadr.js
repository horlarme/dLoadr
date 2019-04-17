import Circular from "./Animations/Circular";

export default class Loadr {

    constructor(config = null) {


        this.id = "dLoadr" + (new Date()).getTime() + (Math.round(Math.random() * 213));
        this.color = "#fff";
        this.text = "Loading...";
        this.type = "circle";
        this.parent = "body";

        if (config) {
            for (let configurable in config) {
                this[configurable] = config[configurable];
            }
        }

        return this._create();
    }

    _create() {

        switch (this.type.toLowerCase()) {
            default:
                this.dLoadr = new Circular(this.id, this.color, this.text);
                break;
        }

        return this;
    }

    _getParentElement() {
        return document.querySelector(this.parent);
    }

    display() {
        let parent = this._getParentElement();

        this.dLoadr.makeElement(parent);
    }

    remove() {
        return (this.getDisplayedAnimation()).remove();
    }

    getDisplayedAnimation() {
        return document.querySelector(this.id);
    }
}