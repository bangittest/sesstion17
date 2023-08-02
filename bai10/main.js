
class Mobile {
    // Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv).
    pin;
    // Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
    tinnhandangsoan = "";
    // Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
    tinnhantronghopthuden = [];
    // Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
    tinnhandagui = [];
    trangthai = true;

    constructor(pin) {
        if (this.pin <= 100 && this.pin > 0) {  // (tối đa 100 đv).
            pin;
            this.pin = pin;
        } else {
            this.pin = 80;
        }
        // Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
        this.kiemTraBatTat = () => {
            if (!this.trangthai) {
                return;
            }
            this.pin--;
            return this.trangthai;
        }

        // Có chức năng bật và tắt điện thoại.
        this.batTatDienThoai = (value) => {
            if (!this.trangthai) {
                return;
            }
            this.trangthai = value;
            this.pin--;
        }

        // Có chức năng xạc pin điện thoại.
        this.xacpindienthoai = () => {
            if (this.pin == 100) {
                return this.pin;
            }
            this.pin++;
        }

        // Có chức năng soạn tin nhắn.
        this.soantinnhan = (value) => {
            if (!this.trangthai) {
                return;
            }
            this.tinnhandangsoan = value;
            this.pin--;
        }

        // Có chức năng nhận tin nhắn từ một chiếc mobile khác.
        this.nhantinnhan = (value) => {
            if (!this.trangthai) {
                return;
            }
            this.tinnhantronghopthuden.push(value);
            this.pin--;
        }

        // Có chức năng gửi tin nhắn tới một chiếc mobile khác.
        this.guitinnhan = (value, phone) => {
            if (!this.trangthai) {
                return;
            }
            this.tinnhandagui.push(value);
            phone.tinnhantronghopthuden.push(value);
            this.pin--;
        }

        // Có chức năng xem tin trong hộp thư đến.
        this.xemtin = () => {
            if (!this.trangthai) {
                return;
            }
            this.pin--;
            return this.tinnhantronghopthuden;

        }

        // Có chức năng xem tin đã gửi.
        this.xemtindagui = () => {
            if (!this.trangthai) {
                return;
            }
            this.pin--;
            return this.tinnhantronghopthuden;
        }
        // Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị. : pin--
        // Các chức năng không thể hoạt động nếu điện thoại chưa bật. : check trang thai = true =>>>> if...return
    }
}

// Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:
// Có một chiếc điện thoại nokia và một chiếc iphone
let nokia = new Mobile(25)
let iphone = new Mobile(43)

// Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ   
nokia.soantinnhan("viết gì đây");

// và gửi cho chiếc iphone
nokia.guitinnhan(nokia.tinnhandangsoan, iphone);

// Chiếc iphone kiểm tra inbox
let ketqua = iphone.xemtindagui();
//ketqua =  []

// và hiển thị tin đó.
console.log(ketqua);