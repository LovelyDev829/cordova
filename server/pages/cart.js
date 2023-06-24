"use strict";
(() => {
var exports = {};
exports.id = 9190;
exports.ids = [9190];
exports.modules = {

/***/ 6323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(543);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(9570);
// EXTERNAL MODULE: ./utils/calculateCartTotal.js
var calculateCartTotal = __webpack_require__(7682);
;// CONCATENATED MODULE: ./components/Cart/CartItems.js



const CartItems = ({ id , title , price , image , onRemove  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                className: "product-thumbnail",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                    href: "#",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                            src: image,
                            alt: "item"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                className: "product-name",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                    href: "#",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                        children: title
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                className: "product-price",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "unit-amount",
                    children: [
                        "$",
                        price
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                className: "product-subtotal text",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                    onClick: ()=>onRemove(id),
                    className: "remove",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                        className: "bx bx-trash"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Cart_CartItems = (CartItems);

;// CONCATENATED MODULE: ./pages/cart.js







const Cart = ({ user  })=>{
    const cartItems = (0,external_react_redux_.useSelector)((state)=>state.cart.cartItems);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: cartAmout , 1: setCartAmaount  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        const { cartTotal  } = (0,calculateCartTotal/* calculateCartTotal */.c)(cartItems);
        setCartAmaount(cartTotal);
    }, [
        cartItems
    ]);
    const handleRemove = async (cartId)=>{
        // console.log(cartId);
        dispatch({
            type: "REMOVE_CART",
            id: cartId
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageBanner/* default */.Z, {
                pageTitle: "Cart",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Cart"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "cart-area ptb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "cart-table table-responsive",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "table table-bordered",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("thead", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        scope: "col",
                                                        children: "Product"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        scope: "col",
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        scope: "col",
                                                        children: "Price"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        scope: "col",
                                                        children: "Action"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("tbody", {
                                            children: cartItems.length > 0 ? cartItems.map((cart)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(Cart_CartItems, {
                                                    ...cart,
                                                    onRemove: ()=>handleRemove(cart.id)
                                                }, cart.id)) : /*#__PURE__*/ (0,jsx_runtime_.jsx)("tr", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                    colSpan: "4",
                                                    className: "text-center py-5",
                                                    children: "Empty"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "cart-totals",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                        children: "Cart Totals"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                "Total ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        "$",
                                                        cartAmout
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: "/checkout",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "default-btn",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                    className: "flaticon-shopping-cart"
                                                }),
                                                " ",
                                                "Proceed to Checkout ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {})
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const cart = (Cart);


/***/ }),

/***/ 7682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ calculateCartTotal)
/* harmony export */ });
/* unused harmony export calculateCartTotalMinus */
const calculateCartTotal = (courses)=>{
    const total = courses.reduce((acc, el)=>{
        acc += el.price * el.quantity;
        return acc;
    }, 0);
    const cartTotal = (total * 100 / 100).toFixed(2);
    const stripeTotal = Number((total * 100).toFixed(2));
    return {
        cartTotal,
        stripeTotal
    };
};
const calculateCartTotalMinus = (courses)=>{
    const total = courses.reduce((acc, el)=>{
        acc += el.regular_price * el.quantity;
        return acc;
    }, 0);
    const cartTotalMinus = (total * 100 / 100).toFixed(2);
    return {
        cartTotalMinus
    };
};


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

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [678,543,9570], () => (__webpack_exec__(6323)));
module.exports = __webpack_exports__;

})();