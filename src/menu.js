import linguini from "./images/linguini.png";
import pizza from "./images/pizza.png";
import spaghetti from "./images/spaghetti.png";
import plate from "./images/plate.svg";

const mainMenu = document.createElement("div");
mainMenu.classList.add("Menu");

function createMenuItem(title, image, description, price, serves) {
    const item = document.createElement("div");
    item.classList.add("item");
    const header = document.createElement("h2");
    header.textContent = title;
    
    const img = document.createElement("img");
    img.src = image;

    const descrip= document.createElement("div");
    descrip.classList.add("description");
    descrip.textContent = description;

    const pri = document.createElement("div");
    pri.classList.add("price");
    pri.textContent = price;
    
    const serve = document.createElement("div");
    serve.classList.add("serves");
    const serveText = document.createElement("div");
    serveText.textContent = serves;
    const plateIcon = document.createElement("img");
    plateIcon.classList.add("icon");
    plateIcon.src = plate;

    serve.appendChild(plateIcon);
    serve.appendChild(serveText);

    item.appendChild(header);
    item.appendChild(img);
    item.appendChild(descrip);
    item.appendChild(pri);
    item.appendChild(serve);

    return item;
}

const pageHeader = document.createElement("h1");
pageHeader.textContent = "Menu";

const menuItem1 = createMenuItem("Linguini", linguini, "Chefs specialty dish made with fresh hand made pasta.",
"$14.99", 1);
const menuItem2 = createMenuItem("Spaghetti", spaghetti, "Fresh pasta, fresh ingredients, covered in a Bolognese source to die for.",
"$10.99", 1);
const menuItem3 = createMenuItem("Classic Pizza", pizza, "Stone baked classic pizza cooked to perfection.",
"$12.99", 2);

mainMenu.appendChild(pageHeader);
mainMenu.appendChild(menuItem1);
mainMenu.appendChild(menuItem2);
mainMenu.appendChild(menuItem3);



export {
    mainMenu,
};