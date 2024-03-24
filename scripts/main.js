function init() {
    /* link menu with section */
    var landingPage = document.getElementById('landing');
    landingPage.addEventListener('click', function(){
        const element = document.getElementById('first-page');
        /* set menu in navbar correspond to the page in the view */
        firststepPage.classList.remove('active');
        firststepPage.setAttribute('aria-current', 'none');
        aboutusPage.classList.remove('active');
        aboutusPage.setAttribute('aria-current', 'none');
        mapPage.classList.remove('active');
        mapPage.setAttribute('aria-current', 'none');
        landingPage.classList.add('active');
        landingPage.setAttribute('aria-current', 'page');
        /* scroll to desired page */
        element.scrollIntoView();
        console.log('in1');
    });
    /* link menu with section */
    var firststepPage = document.getElementById('firststep');
    firststepPage.addEventListener('click', function(){
        const element = document.getElementById('second-page');
        /* set menu in navbar correspond to the page in the view */
        landingPage.classList.remove('active');
        landingPage.setAttribute('aria-current', 'none');
        aboutusPage.removeAttribute('active');
        aboutusPage.setAttribute('aria-current', 'none');
        mapPage.classList.remove('active');
        mapPage.setAttribute('aria-current', 'none');
        firststepPage.classList.add('active');
        firststepPage.setAttribute('aria-current', 'page');
        /* scroll to desired page */
        element.scrollIntoView();
        console.log('in2');
    });
    /* link menu with section */
    var aboutusPage = document.getElementById('aboutus');
    aboutusPage.addEventListener('click', function(){
        const element = document.getElementById('third-page');
        /* set menu in navbar correspond to the page in the view */
        landingPage.classList.remove('active');
        landingPage.setAttribute('aria-current', 'none');
        firststepPage.classList.remove('active');
        firststepPage.setAttribute('aria-current', 'none');
        mapPage.classList.remove('active');
        mapPage.setAttribute('aria-current', 'none');
        aboutusPage.classList.add('active');
        aboutusPage.setAttribute('aria-current', 'page');
        /* scroll to desired page */
        element.scrollIntoView();
        console.log('in3');
    });
    /* link menu with section */
    var mapPage = document.getElementById('map');
    mapPage.addEventListener('click', function(){
        const element = document.getElementById('map-page');
        /* set menu in navbar correspond to the page in the view */
        landingPage.classList.remove('active');
        landingPage.setAttribute('aria-current', 'none');
        firststepPage.classList.remove('active');
        firststepPage.setAttribute('aria-current', 'none');
        aboutusPage.classList.remove('active');
        aboutusPage.setAttribute('aria-current', 'none');
        mapPage.classList.add('active');
        mapPage.setAttribute('aria-current', 'page');
        /* scroll to desired page */
        element.scrollIntoView();
        console.log('in3');
    });
    /* Compare map */
    /* map1 */
    osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    const thailandCoord = [100.523186, 13.736717]; /*[lon, lat] format -> x=lon, y=lat*/
    let newCoord = new ol.proj.transform(thailandCoord, 'EPSG:4326', 'EPSG:3857');
    
    /* map2 */
    /* show province of the vector */
    var prov_style = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'MediumPurple',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(147, 112, 219, 0.2)'
        })
    });
    var country_provinces = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'https://gisedu.itc.utwente.nl/student/s3234223/web-challenge/services/provinces.py?country=Thailand',
            crossOrigin: 'anonymous',
            format: new ol.format.GeoJSON({
                defaultDataProjection: 'EPSG:4326',
                projection: 'EPSG:3857'
            })
        }),
        style: prov_style,
        name: 'Country Provinces'
    });

    // navMap.addLayer(country_provinces);
    // osmLayer = new ol.layer.Tile({
    //     source: new ol.source.OSM()
    // });
    // railRoadLayer = new ol.layer.Tile({
    //     source: new ol.source.TileWMS({
    //         url: "https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s3234223/thailand/configWMS.map&",
    //         params: {"LAYERS": "railroad", "TILED": true}
    //     })
    // });
    
    const mapView = new ol.View({
        center: newCoord,
        zoom: 7,
    });
    
    const map1 = new ol.Map({
        target: 'map1',
        layers: [osmLayer],
        view: mapView,
    });
    
    const map2 = new ol.Map({
        target: 'map2',
        layers: [osmLayer, country_provinces],
        view: mapView,
    });
}