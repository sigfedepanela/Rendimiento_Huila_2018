var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Limite_Departamental_1 = new ol.format.GeoJSON();
var features_Limite_Departamental_1 = format_Limite_Departamental_1.readFeatures(json_Limite_Departamental_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Departamental_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limite_Departamental_1.addFeatures(features_Limite_Departamental_1);var lyr_Limite_Departamental_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Departamental_1, 
                style: style_Limite_Departamental_1,
                title: '<img src="styles/legend/Limite_Departamental_1.png" /> Limite_Departamental'
            });var format_RendimientodePanelaToneladasHectarea_2 = new ol.format.GeoJSON();
var features_RendimientodePanelaToneladasHectarea_2 = format_RendimientodePanelaToneladasHectarea_2.readFeatures(json_RendimientodePanelaToneladasHectarea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientodePanelaToneladasHectarea_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RendimientodePanelaToneladasHectarea_2.addFeatures(features_RendimientodePanelaToneladasHectarea_2);var lyr_RendimientodePanelaToneladasHectarea_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientodePanelaToneladasHectarea_2, 
                style: style_RendimientodePanelaToneladasHectarea_2,
    title: 'Rendimiento de Panela (Toneladas/Hectarea)<br />\
    <img src="styles/legend/RendimientodePanelaToneladasHectarea_2_0.png" />  4,4 - 4,5 <br />\
    <img src="styles/legend/RendimientodePanelaToneladasHectarea_2_1.png" />  4,5 - 5,8 <br />\
    <img src="styles/legend/RendimientodePanelaToneladasHectarea_2_2.png" />  5,8 - 6,6 <br />\
    <img src="styles/legend/RendimientodePanelaToneladasHectarea_2_3.png" />  6,6 - 7,0 <br />\
    <img src="styles/legend/RendimientodePanelaToneladasHectarea_2_4.png" />  7,0 - 8,0 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Limite_Departamental_1.setVisible(true);lyr_RendimientodePanelaToneladasHectarea_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limite_Departamental_1,lyr_RendimientodePanelaToneladasHectarea_2];
lyr_Limite_Departamental_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.SCOS.(Ha': 'A.SCOS.(Ha', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', 'AÑO': 'AÑO', 'No': 'No', });
lyr_RendimientodePanelaToneladasHectarea_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO_1': 'CULTIVO_1', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', });
lyr_Limite_Departamental_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.SCOS.(Ha': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', 'AÑO': 'Range', 'No': 'Range', });
lyr_RendimientodePanelaToneladasHectarea_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO_1': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', });
lyr_Limite_Departamental_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.SCOS.(Ha': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', 'AÑO': 'inline label', 'No': 'inline label', });
lyr_RendimientodePanelaToneladasHectarea_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO_1': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', });
lyr_RendimientodePanelaToneladasHectarea_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});