webpackHotUpdate("static/development/pages/index.js",{

/***/ "./data/portfolio/index.js":
/*!*********************************!*\
  !*** ./data/portfolio/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var front_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! front-matter */ "./node_modules/front-matter/index.js");
/* harmony import */ var front_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(front_matter__WEBPACK_IMPORTED_MODULE_0__);


function createPortfolio() {
  var portfolioItems = [];
  ["aufstehen","bewerbung","insomnio","passport"].forEach(function (item) {
    var itemData = __webpack_require__("./data/portfolio sync recursive ^\\.\\/.*\\.md$")("./".concat(item, ".md"));

    var fmData;
    var newItem;
    fmData = front_matter__WEBPACK_IMPORTED_MODULE_0___default()(itemData["default"]);
    newItem = fmData.attributes;
    newItem.id = item;
    newItem.body = fmData.body;
    portfolioItems.push(newItem);
  });
  return portfolioItems;
}

/* harmony default export */ __webpack_exports__["default"] = (createPortfolio());

/***/ })

})
//# sourceMappingURL=index.js.3cbc3e6bb76dcfb6c773.hot-update.js.map