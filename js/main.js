
import { initMap } from './mapInit.js';
import { setupLayerControl } from './layerControl.js';
import { addRouteLayer } from './routeLayer.js';
import { addPhotoPoints } from './photoPoints.js';

const layerOptions = {
  "地理院地図（淡色）": {
    base: "https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",
    flood: false
  },
  "OpenStreetMap": {
    base: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    flood: false
  },
  "PLATEAU 航空写真測量": {
    base: "https://gic-plateau.s3.ap-northeast-1.amazonaws.com/2020/ortho/tiles/{z}/{x}/{y}.png",
    flood: false
  },
  "標高タイル（陰影起伏図）": {
    base: "https://cyberjapandata.gsi.go.jp/xyz/relief/{z}/{x}/{y}.png",
    flood: false
  },
  "洪水浸水想定区域（令和2年）+地理院地図": {
    base: "https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",
    flood: true
  },
  "洪水浸水想定区域（令和2年）+PLATEAU 航空写真測量": {
    base: "https://gic-plateau.s3.ap-northeast-1.amazonaws.com/2020/ortho/tiles/{z}/{x}/{y}.png",
    flood: true
  },
  "今昔マップ（東京50万）": {
    base: "http://ktgis.net/kjmapw/kjtilemap/tokyo50/2man/{z}/{x}/{-y}.png",
    flood: false
  }
};

const map = initMap(layerOptions);

map.on('load', () => {
  setupLayerControl(map, layerOptions);
  addRouteLayer(map);
  addPhotoPoints(map);
});
