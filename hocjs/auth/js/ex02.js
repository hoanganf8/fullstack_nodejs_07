//Submit form ==> Lấy dữ liệu ==> Validate
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = Object.fromEntries([...new FormData(e.target)]);
  const errors = {};
  if (!email) {
    errors.email = "Vui lòng nhập email";
  }
  if (!password) {
    errors.password = "Vui lòng nhập mật khẩu";
  }
  const errorElList = loginForm.querySelectorAll(".error");
  errorElList.forEach((errorEl) => {
    errorEl.innerText = "";
  });
  if (Object.keys(errors).length) {
    Object.keys(errors).forEach((key) => {
      const error = errors[key];
      const errorEl = loginForm.querySelector(`.error-${key}`);
      if (errorEl) {
        errorEl.innerText = error;
      }
    });
  } else {
    //Call API
    //https://api.escuelajs.co/api/v1/auth/login
  }
});
