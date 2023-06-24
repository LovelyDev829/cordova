(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar/distance-learning": [
		3665,
		3665
	],
	"./ar/distance-learning.json": [
		3665,
		3665
	],
	"./en/distance-learning": [
		3573,
		3573
	],
	"./en/distance-learning.json": [
		3573,
		3573
	],
	"./fr/distance-learning": [
		3106,
		3106
	],
	"./fr/distance-learning.json": [
		3106,
		3106
	],
	"./nl/distance-learning": [
		9931,
		9931
	],
	"./nl/distance-learning.json": [
		9931,
		9931
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 7655;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 7773:
/***/ ((module) => {

"use strict";

module.exports = {
    locales: [
        "en",
        "fr",
        "nl",
        "ar"
    ],
    defaultLocale: "en",
    pages: {
        "/": [
            "distance-learning"
        ]
    }
};


/***/ }),

/***/ 3294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(7773);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
;// CONCATENATED MODULE: external "next-translate/appWithI18n"
const appWithI18n_namespaceObject = require("next-translate/appWithI18n");
var appWithI18n_default = /*#__PURE__*/__webpack_require__.n(appWithI18n_namespaceObject);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./store/types.js
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CART = "REMOVE_CART";
const RESET_CART = "RESET_CART";
const GET_DISCOUNT = "GET_DISCOUNT";

;// CONCATENATED MODULE: ./store/reducers.js
/* eslint-disable default-param-last */ 

const initialState = {
    cartItems: [],
    discount: 0.0
};
// COUNTER REDUCER
const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            let existingItem = state.cartItems.find((course)=>action.data.id === course.id);
            if (existingItem) {
                existingItem.quantity += 1;
                return {
                    ...state
                };
            } else {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        action.data
                    ]
                };
            }
        case GET_DISCOUNT:
            return {
                ...state,
                discount: action.data
            };
        case REMOVE_CART:
            let new_items = state.cartItems.filter((item)=>action.id !== item.id);
            return {
                ...state,
                cartItems: new_items
            };
        case RESET_CART:
            return {
                ...state,
                cartItems: []
            };
        default:
            return state;
    }
};
// COMBINED REDUCERS
const reducers = {
    cart: cartReducer
};
/* harmony default export */ const store_reducers = ((0,external_redux_namespaceObject.combineReducers)(reducers));

;// CONCATENATED MODULE: ./store/index.js





let store;
function initStore(initialState) {
    return (0,external_redux_namespaceObject.legacy_createStore)(store_reducers, initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
}
const initializeStore = (preloadedState)=>{
    let initialStore = store ?? initStore(preloadedState);
    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        initialStore = initStore({
            ...store.getState(),
            ...preloadedState
        });
        // Reset the current store
        store = undefined;
    }
    // For SSG and SSR always create a new store
    if (true) {
        return initialStore;
    }
    // Create the store once in the client
    if (!store) store = initialStore;
    return initialStore;
};
function useStore(initialState) {
    return (0,external_react_.useMemo)(()=>initializeStore(initialState), [
        initialState
    ]);
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-toast-notifications"
var external_react_toast_notifications_ = __webpack_require__(5927);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/_App/GoTop.js


const GoTop = ({ scrollStepInPx , delayInMs  })=>{
    const [thePosition, setThePosition] = external_react_default().useState(false);
    const timeoutRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 170) {
                setThePosition(true);
            } else {
                setThePosition(false);
            }
        });
    }, []);
    const onScrollStep = ()=>{
        if (window.pageYOffset === 0) {
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    };
    const scrollToTop = ()=>{
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    };
    const renderGoTopIcon = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: `go-top ${thePosition ? "active" : ""}`,
            onClick: scrollToTop,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                className: "bx bx-chevron-up"
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: renderGoTopIcon()
    });
};
/* harmony default export */ const _App_GoTop = (GoTop);

// EXTERNAL MODULE: ./utils/ActiveLink.js
var ActiveLink = __webpack_require__(5670);
// EXTERNAL MODULE: ./utils/auth.js + 1 modules
var auth = __webpack_require__(6759);
;// CONCATENATED MODULE: ./components/_App/SearchForm.js



