import BodyPart from './BodyPart.js';
import Utils from './Utils.js';

class Snake {
    constructor() {
        this.head = new BodyPart(Utils.position(4), Utils.position(2));
        this.last_head_pos = [];
        this.directions = ["right"];
        this.current_direction = this.directions[0];
        this.tail = [];
        this.tail.push(new BodyPart(Utils.position(3), Utils.position(2)));
        this.tail.push(new BodyPart(Utils.position(2), Utils.position(2)));
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
    
    moveHead() {
        this.last_head_pos = [this.head.x, this.head.y];
        switch (this.current_direction) {
            case "up":
                this.head.y -= Utils.position(1);
                break;
            case "down":
                this.head.y += Utils.position(1);               
                break; 
            case "left":
                this.head.x -= Utils.position(1);              
                break; 
            case "right":
                this.head.x += Utils.position(1);
                break;
        }
    }

    moveTail(position) {
        this.tail_piece = this.tail.pop();
        this.tail_piece.x = position[0];
        this.tail_piece.y = position[1];
        this.tail.unshift(this.tail_piece);
    }

    grow() {
        this.tail.unshift(new BodyPart(this.last_head_pos[0], this.last_head_pos[1]));
    }
    

    isAtFood(food) {
        if (food.x === this.head.x && food.y === this.head.y) {
                return true;
        } else {
            return false;
        }
    }
    

    isCollided() {
        if (this.head.x < 0 || this.head.x >= Utils.position(Utils.width) || this.head.y < 0 || this.head.y >= Utils.position(Utils.height))
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