import './style.css';

export default function renderHome() {
	const mainPageHeader = document.createElement('h2');
	mainPageHeader.textContent = 'Home';

	document.body.appendChild(mainPageHeader);
}
