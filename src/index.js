import loadPage from './modules/initial-page.js';
import loadHome from './modules/home.js';
import loadMenu from './modules/menu.js';
import loadContact from './modules/contact.js';

initializePage();

function addEvents() {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');
    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    contactButton.addEventListener('click', loadContact);
}

function initializePage() {
    loadPage();
    loadHome();
    addEvents();
}
