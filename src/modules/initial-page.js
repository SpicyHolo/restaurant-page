function createHeader() {
    const header = document.createElement('header');

    //Logo
    const logo = document.createElement('div');
    logo.id = 'logo';

    const leftText = document.createElement('div');
    leftText.className = 'logo-text';
    leftText.textContent = 'Los pollos';
    logo.appendChild(leftText);

    const logoImage = createImage('logo-image', './images/Logo.png', 'Logo');
    logo.appendChild(logoImage);

    const rightText = document.createElement('div');
    rightText.className = 'logo-text';
    rightText.textContent = 'Hermanos';
    logo.appendChild(rightText);

    header.appendChild(logo);
    return header;
}

function createImage(id, src, alt) {
    const image = document.createElement('img');
    image.id = id;
    image.src = src;
    image.alt = alt;

    return image;
}

function createNav() {
    const nav = document.createElement('nav');
    const buttons = [];
    buttons.push(createButton('home'));
    buttons.push(createButton('menu'));
    buttons.push(createButton('contact'));
    buttons[0].classList.add('active');
    buttons.forEach(e => nav.appendChild(e));
    return nav;
}

function createButton(id) {
    const button = document.createElement('button');
    button.type = 'menu';
    button.className = 'menu';
    button.id = id;
    button.textContent = id.toUpperCase();

    return button;
}

function loadPage() {
    const content = document.getElementById('content');
    // header
    const header = createHeader();
    content.appendChild(header);
    // nav
    const nav = createNav();
    content.appendChild(nav);
}

export default loadPage;
