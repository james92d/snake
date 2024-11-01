class Utils {
    static width = 15;
    static height = 9;
    static size = 40;
    static delay = 250;

    static position(pos) {
        return pos * Utils.size;
    } 

    static getRandomPos(range) {
        return Math.floor(Math.random() * range) * Utils.size;
    }

    static setSizesCSS() {
        const style = document.createElement('style');
        style.innerHTML = `
            .snake-body-part { width: ${this.size}px; height: ${this.size}px; }
            .food { width: ${this.size}px; height: ${this.size}px; }
            #game-container {width: ${this.size * this.width}px;  height: ${this.size * this.height}px;}
        `;
        document.head.appendChild(style);
    }
}

export default Utils;