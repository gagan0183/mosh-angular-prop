class Point {
    x: number;
    y: number;

    constructor(x?: number, y ?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('this is x', this.x);
    }
}

let point = new Point(9);
point.draw();