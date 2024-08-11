import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export default function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const errorBag = {};
    if (!form.email) {
      errorBag.email = "Email không được để trống";
    }
    if (!form.password) {
      errorBag.password = "Password không được để trống";
    }
    setErrors(errorBag);
    if (!Object.keys(errorBag).length) {
      //Không có lỗi
      setUsers([...users, form]);
      setForm({
        email: "",
        password: "",
      });
    }
  };

  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-50 mx-auto py-3">
      <h2 className="text-center">Login</h2>
      <form action="" onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email..."
            onChange={handleChangeValue}
            value={form.email}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password..."
            onChange={handleChangeValue}
            value={form.password}
          />
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <hr />
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.email} - {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
