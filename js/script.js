import Snake from './Snake.js';
import Food from './Food.js';
import Utils from './Utils.js';

document.addEventListener("DOMContentLoaded", () => {

    let snake = new Snake();
    let food = new Food();
    Utils.setSizesCSS();
    
    document.addEventListener("keydown", (event) => {
        snake.appendDirection(event.key);
    })

    function mainLoop() {
        snake.processDirections();
        snake.moveHead();
        if (snake.isAtFood(food)) {
            snake.grow();
            food.move(snake);
        } else {
            snake.moveTail(snake.last_head_pos);
        }
        if (snake.isCollided()) {
            clearInterval(running);
        } else {
            snake.updatePosition();
        }
    }

    const running = setInterval(() => {
        mainLoop();
    }, Utils.delay);

});