const SearchForm = ()=>{
    const [search, setSearch] = external_react_default().useState({
        search: ""
    });
    const handleOnChange = (e)=>{
        const { name , value  } = e.target;
        setSearch((prevState)=>({
                ...prevState,
                [name]: value
            }));
    // console.log("dsddsd")
    };
    const handleSearch = (e)=>{
        e.preventDefault();
        router_default().push({
            pathname: "/courses/search",
            query: {
                q: search.search
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "search-box",
        onSubmit: handleSearch,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                type: "text",
                className: "input-search",
                placeholder: "Search for anything",
                name: "search",
                value: search.search,
                onChange: handleOnChange
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                type: "submit",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                    className: "flaticon-search"
                })
            })
        ]
    });
};
/* harmony default export */ const _App_SearchForm = (SearchForm);

;// CONCATENATED MODULE: ./components/_App/Navbar.js






const Navbar = ({ user  })=>{
    const cartItems = (0,external_react_redux_.useSelector)((state)=>state.cart.cartItems);
    const { 0: menu , 1: setMenu  } = (0,external_react_.useState)(true);
    const toggleNavbar = ()=>{
        setMenu(!menu);
    };
    (0,external_react_.useEffect)(()=>{
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    });
    const isAdmin = user && user.role === "admin";
    const isTeacher = user && user.role === "teacher";
    const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            id: "navbar",
            className: "navbar-area",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "edemy-nav",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "navbar navbar-expand-lg navbar-light",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                    onClick: toggleNavbar,
                                    className: "navbar-brand",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/logo.png",
                                        alt: "logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: toggleNavbar,
                                className: classTwo,
                                type: "button",
                                "data-toggle": "collapse",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar top-bar"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar middle-bar"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar bottom-bar"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classOne,
                                id: "navbarSupportedContent",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_SearchForm, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                        href: "/",
                                                        activeClassName: "active",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            onClick: (e)=>e.preventDefault(),
                                                            className: "nav-link",
                                                            children: [
                                                                "Home",
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bx-chevron-down"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "dropdown-menu",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        className: "nav-link",
                                                                        onClick: toggleNavbar,
                                                                        children: "Learning Provider"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/elearning",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "eLearning School"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/vendor-certification",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Vendor Certification Training"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/online-training",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Online Training School"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/distance-learning",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Distance Learning"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/language-school",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Language School"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/modern-schooling",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Modern Schooling"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/yoga-training",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Yoga Training"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/health-coaching",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Health Coaching"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/kindergaten",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Kindergaten"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            onClick: (e)=>e.preventDefault(),
                                                            className: "nav-link",
                                                            children: [
                                                                "Pages",
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bx-chevron-down"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "dropdown-menu",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: "nav-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                        href: "/",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            className: "nav-link",
                                                                            children: [
                                                                                "About Us",
                                                                                " ",
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bx-chevron-down"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        className: "dropdown-menu",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                className: "nav-item",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                    href: "/about-1",
                                                                                    activeClassName: "active",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                        onClick: toggleNavbar,
                                                                                        className: "nav-link",
                                                                                        children: "About Us 01"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                className: "nav-item",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                    href: "/about-2",
                                                                                    activeClassName: "active",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                        onClick: toggleNavbar,
                                                                                        className: "nav-link",
                                                                                        children: "About Us 02"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                className: "nav-item",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                    href: "/about-3",
                                                                                    activeClassName: "active",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                        onClick: toggleNavbar,
                                                                                        className: "nav-link",
                                                                                        children: "About Us 03"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: "nav-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                        href: "/",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            className: "nav-link",
                                                                            children: [
                                                                                "Events",
                                                                                " ",
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bx-chevron-down"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        className: "dropdown-menu",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                className: "nav-item",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                    href: "/events",
                                                                                    activeClassName: "active",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                        onClick: toggleNavbar,
                                                                                        className: "nav-link",
                                                                                        children: "Events"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                className: "nav-item",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                    href: "/single-events",
                                                                                    activeClassName: "active",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                        onClick: toggleNavbar,
                                                                                        className: "nav-link",
                                                                                        children: "Events Details"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/success-story",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Success Story"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/advisor",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Teacher"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/gallery",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Gallery"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/faq",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "FAQs"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/contact",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Contact Us"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/authentication",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Login/Register"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/404",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "404 Error Page"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/coming-soon",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Coming Soon"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/purchase-guide",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Purchase Guide"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/privacy-policy",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Privacy Policy"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/terms-of-service",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Terms of Service"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "nav-item megamenu",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            onClick: (e)=>e.preventDefault(),
                                                            className: "nav-link",
                                                            children: [
                                                                "Courses",
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bx-chevron-down"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                                        className: "dropdown-menu",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                            className: "nav-item",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "container",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "row",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                className: "col",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "megamenu-submenu",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-1",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Grid 01"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-2",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Grid 02"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-3",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Grid 03"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-4",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Grid 04"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-5",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses List 01"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-6",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Right Sidebar"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                className: "col",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "megamenu-submenu",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/single-courses-1",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Single Layout 01"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/single-courses-2",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Single Layout 02"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/categories",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Categories"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/membership-levels",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Membership Levels"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/become-a-teacher",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Become a Teacher"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/profile",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Profile"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                className: "col",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "megamenu-submenu",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-1",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Grid 01"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-2",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Grid 02"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-3",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Grid 03"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-4",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Grid 04"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-5",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses List 01"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/courses-6",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Right Sidebar"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                className: "col",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                    className: "megamenu-submenu",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/single-courses-1",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Single Layout 01"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/single-courses-2",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Single Layout 02"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/categories",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Courses Categories"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/membership-levels",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Membership Levels"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/become-a-teacher",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Become a Teacher"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                            className: "nav-item",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                                href: "/profile",
                                                                                                activeClassName: "active",
                                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                    onClick: toggleNavbar,
                                                                                                    className: "nav-link",
                                                                                                    children: "Profile"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "row m-0 mobile-none",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                className: "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "single-category-widget",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                            className: "icon",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                                className: "bx bx-code-alt"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                                            children: "Development"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                            className: "sub-title",
                                                                                            children: "60 Courses"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                            href: "/courses-1",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                className: "link-btn"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                className: "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "single-category-widget",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                            className: "icon",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                                className: "bx bx-camera"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                                            children: "Photography"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                            className: "sub-title",
                                                                                            children: "21 Courses"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                            href: "/courses-2",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                className: "link-btn"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                className: "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "single-category-widget",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                            className: "icon",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                                className: "bx bx-layer"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                                            children: "Design"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                            className: "sub-title",
                                                                                            children: "58 Courses"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                            href: "/courses-3",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                className: "link-btn"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                className: "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "single-category-widget",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                            className: "icon",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                                className: "bx bxs-flag-checkered"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                                            children: "Language"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                            className: "sub-title",
                                                                                            children: "99 Courses"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                            href: "/courses-4",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                className: "link-btn"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                className: "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "single-category-widget",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                            className: "icon",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                                className: "bx bx-health"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                                            children: "Fitness"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                            className: "sub-title",
                                                                                            children: "21 Courses"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                            href: "/courses-5",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                className: "link-btn"
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                className: "col-lg-2 col-sm-4 col-md-4 col-6 p-0",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "single-category-widget",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                                            className: "icon",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                                className: "bx bx-line-chart"
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                                                            children: "Business"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                            className: "sub-title",
                                                                                            children: "49 Courses"
                                                                                        }),
                                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                            href: "/courses-6",
                                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                                className: "link-btn"
                                                                                            })
                                                                                        })
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
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            onClick: (e)=>e.preventDefault(),
                                                            className: "nav-link",
                                                            children: [
                                                                "Shop",
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bx-chevron-down"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "dropdown-menu",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/products-list-1",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Product List 01"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/products-list-2",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Product List 02"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/cart",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Cart"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/checkout",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Checkout"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/single-products",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Product Details"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            onClick: (e)=>e.preventDefault(),
                                                            className: "nav-link",
                                                            children: [
                                                                "Blog",
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bx-chevron-down"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "dropdown-menu",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/blog-1",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Grid (2 in Row)"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/blog-2",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Grid (3 in Row)"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/blog-3",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Grid (Full Width)"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/blog-4",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Right Sidebar"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                className: "nav-item",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                        href: "/",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            onClick: (e)=>e.preventDefault(),
                                                                            className: "nav-link",
                                                                            children: [
                                                                                "Single Post",
                                                                                " ",
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bx-chevron-down"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                        className: "dropdown-menu",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                className: "nav-item",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                    href: "/single-blog-1",
                                                                                    activeClassName: "active",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                        onClick: toggleNavbar,
                                                                                        className: "nav-link",
                                                                                        children: "Default"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                className: "nav-item",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                    href: "/single-blog-2",
                                                                                    activeClassName: "active",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                        onClick: toggleNavbar,
                                                                                        className: "nav-link",
                                                                                        children: "With Video"
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                                className: "nav-item",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                                    href: "/single-blog-3",
                                                                                    activeClassName: "active",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                                        onClick: toggleNavbar,
                                                                                        className: "nav-link",
                                                                                        children: "With Image Slider"
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                    href: "/become-a-teacher",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        className: "nav-link",
                                                        onClick: toggleNavbar,
                                                        children: "Become A Teacher"
                                                    })
                                                })
                                            }),
                                            (user && isTeacher || user && isAdmin) && /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                    href: "/teacher/dashboard",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        className: "nav-link",
                                                        onClick: toggleNavbar,
                                                        children: "Teacher Dashboard"
                                                    })
                                                })
                                            }),
                                            user && isAdmin && /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                    href: "/admin/dashboard",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        className: "nav-link",
                                                        onClick: toggleNavbar,
                                                        children: "Dashboard"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "others-option d-flex align-items-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "option-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "cart-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                        href: "/cart",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "flaticon-shopping-cart"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    children: cartItems.length
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "option-item",
                                                children: user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "user-dropdown",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                            href: "/",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                onClick: (e)=>e.preventDefault(),
                                                                className: "default-btn",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                        className: "flaticon-user"
                                                                    }),
                                                                    " ",
                                                                    user.name,
                                                                    " ",
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {})
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: "dropdown-menu",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    className: "nav-item",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                        href: "/my-courses",
                                                                        activeClassName: "active",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            onClick: toggleNavbar,
                                                                            className: "nav-link",
                                                                            children: "My Courses"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    className: "nav-item",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                        href: "/user/my-profile",
                                                                        activeClassName: "active",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            onClick: toggleNavbar,
                                                                            className: "nav-link",
                                                                            children: "My Profile"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    className: "nav-item",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                        href: "/user/edit-profile",
                                                                        activeClassName: "active",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            onClick: toggleNavbar,
                                                                            className: "nav-link",
                                                                            children: "Edit Profile"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    className: "nav-item",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                        href: "/user/edit-password",
                                                                        activeClassName: "active",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            onClick: toggleNavbar,
                                                                            className: "nav-link",
                                                                            children: "Edit Password"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    className: "nav-item",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                        href: "/",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                            className: "nav-link",
                                                                            onClick: (e)=>{
                                                                                e.preventDefault();
                                                                                (0,auth/* handleLogout */.hY)();
                                                                            },
                                                                            children: "Logout"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                    href: "/authentication",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "default-btn",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "flaticon-user"
                                                            }),
                                                            " ",
                                                            "Login/Register ",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {})
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const _App_Navbar = (Navbar);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(543);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/_App/Footer.js



