import moment from "moment";
import "./assets/style.css";
import "./assets/home.scss";
import config from "./config.json";
import img01 from "./assets/img/5ce5d73fb2f7323808.jpg";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const { SERVER_API } = config;
  console.log(process.env.APP_NAME);
  console.log(process.env.SERVER_API);

  return `
  ${Header()}
  <div class="container">
    <h1>Hello World</h1>
    <h2>Bây giờ là: ${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
    <h3>Server API: ${SERVER_API}</h3>
    <img src="${img01}" alt="" width=200 />
  </div>
  ${Footer()}
  `;
}
