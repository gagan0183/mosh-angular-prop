interface Point {
    x: number;
    y: number
}

let drawPoint = (point: Point) => {
    console.log(point.x);
}

drawPoint({
    x: 1,
    y: 1
});