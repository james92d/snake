import BodyPart from './BodyPart.js';

class Snake {
    constructor() {
        this.head = new BodyPart(200, 100);
        this.direction = "right";
        this.tail = [];
        this.tail.push(new BodyPart(150, 100));
        this.tail.push(new BodyPart(100, 100));
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
        this.tail_piece = this.tail.pop();
        this.tail_piece.x = this.head.x;
        this.tail_piece.y = this.head.y;
        this.tail.unshift(this.tail_piece);

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

    grow() {
        this.tail.unshift(new BodyPart(this.head.x, this.head.y));
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

    isAtFood(food) {
        if (food.x === this.head.x && food.y === this.head.y) {
                return true;
        } else {
            return false;
        }
    }
    

    isCollided() {
        if (this.head.x < 0 || this.head.x >= 600 || this.head.y < 0 || this.head.y >= 450) {
            return true;
        } else {
            return false;
        }
    }

    updatePosition() {
        this.tail[0].element.style.left = `${this.tail[0].x}px`;
        this.tail[0].element.style.top = `${this.tail[0].y}px`;
        this.head.element.style.left = `${this.head.x}px`;
        this.head.element.style.top = `${this.head.y}px`;
    }
}

export default Snake;