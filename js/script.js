import Snake from './Snake.js';
import Food from './Food.js';

document.addEventListener("DOMContentLoaded", () => {
    let snake = new Snake();
    let food = new Food();

    document.addEventListener("keydown", (event) => {
        snake.appendDirection(event.key);
    })

    function mainLoop() {
        snake.processDirections();
        snake.last_head_pos = snake.getlastHeadPos();
        snake.moveHead();
        if (snake.isAtFood(food)) {
            snake.grow();
            food.move(snake.tail);
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
    }, 250);
});
