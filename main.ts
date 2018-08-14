class Point {
    constructor(private x?: number, private y ?: number) {
    }

    draw() {
        console.log('this is x', this.x);
    }
}

let point = new Point(9);
point.draw();