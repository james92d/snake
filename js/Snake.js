import BodyPart from './BodyPart.js';

class Snake {
    constructor() {
        this.head_element = document.getElementById("snake-head");
        this.head = new BodyPart(200, 100, this.head_element);
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
        this.head.style.left = `${this.head.x}px`;
        this.head.style.top = `${this.head.y}px`;
    }
}

export default Snake;