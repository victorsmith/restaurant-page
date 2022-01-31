import _, { head } from 'lodash';
import './style.css';
import chefPic from './images/chef.jpg'


function component() {

    const element = document.createElement('div');
    element.id = 'container';

    // header setup
    const headerEl = document.createElement('header');

        const mainHeading = document.createElement('h1');
        mainHeading.textContent = 'Food Inc.'
        headerEl.appendChild(mainHeading);
        
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
    
            const homeButton = document.createElement('button');
            homeButton.textContent = 'Homey';
            rowDiv.appendChild(homeButton);
            
            const menuButton = document.createElement('button');
            menuButton.textContent = 'Menu';
            menuButton.addEventListener('click', function() {
                console.log("Bang")
                switchToMenu();
            });
            rowDiv.appendChild(menuButton);
            
            const contactButton = document.createElement('button');
            contactButton.textContent = 'Contact';
    
            rowDiv.appendChild(contactButton);

        headerEl.appendChild(rowDiv);
        
    element.appendChild(headerEl);
    
    // main
    const mainEl = document.createElement('main');
        const mainPageHeader = document.createElement('h2');
        mainPageHeader.textContent = 'Welcome to Food Inc.';
        mainEl.appendChild(mainPageHeader);
        
        const mainPageSubHeader = document.createElement('h5');
        mainPageSubHeader.textContent = 'The premier food service for good food that tastes good.';
        mainEl.appendChild(mainPageSubHeader);
        
        const chef = new Image();
        chef.id = 'chefPic'
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


function switchToMenu() {
    document.body.innerHTML = '';
    menuJS
}

document.body.appendChild(component());