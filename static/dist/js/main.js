window.onload = init;


function init(){
  const map = new ol.Map({
      view: new ol.View({
          center: [-8528855.151432998, 4762665.100871488], 
          zoom: 6,
          maxZoom: 20
      }),
      layers: [
          new ol.layer.Tile({
              source: new ol.source.OSM()
          })
      ],
      target: "js-map"
  })


  // Put transparent county layers
var baseCountiesGeoJson = new ol.layer.Vector({
        source: new ol.source.Vector({
          format: new ol.format.GeoJSON(),
          url: `static/dist/js/US_County_Data.geojson`
        }),
        zIndex: 1, 
        style: function (feature, resolution) {
            return styles_county(feature, resolution);
      },
      minZoom: 7
      });
    baseCountiesGeoJson.setOpacity(0.6)
    map.addLayer(baseCountiesGeoJson)


  // Initialize color 
  var color = '#fff5eb';
  
  // County coloring
  var styles_county = function(geojson,resolution) {

      if (geojson.get('RDC_County_median_listing_price') >= 600000 ) {color = '#8c2d04' ;}
      else if (geojson.get('RDC_County_median_listing_price') >= 532493 ){color ='#d94801';}
      else if (geojson.get('RDC_County_median_listing_price') >= 464986 ){color ='#f16913';}
      else if (geojson.get('RDC_County_median_listing_price') >= 397479 ){color ='#fd8d3c';}
      else if (geojson.get('RDC_County_median_listing_price') >= 329971 ){color ='#fdae6b';}
      else if (geojson.get('RDC_County_median_listing_price') >= 327000 ){color ='#fdd0a2';}
      else if (geojson.get('RDC_County_median_listing_price') >= 217000 ){color ='#fee6ce';}
      //else {color = '#fff5eb';}

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

  // State coloring
  var styles_state = function(geojson,resolution) {
      if (geojson.get('RDC_State_median_listing_price') >= 879500 ) {color = '#8c2d04' ;}
      else if (geojson.get('RDC_State_median_listing_price') >= 769000 ){color ='#d94801';}
      else if (geojson.get('RDC_State_median_listing_price') >= 659000 ){color ='#f16913';}
      else if (geojson.get('RDC_State_median_listing_price') >= 548000 ){color ='#fd8d3c';}
      else if (geojson.get('RDC_State_median_listing_price') >= 439000 ){color ='#fdae6b';}
      else if (geojson.get('RDC_State_median_listing_price') >= 327000 ){color ='#fdd0a2';}
      else if (geojson.get('RDC_State_median_listing_price') >= 217000 ){color ='#fee6ce';}
      //else {color = '#fff5eb';}

      return [
      new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'black',
          width: 0.7,
        }),
        fill: new ol.style.Fill({      
          color: color,
        }),
      }),
  ]};
  
  // State map layer 
  var statesGeoJson = new ol.layer.Vector({
      source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: `static/dist/js/US_State.geojson`
      }),
      zIndex: 1, 
      style: function (feature, resolution) {
          return styles_state(feature, resolution);
      },
      maxZoom: 7
  });
  map.addLayer(statesGeoJson)


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

  // click on map function
  map.on('click', function(e){      
      overlayLayer.setPosition(undefined);
      map.forEachFeatureAtPixel(e.pixel, function(feature, layer){
        if(feature.get("lyr") == 1){
          let clickedCoord = e.coordinate;
          let county = feature.get('NAME');
          let listing_count = feature.get("RDC_County_active_listing_count");
          let median_days = feature.get("RDC_County_median_days_on_market");
          let new_listings_count = feature.get("RDC_County_new_listing_count");
          let price_increased = feature.get("RDC_County_price_increased_count");
          let price_reduced = feature.get("RDC_County_price_reduced_count");

          overlayLayer.setPosition(clickedCoord);
          overlayCounty.innerHTML = "County: " + county;
          overlayListingCount.innerHTML = "Number of Listings: " + listing_count;
          overlayMedianDays.innerHTML = "Median days on the market: " + median_days;
          overlayNewListingsCount.innerHTML = "Number of new listings: " + new_listings_count;
          overlayPriceIncreased.innerHTML = "Number of price increased: " + price_increased;
          overlayPriceReduced.innerHTML = "Number of price reduced:  " + price_reduced;
      
        }
        else {
          ///////////////
          // state data display - uncomment for state data level view

          // let clickedCoord = e.coordinate;
          // let state = feature.get('name');
          // let listing_count = feature.get("RDC_State_active_listing_count");
          // let median_days = feature.get("RDC_State_median_days_on_market");
          // let new_listings_count = feature.get("RDC_State_new_listing_count");
          // let price_increased = feature.get("RDC_State_price_increased_count");
          // let price_reduced = feature.get("RDC_State_price_reduced_count");

          // overlayLayer.setPosition(clickedCoord);
          // overlayCounty.innerHTML = "State: " + state;
          // overlayListingCount.innerHTML = "Number of Listings: " + listing_count;
          // overlayMedianDays.innerHTML = "Median days on the market: " + median_days;
          // overlayNewListingsCount.innerHTML = "Number of new listings: " + new_listings_count;
          // overlayPriceIncreased.innerHTML = "Number of price increased: " + price_increased;
          // overlayPriceReduced.innerHTML = "Number of price reduced:  " + price_reduced;
          ///////////////

          // statesGeoJson.getSource().clear();
          let state_abr = feature.get('stusab');
          var countiesGeoJson = new ol.layer.Vector({
            source: new ol.source.Vector({
              format: new ol.format.GeoJSON(),
              url: `static/dist/js/US_County_Data.geojson`
            }),
            zIndex: 1, 
            style: function (feature, resolution) {
              if(feature.get('RDC_County_state') == state_abr){
                return styles_county(feature, resolution);
              }
          },
            minZoom: 1
          });
          map.addLayer(countiesGeoJson)
        } 
      })
  });

  // hover functionality
  const selectStyle = new ol.style.Style({
      fill: new ol.style.Fill({
        color: '#eeeeee',
      }),
      stroke: new ol.style.Stroke({
        color: 'rgba(255, 255, 255, 0.1)',
        width: 4,
      }),
  });

  const hoverContainerElement = document.querySelector('.hover-container')
  const hoverLayer = new ol.Overlay({
    element: hoverContainerElement
  });
  map.addOverlay(hoverLayer);

  const hoverCounty = document.getElementById('feature-hover');

  let hoverElement = null;
  map.on('pointermove', function (e) {
    if (hoverElement !== null) {
      hoverElement.setStyle(undefined);
      hoverElement = null;
    }
    hoverLayer.setPosition(undefined);
    
    map.forEachFeatureAtPixel(e.pixel, function(f){
      hoverElement = f;
      selectStyle.getFill().setColor(f.get('COLOR') || '#eeeeee');
      f.setStyle(selectStyle);
      return true;  
    });

    if (hoverElement) {
      console.log(e.coordinate);
      hoverLayer.setPosition(e.coordinate);
      if(hoverElement.get("lyr") == 1){
        hoverCounty.innerHTML = hoverElement.get('RDC_County_county_name') + " County";
      } else {
        hoverCounty.innerHTML = hoverElement.get('RDC_State_state');
      }
    } /* else {
      hoverCounty.innerHTML = '&nbsp;';
    } */ 
  });

}