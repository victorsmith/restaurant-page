import './style.css';
// Pages
import renderHeader from './header';
import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';
import renderFooter from './footer';

export default function renderNavBar() {
	// header setup
	const headerEl = document.createElement('header');

	const mainHeading = document.createElement('h1');
	mainHeading.textContent = 'Food Inc.';
	headerEl.appendChild(mainHeading);

	// nav bar
	const navbar = document.createElement('div');
	navbar.classList.add('row');

	// Home Button
	const homeButton = document.createElement('button');
	homeButton.textContent = 'Home';
	homeButton.addEventListener('click', function () {
        loadHome();
    });
	navbar.appendChild(homeButton);

	// Menu Button
	const menuButton = document.createElement('button');
	menuButton.textContent = 'Menu';
	menuButton.addEventListener('click', function () {

	});
	navbar.appendChild(menuButton);

	// Contact Button
	const contactButton = document.createElement('button');
	contactButton.textContent = 'Contact';
	contactButton.addEventListener('click', function () {
		console.log('Contact');
        loadContact();
	});
	navbar.appendChild(contactButton);

	headerEl.appendChild(navbar);

	document.body.appendChild(headerEl);

	// append body of main so that menu/home/contact can find the #body element and post directly into it
	const mainEl = document.createElement('main');
	mainEl.id = 'body';

	document.body.appendChild(mainEl);
}


function loadHome() {
    document.getElementById('body')
    mainEl.innerHTML = '';
	const homePage = renderHome();
	mainEl.appendChild(homePage);
}

function loadMenu() {
    document.getElementById('body');
	mainEl.innerHTML = '';
	const menuPage = renderMenu();
	mainEl.appendChild(menuPage);
}

function loadContact() {
    document.getElementById('body');
	mainEl.innerHTML = '';
	const contactPage = renderContact();
	mainEl.appendChild(contactPage);
}