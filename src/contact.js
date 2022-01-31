
export default function renderContact() {
    const mainEl = document.getElementById('body');
    mainEl.innerHTML = '';

    const mainPageHeader = document.createElement('h2');
	mainPageHeader.textContent = 'Contact';
	
    mainEl.appendChild(mainPageHeader);
}
