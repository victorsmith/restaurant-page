export default function renderNavBar() {
	const content = document.getElementById('content');

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
		console.log('Home');
	});
	navbar.appendChild(homeButton);

	// Menu Button
	const menuButton = document.createElement('button');
	menuButton.textContent = 'Menu';
	menuButton.addEventListener('click', function () {
		console.log('Menu');
	});
	navbar.appendChild(menuButton);

	// Contact Button
	const contactButton = document.createElement('button');
	contactButton.textContent = 'Contact';
	contactButton.addEventListener('click', function () {
		console.log('Contact');
	});
	navbar.appendChild(contactButton);
	
    headerEl.appendChild(navbar)
    content.appendChild(headerEl);
}
