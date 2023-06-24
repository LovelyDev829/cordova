"use strict";
(() => {
var exports = {};
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 9789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Gallery)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(9570);
// EXTERNAL MODULE: ./components/Common/SubscribeForm.js
var SubscribeForm = __webpack_require__(7461);
;// CONCATENATED MODULE: external "react-18-image-lightbox"
const external_react_18_image_lightbox_namespaceObject = require("react-18-image-lightbox");
var external_react_18_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_18_image_lightbox_namespaceObject);
;// CONCATENATED MODULE: ./pages/gallery.js





const gallery_images = [
    "images/courses/courses1.jpg",
    "images/courses/courses2.jpg",
    "images/courses/courses3.jpg",
    "images/courses/courses4.jpg",
    "images/courses/courses5.jpg",
    "images/courses/courses6.jpg",
    "images/courses/courses7.jpg",
    "images/courses/courses8.jpg",
    "images/courses/courses9.jpg", 
];
class Gallery extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
    render() {
        const { photoIndex , isOpen  } = this.state;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageBanner/* default */.Z, {
                    pageTitle: "Gallery",
                    homePageUrl: "/",
                    homePageText: "Home",
                    activePageText: "Gallery"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "gallery-area pt-100 pb-70",
                    children: [
                        isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsx)((external_react_18_image_lightbox_default()), {
                            mainSrc: gallery_images[photoIndex],
                            nextSrc: gallery_images[(photoIndex + 1) % gallery_images.length],
                            prevSrc: gallery_images[(photoIndex + gallery_images.length - 1) % gallery_images.length],
                            onCloseRequest: ()=>this.setState({
                                    isOpen: false
                                }),
                            onMovePrevRequest: ()=>this.setState({
                                    photoIndex: (photoIndex + gallery_images.length - 1) % gallery_images.length
                                }),
                            onMoveNextRequest: ()=>this.setState({
                                    photoIndex: (photoIndex + 1) % gallery_images.length
                                })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "single-gallery-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "popup-btn",
                                                onClick: ()=>this.setState({
                                                        isOpen: true,
                                                        photoIndex: 0
                                                    }),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/courses/courses1.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "single-gallery-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "popup-btn",
                                                onClick: ()=>this.setState({
                                                        isOpen: true,
                                                        photoIndex: 1
                                                    }),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/courses/courses2.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "single-gallery-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "popup-btn",
                                                onClick: ()=>this.setState({
                                                        isOpen: true,
                                                        photoIndex: 2
                                                    }),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/courses/courses3.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "single-gallery-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "popup-btn",
                                                onClick: ()=>this.setState({
                                                        isOpen: true,
                                                        photoIndex: 3
                                                    }),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/courses/courses4.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "single-gallery-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "popup-btn",
                                                onClick: ()=>this.setState({
                                                        isOpen: true,
                                                        photoIndex: 4
                                                    }),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/courses/courses5.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "single-gallery-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "popup-btn",
                                                onClick: ()=>this.setState({
                                                        isOpen: true,
                                                        photoIndex: 5
                                                    }),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/courses/courses6.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "single-gallery-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "popup-btn",
                                                onClick: ()=>this.setState({
                                                        isOpen: true,
                                                        photoIndex: 6
                                                    }),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/courses/courses7.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "single-gallery-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "popup-btn",
                                                onClick: ()=>this.setState({
                                                        isOpen: true,
                                                        photoIndex: 7
                                                    }),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/courses/courses8.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "single-gallery-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "popup-btn",
                                                onClick: ()=>this.setState({
                                                        isOpen: true,
                                                        photoIndex: 8
                                                    }),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/courses/courses9.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(SubscribeForm/* default */.Z, {})
            ]
        });
    }
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [678,543,9570,7461], () => (__webpack_exec__(9789)));
module.exports = __webpack_exports__;

})();