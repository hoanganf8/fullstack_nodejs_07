//Async Function
// Resolve Promise không cần dùng then (Ko có callback)
// Cách viết như đồng bộ (Tuần tự)

// Lưu ý: Hàm async luôn trả về 1 promise
// const something = async () => {
//   return "F8";
// };
// console.log(something());

const getA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        name: "Hoàng An",
        email: "hoangan.web@gmail.com",
      };
      //Nếu dữ liệu trả về thành công ==> gọi hàm resolve để trả về
      //Nếu thất bại ==> gọi hàm reject để trả về lỗi
      reject("Lỗi rồi");
      resolve(user);
    }, 3000);
  });
};
// const handleGetA = async () => {
//   const user = await getA();
//   console.log(user);
// };
// handleGetA();

(async () => {
  try {
    const user = await getA();
    console.log(user);
  } catch (e) {
    console.log(e);
  }
})();

//Buổi sau:
// Tìm hiểu thư viện json-server
// Ôn lại: HTTP Request, HTTP Response
// Tìm hiểu hàm fetch()
