import "./styles.css";
import "./index.html";
import "./images/hero.jpg";
import "./images/staff.jpg";
import Home from "./modules/home.js";
import About from "./modules/about.js";
import Menu from "./modules/menu.js";

const content = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const menuBtn = document.getElementById("menu-btn");

content.appendChild(Home);

homeBtn.addEventListener("click", () => showContent("homeBtn"));
aboutBtn.addEventListener("click", () => showContent("aboutBtn"));
menuBtn.addEventListener("click", () => showContent("menuBtn"));

function showContent(currentTab) {
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  }
  if (currentTab == "homeBtn") content.appendChild(Home);
  else if (currentTab == "aboutBtn") content.appendChild(About);
  else if (currentTab == "menuBtn") content.appendChild(Menu);
}
