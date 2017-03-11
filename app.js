/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _geolib = __webpack_require__(2);

var _geolib2 = _interopRequireDefault(_geolib);

var _schools = __webpack_require__(1);

var _schools2 = _interopRequireDefault(_schools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchData(url) {
  if (!url) return alert('A Valid URL is Required');

  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState !== 4) return false;

    if (http.status === 200) {
      return document.querySelector('#geopoints').value = http.responseText;
    }

    alert(http.statusText);
  };

  http.open('GET', url, true);
  http.send(null);
}

document.querySelector('#fetch').onclick = function () {
  fetchData(document.querySelector('input[name="url"]').value);
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = document.querySelectorAll('.sample')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var link = _step.value;

    link.onclick = function (e) {
      e.preventDefault();

      fetchData(this.getAttribute('href'));

      return false;
    };
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function addToList(selector, team) {
  var list = document.querySelector(selector);

  var el = document.createElement('div');
  el.innerHTML = team.rank + '. ' + team.name + '<div class="explain">' + team.nearest.name + ' - ' + team.nearest.distance + '</div>';

  list.appendChild(el);
}

document.querySelector('#run').onclick = function () {
  var data = document.querySelector('#geopoints').value;

  try {
    data = JSON.parse(data);
  } catch (e) {
    return alert('Invalid JSON for GeoPoints');
  }

  data = data.map(function (el) {
    return {
      name: el.name || '',
      latitude: el.lat || el.latitude,
      longitude: el.lng || el.longitude
    };
  });

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _schools2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _conference = _step2.value;
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = _conference[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var _region = _step7.value;
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = _region[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var school = _step8.value;

              // Earth circumference is ~40m meters, furthest a point could be is half that
              school.nearest = {
                distance: 20037500
              };

              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = data[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var point = _step9.value;

                  var distance = _geolib2.default.getDistance(point, school);

                  if (school.nearest.distance > distance) {
                    school.nearest = {
                      name: point.name,
                      distance: distance
                    };
                  }
                }
              } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion9 && _iterator9.return) {
                    _iterator9.return();
                  }
                } finally {
                  if (_didIteratorError9) {
                    throw _iteratorError9;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var reg = ['south', 'west', 'east', 'midwest'];

  // Now, we fight
  var matchups = [0, 15, 7, 8, 4, 11, 3, 12, 2, 13, 5, 10, 6, 9, 1, 14];

  var count = -1;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _schools2.default[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _conference2 = _step3.value;
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = _conference2[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var _region2 = _step10.value;

          count++;

          for (var n in matchups) {
            var position = matchups[n];
            _region2[position].rank = position + 1;

            addToList('#' + reg[count] + '-1', _region2[position]);
          }

          // sort the teams by matchup
          _region2.sort(function (a, b) {
            return matchups.indexOf(a.rank - 1) - matchups.indexOf(b.rank - 1);
          });
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10.return) {
            _iterator10.return();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }
    }

    // in the first round, use the specified matchups, in later rounds, play nearest neighbor
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  count = -1;
  for (var round = 2; round < 6; round++) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = _schools2.default[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var conference = _step4.value;

        for (var t in conference) {
          var region = conference[t];

          count++;

          var losers = [];
          for (var i = 0; i < region.length; i += 2) {
            var iCloser = region[i].nearest.distance < region[i + 1].nearest.distance;
            region[i].winner = iCloser;
            region[i + 1].winner = !iCloser;
          }

          // reset array indecies
          region = conference[t] = region.filter(function (el) {
            return el.winner;
          });

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = region[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _winner = _step5.value;

              addToList('#' + reg[count] + '-' + round, _winner);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    count = -1;
  }

  // finals time
  var finals = [];
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = _schools2.default[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var _conference3 = _step6.value;
      var _iteratorNormalCompletion11 = true;
      var _didIteratorError11 = false;
      var _iteratorError11 = undefined;

      try {
        for (var _iterator11 = _conference3[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
          var _region3 = _step11.value;

          addToList('#finals-1', _region3[0]);
        }
      } catch (err) {
        _didIteratorError11 = true;
        _iteratorError11 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion11 && _iterator11.return) {
            _iterator11.return();
          }
        } finally {
          if (_didIteratorError11) {
            throw _iteratorError11;
          }
        }
      }

      var _winner2 = _conference3.reduce(function (a, b) {
        return a[0].nearest.distance < b[0].nearest.distance ? a[0] : b[0];
      });

      addToList('#finals-2', _winner2);

      finals.push(_winner2);
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  var winner = finals.reduce(function (a, b) {
    return a.nearest.distance < b.nearest.distance ? a : b;
  });

  addToList('#finals-3', winner);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [[[// Southern
{
  "name": "University of Kansas",
  "latitude": 38.95442,
  "longitude": -95.25166
}, {
  "name": "Villanova University",
  "latitude": 40.0349,
  "longitude": -75.33735
}, {
  "name": "Miami University",
  "latitude": 25.72163,
  "longitude": -80.28803
}, {
  "name": "University of California - Berkley",
  "latitude": 37.87189,
  "longitude": -122.26072
}, {
  "name": "University of Maryland",
  "latitude": 38.986918,
  "longitude": -76.942554
}, {
  "name": "University of Arizona",
  "latitude": 32.23212,
  "longitude": -110.95538
}, {
  "name": "University of Iowa",
  "latitude": 41.6627,
  "longitude": -91.5549
}, {
  "name": "University of Colorado",
  "latitude": 40.00758,
  "longitude": -105.26594
}, {
  "name": "University of Connecticut",
  "latitude": 41.80774,
  "longitude": -72.25398
}, {
  "name": "Temple University",
  "latitude": 39.98165,
  "longitude": -75.15744
}, {
  "name": "Wichita State University",
  "latitude": 37.71927,
  "longitude": -97.29501
}, {
  "name": "South Dakota State University",
  "latitude": 44.31857,
  "longitude": -96.78431
}, {
  "name": "University of Hawaii at Manoa",
  "latitude": 21.30000,
  "longitude": -157.82115
}, {
  "name": "University at Buffalo",
  "latitude": 43.000809,
  "longitude": -78.78897
}, {
  "name": "University of North Carolina Asheville",
  "latitude": 35.61679,
  "longitude": -82.56948
}, {
  "name": "Austin Peay State University",
  "latitude": 36.53797,
  "longitude": -87.35628
}], [// west
{
  "name": "University of Oregon",
  "latitude": 44.04479,
  "longitude": -123.07268
}, {
  "name": "University of Oklahoma",
  "latitude": 35.20589,
  "longitude": -97.44571000000001
}, {
  "name": "Texas A&M University",
  "latitude": 30.61869,
  "longitude": -96.33866
}, {
  "name": "Duke University",
  "latitude": 36.00143,
  "longitude": -78.93823
}, {
  "name": "Baylor University",
  "latitude": 31.54822,
  "longitude": -97.11844
}, {
  "name": "University of Texas",
  "latitude": 30.28482,
  "longitude": -97.7340801
}, {
  "name": "Oregon State University",
  "latitude": 44.56378,
  "longitude": -123.28163
}, {
  "name": "Saint Joseph's University",
  "latitude": 39.99526,
  "longitude": -75.23891
}, {
  "name": "University of Cincinnati",
  "latitude": 39.13292,
  "longitude": -84.51495
}, {
  "name": "Virginia Commonwealth University",
  "latitude": 37.54899,
  "longitude": -77.45343
}, {
  "name": "University of Northern Iowa",
  "latitude": 42.513698,
  "longitude": -92.463516
}, {
  "name": "Yale University",
  "latitude": 41.31632,
  "longitude": -72.92453
}, {
  "name": "University of North Carolina Wilmington",
  "latitude": 34.22577,
  "longitude": -77.87196
}, {
  "name": "University of Wisconsin Green Bay",
  "latitude": 44.53230,
  "longitude": -87.92354
}, {
  "name": "California State Bakersfield",
  "latitude": 35.34955,
  "longitude": -119.09971
}, {
  "name": "College of the Holy Cross",
  "latitude": 42.23788,
  "longitude": -71.80743
}]], [[// east
{
  "name": "University of North Carolina",
  "latitude": 34.22577,
  "longitude": -77.86977
}, {
  "name": "Xavier University",
  "latitude": 39.14909,
  "longitude": -84.47404
}, {
  "name": "West Virginia University",
  "latitude": 39.63614,
  "longitude": -79.955936
}, {
  "name": "University of Kentucky",
  "latitude": 38.03065,
  "longitude": -84.50397
}, {
  "name": "Indiana University",
  "latitude": 39.169135,
  "longitude": -86.514905
}, {
  "name": "University of Notre Dame",
  "latitude": 41.705572,
  "longitude": -86.235339
}, {
  "name": "University of Wisconsin",
  "latitude": 43.07659,
  "longitude": -89.41249000000001
}, {
  "name": "University of Southern California",
  "latitude": 34.02235,
  "longitude": -118.28730
}, {
  "name": "Providence College",
  "latitude": 41.84388,
  "longitude": -71.43467
}, {
  "name": "University of Pittsburgh",
  "latitude": 40.44435,
  "longitude": -79.96083
}, {
  "name": "University of Michigan",
  "latitude": 42.27806,
  "longitude": -83.73823
}, {
  "name": "University of Tennessee at Chattanooga",
  "latitude": 35.04653,
  "longitude": -85.29775
}, {
  "name": "Stony Brook University",
  "latitude": 40.91237,
  "longitude": -73.12557
}, {
  "name": "Stephen F. Austin State University",
  "latitude": 31.62101,
  "longitude": -94.64584000000001
}, {
  "name": "Weber State University",
  "latitude": 41.19256,
  "longitude": -111.94464
}, {
  "name": "Florida Gulf Coast University",
  "latitude": 26.46404,
  "longitude": -81.77581
}], [// midwest
{
  "name": "University of Virginia",
  "latitude": 38.03355,
  "longitude": -78.50798
}, {
  "name": "Michigan State University",
  "latitude": 42.70419,
  "longitude": -84.47915
}, {
  "name": "University of Utah",
  "latitude": 40.764937,
  "longitude": -111.842102
}, {
  "name": "Iowa State University",
  "latitude": 42.02662,
  "longitude": -93.64646999999999
}, {
  "name": "Purdue University",
  "latitude": 40.423705,
  "longitude": -86.921195
}, {
  "name": "Seton Hall University",
  "latitude": 40.74510,
  "longitude": -74.24519
}, {
  "name": "University of Dayton",
  "latitude": 39.74066,
  "longitude": -84.17923999999999
}, {
  "name": "Texas Tech University",
  "latitude": 33.58425,
  "longitude": -101.88047
}, {
  "name": "Butler University",
  "latitude": 39.8396,
  "longitude": -86.16972
}, {
  "name": "Syracuse University",
  "latitude": 43.03915,
  "longitude": -76.13512
}, {
  "name": "Gonzaga University",
  "latitude": 47.66723,
  "longitude": -117.40288
}, {
  "name": "University of Arkansas at Little Rock",
  "latitude": 34.72097,
  "longitude": -92.34169
}, {
  "name": "Iona College",
  "latitude": 40.92660,
  "longitude": -73.78822
}, {
  "name": "Fresno State University",
  "latitude": 36.81425,
  "longitude": -119.76021
}, {
  "name": "Middle Tennessee State University",
  "latitude": 35.84805,
  "longitude": -86.36852
}, {
  "name": "Hampton University",
  "latitude": 37.021601,
  "longitude": -76.336231
}]]];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! geolib 2.0.21 by Manuel Bieh
* Library to provide geo functions like distance calculation,
* conversion of decimal coordinates to sexagesimal and vice versa, etc.
* WGS 84 (World Geodetic System 1984)
* 
* @author Manuel Bieh
* @url http://www.manuelbieh.com/
* @version 2.0.21
* @license MIT 
**/;(function(global, undefined) {

    "use strict";

    function Geolib() {}

    // Constants
    Geolib.TO_RAD = Math.PI / 180;
    Geolib.TO_DEG = 180 / Math.PI;
    Geolib.PI_X2 = Math.PI * 2;
    Geolib.PI_DIV4 = Math.PI / 4;

    // Setting readonly defaults
    var geolib = Object.create(Geolib.prototype, {
        version: {
            value: "2.0.21"
        },
        radius: {
            value: 6378137
        },
        minLat: {
            value: -90
        },
        maxLat: {
            value: 90
        },
        minLon: {
            value: -180
        },
        maxLon: {
            value: 180
        },
        sexagesimalPattern: {
            value: /^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,2}))?)'\s*(([0-9]{1,3}(\.([0-9]{1,4}))?)"\s*)?([NEOSW]?)$/
        },
        measures: {
            value: Object.create(Object.prototype, {
                "m" : {value: 1},
                "km": {value: 0.001},
                "cm": {value: 100},
                "mm": {value: 1000},
                "mi": {value: (1 / 1609.344)},
                "sm": {value: (1 / 1852.216)},
                "ft": {value: (100 / 30.48)},
                "in": {value: (100 / 2.54)},
                "yd": {value: (1 / 0.9144)}
            })
        },
        prototype: {
            value: Geolib.prototype
        },
        extend: {
            value: function(methods, overwrite) {
                for(var prop in methods) {
                    if(typeof geolib.prototype[prop] === 'undefined' || overwrite === true) {
                        if(typeof methods[prop] === 'function' && typeof methods[prop].bind === 'function') {
                            geolib.prototype[prop] = methods[prop].bind(geolib);
                        } else {
                            geolib.prototype[prop] = methods[prop];
                        }
                    }
                }
            }
        }
    });

    if (typeof(Number.prototype.toRad) === 'undefined') {
        Number.prototype.toRad = function() {
            return this * Geolib.TO_RAD;
        };
    }

    if (typeof(Number.prototype.toDeg) === 'undefined') {
        Number.prototype.toDeg = function() {
            return this * Geolib.TO_DEG;
        };
    }

    // Here comes the magic
    geolib.extend({

        decimal: {},

        sexagesimal: {},

        distance: null,

        getKeys: function(point) {

            // GeoJSON Array [longitude, latitude(, elevation)]
            if(Object.prototype.toString.call(point) == '[object Array]') {

                return {
                    longitude: point.length >= 1 ? 0 : undefined,
                    latitude: point.length >= 2 ? 1 : undefined,
                    elevation: point.length >= 3 ? 2 : undefined
                };

            }

            var getKey = function(possibleValues) {

                var key;

                possibleValues.every(function(val) {
                    // TODO: check if point is an object
                    if(typeof point != 'object') {
                        return true;
                    }
                    return point.hasOwnProperty(val) ? (function() { key = val; return false; }()) : true;
                });

                return key;

            };

            var longitude = getKey(['lng', 'lon', 'longitude']);
            var latitude = getKey(['lat', 'latitude']);
            var elevation = getKey(['alt', 'altitude', 'elevation', 'elev']);

            // return undefined if not at least one valid property was found
            if(typeof latitude == 'undefined' &&
                typeof longitude == 'undefined' &&
                typeof elevation == 'undefined') {
                return undefined;
            }

            return {
                latitude: latitude,
                longitude: longitude,
                elevation: elevation
            };

        },

        // returns latitude of a given point, converted to decimal
        // set raw to true to avoid conversion
        getLat: function(point, raw) {
            return raw === true ? point[this.getKeys(point).latitude] : this.useDecimal(point[this.getKeys(point).latitude]);
        },

        // Alias for getLat
        latitude: function(point) {
            return this.getLat.call(this, point);
        },

        // returns longitude of a given point, converted to decimal
        // set raw to true to avoid conversion
        getLon: function(point, raw) {
            return raw === true ? point[this.getKeys(point).longitude] : this.useDecimal(point[this.getKeys(point).longitude]);
        },

        // Alias for getLon
        longitude: function(point) {
            return this.getLon.call(this, point);
        },

        getElev: function(point) {
            return point[this.getKeys(point).elevation];
        },

        // Alias for getElev
        elevation: function(point) {
            return this.getElev.call(this, point);
        },

        coords: function(point, raw) {

            var retval = {
                latitude: raw === true ? point[this.getKeys(point).latitude] : this.useDecimal(point[this.getKeys(point).latitude]),
                longitude: raw === true ? point[this.getKeys(point).longitude] : this.useDecimal(point[this.getKeys(point).longitude])
            };

            var elev = point[this.getKeys(point).elevation];

            if(typeof elev !== 'undefined') {
                retval['elevation'] = elev;
            }

            return retval;

        },

        // Alias for coords
        ll: function(point, raw) {
            return this.coords.call(this, point, raw);
        },


        // checks if a variable contains a valid latlong object
        validate: function(point) {

            var keys = this.getKeys(point);

            if(typeof keys === 'undefined' || typeof keys.latitude === 'undefined' || keys.longitude === 'undefined') {
                return false;
            }

            var lat = point[keys.latitude];
            var lng = point[keys.longitude];

            if(typeof lat === 'undefined' || !this.isDecimal(lat) && !this.isSexagesimal(lat)) {
                return false;
            }

            if(typeof lng === 'undefined' || !this.isDecimal(lng) && !this.isSexagesimal(lng)) {
                return false;
            }

            lat = this.useDecimal(lat);
            lng = this.useDecimal(lng);

            if(lat < this.minLat || lat > this.maxLat || lng < this.minLon || lng > this.maxLon) {
                return false;
            }

            return true;

        },

        /**
        * Calculates geodetic distance between two points specified by latitude/longitude using
        * Vincenty inverse formula for ellipsoids
        * Vincenty Inverse Solution of Geodesics on the Ellipsoid (c) Chris Veness 2002-2010
        * (Licensed under CC BY 3.0)
        *
        * @param    object    Start position {latitude: 123, longitude: 123}
        * @param    object    End position {latitude: 123, longitude: 123}
        * @param    integer   Accuracy (in meters)
        * @param    integer   Precision (in decimal cases)
        * @return   integer   Distance (in meters)
        */
        getDistance: function(start, end, accuracy, precision) {

            accuracy = Math.floor(accuracy) || 1;
            precision = Math.floor(precision) || 0;

            var s = this.coords(start);
            var e = this.coords(end);

            var a = 6378137, b = 6356752.314245,  f = 1/298.257223563;  // WGS-84 ellipsoid params
            var L = (e['longitude']-s['longitude']).toRad();

            var cosSigma, sigma, sinAlpha, cosSqAlpha, cos2SigmaM, sinSigma;

            var U1 = Math.atan((1-f) * Math.tan(parseFloat(s['latitude']).toRad()));
            var U2 = Math.atan((1-f) * Math.tan(parseFloat(e['latitude']).toRad()));
            var sinU1 = Math.sin(U1), cosU1 = Math.cos(U1);
            var sinU2 = Math.sin(U2), cosU2 = Math.cos(U2);

            var lambda = L, lambdaP, iterLimit = 100;
            do {
                var sinLambda = Math.sin(lambda), cosLambda = Math.cos(lambda);
                sinSigma = (
                    Math.sqrt(
                        (
                            cosU2 * sinLambda
                        ) * (
                            cosU2 * sinLambda
                        ) + (
                            cosU1 * sinU2 - sinU1 * cosU2 * cosLambda
                        ) * (
                            cosU1 * sinU2 - sinU1 * cosU2 * cosLambda
                        )
                    )
                );
                if (sinSigma === 0) {
                    return geolib.distance = 0;  // co-incident points
                }

                cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
                sigma = Math.atan2(sinSigma, cosSigma);
                sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
                cosSqAlpha = 1 - sinAlpha * sinAlpha;
                cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;

                if (isNaN(cos2SigmaM)) {
                    cos2SigmaM = 0;  // equatorial line: cosSqAlpha=0 (§6)
                }
                var C = (
                    f / 16 * cosSqAlpha * (
                        4 + f * (
                            4 - 3 * cosSqAlpha
                        )
                    )
                );
                lambdaP = lambda;
                lambda = (
                    L + (
                        1 - C
                    ) * f * sinAlpha * (
                        sigma + C * sinSigma * (
                            cos2SigmaM + C * cosSigma * (
                                -1 + 2 * cos2SigmaM * cos2SigmaM
                            )
                        )
                    )
                );

            } while (Math.abs(lambda-lambdaP) > 1e-12 && --iterLimit>0);

            if (iterLimit === 0) {
                return NaN;  // formula failed to converge
            }

            var uSq = (
                cosSqAlpha * (
                    a * a - b * b
                ) / (
                    b*b
                )
            );

            var A = (
                1 + uSq / 16384 * (
                    4096 + uSq * (
                        -768 + uSq * (
                            320 - 175 * uSq
                        )
                    )
                )
            );

            var B = (
                uSq / 1024 * (
                    256 + uSq * (
                        -128 + uSq * (
                            74-47 * uSq
                        )
                    )
                )
            );

            var deltaSigma = (
                B * sinSigma * (
                    cos2SigmaM + B / 4 * (
                        cosSigma * (
                            -1 + 2 * cos2SigmaM * cos2SigmaM
                        ) -B / 6 * cos2SigmaM * (
                            -3 + 4 * sinSigma * sinSigma
                        ) * (
                            -3 + 4 * cos2SigmaM * cos2SigmaM
                        )
                    )
                )
            );

            var distance = b * A * (sigma - deltaSigma);

            distance = distance.toFixed(precision); // round to 1mm precision

            //if (start.hasOwnProperty(elevation) && end.hasOwnProperty(elevation)) {
            if (typeof this.elevation(start) !== 'undefined' && typeof this.elevation(end) !== 'undefined') {
                var climb = Math.abs(this.elevation(start) - this.elevation(end));
                distance = Math.sqrt(distance * distance + climb * climb);
            }

            return this.distance = Math.round(distance * Math.pow(10, precision) / accuracy) * accuracy / Math.pow(10, precision);

            /*
            // note: to return initial/final bearings in addition to distance, use something like:
            var fwdAz = Math.atan2(cosU2*sinLambda,  cosU1*sinU2-sinU1*cosU2*cosLambda);
            var revAz = Math.atan2(cosU1*sinLambda, -sinU1*cosU2+cosU1*sinU2*cosLambda);

            return { distance: s, initialBearing: fwdAz.toDeg(), finalBearing: revAz.toDeg() };
            */

        },


        /**
        * Calculates the distance between two spots.
        * This method is more simple but also far more inaccurate
        *
        * @param    object    Start position {latitude: 123, longitude: 123}
        * @param    object    End position {latitude: 123, longitude: 123}
        * @param    integer   Accuracy (in meters)
        * @return   integer   Distance (in meters)
        */
        getDistanceSimple: function(start, end, accuracy) {

            accuracy = Math.floor(accuracy) || 1;

            var distance =
                Math.round(
                    Math.acos(
                        Math.sin(
                            this.latitude(end).toRad()
                        ) *
                        Math.sin(
                            this.latitude(start).toRad()
                        ) +
                        Math.cos(
                            this.latitude(end).toRad()
                        ) *
                        Math.cos(
                            this.latitude(start).toRad()
                        ) *
                        Math.cos(
                            this.longitude(start).toRad() - this.longitude(end).toRad()
                        )
                    ) * this.radius
                );

            return geolib.distance = Math.floor(Math.round(distance/accuracy)*accuracy);

        },


    /**
        * Calculates the center of a collection of geo coordinates
        *
        * @param        array       Collection of coords [{latitude: 51.510, longitude: 7.1321}, {latitude: 49.1238, longitude: "8° 30' W"}, ...]
        * @return       object      {latitude: centerLat, longitude: centerLng}
        */
        getCenter: function(coords) {

            var coordsArray = coords;
            if(typeof coords === 'object' && !(coords instanceof Array)) {

                coordsArray = [];

                for(var key in coords) {
                    coordsArray.push(
                        this.coords(coords[key])
                    );
                }

            }

            if(!coordsArray.length) {
                return false;
            }

            var X = 0.0;
            var Y = 0.0;
            var Z = 0.0;
            var lat, lon, hyp;

            coordsArray.forEach(function(coord) {

                lat = this.latitude(coord).toRad();
                lon = this.longitude(coord).toRad();

                X += Math.cos(lat) * Math.cos(lon);
                Y += Math.cos(lat) * Math.sin(lon);
                Z += Math.sin(lat);

            }, this);

            var nb_coords = coordsArray.length;
            X = X / nb_coords;
            Y = Y / nb_coords;
            Z = Z / nb_coords;

            lon = Math.atan2(Y, X);
            hyp = Math.sqrt(X * X + Y * Y);
            lat = Math.atan2(Z, hyp);

            return {
                latitude: (lat * Geolib.TO_DEG).toFixed(6),
                longitude: (lon * Geolib.TO_DEG).toFixed(6)
            };

        },


        /**
        * Gets the max and min, latitude, longitude, and elevation (if provided).
        * @param        array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        * @return   object      {maxLat: maxLat,
        *                     minLat: minLat
        *                     maxLng: maxLng,
        *                     minLng: minLng,
        *                     maxElev: maxElev,
        *                     minElev: minElev}
        */
        getBounds: function(coords) {

            if (!coords.length) {
                return false;
            }

            var useElevation = this.elevation(coords[0]);

            var stats = {
                maxLat: -Infinity,
                minLat: Infinity,
                maxLng: -Infinity,
                minLng: Infinity
            };

            if (typeof useElevation != 'undefined') {
                stats.maxElev = 0;
                stats.minElev = Infinity;
            }

            for (var i = 0, l = coords.length; i < l; ++i) {

                stats.maxLat = Math.max(this.latitude(coords[i]), stats.maxLat);
                stats.minLat = Math.min(this.latitude(coords[i]), stats.minLat);
                stats.maxLng = Math.max(this.longitude(coords[i]), stats.maxLng);
                stats.minLng = Math.min(this.longitude(coords[i]), stats.minLng);

                if (useElevation) {
                    stats.maxElev = Math.max(this.elevation(coords[i]), stats.maxElev);
                    stats.minElev = Math.min(this.elevation(coords[i]), stats.minElev);
                }

            }

            return stats;

        },

        /**
        * Calculates the center of the bounds of geo coordinates.
        *
        * On polygons like political borders (eg. states)
        * this may gives a closer result to human expectation, than `getCenter`,
        * because that function can be disturbed by uneven distribution of
        * point in different sides.
        * Imagine the US state Oklahoma: `getCenter` on that gives a southern
        * point, because the southern border contains a lot more nodes,
        * than the others.
        *
        * @param        array       Collection of coords [{latitude: 51.510, longitude: 7.1321}, {latitude: 49.1238, longitude: "8° 30' W"}, ...]
        * @return       object      {latitude: centerLat, longitude: centerLng}
        */
        getCenterOfBounds: function(coords) {
            var b = this.getBounds(coords);
            var latitude = b.minLat + ((b.maxLat - b.minLat) / 2);
            var longitude = b.minLng + ((b.maxLng - b.minLng) / 2);
            return {
                latitude: parseFloat(latitude.toFixed(6)),
                longitude: parseFloat(longitude.toFixed(6))
            };
        },


        /**
        * Computes the bounding coordinates of all points on the surface
        * of the earth less than or equal to the specified great circle
        * distance.
        *
        * @param object Point position {latitude: 123, longitude: 123}
        * @param number Distance (in meters).
        * @return array Collection of two points defining the SW and NE corners.
        */
        getBoundsOfDistance: function(point, distance) {

            var latitude = this.latitude(point);
            var longitude = this.longitude(point);

            var radLat = latitude.toRad();
            var radLon = longitude.toRad();

            var radDist = distance / this.radius;
            var minLat = radLat - radDist;
            var maxLat = radLat + radDist;

            var MAX_LAT_RAD = this.maxLat.toRad();
            var MIN_LAT_RAD = this.minLat.toRad();
            var MAX_LON_RAD = this.maxLon.toRad();
            var MIN_LON_RAD = this.minLon.toRad();

            var minLon;
            var maxLon;

            if (minLat > MIN_LAT_RAD && maxLat < MAX_LAT_RAD) {

                var deltaLon = Math.asin(Math.sin(radDist) / Math.cos(radLat));
                minLon = radLon - deltaLon;

                if (minLon < MIN_LON_RAD) {
                    minLon += Geolib.PI_X2;
                }

                maxLon = radLon + deltaLon;

                if (maxLon > MAX_LON_RAD) {
                    maxLon -= Geolib.PI_X2;
                }

            } else {
                // A pole is within the distance.
                minLat = Math.max(minLat, MIN_LAT_RAD);
                maxLat = Math.min(maxLat, MAX_LAT_RAD);
                minLon = MIN_LON_RAD;
                maxLon = MAX_LON_RAD;
            }

            return [
                // Southwest
                {
                    latitude: minLat.toDeg(),
                    longitude: minLon.toDeg()
                },
                // Northeast
                {
                    latitude: maxLat.toDeg(),
                    longitude: maxLon.toDeg()
                }
            ];

        },


        /**
        * Checks whether a point is inside of a polygon or not.
        * Note that the polygon coords must be in correct order!
        *
        * @param        object      coordinate to check e.g. {latitude: 51.5023, longitude: 7.3815}
        * @param        array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        * @return       bool        true if the coordinate is inside the given polygon
        */
        isPointInside: function(latlng, coords) {

            for(var c = false, i = -1, l = coords.length, j = l - 1; ++i < l; j = i) {

                if(
                    (
                        (this.longitude(coords[i]) <= this.longitude(latlng) && this.longitude(latlng) < this.longitude(coords[j])) ||
                        (this.longitude(coords[j]) <= this.longitude(latlng) && this.longitude(latlng) < this.longitude(coords[i]))
                    ) &&
                    (
                        this.latitude(latlng) < (this.latitude(coords[j]) - this.latitude(coords[i])) *
                        (this.longitude(latlng) - this.longitude(coords[i])) /
                        (this.longitude(coords[j]) - this.longitude(coords[i])) +
                        this.latitude(coords[i])
                    )
                ) {
                    c = !c;
                }

            }

            return c;

        },


       /**
        * Pre calculate the polygon coords, to speed up the point inside check.
        * Use this function before calling isPointInsideWithPreparedPolygon()
        * @see          Algorythm from http://alienryderflex.com/polygon/
        * @param        array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        */
        preparePolygonForIsPointInsideOptimized: function(coords) {

            for(var i = 0, j = coords.length-1; i < coords.length; i++) {

            if(this.longitude(coords[j]) === this.longitude(coords[i])) {

                    coords[i].constant = this.latitude(coords[i]);
                    coords[i].multiple = 0;

                } else {

                    coords[i].constant = this.latitude(coords[i]) - (
                        this.longitude(coords[i]) * this.latitude(coords[j])
                    ) / (
                        this.longitude(coords[j]) - this.longitude(coords[i])
                    ) + (
                        this.longitude(coords[i])*this.latitude(coords[i])
                    ) / (
                        this.longitude(coords[j])-this.longitude(coords[i])
                    );

                    coords[i].multiple = (
                        this.latitude(coords[j])-this.latitude(coords[i])
                    ) / (
                        this.longitude(coords[j])-this.longitude(coords[i])
                    );

                }

                j=i;

            }

        },

      /**
       * Checks whether a point is inside of a polygon or not.
       * "This is useful if you have many points that need to be tested against the same (static) polygon."
       * Please call the function preparePolygonForIsPointInsideOptimized() with the same coords object before using this function.
       * Note that the polygon coords must be in correct order!
       *
       * @see          Algorythm from http://alienryderflex.com/polygon/
       *
       * @param     object      coordinate to check e.g. {latitude: 51.5023, longitude: 7.3815}
       * @param     array       array with coords e.g. [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
       * @return        bool        true if the coordinate is inside the given polygon
       */
        isPointInsideWithPreparedPolygon: function(point, coords) {

            var flgPointInside = false,
            y = this.longitude(point),
            x = this.latitude(point);

            for(var i = 0, j = coords.length-1; i < coords.length; i++) {

                if ((this.longitude(coords[i]) < y && this.longitude(coords[j]) >=y ||
                    this.longitude(coords[j]) < y && this.longitude(coords[i]) >= y)) {

                    flgPointInside^=(y*coords[i].multiple+coords[i].constant < x);

                }

                j=i;

            }

            return flgPointInside;

        },


        /**
        * Shortcut for geolib.isPointInside()
        */
        isInside: function() {
            return this.isPointInside.apply(this, arguments);
        },


        /**
        * Checks whether a point is inside of a circle or not.
        *
        * @param        object      coordinate to check (e.g. {latitude: 51.5023, longitude: 7.3815})
        * @param        object      coordinate of the circle's center (e.g. {latitude: 51.4812, longitude: 7.4025})
        * @param        integer     maximum radius in meters
        * @return       bool        true if the coordinate is within the given radius
        */
        isPointInCircle: function(latlng, center, radius) {
            return this.getDistance(latlng, center) < radius;
        },


        /**
        * Shortcut for geolib.isPointInCircle()
        */
        withinRadius: function() {
            return this.isPointInCircle.apply(this, arguments);
        },


        /**
        * Gets rhumb line bearing of two points. Find out about the difference between rhumb line and
        * great circle bearing on Wikipedia. It's quite complicated. Rhumb line should be fine in most cases:
        *
        * http://en.wikipedia.org/wiki/Rhumb_line#General_and_mathematical_description
        *
        * Function heavily based on Doug Vanderweide's great PHP version (licensed under GPL 3.0)
        * http://www.dougv.com/2009/07/13/calculating-the-bearing-and-compass-rose-direction-between-two-latitude-longitude-coordinates-in-php/
        *
        * @param        object      origin coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
        * @param        object      destination coordinate
        * @return       integer     calculated bearing
        */
        getRhumbLineBearing: function(originLL, destLL) {

            // difference of longitude coords
            var diffLon = this.longitude(destLL).toRad() - this.longitude(originLL).toRad();

            // difference latitude coords phi
            var diffPhi = Math.log(
                Math.tan(
                    this.latitude(destLL).toRad() / 2 + Geolib.PI_DIV4
                ) /
                Math.tan(
                    this.latitude(originLL).toRad() / 2 + Geolib.PI_DIV4
                )
            );

            // recalculate diffLon if it is greater than pi
            if(Math.abs(diffLon) > Math.PI) {
                if(diffLon > 0) {
                    diffLon = (Geolib.PI_X2 - diffLon) * -1;
                }
                else {
                    diffLon = Geolib.PI_X2 + diffLon;
                }
            }

            //return the angle, normalized
            return (Math.atan2(diffLon, diffPhi).toDeg() + 360) % 360;

        },


        /**
        * Gets great circle bearing of two points. See description of getRhumbLineBearing for more information
        *
        * @param        object      origin coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
        * @param        object      destination coordinate
        * @return       integer     calculated bearing
        */
        getBearing: function(originLL, destLL) {

            destLL['latitude'] = this.latitude(destLL);
            destLL['longitude'] = this.longitude(destLL);
            originLL['latitude'] = this.latitude(originLL);
            originLL['longitude'] = this.longitude(originLL);

            var bearing = (
                (
                    Math.atan2(
                        Math.sin(
                            destLL['longitude'].toRad() -
                            originLL['longitude'].toRad()
                        ) *
                        Math.cos(
                            destLL['latitude'].toRad()
                        ),
                        Math.cos(
                            originLL['latitude'].toRad()
                        ) *
                        Math.sin(
                            destLL['latitude'].toRad()
                        ) -
                        Math.sin(
                            originLL['latitude'].toRad()
                        ) *
                        Math.cos(
                            destLL['latitude'].toRad()
                        ) *
                        Math.cos(
                            destLL['longitude'].toRad() - originLL['longitude'].toRad()
                        )
                    )
                ).toDeg() + 360
            ) % 360;

            return bearing;

        },


        /**
        * Gets the compass direction from an origin coordinate to a destination coordinate.
        *
        * @param        object      origin coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
        * @param        object      destination coordinate
        * @param        string      Bearing mode. Can be either circle or rhumbline
        * @return       object      Returns an object with a rough (NESW) and an exact direction (NNE, NE, ENE, E, ESE, etc).
        */
        getCompassDirection: function(originLL, destLL, bearingMode) {

            var direction;
            var bearing;

            if(bearingMode == 'circle') {
                // use great circle bearing
                bearing = this.getBearing(originLL, destLL);
            } else {
                // default is rhumb line bearing
                bearing = this.getRhumbLineBearing(originLL, destLL);
            }

            switch(Math.round(bearing/22.5)) {
                case 1:
                    direction = {exact: "NNE", rough: "N"};
                    break;
                case 2:
                    direction = {exact: "NE", rough: "N"};
                    break;
                case 3:
                    direction = {exact: "ENE", rough: "E"};
                    break;
                case 4:
                    direction = {exact: "E", rough: "E"};
                    break;
                case 5:
                    direction = {exact: "ESE", rough: "E"};
                    break;
                case 6:
                    direction = {exact: "SE", rough: "E"};
                    break;
                case 7:
                    direction = {exact: "SSE", rough: "S"};
                    break;
                case 8:
                    direction = {exact: "S", rough: "S"};
                    break;
                case 9:
                    direction = {exact: "SSW", rough: "S"};
                    break;
                case 10:
                    direction = {exact: "SW", rough: "S"};
                    break;
                case 11:
                    direction = {exact: "WSW", rough: "W"};
                    break;
                case 12:
                    direction = {exact: "W", rough: "W"};
                    break;
                case 13:
                    direction = {exact: "WNW", rough: "W"};
                    break;
                case 14:
                    direction = {exact: "NW", rough: "W"};
                    break;
                case 15:
                    direction = {exact: "NNW", rough: "N"};
                    break;
                default:
                    direction = {exact: "N", rough: "N"};
            }

            direction['bearing'] = bearing;
            return direction;

        },


        /**
        * Shortcut for getCompassDirection
        */
        getDirection: function(originLL, destLL, bearingMode) {
            return this.getCompassDirection.apply(this, arguments);
        },


        /**
        * Sorts an array of coords by distance from a reference coordinate
        *
        * @param        object      reference coordinate e.g. {latitude: 51.5023, longitude: 7.3815}
        * @param        mixed       array or object with coords [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        * @return       array       ordered array
        */
        orderByDistance: function(latlng, coords) {

            var coordsArray = [];

            for(var coord in coords) {

                var distance = this.getDistance(latlng, coords[coord]);
                var augmentedCoord = Object.create(coords[coord]);
                augmentedCoord.distance = distance;
                augmentedCoord.key = coord;

                coordsArray.push(augmentedCoord);

            }

            return coordsArray.sort(function(a, b) {
                return a.distance - b.distance;
            });

        },

        /**
        * Check if a point lies in line created by two other points
        *
        * @param    object    Point to check: {latitude: 123, longitude: 123}
        * @param    object    Start of line {latitude: 123, longitude: 123}
        * @param    object    End of line {latitude: 123, longitude: 123}
        * @return   boolean
        */
        isPointInLine: function(point, start, end) {

            return (this.getDistance(start, point, 1, 3)+this.getDistance(point, end, 1, 3)).toFixed(3)==this.getDistance(start, end, 1, 3);
        },

                /**
        * Check if a point lies within a given distance from a line created by two other points
        *
        * @param    object    Point to check: {latitude: 123, longitude: 123}
        * @param    object    Start of line {latitude: 123, longitude: 123}
        * @param    object    End of line {latitude: 123, longitude: 123}
        * @pararm   float     maximum distance from line
        * @return   boolean
        */
        isPointNearLine: function(point, start, end, distance) {
            return this.getDistanceFromLine(point, start, end) < distance;
        },

                     /**
        * return the minimum distance from a point to a line
        *
        * @param    object    Point away from line
        * @param    object    Start of line {latitude: 123, longitude: 123}
        * @param    object    End of line {latitude: 123, longitude: 123}
        * @return   float     distance from point to line
        */
        getDistanceFromLine: function(point, start, end) {
            var d1 = this.getDistance(start, point, 1, 3);
            var d2 = this.getDistance(point, end, 1, 3);
            var d3 = this.getDistance(start, end, 1, 3);
            var distance = 0;

            // alpha is the angle between the line from start to point, and from start to end //
            var alpha = Math.acos((d1*d1 + d3*d3 - d2*d2)/(2*d1*d3));
            // beta is the angle between the line from end to point and from end to start //
            var beta = Math.acos((d2*d2 + d3*d3 - d1*d1)/(2*d2*d3));

            // if the angle is greater than 90 degrees, then the minimum distance is the
            // line from the start to the point //
            if(alpha>Math.PI/2) {
                distance = d1;
            }
            // same for the beta //
            else if(beta > Math.PI/2) {
                distance = d2;
            }
            // otherwise the minimum distance is achieved through a line perpendular to the start-end line,
            // which goes from the start-end line to the point //
            else {
                distance = Math.sin(alpha) * d1;
            }

            return distance;
        },

        /**
        * Finds the nearest coordinate to a reference coordinate
        *
        * @param        object      reference coordinate e.g. {latitude: 51.5023, longitude: 7.3815}
        * @param        mixed       array or object with coords [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        * @return       array       ordered array
        */
        findNearest: function(latlng, coords, offset, limit) {

            offset = offset || 0;
            limit = limit || 1;
            var ordered = this.orderByDistance(latlng, coords);

            if(limit === 1) {
                return ordered[offset];
            } else {
                return ordered.splice(offset, limit);
            }

        },


        /**
        * Calculates the length of a given path
        *
        * @param        mixed       array or object with coords [{latitude: 51.5143, longitude: 7.4138}, {latitude: 123, longitude: 123}, ...]
        * @return       integer     length of the path (in meters)
        */
        getPathLength: function(coords) {

            var dist = 0;
            var last;

            for (var i = 0, l = coords.length; i < l; ++i) {
                if(last) {
                    //console.log(coords[i], last, this.getDistance(coords[i], last));
                    dist += this.getDistance(this.coords(coords[i]), last);
                }
                last = this.coords(coords[i]);
            }

            return dist;

        },


        /**
        * Calculates the speed between to points within a given time span.
        *
        * @param        object      coords with javascript timestamp {latitude: 51.5143, longitude: 7.4138, time: 1360231200880}
        * @param        object      coords with javascript timestamp {latitude: 51.5502, longitude: 7.4323, time: 1360245600460}
        * @param        object      options (currently "unit" is the only option. Default: km(h));
        * @return       float       speed in unit per hour
        */
        getSpeed: function(start, end, options) {

            var unit = options && options.unit || 'km';

            if(unit == 'mph') {
                unit = 'mi';
            } else if(unit == 'kmh') {
                unit = 'km';
            }

            var distance = geolib.getDistance(start, end);
            var time = ((end.time*1)/1000) - ((start.time*1)/1000);
            var mPerHr = (distance/time)*3600;
            var speed = Math.round(mPerHr * this.measures[unit] * 10000)/10000;
            return speed;

        },


        /**
         * Computes the destination point given an initial point, a distance
         * and a bearing
         *
         * see http://www.movable-type.co.uk/scripts/latlong.html for the original code
         *
         * @param        object     start coordinate (e.g. {latitude: 51.5023, longitude: 7.3815})
         * @param        float      longitude of the inital point in degree
         * @param        float      distance to go from the inital point in meter
         * @param        float      bearing in degree of the direction to go, e.g. 0 = north, 180 = south
         * @param        float      optional (in meter), defaults to mean radius of the earth
         * @return       object     {latitude: destLat (in degree), longitude: destLng (in degree)}
         */
        computeDestinationPoint: function(start, distance, bearing, radius) {

            var lat = this.latitude(start);
            var lng = this.longitude(start);

            radius = (typeof radius === 'undefined') ? this.radius : Number(radius);

            var δ = Number(distance) / radius; // angular distance in radians
            var θ = Number(bearing).toRad();

            var φ1 = Number(lat).toRad();
            var λ1 = Number(lng).toRad();

            var φ2 = Math.asin( Math.sin(φ1)*Math.cos(δ) +
                Math.cos(φ1)*Math.sin(δ)*Math.cos(θ) );
            var λ2 = λ1 + Math.atan2(Math.sin(θ)*Math.sin(δ)*Math.cos(φ1),
                    Math.cos(δ)-Math.sin(φ1)*Math.sin(φ2));
            λ2 = (λ2+3*Math.PI) % (2*Math.PI) - Math.PI; // normalise to -180..+180°

            return {
                latitude: φ2.toDeg(),
                longitude: λ2.toDeg()
            };

        },


        /**
        * Converts a distance from meters to km, mm, cm, mi, ft, in or yd
        *
        * @param        string      Format to be converted in
        * @param        float       Distance in meters
        * @param        float       Decimal places for rounding (default: 4)
        * @return       float       Converted distance
        */
        convertUnit: function(unit, distance, round) {

            if(distance === 0) {

                return 0;

            } else if(typeof distance === 'undefined') {

                if(this.distance === null) {
                    throw new Error('No distance was given');
                } else if(this.distance === 0) {
                    return 0;
                } else {
                    distance = this.distance;
                }

            }

            unit = unit || 'm';
            round = (null == round ? 4 : round);

            if(typeof this.measures[unit] !== 'undefined') {
                return this.round(distance * this.measures[unit], round);
            } else {
                throw new Error('Unknown unit for conversion.');
            }

        },


        /**
        * Checks if a value is in decimal format or, if neccessary, converts to decimal
        *
        * @param        mixed       Value(s) to be checked/converted (array of latlng objects, latlng object, sexagesimal string, float)
        * @return       float       Input data in decimal format
        */
        useDecimal: function(value) {

            if(Object.prototype.toString.call(value) === '[object Array]') {

                var geolib = this;

                value = value.map(function(val) {

                    //if(!isNaN(parseFloat(val))) {
                    if(geolib.isDecimal(val)) {

                        return geolib.useDecimal(val);

                    } else if(typeof val == 'object') {

                        if(geolib.validate(val)) {

                            return geolib.coords(val);

                        } else {

                            for(var prop in val) {
                                val[prop] = geolib.useDecimal(val[prop]);
                            }

                            return val;

                        }

                    } else if(geolib.isSexagesimal(val)) {

                        return geolib.sexagesimal2decimal(val);

                    } else {

                        return val;

                    }

                });

                return value;

            } else if(typeof value === 'object' && this.validate(value)) {

                return this.coords(value);

            } else if(typeof value === 'object') {

                for(var prop in value) {
                    value[prop] = this.useDecimal(value[prop]);
                }

                return value;

            }


            if (this.isDecimal(value)) {

                return parseFloat(value);

            } else if(this.isSexagesimal(value) === true) {

                return parseFloat(this.sexagesimal2decimal(value));

            }

            throw new Error('Unknown format.');

        },

        /**
        * Converts a decimal coordinate value to sexagesimal format
        *
        * @param        float       decimal
        * @return       string      Sexagesimal value (XX° YY' ZZ")
        */
        decimal2sexagesimal: function(dec) {

            if (dec in this.sexagesimal) {
                return this.sexagesimal[dec];
            }

            var tmp = dec.toString().split('.');

            var deg = Math.abs(tmp[0]);
            var min = ('0.' + (tmp[1] || 0))*60;
            var sec = min.toString().split('.');

            min = Math.floor(min);
            sec = (('0.' + (sec[1] || 0)) * 60).toFixed(2);

            this.sexagesimal[dec] = (deg + '° ' + min + "' " + sec + '"');

            return this.sexagesimal[dec];

        },


        /**
        * Converts a sexagesimal coordinate to decimal format
        *
        * @param        float       Sexagesimal coordinate
        * @return       string      Decimal value (XX.XXXXXXXX)
        */
        sexagesimal2decimal: function(sexagesimal) {

            if (sexagesimal in this.decimal) {
                return this.decimal[sexagesimal];
            }

            var regEx = new RegExp(this.sexagesimalPattern);
            var data = regEx.exec(sexagesimal);
            var min = 0, sec = 0;

            if(data) {
                min = parseFloat(data[2]/60);
                sec = parseFloat(data[4]/3600) || 0;
            }

            var dec = ((parseFloat(data[1]) + min + sec)).toFixed(8);
            //var   dec = ((parseFloat(data[1]) + min + sec));

                // South and West are negative decimals
                dec = (data[7] == 'S' || data[7] == 'W') ? parseFloat(-dec) : parseFloat(dec);
                //dec = (data[7] == 'S' || data[7] == 'W') ? -dec : dec;

            this.decimal[sexagesimal] = dec;

            return dec;

        },


        /**
        * Checks if a value is in decimal format
        *
        * @param        string      Value to be checked
        * @return       bool        True if in sexagesimal format
        */
        isDecimal: function(value) {

            value = value.toString().replace(/\s*/, '');

            // looks silly but works as expected
            // checks if value is in decimal format
            return (!isNaN(parseFloat(value)) && parseFloat(value) == value);

        },


        /**
        * Checks if a value is in sexagesimal format
        *
        * @param        string      Value to be checked
        * @return       bool        True if in sexagesimal format
        */
        isSexagesimal: function(value) {

            value = value.toString().replace(/\s*/, '');

            return this.sexagesimalPattern.test(value);

        },

        round: function(value, n) {
            var decPlace = Math.pow(10, n);
            return Math.round(value * decPlace)/decPlace;
        }

    });

    // Node module
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {

        module.exports = geolib;

        // react native
        if (typeof global === 'object') {
          global.geolib = geolib;
        }

    // AMD module
    } else if (true) {

        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return geolib;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    // we're in a browser
    } else {

        global.geolib = geolib;

    }

}(this));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);