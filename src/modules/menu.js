function setButtonActive(id) {
    const activeButton = document.querySelector('.menu.active');
    if(activeButton) activeButton.classList.remove('active');
    const button = document.getElementById(id);
    button.classList.add('active');
}
function createImage(src, alt) {
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    return image;
}

function createMenuItem(src, name, desc) {
    const element = document.createElement('div');
    element.className = "menu-item";
    const image = createImage(src, "Picture of "+name);
    image.className = "menu-item";
    element.appendChild(image);
    const title = document.createElement('h2');
    title.className = "menu-item";
    title.textContent = name;
    element.appendChild(title);
    const text = document.createElement('p');
    text.className = "menu-item";
    text.textContent = desc;
    element.appendChild(text);
    return element;
}

function createMain() {
    const main = document.createElement('main');
    main.id = "main";
    const menuItems = [];

    menuItems.push(createMenuItem(
        "/images/FriedChicken.jpg", 
        "Fried Chicken Meal", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate quis massa vitae dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae pharetra est. Sed egestas risus nec turpis hendrerit, semper ullamcorper leo lacinia. Proin ut luctus nunc."
        ));
    main.appendChild(menuItems[menuItems.length-1]);
    menuItems.push(createMenuItem(
        "/images/ChickenNWaffles.jpeg", 
        "Chicken & Waffles", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate quis massa vitae dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae pharetra est. Sed egestas risus nec turpis hendrerit, semper ullamcorper leo lacinia. Proin ut luctus nunc.."
        ));
    main.appendChild(menuItems[menuItems.length-1]);

    menuItems.push(createMenuItem(
        "/images/ChickenBurger.jpeg", 
        "Chicken Burger Meal", 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate quis massa vitae dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae pharetra est. Sed egestas risus nec turpis hendrerit, semper ullamcorper leo lacinia. Proin ut luctus nunc.."
        ));
        main.appendChild(menuItems[menuItems.length-1]);
    return main;
}
function loadMenu() {
    document.title = "Menu::Los Pollos Hermanos";
    const content = document.getElementById('content');
    let previousSite = document.getElementById("main");
    if (previousSite != undefined) content.removeChild(previousSite);
    const main = createMain();
    content.appendChild(main);
    setButtonActive('menu');
}

export default loadMenu;