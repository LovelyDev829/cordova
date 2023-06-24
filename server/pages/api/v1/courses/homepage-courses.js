"use strict";
(() => {
var exports = {};
exports.id = 7337;
exports.ids = [7337];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7062);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4056);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_1__);



// Initialize the cors middleware
const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
    // Only allow requests with GET, POST and OPTIONS
    methods: [
        "GET",
        "POST",
        "OPTIONS",
        "DELETE",
        "PUT"
    ]
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    await cors(req, res);
    try {
        const courses = await _models_index__WEBPACK_IMPORTED_MODULE_1__.courses.findAll({
            order: [
                [
                    "createdAt",
                    "DESC"
                ]
            ],
            limit: 3,
            include: [
                {
                    model: _models_index__WEBPACK_IMPORTED_MODULE_1__.users,
                    as: "user",
                    attributes: [
                        "name",
                        "profilePhoto"
                    ]
                },
                {
                    model: _models_index__WEBPACK_IMPORTED_MODULE_1__.enroled_courses,
                    as: "enroled_courses",
                    attributes: [
                        "courseId"
                    ]
                }
            ]
        });
        res.send({
            courses
        });
    } catch (error) {
        console.log(error);
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9851], () => (__webpack_exec__(9803)));
module.exports = __webpack_exports__;

})();