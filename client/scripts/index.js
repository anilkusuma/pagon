$(document).ready(function(){
    $('.parallax').parallax();
    $(".products-dropdown").dropdown();
    $(".button-collapse").sideNav();
    $('.scrollspy').scrollSpy();
    $("#testimonials-owl").owlCarousel({
            items: 1,
            itemsDesktop: [1199,1],
            itemsDesktopSmall: [980,1],
            itemsTablet: [768,1],
            itemsTabletSmall: [590,1],
            itemsMobile: [479,1],
            autoPlay: true,
            stopOnHover: true,
            pagination: true,
            transitionStyle: 'fadeUp'
    });
    $('.owl-carousel').owlCarousel({items: 1,
                                    itemsDesktop: [1199,1],
                                    itemsDesktopSmall: [980,1],
                                    itemsTablet: [768,1],
                                    itemsTabletSmall: [590,1],
                                    itemsMobile: [479,1],
                                    autoPlay:true,
                                    stopOnHover: true,
                                    pagination:true,
                                    transitionStyle:'fadeUp',
                                    addClassActive : 'active'
                                   });
    initializeMap();
});
var $controller = new ScrollMagic.Controller;

(new ScrollMagic.Scene({
	            triggerElement: "#products",
	            triggerHook: 0.05,
	        })).setClassToggle(".my_nav", "scrolled").addTo($controller);


function initializeMap() {
    // Create an array of styles.
    var styles = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#46bcec"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });

    var myLatLng = new google.maps.LatLng(17.445693,78.3487881);

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var mapOptions = {
        zoom: 15,
        center: myLatLng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        scrollwheel: false,
        draggable: false
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}