const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer-area",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-4 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                className: "logo",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/logo2.png",
                                                    alt: "logo"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation, student engagements, and looking forward to the flexible education!"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "social-link",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        href: "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "bx bxl-facebook"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        href: "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "bx bxl-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        href: "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "bx bxl-instagram"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        href: "#",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "bx bxl-linkedin"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-2 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-footer-widget pl-5",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                            children: "Explore"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-links-list",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: "Home"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/about-1",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: "About"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/courses-1",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: "Courses"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/events",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: "Events"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: "Contact"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-2 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                            children: "Resources"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-links-list",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: "Student Success"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: "Scholarships"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: "For Business"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: "Go Premium"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                        href: "#",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            children: "Team Plans"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-4 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                            children: "Address"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-contact-info",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "bx bx-map"
                                                        }),
                                                        "2750 Quadra Street Golden Victoria Road, New York, USA"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "bx bx-phone-call"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "tel:+44587154756",
                                                            children: "+1 (123) 456 7890"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "bx bx-envelope"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "mailto:hello@edemy.com",
                                                            children: "hello@edemy.com"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "bx bxs-inbox"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "tel:+557854578964",
                                                            children: "+55 785 4578964"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "footer-bottom-area",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "bx bx-copyright"
                                            }),
                                            currentYear,
                                            " eDemy is Proudly Powered by ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                target: "_blank",
                                                href: "https://envytheme.com/",
                                                children: "EnvyTheme"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/privacy-policy",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        children: "Privacy Policy"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/terms-of-service",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        children: "Terms & Conditions"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "lines",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "line"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "line"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "line"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _App_Footer = (Footer);

