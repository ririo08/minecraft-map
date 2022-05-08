var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "My world - overworld",
        "My world - nether",
        "My world - end"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1651948183",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Lighting",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "render1",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "My world - overworld",
            "last_rendertime": 1651944756,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                144,
                0
            ],
            "minZoom": 0,
            "spawn": [
                0,
                144,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "Night",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "render2",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "My world - overworld",
            "last_rendertime": 1651944756,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                144,
                0
            ],
            "minZoom": 0,
            "spawn": [
                0,
                144,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "Nether",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "render3",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "My world - nether",
            "last_rendertime": 1651944355,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                144,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "The End",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "render4",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "My world - end",
            "last_rendertime": 1651944288,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                144,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
