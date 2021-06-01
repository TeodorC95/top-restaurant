import "../style/style.css";
import CoverImg from "../img/restaurant.jpg";
import home from "./pageLoad";
import menu from "./menu";
import contact from "./contact";

const content = document.querySelector(".content");

function load(html) {
  content.innerHTML = html;
}

load(home());

content.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("nav-link")) return;
  const page = e.target.innerHTML;
  if (page === "Menu") load(menu());
  if (page === "Home") load(home());
  if (page === "Contact") load(contact());
});
