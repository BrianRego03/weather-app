/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/overlay.png */ "./src/images/overlay.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    Typographic tweaks!
    3. Add accessible line-height
    4. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    5. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    6. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    7. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    8. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }


*{
    text-align: center;
}
#loadingDivision{
    font-size: 2.5rem;
    font-weight: 700;
}
#titleDivision{
    
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
}
#searchDivision{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
#searchInput{
    min-width: 10rem;
    max-width: 20rem;
    
    height: 3rem;
    font-size: 2rem;
    text-align: left;
}
#searchButton{
    height: 3rem;
    width: 3rem;
}

#switchDivision{
    position: fixed;
    bottom:-5%;
    right: 2%;
    width:140px;
    height: 140px;
}

#celsius,#fahrenheit{
    border: 0px;
    width:70px;
    height: 70px;
    
}
#contentSection{
    min-width: 100%;
    display: flex;
    flex-direction: column;
    
}
.greyed{
    color: rgb(178, 178, 178);
    background-color: rgb(78, 78, 78);
}
.selected{
    color: white;
    background-color: #0c1d61;
}
#cityDivision,#todayDivision,#descriptionDivision{
    font-size: 1.7rem;
    font-weight: 500;
}

#mainTempDivision{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    margin-top:1rem;
    font-size: 3rem;
    background-color: rgba(255,255,255,0.2);
    padding: 20px;
}

#iconDivision{
    width: 100px;
    margin-right: 1.5rem;
}
#iconDivision>img{
    width: 90px;
}
#tempDivision{
    margin-right: 1.5rem;
    width: 200px;
}



#secondTempDivision{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    margin-left: 10%;
    margin-right: 10%;
}

.secondTempChildren{
    width: 250px;
    font-size: 1.5rem;
    border: 1px solid black;
    margin:1rem;
    border-radius: 1rem;
    background-color: rgba(0,0,0,0.5)
}

.secondTempTitle{
    display: flex;
    justify-content: center;
}

.secondTempSVG{
    width: 42px;
}

.secondTempNumber{
    font-size: 2.5rem;
}

#uvNum{
    border-radius: 1rem;
}
.UVred{
    border-bottom: 10px solid red;
}
.UVyellow{
    border-bottom: 10px solid yellow;

}
.UVgreen{
    border-bottom: 10px solid rgb(164, 255, 29);

}

#moonStyle{
    display: flex;
    justify-content: center;
    width: 80px;
    margin-left: 40%;
    margin-right: 40%;
    

}

#finalTempDivision{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    margin-bottom: 4rem;
}
.finalTempChildren{
    width: 250px;
    font-size: 1.5rem;
    border: 1px solid black;
    border-radius: 1rem;
    margin: 1rem;
    background-color:rgba(0,0,0,0.5);
    padding:5px;
    
}
.finalSVG{
    margin-left: 36%;
    width: 80px;
    height: 80px;
    margin-top: 5px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 0.5rem;
}

.duskBackground{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}),
    linear-gradient(45deg, #e37682 15%, #5f4d93 85%);
    background-attachment:fixed;/*repeat new gradient on scrolling down*/  
    height: 100%; 
    color: white;
}
.dawnBackground{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}),
    linear-gradient(45deg, #ff721a 15%, #0412ab 85%);
    background-attachment:fixed;/*repeat new gradient on scrolling down*/  
    height: 100%; 
    color: white;

}

.nightBackground{
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}),
    linear-gradient(45deg, #0c1d61 15%, #000000 85%);
    background-attachment:fixed;/*repeat new gradient on scrolling down*/  
    height: 100%; 
    color: white;

}

.dayBackground{
    
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}),
    linear-gradient(45deg, #ffb143 15%, #0994fd 85%);
    background-attachment:fixed;/*repeat new gradient on scrolling down*/  
    height: 100%; 
    color: white;
    
    
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;EACxB;EACA;;GAEC;EACD;IACE,SAAS;EACX;EACA;;;;GAIC;EACD;IACE,gBAAgB;IAChB,mCAAmC;EACrC;EACA;;GAEC;EACD;IACE,cAAc;IACd,eAAe;EACjB;EACA;;GAEC;EACD;IACE,aAAa;EACf;EACA;;GAEC;EACD;IACE,yBAAyB;EAC3B;EACA;;GAEC;EACD;IACE,kBAAkB;EACpB;;;AAGF;IACI,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;;IAEI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,gBAAgB;;IAEhB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;IACf,UAAU;IACV,SAAS;IACT,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,YAAY;;AAEhB;AACA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;;AAE1B;AACA;IACI,yBAAyB;IACzB,iCAAiC;AACrC;AACA;IACI,YAAY;IACZ,yBAAyB;AAC7B;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,uCAAuC;IACvC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,WAAW;AACf;AACA;IACI,oBAAoB;IACpB,YAAY;AAChB;;;;AAIA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,WAAW;IACX,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,gCAAgC;;AAEpC;AACA;IACI,2CAA2C;;AAE/C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;;;AAGrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,gCAAgC;IAChC,WAAW;;AAEf;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,uCAAuC;IACvC,qBAAqB;AACzB;;AAEA;IACI;oDACgD;IAChD,2BAA2B,CAAC,wCAAwC;IACpE,YAAY;IACZ,YAAY;AAChB;AACA;IACI;oDACgD;IAChD,2BAA2B,CAAC,wCAAwC;IACpE,YAAY;IACZ,YAAY;;AAEhB;;AAEA;IACI;oDACgD;IAChD,2BAA2B,CAAC,wCAAwC;IACpE,YAAY;IACZ,YAAY;;AAEhB;;AAEA;;IAEI;oDACgD;IAChD,2BAA2B,CAAC,wCAAwC;IACpE,YAAY;IACZ,YAAY;;;AAGhB","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    Typographic tweaks!\n    3. Add accessible line-height\n    4. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n  /*\n    5. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    6. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    7. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    8. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }\n\n\n*{\n    text-align: center;\n}\n#loadingDivision{\n    font-size: 2.5rem;\n    font-weight: 700;\n}\n#titleDivision{\n    \n    text-align: center;\n    font-size: 2.5rem;\n    font-weight: 700;\n    margin-bottom: 2rem;\n}\n#searchDivision{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n}\n#searchInput{\n    min-width: 10rem;\n    max-width: 20rem;\n    \n    height: 3rem;\n    font-size: 2rem;\n    text-align: left;\n}\n#searchButton{\n    height: 3rem;\n    width: 3rem;\n}\n\n#switchDivision{\n    position: fixed;\n    bottom:-5%;\n    right: 2%;\n    width:140px;\n    height: 140px;\n}\n\n#celsius,#fahrenheit{\n    border: 0px;\n    width:70px;\n    height: 70px;\n    \n}\n#contentSection{\n    min-width: 100%;\n    display: flex;\n    flex-direction: column;\n    \n}\n.greyed{\n    color: rgb(178, 178, 178);\n    background-color: rgb(78, 78, 78);\n}\n.selected{\n    color: white;\n    background-color: #0c1d61;\n}\n#cityDivision,#todayDivision,#descriptionDivision{\n    font-size: 1.7rem;\n    font-weight: 500;\n}\n\n#mainTempDivision{\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    min-height: 100px;\n    margin-top:1rem;\n    font-size: 3rem;\n    background-color: rgba(255,255,255,0.2);\n    padding: 20px;\n}\n\n#iconDivision{\n    width: 100px;\n    margin-right: 1.5rem;\n}\n#iconDivision>img{\n    width: 90px;\n}\n#tempDivision{\n    margin-right: 1.5rem;\n    width: 200px;\n}\n\n\n\n#secondTempDivision{\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-top: 2rem;\n    margin-left: 10%;\n    margin-right: 10%;\n}\n\n.secondTempChildren{\n    width: 250px;\n    font-size: 1.5rem;\n    border: 1px solid black;\n    margin:1rem;\n    border-radius: 1rem;\n    background-color: rgba(0,0,0,0.5)\n}\n\n.secondTempTitle{\n    display: flex;\n    justify-content: center;\n}\n\n.secondTempSVG{\n    width: 42px;\n}\n\n.secondTempNumber{\n    font-size: 2.5rem;\n}\n\n#uvNum{\n    border-radius: 1rem;\n}\n.UVred{\n    border-bottom: 10px solid red;\n}\n.UVyellow{\n    border-bottom: 10px solid yellow;\n\n}\n.UVgreen{\n    border-bottom: 10px solid rgb(164, 255, 29);\n\n}\n\n#moonStyle{\n    display: flex;\n    justify-content: center;\n    width: 80px;\n    margin-left: 40%;\n    margin-right: 40%;\n    \n\n}\n\n#finalTempDivision{\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-top: 2rem;\n    margin-bottom: 4rem;\n}\n.finalTempChildren{\n    width: 250px;\n    font-size: 1.5rem;\n    border: 1px solid black;\n    border-radius: 1rem;\n    margin: 1rem;\n    background-color:rgba(0,0,0,0.5);\n    padding:5px;\n    \n}\n.finalSVG{\n    margin-left: 36%;\n    width: 80px;\n    height: 80px;\n    margin-top: 5px;\n    background-color: rgba(255,255,255,0.2);\n    border-radius: 0.5rem;\n}\n\n.duskBackground{\n    background-image: url(images/overlay.png),\n    linear-gradient(45deg, #e37682 15%, #5f4d93 85%);\n    background-attachment:fixed;/*repeat new gradient on scrolling down*/  \n    height: 100%; \n    color: white;\n}\n.dawnBackground{\n    background-image: url(images/overlay.png),\n    linear-gradient(45deg, #ff721a 15%, #0412ab 85%);\n    background-attachment:fixed;/*repeat new gradient on scrolling down*/  \n    height: 100%; \n    color: white;\n\n}\n\n.nightBackground{\n    background-image: url(images/overlay.png),\n    linear-gradient(45deg, #0c1d61 15%, #000000 85%);\n    background-attachment:fixed;/*repeat new gradient on scrolling down*/  \n    height: 100%; \n    color: white;\n\n}\n\n.dayBackground{\n    \n    background-image: url(images/overlay.png),\n    linear-gradient(45deg, #ffb143 15%, #0994fd 85%);\n    background-attachment:fixed;/*repeat new gradient on scrolling down*/  \n    height: 100%; \n    color: white;\n    \n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/UVindexer.js":
/*!**************************!*\
  !*** ./src/UVindexer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UVbase: () => (/* binding */ UVbase)
/* harmony export */ });

const UVbase=(index)=>{
    if(index<3){
        return 'UVgreen';
    }
    else if(index<7){
        return 'UVyellow';
    }else return 'UVred';
}



/***/ }),

/***/ "./src/backgroundpicker.js":
/*!*********************************!*\
  !*** ./src/backgroundpicker.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundGenerate: () => (/* binding */ backgroundGenerate)
/* harmony export */ });
const backgroundGenerate=(num)=>{
    if(num>9&&num<16){
        return "dayBackground";
    }
    else if(num>=16&&num<19){
        return "duskBackground";
    }
    else if(num>=5&&num<=9){
        return "dawnBackground";
    }
    else return "nightBackground";
}



/***/ }),

/***/ "./src/clearContent.js":
/*!*****************************!*\
  !*** ./src/clearContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentClear: () => (/* binding */ contentClear),
/* harmony export */   loadingScreen: () => (/* binding */ loadingScreen)
/* harmony export */ });
let contentSection=document.querySelector("#contentSection");

const contentClear=()=>{
    
    while (contentSection.hasChildNodes()) {
        contentSection.removeChild(contentSection.firstChild);
        }

}

const loadingScreen=()=>{
    const loadingDiv=document.createElement("div");
    loadingDiv.setAttribute("id","loadingDivision");
    loadingDiv.innerText="Loading..."
    contentSection.appendChild(loadingDiv);

}



/***/ }),

/***/ "./src/loadDivisions.js":
/*!******************************!*\
  !*** ./src/loadDivisions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayPage: () => (/* binding */ displayPage)
/* harmony export */ });
/* harmony import */ var _UVindexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UVindexer */ "./src/UVindexer.js");
/* harmony import */ var _moonphaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moonphaser */ "./src/moonphaser.js");
/* harmony import */ var _weatherIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherIcon */ "./src/weatherIcon.js");
/* harmony import */ var _backgroundpicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backgroundpicker */ "./src/backgroundpicker.js");