;// CONCATENATED MODULE: ./components/_App/StudentNavbar.js





const StudentNavbar = ({ user  })=>{
    // console.log(user)
    const [menu, setMenu] = external_react_default().useState(true);
    const toggleNavbar = ()=>{
        setMenu(!menu);
    };
    external_react_default().useEffect(()=>{
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    });
    const isAdmin = user && user.role === "admin";
    const isTeacher = user && user.role === "teacher";
    const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            id: "navbar",
            className: "navbar-area",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "edemy-nav admin-nav",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "navbar navbar-expand-lg navbar-light",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                    onClick: toggleNavbar,
                                    className: "navbar-brand",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/logo.png",
                                        alt: "logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: toggleNavbar,
                                className: classTwo,
                                type: "button",
                                "data-toggle": "collapse",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar top-bar"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar middle-bar"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar bottom-bar"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classOne,
                                id: "navbarSupportedContent",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_SearchForm, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                        href: "/",
                                                        activeClassName: "active",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            onClick: (e)=>e.preventDefault(),
                                                            className: "nav-link",
                                                            children: [
                                                                "Home",
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bx-chevron-down"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "dropdown-menu",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "eLearning School"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/vendor-certification",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Vendor Certification Training"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/online-training",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Online Training School"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/distance-learning",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Distance Learning"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/language-school",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Language School"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/modern-schooling",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Modern Schooling"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/yoga-training",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Yoga Training"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/health-coaching",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Health Coaching"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/kindergaten",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Kindergaten"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                    href: "/courses",
                                                    activeClassName: "active",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        onClick: toggleNavbar,
                                                        className: "nav-link",
                                                        children: "Courses"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                    href: "/become-a-teacher",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        className: "nav-link",
                                                        children: "Become A Teacher"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "others-option d-flex align-items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "option-item",
                                            children: user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "user-dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            onClick: (e)=>e.preventDefault(),
                                                            className: "default-btn",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "flaticon-user"
                                                                }),
                                                                " ",
                                                                user.name,
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {})
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "dropdown-menu",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/my-courses",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "My Courses"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/user/my-profile",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "My Profile"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/user/edit-profile",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Edit Profile"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/user/edit-password",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Edit Password"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        className: "nav-link",
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                            (0,auth/* handleLogout */.hY)();
                                                                        },
                                                                        children: "Logout"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                href: "/authentication",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "default-btn",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "flaticon-user"
                                                        }),
                                                        " ",
                                                        "Login/Register ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {})
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const _App_StudentNavbar = (StudentNavbar);

