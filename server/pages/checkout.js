"use strict";
(() => {
var exports = {};
exports.id = 2222;
exports.ids = [2222];
exports.modules = {

/***/ 4394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ checkout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-stripe-checkout"
const external_react_stripe_checkout_namespaceObject = require("react-stripe-checkout");
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_namespaceObject);
// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__(3616);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(8526);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/CheckoutButton/CheckoutBtn.js








const CheckoutBtn = ({ user , price , cartItems , onClearCart  })=>{
    const stripeTotal = Number((price * 100).toFixed(2));
    // console.log(stripeTotal)
    const router = (0,router_.useRouter)();
    const handleCheckout = async ()=>{
        try {
            const payload = {
                cartItems,
                userId: user.id,
                buyer_email: user.email
            };
            const url = `${baseUrl/* default */.Z}/api/v1/courses/checkout`;
            const response = await external_axios_default().post(url, payload);
            external_react_hot_toast_default().success(response.data);
            onClearCart();
            router.push("/");
        } catch (error) {
            (0,catchErrors/* default */.Z)(error, window.alert);
            console.log(error.message);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((external_react_stripe_checkout_default()), {
            name: "eDemy Online Course",
            amount: stripeTotal,
            currency: "USD",
            stripeKey: "pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7",
            token: handleCheckout,
            triggerEvent: "onClick",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "payment-box",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "default-btn",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                            className: "flaticon-shopping-cart"
                        }),
                        " Make Payment",
                        " ",
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {})
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const CheckoutButton_CheckoutBtn = (CheckoutBtn);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(9570);
// EXTERNAL MODULE: ./utils/calculateCartTotal.js
var calculateCartTotal = __webpack_require__(7682);
;// CONCATENATED MODULE: ./pages/checkout.js






const Checkout = ({ user  })=>{
    // console.log(user);
    const cartItems = (0,external_react_redux_.useSelector)((state)=>state.cart.cartItems);
    const { 0: cartAmout , 1: setCartAmaount  } = (0,external_react_.useState)(0);
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        const { cartTotal  } = (0,calculateCartTotal/* calculateCartTotal */.c)(cartItems);
        setCartAmaount(cartTotal);
    }, [
        cartItems
    ]);
    const onClearCart = ()=>{
        dispatch({
            type: "RESET_CART"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageBanner/* default */.Z, {
                pageTitle: "Checkout",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Checkout"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "checkout-area ptb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-12 col-md-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "order-details",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                        className: "title",
                                        children: "Your Order"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "order-table table-responsive",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                            className: "table table-bordered",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("thead", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                                scope: "col",
                                                                children: "Product Name"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                                scope: "col",
                                                                children: "Total"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                                    children: [
                                                        cartItems.map((cart)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                        className: "product-name",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            href: "#",
                                                                            children: cart.title
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                        className: "product-total",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "subtotal-amount",
                                                                            children: [
                                                                                "$",
                                                                                cart.price
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            }, cart.id)),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                    className: "total-price",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                        children: "Order Total"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                    className: "product-subtotal",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "subtotal-amount",
                                                                        children: [
                                                                            "$",
                                                                            cartAmout
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(CheckoutButton_CheckoutBtn, {
                                        price: cartAmout,
                                        cartItems: cartItems,
                                        user: user,
                                        onClearCart: ()=>onClearCart()
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const checkout = (Checkout);


/***/ }),

/***/ 8526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? "https://cordovalearning.com:3000" : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);


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

/***/ 3616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const catchErrors = (error, displayError)=>{
    let errorMsg;
    if (error.response) {
        errorMsg = error.response.data;
        // console.error("Error response", errorMsg.description);
        // for image upload
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message;
        }
    } else if (error.request) {
        // Request made but no response recieved
        errorMsg = error.request;
    // console.error("Error request", errorMsg);
    } else {
    // console.error("Error message", errorMsg);
    }
    displayError(errorMsg);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catchErrors); //


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

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
var __webpack_exports__ = __webpack_require__.X(0, [678,543,9570], () => (__webpack_exec__(4394)));
module.exports = __webpack_exports__;

})();