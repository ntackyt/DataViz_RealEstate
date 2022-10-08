window.onload = init;

function init(){
    
    const map = new ol.Map({
        
        view: new ol.View({
            center: [-8528855.151432998, 4762665.100871488], 
            zoom: 15,
            maxZoom: 10
            //minZoom: 0
            //rotation: 0.5 these are in radins and go clockwise
        
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: "js-map"
    })


    map.on('click', function(e){
        console.log(e.coordinate);
    })

    var styles = function(geojson,resolution) {
        if (geojson.get('MD_County_Data_median_listing_price') >= 600000 ) {color = '#8c2d04' ;}
        else if (geojson.get('MD_County_Data_median_listing_price') >= 532493 ){color ='#d94801';}
        else if (geojson.get('MD_County_Data_median_listing_price') >= 464986 ){color ='#f16913';}
        else if (geojson.get('MD_County_Data_median_listing_price') >= 397479 ){color ='#fd8d3c';}
        else if (geojson.get('MD_County_Data_median_listing_price') >= 329971 ){color ='#fdae6b';}
        else if (geojson.get('MD_County_Data_median_listing_price') >= 262464 ){color ='#fdd0a2';}
        else if (geojson.get('MD_County_Data_median_listing_price') >= 186519 ){color ='#fee6ce';}
        else {color = '#fff5eb';}

        return  [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: 'black',
              width: 0.7,
            }),
            fill: new ol.style.Fill({
              color: color,
            }),
          }),
        ]
      };

    var geojson = new ol.layer.Vector({
        source: new ol.source.Vector({
          url: `MD_Boundaries_RealEstateData.geojson`,
          format: new ol.format.GeoJSON()
        }),
        zIndex: 1, 
        style: styles,
      });
    map.addLayer(geojson)
    
    /*
    function showCountyName(e){
      if(ol.format.filter.within(e.coordinate, geojson.get("geometry"))){
        console.log("Click in county")
      }
    }
    
   var md_geojson = MD_Boundaries_RealEstateData.geojson

    map.on('click', function(e){
      if(ol.format.filter.within(e.coordinate, geojson.get("geometry"))){
        console.log("Click in county")
      }
    })

    var countyGeometry = new FileReader();
    
    var county = new ol.layer.Vector({
      source: new ol.source.Vector({
       features: [
           new ol.Feature({
               geometry: new ol.geom.MultiPolygon(md_geojson.features.properties.geometry)//geojson.features.properties.geometry)
           })
        ]
      }),
    });
    map.addLayer(county);
    */


}