;// CONCATENATED MODULE: ./components/_App/AdminNavbar.js





const AdminNavbar = ({ user  })=>{
    // console.log(user)
    const [menu, setMenu] = external_react_default().useState(true);
    const toggleNavbar = ()=>{
        setMenu(!menu);
    };
    external_react_default().useEffect(()=>{
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    });
    const isAdmin = user && user.role === "admin";
    const isTeacher = user && user.role === "teacher";
    const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            id: "navbar",
            className: "navbar-area",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "edemy-nav admin-nav",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "navbar navbar-expand-lg navbar-light",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                    onClick: toggleNavbar,
                                    className: "navbar-brand",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/logo.png",
                                        alt: "logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: toggleNavbar,
                                className: classTwo,
                                type: "button",
                                "data-toggle": "collapse",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar top-bar"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar middle-bar"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                        className: "icon-bar bottom-bar"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: classOne,
                                id: "navbarSupportedContent",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_SearchForm, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                        href: "/",
                                                        activeClassName: "active",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            onClick: (e)=>e.preventDefault(),
                                                            className: "nav-link",
                                                            children: [
                                                                "Home ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bx-chevron-down"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "dropdown-menu",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "eLearning School"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/vendor-certification",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Vendor Certification Training"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/online-training",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Online Training School"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/distance-learning",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Distance Learning"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/language-school",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Language School"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/modern-schooling",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Modern Schooling"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/yoga-training",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Yoga Training"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/health-coaching",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Health Coaching"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/kindergaten",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Kindergaten"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                    href: "/courses",
                                                    activeClassName: "active",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        onClick: toggleNavbar,
                                                        className: "nav-link",
                                                        children: "Courses"
                                                    })
                                                })
                                            }),
                                            (user && isTeacher || user && isAdmin) && /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                    href: "/teacher/dashboard",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        className: "nav-link",
                                                        children: "Teacher Dashboard"
                                                    })
                                                })
                                            }),
                                            user && isAdmin && /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                    href: "/admin/dashboard",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        className: "nav-link",
                                                        children: "Dashboard"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "others-option d-flex align-items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "option-item",
                                            children: user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "user-dropdown",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            onClick: (e)=>e.preventDefault(),
                                                            className: "default-btn",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "flaticon-user"
                                                                }),
                                                                " ",
                                                                user.name,
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {})
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "dropdown-menu",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/my-courses",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "My Courses"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/user/my-profile",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "My Profile"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/user/edit-profile",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Edit Profile"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/user/edit-password",
                                                                    activeClassName: "active",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        onClick: toggleNavbar,
                                                                        className: "nav-link",
                                                                        children: "Edit Password"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                                    href: "/",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        className: "nav-link",
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                            (0,auth/* handleLogout */.hY)();
                                                                        },
                                                                        children: "Logout"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)(ActiveLink/* default */.Z, {
                                                href: "/authentication",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "default-btn",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "flaticon-user"
                                                        }),
                                                        " Login/Register",
                                                        " ",
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {})
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const _App_AdminNavbar = (AdminNavbar);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/_App/Preloader.js



