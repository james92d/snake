import BodyPart from './BodyPart.js';

class Snake {
    constructor() {
        this.head = new BodyPart(200, 100);
        this.direction = "right"
    }

    changeDirection(key) {
        switch (key) {
            case "ArrowUp":
                if (this.direction !== "down") {this.direction = "up"}
                break;
            case "ArrowDown":
                if (this.direction !== "up") {this.direction = "down"}
                break;
            case "ArrowLeft":
                if (this.direction !== "right") {this.direction = "left"}
                break;
            case "ArrowRight":
                if (this.direction !== "left") {this.direction = "right"}
                break;
            default:
                return;
        }
    }
    
    move() {
        switch (this.direction) {
            case "up":
                this.head.y -= 50;
                break;
            case "down":
                this.head.y += 50;               
                break; 
            case "left":
                this.head.x -= 50;              
                break; 
            case "right":
                this.head.x += 50;
                break;
        }
    }

    updatePosition() {
        this.head.element.style.left = `${this.head.x}px`;
        this.head.element.style.top = `${this.head.y}px`;
    }
}

export default Snake;