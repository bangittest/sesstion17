class Temperature {
    constructor(C) {
        this.C = C
        this.F = this.C + 273.15
        this.Kevin = this.C * 1.8 + 32
    }
}

let temperature1 = new Temperature(100);
console.log(temperature1);
