var burger = document.getElementById('ham');
var isBurgerClose = false;

var navContainer = document.getElementById('navigation-container');
var prodSubMenu = document.getElementById('product-sub-menu');
var companySubMenu = document.getElementById('company-sub-menu');
var connectSubMenu = document.getElementById('connect-sub-menu');

var prodIcon = document.getElementById('product-icon');
var companyIcon = document.getElementById('company-icon');
var connectIcon = document.getElementById('connect-icon');

var isProdMenuOpen = false;
var isCompanyMenuOpen = false;
var isConnectMenuOpen = false;

burger.addEventListener('click', (e) => {
    if (!isBurgerClose) {
        burger.src = "./../images/icon-close.svg";
        isBurgerClose = !isBurgerClose;
        navContainer.style.visibility = 'visible';
    }
    else {
        burger.src = "./../images/icon-hamburger.svg";
        isBurgerClose = !isBurgerClose;
        navContainer.style.visibility = 'hidden';
    }
})

closeMenu(prodIcon, prodSubMenu, isProdMenuOpen);
closeMenu(companyIcon, companySubMenu, isCompanyMenuOpen);
closeMenu(connectIcon, connectSubMenu, isConnectMenuOpen);

function closeMenu(icon, menu, isMenuOpen) {
    icon.addEventListener('click', (e) => {
        if (isMenuOpen) {
            menu.style.display = "none";
            isMenuOpen = !isMenuOpen;
        }
        else {
            menu.style.display = "flex";
            isMenuOpen = !isMenuOpen;
        }
    })
}
