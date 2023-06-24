"use strict";
(() => {
var exports = {};
exports.id = 9637;
exports.ids = [9637];
exports.modules = {

/***/ 6401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ success_story)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(9570);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(3521);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/SuccessStory/IntroVideo.js



const ModalVideo = dynamic_default()(Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9485, 23)), {
    loadableGenerated: {
        modules: [
            "..\\components\\SuccessStory\\IntroVideo.js -> " + "react-modal-video"
        ]
    }
});
const IntroVideo = ()=>{
    const [display, setDisplay] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setDisplay(true);
    }, []);
    // Popup Video
    const [isOpen, setIsOpen] = external_react_default().useState(true);
    const openModal = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "success-story-area pb-100",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "video-box mt-0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "image",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/success-story.jpg",
                                        className: "shadow",
                                        alt: "image"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    onClick: ()=>openModal(),
                                    className: "video-btn popup-youtube",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                        className: "flaticon-play"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "shape10",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/shape9.png",
                                        alt: "image"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "shape2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                            src: "/images/shape2.png",
                            alt: "image"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "shape3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                            src: "/images/shape3.png",
                            alt: "image"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "shape4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                            src: "/images/shape4.png",
                            alt: "image"
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
            }),
            display ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(ModalVideo, {
                channel: "youtube",
                isOpen: !isOpen,
                videoId: "bk7McNUjWgw",
                onClose: ()=>setIsOpen(!isOpen)
            }) : ""
        ]
    });
};
/* harmony default export */ const SuccessStory_IntroVideo = (IntroVideo);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(543);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/SuccessStory/SuccessfulStudents.js



const SuccessfulStudents = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        className: "start-with-success-area pt-100 bg-f8f9f8 pb-70",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section-title",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                            className: "sub-title",
                            children: "Education For Everyone"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                            children: "Start writing your own success story with a good beginning from eDemy help"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-4 col-md-6 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "start-with-success-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/success-people/success-people1.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "link-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "flaticon-right"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                children: "Sarah Taylor"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                children: "Web Developer"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-4 col-md-6 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "start-with-success-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/success-people/success-people2.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "link-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "flaticon-right"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                children: "Alex Maxwell"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                children: "Tutor"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-4 col-md-6 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "start-with-success-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/success-people/success-people3.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "link-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "flaticon-right"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                children: "Eva Lucy"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                children: "UX/UI Designer"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-4 col-md-6 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "start-with-success-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/success-people/success-people4.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "link-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "flaticon-right"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                children: "Alina Smith"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                children: "Author"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-4 col-md-6 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "start-with-success-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/success-people/success-people5.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "link-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "flaticon-right"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                children: "James Anderson"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                children: "Designer"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-4 col-md-6 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "start-with-success-box",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "#",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                    src: "/images/success-people/success-people6.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "link-btn",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                        className: "flaticon-right"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                children: "Meg Lanning"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                children: "Writer"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const SuccessStory_SuccessfulStudents = (SuccessfulStudents);

;// CONCATENATED MODULE: ./pages/success-story.js






const SuccessStory = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageBanner/* default */.Z, {
                pageTitle: "Success Story",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Success Story"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(SuccessStory_IntroVideo, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "testimonials-area ptb-100 bg-fef8ef",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "single-testimonials-box",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                src: "/images/user1.jpg",
                                className: "client-img",
                                alt: "image"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed tempor incididunt ut labore et dolore."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                children: "John Smith"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                children: "Python Developer"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "shape-img",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/shape4.png",
                                        className: "shape-1",
                                        alt: "image"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/shape14.png",
                                        className: "shape-2",
                                        alt: "image"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/shape7.png",
                                        className: "shape-3",
                                        alt: "image"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "our-story-area ptb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-4 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "our-story-title",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                className: "number",
                                                children: "1"
                                            }),
                                            " Inspirational stories are less about success"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-8 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "our-story-content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        children: "eDdemy.com"
                                                    })
                                                }),
                                                " began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-4 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "our-story-title",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                className: "number",
                                                children: "2"
                                            }),
                                            " Academic Excellence and Cultural Diversity"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-8 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "our-story-content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "We created the ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        children: "eDdemy.com"
                                                    })
                                                }),
                                                " Site Builder with the user's perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand, or start selling products right away."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-12 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "our-story-image",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/story-img.jpg",
                                        alt: "image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-4 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "our-story-title",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                className: "number",
                                                children: "3"
                                            }),
                                            " A classNameical Education for the Future"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-8 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "our-story-content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        children: "eDdemy.com"
                                                    })
                                                }),
                                                " began in 2005. After years in the web hosting industry, we realized that it was near impossible for the average Jane or Joe to create their own website. Traditional web hosting services were simply too complicated, time consuming, and expensive to manage."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-4 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "our-story-title",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                className: "number",
                                                children: "4"
                                            }),
                                            " A success-oriented learning environment"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-8 col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "our-story-content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "We created the ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        children: "eDdemy.com"
                                                    })
                                                }),
                                                " Site Builder with the user's perspective in mind. We wanted to offer a platform that would require no coding skills or design experience. We keep it simple, so users can focus on creating an amazing website that reflects their brand. Best of all - it's free. You can get online, showcase your brand, or start selling products right away."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "After seeing an increased need for eCommerce solutions, we developed one of the only fully-featured, free and commission-free online store builders, allowing business owners to launch their online business."
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(SuccessStory_SuccessfulStudents, {})
        ]
    });
};
/* harmony default export */ const success_story = (SuccessStory);


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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

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
var __webpack_exports__ = __webpack_require__.X(0, [678,543,3521,9570], () => (__webpack_exec__(6401)));
module.exports = __webpack_exports__;

})();