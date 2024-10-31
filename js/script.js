import Snake from './Snake.js';
import Food from './Food.js';

document.addEventListener("DOMContentLoaded", () => {
    let snake = new Snake();
    let food = new Food();

    document.addEventListener("keydown", (event) => {
        snake.changeDirection(event.key);
    })

    function mainLoop() {
        
        if (snake.isAtFood(food)) {
            snake.grow();
            food.move();
        } else {
            snake.move();
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
