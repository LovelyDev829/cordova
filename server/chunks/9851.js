"use strict";
exports.id = 9851;
exports.ids = [9851];
exports.modules = {

/***/ 7317:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 7062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ initMiddleware)
/* harmony export */ });
/*
 * Helper method to wait for a middleware to execute before continuing
 * And to throw an error when an error happens in a middleware
 */ function initMiddleware(middleware) {
    return (req, res)=>new Promise((resolve, reject)=>{
            middleware(req, res, (result)=>{
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
}


/***/ }),

/***/ 4512:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, Sequelize)=>{
    class Course extends Model {
    }
    ;
    Course.init({
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        overview: {
            type: Sequelize.TEXT
        },
        price: {
            type: Sequelize.FLOAT
        },
        free: {
            type: Sequelize.BOOLEAN
        },
        published: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        profilePhoto: {
            type: Sequelize.STRING
        },
        coverPhoto: {
            type: Sequelize.STRING
        },
        courese_preview_img: {
            type: Sequelize.STRING
        },
        course_preview_video: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.STRING
        },
        lessons: {
            type: Sequelize.STRING
        },
        access: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        },
        userId: {
            type: Sequelize.UUID,
            onDelete: "CASCADE",
            references: {
                model: "Users",
                key: "id",
                as: "userId"
            }
        }
    }, {
        sequelize,
        modelName: "Course"
    });
    return Course;
};


/***/ }),

/***/ 6633:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, Sequelize)=>{
    class Enroled_courses extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */ static associate(models) {
        // define association here
        }
    }
    ;
    Enroled_courses.init({
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        payment_email: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.INTEGER
        },
        courseId: {
            type: Sequelize.UUID,
            onDelete: "CASCADE",
            references: {
                model: "Courses",
                key: "id",
                as: "courseId"
            }
        },
        userId: {
            type: Sequelize.UUID,
            onDelete: "CASCADE",
            references: {
                model: "Users",
                key: "id",
                as: "userId"
            }
        }
    }, {
        sequelize,
        modelName: "Enroled_courses"
    });
    return Enroled_courses;
};


/***/ }),

/***/ 4056:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(7317)/* ["default"] */ .Z);
const _user = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(8779));
const _course = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(4512));
const _video = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(3279));
const _enroledCourses = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(6633));
// main model file
const fs = __webpack_require__(7147);
const path = __webpack_require__(1017);
const Sequelize = __webpack_require__(496);
const basename = path.basename(__filename);
const env = "production" || 0;
const config = __webpack_require__(4025)[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = (0, _user.default)(sequelize, Sequelize);
db.courses = (0, _course.default)(sequelize, Sequelize);
db.videos = (0, _video.default)(sequelize, Sequelize);
db.enroled_courses = (0, _enroledCourses.default)(sequelize, Sequelize);
// hasMany relationshipt with user and course
db.users.hasMany(db.courses, {
    as: "courses",
    foreignKey: "userId"
});
db.courses.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user"
});
// hasMany relationshipt with course and videos
db.courses.hasMany(db.videos, {
    as: "videos",
    foreignKey: "courseId"
});
db.videos.belongsTo(db.courses, {
    foreignKey: "courseId",
    as: "course"
});
// hasMany relationshipt with user and videos
db.users.hasMany(db.videos, {
    as: "videos",
    foreignKey: "userId"
});
db.videos.belongsTo(db.courses, {
    foreignKey: "userId",
    as: "user"
});
// hasMany relationshipt with course and enroled
db.courses.hasMany(db.enroled_courses, {
    as: "enroled_courses",
    foreignKey: "courseId"
});
db.enroled_courses.belongsTo(db.courses, {
    foreignKey: "courseId",
    as: "course"
});
// hasMany relationshipt with user and enroled
db.users.hasMany(db.enroled_courses, {
    as: "enroled_courses",
    foreignKey: "userId"
});
db.enroled_courses.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user"
});
// console.log('######', db)
module.exports = db;


/***/ }),

/***/ 8779:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, Sequelize)=>{
    class User extends Model {
    }
    ;
    User.init({
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        isEmailPublic: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        password: {
            type: Sequelize.STRING
        },
        designation: {
            type: Sequelize.TEXT
        },
        about: {
            type: Sequelize.TEXT
        },
        location: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        company: {
            type: Sequelize.STRING
        },
        companyUrl: {
            type: Sequelize.STRING
        },
        interests: {
            type: Sequelize.STRING
        },
        passwordResetToken: {
            type: Sequelize.UUID
        },
        passwordUpdatedAt: {
            type: Sequelize.DATE
        },
        emailResetToken: {
            type: Sequelize.UUID
        },
        profilePhoto: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        fb_url: {
            type: Sequelize.STRING
        },
        tw_url: {
            type: Sequelize.STRING
        },
        insta_url: {
            type: Sequelize.STRING
        },
        in_url: {
            type: Sequelize.STRING
        },
        emailConfirmed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        emailConfirmedAt: {
            type: Sequelize.DATE
        },
        as_teacher_apply: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        as_teacher_confirmed: {
            type: Sequelize.BOOLEAN
        },
        as_teacher_confirmed_at: {
            type: Sequelize.DATE
        },
        as_teacher_req_desc: {
            type: Sequelize.TEXT
        },
        role: {
            type: Sequelize.ENUM,
            values: [
                "student",
                "admin",
                "teacher"
            ],
            defaultValue: "student"
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        agreedTerms: {
            allowNull: false,
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: "User"
    });
    return User;
};


/***/ }),

/***/ 3279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, Sequelize)=>{
    class Video extends Model {
    }
    ;
    Video.init({
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        video_url: {
            type: Sequelize.TEXT
        },
        order: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        courseId: {
            type: Sequelize.UUID,
            onDelete: "CASCADE",
            references: {
                model: "Courses",
                key: "id",
                as: "courseId"
            }
        },
        userId: {
            type: Sequelize.UUID,
            onDelete: "CASCADE",
            references: {
                model: "Users",
                key: "id",
                as: "userId"
            }
        }
    }, {
        sequelize,
        modelName: "Video"
    });
    return Video;
};


/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = JSON.parse('{"development":{"username":"postgres","password":"0090","database":"edemy_app_development","host":"127.0.0.1","dialect":"postgres"},"test":{"username":"Update here username","password":"Update here password","database":"edemy_database_test","host":"127.0.0.1","dialect":"postgres"},"production":{"username":"Update here username","password":"Update here password","database":"Update here database","host":"127.0.0.1","dialect":"postgres"}}');

/***/ })

};
;