import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadMenu from "./menu.js";
import "./style.css";

const container = document.querySelector("#container");
container.append(loadAbout());
