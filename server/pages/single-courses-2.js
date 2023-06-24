"use strict";
(() => {
var exports = {};
exports.id = 6154;
exports.ids = [6154];
exports.modules = {

/***/ 397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ single_courses_2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(543);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/SingleCoursesTwo/PageBanner.js



const PageBanner = ({ pageTitle , homePageUrl , homePageText , innerPageUrl , innerPageText , activePageText  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "page-title-area",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "page-title-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: homePageUrl,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                            children: homePageText
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                        href: innerPageUrl,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                            children: innerPageText
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                    className: "active",
                                    children: activePageText
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                            children: pageTitle
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "shape9",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                    src: "/images/shape8.svg",
                    alt: "image"
                })
            })
        ]
    });
};
/* harmony default export */ const SingleCoursesTwo_PageBanner = (PageBanner);

// EXTERNAL MODULE: ./components/Courses/YouMightLikeTheCourses.js
var YouMightLikeTheCourses = __webpack_require__(1304);
;// CONCATENATED MODULE: ./components/SingleCoursesTwo/CoursesDetailsSidebar.js



const CoursesDetailsSidebarTwo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        className: "courses-sidebar-sticky",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "courses-sidebar-information",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "info",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "flaticon-teacher"
                                            }),
                                            " Instructor"
                                        ]
                                    }),
                                    "James Anderson"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "flaticon-time"
                                            }),
                                            " Duration"
                                        ]
                                    }),
                                    "7 weeks"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "flaticon-distance-learning"
                                            }),
                                            " Lessons"
                                        ]
                                    }),
                                    "25"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "flaticon-web"
                                            }),
                                            " Enrolled"
                                        ]
                                    }),
                                    "255 students"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "flaticon-html"
                                            }),
                                            " Language"
                                        ]
                                    }),
                                    "English"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "flaticon-caption"
                                            }),
                                            " Video Subtitle"
                                        ]
                                    }),
                                    "English"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "flaticon-lock"
                                            }),
                                            " Access"
                                        ]
                                    }),
                                    "Lifetime"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "flaticon-quiz"
                                            }),
                                            " Quizzes"
                                        ]
                                    }),
                                    "Yes"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex justify-content-between align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                className: "flaticon-certification"
                                            }),
                                            " Certificate"
                                        ]
                                    }),
                                    "Yes"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "btn-box",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                        href: "#",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "default-btn",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                    className: "flaticon-shopping-cart"
                                }),
                                " Add to Cart ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {})
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "courses-share",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "share-info",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "Share This Course ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                        className: "flaticon-share"
                                    })
                                ]
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
                })
            ]
        })
    });
};
/* harmony default export */ const CoursesDetailsSidebar = (CoursesDetailsSidebarTwo);

;// CONCATENATED MODULE: ./pages/single-courses-2.js






