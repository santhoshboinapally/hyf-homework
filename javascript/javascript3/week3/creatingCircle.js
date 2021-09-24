//Paint a circle to a canvas element.
let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");
ctx.beginPath();
ctx.arc(200, 200, 55, 0, 2 * Math.PI);
ctx.fillStyle = "aqua";
ctx.fill();

//Creating Circle Class
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
}
const cir1 = new Circle(80, 80, 55, 0, 2 * Math.PI, "red");
const cir2 = new Circle(350, 150, 65, 0, 3 * Math.PI, "yellow");
const cir3 = new Circle(60, 250, 10, 0, 3 * Math.PI, "green");
const cir4 = new Circle(50, 150, 35, 0, 9 * Math.PI, "blue");
cir1.draw(ctx);
cir2.draw(ctx);
cir3.draw(ctx);
cir4.draw(ctx);
cir5.draw(ctx);