import Form from "./components/Form";
export default function App() {
  //   return <Counter />;
  return <Form />;
}
/*
State: 
- Thay đổi dữ liệu trong nội bộ component
- Khi state thay đổi ==> Component sẽ bị Re-render (Gọi lại)
- Không được thay đổi trực tiếp state mà phải thông qua hàm setState

Trong Funcional Component ==> Chỉ làm việc được với JSX, Props

Nếu muốn làm việc với State, Lifecycle,... ==> Sử dụng React Hook (Phiên bản 16.8 trở lên)

Hook là gì?
- Hàm đặc biệt cho phép functional component sử dụng các tính năng của ReactJS
- Bắt đầu bằng từ khóa use
- Chỉ sử dụng được trong Funcional Component
- Cho phép lập trình viên tự định nghĩa
*/
