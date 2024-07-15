const serverApi = `http://localhost:3000`;
const getUsers = async (params = {}) => {
  let query = new URLSearchParams(params).toString();
  if (query) {
    query = "?" + query;
  }
  const response = await fetch(serverApi + "/users" + query);
  const users = await response.json();

  //Tính tổng số trang = Tổng số bản ghi / Số bản ghi của 1 trang (limit)
  const totalRecords = response.headers.get("x-total-count");
  data.totalPages = Math.ceil(totalRecords / params._limit);
  data.recordNumber = users.length;
  renderTable(users);
  renderPagination(data.totalPages);
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
    getUsers(params); //Cập nhật lại table
    closeFormUpdate(); //Đóng form update
  } catch (e) {
    alert(e.message);
  }
};
const deleteUser = (id) => {
  Swal.fire({
    title: "Bạn chắc chưa?",
    text: "Nếu xóa thì không lấy lại được đâu!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ok, Xóa đi!",
    cancelButtonText: "Huỷ",
  }).then(async (result) => {
    if (result.isConfirmed) {
      //Call API
      const response = await fetch(`${serverApi}/users/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        if (data.totalPages === params._page && data.recordNumber === 1) {
          //Trang cuối
          params._page--;
        }
        getUsers(params);
        Swal.fire({
          title: "Xóa rồi!",
          text: "Người dùng đã bị xóa.",
          icon: "success",
        });
      }
    }
  });
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
const renderPagination = (totalPages) => {
  const paginationView = document.querySelector(".pagination-view");
  paginationView.innerHTML = `<ul class="pagination pagination-sm">
      ${
        params._page > 1
          ? `<li class="page-item">
        <a class="page-link page-prev" href="#" aria-label="Previous">
          &laquo;
        </a>
      </li>`
          : ""
      }
      ${Array.from(Array(totalPages).keys())
        .map(
          (_, index) =>
            `<li class="page-item"><a class="page-link page-number ${
              index === params._page - 1 ? "active" : ""
            }" href="#">${index + 1}</a></li>`
        )
        .join("")}
      ${
        params._page < totalPages
          ? `<li class="page-item">
        <a class="page-link page-next" href="#" aria-label="Next">
          &raquo;
        </a>
      </li>`
          : ""
      }
    </ul>`;
};
const addEventFormSubmit = () => {
  const form = document.querySelector(".form-update");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(form)]);
    if (!form.dataset.id) {
      const status = await addUser(formData);
      if (status) {
        params._page = 1;
        params._order = "desc";
        getUsers(params);
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
    if (target.dataset.action === "delete") {
      deleteUser(target.dataset.id);
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

const addEventFilterForm = () => {
  const form = document.querySelector(".filter-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { status, keyword } = Object.fromEntries([...new FormData(form)]);
    if (status === "active" || status === "inactive") {
      params.status = status;
    } else {
      delete params.status;
    }
    if (keyword) {
      params.q = keyword;
    } else {
      delete params.q;
    }
    getUsers(params);
  });
};

const addEventSort = () => {
  const sortItems = document.querySelectorAll(".sort-item");
  sortItems.forEach((sortItem) => {
    sortItem.addEventListener("click", (e) => {
      const itemActive = document.querySelector(".sort-item.active");
      if (itemActive) {
        itemActive.classList.remove("active");
      }
      e.target.classList.add("active");
      const value = e.target.dataset.value;
      params._order = value === "latest" ? "desc" : "asc";
      getUsers(params);
    });
  });
};

const addEventChangePagination = () => {
  const paginationView = document.querySelector(".pagination-view");
  paginationView.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("page-number")) {
      const pageNumber = +e.target.innerText;
      params._page = pageNumber;
      getUsers(params);
    }
    if (e.target.classList.contains("page-prev")) {
      params._page--;
      getUsers(params);
    }
    if (e.target.classList.contains("page-next")) {
      params._page++;
      getUsers(params);
    }
  });
};

const params = { _sort: "id", _order: "desc", _limit: 2, _page: 1 };
const data = {
  totalPages: 1,
  recordNumber: 0,
};
getUsers(params);
addEventFormSubmit();
addEventActionBtn();
addEventFilterForm();
addEventSort();
addEventChangePagination();
