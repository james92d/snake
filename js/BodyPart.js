class BodyPart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.container = document.getElementById("game-container");
        this.element = document.createElement("div");
        this.element.setAttribute("class", "snake-body-part");
        this.container.appendChild(this.element);
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}

export default BodyPart;