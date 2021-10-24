console.log("inside warmup file");
//Circle calculator
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
const circle = new Circle(10);
console.log(`Diameter : ${circle.getDiameter()},\nCircumference : ${circle.getCircumference()},\nArea :  ${circle.getArea()}`);