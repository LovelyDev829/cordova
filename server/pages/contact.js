"use strict";
(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 8634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(9570);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(4409);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(8526);
;// CONCATENATED MODULE: ./components/Contact/ContactForm.js





// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};
const ContactForm = ()=>{
    const { 0: contact , 1: setContact  } = (0,external_react_.useState)(INITIAL_STATE);
    const { register , handleSubmit , errors  } = (0,external_react_hook_form_.useForm)();
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setContact((prevState)=>({
                ...prevState,
                [name]: value
            }));
        console.log(contact);
    };
    const onSubmit = async (e)=>{
        // e.preventDefault();
        try {
            const url = `${baseUrl/* default */.Z}/api/contact`;
            const { name , email , number , subject , text  } = contact;
            const payload = {
                name,
                email,
                number,
                subject,
                text
            };
            await external_axios_default().post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "contact-form",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                children: "Ready to Get Started?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                children: "Your email address will not be published. Required fields are marked *"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("form", {
                id: "contactForm",
                onSubmit: handleSubmit(onSubmit),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-6 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                        type: "text",
                                        name: "name",
                                        placeholder: "Your Name",
                                        value: contact.name,
                                        onChange: handleChange,
                                        ref: register({
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "invalid-feedback",
                                        style: {
                                            display: "block"
                                        },
                                        children: errors.name && "Name is required."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-6 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                        type: "text",
                                        name: "email",
                                        placeholder: "Your email address",
                                        value: contact.email,
                                        onChange: handleChange,
                                        ref: register({
                                            required: true,
                                            pattern: /^\S+@\S+$/i
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "invalid-feedback",
                                        style: {
                                            display: "block"
                                        },
                                        children: errors.email && "Email is required."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-12 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                        type: "text",
                                        name: "number",
                                        placeholder: "Your phone number",
                                        value: contact.number,
                                        onChange: handleChange,
                                        ref: register({
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "invalid-feedback",
                                        style: {
                                            display: "block"
                                        },
                                        children: errors.number && "Number is required."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-12 col-md-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                        type: "text",
                                        name: "subject",
                                        placeholder: "Your Subject",
                                        value: contact.subject,
                                        onChange: handleChange,
                                        ref: register({
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "invalid-feedback",
                                        style: {
                                            display: "block"
                                        },
                                        children: errors.subject && "Subject is required."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-12 col-md-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("textarea", {
                                        name: "text",
                                        cols: "30",
                                        rows: "5",
                                        placeholder: "Write your message...",
                                        value: contact.text,
                                        onChange: handleChange,
                                        ref: register({
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "invalid-feedback",
                                        style: {
                                            display: "block"
                                        },
                                        children: errors.text && "Text body is required."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-12 col-sm-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                type: "submit",
                                className: "default-btn",
                                children: "Send Message"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Contact_ContactForm = (ContactForm);

;// CONCATENATED MODULE: ./components/Contact/GoogleMap.js


const GoogleMap = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        id: "map",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("iframe", {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105913.76628212207!2d-117.46956773183814!3d33.946138126927174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca6df7ff47dbb%3A0xf7a1d705135e0ae8!2sRiverside%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1592581354634!5m2!1sen!2sbd"
        })
    });
};
/* harmony default export */ const Contact_GoogleMap = (GoogleMap);

;// CONCATENATED MODULE: ./pages/contact.js





const Contact = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageBanner/* default */.Z, {
                pageTitle: "Contact",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Contact"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "contact-area ptb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-info",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                            className: "sub-title",
                                            children: "Contact Details"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                            children: "Get in Touch"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "bx bx-map"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            children: "Our Address"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                            children: "2750 Quadra Street Victoria Road, New York, Canada"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "bx bx-phone-call"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            children: "Contact"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Mobile: ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                    href: "tel:+44457895789",
                                                                    children: "(+44) - 45789 - 5789"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            children: [
                                                                "Mail: ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                    href: "mailto:hello@edemy.com",
                                                                    children: "hello@edemy.com"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "bx bx-time-five"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            children: "Hours of Operation"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                            children: "Monday - Friday: 09:00 - 20:00"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                            children: "Sunday & Saturday: 10:30 - 22:00"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Contact_ContactForm, {})
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Contact_GoogleMap, {})
        ]
    });
};
/* harmony default export */ const contact = (Contact);


/***/ }),

/***/ 8526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? "https://cordovalearning.com:3000" : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);


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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4409:
/***/ ((module) => {

module.exports = require("react-hook-form");

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
var __webpack_exports__ = __webpack_require__.X(0, [678,543,9570], () => (__webpack_exec__(8634)));
module.exports = __webpack_exports__;

})();