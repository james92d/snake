import Snake from './Snake.js';
import Food from './Food.js';
import Utils from './Utils.js';

document.addEventListener("DOMContentLoaded", () => {

    Utils.setSizesGame();
    Utils.setSizesCSS();
    
    let snake = new Snake();
    let food = new Food();

    document.addEventListener("keydown", (event) => {
        snake.appendDirection(event.key);
    })

    const ArrowUp = document.getElementById('arrow-up');
    const ArrowDown = document.getElementById('arrow-down');
    const ArrowLeft = document.getElementById('arrow-left');
    const ArrowRight = document.getElementById('arrow-right');

    ArrowUp.addEventListener('touchstart', function(event) {
        snake.appendDirection("ArrowUp");
    });

    ArrowDown.addEventListener('touchstart', function(event) {
        snake.appendDirection("ArrowDown");
    });

    ArrowLeft.addEventListener('touchstart', function(event) {
        snake.appendDirection("ArrowLeft");
    });

    ArrowRight.addEventListener('touchstart', function(event) {
        snake.appendDirection("ArrowRight");
    });

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
