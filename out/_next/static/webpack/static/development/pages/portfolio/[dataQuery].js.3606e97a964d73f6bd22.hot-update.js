webpackHotUpdate("static/development/pages/portfolio/[dataQuery].js",{

/***/ "./components/Player/index.js":
/*!************************************!*\
  !*** ./components/Player/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_plyr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-plyr */ "./node_modules/react-plyr/lib/index.js");
/* harmony import */ var react_plyr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_plyr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Player_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Player.scss */ "./components/Player/Player.scss");
/* harmony import */ var _Player_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Player_scss__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/media/leon/Home/Projekte/VeronicaBewerbungen/Website/components/Player/index.js";






var Player =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Player, _React$Component);

  function Player() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Player);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Player).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Player, [{
    key: "renderYoutube",
    value: function renderYoutube() {
      var videoId = this.props.videoId;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _Player_scss__WEBPACK_IMPORTED_MODULE_9___default.a.Player,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
        src: "https://www.youtube.com/embed/".concat(videoId, "?modestbranding=1&showinfo=0&rel=0"),
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }));
    }
  }, {
    key: "renderAudio",
    value: function renderAudio() {
      var _this$props = this.props,
          title = _this$props.title,
          source = _this$props.source;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_plyr__WEBPACK_IMPORTED_MODULE_8___default.a, {
        type: "audio",
        title: title,
        url: source,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          provider = _this$props2.provider,
          poster = _this$props2.poster;
      if (type == 'audio') return this.renderAudio();
      if (provider == 'youtube') return this.renderYoutube();
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: poster,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), "Inhalt aktuell nicht verf\xFCgbar.");
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

})
//# sourceMappingURL=[dataQuery].js.3606e97a964d73f6bd22.hot-update.js.map