const SingleCourses = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(SingleCoursesTwo_PageBanner, {
                pageTitle: "Python for Finance: Investment Fundamentals & Data Analytics",
                homePageUrl: "/",
                homePageText: "Home",
                innerPageUrl: "/courses-1",
                innerPageText: "Courses",
                activePageText: "Python for Finance: Investment Fundamentals & Data Analytics"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "courses-details-area ptb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "courses-details-header",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col-lg-8 col-md-12",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "courses-title",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                    children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "courses-meta",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bx-folder-open"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    children: "Category"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        children: "Photography"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bx-group"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    children: "Students Enrolled"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        children: "541,214"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bx-calendar"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    children: "Last Updated"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        children: "01/14/2020"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-4 col-md-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "courses-price",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "courses-review",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "review-stars",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bxs-star"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bxs-star"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bxs-star"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bxs-star"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                    className: "bx bxs-star"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                            className: "reviews-total d-inline-block",
                                                            children: "(3 reviews)"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "price",
                                                    children: "$150"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "default-btn",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "flaticon-user"
                                                            }),
                                                            " Buy Course ",
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {})
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-lg-8 col-md-12",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "courses-details-image-style-two text-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                src: "/images/courses/courses2.jpg",
                                                alt: "image"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "courses-details-desc-style-two",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                    children: "Description"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("strong", {
                                                        children: "Hi! Welcome to Photography Crash Course for Photographer, the only course you need to become a BI Analyst."
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                    children: "Here are some more details of what you get with The Business Intelligence Analyst Course:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "description-features-list",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("strong", {
                                                                    children: "Introduction to Data and Data Science"
                                                                }),
                                                                " – Make sense of terms like business intelligence, traditional and big data, traditional statistical methods, machine learning, predictive analytics, supervised learning, unsupervised learning, reinforcement learning, and many more;"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("strong", {
                                                                    children: "Database theory"
                                                                }),
                                                                " – Before you start using SQL, it is highly beneficial to learn about the underlying database theory and acquire an understanding of why databases are created and how they can help us manage data;"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("strong", {
                                                                    children: "SQL"
                                                                }),
                                                                " – when you can work with SQL, it means you don’t have to rely on others sending you data and executing queries for you. You can do that on your own. This allows you to be independent and dig deeper into the data to obtain the answers to questions that might improve the way your company does its business;"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                    children: "Courses Video"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "courses-curriculum",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            children: "Python Introduction"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    href: "#",
                                                                    className: "d-flex justify-content-between align-items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "courses-name",
                                                                            children: "Python Introduction"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "courses-meta",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                    className: "questions",
                                                                                    children: "5 questions"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                    className: "duration",
                                                                                    children: "01 Hour"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                    className: "status",
                                                                                    children: "Preview"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            children: "Stepping into the World of Python"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#",
                                                                        className: "d-flex justify-content-between align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "courses-name",
                                                                                children: "NumPy Introduction"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "courses-meta",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "duration",
                                                                                        children: "15 Min"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "status locked",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                            className: "flaticon-password"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#",
                                                                        className: "d-flex justify-content-between align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "courses-name",
                                                                                children: "NumPy Getting Started"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "courses-meta",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "duration",
                                                                                        children: "30 Min"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "status locked",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                            className: "flaticon-password"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#",
                                                                        className: "d-flex justify-content-between align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "courses-name",
                                                                                children: "NumPy Creating Arrays"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "courses-meta",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "duration",
                                                                                        children: "45 Min"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "status locked",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                            className: "flaticon-password"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#",
                                                                        className: "d-flex justify-content-between align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "courses-name",
                                                                                children: "NumPy Array Indexing"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "courses-meta",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "questions",
                                                                                        children: "4 questions"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "duration",
                                                                                        children: "1 Hour"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "status locked",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                            className: "flaticon-password"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#",
                                                                        className: "d-flex justify-content-between align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "courses-name",
                                                                                children: "NumPy Array Slicing"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "courses-meta",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "duration",
                                                                                        children: "1.5 Hour"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "status locked",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                            className: "flaticon-password"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            children: "Python MySQL"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#",
                                                                        className: "d-flex justify-content-between align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "courses-name",
                                                                                children: "Python MySQL"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "courses-meta",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "duration",
                                                                                        children: "01 Hour"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "status locked",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                            className: "flaticon-password"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#",
                                                                        className: "d-flex justify-content-between align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "courses-name",
                                                                                children: "Python MySQL Create Database"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "courses-meta",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "questions",
                                                                                        children: "3 questions"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "duration",
                                                                                        children: "1.1 Hour"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "status locked",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                            className: "flaticon-password"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        href: "#",
                                                                        className: "d-flex justify-content-between align-items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "courses-name",
                                                                                children: "Python MySQL Create Table"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "courses-meta",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "duration",
                                                                                        children: "1.5 Hour"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "status locked",
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                            className: "flaticon-password"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                    children: "What you'll learn"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "why-you-learn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "flaticon-tick"
                                                                        }),
                                                                        "Become an expert in Statistics"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "flaticon-tick"
                                                                        }),
                                                                        "Boost your resume with skills"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "flaticon-tick"
                                                                        }),
                                                                        "Gather, organize, data"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "flaticon-tick"
                                                                        }),
                                                                        "Use data for improved"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "flaticon-tick"
                                                                        }),
                                                                        "Present information KPIs"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "flaticon-tick"
                                                                        }),
                                                                        "Perform quantitative"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "flaticon-tick"
                                                                        }),
                                                                        "Analyze current data"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "flaticon-tick"
                                                                        }),
                                                                        "Discover how to find trends"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "flaticon-tick"
                                                                        }),
                                                                        "Understand the fundamentals"
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                            className: "flaticon-tick"
                                                                        }),
                                                                        "Use SQL to create, design"
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                    children: "Requirements"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "requirements-list",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                            children: "Contrary to popular belief, Lorem Ipsum is not simply random text."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                            children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                            children: "The standard Lorem Ipsum passage, used since the 1500s."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                    children: "Who this course is for:"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "audience-list",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                            children: "Beginners to programming and data science"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                            children: "Students eager to learn about job opportunities in the field of data science"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                            children: "Candidates willing to boost their resume by learning how to combine the knowledge of Statistics, SQL, and Tableau in a real-world working environment"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                            children: "People interested in a Business Intelligence Analyst career"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                    children: "Meet Your Instructors"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "courses-author",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "author-profile-header"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "author-profile",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "author-profile-title",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                                            src: "/images/user1.jpg",
                                                                            className: "shadow-sm rounded-circle",
                                                                            alt: "image"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: "author-profile-title-details",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "author-profile-details",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("h4", {
                                                                                        children: "James Anderson"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                        className: "d-block",
                                                                                        children: "Photographer, Author, Teacher"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                                    children: "James Anderson is a celebrated photographer, author, and teacher who brings passion to everything he does."
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                                    children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "courses-reviews",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            children: "Course Rating"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "rating",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "bx bxs-star checked"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "bx bxs-star checked"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "bx bxs-star checked"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "bx bxs-star checked"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "bx bxs-star"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "rating-count",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                children: "4.1 average based on 4 reviews."
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "side",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        children: "5 star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "middle",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: "bar-container",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: "bar-5"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "side right",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        children: "02"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "side",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        children: "4 star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "middle",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: "bar-container",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: "bar-4"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "side right",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        children: "03"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "side",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        children: "3 star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "middle",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: "bar-container",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: "bar-3"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "side right",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        children: "04"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "side",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        children: "2 star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "middle",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: "bar-container",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: "bar-2"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "side right",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        children: "05"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "side",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        children: "1 star"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "middle",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        className: "bar-container",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                            className: "bar-1"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                    className: "side right",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                                        children: "00"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "courses-review-comments",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                            children: "3 Reviews"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "user-review",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                                    src: "/images/user1.jpg",
                                                                    alt: "image"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "review-rating",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "review-stars",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "d-inline-block",
                                                                            children: "James Anderson"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "d-block sub-comment",
                                                                    children: "Excellent"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                                    children: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "user-review",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                                    src: "/images/user2.jpg",
                                                                    alt: "image"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "review-rating",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "review-stars",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "d-inline-block",
                                                                            children: "Sarah Taylor"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "d-block sub-comment",
                                                                    children: "Video Quality!"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                                    children: "Was really easy to implement and they quickly answer my additional questions!"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "user-review",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                                    src: "/images/user3.jpg",
                                                                    alt: "image"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "review-rating",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "review-stars",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "d-inline-block",
                                                                            children: "David Warner"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "d-block sub-comment",
                                                                    children: "Perfect Coding!"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                                    children: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "user-review",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                                    src: "/images/user4.jpg",
                                                                    alt: "image"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "review-rating",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "review-stars",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star checked"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                                    className: "bx bxs-star"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                            className: "d-inline-block",
                                                                            children: "King Kong"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                    className: "d-block sub-comment",
                                                                    children: "Perfect Video!"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                                    children: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "col-lg-4 col-md-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(CoursesDetailsSidebar, {})
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(YouMightLikeTheCourses/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const single_courses_2 = (SingleCourses);


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
var __webpack_exports__ = __webpack_require__.X(0, [678,543,1304], () => (__webpack_exec__(397)));
module.exports = __webpack_exports__;

})();