function createMain() {
    const main = document.createElement('main');
    main.id = "main";
    main.className = "home";
    const h1 = document.createElement('h1');
    h1.innerText = 'The best Chicken in New Mexico';
    main.appendChild(h1);

    const coverImage = createImage('cover', './images/restaurant.png', "Photo pf the restaurant's intreior");
    main.appendChild(coverImage);

    const h2 = document.createElement('h2');
    h2.innerText = 'Finest ingredients are brought together with care, \nthen slow-cooked to perfection.';
    main.appendChild(h2);

    return main;
}

function createImage(id, src, alt) {
    const image = document.createElement('img');
    image.id = id;
    image.src = src;
    image.alt = alt;

    return image;
}

function setButtonActive(id) {
    const activeButton = document.querySelector('.menu.active');
    if(activeButton) activeButton.classList.remove('active');
    
    const button = document.getElementById(id);
    button.classList.add('active');
}

function loadHome() {
    document.title = "Home::Los Pollos Hermanos";
    const content = document.getElementById('content');
    let previousSite = document.getElementById("main");
    if (previousSite != undefined) content.removeChild(previousSite);
    const main = createMain();
    content.appendChild(main);
    setButtonActive('home');
}

export default loadHome;
