
import maplibregl from 'https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.esm.js';

export function initMap(layerOptions) {
  return new maplibregl.Map({
    container: 'map',
    style: {
      version: 8,
      sources: {
        base: {
          type: 'raster',
          tiles: [layerOptions["地理院地図（淡色）"].base],
          tileSize: 256,
          attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html'>地図データ：国土地理院ほか</a>"
        },
        flood: {
          type: 'raster',
          tiles: ["https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png"],
          tileSize: 256
        },
        boundry: {
          type: 'geojson',
          data: './data/boundry.geojson'
        }
      },
      layers: [
        {
          id: 'base-layer',
          type: 'raster',
          source: 'base',
          minzoom: 0,
          maxzoom: 19
        },
        {
          id: 'photo-dim',
          type: 'background',
          paint: {
            'background-color': 'rgba(255,255,255,0.4)'
          }
        },
        {
          id: 'flood-overlay',
          type: 'raster',
          source: 'flood',
          paint: { 'raster-opacity': 0.6 },
          layout: { visibility: 'none' },
          minzoom: 0,
          maxzoom: 18
        },
        {
          id: 'boundry-line',
          type: 'line',
          source: 'boundry',
          paint: {
            'line-color': '#666666',
            'line-width': 3,
            'line-blur': 1,
            'line-dasharray': [6, 4]
          }
        }
      ]
    },
    center: [139.85033, 35.68727],
    zoom: 10,
    antialias: true
  });
}