const displayPage=(obj,unit)=>{
    
    let contentSection=document.querySelector("#contentSection");

    

    let cityDiv=document.createElement("div");
    cityDiv.innerText=obj.location;
    cityDiv.setAttribute("id","cityDivision");
    contentSection.appendChild(cityDiv);

    let todayDiv=document.createElement("div");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    todayDiv.innerText=(new Date(obj.day).toLocaleDateString("en-US", options));
    todayDiv.setAttribute("id","todayDivision");
    contentSection.appendChild(todayDiv);

    let mainTempDiv=document.createElement("div");
    mainTempDiv.setAttribute("id","mainTempDivision");
    contentSection.appendChild(mainTempDiv);

    let iconDiv=document.createElement("div");
    iconDiv.setAttribute("id","iconDivision");
    iconDiv.appendChild((0,_weatherIcon__WEBPACK_IMPORTED_MODULE_2__.iconGenerate)(obj.icon));
    mainTempDiv.appendChild(iconDiv);

    let tempDiv=document.createElement("div");
    tempDiv.setAttribute("id","tempDivision");
    tempDiv.innerText=`${obj.temp}`+`${String.fromCharCode(176)}`+`${unit}`;
    mainTempDiv.appendChild(tempDiv);

    let conditionDiv=document.createElement("div");
    conditionDiv.setAttribute("id","conditionDivision");
    conditionDiv.innerText=obj.conditions;
    mainTempDiv.appendChild(conditionDiv);

    let secondTempDiv=document.createElement("div");
    secondTempDiv.setAttribute("id","secondTempDivision");
    contentSection.appendChild(secondTempDiv);

    let humidDiv=document.createElement("div");
    humidDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(humidDiv);

    let humidTitleSection=document.createElement("div");
    humidTitleSection.setAttribute("class","secondTempTitle")
    let humidTitle=document.createElement("div");
    let humidSymbol=document.createElement("div");
    humidSymbol.setAttribute("class","secondTempSVG");
    humidTitle.innerText="Humidity";
    humidSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>water-percent</title><path fill="currentColor" d="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z" /></svg>`;
    humidTitleSection.appendChild(humidTitle);
    humidTitleSection.appendChild(humidSymbol);

    let humidNumber=document.createElement("div");
    humidNumber.setAttribute("class","secondTempNumber");
    humidNumber.innerText=`${obj.humidity}%`;
    humidDiv.appendChild(humidTitleSection);
    humidDiv.appendChild(humidNumber);



    let UVDiv=document.createElement("div");
    UVDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(UVDiv);

    let UVTitleSection=document.createElement("div");
    UVTitleSection.setAttribute("class","secondTempTitle")
    let UVTitle=document.createElement("div");
    let UVSymbol=document.createElement("div");
    UVSymbol.setAttribute("class","secondTempSVG");
    UVTitle.innerText="UV Index";
    UVSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>emoticon-cool-outline</title><path fill="currentColor" d="M19,10C19,11.38 16.88,12.5 15.5,12.5C14.12,12.5 12.75,11.38 12.75,10H11.25C11.25,11.38 9.88,12.5 8.5,12.5C7.12,12.5 5,11.38 5,10H4.25C4.09,10.64 4,11.31 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,11.31 19.91,10.64 19.75,10H19M12,4C9.04,4 6.45,5.61 5.07,8H18.93C17.55,5.61 14.96,4 12,4M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" /></svg>`;
    UVTitleSection.appendChild(UVTitle);
    UVTitleSection.appendChild(UVSymbol);
    
    let UVNumber=document.createElement("div");
    UVNumber.setAttribute("class","secondTempNumber");
    UVNumber.setAttribute("id","uvNum");
    UVNumber.innerText=obj.uvindex;
    let UVclass=(0,_UVindexer__WEBPACK_IMPORTED_MODULE_0__.UVbase)(+(obj.uvindex));
    UVNumber.classList.add(UVclass);
    UVDiv.appendChild(UVTitleSection);
    UVDiv.appendChild(UVNumber);



    let moonDiv=document.createElement("div");
    moonDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(moonDiv);

    let moonTitleSection=document.createElement("div");
    moonTitleSection.setAttribute("class","secondTempTitle");    
    let moonSymbol=document.createElement("div");
    moonSymbol.setAttribute("id","moonStyle");
    moonTitleSection.innerText=(0,_moonphaser__WEBPACK_IMPORTED_MODULE_1__.moonphase)(obj.moon);
    moonSymbol.innerHTML=(0,_moonphaser__WEBPACK_IMPORTED_MODULE_1__.moonSVGgenerate)(obj.moon);
    moonDiv.appendChild(moonSymbol);
    moonDiv.appendChild(moonTitleSection);



    let windDiv=document.createElement("div");
    windDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(windDiv);

    let windTitleSection=document.createElement("div");
    windTitleSection.setAttribute("class","secondTempTitle")
    let windTitle=document.createElement("div");
    let windSymbol=document.createElement("div");
    windSymbol.setAttribute("class","secondTempSVG");
    windTitle.innerText="Wind speed";
    windSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-windy</title><path fill="currentColor" d="M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z" /></svg>`;
    windTitleSection.appendChild(windTitle);
    windTitleSection.appendChild(windSymbol);
    
    let windNumber=document.createElement("div");
    windNumber.setAttribute("class","secondTempNumber");
    windNumber.innerText=`${obj.wind}kph`;
    windDiv.appendChild(windTitleSection);
    windDiv.appendChild(windNumber);





    let visibleDiv=document.createElement("div");
    visibleDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(visibleDiv);

    let visibleTitleSection=document.createElement("div");
    visibleTitleSection.setAttribute("class","secondTempTitle")
    let visibleTitle=document.createElement("div");
    let visibleSymbol=document.createElement("div");
    visibleSymbol.setAttribute("class","secondTempSVG");
    visibleTitle.innerText="Visibility";
    visibleSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye</title><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>`;
    visibleTitleSection.appendChild(visibleTitle);
    visibleTitleSection.appendChild(visibleSymbol);
    
    let visibleNumber=document.createElement("div");
    visibleNumber.setAttribute("class","secondTempNumber");
    visibleNumber.innerText=`${obj.visibility}km`;
    visibleDiv.appendChild(visibleTitleSection);
    visibleDiv.appendChild(visibleNumber);





    let pressureDiv=document.createElement("div");
    pressureDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(pressureDiv);

    let pressureTitleSection=document.createElement("div");
    pressureTitleSection.setAttribute("class","secondTempTitle")
    let pressureTitle=document.createElement("div");
    let pressureSymbol=document.createElement("div");
    pressureSymbol.setAttribute("class","secondTempSVG");
    pressureTitle.innerText="Pressure";
    pressureSymbol.innerHTML=`<svg fill="#000000"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 185.421 185.421" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path fill="currentColor" d="M155.762,23.192c-5.23-12.101-17.528-20.058-31.432-20.058c-17.526,0-32,12.741-33.825,29.07 C77.769,33.331,67.75,43.953,67.75,56.843c0,13.017,10.154,23.763,23.206,24.675c0.218,0.042,0.439,0.063,0.663,0.063h63.166 c0.096,0,0.19-0.004,0.284-0.01c0.28,0.007,0.562,0.01,0.844,0.01c16.271,0,29.508-13.097,29.508-29.195 C185.422,36.239,172.059,23.119,155.762,23.192z M155.914,74.45c-0.326,0-0.649-0.007-0.97-0.021 c-0.054-0.004-0.108-0.004-0.162-0.004c-0.139,0-0.277,0.007-0.413,0.024H92.074c-0.089-0.01-0.176-0.017-0.265-0.024 c-9.493-0.48-16.927-8.204-16.927-17.582c0-10.025,8.702-18.021,18.829-17.582c0.973,0.045,1.924-0.324,2.627-0.996 c0.705-0.676,1.104-1.619,1.104-2.594c0-14.009,12.062-25.406,26.888-25.406c11.791,0,22.097,7.132,25.647,17.746 c0.526,1.57,2.074,2.622,3.719,2.417c0.73-0.07,1.469-0.104,2.218-0.104c12.339,0,22.377,9.897,22.377,22.063 C178.291,64.552,168.253,74.45,155.914,74.45z"></path> <path fill="currentColor" d="M87.669,120.192l5.042,5.042l12.607-12.606c0.669-0.669,1.045-1.574,1.045-2.521c0-0.947-0.376-1.852-1.045-2.521 L92.711,94.981l-5.042,5.042l6.519,6.519H0v7.132h94.188L87.669,120.192z"></path> <path fill="currentColor" d="M153.33,152.033l-5.042,5.042l6.519,6.519H60.619v7.132h94.188l-6.519,6.519l5.042,5.042l12.607-12.606 c0.669-0.669,1.045-1.574,1.045-2.521c0-0.947-0.376-1.852-1.045-2.521L153.33,152.033z"></path> <path fill="currentColor" d="M116.195,148.718l5.042,5.042l12.607-12.606c0.669-0.669,1.045-1.574,1.045-2.521s-0.376-1.852-1.045-2.521 l-12.607-12.606l-5.042,5.042l6.519,6.519H28.526v7.132h94.188L116.195,148.718z"></path> </g> </g> </g> </g></svg>`;
    pressureTitleSection.appendChild(pressureTitle);
    pressureTitleSection.appendChild(pressureSymbol);
    
    let pressureNumber=document.createElement("div");
    pressureNumber.setAttribute("class","secondTempNumber");
    pressureNumber.innerText=`${obj.pressure}mb`;
    pressureDiv.appendChild(pressureTitleSection);
    pressureDiv.appendChild(pressureNumber);



    let sunriseDiv=document.createElement("div");
    sunriseDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(sunriseDiv);

    let sunriseTitleSection=document.createElement("div");
    sunriseTitleSection.setAttribute("class","secondTempTitle")
    let sunriseTitle=document.createElement("div");
    let sunriseSymbol=document.createElement("div");
    sunriseSymbol.setAttribute("class","secondTempSVG");
    sunriseTitle.innerText="Sunrise";
    sunriseSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunset-up</title><path fill="currentColor" d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z" /></svg>`;
    sunriseTitleSection.appendChild(sunriseTitle);
    sunriseTitleSection.appendChild(sunriseSymbol);
    
    let sunriseNumber=document.createElement("div");
    sunriseNumber.setAttribute("class","secondTempNumber");
    sunriseNumber.innerText=obj.sunrise;
    sunriseDiv.appendChild(sunriseTitleSection);
    sunriseDiv.appendChild(sunriseNumber);



    let sunSetDiv=document.createElement("div");
    sunSetDiv.setAttribute("class","secondTempChildren");
    secondTempDiv.appendChild(sunSetDiv);

    let sunSetTitleSection=document.createElement("div");
    sunSetTitleSection.setAttribute("class","secondTempTitle")
    let sunSetTitle=document.createElement("div");
    let sunSetSymbol=document.createElement("div");
    sunSetSymbol.setAttribute("class","secondTempSVG");
    sunSetTitle.innerText="Sunset";
    sunSetSymbol.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunset</title><path fill="currentColor" d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M5,16H19A1,1 0 0,1 20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17A1,1 0 0,1 5,16M17,20A1,1 0 0,1 18,21A1,1 0 0,1 17,22H7A1,1 0 0,1 6,21A1,1 0 0,1 7,20H17M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7Z" /></svg>`;
    sunSetTitleSection.appendChild(sunSetTitle);
    sunSetTitleSection.appendChild(sunSetSymbol);
    
    let sunSetNumber=document.createElement("div");
    sunSetNumber.setAttribute("class","secondTempNumber");
    sunSetNumber.innerText=obj.sunset;
    sunSetDiv.appendChild(sunSetTitleSection);
    sunSetDiv.appendChild(sunSetNumber);

    let descriptionDiv=document.createElement("div");
    descriptionDiv.setAttribute("id","descriptionDivision");
    descriptionDiv.innerText=obj.description;
    contentSection.appendChild(descriptionDiv);





    let finalTempDiv=document.createElement("div");
    finalTempDiv.setAttribute("id","finalTempDivision");
    contentSection.appendChild(finalTempDiv);

    let day1Div=document.createElement("div");
    day1Div.setAttribute("class","finalTempChildren");
    finalTempDiv.appendChild(day1Div);
    let day1Day=document.createElement("div");
    day1Day.setAttribute("class","secondTempTitle");
    day1Day.innerText=(new Date(obj.day1day).toLocaleDateString("en-US", options));
    day1Div.appendChild(day1Day);

    let day1Icon=document.createElement("div");
    day1Icon.setAttribute("class","finalSVG");
    day1Icon.appendChild((0,_weatherIcon__WEBPACK_IMPORTED_MODULE_2__.iconGenerate)(obj.day1icon));
    day1Div.appendChild(day1Icon);

    let day1Temp=document.createElement("div");
    day1Temp.setAttribute("class","secondTempTitle");
    day1Temp.innerText=`${obj.day1temp}`+`${String.fromCharCode(176)}`+`${unit}`;
    day1Div.appendChild(day1Temp);

    let day1Condition=document.createElement("div");
    day1Condition.setAttribute("class","secondTempTitle");
    day1Condition.innerText=obj.day1conditions;
    day1Div.appendChild(day1Condition);

    let day2Div=document.createElement("div");
    day2Div.setAttribute("class","finalTempChildren");
    finalTempDiv.appendChild(day2Div);
    let day2Day=document.createElement("div");
    day2Day.setAttribute("class","secondTempTitle");
    day2Day.innerText=(new Date(obj.day2day).toLocaleDateString("en-US", options));
    day2Div.appendChild(day2Day);

    let day2Icon=document.createElement("div");
    day2Icon.setAttribute("class","finalSVG");
    day2Icon.appendChild((0,_weatherIcon__WEBPACK_IMPORTED_MODULE_2__.iconGenerate)(obj.day2icon));
    day2Div.appendChild(day2Icon);

    let day2Temp=document.createElement("div");
    day2Temp.setAttribute("class","secondTempTitle");
    day2Temp.innerText=`${obj.day2temp}`+`${String.fromCharCode(176)}`+`${unit}`;
    day2Div.appendChild(day2Temp);

    let day2Condition=document.createElement("div");
    day2Condition.setAttribute("class","secondTempTitle");
    day2Condition.innerText=obj.day2conditions;
    day2Div.appendChild(day2Condition);

    let day3Div=document.createElement("div");
    day3Div.setAttribute("class","finalTempChildren");
    finalTempDiv.appendChild(day3Div);
    let day3Day=document.createElement("div");
    day3Day.setAttribute("class","secondTempTitle");
    day3Day.innerText=(new Date(obj.day3day).toLocaleDateString("en-US", options));
    day3Div.appendChild(day3Day);

    let day3Icon=document.createElement("div");
    day3Icon.setAttribute("class","finalSVG");
    day3Icon.appendChild((0,_weatherIcon__WEBPACK_IMPORTED_MODULE_2__.iconGenerate)(obj.day3icon));
    day3Div.appendChild(day3Icon);

    let day3Temp=document.createElement("div");
    day3Temp.setAttribute("class","secondTempTitle");
    day3Temp.innerText=`${obj.day3temp}`+`${String.fromCharCode(176)}`+`${unit}`;
    day3Div.appendChild(day3Temp);

    let day3Condition=document.createElement("div");
    day3Condition.setAttribute("class","secondTempTitle");
    day3Condition.innerText=obj.day3conditions;
    day3Div.appendChild(day3Condition);



    let bodySection=document.querySelector("body");
    let currentTime=(obj.time).slice(0,2);
    bodySection.setAttribute("class",(0,_backgroundpicker__WEBPACK_IMPORTED_MODULE_3__.backgroundGenerate)(+currentTime));







    


    
    


}



/***/ }),

/***/ "./src/moonphaser.js":
/*!***************************!*\
  !*** ./src/moonphaser.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moonSVGgenerate: () => (/* binding */ moonSVGgenerate),
/* harmony export */   moonphase: () => (/* binding */ moonphase)
/* harmony export */ });

const moonphase=(num)=>{
    if(num===0){
        return "new moon";
    }
    else if(num>0&&num<0.25){
        return 'waxing crescent';
    }
    else if(num===0.25){
        return "first quarter";
    }
    else if(num>0.25&&num<0.5){
        return "waxing gibbous";
    }
    else if (num===0.5){
        return "full moon";
    }
    else if(num>0.5&&num<0.75){
        return "waning gibbous";
    }
    else if (num===0.75){
        return "last quarter";
    }
    else return "waning crescent"

}

const moonSVGgenerate=(num)=>{
    if(num===0){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-new</title><path fill="currentColor" d="M12 20A8 8 0 1 1 20 12A8 8 0 0 1 12 20M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" /></svg>`;
    }
    else if(num>0&&num<0.25){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-waxing-crescent</title><path fill="currentColor" d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z" /></svg>`;
    }
    else if(num===0.25){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-first-quarter</title><path fill="currentColor" d="M12 2V22A10 10 0 0 0 12 2Z" /></svg>`;
    }
    else if(num>0.25&&num<0.5){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-waxing-gibbous</title><path fill="currentColor" d="M6 12C6 7.5 7.93 3.26 12 2A10 10 0 0 1 12 22C7.93 20.74 6 16.5 6 12Z" /></svg>`;
    }
    else if (num===0.5){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-full</title><path fill="currentColor" d="M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z" /></svg>`;
    }
    else if(num>0.5&&num<0.75){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-waning-gibbous</title><path fill="currentColor" d="M18 12C18 7.5 16.08 3.26 12 2A10 10 0 0 0 12 22C16.08 20.74 18 16.5 18 12Z" /></svg>`;
    }
    else if (num===0.75){
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-last-quarter</title><path fill="currentColor" d="M12 2A10 10 0 0 0 12 22Z" /></svg>`;
    }
    else return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>moon-waning-crescent</title><path fill="currentColor" d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" /></svg>`;

}



/***/ }),

/***/ "./src/tempUnitSwitcher.js":
/*!*********************************!*\
  !*** ./src/tempUnitSwitcher.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTempUnitSwitch: () => (/* binding */ addTempUnitSwitch),
/* harmony export */   celsiusGenerate: () => (/* binding */ celsiusGenerate),
/* harmony export */   fahrenheitGenerate: () => (/* binding */ fahrenheitGenerate)
/* harmony export */ });
const addTempUnitSwitch=()=>{
    let contentSection=document.querySelector("#contentSection");
    let switchDiv=document.createElement("div");
    switchDiv.setAttribute("id","switchDivision");
    let celSwitch=document.createElement("button");
    celSwitch.setAttribute("id","celsius");
    celSwitch.innerText=`${String.fromCharCode(176)}C`
    let fahrSwitch=document.createElement("button");
    fahrSwitch.setAttribute("id","fahrenheit");
    fahrSwitch.innerText=`${String.fromCharCode(176)}F`
    switchDiv.appendChild(celSwitch);
    switchDiv.appendChild(fahrSwitch);
    contentSection.appendChild(switchDiv);
}

const celsiusGenerate=(num)=>{
    let numTemp=num-32;
    numTemp*=5;
    numTemp/=9;
    let numFinal=Math.round(numTemp * 100) / 100;
    return numFinal;
}

const fahrenheitGenerate=(num)=>{
    let numTemp=num;
    numTemp*=9;
    numTemp/=5;
    numTemp+=32;
    let numFinal=Math.round(numTemp * 100) / 100;
    return numFinal;

}



/***/ }),

/***/ "./src/weatherIcon.js":
/*!****************************!*\
  !*** ./src/weatherIcon.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iconGenerate: () => (/* binding */ iconGenerate)
/* harmony export */ });
/* harmony import */ var _icons_rain_snow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/rain-snow.png */ "./src/icons/rain-snow.png");
/* harmony import */ var _icons_clear_day_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/clear-day.png */ "./src/icons/clear-day.png");
/* harmony import */ var _icons_clear_night_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/clear-night.png */ "./src/icons/clear-night.png");
/* harmony import */ var _icons_cloudy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cloudy.png */ "./src/icons/cloudy.png");
/* harmony import */ var _icons_fog_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/fog.png */ "./src/icons/fog.png");
/* harmony import */ var _icons_hail_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/hail.png */ "./src/icons/hail.png");
/* harmony import */ var _icons_partly_cloudy_day_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/partly-cloudy-day.png */ "./src/icons/partly-cloudy-day.png");
/* harmony import */ var _icons_partly_cloudy_night_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/partly-cloudy-night.png */ "./src/icons/partly-cloudy-night.png");
/* harmony import */ var _icons_rain_snow_showers_day_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/rain-snow-showers-day.png */ "./src/icons/rain-snow-showers-day.png");
/* harmony import */ var _icons_rain_snow_showers_night_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/rain-snow-showers-night.png */ "./src/icons/rain-snow-showers-night.png");
/* harmony import */ var _icons_rain_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/rain.png */ "./src/icons/rain.png");
/* harmony import */ var _icons_showers_day_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/showers-day.png */ "./src/icons/showers-day.png");
/* harmony import */ var _icons_showers_night_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/showers-night.png */ "./src/icons/showers-night.png");
/* harmony import */ var _icons_sleet_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/sleet.png */ "./src/icons/sleet.png");
/* harmony import */ var _icons_snow_showers_day_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/snow-showers-day.png */ "./src/icons/snow-showers-day.png");
/* harmony import */ var _icons_snow_showers_night_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/snow-showers-night.png */ "./src/icons/snow-showers-night.png");
/* harmony import */ var _icons_snow_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/snow.png */ "./src/icons/snow.png");
/* harmony import */ var _icons_thunder_rain_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/thunder-rain.png */ "./src/icons/thunder-rain.png");
/* harmony import */ var _icons_thunder_showers_day_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icons/thunder-showers-day.png */ "./src/icons/thunder-showers-day.png");
/* harmony import */ var _icons_thunder_showers_night_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./icons/thunder-showers-night.png */ "./src/icons/thunder-showers-night.png");
/* harmony import */ var _icons_thunder_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./icons/thunder.png */ "./src/icons/thunder.png");
/* harmony import */ var _icons_wind_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./icons/wind.png */ "./src/icons/wind.png");























