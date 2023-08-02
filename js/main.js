//cú pháp khởi tạo đối tượng
//cách 1;
let tuanAnh = {
    name: "Lê Tuấn Anh",
    age: 18,
    class: "HN-JV230630",
    move: () => {
        console.log("di chuyển chậm");
    }
}
console.log(tuanAnh);
//truy cập 1 thuộc tính hoặc phương thức sử dụng dấu
console.log(tuanAnh.move());
tuanAnh.age = 20;
tuanAnh.maSv = "SV001"
console.log(tuanAnh);
//dinh nghia giong ham de dinh nghia khai bao 1 lop
function students(name, age, className, maSv) {
    // console.log(this);//this dai dien cho doi tuong sinh ra tu lop /ham do
    this.name = name;//gan gia tri tham so name cho thuoc tinh fullname
    this.age = age;
    this.className = className;
    this.maSv = maSv;
    this.move = () => {
        console.log("di chuyen cham");
    }
}

//cach 3 su dung class trong es6
class Student {
    // fullname;
    // age;
    // className;
    // maSv;
    constructor(fullname, age, className, maSv) {
        this.fullname = fullname;
        this.age = age;
        this.className = className
        this.maSv = maSv
    }
    move = () => {
        console.log("di chuyen cham");
    }
}
let students1 = new students("Ngyen Van A", 20, "JV06", "SV002")
console.log(students1);
let students2 = new students("Nguyen vanB", 26, "JV283", "SV9392")
console.log(students2);
for (const key in students1) {
    console.log(students1[key]);

}



let hung = new students("Ho Xuan Hung", 24, "JV06", "SV004")
console.log(hung);
let tuanAnh1 = new students("Le Tuan Anh", 18, "JV06", "SV001")
console.log(tuanAnh1);

let bang = new students("Nguyen Luong Bang", 22, "JV06", "SV005")
console.log(bang);

//duyet doi tuong
for (const key in tuanAnh1) {
    console.log(tuanAnh1[key]);

}


// //tao lop hinh hoc
// class Shape {
//     constructor(color, area, perimeter) {
//         this.color = color
//         this.area = area
//         this.perimeter = perimeter
//     }
// }

// class Triangle extends Shape {
//     constructor(a, b, c, color, area, perimeter) {
//         super(color, area, perimeter);//goi den constructor cua lop shape
//         this.a = a
//         this.b = b;
//         this.c = c;
//         this.getPerimeter = () => {
//             return this.a + this.b + this.c;
//         }
//         this.getAre = () => {
//             //cong thuc heron
//             //tinh nua chu vi
//             let p = this.getPerimeter / 2;
//             return Math.sqrt(p * (p - a) * (p - b) * (p - c))
//         }
//     }
// }

// //tao lop hinh tron'
// class Circle extends Shape {
//     constructor(radius, color, area, perimeter) {
//         super(color, area, perimeter);
//         this.radius = radius;
//         this.getPerimeter = () => {
//             this.perimeter = Math.PI * 2 * this.radius
//         }
//     }
// }
// console.log();
// class Rectanghe extends Shape {
//     constructor(a, b, color, area, perimeter) {
//         super(color, area, perimeter)
//         this.a = a
//         this.b = b
//         //tinh dien tich
//         this.getAre = ()=>{
//             return this.a * this.b
//         }
//     }
// }
// class Square extends Rectanghe {
//     constructor(color, area, perimeter) {
//         super(a, a, color, area, perimeter)
//     }
// }
let obj = { "màu mũ": "xanh lá cây" };
console.log(obj["màu mũ"]); //  xanh lá cây
console.log(obj);
// duyệt dối tượng 
for (const key in tuanAnh1) {
    console.log(tuanAnh1[key]);
}

// tạo lớp hình học
class Shape {
    constructor(color) {
        this.color = color;
        this.area = 0;
        this.perimeter = 0;
    }
}

//  tạo lớp hình tam giác 
class Triangle extends Shape {
    constructor(a, b, c, color) {
        super(color); // gọi đến constructor của lớp Shape
        this.a = a;
        this.b = b;
        this.c = c;
        // tính chu vi và diện tích
        this.perimeter = this.a + this.b + this.c;
        this.area = Math.sqrt(this.perimeter / 2 * (this.perimeter / 2 - a) * (this.perimeter / 2 - b) * (this.perimeter / 2 - c));
        // this.getPerimeter=()=>{
        //     console.log(this.perimeter);
        // }
        // this.getArea=()=>{
        //     // công thức heron 
        //     // tính nửa chu vi
        //     console.log(this.area)
        // } 
    }
}
// tạo lớp hinh tròn Circle
class Circle extends Shape {
    constructor(radius, color) {
        super(color); // gọi đến constructor của lớp Shape
        this.radius = radius;
        this.perimeter = Math.PI * 2 * this.radius;
        this.area = Math.PI * this.radius * this.radius

    }
}
// tạo lớp hình chữ nhật Rectangle

class Rectangle extends Shape {
    constructor(a, b, color) {
        super(color); // gọi đến constructor của lớp Shape
        this.a = a;
        this.b = b;
        // tính diện tích  va chu vi
        this.perimeter = 2 * (this.a + this.b);
        this.area = this.a * this.b
        // this.getArea=()=>{
        //     return this.a*this.b
        // }  
    }
}
// lớp hình vuông Square
class Square extends Rectangle {
    constructor(a, color) {
        super(a, a, color); // gọi đến constructor của lớp Shape       
    }
}

let triangle1 = new Triangle(3, 4, 5, "Red");
triangle1.getArea();
triangle1.getPerimeter();


let square1 = new Square(5, "Blue");
console.log(square1);