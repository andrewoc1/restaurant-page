import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadMenu from "./menu.js";
import "./style.css";

const container = document.querySelector("#container");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", () => {
  container.replaceChildren(loadHome());
});

menuBtn.addEventListener("click", () => {
  container.replaceChildren(loadMenu());
});

aboutBtn.addEventListener("click", () => {
  container.replaceChildren(loadAbout());
});
