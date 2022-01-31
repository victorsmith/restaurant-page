import _, { head } from 'lodash';
import './style.css';
import chefPic from './images/chef.jpg'

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
