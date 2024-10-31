import Utils from './Utils.js';

class Food {
    constructor() {
        this.x = Utils.getRandomPos(12);
        this.y = Utils.getRandomPos(9);
        this.container = document.getElementById("game-container");
        this.element = document.createElement("div");
        this.element.setAttribute("class", "food");
        this.container.appendChild(this.element);
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    move() {
        this.x = Utils.getRandomPos(12);
        this.y = Utils.getRandomPos(9);
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}

export default Food;