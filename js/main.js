import {similiarAnnounce} from './data.js';
import {template} from './create-element.js';

const newElement = document.querySelector('#map-canvas');
newElement.appendChild(template);

similiarAnnounce();
