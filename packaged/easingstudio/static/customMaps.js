$(document).ready(function(e) {
    if("undefined"!=typeof google) {
        var t=navigator.userAgent.toLowerCase().indexOf("trident")>-1?"/wp-content/themes/easingstudio/dist/assets/images/google/cd-icon-location.png":"/wp-content/themes/easingstudio/dist/assets/images/google/cd-icon-location.svg", i=[ {
            elementType:"labels", stylers:[ {
                saturation: -20
            }
            ]
        }
        , {
            featureType:"poi", elementType:"labels", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"road.highway", elementType:"labels", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"road.local", elementType:"labels.icon", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"road.arterial", elementType:"labels.icon", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"road", elementType:"geometry.stroke", stylers:[ {
                visibility: "off"
            }
            ]
        }
        , {
            featureType:"transit", elementType:"geometry.fill", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "off"
            }
            , {
                lightness: 0
            }
            , {
                saturation: -20
            }
            ]
        }
        , {
            featureType:"poi", elementType:"geometry.fill", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "off"
            }
            , {
                lightness: 0
            }
            , {
                saturation: -20
            }
            ]
        }
        , {
            featureType:"poi.government", elementType:"geometry.fill", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "on"
            }
            , {
                lightness: 0
            }
            , {
                saturation: -20
            }
            ]
        }
        , {
            featureType:"poi.attraction", elementType:"geometry.fill", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "on"
            }
            , {
                lightness: 0
            }
            , {
                saturation: -20
            }
            ]
        }
        , {
            featureType:"poi.business", elementType:"geometry.fill", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "on"
            }
            , {
                lightness: 0
            }
            , {
                saturation: -20
            }
            ]
        }
        , {
            featureType:"transit", elementType:"geometry.fill", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "on"
            }
            , {
                lightness: 0
            }
            , {
                saturation: -20
            }
            ]
        }
        , {
            featureType:"transit.station", elementType:"geometry.fill", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "on"
            }
            , {
                lightness: 0
            }
            , {
                saturation: -20
            }
            ]
        }
        , {
            featureType:"landscape", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "on"
            }
            , {
                lightness: 0
            }
            , {
                saturation: -20
            }
            ]
        }
        , {
            featureType:"road", elementType:"geometry.fill", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "on"
            }
            ]
        }
        , {
            featureType:"road.highway", elementType:"geometry.fill", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "on"
            }
            , {
                lightness: 0
            }
            , {
                saturation: -20
            }
            ]
        }
        , {
            featureType:"water", elementType:"geometry", stylers:[ {
                hue: "#044A33"
            }
            , {
                visibility: "on"
            }
            , {
                lightness: "60"
            }
            , {
                saturation: -20
            }
            ]
        }
        ], o= {
            center: new google.maps.LatLng(41.149968, -8.6102426), zoom: 11, panControl: !1, zoomControl: !1, mapTypeControl: !1, streetViewControl: !1, mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: !1, styles: i
        }
        , s=new google.maps.Map(document.getElementById("google-container"), o);
        new google.maps.Marker( {
            position: new google.maps.LatLng(41.09272, -8.5373), map: s, visible: !0, icon: t
        }
        );
        var l=document.createElement("div");
        new function(e, t) {
            var i=document.getElementById("cd-zoom-in"), o=document.getElementById("cd-zoom-out");
            e.appendChild(i), e.appendChild(o), google.maps.event.addDomListener(i, "click", function() {
                t.setZoom(t.getZoom()+1)
            }
            ), google.maps.event.addDomListener(o, "click", function() {
                t.setZoom(t.getZoom()-1)
            }
            )
        }
        (l, s);
        s.controls[google.maps.ControlPosition.LEFT_TOP].push(l)
    }
}

);
