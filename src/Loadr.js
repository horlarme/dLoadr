import Circular from "./Animations/Circular";
import DualRing from "./Animations/DualRing";
import Facebook from "./Animations/Facebook";

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
            case "dual-ring":
            case "dualring":
            case "dual_ring":
                this.dLoadr = new DualRing(this.id, this.color, this.text);
                break;
            case "facebook":
                this.dLoadr = new Facebook(this.id, this.color, this.text);
                break;
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

        return this;
    }

    remove() {
        (this.getDisplayedAnimation()).remove();

        return this;
    }

    getDisplayedAnimation() {
        return document.querySelector(`#${this.id}`);
    }
}