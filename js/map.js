const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 20;
const Marker = {
  SIZE_MAIN: 52,
  SIZE_COMMON: 40,
  URL_MAIN: './img/main-pin.svg',
  URL_COMMON: './img/pin.svg',
};
const mapNode = document.querySelector('#map-canvas');
const townCenter = {
  lat: 35.6895,
  lng: 139.692,
};
const mainPinIcon = L.icon ({
  iconUrl: Marker.URL_MAIN,
  iconSize: [Marker.SIZE_MAIN, Marker.SIZE_MAIN],
  iconAnchor: [Marker.SIZE_MAIN/2, Marker.SIZE_MAIN],
});
const mainPinMarker = L.marker(townCenter,
  {draggable: 'true',
  icon: mainPinIcon,
});


const initMap = () => {
 const map = L.map(mapNode)
  .on('load', () => {
    console.log('Карта инициализирована');
  })
  .setView(townCenter, ZOOM);

L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(map);
mainPinMarker.addTo(map);
mainPinMarker.on('moveend', (evt) => {
  const pinPlace = evt.target.getLatLng();
  console.log(pinPlace.lng.toFixed(5));
  console.log(pinPlace.lat.toFixed(5));
  //куда записать полученные координаты?
});
};

//Функция для добавления карточ на карту
const addPinToMap = (card) => {
  console.log(card);
};

export {initMap, addPinToMap};
