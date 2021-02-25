function createMain() {
    const main = document.createElement('main');
    main.id = "main";
    main.className = "contact";
    const h1 = document.createElement('h1');
    h1.innerText = 'Call us now at';
    main.appendChild(h1);

    const phoneNumber = document.createElement('h1');
    phoneNumber.textContent = "+1-555-7182-271";
    phoneNumber.classList = "phone-number";
    main.appendChild(phoneNumber);

    const h2 = document.createElement('h2');
    h2.innerText = 'or visit in Albuquerque, New Mexico, USA';
    main.appendChild(h2);

    const disclaimer = document.createElement('p');
    disclaimer.textContent = 
        "(The restaurant, phone number and location are fake) Made for The Odin Project by SpicyHolo";
    disclaimer.className = 'disclaimer';
    main.appendChild(disclaimer);
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

function loadContact() {
    document.title = "Contact::Los Pollos Hermanos";
    const content = document.getElementById('content');
    let previousSite = document.getElementById("main");
    if (previousSite != undefined) content.removeChild(previousSite);
    const main = createMain();
    content.appendChild(main);
    setButtonActive('contact');
}

export default loadContact;