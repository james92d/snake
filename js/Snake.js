import BodyPart from './BodyPart.js';

class Snake {
    constructor() {
        this.head = new BodyPart(200, 100);
        this.current_direction = "right"
        this.directions = ["right"];
        this.tail = [];
        this.tail.push(new BodyPart(150, 100));
        this.tail.push(new BodyPart(100, 100));
    }

    appendDirection(key) {
        if (this.directions.length < 3) {
            switch (key) {
                case "ArrowUp":
                    this.directions.unshift("up")
                    break;
                case "ArrowDown":
                    this.directions.unshift("down")
                    break;
                case "ArrowLeft":
                    this.directions.unshift("left")                    
                    break;
                case "ArrowRight":
                    this.directions.unshift("right")                    
                    break;
                default:
                    return;
            }
        }
    }
    
    processDirections() {
        for (let i = 0; i < 2; i++) {
            if (this.directions[this.directions.length - 1] === this.current_direction ||
                this.directions[this.directions.length - 1]  === "up" && this.current_direction === "down" ||
                this.directions[this.directions.length - 1]  === "down" && this.current_direction === "up" ||
                this.directions[this.directions.length - 1]  === "left" && this.current_direction === "right" ||
                this.directions[this.directions.length - 1]  === "right" && this.current_direction === "left")
                this.directions.pop();
        }
        if (this.directions[this.directions.length - 1])
            this.current_direction = this.directions.pop();
        };
    
    
    move() {
        this.tail_piece = this.tail.pop();
        this.tail_piece.x = this.head.x;
        this.tail_piece.y = this.head.y;
        this.tail.unshift(this.tail_piece);

        switch (this.current_direction) {
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
        switch (this.current_direction) {
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
        if (this.head.x < 0 || this.head.x >= 600 || this.head.y < 0 || this.head.y >= 450)
            return true;
        for (const tail_piece of this.tail) {
            if (this.head.x === tail_piece.x && this.head.y === tail_piece.y)
                return true;
        }
            return false;
        };
        

    updatePosition() {
        this.tail[0].element.style.left = `${this.tail[0].x}px`;
        this.tail[0].element.style.top = `${this.tail[0].y}px`;
        this.head.element.style.left = `${this.head.x}px`;
        this.head.element.style.top = `${this.head.y}px`;
    }
}

export default Snake;