var view = new ol.View({
    center: [-54.585956, -25.538514],
    zoom: 12,
    projection: 'EPSG:4326'

});
var osm = new ol.layer.Tile({
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});
var bingmaps = new ol.layer.Tile({
    title: 'Bing Maps',
    type: 'base',
    visible: true,
    source: new ol.source.BingMaps({
        key: 'Am7KKFUU2nGTBPOH92YZqu7zM0_VRX9JRlA4AuTUphLtqiNd5CYwDGR-Ixf2zBRQ',
        imagerySet: 'Road'
    })
});
var googlemaps = new ol.layer.Tile({
    title: 'Google Maps',
    type: 'base',
    visible: true,
    source: new ol.source.XYZ({
        url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
        attributions: '<a href="http://maps.google.com">Google Maps</a>'
    })
});
// Grupo de camadas base
var camadasbase = new ol.layer.Group({
    title: 'Camadas Base',
    layers: [osm, bingmaps, googlemaps]
});
// WMS Estados do Brasil
var ufs = new ol.layer.Tile({ 
    title: 'Estados',
    type: 'overlay',
    visible: false,         
    source: new ol.source.TileWMS({
    url: 'https://geoservicos.ibge.gov.br/geoserver/CGEO/wms',
    params: {'LAYERS': 'CGEO:UF_2013', 'TILED': true}                      
  })
});
// WMS Rodovias do Brasil
var rodovias = new ol.layer.Tile({
    title: 'Rodovias',
    type: 'overlay',
    visible: false,
    source: new ol.source.TileWMS({
    url: 'https://geoservicos.ibge.gov.br/geoserver/CGEO/wms',
    params: {'LAYERS': 'CGEO:Rodovias', 'TILED': true}                        
  })
});
// Rios do Brasil     
var hidrografia = new ol.layer.Tile({
    title: 'Hidrografia',
    type: 'overlay',
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://wms.snirh.gov.br/arcgis/services/SNIRH/2016/MapServer/WMSServer',
        params: { 'LAYERS': '136', 'TILED': true }
    })
});
// Grupo de camadas WMS
var camadaswms = new ol.layer.Group({
    title: 'Camadas WMS',
    layers: [ufs, rodovias, hidrografia]
});
var map = new ol.Map({
    target: 'map',
    layers: [camadasbase, camadaswms],
    view: view
});
var layerSwitcher = new ol.control.LayerSwitcher();
map.addControl(layerSwitcher);