const Preloader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "jsx-ea3b888242329b85" + " " + "preloader",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "jsx-ea3b888242329b85" + " " + "loader",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "jsx-ea3b888242329b85" + " " + "loadingio-spinner-reload",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "jsx-ea3b888242329b85" + " " + "ldio",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-ea3b888242329b85",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "jsx-ea3b888242329b85"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "jsx-ea3b888242329b85"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "jsx-ea3b888242329b85"
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            (0,jsx_runtime_.jsx)((style_default()), {
                id: "ea3b888242329b85",
                children: ".preloader.jsx-ea3b888242329b85{top:0;left:0;right:0;bottom:0;z-index:999999999999;position:fixed;background-color:rgba(255,255,255,.85)}.preloader.jsx-ea3b888242329b85 .loader.jsx-ea3b888242329b85{top:50%;left:50%;position:absolute;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.preloader.jsx-ea3b888242329b85 .ldio.jsx-ea3b888242329b85>div.jsx-ea3b888242329b85{-webkit-animation:ldio 1s infinite linear;-moz-animation:ldio 1s infinite linear;-o-animation:ldio 1s infinite linear;animation:ldio 1s infinite linear;-webkit-transform-origin:50px 50px;-moz-transform-origin:50px 50px;-ms-transform-origin:50px 50px;-o-transform-origin:50px 50px;transform-origin:50px 50px}.preloader.jsx-ea3b888242329b85 .ldio.jsx-ea3b888242329b85>div.jsx-ea3b888242329b85 div.jsx-ea3b888242329b85{position:absolute}.preloader.jsx-ea3b888242329b85 .ldio.jsx-ea3b888242329b85>div.jsx-ea3b888242329b85 div.jsx-ea3b888242329b85:nth-child(1),.preloader.jsx-ea3b888242329b85 .ldio.jsx-ea3b888242329b85>div.jsx-ea3b888242329b85 div.jsx-ea3b888242329b85:nth-child(2){width:75px;height:75px;border:5px solid;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border-color:transparent#fe4a55#fe4a55#fe4a55;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:50px 50px;-moz-transform-origin:50px 50px;-ms-transform-origin:50px 50px;-o-transform-origin:50px 50px;transform-origin:50px 50px}.preloader.jsx-ea3b888242329b85 .ldio.jsx-ea3b888242329b85>div.jsx-ea3b888242329b85 div.jsx-ea3b888242329b85:nth-child(1){-webkit-transform:rotate(45deg)translate(12.5px,12.5px);-moz-transform:rotate(45deg)translate(12.5px,12.5px);-ms-transform:rotate(45deg)translate(12.5px,12.5px);-o-transform:rotate(45deg)translate(12.5px,12.5px);transform:rotate(45deg)translate(12.5px,12.5px)}.preloader.jsx-ea3b888242329b85 .ldio.jsx-ea3b888242329b85>div.jsx-ea3b888242329b85 div.jsx-ea3b888242329b85:nth-child(2){-webkit-transform:rotate(0deg)translate(12.5px,12.5px);-moz-transform:rotate(0deg)translate(12.5px,12.5px);-ms-transform:rotate(0deg)translate(12.5px,12.5px);-o-transform:rotate(0deg)translate(12.5px,12.5px);transform:rotate(0deg)translate(12.5px,12.5px)}.preloader.jsx-ea3b888242329b85 .ldio.jsx-ea3b888242329b85>div.jsx-ea3b888242329b85 div.jsx-ea3b888242329b85:nth-child(3){width:0;height:0;border:12px solid;border-color:transparent transparent transparent#fe4a55;-webkit-transform:translate(50px,6.5px);-moz-transform:translate(50px,6.5px);-ms-transform:translate(50px,6.5px);-o-transform:translate(50px,6.5px);transform:translate(50px,6.5px)}.preloader.jsx-ea3b888242329b85 .loadingio-spinner-reload.jsx-ea3b888242329b85{width:100px;height:100px;overflow:hidden;display:inline-block}.preloader.jsx-ea3b888242329b85 .ldio.jsx-ea3b888242329b85{width:100%;height:100%;position:relative;-webkit-transform:translateZ(0)scale(1);-moz-transform:translateZ(0)scale(1);transform:translateZ(0)scale(1);-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;-o-transform-origin:0 0;transform-origin:0 0}@-webkit-keyframes ldio{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes ldio{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes ldio{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes ldio{0%{-webkit-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ldio{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}"
            })
        ]
    });
};
/* harmony default export */ const _App_Preloader = (Preloader);

