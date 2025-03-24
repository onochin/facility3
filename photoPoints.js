
export function addPhotoPoints(map) {
  map.addSource('photoPoints', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [139.818112555, 35.743173848]
          },
          properties: {
            title: '隅田水門',
            description: '荒川の洪水が隅田川への流入を防ぐ',
            image: './photo/03.JPG'
          }
        }
      ]
    }
  });

  map.addLayer({
    id: 'photo-point-layer',
    type: 'circle',
    source: 'photoPoints',
    paint: {
      'circle-radius': 6,
      'circle-color': '#00AA55'
    }
  });

  map.addLayer({
    id: 'photo-point-labels',
    type: 'symbol',
    source: 'photoPoints',
    layout: {
      'text-field': ['get', 'title'],
      'text-size': 14,
      'text-offset': [0, 1.2],
      'text-anchor': 'top',
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': '#000000',
      'text-halo-color': '#ffffff',
      'text-halo-width': 2
    }
  });

  map.on('click', 'photo-point-layer', (e) => {
    const { title, description, image } = e.features[0].properties;
    const coordinates = e.features[0].geometry.coordinates;

    new maplibregl.Popup()
      .setLngLat(coordinates)
      .setHTML(\`
        <strong>\${title}</strong><br>
        \${description}<br>
        <img src="\${image}" style="width:500px; cursor: pointer;" onclick="event.stopPropagation(); document.getElementById('modal-image').src='\${image}'; document.getElementById('img-modal').style.display='flex';">
      \`)
      .addTo(map);
  });

  map.on('mouseenter', 'photo-point-layer', () => {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', 'photo-point-layer', () => {
    map.getCanvas().style.cursor = '';
  });
}