const iconGenerate=(str)=>{
    let imgDiv=document.createElement('img')
    if(str==="rain-snow"){
        imgDiv.src=_icons_rain_snow_png__WEBPACK_IMPORTED_MODULE_0__;
        return imgDiv;
    }
    else if(str==="clear-day"){
        imgDiv.src=_icons_clear_day_png__WEBPACK_IMPORTED_MODULE_1__;
        return imgDiv;
        
    }
    else if(str==="clear-night"){
        imgDiv.src=_icons_clear_night_png__WEBPACK_IMPORTED_MODULE_2__;
        return imgDiv;
        
    }
    else if(str==="cloudy"){
        imgDiv.src=_icons_cloudy_png__WEBPACK_IMPORTED_MODULE_3__;
        return imgDiv;
        
    }
    else if(str==="fog"){
        imgDiv.src=_icons_fog_png__WEBPACK_IMPORTED_MODULE_4__;
        return imgDiv;
    }
    else if(str==="hail"){
        imgDiv.src=_icons_hail_png__WEBPACK_IMPORTED_MODULE_5__;
        return imgDiv;
    }
    else if(str==="partly-cloudy-day"){
        imgDiv.src=_icons_partly_cloudy_day_png__WEBPACK_IMPORTED_MODULE_6__;
        return imgDiv;
    }
    else if(str==="partly-cloudy-night"){
        imgDiv.src=_icons_partly_cloudy_night_png__WEBPACK_IMPORTED_MODULE_7__;
        return imgDiv;
    }
    else if(str==="rain-snow-showers-day"){
        imgDiv.src=_icons_rain_snow_showers_day_png__WEBPACK_IMPORTED_MODULE_8__;
        return imgDiv;
    }
    else if(str==="rain-snow-showers-night"){
        imgDiv.src=_icons_rain_snow_showers_night_png__WEBPACK_IMPORTED_MODULE_9__;
        return imgDiv;
    }
    else if(str==="rain"){
        imgDiv.src=_icons_rain_png__WEBPACK_IMPORTED_MODULE_10__;
        return imgDiv;
    }
    else if(str==="showers-day"){
        imgDiv.src=_icons_showers_day_png__WEBPACK_IMPORTED_MODULE_11__;
        return imgDiv;
    }
    else if(str==="showers-night"){
        imgDiv.src=_icons_showers_night_png__WEBPACK_IMPORTED_MODULE_12__;
        return imgDiv;
    }
    else if(str==="sleet"){
        imgDiv.src=_icons_sleet_png__WEBPACK_IMPORTED_MODULE_13__;
        return imgDiv;
    }
    else if(str==="snow-showers-day"){
        imgDiv.src=_icons_snow_showers_day_png__WEBPACK_IMPORTED_MODULE_14__;
        return imgDiv;
    }
    else if(str==="snow-showers-night"){
        imgDiv.src=_icons_snow_showers_night_png__WEBPACK_IMPORTED_MODULE_15__;
        return imgDiv;
    }
    else if(str==="snow"){
        imgDiv.src=_icons_snow_png__WEBPACK_IMPORTED_MODULE_16__;
        return imgDiv;
    }
    else if(str==="thunder-rain"){
        imgDiv.src=_icons_thunder_rain_png__WEBPACK_IMPORTED_MODULE_17__;
        return imgDiv;
    }
    else if(str==="thunder-showers-day"){
        imgDiv.src=_icons_thunder_showers_day_png__WEBPACK_IMPORTED_MODULE_18__;
        return imgDiv;
    }
    else if(str==="thunder-showers-night"){
        imgDiv.src=_icons_thunder_showers_night_png__WEBPACK_IMPORTED_MODULE_19__;
        return imgDiv;
    }
    else if(str==="thunder"){
        imgDiv.src=_icons_thunder_png__WEBPACK_IMPORTED_MODULE_20__;
        return imgDiv;
    }
    else if(str==="wind"){
        imgDiv.src=_icons_wind_png__WEBPACK_IMPORTED_MODULE_21__;
        return imgDiv;
    }

    

}



/***/ }),

/***/ "./src/icons/clear-day.png":
/*!*********************************!*\
  !*** ./src/icons/clear-day.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49a92278086475c7c840.png";

/***/ }),

/***/ "./src/icons/clear-night.png":
/*!***********************************!*\
  !*** ./src/icons/clear-night.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5b481d65d6728015aa7.png";

/***/ }),

/***/ "./src/icons/cloudy.png":
/*!******************************!*\
  !*** ./src/icons/cloudy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff85b2e81d3543451d70.png";

/***/ }),

/***/ "./src/icons/fog.png":
/*!***************************!*\
  !*** ./src/icons/fog.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bec51c6b905e71a69c73.png";

/***/ }),

/***/ "./src/icons/hail.png":
/*!****************************!*\
  !*** ./src/icons/hail.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5a324637505df18d2e5.png";

/***/ }),

/***/ "./src/icons/partly-cloudy-day.png":
/*!*****************************************!*\
  !*** ./src/icons/partly-cloudy-day.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ccf1783955d7c47bce4.png";

/***/ }),

/***/ "./src/icons/partly-cloudy-night.png":
/*!*******************************************!*\
  !*** ./src/icons/partly-cloudy-night.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e82491d914f1b4e751e7.png";

/***/ }),

/***/ "./src/icons/rain-snow-showers-day.png":
/*!*********************************************!*\
  !*** ./src/icons/rain-snow-showers-day.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e3195e20db723b75b2f.png";

/***/ }),

/***/ "./src/icons/rain-snow-showers-night.png":
/*!***********************************************!*\
  !*** ./src/icons/rain-snow-showers-night.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2788e154501ed6e195a.png";

/***/ }),

/***/ "./src/icons/rain-snow.png":
/*!*********************************!*\
  !*** ./src/icons/rain-snow.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "560fa082b9506b2826e8.png";

/***/ }),

/***/ "./src/icons/rain.png":
/*!****************************!*\
  !*** ./src/icons/rain.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89c8d14229f87a236fe0.png";

/***/ }),

/***/ "./src/icons/showers-day.png":
/*!***********************************!*\
  !*** ./src/icons/showers-day.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "302ae48c90c390866931.png";

/***/ }),

/***/ "./src/icons/showers-night.png":
/*!*************************************!*\
  !*** ./src/icons/showers-night.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbefbc64a4c9b84edb6a.png";

/***/ }),

/***/ "./src/icons/sleet.png":
/*!*****************************!*\
  !*** ./src/icons/sleet.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0335ffe923ac8081fcd9.png";

/***/ }),

/***/ "./src/icons/snow-showers-day.png":
/*!****************************************!*\
  !*** ./src/icons/snow-showers-day.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "653aae7993df59bc9edf.png";

/***/ }),

/***/ "./src/icons/snow-showers-night.png":
/*!******************************************!*\
  !*** ./src/icons/snow-showers-night.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "992f3427910628059ef4.png";

/***/ }),

/***/ "./src/icons/snow.png":
/*!****************************!*\
  !*** ./src/icons/snow.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f72b71c0da5cb78e0844.png";

/***/ }),

/***/ "./src/icons/thunder-rain.png":
/*!************************************!*\
  !*** ./src/icons/thunder-rain.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f216f30e368ba0b6eef0.png";

/***/ }),

/***/ "./src/icons/thunder-showers-day.png":
/*!*******************************************!*\
  !*** ./src/icons/thunder-showers-day.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08dc25396dd350cafbce.png";

/***/ }),

/***/ "./src/icons/thunder-showers-night.png":
/*!*********************************************!*\
  !*** ./src/icons/thunder-showers-night.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b94c0677a77e0021caf4.png";

/***/ }),

/***/ "./src/icons/thunder.png":
/*!*******************************!*\
  !*** ./src/icons/thunder.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68c58b5ee4603ed53a41.png";

/***/ }),

/***/ "./src/icons/wind.png":
/*!****************************!*\
  !*** ./src/icons/wind.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7689f6c733214fb7a9f8.png";

/***/ }),

/***/ "./src/images/overlay.png":
/*!********************************!*\
  !*** ./src/images/overlay.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "399bf960960d2146f71d.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loadDivisions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadDivisions */ "./src/loadDivisions.js");
/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearContent */ "./src/clearContent.js");
/* harmony import */ var _tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tempUnitSwitcher */ "./src/tempUnitSwitcher.js");





class weatherInfo{
    constructor(location,day,time,icon,temp,conditions,description,humidity,uvindex,moon,wind,
        visibility,pressure,sunrise,sunset,day1day,day1icon,day1temp,day1conditions,
        day2day,day2icon,day2temp,day2conditions,day3day,day3icon,day3temp,day3conditions
    ){
        this.location=location;
        this.day=day;
        this.time=time;

        this.icon=icon;
        this.temp=temp;
        this.conditions=conditions;

        this.description=description;

        this.humidity=humidity;
        this.uvindex=uvindex;
        this.moon=moon;
        this.wind=wind;
        this.visibility=visibility;
        this.pressure=pressure;
        this.sunrise=sunrise;
        this.sunset=sunset;

        this.day1day=day1day;
        this.day1icon=day1icon;
        this.day1temp=day1temp;
        this.day1conditions=day1conditions;

        this.day2day=day2day;
        this.day2icon=day2icon;
        this.day2temp=day2temp;
        this.day2conditions=day2conditions;

        this.day3day=day3day;
        this.day3icon=day3icon;
        this.day3temp=day3temp;
        this.day3conditions=day3conditions;


    }


}

const dayData= new weatherInfo();
let unitSwitch="C";


async function getWeather(value){
    (0,_clearContent__WEBPACK_IMPORTED_MODULE_2__.contentClear)();
    (0,_clearContent__WEBPACK_IMPORTED_MODULE_2__.loadingScreen)();
    const response= await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+ value +"?unitGroup=metric&key=7QBLZ6KGED9PMRDZ8D5T267RD&contentType=json",{mode:"cors"})

    const weatherData=await response.json();
    console.log(dayData);

    console.log(weatherData);
    dayData.location=weatherData.resolvedAddress;
    dayData.time=weatherData.currentConditions.datetime;
    dayData.day=weatherData.days[0].datetime; 

    dayData.icon=weatherData.currentConditions.icon;
    dayData.temp=weatherData.currentConditions.temp;
    dayData.conditions=weatherData.currentConditions.conditions;
    
    dayData.description=weatherData.description;

    dayData.humidity=weatherData.currentConditions.humidity;
    dayData.uvindex=weatherData.currentConditions.uvindex;
    dayData.moon=weatherData.currentConditions.moonphase;
    dayData.wind=weatherData.currentConditions.windspeed;
    dayData.visibility=weatherData.currentConditions.visibility;
    dayData.pressure=weatherData.currentConditions.pressure;
    dayData.sunrise=weatherData.currentConditions.sunrise;
    dayData.sunset=weatherData.currentConditions.sunset;

    
    dayData.day1day=weatherData.days[1].datetime;    
    dayData.day1icon=weatherData.days[1].icon;
    dayData.day1temp=weatherData.days[1].temp;
    dayData.day1conditions=weatherData.days[1].conditions;

    dayData.day2day=weatherData.days[2].datetime;    
    dayData.day2icon=weatherData.days[2].icon;
    dayData.day2temp=weatherData.days[2].temp;
    dayData.day2conditions=weatherData.days[2].conditions;

    dayData.day3day=weatherData.days[3].datetime;    
    dayData.day3icon=weatherData.days[3].icon;
    dayData.day3temp=weatherData.days[3].temp;
    dayData.day3conditions=weatherData.days[3].conditions;
    (0,_clearContent__WEBPACK_IMPORTED_MODULE_2__.contentClear)();
    (0,_loadDivisions__WEBPACK_IMPORTED_MODULE_1__.displayPage)(dayData,unitSwitch);
    (0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.addTempUnitSwitch)();
    tempSwitchActivate();
    


}

const tempSwitchActivate=()=>{
    const celSwitch=document.getElementById("celsius");
    const fahrSwitch=document.getElementById("fahrenheit");
    if(unitSwitch==="C"){
        celSwitch.setAttribute("class","selected");
        fahrSwitch.setAttribute("class","greyed");

    }
    else {
        celSwitch.setAttribute("class","greyed");
        fahrSwitch.setAttribute("class","selected");
    }

    celSwitch.addEventListener("click",()=>{
        celSwitch.setAttribute("class","selected");
        fahrSwitch.setAttribute("class","greyed");
        if(unitSwitch==="C"){
            return;
        }
        unitSwitch="C";
        dayData.temp=(0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.celsiusGenerate)(dayData.temp);
        dayData.day1temp=(0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.celsiusGenerate)(dayData.day1temp);
        dayData.day2temp=(0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.celsiusGenerate)(dayData.day2temp);
        dayData.day3temp=(0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.celsiusGenerate)(dayData.day3temp);
        (0,_clearContent__WEBPACK_IMPORTED_MODULE_2__.contentClear)();
        (0,_loadDivisions__WEBPACK_IMPORTED_MODULE_1__.displayPage)(dayData,unitSwitch);
        (0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.addTempUnitSwitch)();
        tempSwitchActivate();
    })

    fahrSwitch.addEventListener("click",()=>{
        celSwitch.setAttribute("class","greyed");
        fahrSwitch.setAttribute("class","selected");
        if(unitSwitch==="F"){
            return;
        }
        unitSwitch="F";
        dayData.temp=(0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.fahrenheitGenerate)(dayData.temp);
        dayData.day1temp=(0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.fahrenheitGenerate)(dayData.day1temp);
        dayData.day2temp=(0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.fahrenheitGenerate)(dayData.day2temp);
        dayData.day3temp=(0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.fahrenheitGenerate)(dayData.day3temp);
        (0,_clearContent__WEBPACK_IMPORTED_MODULE_2__.contentClear)();
        (0,_loadDivisions__WEBPACK_IMPORTED_MODULE_1__.displayPage)(dayData,unitSwitch);
        (0,_tempUnitSwitcher__WEBPACK_IMPORTED_MODULE_3__.addTempUnitSwitch)();
        tempSwitchActivate();
    })

}

const searchBtn=document.getElementById("searchButton");
const searchInput=document.getElementById("searchInput");

searchBtn.addEventListener("click",()=>{
    getWeather(searchInput.value);

})

