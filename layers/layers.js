var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.ign.es/wms-inspire/pnoa-ma",
    attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortoimagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_ENPdelaCAM_2 = new ol.format.GeoJSON();
var features_ENPdelaCAM_2 = format_ENPdelaCAM_2.readFeatures(json_ENPdelaCAM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENPdelaCAM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENPdelaCAM_2.addFeatures(features_ENPdelaCAM_2);
var lyr_ENPdelaCAM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENPdelaCAM_2, 
                style: style_ENPdelaCAM_2,
                popuplayertitle: "ENP de la C.A.M",
                interactive: true,
                    title: '<img src="styles/legend/ENPdelaCAM_2.png" /> ENP de la C.A.M'
                });
var format_CentrosEducacinAmbiental_3 = new ol.format.GeoJSON();
var features_CentrosEducacinAmbiental_3 = format_CentrosEducacinAmbiental_3.readFeatures(json_CentrosEducacinAmbiental_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosEducacinAmbiental_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosEducacinAmbiental_3.addFeatures(features_CentrosEducacinAmbiental_3);
var lyr_CentrosEducacinAmbiental_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentrosEducacinAmbiental_3, 
                style: style_CentrosEducacinAmbiental_3,
                popuplayertitle: "Centros Educación Ambiental",
                interactive: true,
                    title: '<img src="styles/legend/CentrosEducacinAmbiental_3.png" /> Centros Educación Ambiental'
                });
var format_Paradasdeautobs_4 = new ol.format.GeoJSON();
var features_Paradasdeautobs_4 = format_Paradasdeautobs_4.readFeatures(json_Paradasdeautobs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paradasdeautobs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paradasdeautobs_4.addFeatures(features_Paradasdeautobs_4);
var lyr_Paradasdeautobs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paradasdeautobs_4, 
                style: style_Paradasdeautobs_4,
                popuplayertitle: "Paradas de autobús",
                interactive: true,
                    title: '<img src="styles/legend/Paradasdeautobs_4.png" /> Paradas de autobús'
                });
var format_reasrecreativas_5 = new ol.format.GeoJSON();
var features_reasrecreativas_5 = format_reasrecreativas_5.readFeatures(json_reasrecreativas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasrecreativas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasrecreativas_5.addFeatures(features_reasrecreativas_5);
var lyr_reasrecreativas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasrecreativas_5, 
                style: style_reasrecreativas_5,
                popuplayertitle: "Áreas recreativas",
                interactive: true,
                    title: '<img src="styles/legend/reasrecreativas_5.png" /> Áreas recreativas'
                });

