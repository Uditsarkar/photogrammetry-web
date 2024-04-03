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
        accPage.classList.remove('active');
        accPage.setAttribute('aria-current', 'none');
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
        accPage.classList.remove('active');
        accPage.setAttribute('aria-current', 'none');
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
        accPage.classList.remove('active');
        accPage.setAttribute('aria-current', 'none');
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
        accPage.classList.remove('active');
        accPage.setAttribute('aria-current', 'none');
        mapPage.classList.add('active');
        mapPage.setAttribute('aria-current', 'page');
        /* scroll to desired page */
        element.scrollIntoView();
        console.log('in3');
    });
    /* link menu with section */
    var accPage = document.getElementById('acc');
    accPage.addEventListener('click', function(){
        const element = document.getElementById('acc-page');
        /* set menu in navbar correspond to the page in the view */
        landingPage.classList.remove('active');
        landingPage.setAttribute('aria-current', 'none');
        firststepPage.classList.remove('active');
        firststepPage.setAttribute('aria-current', 'none');
        aboutusPage.classList.remove('active');
        aboutusPage.setAttribute('aria-current', 'none');
        mapPage.classList.remove('active');
        mapPage.setAttribute('aria-current', 'none');
        accPage.classList.add('active');
        accPage.setAttribute('aria-current', 'page');
        /* scroll to desired page */
        element.scrollIntoView();
        console.log('in3');
    });

    /* Compare map */
    /* map1 */
    osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM(),
        title: 'OSM'
    });
    const enschedeCoord = [6.89583, 52.21833]; /*[lon, lat] format -> x=lon, y=lat*/
    let newCoord = new ol.proj.transform(enschedeCoord, 'EPSG:4326', 'EPSG:3857');
    /* map2 */
    /* show province of the vector */
    // var provStyle = new ol.style.Style({
    //     stroke: new ol.style.Stroke({
    //         color: 'MediumPurple',
    //         width: 2
    //     }),
    //     fill: new ol.style.Fill({
    //         color: 'rgba(147, 112, 219, 0.2)'
    //     })
    // });
    // var countryProvinces = new ol.layer.Vector({
    //     source: new ol.source.Vector({
    //         url: 'https://gisedu.itc.utwente.nl/student/s3234223/web-challenge/services/provinces.py?country=Thailand',
    //         crossOrigin: 'anonymous',
    //         format: new ol.format.GeoJSON({
    //             defaultDataProjection: 'EPSG:4326',
    //             projection: 'EPSG:3857'
    //         })
    //     }),
    //     style: provStyle,
    //     name: 'Country Provinces',
    //     title: 'Provinces'
    // });
    // const extentCoord = [256629, 470713, 258005, 471880]; /*[lon, lat] format -> x=lon, y=lat*/
    // let newExtentCoord = ol.proj.transformExtent(extentCoord, 'EPSG:28992', 'EPSG:3857'); // perform projection transform with given extent.
    // let newExtentCoord = new ol.proj.transform(extentCoord, 'EPSG:28992', 'EPSG:3857');
    // console.log(newExtentCoord);
    var lgnSource = new ol.source.ImageWMS({
        url: 'https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s3234223/project/config/configWMS.map&',
        params: {'LAYERS': 'lgn2018_raster'},
        ratio: 1,
        projection: 'EPSG:3857'
    });
    var svmSource = new ol.source.ImageWMS({
        url: 'https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s3234223/project/config/configWMS.map&',
        params: {'LAYERS': 'svm_raster'},
        ratio: 1,
        projection: 'EPSG:3857'
    });
    var mleSource = new ol.source.ImageWMS({
        url: 'https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s3234223/project/config/configWMS.map&',
        params: {'LAYERS': 'mle_raster'},
        ratio: 1,
        projection: 'EPSG:3857'
    });
    var lgnPhoto = new ol.layer.Image({
        source: lgnSource,
        title: 'LGN 2018 classification'
    });
    var svmPhoto = new ol.layer.Image({
        source: svmSource,
        title: 'SVM classification'
    });
    var mlePhoto = new ol.layer.Image({
        source: mleSource,
        title: 'MLE classification'
    });
    // const graphicUrl = wmsSource.getLegendUrl(resolution);
    // const img = document.getElementById('legend');
    // img.src = graphicUrl;
    const mapView = new ol.View({
        center: newCoord,
        zoom: 14,
    });
    const map1 = new ol.Map({
        target: 'map1',
        layers: [osmLayer, lgnPhoto],
        view: mapView,
    });
    const map2 = new ol.Map({
        target: 'map2',
        layers: [osmLayer, mlePhoto, svmPhoto],
        view: mapView,
    });

    var layerSwitcher = new ol.control.LayerSwitcher();
    layerSwitcher.useLegendGraphics = true;
    map1.addControl(layerSwitcher);
    
    var layerSwitcher = new ol.control.LayerSwitcher();
    layerSwitcher.useLegendGraphics = true;
    map2.addControl(layerSwitcher);

    // Define a new legend
    var lgnLegend = new ol.legend.Legend({ 
        title: 'Legend',
        margin: 3,
        maxWidth: 200
    });
    var svmLegend = new ol.legend.Legend({ 
        title: 'Legend',
        margin: 3,
        maxWidth: 200
    });
    var mleLegend = new ol.legend.Legend({ 
        title: 'Legend',
        margin: 3,
        maxWidth: 200
    });

    var lgnLegendCtrl = new ol.control.Legend({
        legend: lgnLegend,
        collapsed: false
    });
    var svmLegendCtrl = new ol.control.Legend({
        legend: svmLegend,
        collapsed: false
    });
    var mleLegendCtrl = new ol.control.Legend({
        legend: mleLegend,
        collapsed: false
    });

    map1.addControl(lgnLegendCtrl);
    map2.addControl(svmLegendCtrl);
    map2.addControl(mleLegendCtrl);

    // New legend associated with a layer
    var lgnLayerLegend = new ol.legend.Legend({
        layer: lgnPhoto 
    });
    var svmLayerLegend = new ol.legend.Legend({
        layer: svmPhoto 
    });
    var mleLayerLegend = new ol.legend.Legend({
        layer: mlePhoto 
    });
    lgnLayerLegend.addItem(new ol.legend.Image({
        title: 'Land cover classification',
        src: 'https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s3234223/project/config/configWMS.map&SERVICE=WMS&VERSION=1.3.0&SLD_VERSION=1.1.0&REQUEST=GetLegendGraphic&WIDTH=100&HEIGHT=100&FORMAT=image/png&LAYER=lgn2018_raster'
    }));
    svmLayerLegend.addItem(new ol.legend.Image({
        title: 'Land cover classification',
        src: 'https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s3234223/project/config/configWMS.map&SERVICE=WMS&VERSION=1.3.0&SLD_VERSION=1.1.0&REQUEST=GetLegendGraphic&WIDTH=100&HEIGHT=100&FORMAT=image/png&LAYER=svm_raster'
    }));
    mleLayerLegend.addItem(new ol.legend.Image({
        title: 'Land cover classification',
        src: 'https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s3234223/project/config/configWMS.map&SERVICE=WMS&VERSION=1.3.0&SLD_VERSION=1.1.0&REQUEST=GetLegendGraphic&WIDTH=100&HEIGHT=100&FORMAT=image/png&LAYER=mle_raster'
    }));
    lgnLegend.addItem(lgnLayerLegend);
    svmLegend.addItem(svmLayerLegend);
    mleLegend.addItem(mleLayerLegend);
}