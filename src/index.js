import _, { head } from 'lodash';
import './style.css';
import chefPic from './images/chef.jpg';
import navigationFunctions, { Navigator } from './navigation.js';

const nav = new Navigator();


export default function renderMain() {}

function component() {

	// main
	const mainEl = document.createElement('main');
	const mainPageHeader = document.createElement('h2');
	mainPageHeader.textContent = 'Welcome to Food Inc.';
	mainEl.appendChild(mainPageHeader);

	const mainPageSubHeader = document.createElement('h5');
	mainPageSubHeader.textContent =
		'The premier food service for good food that tastes good.';
	mainEl.appendChild(mainPageSubHeader);

	const chef = new Image();
	chef.id = 'chefPic';
	chef.src = chefPic;
	mainEl.appendChild(chef);

	element.appendChild(mainEl);

	//footer
	const footerEl = document.createElement('footer');
	footerEl.textContent = 'Footer';
	element.appendChild(footerEl);

	// return header;
	return element;
}

document.body.appendChild(component());
