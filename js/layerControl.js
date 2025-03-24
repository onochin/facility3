
export function setupLayerControl(map, layerOptions) {
  const layerSelect = document.getElementById('layer-select');

  for (const name in layerOptions) {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    layerSelect.appendChild(option);
  }

  layerSelect.onchange = (e) => {
    const selected = layerOptions[e.target.value];
    map.getSource('base').tiles = [selected.base];
    map.style.sourceCaches['base'].clearTiles();
    map.style.sourceCaches['base'].update(map.transform);
    map.triggerRepaint();
    map.setLayoutProperty('flood-overlay', 'visibility', selected.flood ? 'visible' : 'none');
  };
}
