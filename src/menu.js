import chefPic from './images/chef.jpg';

export default function renderMenu() {
	const mainEl = document.getElementById('body');
	mainEl.innerHTML = '';

	const mainPageHeader = document.createElement('h2');
	mainPageHeader.textContent = 'Menu';
	mainEl.appendChild(mainPageHeader);

	const chef = new Image();
	chef.id = 'chefPic';
	chef.src = chefPic;
	mainEl.appendChild(chef);

	// should this function return or just do the rendering itself? -> does it even
}
