import './style.css';

export default function renderHome() {
	const mainSection = document.getElementById('body');
	mainSection.innerHTML = '';

    
	const mainPageHeader = document.createElement('h2');
	mainPageHeader.textContent = 'Home';
    
    mainSection.appendChild(mainPageHeader);

	return;
}
