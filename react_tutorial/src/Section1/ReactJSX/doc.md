# What is JSX ?
- Viết tắt của Javascript XML
- Cho phép chúng ta viết, thêm phần tử HTML, và làm điều đó dễ dàng hơn trong React
- JSX là một mở rộng của JS dựa trên ES6 => được dịch sang JS thông thường at runtimes
- Không bắt buộc sử dụng nhưng JSX giúp ta viết React applications dễ dàng hơn

# Coding JSX
- Cho phép viết thẻ HTML trong JS và đặt chúng vào DOM mà không cần bất cứ phương thức createElement() hoặc appendChild()
- JSX converts HTML tags into react elements.

# Expressions (biểu thức) in JSX
- có thể viết expressions trong curly braces '{}'
- expressions có thể là một biến React, thuộc tính hoặc bất cứ expression hợp lệ nào khác.
- JSX thực thi expression và trả về kết quả.

# Inserting a Large Block of HTML
- Để viết HTML trên nhiều dòng, đặt HTML trong dấu ngoặc đơn.
- phải có một phần tử cha wrap toàn bộ HTML code.
- có thể sử dụng "fragment - <></>" để ngắt nhiều dòng => ngăn việc thêm extra note vào DOM một cách không cần thiết.

# Elements must be Closed
- JSX tuân theo quy tắc XML => HTML element phải được đóng đúng cách nếu không sẽ đưa ra lỗi
- Đóng các empty elements với />
- const myElement = <input type="text" />;

# Attribute class = className
- JSX được hiển thị dưới dạng JS, thuộc tính class trùng với keyword class của JS => Không được phép sử dụng trong JSX => dùng className để thay thế.

# Conditions - if statement
- React hỗ trợ if nhưng không hỗ trợ bên trong JSX => muốn sử dụng phải đặt câu lệnh if ngoài JSX hoặc thay bằng toán tử ba ngôi.

- Ví dụ 1:
const x = 5;
let text = "Goodbye";
if (x < 10) {
    text = "Hello";
}

- Ví dụ 2:
const myElement = <h1>{text}</h1>;
const x = 5;
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

- Để nhúng JS vào JSX, JS phải được bọc trong {}