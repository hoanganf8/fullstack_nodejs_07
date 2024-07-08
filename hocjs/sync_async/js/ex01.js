// alert("Học JS không khó");
// confirm("Chắc chưa?");
// console.log("Ok chưa?");
// console.log("Step 1");
// console.log("Step 2");
// setTimeout(function () {
//   console.log("ok chua?");
// }, 0);
// console.log("Step 3");
// console.log("Step 4");

//ES6 ==> Promise
//Callback ==> Callback Hell
//Promise ==> Vẫn tồn tại callback nhưng sẽ viết dưới dạng Chaining
//object.method1().method2().method3()

//Các trạng thái của Promise
// - pending
// - fulfilled
// - rejected

//Để làm việc với Promise có 2 bước
// - 1. Khởi tạo object promise và đưa dữ liệu vào Promise
// - 2. Gọi Promise và trả về kết quả

// const getA = (callback) => {
//   setTimeout(() => {
//     const user = {
//       name: "Hoàng An",
//       email: "hoangan.web@gmail.com",
//     };
//     callback(user);
//   }, 3000);
// };
// const getB = (callback) => {
//   setTimeout(() => {
//     const course = {
//       name: "Fullstack Offline",
//     };
//     callback(course);
//   }, 1000);
// };

// getA((data) => {
//   console.log(data);
//   getB((data) => {
//     console.log(data);
//   });
// });

// const getA = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = {
//         name: "Hoàng An",
//         email: "hoangan.web@gmail.com",
//       };
//       //Nếu dữ liệu trả về thành công ==> gọi hàm resolve để trả về
//       //Nếu thất bại ==> gọi hàm reject để trả về lỗi
//       //   reject("Lỗi rồi");
//       resolve(user);
//     }, 3000);
//   });
// };

// const getB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const course = {
//         name: "Fullstack Offline",
//       };
//       resolve(course);
//     }, 1000);
//   });
// };
// getA()
//   .then((dataA) => {
//     console.log(dataA);
//     return getB();
//   })
//   .then((dataB) => {
//     console.log(dataB);
//   });

const getUser = (userId) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 1000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 2000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 3000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 4000,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(({ id }) => userId === id);
      resolve(user);
    }, 1000);
  });
};
const ids = [1, 3, 4, 2];
//Yêu cầu: Tính tổng thu nhập của 3 user trên
//Lưu ý: Không dùng async await, Promise.all
// const getTotal = () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const id = ids[i];
//     const isLast = i === ids.length - 1;
//     const promise = getUser(id).then((data) => {
//       const salary = data.salary;
//       total += salary;
//       return total;
//     });
//     if (isLast) {
//       return promise;
//     }
//   }
// };
// getTotal().then((data) => {
//   console.log(data);
// });

//Promise.all() ==> Thực thi nhiều promise cùng 1 lúc và trả về 1 mảng mới chứa các dữ liệu đã được resolve
// const promiseArr = ids.map((id) => getUser(id));
// Promise.all(promiseArr).then((users) => {
//   const total = users.reduce((total, user) => total + user.salary, 0);
//   console.log(total);
// });

//Promise.resolve()
//Promise.reject()

//try catch
try {
  //   something();
  let a;
  if (!a) {
    throw new Error("Biến a phải có dữ liệu");
  }
  console.log("Ok chưa?");
} catch (e) {
  //   console.log(e.message);
  document.body.innerHTML = `<h3 style="color: red;">${e.message}</h3>`;
} finally {
  console.log("Đã xong");
}
console.log("F8");
