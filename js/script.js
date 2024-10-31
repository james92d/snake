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
        if (snake.isAtFood(food)) {
            snake.grow();
            food.move(snake.tail);
        } else {
            snake.move(snake);
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
