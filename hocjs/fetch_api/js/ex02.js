const serverApi = `http://localhost:3000`;
const getUsers = async () => {
  const response = await fetch(serverApi + "/users");
  const users = await response.json();
  renderTable(users);
};
const getUser = async (id) => {
  try {
    if (!id) {
      throw new Error("ID not exist");
    }
    //Call API
    const response = await fetch(`${serverApi}/users/${id}`);
    if (!response.ok) {
      throw new Error("User not exist");
    }
    const user = await response.json();
    fillUserFormUpdate(user);
  } catch (e) {
    alert(e.message);
  }
};
const addUser = async (data) => {
  try {
    const response = await fetch(serverApi + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};
const updateUser = async (id, data) => {
  try {
    if (!id) {
      throw new Error("ID not exist");
    }
    const response = await fetch(`${serverApi}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Update Failed");
    }
    getUsers(); //Cập nhật lại table
    closeFormUpdate(); //Đóng form update
  } catch (e) {
    alert(e.message);
  }
};
const renderTable = (users) => {
  const tbody = document.querySelector(".table tbody");
  tbody.innerHTML = `${users
    .map(
      ({ id, name, email, status }, index) => `<tr>
        <td>${index + 1}</td>
        <td>${name.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
        <td>${email.replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</td>
        <td>
            <span class="badge bg-${
              status === "active" ? "success" : "warning"
            }">${status === "active" ? "Kích hoạt" : "Chưa kích hoạt"}</span>
        </td>
        <td><button class="btn btn-warning" data-id="${id}" data-action="edit">Sửa</button></td>
        <td><button class="btn btn-danger" data-id="${id}" data-action="delete">Xóa</button></td>
        </tr>`
    )
    .join("")}`;
};
const addEventFormSubmit = () => {
  const form = document.querySelector(".form-update");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(form)]);
    if (!form.dataset.id) {
      const status = await addUser(formData);
      if (status) {
        getUsers();
        form.reset();
      } else {
        alert("Thêm thất bại");
      }
    } else {
      const id = form.dataset.id;
      //Call API Update user
      updateUser(id, formData);
    }
  });
};
const addEventActionBtn = () => {
  const tbody = document.querySelector(".table tbody");
  tbody.addEventListener("click", ({ target }) => {
    if (target.dataset.action === "edit") {
      //Gọi hàm để xử lý cập nhật
      getUser(target.dataset.id);
    }
  });
};

const fillUserFormUpdate = ({ id, name, email, status }) => {
  const form = document.querySelector(".form-update");
  form.dataset.id = id;
  form.previousElementSibling.innerText = `Cập nhật người dùng`;
  form.elements.name.value = name;
  form.elements.email.value = email;
  form.elements.status.value = status;
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("btn", "btn-danger");
  closeBtn.innerText = "Hủy";
  if (!form.lastElementChild.classList.contains("btn-danger")) {
    form.append(closeBtn);
  }
  closeBtn.addEventListener("click", () => {
    closeFormUpdate();
    closeBtn.remove();
  });
};

const closeFormUpdate = () => {
  const form = document.querySelector(".form-update");
  form.reset();
  delete form.dataset.id;
  form.previousElementSibling.innerText = `Thêm người dùng`;
};

getUsers();
addEventFormSubmit();
addEventActionBtn();
