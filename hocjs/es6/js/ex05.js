class User {
  name;
  email;
  #age = 32; //Private
  #data = ["Item 1", "Item 2", "Item 3"];
  static message = "F8";
  constructor(name, email) {
    console.log("User Constructor");
    this.name = name;
    this.email = email;
  }
  #getName() {
    return this.name;
  }
  #getEmail() {
    return this.email;
  }
  #getAge() {
    return this.#age;
  }
  getInfo() {
    return [this.#getName(), this.#getEmail(), this.#getAge()];
  }
  get latest() {
    return this.#data[this.#data.length - 1];
  }
  set latest(item) {
    this.#data.push(item);
  }
}
const user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user.getInfo());
// console.log(User.message);
user.latest = "Item 4";
console.log(user.latest);

//element.innerHTML ==> Lấy nội dung
//element.innerHTML = 'noi dung' ==> Cập nhật nội dung mới
