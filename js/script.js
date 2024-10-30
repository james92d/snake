import Snake from './Snake.js';

document.addEventListener("DOMContentLoaded", () => {
    let snake = new Snake();

    function mainLoop() {
        snake.move();
        snake.updatePosition();
        console.log(snake.head.x);
    }

    document.addEventListener("keydown", (event) => {
        snake.changeDirection(event.key);
    })

    setInterval(() => {
        mainLoop();
    }, 400);
});
