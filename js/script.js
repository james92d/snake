import Snake from './Snake.js';

document.addEventListener("DOMContentLoaded", () => {
    let snake = new Snake();

    function mainLoop() {
        snake.move();
        snake.updatePosition();
        console.log(snake.head.x);
    }

    setInterval(() => {
        mainLoop();
    }, 400);
});
