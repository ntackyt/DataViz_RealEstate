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


    // initialize color 
    var color = '#fff5eb';
    
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
          format: new ol.format.GeoJSON(),
          url: `static/dist/js/MD_Boundaries_RealEstateData.geojson`
        }),
        zIndex: 1, 
        style: function (feature, resolution) {
            return styles(feature, resolution);
      }
      });
    map.addLayer(geojson)


    // Vector Feature Popup logic
    const overlayContainerElement = document.querySelector('.overlay-container')
    const overlayLayer = new ol.Overlay({
      element: overlayContainerElement
    });
    map.addOverlay(overlayLayer);

    const overlayCounty = document.getElementById('feature-county');
    const overlayListingCount = document.getElementById('feature-listing-count');
    const overlayMedianDays = document.getElementById('feature-median-days');
    const overlayNewListingsCount = document.getElementById('feature-new-listings-count');
    const overlayPriceIncreased = document.getElementById('feature-price-increased');
    const overlayPriceReduced = document.getElementById('feature-price-reduced');

    map.on('click', function(e){
      overlayLayer.setPosition(undefined);
      map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
        let clickedCoord = e.coordinate;
        let county = feature.get('COUNTY');
        let listing_count = feature.get("MD_County_Data_active_listing_count");
        let median_days = feature.get("MD_County_Data_median_days_on_market");
        let new_listings_count = feature.get("MD_County_Data_new_listing_count");
        let price_increased = feature.get("MD_County_Data_price_increased_count");
        let price_reduced = feature.get("MD_County_Data_price_reduced_count");

        overlayLayer.setPosition(clickedCoord);
        overlayCounty.innerHTML = "County: " + county;
        overlayListingCount.innerHTML = "Number of Listings: " + listing_count;
        overlayMedianDays.innerHTML = "Median days on the market: " + median_days;
        overlayNewListingsCount.innerHTML = "Number of new listings: " + new_listings_count;
        overlayPriceIncreased.innerHTML = "Number of price increased: " + price_increased;
        overlayPriceReduced.innerHTML = "Number of price reduced:  " + price_reduced;
      })
    });


    /*
    function showCountyName(e){
      if(ol.zformat.filter.within(e.coordinate, geojson.get("geometry"))){
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