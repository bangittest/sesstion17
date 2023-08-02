
class Rectangle {
    constructor(a, b) {

        this.a = a;
        this.b = b;
        // tính diện tích  va chu vi
        this.perimeter = 2 * (this.a + this.b);
        this.area = this.a * this.b
    }
}
let rectangle1 = new Rectangle(10, 20);
console.log(rectangle1);




