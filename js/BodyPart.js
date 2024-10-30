class BodyPart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = document.getElementsByClassName("snake-body-part")[0];
    }
}

export default BodyPart;