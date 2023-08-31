exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 9817:
/***/ ((module) => {

// Exports
module.exports = {
	"image-background": "ImageBackground_image-background__VGLFN",
	"title": "ImageBackground_title__TXFEj"
};


/***/ }),

/***/ 818:
/***/ (() => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow-up.51a86d8f.svg","height":12,"width":22,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 5297:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/icons/arrow-down.png
/* harmony default export */ const arrow_down = ({"src":"/_next/static/media/arrow-down.3839a561.png","height":12,"width":22,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAANklEQVR42hXGsQ0AIAzEwJdgAAZxS5OSpVJTRKzNR1fYItmIafKlWDwCWfiWaMWx6hcD2bXu+ILlCxlfvvB9AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./public/icons/arrow-up.svg
var arrow_up = __webpack_require__(818);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Arrow.js





const Arrow = ({ Up , Down  })=>{
    if (Up) {
        return /*#__PURE__*/ _jsx(Image, {
            alt: "arrowup",
            src: ArrowUp
        });
    }
    if (Down) {
        return /*#__PURE__*/ _jsx(Image, {
            alt: "arrowdown",
            src: ArrowDown
        });
    }
    // If neither Up nor Down props are provided, return null or some default content
    return null;
};
/* harmony default export */ const components_Arrow = ((/* unused pure expression or super */ null && (Arrow)));


/***/ }),

/***/ 7232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageBackground_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9817);
/* harmony import */ var _ImageBackground_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ImageBackground_module_css__WEBPACK_IMPORTED_MODULE_2__);



const ImageBackground = ({ posterUrl , title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_ImageBackground_module_css__WEBPACK_IMPORTED_MODULE_2___default()["image-background"]),
        style: {
            backgroundImage: `url(${posterUrl})`
        },
        children: title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            className: (_ImageBackground_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
            children: title
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageBackground);


/***/ })

};
;