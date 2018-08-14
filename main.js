var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('this is x', this.x);
    };
    return Point;
}());
var point = new Point(9);
point.draw();
