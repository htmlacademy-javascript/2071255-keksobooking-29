import {disableForm} from './form.js';
import { addPinToMap, initMap } from './map.js';
import './card.js';
import { similarAdvert } from './data.js';

initMap(similarAdvert);
addPinToMap();
