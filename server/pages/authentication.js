"use strict";
(() => {
var exports = {};
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 7822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ authentication)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(9570);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(543);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__(3616);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(8526);
// EXTERNAL MODULE: ./utils/auth.js + 1 modules
var auth = __webpack_require__(6759);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./utils/LoadingSpinner.js



const LoadingSpinner = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            (0,jsx_runtime_.jsx)((style_default()), {
                id: "42dbd1e0c661fa12",
                children: ".spinner-border.jsx-42dbd1e0c661fa12{height:20px;left:8px;border-bottom:3px solid#fff;border-left:3px solid#fff;border-top:3px solid#fff;top:3px;position:relative;width:20px}"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                role: "status",
                className: "jsx-42dbd1e0c661fa12" + " " + "spinner-border text-secondary",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                    className: "jsx-42dbd1e0c661fa12" + " " + "visually-hidden",
                    children: "Loading..."
                })
            })
        ]
    });
};
/* harmony default export */ const utils_LoadingSpinner = (LoadingSpinner);

;// CONCATENATED MODULE: ./components/Authentication/LoginForm.js









const INITIAL_USER = {
    email: "",
    password: ""
};
const LoginForm = ()=>{
    const [user, setUser] = external_react_default().useState(INITIAL_USER);
    const [disabled, setDisabled] = external_react_default().useState(true);
    const [loading, setLoading] = external_react_default().useState(false);
    const [error, setError] = external_react_default().useState("");
    external_react_default().useEffect(()=>{
        const isUser = Object.values(user).every((el)=>Boolean(el));
        isUser ? setDisabled(false) : setDisabled(true);
    }, [
        user
    ]);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setUser((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            const url = `${baseUrl/* default */.Z}/api/v1/auth/signin`;
            const payload = {
                ...user
            };
            const response = await external_axios_default().post(url, payload);
            (0,auth/* handleLogin */.jc)(response.data);
        } catch (error) {
            (0,catchErrors/* default */.Z)(error, setError);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "login-form",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                children: "Login"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_reactstrap_.Alert, {
                color: "danger",
                isOpen: error ? true : false,
                children: error
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                children: "Email"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                className: "form-control",
                                placeholder: "Email",
                                name: "email",
                                type: "email",
                                value: user.email,
                                onChange: handleChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                children: "Password"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                className: "form-control",
                                placeholder: "Password",
                                name: "password",
                                type: "password",
                                value: user.password,
                                onChange: handleChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-6 col-sm-6 remember-me-wrap",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                            type: "checkbox",
                                            id: "test2"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                            htmlFor: "test2",
                                            children: "Remember me"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                    href: "/reset-password",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                        className: "lost-your-password",
                                        children: "Lost your password?"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        type: "submit",
                        disabled: disabled,
                        children: [
                            "Log In",
                            loading ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(utils_LoadingSpinner, {}) : ""
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Authentication_LoginForm = (LoginForm);

;// CONCATENATED MODULE: ./components/Authentication/RegisterForm.js








const RegisterForm_INITIAL_USER = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
};
const RegisterForm = ()=>{
    const [user, setUser] = external_react_default().useState(RegisterForm_INITIAL_USER);
    const [disabled, setDisabled] = external_react_default().useState(true);
    const [loading, setLoading] = external_react_default().useState(false);
    const [error, setError] = external_react_default().useState("");
    external_react_default().useEffect(()=>{
        const isUser = Object.values(user).every((el)=>Boolean(el));
        isUser ? setDisabled(false) : setDisabled(true);
    }, [
        user
    ]);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setUser((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // console.log(user)
        try {
            setLoading(true);
            setError("");
            const url = `${baseUrl/* default */.Z}/api/v1/auth/signup`;
            const payload = {
                ...user
            };
            const response = await external_axios_default().post(url, payload);
            (0,auth/* handleLogin */.jc)(response.data);
        // console.log(response.data)
        } catch (error) {
            (0,catchErrors/* default */.Z)(error, setError);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "register-form",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                children: "Register"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_reactstrap_.Alert, {
                color: "danger",
                isOpen: error ? true : false,
                children: error
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "Full Name",
                                name: "name",
                                value: user.name,
                                onChange: handleChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                children: "Email"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                className: "form-control",
                                placeholder: "Email",
                                name: "email",
                                type: "email",
                                value: user.email,
                                onChange: handleChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                children: "Password"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                type: "password",
                                className: "form-control",
                                placeholder: "Password",
                                name: "password",
                                value: user.password,
                                onChange: handleChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                children: "Confirm Password"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                type: "password",
                                className: "form-control",
                                placeholder: "Confirm Password",
                                name: "confirmPassword",
                                value: user.confirmPassword,
                                onChange: handleChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                        className: "description",
                        children: 'The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )'
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        type: "submit",
                        disabled: disabled,
                        children: [
                            "Register",
                            loading ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(utils_LoadingSpinner, {}) : ""
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Authentication_RegisterForm = (RegisterForm);

;// CONCATENATED MODULE: ./pages/authentication.js





const Authentication = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageBanner/* default */.Z, {
                pageTitle: "Authentication",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Authentication"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "profile-authentication-area ptb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Authentication_LoginForm, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Authentication_RegisterForm, {})
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const authentication = (Authentication);


/***/ }),

/***/ 6759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "jc": () => (/* binding */ handleLogin),
  "hY": () => (/* binding */ handleLogout),
  "a0": () => (/* binding */ redirectUser)
});

;// CONCATENATED MODULE: external "js-cookie"
const external_js_cookie_namespaceObject = require("js-cookie");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./utils/auth.js


const handleLogin = (token)=>{
    external_js_cookie_default().set("token", token);
    router_default().push("/");
};
const redirectUser = (ctx, location)=>{
    if (ctx.req) {
        ctx.res.writeHead(302, {
            Location: location
        });
        ctx.res.end();
    } else {
        router_default().push(location);
    }
};
const handleLogout = ()=>{
    external_js_cookie_default().remove("token");
    router_default().push("/");
};


/***/ }),

/***/ 8526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? "https://cordovalearning.com:3000" : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);


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

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [678,543,9570], () => (__webpack_exec__(7822)));
module.exports = __webpack_exports__;

})();