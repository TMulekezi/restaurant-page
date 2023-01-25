import pasta from "./images/pasta.png";
import './style.css';
import {mainMenu} from './menu.js';
import {contact} from './contact.js';

function createButton(name, className) {
    const button = document.createElement("button");
    button.textContent = name;
    button.classList.add(className);
    return button;
}

function createMainPage() {
    const mainPage = document.createElement("div");
    mainPage.classList.add("Home");

    const info = document.createElement("div");
    info.classList.add("info");
    info.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti accusamus quaerat esse voluptates. Laborum dolores a recusandae dolor voluptate esse minima accusamus enim nostrum consequatur aliquid, quos eum, ab cupiditate.";

    const infoTitle = document.createElement("h2");
    infoTitle.textContent = "About Us";

    const mainImage = document.createElement("img");
    mainImage.src = pasta;
    mainImage.alt = "image of pasta";



    mainPage.appendChild(mainImage);
    mainPage.appendChild(infoTitle);
    mainPage.appendChild(info);
    return mainPage;
}

function currentPage() {
    if (document.querySelector(".Home")) {
        return document.querySelector(".Home");
    } else if (document.querySelector(".Menu")) {
        return document.querySelector(".Menu");
    } else {
        return document.querySelector(".Contact");
    }
}

function addEvent(button) {
    button.addEventListener("click", handleEvent );
}

function handleEvent() {
    const content = document.querySelector("#content");
    const button = this;
    const newPage = button.getAttribute("class");
    const page = currentPage();

    if (newPage === "home-button") {
        content.replaceChild(createMainPage(),page);
    } else if (newPage === "menu-button") {
        content.replaceChild(mainMenu, page);
    } else {
        content.replaceChild(contact, page);
    }

}


const header = document.createElement("div");
header.classList.add("header");

const pageTitle = document.createElement("h1");
pageTitle.textContent = "Mario's";

const buttons = document.createElement("div");
buttons.classList.add("nav");

const homeButton = createButton("Home","home-button");
const menuButton = createButton("Menu","menu-button");
const contactsButton = createButton("Contact","contact-button");

addEvent(homeButton);
addEvent(menuButton);
addEvent(contactsButton);






buttons.appendChild(homeButton);
buttons.appendChild(menuButton);
buttons.appendChild(contactsButton);
header.appendChild(pageTitle);
header.appendChild(buttons);




const footer = document.createElement("div");
footer.classList.add("footer");
const footerHeader = document.createElement("h2");
footerHeader.textContent = "Location";

const footerInfo = document.createElement("div");
footerInfo.classList.add("info");
footerInfo.textContent = "Find us at: 10 Downing St, London SW1A 2AA";

footer.appendChild(footerHeader);
footer.appendChild(footerInfo);

const content = document.getElementById("content");


content.appendChild(header);
content.appendChild(createMainPage());
content.appendChild(footer);




