
export default function renderMenu() {
	const mainEl = document.getElementById('body');

	const mainPageHeader = document.createElement('h2');
	mainPageHeader.textContent = 'Menu';
	mainEl.appendChild(mainPageHeader);

	const chef = new Image();
	chef.id = 'chefPic';
	chef.src = chefPic;
	mainEl.appendChild(chef);

    document.body.appendChild(mainEl);

    // should this function return or just do the rendering itself? -> does it even
}
