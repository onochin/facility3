export function addRouteLayer(map) {
  map.addSource('route', {
    type: 'geojson',
    data: './data/route.geojson'
  });

  map.addLayer({
    id: 'route-line',
    type: 'line',
    source: 'route',
    paint: {
      'line-color': '#007AFF',
      'line-width': 4
    }
  });
}
