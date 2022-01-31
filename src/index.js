import _, { head } from 'lodash';
import './style.css';

// Pages
import renderHeader from './header';
import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';
import renderFooter from './footer';

(function init() {
    renderHeader();
    renderHome();
    renderFooter();
})();




function loadHome() {
    renderHeader();
    renderHome();
    renderFooter();
}

function loadMenu() {
    renderHeader();
    renderHome();
    renderFooter();
}

function loadContact() {
    renderHeader();
    renderHome();
    renderFooter();
}
