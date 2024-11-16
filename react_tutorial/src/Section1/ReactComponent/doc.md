# Component
- Các component giống như các hàm trả về các phần tử HTML
- Là các đoạn mã độc lập, có thể tái sử dụng
- Phục vụ cùng mục đích như các hàm JS, nhưng hoạt động độc lập và trả về HTML.
- Components có 2 loại: class components và function components.
- Trong các React code base cũ, phần lớn sử dụng class components. => được khuyên sử dụng function componens cùng với hook (được bổ sung vào trong React 16.8)
- Tên components phải bắt đầu với uppercase letter

# Class Component
- phải include câu lệnh mở rộng React.Component
- câu lệnh này tạo ra inheritance cho React.Component 
- câu lệnh này cấp cho component của ta các quyền truy cập vào các phương thức của React.Component.
- components cũng yêu cầu phương thức render() để trả về HTML

# Function Component
- cũng trả về HTML và hoạt động giống như class Component
- có thể được ít mã hơn, dễ hiểu hơn và được ưu tiên hơn

# Rendering a Component
- Hiện tại nếu ta có một component Car trả về HTML code
- Để dùng component trong application, dùng syntax <Car />
- Ví dụ: Hiển thị component Car trong 'root' element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

# Props
- Components có thể được truyền dưới dạng props, viết tắt của properties
- Props giống như các đối số của hàm, ta truyền chúng vào component dưới dạng thuộc tính.

# Components in Components

# Component in files
- React chủ yếu là việc tái sử dụng mã và ta có thể chia component ra các tệp riêng biệt.
- Tạo một tệp mới có phần mở rộng .js và đặt mã vào trong
- Filename bắt đầu bằng một uppercase character
- Để sử dụng component, ta phải import file vào application.