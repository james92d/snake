import Snake from './Snake.js';

document.addEventListener("DOMContentLoaded", () => {
    let snake = new Snake();

    function mainLoop() {
        snake.move();
        snake.updatePosition();
        console.log(snake.head.x);
    }

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                snake.direction = "down";
                break;
            case "ArrowDown":
                snake.direction = "up";
                break;
            case "ArrowLeft":
                snake.direction = "left";
                break;
            case "ArrowRight":
                snake.direction = "right";
                break;
            default:
                // Ignore any other keys
                return;
        }
    })

    setInterval(() => {
        mainLoop();
    }, 400);
});
