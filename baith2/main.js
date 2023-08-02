let Circle = function (radius) {
    this.radius = radius;
    this.getRadius = function () {
        return radius;
    }
    //tinh dien tich
    this.getArea = function () {
        return Math.PI * radius * radius;
    }
};
let circle = new Circle(2);
let radius = circle.getRadius(); // 2
let area = circle.getArea(); // 
alert("radius: " + radius + "; area: " + area);
