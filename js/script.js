document.addEventListener("DOMContentLoaded", () => {
    const head = document.querySelector(".green-square");
    const speed = 50; // Movement speed in pixels
    let direction = "right"; // Initial direction
    let positions = []; // Array to store head's previous positions

    // Set the initial position of the snake's head
    head.style.position = "absolute";
    head.style.top = "100px";
    head.style.left = "100px";

    // Listen for arrow key presses to change direction
    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowUp":
                if (direction !== "down") direction = "up";
                break;
            case "ArrowDown":
                if (direction !== "up") direction = "down";
                break;
            case "ArrowLeft":
                if (direction !== "right") direction = "left";
                break;
            case "ArrowRight":
                if (direction !== "left") direction = "right";
                break;
        }
    });

    // Move the head at a set interval
    function moveSnake() {
        let top = parseInt(head.style.top);
        let left = parseInt(head.style.left);

        // Update the head's position based on direction
        switch (direction) {
            case "up":
                top -= speed;
                break;
            case "down":
                top += speed;
                break;
            case "left":
                left -= speed;
                break;
            case "right":
                left += speed;
                break;
        }

        // Set the new position of the head
        head.style.top = `${top}px`;
        head.style.left = `${left}px`;

        // Store the head's position in the positions array
        positions.unshift({ top, left });

        // Optional: Handle body movement here
        updateBody();

        // Remove old positions to avoid memory leak
        if (positions.length > snakeLength) positions.pop();
    }

    // Move body parts to follow the head
    function updateBody() {
        // Select all body parts (e.g., divs with class "snake-body")
        const bodyParts = document.querySelectorAll(".snake-body");
        
        // Update each body part's position to follow the previous segment
        bodyParts.forEach((part, index) => {
            if (positions[index + 1]) {
                part.style.top = `${positions[index + 1].top}px`;
                part.style.left = `${positions[index + 1].left}px`;
            }
        });
    }

    // Start the movement loop
    setInterval(moveSnake, 200); // Adjust the interval speed as needed
});