;// CONCATENATED MODULE: ./components/_App/RtlSidebar.js


const RtlSidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "rtl-sidebar",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                            href: "/",
                            title: "English",
                            children: "EN"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                            href: "/ar",
                            title: "Arabic",
                            children: "AR"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                            href: "/fr",
                            title: "French",
                            children: "FR"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                            href: "/nl",
                            title: "Netherlands",
                            children: "NL"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const _App_RtlSidebar = (RtlSidebar);

;// CONCATENATED MODULE: external "react-cookie-consent"
const external_react_cookie_consent_namespaceObject = require("react-cookie-consent");
var external_react_cookie_consent_default = /*#__PURE__*/__webpack_require__.n(external_react_cookie_consent_namespaceObject);
;// CONCATENATED MODULE: ./components/_App/Layout.js














const Layout = ({ children , user  })=>{
    const [loader, setLoader] = external_react_default().useState(true);
    external_react_default().useEffect(()=>{
        setTimeout(()=>{
            setLoader(false);
        }, 2000);
    }, []);
    router_default().events.on("routeChangeStart", ()=>{
        setLoader(true);
    });
    router_default().events.on("routeChangeComplete", ()=>{
        setLoader(false);
    });
    router_default().events.on("routeChangeError", ()=>{
        setLoader(false);
    });
    const isStudent = user && user.role === "student";
    const isAdmin = user && user.role === "admin";
    const isTeacher = user && user.role === "teacher";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("title", {
                        children: "eDemy -  React Next.js LMS Education & Online Courses Theme"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "description",
                        content: "eDemy - React Next.js LMS Education & Online Courses Theme"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "og:title",
                        property: "og:title",
                        content: "eDemy - React Next.js LMS Education & Online Courses Theme"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "twitter:card",
                        content: "eDemy - React Next.js LMS Education & Online Courses Theme"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                        rel: "canonical",
                        href: "https://edemy-react.envytheme.com/"
                    })
                ]
            }),
            loader && /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_Preloader, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_hot_toast_.Toaster, {
                position: "top-left",
                reverseOrder: false
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_toast_notifications_.ToastProvider, {
                placement: "bottom-left",
                autoDismissTimeout: 10000,
                autoDismiss: true,
                children: [
                    isStudent ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_StudentNavbar, {
                        user: user
                    }) : isAdmin || isTeacher ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_AdminNavbar, {
                        user: user
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_Navbar, {
                        user: user
                    }),
                    children,
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_GoTop, {
                        scrollStepInPx: "100",
                        delayInMs: "10.50"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_Footer, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_RtlSidebar, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)((external_react_cookie_consent_default()), {
                children: "This website uses cookies to enhance the user experience."
            })
        ]
    });
};
/* harmony default export */ const _App_Layout = (Layout);

// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(8526);
;// CONCATENATED MODULE: ./pages/_app.js





















// Global Styles

// Global Responsive Styles

// Global RTL Styles

const MyApp = ({ Component , pageProps  })=>{
    const store = useStore(pageProps.initialReduxState);
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(_App_Layout, {
            ...pageProps,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Component, {
                ...pageProps
            })
        })
    });
};
MyApp.getInitialProps = async ({ Component , ctx  })=>{
    const { token  } = (0,external_nookies_.parseCookies)(ctx);
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    if (!token) {
        // if a user not logged in then user can't access those pages
        const isProtectedRoute = ctx.pathname === "/become-a-teacher" || ctx.pathname === "/my-courses" || ctx.pathname === "/teacher/courses" || ctx.pathname === "/checkout";
        if (isProtectedRoute) {
            (0,auth/* redirectUser */.a0)(ctx, "/authentication");
        }
    } else {
        // if a user logged in then user can't access those pages
        const ifLoggedIn = ctx.pathname === "/authentication" || ctx.pathname === "/reset-password";
        if (ifLoggedIn) {
            (0,auth/* redirectUser */.a0)(ctx, "/");
        }
        try {
            const payload = {
                headers: {
                    Authorization: token
                }
            };
            const url = `${baseUrl/* default */.Z}/api/v1/auth/account`;
            const response = await external_axios_default().get(url, payload);
            const user = response.data;
            // If user status disabled then user autometically logged out
            if (!user || !user.active) {
                (0,external_nookies_.destroyCookie)(ctx, "token");
            }
            pageProps.user = user;
        } catch (error) {
            // console.error("Error getting current user", error);
            //invalid token
            (0,external_nookies_.destroyCookie)(ctx, "token");
        }
    }
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        pageProps
    };
};
const __Page_Next_Translate__ = MyApp;
/* harmony default export */ const _app = (appWithI18n_default()(__Page_Next_Translate__, {
    ...(i18n_default()),
    isLoader: true,
    skipInitialProps: false,
    loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
}));


/***/ }),

/***/ 5670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(543);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const ActiveLink = ({ router , children , ...props })=>{
    const child = react__WEBPACK_IMPORTED_MODULE_3__.Children.only(children);
    let className = child.props.className || "";
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }
    delete props.activeClassName;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(child, {
            className
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_1__.withRouter)(ActiveLink));


/***/ }),

/***/ 6759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? "https://cordovalearning.com:3000" : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5927:
/***/ ((module) => {

"use strict";
module.exports = require("react-toast-notifications");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [678,543], () => (__webpack_exec__(3294)));
module.exports = __webpack_exports__;

})();