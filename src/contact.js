const contact = document.createElement("div");
contact.classList.add("Contact");


const container = document.createElement("div");
container.classList.add("contact-info");

const resHeader = document.createElement("h1");
resHeader.textContent = "Reservations";

const reservations = document.createElement("div");
reservations.textContent ="Call: +(44) 0121 456 8987";

const website = document.createElement("div");
website.textContent ="Or visit: https://www.reservationservice.com/Marios"
const otherHeader = document.createElement("h1");
otherHeader.textContent = "Other";
const email = document.createElement("div");
email.textContent = "Email: london@mariosmail.com";
const manager = document.createElement("div");
manager.textContent = "Business enquiries: +(44) 0121 466 8888";
const pobox = document.createElement("div");
pobox.textContent = "PO Box 1033";

container.appendChild(resHeader);
container.appendChild(reservations);
container.appendChild(website);
container.appendChild(otherHeader);
container.appendChild(email);
container.appendChild(manager);
container.appendChild(pobox);

contact.appendChild(container);

export {
    contact,
};