lyr_Ortoimagen_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_ENPdelaCAM_2.setVisible(true);lyr_CentrosEducacinAmbiental_3.setVisible(true);lyr_Paradasdeautobs_4.setVisible(true);lyr_reasrecreativas_5.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_GoogleLabels_1,lyr_ENPdelaCAM_2,lyr_CentrosEducacinAmbiental_3,lyr_Paradasdeautobs_4,lyr_reasrecreativas_5];
lyr_ENPdelaCAM_2.set('fieldAliases', {'CD_SITECOD': 'CD_SITECOD', 'CD_FIGURA': 'CD_FIGURA', 'DS_FIGURA': 'DS_FIGURA', 'DS_NOMBRE': 'DS_NOMBRE', 'NM_SUP_OFI': 'NM_SUP_OFI', 'DS_ANNO_DE': 'DS_ANNO_DE', });
lyr_CentrosEducacinAmbiental_3.set('fieldAliases', {'id': 'id', 'Centro': 'Centro', });
lyr_Paradasdeautobs_4.set('fieldAliases', {'id': 'id', 'Parada': 'Parada', });
lyr_reasrecreativas_5.set('fieldAliases', {'DS_NOMBRE': 'DS_NOMBRE', 'DS_TIPO': 'DS_TIPO', 'CD_TIPO': 'CD_TIPO', 'DS_ACCESO': 'DS_ACCESO', 'DS_MUNICIP': 'DS_MUNICIP', 'DS_DISTANC': 'DS_DISTANC', 'IT_MESA': 'IT_MESA', 'IT_BANCO': 'IT_BANCO', 'IT_PAPELER': 'IT_PAPELER', 'IT_CONTENE': 'IT_CONTENE', 'IT_FUENTE': 'IT_FUENTE', 'IT_SENAL': 'IT_SENAL', 'IT_JUEGOS': 'IT_JUEGOS', 'IT_SENDA': 'IT_SENDA', 'IT_KIOSCO': 'IT_KIOSCO', 'IT_ASEOS': 'IT_ASEOS', 'IT_ESTACIO': 'IT_ESTACIO', 'IT_P_BICIS': 'IT_P_BICIS', 'IT_BIOSALU': 'IT_BIOSALU', 'IT_BANO': 'IT_BANO', 'IT_PANELES': 'IT_PANELES', 'IT_BARBACO': 'IT_BARBACO', });
lyr_ENPdelaCAM_2.set('fieldImages', {'CD_SITECOD': 'TextEdit', 'CD_FIGURA': 'TextEdit', 'DS_FIGURA': 'TextEdit', 'DS_NOMBRE': 'TextEdit', 'NM_SUP_OFI': 'TextEdit', 'DS_ANNO_DE': 'TextEdit', });
lyr_CentrosEducacinAmbiental_3.set('fieldImages', {'id': '', 'Centro': '', });
lyr_Paradasdeautobs_4.set('fieldImages', {'id': '', 'Parada': '', });
lyr_reasrecreativas_5.set('fieldImages', {'DS_NOMBRE': '', 'DS_TIPO': '', 'CD_TIPO': '', 'DS_ACCESO': '', 'DS_MUNICIP': '', 'DS_DISTANC': '', 'IT_MESA': '', 'IT_BANCO': '', 'IT_PAPELER': '', 'IT_CONTENE': '', 'IT_FUENTE': '', 'IT_SENAL': '', 'IT_JUEGOS': '', 'IT_SENDA': '', 'IT_KIOSCO': '', 'IT_ASEOS': '', 'IT_ESTACIO': '', 'IT_P_BICIS': '', 'IT_BIOSALU': '', 'IT_BANO': '', 'IT_PANELES': '', 'IT_BARBACO': '', });
lyr_ENPdelaCAM_2.set('fieldLabels', {'CD_SITECOD': 'no label', 'CD_FIGURA': 'no label', 'DS_FIGURA': 'no label', 'DS_NOMBRE': 'header label - always visible', 'NM_SUP_OFI': 'no label', 'DS_ANNO_DE': 'no label', });
lyr_CentrosEducacinAmbiental_3.set('fieldLabels', {'id': 'no label', 'Centro': 'header label - always visible', });
lyr_Paradasdeautobs_4.set('fieldLabels', {'id': 'no label', 'Parada': 'header label - always visible', });
lyr_reasrecreativas_5.set('fieldLabels', {'DS_NOMBRE': 'header label - always visible', 'DS_TIPO': 'no label', 'CD_TIPO': 'no label', 'DS_ACCESO': 'no label', 'DS_MUNICIP': 'no label', 'DS_DISTANC': 'no label', 'IT_MESA': 'no label', 'IT_BANCO': 'no label', 'IT_PAPELER': 'no label', 'IT_CONTENE': 'no label', 'IT_FUENTE': 'no label', 'IT_SENAL': 'no label', 'IT_JUEGOS': 'no label', 'IT_SENDA': 'no label', 'IT_KIOSCO': 'no label', 'IT_ASEOS': 'no label', 'IT_ESTACIO': 'no label', 'IT_P_BICIS': 'no label', 'IT_BIOSALU': 'no label', 'IT_BANO': 'no label', 'IT_PANELES': 'no label', 'IT_BARBACO': 'no label', });
lyr_reasrecreativas_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});