getWeather("Mangalore KA");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssUUFBUSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksY0FBYyxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxlQUFlLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8seUJBQXlCLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxPQUFPLHlCQUF5QixXQUFXLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyx5QkFBeUIsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLE9BQU8seUJBQXlCLFdBQVcsWUFBWSxrREFBa0QsNkJBQTZCLEtBQUssaURBQWlELGdCQUFnQixLQUFLLGlIQUFpSCx1QkFBdUIsMENBQTBDLEtBQUssaUZBQWlGLHFCQUFxQixzQkFBc0IsS0FBSyxnR0FBZ0csb0JBQW9CLEtBQUssd0VBQXdFLGdDQUFnQyxLQUFLLHVFQUF1RSx5QkFBeUIsS0FBSyxRQUFRLHlCQUF5QixHQUFHLG1CQUFtQix3QkFBd0IsdUJBQXVCLEdBQUcsaUJBQWlCLCtCQUErQix3QkFBd0IsdUJBQXVCLDBCQUEwQixHQUFHLGtCQUFrQixvQkFBb0IsMEJBQTBCLDhCQUE4QixvQkFBb0IsR0FBRyxlQUFlLHVCQUF1Qix1QkFBdUIseUJBQXlCLHNCQUFzQix1QkFBdUIsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQixHQUFHLG9CQUFvQixzQkFBc0IsaUJBQWlCLGdCQUFnQixrQkFBa0Isb0JBQW9CLEdBQUcseUJBQXlCLGtCQUFrQixpQkFBaUIsbUJBQW1CLFNBQVMsa0JBQWtCLHNCQUFzQixvQkFBb0IsNkJBQTZCLFNBQVMsVUFBVSxnQ0FBZ0Msd0NBQXdDLEdBQUcsWUFBWSxtQkFBbUIsZ0NBQWdDLEdBQUcsb0RBQW9ELHdCQUF3Qix1QkFBdUIsR0FBRyxzQkFBc0Isb0JBQW9CLHNCQUFzQiw4QkFBOEIsMEJBQTBCLHdCQUF3QixzQkFBc0Isc0JBQXNCLDhDQUE4QyxvQkFBb0IsR0FBRyxrQkFBa0IsbUJBQW1CLDJCQUEyQixHQUFHLG9CQUFvQixrQkFBa0IsR0FBRyxnQkFBZ0IsMkJBQTJCLG1CQUFtQixHQUFHLDRCQUE0QixvQkFBb0IsOEJBQThCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHdCQUF3QixHQUFHLHdCQUF3QixtQkFBbUIsd0JBQXdCLDhCQUE4QixrQkFBa0IsMEJBQTBCLDBDQUEwQyxxQkFBcUIsb0JBQW9CLDhCQUE4QixHQUFHLG1CQUFtQixrQkFBa0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsV0FBVywwQkFBMEIsR0FBRyxTQUFTLG9DQUFvQyxHQUFHLFlBQVksdUNBQXVDLEtBQUssV0FBVyxrREFBa0QsS0FBSyxlQUFlLG9CQUFvQiw4QkFBOEIsa0JBQWtCLHVCQUF1Qix3QkFBd0IsV0FBVyx1QkFBdUIsb0JBQW9CLDhCQUE4QixzQkFBc0IsdUJBQXVCLDBCQUEwQixHQUFHLHFCQUFxQixtQkFBbUIsd0JBQXdCLDhCQUE4QiwwQkFBMEIsbUJBQW1CLHVDQUF1QyxrQkFBa0IsU0FBUyxZQUFZLHVCQUF1QixrQkFBa0IsbUJBQW1CLHNCQUFzQiw4Q0FBOEMsNEJBQTRCLEdBQUcsb0JBQW9CLHVHQUF1RyxrQ0FBa0MsK0RBQStELG1CQUFtQixHQUFHLGtCQUFrQix1R0FBdUcsa0NBQWtDLCtEQUErRCxtQkFBbUIsS0FBSyxxQkFBcUIsdUdBQXVHLGtDQUFrQywrREFBK0QsbUJBQW1CLEtBQUssbUJBQW1CLDZHQUE2RyxrQ0FBa0MsK0RBQStELG1CQUFtQixlQUFlLG1CQUFtQjtBQUNwak47QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN2UTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJxQztBQUNvQjtBQUNaO0FBQ1c7OztBQUd4RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwwREFBWTtBQUNwQzs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVMsS0FBSyx5QkFBeUIsS0FBSyxLQUFLO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQU07QUFDdEI7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNEQUFTO0FBQ3hDLHlCQUF5Qiw0REFBZTtBQUN4QztBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZTtBQUM5QztBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGFBQWE7QUFDN0M7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QiwwREFBWTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGFBQWEsS0FBSyx5QkFBeUIsS0FBSyxLQUFLO0FBQy9FOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsMERBQVk7QUFDckM7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixhQUFhLEtBQUsseUJBQXlCLEtBQUssS0FBSztBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLDBEQUFZO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsYUFBYSxLQUFLLHlCQUF5QixLQUFLLEtBQUs7QUFDL0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EscUNBQXFDLHFFQUFrQjs7Ozs7Ozs7QUFRdkQ7OztBQUdBO0FBQ0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0EsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQjRDO0FBQ0E7QUFDSTtBQUNUO0FBQ047QUFDRTtBQUN3QjtBQUNJO0FBQ0c7QUFDSTtBQUNuQztBQUNhO0FBQ0k7QUFDZjtBQUNvQjtBQUNJO0FBQzFCO0FBQ2U7QUFDYTtBQUNJO0FBQzFCO0FBQ047O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOENBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkNBQUc7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2REFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtEQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOENBQUs7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlEQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNERBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4REFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBSTtBQUN2QjtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUI7QUFDYztBQUNnQzs7QUFFNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EsSUFBSSwyREFBWTtBQUNoQixJQUFJLDREQUFhO0FBQ2pCLG1NQUFtTSxZQUFZOztBQUUvTTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBWTtBQUNoQixJQUFJLDJEQUFXO0FBQ2YsSUFBSSxvRUFBaUI7QUFDckI7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0VBQWU7QUFDcEMseUJBQXlCLGtFQUFlO0FBQ3hDLHlCQUF5QixrRUFBZTtBQUN4Qyx5QkFBeUIsa0VBQWU7QUFDeEMsUUFBUSwyREFBWTtBQUNwQixRQUFRLDJEQUFXO0FBQ25CLFFBQVEsb0VBQWlCO0FBQ3pCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxRUFBa0I7QUFDdkMseUJBQXlCLHFFQUFrQjtBQUMzQyx5QkFBeUIscUVBQWtCO0FBQzNDLHlCQUF5QixxRUFBa0I7QUFDM0MsUUFBUSwyREFBWTtBQUNwQixRQUFRLDJEQUFXO0FBQ25CLFFBQVEsb0VBQWlCO0FBQ3pCO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9VVmluZGV4ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYmFja2dyb3VuZHBpY2tlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jbGVhckNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbG9hZERpdmlzaW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb29ucGhhc2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3RlbXBVbml0U3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckljb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL292ZXJsYXkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC8qXG4gICAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXG4gICovXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAvKlxuICAgIFR5cG9ncmFwaGljIHR3ZWFrcyFcbiAgICAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxuICAgIDQuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcbiAgKi9cbiAgYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuICAvKlxuICAgIDUuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcbiAgKi9cbiAgaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAvKlxuICAgIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXG4gICovXG4gIGlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gIH1cbiAgLypcbiAgICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xuICAqL1xuICBwLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB9XG4gIC8qXG4gICAgOC4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XG4gICovXG4gICNyb290LCAjX19uZXh0IHtcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XG4gIH1cblxuXG4qe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNsb2FkaW5nRGl2aXNpb257XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiN0aXRsZURpdmlzaW9ue1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4jc2VhcmNoRGl2aXNpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4jc2VhcmNoSW5wdXR7XG4gICAgbWluLXdpZHRoOiAxMHJlbTtcbiAgICBtYXgtd2lkdGg6IDIwcmVtO1xuICAgIFxuICAgIGhlaWdodDogM3JlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNzZWFyY2hCdXR0b257XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAzcmVtO1xufVxuXG4jc3dpdGNoRGl2aXNpb257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTotNSU7XG4gICAgcmlnaHQ6IDIlO1xuICAgIHdpZHRoOjE0MHB4O1xuICAgIGhlaWdodDogMTQwcHg7XG59XG5cbiNjZWxzaXVzLCNmYWhyZW5oZWl0e1xuICAgIGJvcmRlcjogMHB4O1xuICAgIHdpZHRoOjcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIFxufVxuI2NvbnRlbnRTZWN0aW9ue1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG59XG4uZ3JleWVke1xuICAgIGNvbG9yOiByZ2IoMTc4LCAxNzgsIDE3OCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xufVxuLnNlbGVjdGVke1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMxZDYxO1xufVxuI2NpdHlEaXZpc2lvbiwjdG9kYXlEaXZpc2lvbiwjZGVzY3JpcHRpb25EaXZpc2lvbntcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jbWFpblRlbXBEaXZpc2lvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6MXJlbTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNpY29uRGl2aXNpb257XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuI2ljb25EaXZpc2lvbj5pbWd7XG4gICAgd2lkdGg6IDkwcHg7XG59XG4jdGVtcERpdmlzaW9ue1xuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuXG5cbiNzZWNvbmRUZW1wRGl2aXNpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4uc2Vjb25kVGVtcENoaWxkcmVue1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46MXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KVxufVxuXG4uc2Vjb25kVGVtcFRpdGxle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWNvbmRUZW1wU1ZHe1xuICAgIHdpZHRoOiA0MnB4O1xufVxuXG4uc2Vjb25kVGVtcE51bWJlcntcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuI3V2TnVte1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4uVVZyZWR7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCByZWQ7XG59XG4uVVZ5ZWxsb3d7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB5ZWxsb3c7XG5cbn1cbi5VVmdyZWVue1xuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgcmdiKDE2NCwgMjU1LCAyOSk7XG5cbn1cblxuI21vb25TdHlsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MCU7XG4gICAgXG5cbn1cblxuI2ZpbmFsVGVtcERpdmlzaW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cbi5maW5hbFRlbXBDaGlsZHJlbntcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNSk7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgXG59XG4uZmluYWxTVkd7XG4gICAgbWFyZ2luLWxlZnQ6IDM2JTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5kdXNrQmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSksXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZTM3NjgyIDE1JSwgIzVmNGQ5MyA4NSUpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDsvKnJlcGVhdCBuZXcgZ3JhZGllbnQgb24gc2Nyb2xsaW5nIGRvd24qLyAgXG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uZGF3bkJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pLFxuICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmNzIxYSAxNSUsICMwNDEyYWIgODUlKTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7LypyZXBlYXQgbmV3IGdyYWRpZW50IG9uIHNjcm9sbGluZyBkb3duKi8gIFxuICAgIGhlaWdodDogMTAwJTsgXG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG5cbi5uaWdodEJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pLFxuICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBjMWQ2MSAxNSUsICMwMDAwMDAgODUlKTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7LypyZXBlYXQgbmV3IGdyYWRpZW50IG9uIHNjcm9sbGluZyBkb3duKi8gIFxuICAgIGhlaWdodDogMTAwJTsgXG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG5cbi5kYXlCYWNrZ3JvdW5ke1xuICAgIFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSxcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmIxNDMgMTUlLCAjMDk5NGZkIDg1JSk7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkOy8qcmVwZWF0IG5ldyBncmFkaWVudCBvbiBzY3JvbGxpbmcgZG93biovICBcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBcbiAgICBcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7RUFDQTs7R0FFQztFQUNEO0lBQ0UsU0FBUztFQUNYO0VBQ0E7Ozs7R0FJQztFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1DQUFtQztFQUNyQztFQUNBOztHQUVDO0VBQ0Q7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUNBOztHQUVDO0VBQ0Q7SUFDRSxhQUFhO0VBQ2Y7RUFDQTs7R0FFQztFQUNEO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7O0dBRUM7RUFDRDtJQUNFLGtCQUFrQjtFQUNwQjs7O0FBR0Y7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0lBRWhCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZ0NBQWdDOztBQUVwQztBQUNBO0lBQ0ksMkNBQTJDOztBQUUvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7OztBQUdyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7b0RBQ2dEO0lBQ2hELDJCQUEyQixDQUFDLHdDQUF3QztJQUNwRSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0k7b0RBQ2dEO0lBQ2hELDJCQUEyQixDQUFDLHdDQUF3QztJQUNwRSxZQUFZO0lBQ1osWUFBWTs7QUFFaEI7O0FBRUE7SUFDSTtvREFDZ0Q7SUFDaEQsMkJBQTJCLENBQUMsd0NBQXdDO0lBQ3BFLFlBQVk7SUFDWixZQUFZOztBQUVoQjs7QUFFQTs7SUFFSTtvREFDZ0Q7SUFDaEQsMkJBQTJCLENBQUMsd0NBQXdDO0lBQ3BFLFlBQVk7SUFDWixZQUFZOzs7QUFHaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuICAvKlxcbiAgICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cXG4gICovXFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgLypcXG4gICAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcbiAgICAzLiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcbiAgICA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuICAqL1xcbiAgYm9keSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgfVxcbiAgLypcXG4gICAgNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcbiAgKi9cXG4gIGltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG4gIC8qXFxuICAgIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxuICAqL1xcbiAgaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICB9XFxuICAvKlxcbiAgICA3LiBBdm9pZCB0ZXh0IG92ZXJmbG93c1xcbiAgKi9cXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcbiAgLypcXG4gICAgOC4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XFxuICAqL1xcbiAgI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICB9XFxuXFxuXFxuKntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jbG9hZGluZ0RpdmlzaW9ue1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI3RpdGxlRGl2aXNpb257XFxuICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4jc2VhcmNoRGl2aXNpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4jc2VhcmNoSW5wdXR7XFxuICAgIG1pbi13aWR0aDogMTByZW07XFxuICAgIG1heC13aWR0aDogMjByZW07XFxuICAgIFxcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuI3NlYXJjaEJ1dHRvbntcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG59XFxuXFxuI3N3aXRjaERpdmlzaW9ue1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTotNSU7XFxuICAgIHJpZ2h0OiAyJTtcXG4gICAgd2lkdGg6MTQwcHg7XFxuICAgIGhlaWdodDogMTQwcHg7XFxufVxcblxcbiNjZWxzaXVzLCNmYWhyZW5oZWl0e1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgd2lkdGg6NzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBcXG59XFxuI2NvbnRlbnRTZWN0aW9ue1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbn1cXG4uZ3JleWVke1xcbiAgICBjb2xvcjogcmdiKDE3OCwgMTc4LCAxNzgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDc4LCA3OCk7XFxufVxcbi5zZWxlY3RlZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMxZDYxO1xcbn1cXG4jY2l0eURpdmlzaW9uLCN0b2RheURpdmlzaW9uLCNkZXNjcmlwdGlvbkRpdmlzaW9ue1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI21haW5UZW1wRGl2aXNpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tdG9wOjFyZW07XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jaWNvbkRpdmlzaW9ue1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG4jaWNvbkRpdmlzaW9uPmltZ3tcXG4gICAgd2lkdGg6IDkwcHg7XFxufVxcbiN0ZW1wRGl2aXNpb257XFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcblxcblxcbiNzZWNvbmRUZW1wRGl2aXNpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbn1cXG5cXG4uc2Vjb25kVGVtcENoaWxkcmVue1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luOjFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KVxcbn1cXG5cXG4uc2Vjb25kVGVtcFRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNlY29uZFRlbXBTVkd7XFxuICAgIHdpZHRoOiA0MnB4O1xcbn1cXG5cXG4uc2Vjb25kVGVtcE51bWJlcntcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbiN1dk51bXtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLlVWcmVke1xcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHJlZDtcXG59XFxuLlVWeWVsbG93e1xcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHllbGxvdztcXG5cXG59XFxuLlVWZ3JlZW57XFxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgcmdiKDE2NCwgMjU1LCAyOSk7XFxuXFxufVxcblxcbiNtb29uU3R5bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MCU7XFxuICAgIFxcblxcbn1cXG5cXG4jZmluYWxUZW1wRGl2aXNpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcbi5maW5hbFRlbXBDaGlsZHJlbntcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNSk7XFxuICAgIHBhZGRpbmc6NXB4O1xcbiAgICBcXG59XFxuLmZpbmFsU1ZHe1xcbiAgICBtYXJnaW4tbGVmdDogMzYlO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uZHVza0JhY2tncm91bmR7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvb3ZlcmxheS5wbmcpLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlMzc2ODIgMTUlLCAjNWY0ZDkzIDg1JSk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDsvKnJlcGVhdCBuZXcgZ3JhZGllbnQgb24gc2Nyb2xsaW5nIGRvd24qLyAgXFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmRhd25CYWNrZ3JvdW5ke1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL292ZXJsYXkucG5nKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmY3MjFhIDE1JSwgIzA0MTJhYiA4NSUpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7LypyZXBlYXQgbmV3IGdyYWRpZW50IG9uIHNjcm9sbGluZyBkb3duKi8gIFxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5uaWdodEJhY2tncm91bmR7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvb3ZlcmxheS5wbmcpLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwYzFkNjEgMTUlLCAjMDAwMDAwIDg1JSk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDsvKnJlcGVhdCBuZXcgZ3JhZGllbnQgb24gc2Nyb2xsaW5nIGRvd24qLyAgXFxuICAgIGhlaWdodDogMTAwJTsgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuLmRheUJhY2tncm91bmR7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL292ZXJsYXkucG5nKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZiMTQzIDE1JSwgIzA5OTRmZCA4NSUpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6Zml4ZWQ7LypyZXBlYXQgbmV3IGdyYWRpZW50IG9uIHNjcm9sbGluZyBkb3duKi8gIFxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5jb25zdCBVVmJhc2U9KGluZGV4KT0+e1xuICAgIGlmKGluZGV4PDMpe1xuICAgICAgICByZXR1cm4gJ1VWZ3JlZW4nO1xuICAgIH1cbiAgICBlbHNlIGlmKGluZGV4PDcpe1xuICAgICAgICByZXR1cm4gJ1VWeWVsbG93JztcbiAgICB9ZWxzZSByZXR1cm4gJ1VWcmVkJztcbn1cblxuZXhwb3J0IHtVVmJhc2V9OyIsImNvbnN0IGJhY2tncm91bmRHZW5lcmF0ZT0obnVtKT0+e1xuICAgIGlmKG51bT45JiZudW08MTYpe1xuICAgICAgICByZXR1cm4gXCJkYXlCYWNrZ3JvdW5kXCI7XG4gICAgfVxuICAgIGVsc2UgaWYobnVtPj0xNiYmbnVtPDE5KXtcbiAgICAgICAgcmV0dXJuIFwiZHVza0JhY2tncm91bmRcIjtcbiAgICB9XG4gICAgZWxzZSBpZihudW0+PTUmJm51bTw9OSl7XG4gICAgICAgIHJldHVybiBcImRhd25CYWNrZ3JvdW5kXCI7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIFwibmlnaHRCYWNrZ3JvdW5kXCI7XG59XG5cbmV4cG9ydCB7YmFja2dyb3VuZEdlbmVyYXRlfTsiLCJsZXQgY29udGVudFNlY3Rpb249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50U2VjdGlvblwiKTtcblxuY29uc3QgY29udGVudENsZWFyPSgpPT57XG4gICAgXG4gICAgd2hpbGUgKGNvbnRlbnRTZWN0aW9uLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBjb250ZW50U2VjdGlvbi5yZW1vdmVDaGlsZChjb250ZW50U2VjdGlvbi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuXG59XG5cbmNvbnN0IGxvYWRpbmdTY3JlZW49KCk9PntcbiAgICBjb25zdCBsb2FkaW5nRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9hZGluZ0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibG9hZGluZ0RpdmlzaW9uXCIpO1xuICAgIGxvYWRpbmdEaXYuaW5uZXJUZXh0PVwiTG9hZGluZy4uLlwiXG4gICAgY29udGVudFNlY3Rpb24uYXBwZW5kQ2hpbGQobG9hZGluZ0Rpdik7XG5cbn1cblxuZXhwb3J0IHtjb250ZW50Q2xlYXIsbG9hZGluZ1NjcmVlbn0iLCJpbXBvcnQgeyBVVmJhc2UgfSBmcm9tIFwiLi9VVmluZGV4ZXJcIjtcbmltcG9ydCB7IG1vb25waGFzZSxtb29uU1ZHZ2VuZXJhdGUgfSBmcm9tIFwiLi9tb29ucGhhc2VyXCI7XG5pbXBvcnQgeyBpY29uR2VuZXJhdGUgfSBmcm9tIFwiLi93ZWF0aGVySWNvblwiO1xuaW1wb3J0IHsgYmFja2dyb3VuZEdlbmVyYXRlIH0gZnJvbSBcIi4vYmFja2dyb3VuZHBpY2tlclwiO1xuXG5cbmNvbnN0IGRpc3BsYXlQYWdlPShvYmosdW5pdCk9PntcbiAgICBcbiAgICBsZXQgY29udGVudFNlY3Rpb249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50U2VjdGlvblwiKTtcblxuICAgIFxuXG4gICAgbGV0IGNpdHlEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaXR5RGl2LmlubmVyVGV4dD1vYmoubG9jYXRpb247XG4gICAgY2l0eURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY2l0eURpdmlzaW9uXCIpO1xuICAgIGNvbnRlbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNpdHlEaXYpO1xuXG4gICAgbGV0IHRvZGF5RGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH07XG5cbiAgICB0b2RheURpdi5pbm5lclRleHQ9KG5ldyBEYXRlKG9iai5kYXkpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpKTtcbiAgICB0b2RheURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidG9kYXlEaXZpc2lvblwiKTtcbiAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZCh0b2RheURpdik7XG5cbiAgICBsZXQgbWFpblRlbXBEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluVGVtcERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibWFpblRlbXBEaXZpc2lvblwiKTtcbiAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChtYWluVGVtcERpdik7XG5cbiAgICBsZXQgaWNvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGljb25EaXYuc2V0QXR0cmlidXRlKFwiaWRcIixcImljb25EaXZpc2lvblwiKTtcbiAgICBpY29uRGl2LmFwcGVuZENoaWxkKGljb25HZW5lcmF0ZShvYmouaWNvbikpO1xuICAgIG1haW5UZW1wRGl2LmFwcGVuZENoaWxkKGljb25EaXYpO1xuXG4gICAgbGV0IHRlbXBEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZW1wRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0ZW1wRGl2aXNpb25cIik7XG4gICAgdGVtcERpdi5pbm5lclRleHQ9YCR7b2JqLnRlbXB9YCtgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9YCtgJHt1bml0fWA7XG4gICAgbWFpblRlbXBEaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XG5cbiAgICBsZXQgY29uZGl0aW9uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uZGl0aW9uRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsXCJjb25kaXRpb25EaXZpc2lvblwiKTtcbiAgICBjb25kaXRpb25EaXYuaW5uZXJUZXh0PW9iai5jb25kaXRpb25zO1xuICAgIG1haW5UZW1wRGl2LmFwcGVuZENoaWxkKGNvbmRpdGlvbkRpdik7XG5cbiAgICBsZXQgc2Vjb25kVGVtcERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY29uZFRlbXBEaXYuc2V0QXR0cmlidXRlKFwiaWRcIixcInNlY29uZFRlbXBEaXZpc2lvblwiKTtcbiAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChzZWNvbmRUZW1wRGl2KTtcblxuICAgIGxldCBodW1pZERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGh1bWlkRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wQ2hpbGRyZW5cIik7XG4gICAgc2Vjb25kVGVtcERpdi5hcHBlbmRDaGlsZChodW1pZERpdik7XG5cbiAgICBsZXQgaHVtaWRUaXRsZVNlY3Rpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBodW1pZFRpdGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFRpdGxlXCIpXG4gICAgbGV0IGh1bWlkVGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgaHVtaWRTeW1ib2w9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBodW1pZFN5bWJvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFNWR1wiKTtcbiAgICBodW1pZFRpdGxlLmlubmVyVGV4dD1cIkh1bWlkaXR5XCI7XG4gICAgaHVtaWRTeW1ib2wuaW5uZXJIVE1MPWA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndhdGVyLXBlcmNlbnQ8L3RpdGxlPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyLDMuMjVDMTIsMy4yNSA2LDEwIDYsMTRDNiwxNy4zMiA4LjY5LDIwIDEyLDIwQTYsNiAwIDAsMCAxOCwxNEMxOCwxMCAxMiwzLjI1IDEyLDMuMjVNMTQuNDcsOS45N0wxNS41MywxMS4wM0w5LjUzLDE3LjAzTDguNDcsMTUuOTdNOS43NSwxMEExLjI1LDEuMjUgMCAwLDEgMTEsMTEuMjVBMS4yNSwxLjI1IDAgMCwxIDkuNzUsMTIuNUExLjI1LDEuMjUgMCAwLDEgOC41LDExLjI1QTEuMjUsMS4yNSAwIDAsMSA5Ljc1LDEwTTE0LjI1LDE0LjVBMS4yNSwxLjI1IDAgMCwxIDE1LjUsMTUuNzVBMS4yNSwxLjI1IDAgMCwxIDE0LjI1LDE3QTEuMjUsMS4yNSAwIDAsMSAxMywxNS43NUExLjI1LDEuMjUgMCAwLDEgMTQuMjUsMTQuNVpcIiAvPjwvc3ZnPmA7XG4gICAgaHVtaWRUaXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoaHVtaWRUaXRsZSk7XG4gICAgaHVtaWRUaXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoaHVtaWRTeW1ib2wpO1xuXG4gICAgbGV0IGh1bWlkTnVtYmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaHVtaWROdW1iZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlY29uZFRlbXBOdW1iZXJcIik7XG4gICAgaHVtaWROdW1iZXIuaW5uZXJUZXh0PWAke29iai5odW1pZGl0eX0lYDtcbiAgICBodW1pZERpdi5hcHBlbmRDaGlsZChodW1pZFRpdGxlU2VjdGlvbik7XG4gICAgaHVtaWREaXYuYXBwZW5kQ2hpbGQoaHVtaWROdW1iZXIpO1xuXG5cblxuICAgIGxldCBVVkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFVWRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wQ2hpbGRyZW5cIik7XG4gICAgc2Vjb25kVGVtcERpdi5hcHBlbmRDaGlsZChVVkRpdik7XG5cbiAgICBsZXQgVVZUaXRsZVNlY3Rpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBVVlRpdGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFRpdGxlXCIpXG4gICAgbGV0IFVWVGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgVVZTeW1ib2w9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBVVlN5bWJvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFNWR1wiKTtcbiAgICBVVlRpdGxlLmlubmVyVGV4dD1cIlVWIEluZGV4XCI7XG4gICAgVVZTeW1ib2wuaW5uZXJIVE1MPWA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmVtb3RpY29uLWNvb2wtb3V0bGluZTwvdGl0bGU+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTksMTBDMTksMTEuMzggMTYuODgsMTIuNSAxNS41LDEyLjVDMTQuMTIsMTIuNSAxMi43NSwxMS4zOCAxMi43NSwxMEgxMS4yNUMxMS4yNSwxMS4zOCA5Ljg4LDEyLjUgOC41LDEyLjVDNy4xMiwxMi41IDUsMTEuMzggNSwxMEg0LjI1QzQuMDksMTAuNjQgNCwxMS4zMSA0LDEyQTgsOCAwIDAsMCAxMiwyMEE4LDggMCAwLDAgMjAsMTJDMjAsMTEuMzEgMTkuOTEsMTAuNjQgMTkuNzUsMTBIMTlNMTIsNEM5LjA0LDQgNi40NSw1LjYxIDUuMDcsOEgxOC45M0MxNy41NSw1LjYxIDE0Ljk2LDQgMTIsNE0yMiwxMkExMCwxMCAwIDAsMSAxMiwyMkExMCwxMCAwIDAsMSAyLDEyQTEwLDEwIDAgMCwxIDEyLDJBMTAsMTAgMCAwLDEgMjIsMTJNMTIsMTcuMjNDMTAuMjUsMTcuMjMgOC43MSwxNi41IDcuODEsMTUuNDJMOS4yMywxNEM5LjY4LDE0LjcyIDEwLjc1LDE1LjIzIDEyLDE1LjIzQzEzLjI1LDE1LjIzIDE0LjMyLDE0LjcyIDE0Ljc3LDE0TDE2LjE5LDE1LjQyQzE1LjI5LDE2LjUgMTMuNzUsMTcuMjMgMTIsMTcuMjNaXCIgLz48L3N2Zz5gO1xuICAgIFVWVGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKFVWVGl0bGUpO1xuICAgIFVWVGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKFVWU3ltYm9sKTtcbiAgICBcbiAgICBsZXQgVVZOdW1iZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBVVk51bWJlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcE51bWJlclwiKTtcbiAgICBVVk51bWJlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidXZOdW1cIik7XG4gICAgVVZOdW1iZXIuaW5uZXJUZXh0PW9iai51dmluZGV4O1xuICAgIGxldCBVVmNsYXNzPVVWYmFzZSgrKG9iai51dmluZGV4KSk7XG4gICAgVVZOdW1iZXIuY2xhc3NMaXN0LmFkZChVVmNsYXNzKTtcbiAgICBVVkRpdi5hcHBlbmRDaGlsZChVVlRpdGxlU2VjdGlvbik7XG4gICAgVVZEaXYuYXBwZW5kQ2hpbGQoVVZOdW1iZXIpO1xuXG5cblxuICAgIGxldCBtb29uRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9vbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcENoaWxkcmVuXCIpO1xuICAgIHNlY29uZFRlbXBEaXYuYXBwZW5kQ2hpbGQobW9vbkRpdik7XG5cbiAgICBsZXQgbW9vblRpdGxlU2VjdGlvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vb25UaXRsZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlY29uZFRlbXBUaXRsZVwiKTsgICAgXG4gICAgbGV0IG1vb25TeW1ib2w9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb29uU3ltYm9sLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtb29uU3R5bGVcIik7XG4gICAgbW9vblRpdGxlU2VjdGlvbi5pbm5lclRleHQ9bW9vbnBoYXNlKG9iai5tb29uKTtcbiAgICBtb29uU3ltYm9sLmlubmVySFRNTD1tb29uU1ZHZ2VuZXJhdGUob2JqLm1vb24pO1xuICAgIG1vb25EaXYuYXBwZW5kQ2hpbGQobW9vblN5bWJvbCk7XG4gICAgbW9vbkRpdi5hcHBlbmRDaGlsZChtb29uVGl0bGVTZWN0aW9uKTtcblxuXG5cbiAgICBsZXQgd2luZERpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdpbmREaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlY29uZFRlbXBDaGlsZHJlblwiKTtcbiAgICBzZWNvbmRUZW1wRGl2LmFwcGVuZENoaWxkKHdpbmREaXYpO1xuXG4gICAgbGV0IHdpbmRUaXRsZVNlY3Rpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aW5kVGl0bGVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wVGl0bGVcIilcbiAgICBsZXQgd2luZFRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHdpbmRTeW1ib2w9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aW5kU3ltYm9sLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wU1ZHXCIpO1xuICAgIHdpbmRUaXRsZS5pbm5lclRleHQ9XCJXaW5kIHNwZWVkXCI7XG4gICAgd2luZFN5bWJvbC5pbm5lckhUTUw9YDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+d2VhdGhlci13aW5keTwvdGl0bGU+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNCwxMEExLDEgMCAwLDEgMyw5QTEsMSAwIDAsMSA0LDhIMTJBMiwyIDAgMCwwIDE0LDZBMiwyIDAgMCwwIDEyLDRDMTEuNDUsNCAxMC45NSw0LjIyIDEwLjU5LDQuNTlDMTAuMiw1IDkuNTYsNSA5LjE3LDQuNTlDOC43OCw0LjIgOC43OCwzLjU2IDkuMTcsMy4xN0M5LjksMi40NSAxMC45LDIgMTIsMkE0LDQgMCAwLDEgMTYsNkE0LDQgMCAwLDEgMTIsMTBINE0xOSwxMkExLDEgMCAwLDAgMjAsMTFBMSwxIDAgMCwwIDE5LDEwQzE4LjcyLDEwIDE4LjQ3LDEwLjExIDE4LjI5LDEwLjI5QzE3LjksMTAuNjggMTcuMjcsMTAuNjggMTYuODgsMTAuMjlDMTYuNSw5LjkgMTYuNSw5LjI3IDE2Ljg4LDguODhDMTcuNDIsOC4zNCAxOC4xNyw4IDE5LDhBMywzIDAgMCwxIDIyLDExQTMsMyAwIDAsMSAxOSwxNEg1QTEsMSAwIDAsMSA0LDEzQTEsMSAwIDAsMSA1LDEySDE5TTE4LDE4SDRBMSwxIDAgMCwxIDMsMTdBMSwxIDAgMCwxIDQsMTZIMThBMywzIDAgMCwxIDIxLDE5QTMsMyAwIDAsMSAxOCwyMkMxNy4xNywyMiAxNi40MiwyMS42NiAxNS44OCwyMS4xMkMxNS41LDIwLjczIDE1LjUsMjAuMSAxNS44OCwxOS43MUMxNi4yNywxOS4zMiAxNi45LDE5LjMyIDE3LjI5LDE5LjcxQzE3LjQ3LDE5Ljg5IDE3LjcyLDIwIDE4LDIwQTEsMSAwIDAsMCAxOSwxOUExLDEgMCAwLDAgMTgsMThaXCIgLz48L3N2Zz5gO1xuICAgIHdpbmRUaXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQod2luZFRpdGxlKTtcbiAgICB3aW5kVGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHdpbmRTeW1ib2wpO1xuICAgIFxuICAgIGxldCB3aW5kTnVtYmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2luZE51bWJlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcE51bWJlclwiKTtcbiAgICB3aW5kTnVtYmVyLmlubmVyVGV4dD1gJHtvYmoud2luZH1rcGhgO1xuICAgIHdpbmREaXYuYXBwZW5kQ2hpbGQod2luZFRpdGxlU2VjdGlvbik7XG4gICAgd2luZERpdi5hcHBlbmRDaGlsZCh3aW5kTnVtYmVyKTtcblxuXG5cblxuXG4gICAgbGV0IHZpc2libGVEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2aXNpYmxlRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wQ2hpbGRyZW5cIik7XG4gICAgc2Vjb25kVGVtcERpdi5hcHBlbmRDaGlsZCh2aXNpYmxlRGl2KTtcblxuICAgIGxldCB2aXNpYmxlVGl0bGVTZWN0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmlzaWJsZVRpdGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFRpdGxlXCIpXG4gICAgbGV0IHZpc2libGVUaXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB2aXNpYmxlU3ltYm9sPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmlzaWJsZVN5bWJvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFNWR1wiKTtcbiAgICB2aXNpYmxlVGl0bGUuaW5uZXJUZXh0PVwiVmlzaWJpbGl0eVwiO1xuICAgIHZpc2libGVTeW1ib2wuaW5uZXJIVE1MPWA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmV5ZTwvdGl0bGU+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIsOUEzLDMgMCAwLDAgOSwxMkEzLDMgMCAwLDAgMTIsMTVBMywzIDAgMCwwIDE1LDEyQTMsMyAwIDAsMCAxMiw5TTEyLDE3QTUsNSAwIDAsMSA3LDEyQTUsNSAwIDAsMSAxMiw3QTUsNSAwIDAsMSAxNywxMkE1LDUgMCAwLDEgMTIsMTdNMTIsNC41QzcsNC41IDIuNzMsNy42MSAxLDEyQzIuNzMsMTYuMzkgNywxOS41IDEyLDE5LjVDMTcsMTkuNSAyMS4yNywxNi4zOSAyMywxMkMyMS4yNyw3LjYxIDE3LDQuNSAxMiw0LjVaXCIgLz48L3N2Zz5gO1xuICAgIHZpc2libGVUaXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodmlzaWJsZVRpdGxlKTtcbiAgICB2aXNpYmxlVGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHZpc2libGVTeW1ib2wpO1xuICAgIFxuICAgIGxldCB2aXNpYmxlTnVtYmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmlzaWJsZU51bWJlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcE51bWJlclwiKTtcbiAgICB2aXNpYmxlTnVtYmVyLmlubmVyVGV4dD1gJHtvYmoudmlzaWJpbGl0eX1rbWA7XG4gICAgdmlzaWJsZURpdi5hcHBlbmRDaGlsZCh2aXNpYmxlVGl0bGVTZWN0aW9uKTtcbiAgICB2aXNpYmxlRGl2LmFwcGVuZENoaWxkKHZpc2libGVOdW1iZXIpO1xuXG5cblxuXG5cbiAgICBsZXQgcHJlc3N1cmVEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmVzc3VyZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcENoaWxkcmVuXCIpO1xuICAgIHNlY29uZFRlbXBEaXYuYXBwZW5kQ2hpbGQocHJlc3N1cmVEaXYpO1xuXG4gICAgbGV0IHByZXNzdXJlVGl0bGVTZWN0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJlc3N1cmVUaXRsZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlY29uZFRlbXBUaXRsZVwiKVxuICAgIGxldCBwcmVzc3VyZVRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHByZXNzdXJlU3ltYm9sPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJlc3N1cmVTeW1ib2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlY29uZFRlbXBTVkdcIik7XG4gICAgcHJlc3N1cmVUaXRsZS5pbm5lclRleHQ9XCJQcmVzc3VyZVwiO1xuICAgIHByZXNzdXJlU3ltYm9sLmlubmVySFRNTD1gPHN2ZyBmaWxsPVwiIzAwMDAwMFwiICB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgMTg1LjQyMSAxODUuNDIxXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gPGc+IDxnPiA8Zz4gPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTU1Ljc2MiwyMy4xOTJjLTUuMjMtMTIuMTAxLTE3LjUyOC0yMC4wNTgtMzEuNDMyLTIwLjA1OGMtMTcuNTI2LDAtMzIsMTIuNzQxLTMzLjgyNSwyOS4wNyBDNzcuNzY5LDMzLjMzMSw2Ny43NSw0My45NTMsNjcuNzUsNTYuODQzYzAsMTMuMDE3LDEwLjE1NCwyMy43NjMsMjMuMjA2LDI0LjY3NWMwLjIxOCwwLjA0MiwwLjQzOSwwLjA2MywwLjY2MywwLjA2M2g2My4xNjYgYzAuMDk2LDAsMC4xOS0wLjAwNCwwLjI4NC0wLjAxYzAuMjgsMC4wMDcsMC41NjIsMC4wMSwwLjg0NCwwLjAxYzE2LjI3MSwwLDI5LjUwOC0xMy4wOTcsMjkuNTA4LTI5LjE5NSBDMTg1LjQyMiwzNi4yMzksMTcyLjA1OSwyMy4xMTksMTU1Ljc2MiwyMy4xOTJ6IE0xNTUuOTE0LDc0LjQ1Yy0wLjMyNiwwLTAuNjQ5LTAuMDA3LTAuOTctMC4wMjEgYy0wLjA1NC0wLjAwNC0wLjEwOC0wLjAwNC0wLjE2Mi0wLjAwNGMtMC4xMzksMC0wLjI3NywwLjAwNy0wLjQxMywwLjAyNEg5Mi4wNzRjLTAuMDg5LTAuMDEtMC4xNzYtMC4wMTctMC4yNjUtMC4wMjQgYy05LjQ5My0wLjQ4LTE2LjkyNy04LjIwNC0xNi45MjctMTcuNTgyYzAtMTAuMDI1LDguNzAyLTE4LjAyMSwxOC44MjktMTcuNTgyYzAuOTczLDAuMDQ1LDEuOTI0LTAuMzI0LDIuNjI3LTAuOTk2IGMwLjcwNS0wLjY3NiwxLjEwNC0xLjYxOSwxLjEwNC0yLjU5NGMwLTE0LjAwOSwxMi4wNjItMjUuNDA2LDI2Ljg4OC0yNS40MDZjMTEuNzkxLDAsMjIuMDk3LDcuMTMyLDI1LjY0NywxNy43NDYgYzAuNTI2LDEuNTcsMi4wNzQsMi42MjIsMy43MTksMi40MTdjMC43My0wLjA3LDEuNDY5LTAuMTA0LDIuMjE4LTAuMTA0YzEyLjMzOSwwLDIyLjM3Nyw5Ljg5NywyMi4zNzcsMjIuMDYzIEMxNzguMjkxLDY0LjU1MiwxNjguMjUzLDc0LjQ1LDE1NS45MTQsNzQuNDV6XCI+PC9wYXRoPiA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk04Ny42NjksMTIwLjE5Mmw1LjA0Miw1LjA0MmwxMi42MDctMTIuNjA2YzAuNjY5LTAuNjY5LDEuMDQ1LTEuNTc0LDEuMDQ1LTIuNTIxYzAtMC45NDctMC4zNzYtMS44NTItMS4wNDUtMi41MjEgTDkyLjcxMSw5NC45ODFsLTUuMDQyLDUuMDQybDYuNTE5LDYuNTE5SDB2Ny4xMzJoOTQuMTg4TDg3LjY2OSwxMjAuMTkyelwiPjwvcGF0aD4gPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTUzLjMzLDE1Mi4wMzNsLTUuMDQyLDUuMDQybDYuNTE5LDYuNTE5SDYwLjYxOXY3LjEzMmg5NC4xODhsLTYuNTE5LDYuNTE5bDUuMDQyLDUuMDQybDEyLjYwNy0xMi42MDYgYzAuNjY5LTAuNjY5LDEuMDQ1LTEuNTc0LDEuMDQ1LTIuNTIxYzAtMC45NDctMC4zNzYtMS44NTItMS4wNDUtMi41MjFMMTUzLjMzLDE1Mi4wMzN6XCI+PC9wYXRoPiA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xMTYuMTk1LDE0OC43MThsNS4wNDIsNS4wNDJsMTIuNjA3LTEyLjYwNmMwLjY2OS0wLjY2OSwxLjA0NS0xLjU3NCwxLjA0NS0yLjUyMXMtMC4zNzYtMS44NTItMS4wNDUtMi41MjEgbC0xMi42MDctMTIuNjA2bC01LjA0Miw1LjA0Mmw2LjUxOSw2LjUxOUgyOC41MjZ2Ny4xMzJoOTQuMTg4TDExNi4xOTUsMTQ4LjcxOHpcIj48L3BhdGg+IDwvZz4gPC9nPiA8L2c+IDwvZz48L3N2Zz5gO1xuICAgIHByZXNzdXJlVGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHByZXNzdXJlVGl0bGUpO1xuICAgIHByZXNzdXJlVGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHByZXNzdXJlU3ltYm9sKTtcbiAgICBcbiAgICBsZXQgcHJlc3N1cmVOdW1iZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmVzc3VyZU51bWJlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcE51bWJlclwiKTtcbiAgICBwcmVzc3VyZU51bWJlci5pbm5lclRleHQ9YCR7b2JqLnByZXNzdXJlfW1iYDtcbiAgICBwcmVzc3VyZURpdi5hcHBlbmRDaGlsZChwcmVzc3VyZVRpdGxlU2VjdGlvbik7XG4gICAgcHJlc3N1cmVEaXYuYXBwZW5kQ2hpbGQocHJlc3N1cmVOdW1iZXIpO1xuXG5cblxuICAgIGxldCBzdW5yaXNlRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VucmlzZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcENoaWxkcmVuXCIpO1xuICAgIHNlY29uZFRlbXBEaXYuYXBwZW5kQ2hpbGQoc3VucmlzZURpdik7XG5cbiAgICBsZXQgc3VucmlzZVRpdGxlU2VjdGlvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1bnJpc2VUaXRsZVNlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlY29uZFRlbXBUaXRsZVwiKVxuICAgIGxldCBzdW5yaXNlVGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgc3VucmlzZVN5bWJvbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1bnJpc2VTeW1ib2wuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlY29uZFRlbXBTVkdcIik7XG4gICAgc3VucmlzZVRpdGxlLmlubmVyVGV4dD1cIlN1bnJpc2VcIjtcbiAgICBzdW5yaXNlU3ltYm9sLmlubmVySFRNTD1gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53ZWF0aGVyLXN1bnNldC11cDwvdGl0bGU+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMywxMkg3QTUsNSAwIDAsMSAxMiw3QTUsNSAwIDAsMSAxNywxMkgyMUExLDEgMCAwLDEgMjIsMTNBMSwxIDAgMCwxIDIxLDE0SDNBMSwxIDAgMCwxIDIsMTNBMSwxIDAgMCwxIDMsMTJNMTUsMTJBMywzIDAgMCwwIDEyLDlBMywzIDAgMCwwIDksMTJIMTVNMTIsMkwxNC4zOSw1LjQyQzEzLjY1LDUuMTUgMTIuODQsNSAxMiw1QzExLjE2LDUgMTAuMzUsNS4xNSA5LjYxLDUuNDJMMTIsMk0zLjM0LDdMNy41LDYuNjVDNi45LDcuMTYgNi4zNiw3Ljc4IDUuOTQsOC41QzUuNSw5LjI0IDUuMjUsMTAgNS4xMSwxMC43OUwzLjM0LDdNMjAuNjUsN0wxOC44OCwxMC43OUMxOC43NCwxMCAxOC40Nyw5LjIzIDE4LjA1LDguNUMxNy42Myw3Ljc4IDE3LjEsNy4xNSAxNi41LDYuNjRMMjAuNjUsN00xMi43MSwxNi4zTDE1LjgyLDE5LjQxQzE2LjIxLDE5LjggMTYuMjEsMjAuNDMgMTUuODIsMjAuODJDMTUuNDMsMjEuMjEgMTQuOCwyMS4yMSAxNC40MSwyMC44MkwxMiwxOC40MUw5LjU5LDIwLjgyQzkuMiwyMS4yMSA4LjU3LDIxLjIxIDguMTgsMjAuODJDNy43OSwyMC40MyA3Ljc5LDE5LjggOC4xOCwxOS40MUwxMS4yOSwxNi4zQzExLjUsMTYuMSAxMS43NCwxNiAxMiwxNkMxMi4yNiwxNiAxMi41LDE2LjEgMTIuNzEsMTYuM1pcIiAvPjwvc3ZnPmA7XG4gICAgc3VucmlzZVRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZChzdW5yaXNlVGl0bGUpO1xuICAgIHN1bnJpc2VUaXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc3VucmlzZVN5bWJvbCk7XG4gICAgXG4gICAgbGV0IHN1bnJpc2VOdW1iZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdW5yaXNlTnVtYmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wTnVtYmVyXCIpO1xuICAgIHN1bnJpc2VOdW1iZXIuaW5uZXJUZXh0PW9iai5zdW5yaXNlO1xuICAgIHN1bnJpc2VEaXYuYXBwZW5kQ2hpbGQoc3VucmlzZVRpdGxlU2VjdGlvbik7XG4gICAgc3VucmlzZURpdi5hcHBlbmRDaGlsZChzdW5yaXNlTnVtYmVyKTtcblxuXG5cbiAgICBsZXQgc3VuU2V0RGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VuU2V0RGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wQ2hpbGRyZW5cIik7XG4gICAgc2Vjb25kVGVtcERpdi5hcHBlbmRDaGlsZChzdW5TZXREaXYpO1xuXG4gICAgbGV0IHN1blNldFRpdGxlU2VjdGlvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1blNldFRpdGxlU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFRpdGxlXCIpXG4gICAgbGV0IHN1blNldFRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IHN1blNldFN5bWJvbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1blNldFN5bWJvbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFNWR1wiKTtcbiAgICBzdW5TZXRUaXRsZS5pbm5lclRleHQ9XCJTdW5zZXRcIjtcbiAgICBzdW5TZXRTeW1ib2wuaW5uZXJIVE1MPWA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndlYXRoZXItc3Vuc2V0PC90aXRsZT48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zLDEySDdBNSw1IDAgMCwxIDEyLDdBNSw1IDAgMCwxIDE3LDEySDIxQTEsMSAwIDAsMSAyMiwxM0ExLDEgMCAwLDEgMjEsMTRIM0ExLDEgMCAwLDEgMiwxM0ExLDEgMCAwLDEgMywxMk01LDE2SDE5QTEsMSAwIDAsMSAyMCwxN0ExLDEgMCAwLDEgMTksMThINUExLDEgMCAwLDEgNCwxN0ExLDEgMCAwLDEgNSwxNk0xNywyMEExLDEgMCAwLDEgMTgsMjFBMSwxIDAgMCwxIDE3LDIySDdBMSwxIDAgMCwxIDYsMjFBMSwxIDAgMCwxIDcsMjBIMTdNMTUsMTJBMywzIDAgMCwwIDEyLDlBMywzIDAgMCwwIDksMTJIMTVNMTIsMkwxNC4zOSw1LjQyQzEzLjY1LDUuMTUgMTIuODQsNSAxMiw1QzExLjE2LDUgMTAuMzUsNS4xNSA5LjYxLDUuNDJMMTIsMk0zLjM0LDdMNy41LDYuNjVDNi45LDcuMTYgNi4zNiw3Ljc4IDUuOTQsOC41QzUuNSw5LjI0IDUuMjUsMTAgNS4xMSwxMC43OUwzLjM0LDdNMjAuNjUsN0wxOC44OCwxMC43OUMxOC43NCwxMCAxOC40Nyw5LjIzIDE4LjA1LDguNUMxNy42Myw3Ljc4IDE3LjEsNy4xNSAxNi41LDYuNjRMMjAuNjUsN1pcIiAvPjwvc3ZnPmA7XG4gICAgc3VuU2V0VGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHN1blNldFRpdGxlKTtcbiAgICBzdW5TZXRUaXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc3VuU2V0U3ltYm9sKTtcbiAgICBcbiAgICBsZXQgc3VuU2V0TnVtYmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VuU2V0TnVtYmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wTnVtYmVyXCIpO1xuICAgIHN1blNldE51bWJlci5pbm5lclRleHQ9b2JqLnN1bnNldDtcbiAgICBzdW5TZXREaXYuYXBwZW5kQ2hpbGQoc3VuU2V0VGl0bGVTZWN0aW9uKTtcbiAgICBzdW5TZXREaXYuYXBwZW5kQ2hpbGQoc3VuU2V0TnVtYmVyKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbkRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsXCJkZXNjcmlwdGlvbkRpdmlzaW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uRGl2LmlubmVyVGV4dD1vYmouZGVzY3JpcHRpb247XG4gICAgY29udGVudFNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG5cblxuXG5cbiAgICBsZXQgZmluYWxUZW1wRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmluYWxUZW1wRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsXCJmaW5hbFRlbXBEaXZpc2lvblwiKTtcbiAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChmaW5hbFRlbXBEaXYpO1xuXG4gICAgbGV0IGRheTFEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXkxRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJmaW5hbFRlbXBDaGlsZHJlblwiKTtcbiAgICBmaW5hbFRlbXBEaXYuYXBwZW5kQ2hpbGQoZGF5MURpdik7XG4gICAgbGV0IGRheTFEYXk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXkxRGF5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wVGl0bGVcIik7XG4gICAgZGF5MURheS5pbm5lclRleHQ9KG5ldyBEYXRlKG9iai5kYXkxZGF5KS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKSk7XG4gICAgZGF5MURpdi5hcHBlbmRDaGlsZChkYXkxRGF5KTtcblxuICAgIGxldCBkYXkxSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRheTFJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJmaW5hbFNWR1wiKTtcbiAgICBkYXkxSWNvbi5hcHBlbmRDaGlsZChpY29uR2VuZXJhdGUob2JqLmRheTFpY29uKSk7XG4gICAgZGF5MURpdi5hcHBlbmRDaGlsZChkYXkxSWNvbik7XG5cbiAgICBsZXQgZGF5MVRlbXA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXkxVGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFRpdGxlXCIpO1xuICAgIGRheTFUZW1wLmlubmVyVGV4dD1gJHtvYmouZGF5MXRlbXB9YCtgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9YCtgJHt1bml0fWA7XG4gICAgZGF5MURpdi5hcHBlbmRDaGlsZChkYXkxVGVtcCk7XG5cbiAgICBsZXQgZGF5MUNvbmRpdGlvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRheTFDb25kaXRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlY29uZFRlbXBUaXRsZVwiKTtcbiAgICBkYXkxQ29uZGl0aW9uLmlubmVyVGV4dD1vYmouZGF5MWNvbmRpdGlvbnM7XG4gICAgZGF5MURpdi5hcHBlbmRDaGlsZChkYXkxQ29uZGl0aW9uKTtcblxuICAgIGxldCBkYXkyRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF5MkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiZmluYWxUZW1wQ2hpbGRyZW5cIik7XG4gICAgZmluYWxUZW1wRGl2LmFwcGVuZENoaWxkKGRheTJEaXYpO1xuICAgIGxldCBkYXkyRGF5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF5MkRheS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFRpdGxlXCIpO1xuICAgIGRheTJEYXkuaW5uZXJUZXh0PShuZXcgRGF0ZShvYmouZGF5MmRheSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucykpO1xuICAgIGRheTJEaXYuYXBwZW5kQ2hpbGQoZGF5MkRheSk7XG5cbiAgICBsZXQgZGF5Mkljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXkySWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiZmluYWxTVkdcIik7XG4gICAgZGF5Mkljb24uYXBwZW5kQ2hpbGQoaWNvbkdlbmVyYXRlKG9iai5kYXkyaWNvbikpO1xuICAgIGRheTJEaXYuYXBwZW5kQ2hpbGQoZGF5Mkljb24pO1xuXG4gICAgbGV0IGRheTJUZW1wPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF5MlRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlY29uZFRlbXBUaXRsZVwiKTtcbiAgICBkYXkyVGVtcC5pbm5lclRleHQ9YCR7b2JqLmRheTJ0ZW1wfWArYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfWArYCR7dW5pdH1gO1xuICAgIGRheTJEaXYuYXBwZW5kQ2hpbGQoZGF5MlRlbXApO1xuXG4gICAgbGV0IGRheTJDb25kaXRpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXkyQ29uZGl0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wVGl0bGVcIik7XG4gICAgZGF5MkNvbmRpdGlvbi5pbm5lclRleHQ9b2JqLmRheTJjb25kaXRpb25zO1xuICAgIGRheTJEaXYuYXBwZW5kQ2hpbGQoZGF5MkNvbmRpdGlvbik7XG5cbiAgICBsZXQgZGF5M0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRheTNEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImZpbmFsVGVtcENoaWxkcmVuXCIpO1xuICAgIGZpbmFsVGVtcERpdi5hcHBlbmRDaGlsZChkYXkzRGl2KTtcbiAgICBsZXQgZGF5M0RheT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRheTNEYXkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlY29uZFRlbXBUaXRsZVwiKTtcbiAgICBkYXkzRGF5LmlubmVyVGV4dD0obmV3IERhdGUob2JqLmRheTNkYXkpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpKTtcbiAgICBkYXkzRGl2LmFwcGVuZENoaWxkKGRheTNEYXkpO1xuXG4gICAgbGV0IGRheTNJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF5M0ljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImZpbmFsU1ZHXCIpO1xuICAgIGRheTNJY29uLmFwcGVuZENoaWxkKGljb25HZW5lcmF0ZShvYmouZGF5M2ljb24pKTtcbiAgICBkYXkzRGl2LmFwcGVuZENoaWxkKGRheTNJY29uKTtcblxuICAgIGxldCBkYXkzVGVtcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRheTNUZW1wLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzZWNvbmRUZW1wVGl0bGVcIik7XG4gICAgZGF5M1RlbXAuaW5uZXJUZXh0PWAke29iai5kYXkzdGVtcH1gK2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1gK2Ake3VuaXR9YDtcbiAgICBkYXkzRGl2LmFwcGVuZENoaWxkKGRheTNUZW1wKTtcblxuICAgIGxldCBkYXkzQ29uZGl0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF5M0NvbmRpdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2Vjb25kVGVtcFRpdGxlXCIpO1xuICAgIGRheTNDb25kaXRpb24uaW5uZXJUZXh0PW9iai5kYXkzY29uZGl0aW9ucztcbiAgICBkYXkzRGl2LmFwcGVuZENoaWxkKGRheTNDb25kaXRpb24pO1xuXG5cblxuICAgIGxldCBib2R5U2VjdGlvbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBsZXQgY3VycmVudFRpbWU9KG9iai50aW1lKS5zbGljZSgwLDIpO1xuICAgIGJvZHlTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYmFja2dyb3VuZEdlbmVyYXRlKCtjdXJyZW50VGltZSkpO1xuXG5cblxuXG5cblxuXG4gICAgXG5cblxuICAgIFxuICAgIFxuXG5cbn1cblxuZXhwb3J0IHtkaXNwbGF5UGFnZX07IiwiXG5jb25zdCBtb29ucGhhc2U9KG51bSk9PntcbiAgICBpZihudW09PT0wKXtcbiAgICAgICAgcmV0dXJuIFwibmV3IG1vb25cIjtcbiAgICB9XG4gICAgZWxzZSBpZihudW0+MCYmbnVtPDAuMjUpe1xuICAgICAgICByZXR1cm4gJ3dheGluZyBjcmVzY2VudCc7XG4gICAgfVxuICAgIGVsc2UgaWYobnVtPT09MC4yNSl7XG4gICAgICAgIHJldHVybiBcImZpcnN0IHF1YXJ0ZXJcIjtcbiAgICB9XG4gICAgZWxzZSBpZihudW0+MC4yNSYmbnVtPDAuNSl7XG4gICAgICAgIHJldHVybiBcIndheGluZyBnaWJib3VzXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bT09PTAuNSl7XG4gICAgICAgIHJldHVybiBcImZ1bGwgbW9vblwiO1xuICAgIH1cbiAgICBlbHNlIGlmKG51bT4wLjUmJm51bTwwLjc1KXtcbiAgICAgICAgcmV0dXJuIFwid2FuaW5nIGdpYmJvdXNcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAobnVtPT09MC43NSl7XG4gICAgICAgIHJldHVybiBcImxhc3QgcXVhcnRlclwiO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBcIndhbmluZyBjcmVzY2VudFwiXG5cbn1cblxuY29uc3QgbW9vblNWR2dlbmVyYXRlPShudW0pPT57XG4gICAgaWYobnVtPT09MCl7XG4gICAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5tb29uLW5ldzwvdGl0bGU+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIgMjBBOCA4IDAgMSAxIDIwIDEyQTggOCAwIDAgMSAxMiAyME0xMiAyQTEwIDEwIDAgMSAwIDIyIDEyQTEwIDEwIDAgMCAwIDEyIDJaXCIgLz48L3N2Zz5gO1xuICAgIH1cbiAgICBlbHNlIGlmKG51bT4wJiZudW08MC4yNSl7XG4gICAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5tb29uLXdheGluZy1jcmVzY2VudDwvdGl0bGU+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIgMkE5LjkxIDkuOTEgMCAwIDAgOSAyLjQ2QTEwIDEwIDAgMCAxIDkgMjEuNTRBMTAgMTAgMCAxIDAgMTIgMlpcIiAvPjwvc3ZnPmA7XG4gICAgfVxuICAgIGVsc2UgaWYobnVtPT09MC4yNSl7XG4gICAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5tb29uLWZpcnN0LXF1YXJ0ZXI8L3RpdGxlPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyIDJWMjJBMTAgMTAgMCAwIDAgMTIgMlpcIiAvPjwvc3ZnPmA7XG4gICAgfVxuICAgIGVsc2UgaWYobnVtPjAuMjUmJm51bTwwLjUpe1xuICAgICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bW9vbi13YXhpbmctZ2liYm91czwvdGl0bGU+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNNiAxMkM2IDcuNSA3LjkzIDMuMjYgMTIgMkExMCAxMCAwIDAgMSAxMiAyMkM3LjkzIDIwLjc0IDYgMTYuNSA2IDEyWlwiIC8+PC9zdmc+YDtcbiAgICB9XG4gICAgZWxzZSBpZiAobnVtPT09MC41KXtcbiAgICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPm1vb24tZnVsbDwvdGl0bGU+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIgMkExMCAxMCAwIDEgMSAyIDEyQTEwIDEwIDAgMCAxIDEyIDJaXCIgLz48L3N2Zz5gO1xuICAgIH1cbiAgICBlbHNlIGlmKG51bT4wLjUmJm51bTwwLjc1KXtcbiAgICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPm1vb24td2FuaW5nLWdpYmJvdXM8L3RpdGxlPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE4IDEyQzE4IDcuNSAxNi4wOCAzLjI2IDEyIDJBMTAgMTAgMCAwIDAgMTIgMjJDMTYuMDggMjAuNzQgMTggMTYuNSAxOCAxMlpcIiAvPjwvc3ZnPmA7XG4gICAgfVxuICAgIGVsc2UgaWYgKG51bT09PTAuNzUpe1xuICAgICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bW9vbi1sYXN0LXF1YXJ0ZXI8L3RpdGxlPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyIDJBMTAgMTAgMCAwIDAgMTIgMjJaXCIgLz48L3N2Zz5gO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5tb29uLXdhbmluZy1jcmVzY2VudDwvdGl0bGU+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMiAxMkExMCAxMCAwIDAgMCAxNSAyMS41NEExMCAxMCAwIDAgMSAxNSAyLjQ2QTEwIDEwIDAgMCAwIDIgMTJaXCIgLz48L3N2Zz5gO1xuXG59XG5cbmV4cG9ydCB7bW9vbnBoYXNlLG1vb25TVkdnZW5lcmF0ZX07IiwiY29uc3QgYWRkVGVtcFVuaXRTd2l0Y2g9KCk9PntcbiAgICBsZXQgY29udGVudFNlY3Rpb249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50U2VjdGlvblwiKTtcbiAgICBsZXQgc3dpdGNoRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3dpdGNoRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsXCJzd2l0Y2hEaXZpc2lvblwiKTtcbiAgICBsZXQgY2VsU3dpdGNoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2VsU3dpdGNoLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjZWxzaXVzXCIpO1xuICAgIGNlbFN3aXRjaC5pbm5lclRleHQ9YCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgXG4gICAgbGV0IGZhaHJTd2l0Y2g9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmYWhyU3dpdGNoLnNldEF0dHJpYnV0ZShcImlkXCIsXCJmYWhyZW5oZWl0XCIpO1xuICAgIGZhaHJTd2l0Y2guaW5uZXJUZXh0PWAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYFxuICAgIHN3aXRjaERpdi5hcHBlbmRDaGlsZChjZWxTd2l0Y2gpO1xuICAgIHN3aXRjaERpdi5hcHBlbmRDaGlsZChmYWhyU3dpdGNoKTtcbiAgICBjb250ZW50U2VjdGlvbi5hcHBlbmRDaGlsZChzd2l0Y2hEaXYpO1xufVxuXG5jb25zdCBjZWxzaXVzR2VuZXJhdGU9KG51bSk9PntcbiAgICBsZXQgbnVtVGVtcD1udW0tMzI7XG4gICAgbnVtVGVtcCo9NTtcbiAgICBudW1UZW1wLz05O1xuICAgIGxldCBudW1GaW5hbD1NYXRoLnJvdW5kKG51bVRlbXAgKiAxMDApIC8gMTAwO1xuICAgIHJldHVybiBudW1GaW5hbDtcbn1cblxuY29uc3QgZmFocmVuaGVpdEdlbmVyYXRlPShudW0pPT57XG4gICAgbGV0IG51bVRlbXA9bnVtO1xuICAgIG51bVRlbXAqPTk7XG4gICAgbnVtVGVtcC89NTtcbiAgICBudW1UZW1wKz0zMjtcbiAgICBsZXQgbnVtRmluYWw9TWF0aC5yb3VuZChudW1UZW1wICogMTAwKSAvIDEwMDtcbiAgICByZXR1cm4gbnVtRmluYWw7XG5cbn1cblxuZXhwb3J0IHthZGRUZW1wVW5pdFN3aXRjaCxjZWxzaXVzR2VuZXJhdGUsZmFocmVuaGVpdEdlbmVyYXRlfSIsImltcG9ydCByYWluc25vdyBmcm9tIFwiLi9pY29ucy9yYWluLXNub3cucG5nXCJcbmltcG9ydCBjbGVhcmRheSBmcm9tIFwiLi9pY29ucy9jbGVhci1kYXkucG5nXCJcbmltcG9ydCBjbGVhcm5pZ2h0IGZyb20gXCIuL2ljb25zL2NsZWFyLW5pZ2h0LnBuZ1wiXG5pbXBvcnQgY2xvdWR5IGZyb20gXCIuL2ljb25zL2Nsb3VkeS5wbmdcIlxuaW1wb3J0IGZvZyBmcm9tIFwiLi9pY29ucy9mb2cucG5nXCJcbmltcG9ydCBoYWlsIGZyb20gXCIuL2ljb25zL2hhaWwucG5nXCJcbmltcG9ydCBwYXJ0bHlDbG91ZHlEYXkgZnJvbSBcIi4vaWNvbnMvcGFydGx5LWNsb3VkeS1kYXkucG5nXCJcbmltcG9ydCBwYXJ0bHlDbG91ZHlOaWdodCBmcm9tIFwiLi9pY29ucy9wYXJ0bHktY2xvdWR5LW5pZ2h0LnBuZ1wiXG5pbXBvcnQgcmFpblNub3dTaG93ZXJzRGF5IGZyb20gXCIuL2ljb25zL3JhaW4tc25vdy1zaG93ZXJzLWRheS5wbmdcIlxuaW1wb3J0IHJhaW5Tbm93U2hvd2Vyc05pZ2h0IGZyb20gXCIuL2ljb25zL3JhaW4tc25vdy1zaG93ZXJzLW5pZ2h0LnBuZ1wiXG5pbXBvcnQgcmFpbiBmcm9tIFwiLi9pY29ucy9yYWluLnBuZ1wiXG5pbXBvcnQgc2hvd2Vyc0RheSBmcm9tIFwiLi9pY29ucy9zaG93ZXJzLWRheS5wbmdcIlxuaW1wb3J0IHNob3dlcnNOaWdodCBmcm9tIFwiLi9pY29ucy9zaG93ZXJzLW5pZ2h0LnBuZ1wiXG5pbXBvcnQgc2xlZXQgZnJvbSBcIi4vaWNvbnMvc2xlZXQucG5nXCJcbmltcG9ydCBzbm93U2hvd2Vyc0RheSBmcm9tIFwiLi9pY29ucy9zbm93LXNob3dlcnMtZGF5LnBuZ1wiXG5pbXBvcnQgc25vd1Nob3dlcnNOaWdodCBmcm9tIFwiLi9pY29ucy9zbm93LXNob3dlcnMtbmlnaHQucG5nXCJcbmltcG9ydCBzbm93IGZyb20gXCIuL2ljb25zL3Nub3cucG5nXCJcbmltcG9ydCB0aHVuZGVyUmFpbiBmcm9tIFwiLi9pY29ucy90aHVuZGVyLXJhaW4ucG5nXCJcbmltcG9ydCB0aHVuZGVyU2hvd2Vyc0RheSBmcm9tIFwiLi9pY29ucy90aHVuZGVyLXNob3dlcnMtZGF5LnBuZ1wiXG5pbXBvcnQgdGh1bmRlclNob3dlcnNOaWdodCBmcm9tIFwiLi9pY29ucy90aHVuZGVyLXNob3dlcnMtbmlnaHQucG5nXCJcbmltcG9ydCB0aHVuZGVyIGZyb20gXCIuL2ljb25zL3RodW5kZXIucG5nXCJcbmltcG9ydCB3aW5kIGZyb20gXCIuL2ljb25zL3dpbmQucG5nXCJcblxuY29uc3QgaWNvbkdlbmVyYXRlPShzdHIpPT57XG4gICAgbGV0IGltZ0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGlmKHN0cj09PVwicmFpbi1zbm93XCIpe1xuICAgICAgICBpbWdEaXYuc3JjPXJhaW5zbm93O1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwiY2xlYXItZGF5XCIpe1xuICAgICAgICBpbWdEaXYuc3JjPWNsZWFyZGF5O1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgICAgICBcbiAgICB9XG4gICAgZWxzZSBpZihzdHI9PT1cImNsZWFyLW5pZ2h0XCIpe1xuICAgICAgICBpbWdEaXYuc3JjPWNsZWFybmlnaHQ7XG4gICAgICAgIHJldHVybiBpbWdEaXY7XG4gICAgICAgIFxuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwiY2xvdWR5XCIpe1xuICAgICAgICBpbWdEaXYuc3JjPWNsb3VkeTtcbiAgICAgICAgcmV0dXJuIGltZ0RpdjtcbiAgICAgICAgXG4gICAgfVxuICAgIGVsc2UgaWYoc3RyPT09XCJmb2dcIil7XG4gICAgICAgIGltZ0Rpdi5zcmM9Zm9nO1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwiaGFpbFwiKXtcbiAgICAgICAgaW1nRGl2LnNyYz1oYWlsO1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwicGFydGx5LWNsb3VkeS1kYXlcIil7XG4gICAgICAgIGltZ0Rpdi5zcmM9cGFydGx5Q2xvdWR5RGF5O1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwicGFydGx5LWNsb3VkeS1uaWdodFwiKXtcbiAgICAgICAgaW1nRGl2LnNyYz1wYXJ0bHlDbG91ZHlOaWdodDtcbiAgICAgICAgcmV0dXJuIGltZ0RpdjtcbiAgICB9XG4gICAgZWxzZSBpZihzdHI9PT1cInJhaW4tc25vdy1zaG93ZXJzLWRheVwiKXtcbiAgICAgICAgaW1nRGl2LnNyYz1yYWluU25vd1Nob3dlcnNEYXk7XG4gICAgICAgIHJldHVybiBpbWdEaXY7XG4gICAgfVxuICAgIGVsc2UgaWYoc3RyPT09XCJyYWluLXNub3ctc2hvd2Vycy1uaWdodFwiKXtcbiAgICAgICAgaW1nRGl2LnNyYz1yYWluU25vd1Nob3dlcnNOaWdodDtcbiAgICAgICAgcmV0dXJuIGltZ0RpdjtcbiAgICB9XG4gICAgZWxzZSBpZihzdHI9PT1cInJhaW5cIil7XG4gICAgICAgIGltZ0Rpdi5zcmM9cmFpbjtcbiAgICAgICAgcmV0dXJuIGltZ0RpdjtcbiAgICB9XG4gICAgZWxzZSBpZihzdHI9PT1cInNob3dlcnMtZGF5XCIpe1xuICAgICAgICBpbWdEaXYuc3JjPXNob3dlcnNEYXk7XG4gICAgICAgIHJldHVybiBpbWdEaXY7XG4gICAgfVxuICAgIGVsc2UgaWYoc3RyPT09XCJzaG93ZXJzLW5pZ2h0XCIpe1xuICAgICAgICBpbWdEaXYuc3JjPXNob3dlcnNOaWdodDtcbiAgICAgICAgcmV0dXJuIGltZ0RpdjtcbiAgICB9XG4gICAgZWxzZSBpZihzdHI9PT1cInNsZWV0XCIpe1xuICAgICAgICBpbWdEaXYuc3JjPXNsZWV0O1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwic25vdy1zaG93ZXJzLWRheVwiKXtcbiAgICAgICAgaW1nRGl2LnNyYz1zbm93U2hvd2Vyc0RheTtcbiAgICAgICAgcmV0dXJuIGltZ0RpdjtcbiAgICB9XG4gICAgZWxzZSBpZihzdHI9PT1cInNub3ctc2hvd2Vycy1uaWdodFwiKXtcbiAgICAgICAgaW1nRGl2LnNyYz1zbm93U2hvd2Vyc05pZ2h0O1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwic25vd1wiKXtcbiAgICAgICAgaW1nRGl2LnNyYz1zbm93O1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwidGh1bmRlci1yYWluXCIpe1xuICAgICAgICBpbWdEaXYuc3JjPXRodW5kZXJSYWluO1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwidGh1bmRlci1zaG93ZXJzLWRheVwiKXtcbiAgICAgICAgaW1nRGl2LnNyYz10aHVuZGVyU2hvd2Vyc0RheTtcbiAgICAgICAgcmV0dXJuIGltZ0RpdjtcbiAgICB9XG4gICAgZWxzZSBpZihzdHI9PT1cInRodW5kZXItc2hvd2Vycy1uaWdodFwiKXtcbiAgICAgICAgaW1nRGl2LnNyYz10aHVuZGVyU2hvd2Vyc05pZ2h0O1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwidGh1bmRlclwiKXtcbiAgICAgICAgaW1nRGl2LnNyYz10aHVuZGVyO1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cbiAgICBlbHNlIGlmKHN0cj09PVwid2luZFwiKXtcbiAgICAgICAgaW1nRGl2LnNyYz13aW5kO1xuICAgICAgICByZXR1cm4gaW1nRGl2O1xuICAgIH1cblxuICAgIFxuXG59XG5cbmV4cG9ydCB7aWNvbkdlbmVyYXRlfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRpc3BsYXlQYWdlIH0gZnJvbSAnLi9sb2FkRGl2aXNpb25zJztcbmltcG9ydCB7IGNvbnRlbnRDbGVhcixsb2FkaW5nU2NyZWVuIH0gZnJvbSAnLi9jbGVhckNvbnRlbnQnO1xuaW1wb3J0IHsgYWRkVGVtcFVuaXRTd2l0Y2gsIGNlbHNpdXNHZW5lcmF0ZSwgZmFocmVuaGVpdEdlbmVyYXRlIH0gZnJvbSAnLi90ZW1wVW5pdFN3aXRjaGVyJztcblxuY2xhc3Mgd2VhdGhlckluZm97XG4gICAgY29uc3RydWN0b3IobG9jYXRpb24sZGF5LHRpbWUsaWNvbix0ZW1wLGNvbmRpdGlvbnMsZGVzY3JpcHRpb24saHVtaWRpdHksdXZpbmRleCxtb29uLHdpbmQsXG4gICAgICAgIHZpc2liaWxpdHkscHJlc3N1cmUsc3VucmlzZSxzdW5zZXQsZGF5MWRheSxkYXkxaWNvbixkYXkxdGVtcCxkYXkxY29uZGl0aW9ucyxcbiAgICAgICAgZGF5MmRheSxkYXkyaWNvbixkYXkydGVtcCxkYXkyY29uZGl0aW9ucyxkYXkzZGF5LGRheTNpY29uLGRheTN0ZW1wLGRheTNjb25kaXRpb25zXG4gICAgKXtcbiAgICAgICAgdGhpcy5sb2NhdGlvbj1sb2NhdGlvbjtcbiAgICAgICAgdGhpcy5kYXk9ZGF5O1xuICAgICAgICB0aGlzLnRpbWU9dGltZTtcblxuICAgICAgICB0aGlzLmljb249aWNvbjtcbiAgICAgICAgdGhpcy50ZW1wPXRlbXA7XG4gICAgICAgIHRoaXMuY29uZGl0aW9ucz1jb25kaXRpb25zO1xuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb249ZGVzY3JpcHRpb247XG5cbiAgICAgICAgdGhpcy5odW1pZGl0eT1odW1pZGl0eTtcbiAgICAgICAgdGhpcy51dmluZGV4PXV2aW5kZXg7XG4gICAgICAgIHRoaXMubW9vbj1tb29uO1xuICAgICAgICB0aGlzLndpbmQ9d2luZDtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5PXZpc2liaWxpdHk7XG4gICAgICAgIHRoaXMucHJlc3N1cmU9cHJlc3N1cmU7XG4gICAgICAgIHRoaXMuc3VucmlzZT1zdW5yaXNlO1xuICAgICAgICB0aGlzLnN1bnNldD1zdW5zZXQ7XG5cbiAgICAgICAgdGhpcy5kYXkxZGF5PWRheTFkYXk7XG4gICAgICAgIHRoaXMuZGF5MWljb249ZGF5MWljb247XG4gICAgICAgIHRoaXMuZGF5MXRlbXA9ZGF5MXRlbXA7XG4gICAgICAgIHRoaXMuZGF5MWNvbmRpdGlvbnM9ZGF5MWNvbmRpdGlvbnM7XG5cbiAgICAgICAgdGhpcy5kYXkyZGF5PWRheTJkYXk7XG4gICAgICAgIHRoaXMuZGF5Mmljb249ZGF5Mmljb247XG4gICAgICAgIHRoaXMuZGF5MnRlbXA9ZGF5MnRlbXA7XG4gICAgICAgIHRoaXMuZGF5MmNvbmRpdGlvbnM9ZGF5MmNvbmRpdGlvbnM7XG5cbiAgICAgICAgdGhpcy5kYXkzZGF5PWRheTNkYXk7XG4gICAgICAgIHRoaXMuZGF5M2ljb249ZGF5M2ljb247XG4gICAgICAgIHRoaXMuZGF5M3RlbXA9ZGF5M3RlbXA7XG4gICAgICAgIHRoaXMuZGF5M2NvbmRpdGlvbnM9ZGF5M2NvbmRpdGlvbnM7XG5cblxuICAgIH1cblxuXG59XG5cbmNvbnN0IGRheURhdGE9IG5ldyB3ZWF0aGVySW5mbygpO1xubGV0IHVuaXRTd2l0Y2g9XCJDXCI7XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcih2YWx1ZSl7XG4gICAgY29udGVudENsZWFyKCk7XG4gICAgbG9hZGluZ1NjcmVlbigpO1xuICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL1wiKyB2YWx1ZSArXCI/dW5pdEdyb3VwPW1ldHJpYyZrZXk9N1FCTFo2S0dFRDlQTVJEWjhENVQyNjdSRCZjb250ZW50VHlwZT1qc29uXCIse21vZGU6XCJjb3JzXCJ9KVxuXG4gICAgY29uc3Qgd2VhdGhlckRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRheURhdGEpO1xuXG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIGRheURhdGEubG9jYXRpb249d2VhdGhlckRhdGEucmVzb2x2ZWRBZGRyZXNzO1xuICAgIGRheURhdGEudGltZT13ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZTtcbiAgICBkYXlEYXRhLmRheT13ZWF0aGVyRGF0YS5kYXlzWzBdLmRhdGV0aW1lOyBcblxuICAgIGRheURhdGEuaWNvbj13ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uO1xuICAgIGRheURhdGEudGVtcD13ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wO1xuICAgIGRheURhdGEuY29uZGl0aW9ucz13ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zO1xuICAgIFxuICAgIGRheURhdGEuZGVzY3JpcHRpb249d2VhdGhlckRhdGEuZGVzY3JpcHRpb247XG5cbiAgICBkYXlEYXRhLmh1bWlkaXR5PXdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25zLmh1bWlkaXR5O1xuICAgIGRheURhdGEudXZpbmRleD13ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy51dmluZGV4O1xuICAgIGRheURhdGEubW9vbj13ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5tb29ucGhhc2U7XG4gICAgZGF5RGF0YS53aW5kPXdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25zLndpbmRzcGVlZDtcbiAgICBkYXlEYXRhLnZpc2liaWxpdHk9d2VhdGhlckRhdGEuY3VycmVudENvbmRpdGlvbnMudmlzaWJpbGl0eTtcbiAgICBkYXlEYXRhLnByZXNzdXJlPXdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25zLnByZXNzdXJlO1xuICAgIGRheURhdGEuc3VucmlzZT13ZWF0aGVyRGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5yaXNlO1xuICAgIGRheURhdGEuc3Vuc2V0PXdlYXRoZXJEYXRhLmN1cnJlbnRDb25kaXRpb25zLnN1bnNldDtcblxuICAgIFxuICAgIGRheURhdGEuZGF5MWRheT13ZWF0aGVyRGF0YS5kYXlzWzFdLmRhdGV0aW1lOyAgICBcbiAgICBkYXlEYXRhLmRheTFpY29uPXdlYXRoZXJEYXRhLmRheXNbMV0uaWNvbjtcbiAgICBkYXlEYXRhLmRheTF0ZW1wPXdlYXRoZXJEYXRhLmRheXNbMV0udGVtcDtcbiAgICBkYXlEYXRhLmRheTFjb25kaXRpb25zPXdlYXRoZXJEYXRhLmRheXNbMV0uY29uZGl0aW9ucztcblxuICAgIGRheURhdGEuZGF5MmRheT13ZWF0aGVyRGF0YS5kYXlzWzJdLmRhdGV0aW1lOyAgICBcbiAgICBkYXlEYXRhLmRheTJpY29uPXdlYXRoZXJEYXRhLmRheXNbMl0uaWNvbjtcbiAgICBkYXlEYXRhLmRheTJ0ZW1wPXdlYXRoZXJEYXRhLmRheXNbMl0udGVtcDtcbiAgICBkYXlEYXRhLmRheTJjb25kaXRpb25zPXdlYXRoZXJEYXRhLmRheXNbMl0uY29uZGl0aW9ucztcblxuICAgIGRheURhdGEuZGF5M2RheT13ZWF0aGVyRGF0YS5kYXlzWzNdLmRhdGV0aW1lOyAgICBcbiAgICBkYXlEYXRhLmRheTNpY29uPXdlYXRoZXJEYXRhLmRheXNbM10uaWNvbjtcbiAgICBkYXlEYXRhLmRheTN0ZW1wPXdlYXRoZXJEYXRhLmRheXNbM10udGVtcDtcbiAgICBkYXlEYXRhLmRheTNjb25kaXRpb25zPXdlYXRoZXJEYXRhLmRheXNbM10uY29uZGl0aW9ucztcbiAgICBjb250ZW50Q2xlYXIoKTtcbiAgICBkaXNwbGF5UGFnZShkYXlEYXRhLHVuaXRTd2l0Y2gpO1xuICAgIGFkZFRlbXBVbml0U3dpdGNoKCk7XG4gICAgdGVtcFN3aXRjaEFjdGl2YXRlKCk7XG4gICAgXG5cblxufVxuXG5jb25zdCB0ZW1wU3dpdGNoQWN0aXZhdGU9KCk9PntcbiAgICBjb25zdCBjZWxTd2l0Y2g9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxzaXVzXCIpO1xuICAgIGNvbnN0IGZhaHJTd2l0Y2g9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYWhyZW5oZWl0XCIpO1xuICAgIGlmKHVuaXRTd2l0Y2g9PT1cIkNcIil7XG4gICAgICAgIGNlbFN3aXRjaC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGZhaHJTd2l0Y2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImdyZXllZFwiKTtcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2VsU3dpdGNoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJncmV5ZWRcIik7XG4gICAgICAgIGZhaHJTd2l0Y2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIGNlbFN3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBjZWxTd2l0Y2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlbGVjdGVkXCIpO1xuICAgICAgICBmYWhyU3dpdGNoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJncmV5ZWRcIik7XG4gICAgICAgIGlmKHVuaXRTd2l0Y2g9PT1cIkNcIil7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdW5pdFN3aXRjaD1cIkNcIjtcbiAgICAgICAgZGF5RGF0YS50ZW1wPWNlbHNpdXNHZW5lcmF0ZShkYXlEYXRhLnRlbXApO1xuICAgICAgICBkYXlEYXRhLmRheTF0ZW1wPWNlbHNpdXNHZW5lcmF0ZShkYXlEYXRhLmRheTF0ZW1wKTtcbiAgICAgICAgZGF5RGF0YS5kYXkydGVtcD1jZWxzaXVzR2VuZXJhdGUoZGF5RGF0YS5kYXkydGVtcCk7XG4gICAgICAgIGRheURhdGEuZGF5M3RlbXA9Y2Vsc2l1c0dlbmVyYXRlKGRheURhdGEuZGF5M3RlbXApO1xuICAgICAgICBjb250ZW50Q2xlYXIoKTtcbiAgICAgICAgZGlzcGxheVBhZ2UoZGF5RGF0YSx1bml0U3dpdGNoKTtcbiAgICAgICAgYWRkVGVtcFVuaXRTd2l0Y2goKTtcbiAgICAgICAgdGVtcFN3aXRjaEFjdGl2YXRlKCk7XG4gICAgfSlcblxuICAgIGZhaHJTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgY2VsU3dpdGNoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJncmV5ZWRcIik7XG4gICAgICAgIGZhaHJTd2l0Y2guc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNlbGVjdGVkXCIpO1xuICAgICAgICBpZih1bml0U3dpdGNoPT09XCJGXCIpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVuaXRTd2l0Y2g9XCJGXCI7XG4gICAgICAgIGRheURhdGEudGVtcD1mYWhyZW5oZWl0R2VuZXJhdGUoZGF5RGF0YS50ZW1wKTtcbiAgICAgICAgZGF5RGF0YS5kYXkxdGVtcD1mYWhyZW5oZWl0R2VuZXJhdGUoZGF5RGF0YS5kYXkxdGVtcCk7XG4gICAgICAgIGRheURhdGEuZGF5MnRlbXA9ZmFocmVuaGVpdEdlbmVyYXRlKGRheURhdGEuZGF5MnRlbXApO1xuICAgICAgICBkYXlEYXRhLmRheTN0ZW1wPWZhaHJlbmhlaXRHZW5lcmF0ZShkYXlEYXRhLmRheTN0ZW1wKTtcbiAgICAgICAgY29udGVudENsZWFyKCk7XG4gICAgICAgIGRpc3BsYXlQYWdlKGRheURhdGEsdW5pdFN3aXRjaCk7XG4gICAgICAgIGFkZFRlbXBVbml0U3dpdGNoKCk7XG4gICAgICAgIHRlbXBTd2l0Y2hBY3RpdmF0ZSgpO1xuICAgIH0pXG5cbn1cblxuY29uc3Qgc2VhcmNoQnRuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnV0dG9uXCIpO1xuY29uc3Qgc2VhcmNoSW5wdXQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hJbnB1dFwiKTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgZ2V0V2VhdGhlcihzZWFyY2hJbnB1dC52YWx1ZSk7XG5cbn0pXG5cbmdldFdlYXRoZXIoXCJNYW5nYWxvcmUgS0FcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=