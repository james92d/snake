import BodyPart from './BodyPart.js';

class Snake {
    constructor() {
        this.head_element = document.getElementById("snake-head");
        this.head = new BodyPart(200, 100, this.head_element);
        this.direction = "right"
    }

    changeDirection(new_direction) {
        switch (new_direction) {
            case "up":
                this.direction = "up";
                break;
            case "down":
                this.direction = "down";                
                break; 
            case "left":
                this.direction = "left";                
                break; 
            case "right":
                this.direction = "right";
                break;
        }
    }
    
    move() {
        switch (this.direction) {
            case "up":
                this.head.y += 50;
                break;
            case "down":
                this.head.y -= 50;               
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