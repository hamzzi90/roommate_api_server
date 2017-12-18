(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("jQuery"), require("handlebars/runtime"), require("customAlert"), require("GV"));
    else if(typeof define === 'function' && define.amd)
        define(["jQuery", "handlebars.runtime", "customAlert", "GV"], factory);
    else {
        var a = typeof exports === 'object' ? factory(require("jQuery"), require("handlebars/runtime"), require("customAlert"), require("GV")) : factory(root["jQuery"], root["Handlebars"], root["customAlert"], root["GV"]);
        for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__) {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/
            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId])
            /******/ 			return installedModules[moduleId].exports;
            /******/
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			i: moduleId,
                /******/ 			l: false,
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Flag the module as loaded
            /******/ 		module.l = true;
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;
        /******/
        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;
        /******/
        /******/ 	// identity function for calling harmony imports with the correct context
        /******/ 	__webpack_require__.i = function(value) { return value; };
        /******/
        /******/ 	// define getter function for harmony exports
        /******/ 	__webpack_require__.d = function(exports, name, getter) {
            /******/ 		if(!__webpack_require__.o(exports, name)) {
                /******/ 			Object.defineProperty(exports, name, {
                    /******/ 				configurable: false,
                    /******/ 				enumerable: true,
                    /******/ 				get: getter
                    /******/ 			});
                /******/ 		}
            /******/ 	};
        /******/
        /******/ 	// getDefaultExport function for compatibility with non-harmony modules
        /******/ 	__webpack_require__.n = function(module) {
            /******/ 		var getter = module && module.__esModule ?
                /******/ 			function getDefault() { return module['default']; } :
                /******/ 			function getModuleExports() { return module; };
            /******/ 		__webpack_require__.d(getter, 'a', getter);
            /******/ 		return getter;
            /******/ 	};
        /******/
        /******/ 	// Object.prototype.hasOwnProperty.call
        /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        /******/
        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "/dist/";
        /******/
        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(__webpack_require__.s = 730);
        /******/ })
    /************************************************************************/
    /******/ ({

        /***/ 0:
        /***/ (function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

            /***/ }),

        /***/ 1:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * Render a block when a comparison of the first and third
             * arguments returns true. The second argument is
             * the [arithemetic operator][operators] to use. You may also
             * optionally specify an inverse block to render when falsy.
             * @example
             *   {{#compare 1 '==' '1'}}TRUE{{else}}FALSE{{/compare}}  // TRUE
             *   {{#compare 1 '===' '1'}}TRUE{{else}}FALSE{{/compare}} // FALSE
             *
             * @param {*} a `a`
             * @param {string} operator `operator` The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
             * @param {*} b `b`
             * @param {Object} options `options` Handlebars provided options object
             * @return {string} Block, or if specified the inverse block is rendered if falsey.
             * @block
             * @api public
             */

            module.exports = function compare(a, operator, b, options) {
                if (arguments.length < 4) {
                    throw new Error('handlebars Helper {{compare}} expects 4 arguments');
                }

                /* eslint-disable eqeqeq */

                var result = void 0;

                switch (operator) {
                    case '==':
                        result = a == b;
                        break;
                    case '===':
                        result = a === b;
                        break;
                    case '!=':
                        result = a != b;
                        break;
                    case '!==':
                        result = a !== b;
                        break;
                    case '<':
                        result = a < b;
                        break;
                    case '>':
                        result = a > b;
                        break;
                    case '<=':
                        result = a <= b;
                        break;
                    case '>=':
                        result = a >= b;
                        break;
                    default:
                    {
                        throw new Error('helper {{compare}}: invalid operator: \'' + operator + '\'');
                    }
                }

                /* eslint-enable eqeqeq */

                if (result === false) {
                    return options.inverse(this);
                }
                return options.fn(this);
            };

            /***/ }),

        /***/ 10:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * Change to link by Case
             * @param {string} linkType linkType
             * @param {string} linkInfo link condition.
             * @return {string} link.
             * @api public
             */

            /**
             * 환경 변수에 따른 도메인 정보
             * @author foundy
             * @since 2017.09.26
             * @since 2017.10.19 파트너 도메인 정보 추가, lyw31136
             * @description staging 환경 구성에 따라 임시적인 조치로 한시적 추가
             * @since 2017.11.21 QA 환경 추가, lyw31136
             * @todo 도메인 정보를 전달 받는 형태로 변경 필요
             */

            var DOMAIN = function (env) {
                var domains = {
                    'development': {
                        ESCROW: '//escrow-dev.wemakeprice.com',
                        BASE: '//front-dev.wemakeprice.com',
                        PARTNER: '//partner-dev.wemakeprice.com'
                    },
                    'qa': {
                        ESCROW: '//escrow-qa.wemakeprice.com',
                        BASE: '//front-qa.wemakeprice.com',
                        PARTNER: '//partner-qa.wemakeprice.com'
                    },
                    'staging': {
                        ESCROW: '//escrow-stg.wemakeprice.com',
                        BASE: '//front-stg.wemakeprice.com',
                        PARTNER: '//partner-stg.wemakeprice.com'
                    },
                    'production': {
                        ESCROW: '//escrow.wemakeprice.com',
                        BASE: '//front.wemakeprice.com',
                        PARTNER: '//partner.wemakeprice.com'
                    }
                };

                return domains[env];
            }("staging");

// const DOMAIN = {
//   // escrow 도메인
//   ESCROW: '//escrow-dev.wemakeprice.com',
//
//   // 기본 도메인
//   BASE: '//front-dev.wemakeprice.com',
//   // BASE: '//front-local.wemakeprice.com:3000',
// };

            /**
             * Rules
             * @author lyw31136
             * @since 2017.06
             * @since 2017.09.26 Base 도메인 추가
             * @since 2017.10.19 DOMAINS 속성 추가
             * @description escrow 에서의 공통 메뉴에서의 링크를 위한 임시적인 조치로 한시적 추가
             * @todo Rules에 대한 검토 필요 (도메인 포함)
             */
            var RULES = {
                // ==================================================
                // Case : Admin 정의
                // ==================================================
                // 상품 상세
                PROD: DOMAIN.BASE + '/product/',
                // 딜 상세
                DEAL: DOMAIN.BASE + '/deal/',
                // 이벤트
                EVENT: DOMAIN.BASE + '/event/',
                // 기획전
                EXHIBIT: DOMAIN.BASE + '/promotion/',
                // 브랜드관
                BRAND: DOMAIN.BASE + '/brand/',
                // URL
                URL: '',

                // ==================================================
                // Case : Custom (prerender, client의 필요에 의해 만듬)
                // TODO : Admin, Custom 간의 변수명의 인터페이스 지정
                // ==================================================
                // Domain 정보들
                DOMAINS: DOMAIN,
                // Base Domain
                BASE: DOMAIN.BASE,
                // Escrow Domain
                ESCROW: DOMAIN.ESCROW,
                // 장바구니
                CART: DOMAIN.ESCROW + '/cart/',
                // 주문
                ORDER: DOMAIN.ESCROW + '/order/',
                // 고객센터
                CS: DOMAIN.BASE + '/cs/',
                // 메인
                MAIN: DOMAIN.BASE + '/',
                // 카테고리 대
                CATEGORY: DOMAIN.BASE + '/category/',
                // 카테고리 중
                CATEGORY_D: DOMAIN.BASE + '/category/division/',
                // 카테고리 소
                CATEGORY_S: DOMAIN.BASE + '/category/section/',
                // 원더배송 메인
                WONDER: DOMAIN.BASE + '/wonder',
                // 원더배송 대
                WONDER_D: DOMAIN.BASE + '/wonder/division/',
                // 비즈몰 메인
                BIZ: DOMAIN.BASE + '/bizmall',
                // 원더배송 대
                BIZ_D: DOMAIN.BASE + '/bizmall/division/',
                // 마이페이지
                MYPAGE: DOMAIN.BASE + '/mypage/',
                // 회원정보
                USER: DOMAIN.BASE + '/user/'
            };

            /**
             * linkType을 체크하여 linkInfo 를 재조합
             * @param  {string} type linkType
             * @param  {string} info linkInfo
             * @return {string} 조합된 linkInfo
             */
            function getLinkInfo(type, info) {
                if (type === 'MAIN') {
                    return '';
                }
                if (type === 'WONDER' || type === 'BIZ') {
                    return info === '' ? '' : '/' + info;
                }
                return info;
            }

            /**
             * 링크를 만들기 위한 Helper function
             * @param  {string} linkType 링크 타입, 타입에 대한 정의는 RULES 참고
             * @param  {string} linkInfo 링크 타입에서 나온 세그먼트 기준뒤의 URL 파라메터
             * @return {string} 변환된 링크 URL
             */
            module.exports = function urlRules(linkType, linkInfo) {
                var hasOwn = Object.prototype.hasOwnProperty;
                var linkExtendInfo = getLinkInfo(linkType, linkInfo);

                var returnUrlRule = null;
                if (linkType === 'ALL') {
                    // 전체 룰을 넘기기 위한 Type
                    returnUrlRule = RULES;
                } else if (linkType === 'DOMAINS') {
                    // 도메인만 가져오기 위한 Type
                    // 이때 linkInfo 는 DOMAINS 내의 속성 값을 지칭한다.
                    returnUrlRule = RULES[linkType][linkInfo];
                } else if (hasOwn.call(RULES, linkType)) {
                    // 기본 rules(linkType) 뒤에 linkInfo가 붙음
                    returnUrlRule = RULES[linkType] + linkExtendInfo;
                } else {
                    returnUrlRule = 'javascript:void(0);';
                }

                if (returnUrlRule === null) {
                    throw new Error('[urlRules Match Error] :: Type and Info aren`t match');
                }

                return returnUrlRule;
                // return (linkType === 'ALL') ? RULES : hasOwn.call(RULES, linkType) ? RULES[linkType] + linkExtendInfo : 'javascript:void(0);';
            };

            /***/ }),

        /***/ 108:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


// const $ = require('jquery');

            function setKeyBind($elem) {
                $elem.off().on('keydown', function (e) {
                    // Allow: backspace, delete, tab, escape, and enter
                    if (e.keyCode === 46 || e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 27 || e.keyCode === 13 ||
                        // Allow: Ctrl+A
                        e.keyCode === 65 && e.ctrlKey === true ||
                        // Allow: home, end, left, right
                        e.keyCode >= 35 && e.keyCode <= 39) {
                        // let it happen, don't do anything
                        return;
                    } else {
                        // Ensure that it is a number and stop the keypress
                        if (!e.shiftKey && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105)) {
                            setTimeout(function () {
                                $elem.val(phoneNumberToString($elem.val()));
                            }, 1);
                            return;
                        } else {
                            e.preventDefault();
                        }
                    }
                });
            }

            function phoneNumberToString(smsStr) {
                var str = smsStr.replace(/[-]/gi, '');
                return str.replace(/(^01[0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/, '$1-$2-$3');
            }

            module.exports = {
                setKeyBind: setKeyBind,
                phoneNumberToString: phoneNumberToString
            };

            /***/ }),

        /***/ 12:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            var stringUtils = __webpack_require__(9);

            var rules = {
                // 한글체크
                isKorean: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
                // isSpace: /\s+/g,             // 공백
                numericRegex: /^[0-9]+$/,
                //isCode: /^[A-Za-z0-9]+$/i,
                // 4개이상 같은 문자 금지
                doubleRegex: /(.)\1\1\1/,
                // Email
                emailRegex: /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
            };

// 문자(_value)값의 길이가 정확히 length이상일때 true
            exports.minLength = function (value, length) {
                if (!rules.numericRegex.test(length)) {
                    return false;
                }
                return value.length >= parseInt(length, 10);
            };

// 문자(_value)값의 길이가 정확히 length이하일때 true
            exports.maxLength = function (value, length) {
                if (!rules.numericRegex.test(length)) {
                    return false;
                }
                return value.length <= parseInt(length, 10);
            };

// 문자(_value)값의 길이가 정확히 length수와 같아야 true
            exports.exactLength = function (value, length) {
                if (!rules.numericRegex.test(length)) {
                    return false;
                }
                return value.length === parseInt(length, 10);
            };

// URL 체크
            exports.isURL = function (value) {
                // 프로토콜
                var pattern = new RegExp('^(https?:\\/\\/)?' +
                    // 도메인명
                    '((([a-z\d](([a-z\d-]*[a-z\d])|([ㄱ-힣]))*)\.)+[a-z]{2,}|' +
                    // 아이피
                    '((\\d{1,3}\\.){3}\\d{1,3}))' +
                    // 포트번호
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                    // 쿼리스트링
                    '(\\?[;&a-z\\d%_.~+=-]*)?' +
                    // 해쉬테그들
                    '(\\#[-a-z\\d_]*)?$', 'i');
                return pattern.test(value);
            };

// 문자 사이에 공백이 있는 지 체크
            exports.isSpace = function (string) {
                return string.search(/\s/) !== -1;
            };

// 내용이 비어있는지 확인
            exports.isEmpty = function (value) {
                return stringUtils.trim(value) === '';
            };

// 한글 체크
// vv.isHangul('강남') - true
// vv.isHangul('ㄱ') - false
            exports.isHangul = function (string) {
                var len = string.length;
                for (var i = 0; i < len; i++) {
                    if (string.charCodeAt(i) !== 32 && (string.charCodeAt(i) < 44032 || string.charCodeAt(i) > 55203)) {
                        return false;
                    }
                }
                return true;
            };

// 한글 체크
// vv.isHangul('강남') - true
// vv.isHangul('ㄱ') - true
            exports.isHangulExtend = function (string) {
                return rules.isKorean.test(string);
            };

// 이메일 체크 (하나의 Value값)
            exports.isValidEmail = function () {
                var args = arguments;
                var value = args.length > 1 ? args[0] + '@' + args[1] : args[0];
                return rules.emailRegex.test(value);
            };

// 동일하고 연속된 문자 (4회이상) 체크
            exports.isDouble = function (value) {
                return rules.doubleRegex.test(value);
            };

            /***/ }),

        /***/ 158:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * Return the product of `a` modulus `b`.
             * @example
             *   {{[math/modulus] 0 1}} // 1
             *
             * @param {number} a `a`
             * @param {number} b `b`
             * @return {number} a % b
             * @api public
             */

            module.exports = function modulus(a, b) {
                return a % b;
            };

            /***/ }),

        /***/ 160:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            var $ = __webpack_require__(0);

            /**
             * Class representing a PlaceHolder
             * @author Phil
             * @since 2017.05.31
             */

            var PlaceHolder = function () {

                /**
                 * Create a PlaceHolder
                 * @param {string|object} container selector.
                 * @param {Object} [options] PlaceHolder option.
                 */

                function PlaceHolder(container, options) {
                    _classCallCheck(this, PlaceHolder);

                    this.$container = $(container);
                    this.options = {
                        textColor: '#bbb'
                    };
                    this.options = $.extend({}, this.options, options || {});
                }

                _createClass(PlaceHolder, [{
                    key: 'init',
                    value: function init() {
                        var self = this;

                        this.$placeHolder = this.$container.find('[data-placeholder]');
                        this.$placeHolderInput = this.$container.find('[data-placeholder-input]');

                        this.setText();
                        this.clickElement();

                        // 이미 데이터가 있는 상황에서는 없애줌
                        this.$placeHolderInput.each(function () {
                            var $this = $(this);
                            var $target = $this.attr('data-placeholder-input');
                            self.resetText($this, $target);
                        });
                    }
                }, {
                    key: 'setText',
                    value: function setText() {
                        this.$placeHolder.each(function () {
                            var $this = $(this);
                            var placeHolderText = $this.attr('data-placeholder');
                            $this.text(placeHolderText);
                        });
                    }
                }, {
                    key: 'clickElement',
                    value: function clickElement() {
                        var self = this;

                        this.$placeHolderInput.each(function () {
                            var $this = $(this);
                            var $target = $this.attr('data-placeholder-input');
                            $this.off('focus blur');
                            $this.on({
                                focus: function focus() {
                                    $('[data-placeholder-for=' + $target + ']').css('display', 'none');
                                },
                                blur: function blur() {
                                    self.resetText($this, $target);
                                }
                            });
                        });

                        this.$placeHolder.off().on('click', function () {
                            $(this).css('display', 'none');
                            var $target = $(this).attr('data-placeholder-for');
                            $('[data-placeholder-input=' + $target + ']').focus();
                        });
                    }

                    /**
                     * 값이 있으면 노출 없으면 비 노출
                     * @param {object} obj 값이 있는지 없는지 판단할 오브젝트.
                     * @param {String} target target String.
                     */

                }, {
                    key: 'resetText',
                    value: function resetText(obj, target) {
                        var value = $(obj).val();
                        var valueDisplay = value === '' ? '' : 'none';
                        $('[data-placeholder-for=' + target + ']').css('display', valueDisplay);
                    }
                }]);

                return PlaceHolder;
            }();

            module.exports = PlaceHolder;

            /***/ }),

        /***/ 2:
        /***/ (function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

            /***/ }),

        /***/ 3:
        /***/ (function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

            /***/ }),

        /***/ 30:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * URL Rules (클라이언트 전용)
             * - 정의된 URL Rule를 통해 URL 정보들을 FULL PATH로 변환한다.
             * - Interface는 하나로 운영된다. (/src/templates/helpers/urlRules.js)
             * @author lyw31136
             * @since 2017.06.18
             * @since 2017.10.19 DOMAINS 속성 추가에 따른 getURL 체크 추가
             * @type {Object}
             */

            /**
             * Object를 Query 형태로 변경한다.
             * @param  {Object} queryObj Query로 만들 Object
             * @return {string} Query string
             */

            function objToQueryString(queryObj) {
                var queryDatas = [];
                var keys = Object.keys(queryObj);
                if (!keys.length) {
                    return '';
                }
                keys.forEach(function (prop) {
                    if (queryObj.hasOwnProperty(prop)) {
                        queryDatas.push(prop + '=' + queryObj[prop]);
                    }
                });
                return queryDatas.join('&');
            }

            /**
             * URL 뒤에 붙는 Query 형태로 변환
             * @param  {Object}  extendQuery Query로 만들 Object
             * @param  {boolean} [isQueryFirst=true] Query를 URL 뒤에 처음 붙이는 것이라면 true {Optional}
             * @return {string} Query string
             */
            function urlExtendQuery(extendQuery) {
                var isQueryFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                var query = extendQuery ? objToQueryString(extendQuery) : '';
                return isQueryFirst ? '?' + query : query;
            }

            /**
             * URL 변환
             * 페이지 INIT 시 전역 (GV.get('urlRules')) 으로 Rules가 미리 선언되어 있어야 한다.(필수)
             * @param  {string} linkType 링크 타입 e.g.) EVENT, PROD, DEAL
             * @param  {string} linkInfo 링크 정보, 링크 타입 뒤에 붙는다. e.g.) linkType/linkInfo
             * @return {string} URL
             */
            function getURL(linkType, linkInfo) {
                var rules = GV.get('urlRules');
                if (typeof rules === 'undefined') {
                    throw new Error('[urlRules] Nothing URL Interface');
                }

                var hasOwn = Object.prototype.hasOwnProperty;

                var returnUrlRule = null;
                if (linkType === 'DOMAINS') {
                    // 도메인만 가져오기 위한 Type
                    // 이때 linkInfo 는 DOMAINS 내의 속성 값을 지칭한다.
                    returnUrlRule = rules[linkType][linkInfo];
                } else if (hasOwn.call(rules, linkType)) {
                    // 기본 rules(linkType) 뒤에 linkInfo가 붙음
                    returnUrlRule = rules[linkType] + linkInfo;
                } else {
                    returnUrlRule = 'javascript:void(0);';
                }

                if (returnUrlRule === null) {
                    throw new Error('[urlRules Match Error] :: Type and Info aren`t match');
                }

                return returnUrlRule;

                // return hasOwn.call(rules, linkType) ? rules[linkType] + linkInfo : 'javascript:void(0);';
            }

            module.exports = {
                getURL: getURL,
                objToQueryString: objToQueryString,
                urlExtendQuery: urlExtendQuery
            };

            /***/ }),

        /***/ 42:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * 사용자 정보 객체 Module
             * @todo 도메인 www 환경에 맞게 적용
             * @todo 해당 모듈 내에 GV 종속성 부분 고민
             * @todo partner domain 환경에 맞게 변경
             * @author lyw31136
             * @since 2017.06
             * @since 2017.09.06 - 회원정보링크 이동시 비로그인이라면 로그인으로 이동, lyw31136
             * @since 2017.09.12 - 비로그인 구매하기시 장바구니 Merge 여부 파라미터 추가, hjsjjang
             * @since 2017.09.26 - 로그인, 로그아웃, 회원정보 수정 등 링크이동 urlRules 적용, lyw31136
             * @since 2017.10.19 - isLogin IE에서 오류 나는 부분 수정(Build 시), lyw31136
             * @since 2017.10.27 - isNonLogin 비회원 전용 로그인 진행, lyw31136
             * @module js/common/user
             */



            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            var GV = __webpack_require__(8);

            /* 로그인 유무 */
// 위메프 회원전용 로그인 여부
            var isLoginCheck = GV.get('isLogin') || false;

// 비회원(주문조회) 전용 로그인 여부
            var isNonLoginCheck = GV.get('isNonLogin') || false;

            /* assist Common */
            var assistDatas = GV.get('assistData') || {};

            /* User : assist Common */
            var userInfo = assistDatas.user || {};

            var _require = __webpack_require__(3),
                confirm = _require.confirm;

            /* url Rules */


            var urlRules = __webpack_require__(30);

            /**
             * 사용자 객체 기본 프로퍼티 정의
             * @type {Object}
             * @property {string} [mid] 사용자 mid 정보
             * @property {boolean} [isLogin] 회원 기반의 로그인 유무
             *                               - 회원 타입은 총 3가지 TYPE 존재
             *                               - 1. 회원 기반의 로그인, mid 존재 (isLogin = true)
             *                               - 2. 비회원 기반의 주문조회 로그인, mid 존재 (isLogin = false)
             *                               - 3. 비회원(비로그인) (isLogin = false)
             * @property {boolean} [isNonLogin] 비회원(주문조회 전용) 로그인 유무
             * @property {number} [userClassify] 유저 타입
             *                                   - 10인 경우 일반회원(userType = 1),
             *                                   - 15인 경우 사업자 구매회원(userType = 3),
             *                                   - 30인 경우 파트너 회원(userType = 3)
             * @property {string} [userName] 유저 이름
             * @description User Class 관련 instance 생성시 해당 init시에 assist데이터를 가져온다.
             */
            var defaultProps = {
                mid: '',
                isLogin: false,
                isNonLogin: false,
                userClassify: -1,
                userName: ''
            };

            /** 사용자 정보 */

            var User = function () {
                /** 생성자 */
                function User() {
                    _classCallCheck(this, User);

                    this.props = Object.assign({}, defaultProps);
                }
                /**
                 * 사용자 정보 속성 초기화
                 * @param {Object} [props={}] 사용자 속성
                 */


                _createClass(User, [{
                    key: 'init',
                    value: function init() {
                        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                        Object.assign(this.props, props);
                    }

                    /**
                     * 위메프 사이트 전용 유저 로그인 체크 메서드
                     * @param {boolean} [toDoLogin=false] 로그인 페이지로 이동 여부
                     * @param {string} [rurl] 로그인 후 이동 될 url
                     * @param {Object} [opts] 로그인 시 옵션
                     * @param {string}  [opts.type] 로그인 타입 탭 활성화 (GENERAL - 회원/비회원 주문조회 탭 활성화 NONE_TAB - 회원/비회원 주문조회 탭 비활성화)
                     * @param {string}  [opts.orderYN] 비회원 구매버튼 활성화 (Y - 비회원 구매 버튼 활성화 N - 비회원 구매 버튼 비활성화)
                     * @param {string}  [opts.selectionYN] 비회원 장바구니 Merge 여부 (Y - 로그인시 장바구니 Merge N - 장바구니 Merge 안 함)
                     * @return {boolean} 유저 로그인 여부
                     * @description 로그인 상태일 경우 true 이외의 경우는 false
                     */

                }, {
                    key: 'isLogin',
                    value: function isLogin() {
                        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                            _ref$toDoLogin = _ref.toDoLogin,
                            toDoLogin = _ref$toDoLogin === undefined ? false : _ref$toDoLogin,
                            rurl = _ref.rurl,
                            opts = _ref.opts;

                        if (!this.props.isLogin && toDoLogin) {
                            this.doLogin(rurl, opts);
                        }
                        return !!this.props.isLogin;
                    }

                    /**
                     * 비회원(주문조회) 전용 로그인 여부
                     * @return {boolean} 유저 로그인 여부
                     * @description isLogin(회원전용 로그인)은 무조건 false 인 상태에서 체크 할 부분이 있을 때 사용
                     */

                }, {
                    key: 'isNonLogin',
                    value: function isNonLogin() {
                        return !!this.props.isNonLogin;
                    }

                    /**
                     * 로그인 이동
                     * @param {string} [rurl] 로그인 후 이동 될 url
                     * @param {Object} [opts] 로그인 시 옵션
                     * @param {string}  [opts.type] 로그인 타입 탭 활성화 (GENERAL - 회원/비회원 주문조회 탭 활성화 NONE_TAB - 회원/비회원 주문조회 탭 비활성화)
                     * @param {string}  [opts.orderYN] 비회원 구매버튼 활성화 (Y - 비회원 구매 버튼 활성화 N - 비회원 구매 버튼 비활성화)
                     * @param {string}  [opts.selectionYN] 비회원 장바구니 Merge 여부 (Y - 로그인시 장바구니 Merge N - 장바구니 Merge 안 함)
                     * @return {boolean} confirm 의 확인/취소 유무
                     */

                }, {
                    key: 'doLogin',
                    value: function doLogin(rurl, opts) {
                        if (confirm('로그인 후 이용이 가능합니다.\n로그인 하시겠습니까?')) {
                            this.toLogin(rurl, opts);
                            return true;
                        } else {
                            return false;
                        }
                    }

                    /**
                     * 회원 가입
                     */

                }, {
                    key: 'toJoin',
                    value: function toJoin() {
                        location.href = urlRules.getURL('USER', 'join');
                    }

                    /**
                     * 로그아웃
                     * @param {string} [rurl] 로그아웃 후 이동 될 url
                     * @todo 현재 페이지 도메인 정보 확인 필요 17.09.28 lyw31136
                     */

                }, {
                    key: 'toLogOut',
                    value: function toLogOut() {
                        var rurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;

                        var escrowRedirectUrl = urlRules.getURL('MAIN', '');
                        var returnUrl = location.hostname.indexOf('escrow') !== -1 ? escrowRedirectUrl : rurl;
                        location.href = urlRules.getURL('BASE', '/logout?returnUrl=' + encodeURIComponent(returnUrl));
                    }

                    /**
                     * 로그인
                     * @param {string} [rurl] 로그인 후 이동 될 url
                     * @param {Object} [opts] 로그인 시 옵션
                     * @param {string}  [opts.type] 로그인 타입 탭 활성화 (GENERAL - 회원/비회원 주문조회 탭 활성화 NONE_TAB - 회원/비회원 주문조회 탭 비활성화)
                     * @param {string}  [opts.orderYN] 비회원 구매버튼 활성화 (Y - 비회원 구매 버튼 활성화 N - 비회원 구매 버튼 비활성화)
                     * @param {string}  [opts.selectionYN] 비회원 장바구니 Merge 여부 (Y - 로그인시 장바구니 Merge N - 장바구니 Merge 안 함)
                     */

                }, {
                    key: 'toLogin',
                    value: function toLogin() {
                        var rurl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.href;
                        var opts = arguments[1];

                        var options = opts || {};
                        var type = options.type || 'GENERAL';
                        var orderYN = options.orderYN || 'N';
                        var selectionYN = options.selectionYN || 'N';
                        var returnUrl = encodeURIComponent(rurl);
                        location.href = urlRules.getURL('USER', 'login?returnUrl=' + returnUrl + '&type=' + type + '&orderYN=' + orderYN + '&selectionYN=' + selectionYN);
                    }

                    /**
                     * 회원 수정 페이지 이동
                     * @description userClassify 회원타입체크
                     *              10인 경우 일반회원(userType = 1)
                     *              15인 경우 사업자 구매회원(userType = 3)
                     *              30인 경우 파트너 회원(userType = 3)
                     */

                }, {
                    key: 'toModify',
                    value: function toModify() {
                        // 비로그인이라면 로그인 페이지로 이동
                        if (!this.isLogin()) {
                            this.toLogin();
                            return;
                        }

                        var userClassify = this.props.userClassify || -1;

                        // 일반 회원, 사업자 구매회원
                        if (userClassify === 10 || userClassify === 15) {
                            location.href = urlRules.getURL('USER', 'verify');
                        }

                        // 파트너 회원
                        if (userClassify === 30) {
                            this.toModifyPartner();
                        }

                        throw new Error('Fail to User modify Page : Invalid userClassify');
                    }

                    /**
                     * 회원정보수정 접근시 파트너 회원일 경우 제어
                     * @param {boolean} [isUrlConnected=false] verify url로 접속한 것인지 메뉴 클릭을 통해 접근한 것인지 판단
                     */

                }, {
                    key: 'toModifyPartner',
                    value: function toModifyPartner() {
                        var isUrlConnected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                        var notiMsg = this.props.userName + '\uB2D8\uC740 \uD30C\uD2B8\uB108 \uD68C\uC6D0\uC774\uBBC0\uB85C, \uD30C\uD2B8\uB108 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uC815\uBCF4\uC218\uC815\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\n\uD30C\uD2B8\uB108 \uC0AC\uC774\uD2B8\uB85C \uC774\uB3D9\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?';
                        var myPageMainURL = urlRules.getURL('MYPAGE', 'orders');
                        if (confirm(notiMsg)) {
                            var partnerDomain = urlRules.getURL('DOMAINS', 'PARTNER');
                            // 새탭으로 파트너 메인으로 랜딩
                            window.open(partnerDomain + '/logout?addTabId=Tab_MemberEdit', 'WemakepricePartner');
                            // url 접속 여부
                            if (isUrlConnected) {
                                location.href = myPageMainURL;
                            }
                        } else {
                            // url 접속 여부
                            if (isUrlConnected) {
                                location.href = myPageMainURL;
                            }
                        }
                    }

                    /**
                     * 유저 정보 가져오기
                     * @return {string} 유저 아이디
                     */

                }, {
                    key: 'getInfo',
                    value: function getInfo() {
                        return this.props;
                    }

                    /**
                     * user instance
                     * @return {Object} User instance
                     * @static
                     */

                }], [{
                    key: 'getInstance',
                    value: function getInstance() {
                        if (!this.instance || !this.instance instanceof User) {
                            // init 로그인 속성
                            var initUserLoginStatus = {
                                isLogin: isLoginCheck,
                                isNonLogin: isNonLoginCheck
                            };
                            this.instance = new User();
                            this.instance.init(Object.assign({}, initUserLoginStatus, userInfo));
                        }
                        return this.instance;
                    }
                }]);

                return User;
            }();

            module.exports = User.getInstance();

            /***/ }),

        /***/ 53:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            var $ = __webpack_require__(0);
            var scrollBarWidth = void 0;

            /**
             * 스크롤 바의 width 크기 구함
             * @return {number} 스크롤바의 width 값
             */
            function getScrollBarWidth() {
                if (!scrollBarWidth) {
                    var $outer = $('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body');
                    var widthWithScroll = $('<div>').css({ width: '100%' }).appendTo($outer).outerWidth();
                    $outer.remove();
                    scrollBarWidth = 100 - widthWithScroll;
                }

                return scrollBarWidth;
            }

            /**
             * 전체 body 에 대한 overflow 제어
             * @param {boolean} isHidden overflow hidden 여부
             */
            function scrollOverflow(isHidden) {
                var hiddenValue = isHidden ? 'hidden' : '';
                var paddingRightValue = isHidden ? getScrollBarWidth() : '';
                $('html, body').css({
                    'overflow': hiddenValue
                });

                $('body').css({
                    'paddingRight': paddingRightValue
                });
            }

            module.exports = {
                getScrollBarWidth: getScrollBarWidth,
                scrollOverflow: scrollOverflow
            };

            /***/ }),

        /***/ 606:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * 레이어 팝업
             * @author lyw31136
             * @since 2017.06.18
             * @type {Object}
             */

            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            var $ = __webpack_require__(0);
            var scrollControl = __webpack_require__(53);
            var isInit = false;

            var LayerPop = function () {
                /** 생성자 */
                function LayerPop() {
                    _classCallCheck(this, LayerPop);

                    this.$root = null;
                    this.$container = null;
                }

                /**
                 * setting Element
                 */


                _createClass(LayerPop, [{
                    key: 'setElement',
                    value: function setElement() {
                        this.$root = $('#_layerPop');

                        if (!this.$root.length) {
                            throw new Error('[LayerPop] LayerPop must be first Loaded in DOM.');
                        }

                        this.$container = this.$root.find('[data-pop-type=layer]');
                    }

                    /**
                     * 레이어 팝업 오픈
                     * @param {string} tmpl 템플릿 기본 값 null {Optional}
                     *                      - tmpl 이 없으면 해당 layer popup 만 활성화
                     *                      - tmpl 이 있으면 내부 내용 지우고 다시 append 하여 활성화
                     */

                }, {
                    key: 'open',
                    value: function open() {
                        var _this = this;

                        var tmpl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                        if (isInit === false) {
                            this.setElement();
                            isInit = true;
                        }

                        if (!this.$container.children().length && tmpl === null) {
                            throw new Error('[LayerPop] Nothing Contents.');
                        }

                        if (tmpl !== null) {
                            this.$container.empty().append(tmpl);
                            this.$container.find('[data-ui=close]').off().on('click', function () {
                                _this.close();
                            });
                        }

                        scrollControl.scrollOverflow(true);
                        this.$root.css('display', '');
                    }

                    /**
                     * 레이어 팝업 닫기
                     */

                }, {
                    key: 'close',
                    value: function close() {
                        this.$root.css('display', 'none');
                        scrollControl.scrollOverflow(false);
                    }

                    /**
                     * 레이어 팝업 컨텐츠를 감싸고 있는 컨테이너
                     * @return {Object} 컨테이너 jQuery
                     */

                }, {
                    key: 'getContainer',
                    value: function getContainer() {
                        return this.$container;
                    }

                    /**
                     * user instance
                     * @return {Object} User instance
                     * @static
                     */

                }], [{
                    key: 'getInstance',
                    value: function getInstance() {
                        if (!this.instance || !this.instance instanceof User) {
                            this.instance = new LayerPop();
                        }
                        return this.instance;
                    }
                }]);

                return LayerPop;
            }();

            module.exports = LayerPop.getInstance();

            /***/ }),

        /***/ 652:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


// 공통 이벤트 (jQuery Element)

            var initCommonEvent = __webpack_require__(768);

// header 좌상단 유틸
            var initHeaderUtil = __webpack_require__(772);

// header 우상단 toolbar
            var initToolbar = __webpack_require__(775);

// 최상단 배너
            var initTopBanner = __webpack_require__(776);

// GNB
            var initGNB = __webpack_require__(769);

// search area
            var initSearch = __webpack_require__(774);

            function init() {
                // console.log('assistDatas', assistDatas);

                initCommonEvent();
                initHeaderUtil();
                initToolbar();
                initTopBanner();
                initGNB();
                initSearch();
            }

            module.exports = {
                init: init
            };

            /***/ }),

        /***/ 653:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


// 사이드바의 공통 스크롤 제어

            var initFixedSideArea = __webpack_require__(777);

// up & down 버튼
            var initUpDown = __webpack_require__(779);

// 최근 본 상품
            var initRecent = __webpack_require__(778);

            function init() {
                initFixedSideArea();
                initUpDown();
                initRecent();
            }

            module.exports = {
                init: init
            };

            /***/ }),

        /***/ 7:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            var $ = __webpack_require__(0);

            /**
             * ajaxLoader
             * @author lyw31136
             * @since 2017.06
             * @since 2017.10.19 errors object 에 responseJSON 관련 항목 추가
             * @param  {String} reqUrl URL (required)
             * @param  {Object} opts ajax opts. (required)
             * @param  {function} [successClbk] successCallback. (required)
             * @param  {function} [errClbk] errorCallback. (optional)
             */

            /*module.exports = function ajaxLoader(url, method = 'GET', param = {}, successCallback = succClbk, errorCallback = errClbk) {
             $.ajax({
             url,
             method,
             type: 'json',
             param,
             success: (res, textStatus, xhr) => {
             successCallback(res, textStatus, xhr);
             },
             error: (err, textStatus) => {
             errorCallback(err, textStatus);
             },
             });
             };*/

            var ERROR_MSG = {
                // 500 오류 시 정의 된 액션이 없을때
                CONNECT: '처리 중 오류가 발생하였습니다.\n잠시 후 다시 이용해 주시기 바랍니다.',

                // API 작동 중, 중복 API 로드 시
                PROGRESS: '현재 진행중입니다.'
            };

            function getReqURL(url) {
                var ajaxSuffix = '.json';
                var reqUrl = url;

                if (url.indexOf(ajaxSuffix) === -1) {
                    reqUrl = url.indexOf('?') !== -1 ? url.replace('?', ajaxSuffix + '?') : url + ajaxSuffix;
                }

                return reqUrl;
            }

            function getAjaxOpts(reqUrl, opts, successClbk, errClbk) {

                if (!reqUrl) {
                    throw new Error('[aJax] : Not found Connect url');
                }
                if (!opts) {
                    throw new Error('[aJax] : Not found Options');
                }

                var baseOpts = {
                    type: 'GET',
                    url: getReqURL(reqUrl),
                    dataType: 'json',
                    headers: {
                        'wmp-user-agent-type': 'PC'
                    },
                    success: function success(res) {
                        if (!successClbk) {
                            throw new Error('[aJax] : Not found Success Callback');
                        }
                        return successClbk(res);
                    },
                    error: function error(xhr, status, _error) {
                        if (errClbk) {
                            // responseJSON Raw Data 추가
                            var resJsonRaw = typeof xhr.responseJSON !== 'undefined' && xhr.responseJSON !== null ? xhr.responseJSON : null;

                            // 비즈니스 진행 시 responseJSON 내의 errors(type: array)의 첫번째 컬렉션 부분을 참조
                            var resJson = resJsonRaw !== null && resJsonRaw.errors && resJsonRaw.errors.length ? resJsonRaw.errors[0] : null;

                            return errClbk({
                                xhr: xhr,
                                status: status,
                                error: _error,
                                resJsonRaw: resJsonRaw,
                                resJson: resJson,
                                msg: ERROR_MSG.CONNECT
                            });
                        }
                    }
                };

                /*
                 보내야 하는 type 이 PUT 이나 DELETE 일 경우
                 - headers 에 wmp-http-method-override 에 type을 넣어준다.
                 */
                if (opts.type === 'PUT' || opts.type === 'DELETE') {
                    var headersMethod = opts.headers || {};
                    headersMethod['wmp-http-method-override'] = opts.type;
                    opts.headers = headersMethod;
                    opts.type = 'POST';
                }

                /*
                 Request Method 가 POST 일때의, contentType 설정 변경
                 - 보내는 data가 있다면 JSON.stringify로 mapping
                 - 이미 contentType 이 있는 경우는 무시됨
                 - data 없을 경우 Front web server 내 validation 통과를 위해 빈 data 처리
                 */
                if (opts.type && opts.type === 'POST') {
                    if (!opts.data) {
                        opts.data = {};
                    }

                    if (typeof opts.contentType === 'undefined') {
                        opts.contentType = 'application/json';
                        opts.data = JSON.stringify(opts.data);
                    }
                }

                return Object.assign({}, baseOpts, opts);
            }

            function ajaxLoader() {
                var args = Array.prototype.slice.apply(arguments);
                var ajaxOptions = getAjaxOpts.apply(null, args);
                $.ajax(ajaxOptions);
            }

            module.exports = ajaxLoader;

            /***/ }),

        /***/ 730:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * 사용자 정보 객체 Module
             * @author lyw31136
             * @since 2017.06
             * @since 2017.08 - Side Type 없을 시('NONE') 변경 진행, lyw31136
             * @since 2017.10.27 - HEADER TYPE 없을 시('NONE') 변경 진행, 활성화 로직 수정, lyw31136
             * @module js/common/user
             */



            var GV = __webpack_require__(8);

            /* assist Common */
            var assistDatas = GV.get('assistData');

            /*
             Type 체크 Header, Side 타입 체크
             - /src/prerender/routes/router-api.js 기반으로 진행
             */
            var layoutTypes = GV.get('layoutTypes');
            var isHeader = layoutTypes && layoutTypes.header && layoutTypes.header !== 'NONE';
            var isSide = layoutTypes && layoutTypes.side && layoutTypes.side !== 'NONE';

            /* 공통 컨텐츠 */
            var contentHeader = __webpack_require__(652);
            var contentSide = __webpack_require__(653);

            var $ = __webpack_require__(0);

            $(function () {

                /* Header Init */
                isHeader && contentHeader.init(assistDatas);

                /* Side Init */
                isSide && contentSide.init(assistDatas);
            });

            /***/ }),

        /***/ 76:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * Placeholder
             * @author markone
             * @since 2017.07.21 - 최초작성
             */



            var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

            function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

            function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

            var $ = __webpack_require__(0);

            var _require = __webpack_require__(9),
                formatToNumber = _require.formatToNumber;

            /**
             * Default properties
             * @type {Object}
             * @property {boolean} useLabel placeholder를 지원하는 브라우저에서도 label로 사용할지에 대한 여부
             * @property {string} customClass placeholder 역할하는 label의 클래스
             */


            var defaultProps = {
                useLabel: false,
                customClass: 'placeholder'
            };

            /**
             * Placeholder
             * @param {string} targets Event targets
             * @param {Object} props Placeholder default properties
             * @class
             */

            var Placeholder = function () {
                function Placeholder(targets, props) {
                    _classCallCheck(this, Placeholder);

                    this.props = Object.assign({}, defaultProps, props);
                    this.targets = targets;

                    this.init();
                }

                _createClass(Placeholder, [{
                    key: 'init',
                    value: function init() {
                        var isPlaceholderSupported = 'placeholder' in document.createElement('input') && 'placeholder' in document.createElement('textarea');

                        if (isPlaceholderSupported && !this.props.useLabel) {
                            return;
                        }

                        this.$targets = $(this.targets);
                        this.setPlaceholder();

                        this.$targets.on({
                            focus: function focus(e) {
                                var id = e.target.id;
                                $('[for=' + id + '][data-apply-placeholder]').css('display', 'none');
                            },
                            blur: function blur(e) {
                                var id = e.target.id;
                                var value = $(e.target).val();
                                if (value === '') {
                                    $('[for=' + id + '][data-apply-placeholder]').css('display', '');
                                }
                            }
                        });
                    }

                    /**
                     * Placeholder 역할해줄 label 생성
                     */

                }, {
                    key: 'setPlaceholder',
                    value: function setPlaceholder() {
                        var _this = this;

                        var time = new Date().getTime();

                        [].concat(_toConsumableArray(this.$targets)).forEach(function (target, idx) {
                            var $target = $(target);
                            var $label = $('<label/>');
                            var id = $target.attr('id');
                            var newId = 'ph' + time + idx;
                            var placeholder = $target.attr('placeholder');
                            var inputStyle = {
                                display: $target.css('display'),
                                height: formatToNumber($target.css('height')),
                                paddingTop: formatToNumber($target.css('padding-top')),
                                paddingLeft: formatToNumber($target.css('padding-left')),
                                borderWidth: formatToNumber($target.css('border-top-width')),
                                fontSize: $target.css('font-size'),
                                lineHeight: $target.css('line-height')
                            };
                            var isInput = target.tagName === 'INPUT';
                            var isDisabled = $target.prop('disabled');

                            if ($target.siblings('[data-apply-placeholder]').length) {
                                return;
                            }

                            if (!id) {
                                $target.attr('id', newId);
                            }

                            $target.wrap('<div/>').parent().prepend($label).css({
                                'display': inputStyle.display,
                                'overflow': 'hidden',
                                'position': 'relative',
                                'vertical-align': 'top'
                            });

                            $label.addClass(_this.props.customClass).html(placeholder).attr({
                                'for': $target.attr('id'),
                                'data-apply-placeholder': ''
                            }).css({
                                'position': 'absolute',
                                'display': $target.val() ? 'none' : '',
                                'top': inputStyle.borderWidth + inputStyle.paddingTop + 'px',
                                'left': inputStyle.borderWidth + inputStyle.paddingLeft + 'px',
                                'font-size': inputStyle.fontSize,
                                'line-height': isInput ? inputStyle.height + 1 + 'px' : inputStyle.lineHeight,
                                'white-space': 'nowrap',
                                'cursor': !isDisabled && 'text'
                            });
                        });

                        this.props.useLabel && this.$targets.removeAttr('placeholder');
                    }
                }]);

                return Placeholder;
            }();

            module.exports = Placeholder;

            /***/ }),

        /***/ 768:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * Header > 공통 이벤트 설정
             * @author lyw31136
             * @since 2017.06.18
             */

            var $ = __webpack_require__(0);
            var user = __webpack_require__(42);

            /**
             * 각 element 의 event 에 대한 공통 제어
             * @return {undefined}
             */
            module.exports = function commonEvent() {
                /*
                 data-requirement=login 은 anchor 일시에는
                 로그인 이후에 href를 기준으로 redirect 하고,
                 나머지 element 는 data-href를 참조한다.
                 */
                $('[data-requirement=login]').on('click', function (e) {
                    if (!user.isLogin()) {
                        var $this = $(this);
                        var nodeName = $this[0].nodeName;
                        var urlAfterLogin = nodeName === 'A' ? $this.attr('href') : $this.attr('data-href');

                        user.toLogin(urlAfterLogin);
                        e.preventDefault();
                        return false;
                    }
                });
            };

            /***/ }),

        /***/ 769:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * GNB 제어
             * @author lyw31136
             * @since 2017.06.26
             * @since 2017.09.05 - 전체 메뉴 영역 활성화 시 전체 메뉴 이외 영역 클릭시에도 닫힐 수 있도록 진행
             * @type {Object}
             */



            var $ = __webpack_require__(0);

            var API_LIST = {
                // 전체 카테고리 API
                ALL: '/api/front/groupCategory/getAllGroupCategoryInfo'
            };

// 메뉴 fade time
            var MENU_FADE = {
                IN: 200,
                OUT: 150
            };

// elements ============================
            var $gnbViewCategoryBtn = void 0;
            var $gnbAllCategoryContainer = void 0;
            var $gnbAllCategory = void 0;
            var $doc = void 0;

// 창 활성화 여부
            var isActive = false;

            /* eslint-disable */
            var datas = {
                "data": [{
                    "gcateCd": 86,
                    "gcateNm": "P1_브랜드패션",
                    "lcateList": [{
                        "lcateCd": 100069,
                        "lcateNm": "P1_브랜드 의류"
                    }, {
                        "lcateCd": 100079,
                        "lcateNm": "P1_브랜드 신발잡화"
                    }]
                }, {
                    "gcateCd": 84,
                    "gcateNm": "P1_의류/잡화",
                    "lcateList": [{
                        "lcateCd": 100084,
                        "lcateNm": "P1_패션 의류"
                    }, {
                        "lcateCd": 100087,
                        "lcateNm": "P1_패션 신발잡화"
                    }, {
                        "lcateCd": 100090,
                        "lcateNm": "P1_언더웨어"
                    }, {
                        "lcateCd": 100091,
                        "lcateNm": "P1_화장품향수미용"
                    }]
                }, {
                    "gcateCd": 79,
                    "gcateNm": "P1_컴퓨터/디지털",
                    "lcateList": [{
                        "lcateCd": 100092,
                        "lcateNm": "P1_휴대폰카메라"
                    }, {
                        "lcateCd": 100093,
                        "lcateNm": "P1_컴퓨터/태블릿"
                    }, {
                        "lcateCd": 100094,
                        "lcateNm": "P1_가전"
                    }]
                }, {
                    "gcateCd": 82,
                    "gcateNm": "P1_식품",
                    "lcateList": [{
                        "lcateCd": 100068,
                        "lcateNm": "P1_신선식품"
                    }, {
                        "lcateCd": 100077,
                        "lcateNm": "P1_가공식품"
                    }, {
                        "lcateCd": 100078,
                        "lcateNm": "P1_건강/다이어트"
                    }, {
                        "lcateCd": 100081,
                        "lcateNm": "P1_커피/음료"
                    }]
                }, {
                    "gcateCd": 77,
                    "gcateNm": "P1_생필품",
                    "lcateList": [{
                        "lcateCd": 100082,
                        "lcateNm": "P1_화장지/세제"
                    }, {
                        "lcateCd": 100083,
                        "lcateNm": "P1_생리대/물티슈"
                    }, {
                        "lcateCd": 100085,
                        "lcateNm": "P1_바디/헤어"
                    }, {
                        "lcateCd": 100086,
                        "lcateNm": "P1_주방/생활용품"
                    }]
                }, {
                    "gcateCd": 81,
                    "gcateNm": "P1_유아동",
                    "lcateList": [{
                        "lcateCd": 100088,
                        "lcateNm": "P1_유아동 패션"
                    }, {
                        "lcateCd": 100089,
                        "lcateNm": "P1_유아동/출산"
                    }]
                }, {
                    "gcateCd": 76,
                    "gcateNm": "P1_홈데코/취미",
                    "lcateList": [{
                        "lcateCd": 100070,
                        "lcateNm": "P1_가구/침구"
                    }, {
                        "lcateCd": 100071,
                        "lcateNm": "P1_취미/문구"
                    }, {
                        "lcateCd": 100072,
                        "lcateNm": "P1_반려동물용품"
                    }]
                }, {
                    "gcateCd": 85,
                    "gcateNm": "P1_자동차/공구",
                    "lcateList": [{
                        "lcateCd": 100080,
                        "lcateNm": "P1_자동차/공구"
                    }]
                }, {
                    "gcateCd": 80,
                    "gcateNm": "P1_스포츠/건강",
                    "lcateList": [{
                        "lcateCd": 100073,
                        "lcateNm": "P1_스포츠/레저"
                    }, {
                        "lcateCd": 100074,
                        "lcateNm": "P1_건강/의료용품"
                    }]
                }, {
                    "gcateCd": 83,
                    "gcateNm": "P1_도서/교육",
                    "lcateList": [{
                        "lcateCd": 100075,
                        "lcateNm": "P1_도서/교육"
                    }]
                }]
                /* eslint-enable */

                // ajax Loader
            };var apiLoader = __webpack_require__(7);

// 전체 리스트 tmpl
            var tmpl = __webpack_require__(850);

            /**
             * 기본 이벤트
             */
            function setEvent() {
                $gnbViewCategoryBtn.on('click', function () {
                    toAllCateActive(!isActive);
                });

                $gnbAllCategory.find('[data-ui=close]').on('click', function () {
                    toAllCateActive(false);
                });
            }

            /**
             * 전체 메뉴 활성화 및 비활성화 처리 : 이벤트
             * @param {boolean} toOpen 메뉴 활성화 여부
             */
            function setAllCategoryCloseEvent(toOpen) {
                if (toOpen) {
                    var isSetEvent = false;
                    $doc.on('click', function (e) {
                        if (isSetEvent) {
                            if (!$gnbViewCategoryBtn[0].contains(e.target) && !$gnbAllCategory[0].contains(e.target)) {
                                toAllCateActive(false);
                            }
                        }
                        isSetEvent = true;
                    });
                } else {
                    $doc.off('click');
                }
            }

            /**
             * 전체 메뉴 활성화 및 비활성화 처리 : 화면 처리
             * @param  {boolean} toOpen 메뉴 활성화 여부
             */
            function toAllCateActive(toOpen) {
                if (toOpen) {
                    $gnbAllCategory.fadeIn(MENU_FADE.IN);
                    $gnbViewCategoryBtn.addClass('active');
                } else {
                    $gnbAllCategory.fadeOut(MENU_FADE.OUT);
                    $gnbViewCategoryBtn.removeClass('active');
                }

                setAllCategoryCloseEvent(toOpen);

                isActive = toOpen;
            }

            /**
             * 초기 전체 메뉴 화면 구성
             * @param {Object} data 화면 구성에 필요한 데이터 (ajax return datas)
             */
            function setLayout(data) {
                $gnbAllCategoryContainer.append(tmpl(data));
                setEvent();
            }

            /**
             * 전체 메뉴 연동
             */
            function getConnectAllLists() {
                /*setLayout(datas.data);
                 return;*/
                apiLoader(API_LIST.ALL, {}, function (res) {
                    setLayout(res.data);
                }, function () {});
            }

            /**
             * 초기 init
             */
            function init() {
                $doc = $(document);
                $gnbViewCategoryBtn = $('#_gnbViewCategoryBtn');
                $gnbAllCategoryContainer = $('#_gnbAllCategoryContainer');
                $gnbAllCategory = $('#_gnbAllCategory');

                getConnectAllLists();
            }

            module.exports = init;

            /***/ }),

        /***/ 770:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * Header > 앱 다운로드
             * @author lyw31136
             * @since 2017.06.18
             */

            var $ = __webpack_require__(0);
            var tmpl = __webpack_require__(851);
            var layerPop = __webpack_require__(606);
            var PlaceHolder = __webpack_require__(160);

            var _require = __webpack_require__(108),
                setKeyBind = _require.setKeyBind;

            var _require2 = __webpack_require__(3),
                alert = _require2.alert,
                confirm = _require2.confirm;

// api 연동 중복 체크


            var isChecking = false;

// 모바일 입력 input
            var $phoneInsertInp = void 0;

// placeholder
            var placeHolderInstance = void 0;

            var Message = {
                alreadyChecking: '이전 요청이 처리 중 입니다.'
            };

            /**
             * api 연동
             * @return {undefined}
             */
            function connectRegistAppDownload() {}
// console.log('connectRegistAppDownload');


            /**
             * 모바일 전송 진행
             * @return {undefined}
             */
            function mobileRequest() {
                // 이미 처리가 되고 있는 경우 진행하지 않음
                if (isChecking) {
                    alert(Message.alreadyChecking);
                    return;
                }

                isChecking = true;

                if (confirm('입력하신 번호로 문자가 발송됩니다.')) {
                    connectRegistAppDownload();
                } else {
                    isChecking = false;
                }
            }

            /**
             * 이벤트
             */
            function setEvent() {
                // 앱 다운로드 모바일 전송시
                $('#_appDownloadReqBtn').off().on('click', mobileRequest);

                // 모바일 키 입력 할때마다 Check
                setKeyBind($phoneInsertInp);

                // placeHolder
                placeHolderInstance = new PlaceHolder($('#_appDownloadLayer').find('[data-ui=inputArea]'));
                placeHolderInstance.init();
            }

            /**
             * 레이어 팝업 오픈 및 elements 설정
             * @return {undefined}
             */
            function openLayer() {
                isChecking = false;
                layerPop.open(tmpl());
                $phoneInsertInp = $('#_phoneInsertInp');
                setEvent();
            }

            function init() {
                $('#_appDownloadBtn').on('click', openLayer);
            }

            module.exports = init;

            /***/ }),

        /***/ 771:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * 즐겨찾기
             * @author lyw31136
             * @todo wmpBookmark 에 인자를 받아 처리하는 방식 고려
             * @since 2017.06.18
             * @since 2017.09.05 - tooltip ui 삭제, alert 처리
             * @type {Object}
             */



            var $ = __webpack_require__(0);

            var _require = __webpack_require__(3),
                alert = _require.alert;

            var GV = __webpack_require__(8);
            var ua = GV.get('ua');
            var wmpTitle = '특가대표! 위메프';
            var wmpUrl = 'http://www.wemakeprice.com/';

            function wmpBookmark() {

                var isCtrlStr = ua.os.family === 'Mac OS X' ? 'Command' : 'Ctrl';
                var alertMsg = isCtrlStr + ' + D 를 누르시면 위메프 사이트를\n즐겨찾기에 추가할 수 있습니다.';
                var browser = ua.family;

                if (browser === 'Chrome' || browser === 'Safari') {
                    alert(alertMsg);
                } else if (window.sidebar) {
                    if (window.sidebar.addPanel) {
                        window.sidebar.addPanel(wmpTitle, wmpUrl, '');
                    } else {
                        alert(alertMsg);
                    }
                } else {
                    window.external.AddFavorite(wmpUrl, wmpTitle);
                }
            }

            function init() {
                $('#_bookMarkBtn').on('click', wmpBookmark);
            }

            module.exports = init;

            /***/ }),

        /***/ 772:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


// 즐겨 찾기

            var initBookMark = __webpack_require__(771);

// 메일 구독
            var initMailCollect = __webpack_require__(773);

// 앱 다운로드
            var initAppDown = __webpack_require__(770);

            module.exports = function headerUtil() {
                initBookMark();
                initMailCollect();
                initAppDown();
            };

            /***/ }),

        /***/ 773:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * Header > 이메일 구독
             * @author lyw31136
             * @since 2017.06.18
             * @since 2017.09.06 - 이메일 구독 성공시 마이페이지 링크 연결 추가, lyw31136
             * @since 2017.09.14 - 이메일 구독 API 주소 변경, hjsjjang
             */



            var $ = __webpack_require__(0);
            var layerPop = __webpack_require__(606);
            var PlaceHolder = __webpack_require__(160);
            var apiLoader = __webpack_require__(7);

            var _require = __webpack_require__(12),
                isValidEmail = _require.isValidEmail;

            var _require2 = __webpack_require__(3),
                alert = _require2.alert;

            var tmpl = __webpack_require__(852);

            var user = __webpack_require__(42);

            var API_LIST = {
                // 메일 구독
                SUBSCRIBE: '/api/user/subscribeMailing'
            };

            var ERROR_MSG = {
                // 500 오류 시 정의 된 액션이 없을때
                CONNECT: '처리 중 오류가 발생하였습니다.\n잠시 후 다시 이용해 주시기 바랍니다.',
                VALID: '이메일을 다시 확인해주세요.',
                PROGRESS: '이전 요청이 처리 중 입니다.'
            };

// placeholder
            var placeHolderInstance = void 0;

// api 연동 중복 체크
            var isProgress = false;

// elements
            var $mailInsertInp = void 0;
            var $layerPopContainer = void 0;

// 메일 value
            var emailValue = '';

            /**
             * 이메일 구독이 성공적으로 진행되었을 경우
             * @return {undefined}
             */
            function connectRegistSubmail() {
                // 통신 마무리 일시
                isProgress = false;

                $layerPopContainer.find('[data-step=start]').css('display', 'none');
                $layerPopContainer.find('[data-step=finish]').css('display', '');
                $layerPopContainer.find('[data-ui=toMypage]').on('click', function () {
                    user.toModify();
                });
            }

            /**
             * 이메일 validation 에서 오류 발생시 display
             * @param  {string} [msg=''] 출력할 메세지, 기본값 '' {Optional}
             * @return {undefined}
             */
            function displayAlert() {
                var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

                $('#_mailValidation').text(msg);
            }

            /**
             * validation
             * @return {undefined}
             */
            function subscribeValidation() {
                emailValue = $mailInsertInp.val().trim();

                if (emailValue === '' || !isValidEmail(emailValue)) {
                    displayAlert(ERROR_MSG.VALID);
                    $mailInsertInp.focus();
                    return false;
                }

                return true;
            }

            /**
             * api 연동 진행
             * @TODO 연동 Script 삽입
             * @return {undefined}
             */
            function subscribeRequest() {
                // 이미 처리가 되고 있는 경우 진행하지 않음
                if (isProgress) {
                    alert(ERROR_MSG.PROGRESS);
                    return;
                }

                // Validation 미통과된 경우 진행하지 않음
                if (subscribeValidation() === false) {
                    return;
                }

                // display 창 초기화
                displayAlert();

                isProgress = true;

                apiLoader(API_LIST.SUBSCRIBE, {
                    type: 'POST',
                    data: { email: emailValue }
                }, function (res) {
                    if (res && res.data && res.data.resultSet && res.data.resultSet === 'SUCCESS') {
                        return connectRegistSubmail();
                    } else {
                        if (res && res.errors && res.errors.length) {
                            alert(res.errors[0].detail);
                        } else {
                            alert(ERROR_MSG.CONNECT);
                        }
                    }
                    isProgress = false;
                }, function (err) {
                    var errDatas = err.xhr.responseJSON;
                    if (errDatas && errDatas.errors && errDatas.errors.length) {
                        alert(errDatas.errors[0].detail);
                    } else {
                        alert(ERROR_MSG.CONNECT);
                    }
                    isProgress = false;
                });
            }

            /**
             * 이벤트 설정
             */
            function setEvent() {
                // 동의하고 구독하기
                $('#_mailAgreeBtn').off().on('click', subscribeRequest);

                // placeHolder
                placeHolderInstance = new PlaceHolder($('#_mailCollectLayer').find('[data-ui=inputArea]'));
                placeHolderInstance.init();
            }

            /**
             * User Data
             * @return {Object} 유저 데이터
             */
            function getUserData() {

                var isLogin = user.isLogin();
                var email = isLogin ? user.getInfo().email : '';

                return {
                    isLogin: isLogin,
                    email: email
                };
            }

            /**
             * 레이어 팝업 오픈 및 elements 설정
             * @return {undefined}
             */
            function openLayer() {
                isProgress = false;
                layerPop.open(tmpl(getUserData()));
                $mailInsertInp = $('#_mailInsertInp');
                $layerPopContainer = layerPop.getContainer();
                setEvent();
            }

            /**
             * 화면 ready 시 실행 init
             * @return {undefined}
             */
            function init() {
                $('#_mailCollectBtn').on('click', openLayer);
            }

            module.exports = init;

            /***/ }),

        /***/ 774:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * 검색창 제어
             * @author hjsjjang
             * @since 2017.10.10 - 검색창 단어 겹침 처리 > @TODO 급하게 진행된 내용이라 추후 수정 진행
             */



            var Placeholder = __webpack_require__(76);

            function init() {
                var placeholder = new Placeholder('[data-searchKeyword]');

                placeholder.init();
            }

            module.exports = init;

            /***/ }),

        /***/ 775:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";
            /**
             * toolbar (로그인 / 로그아웃 상황에 맞게 제어)
             * @author lyw31136
             * @since 2017.06.18
             * @since 2017.09.05 - 마이페이지 주소 변경
             * @type {Object}
             */



            var $ = __webpack_require__(0);
            var user = __webpack_require__(42);
            var isLogin = void 0;

            function setEvent() {
                if (isLogin) {
                    // 로그아웃
                    $('#_logOutBtn').on('click', function () {
                        return user.toLogOut();
                    });

                    // 마이페이지
                    $('#_toMypageBtn').on('click', function (e) {
                        user.toModify();
                        e.preventDefault();
                        return false;
                    });
                } else {
                    // 로그인
                    $('#_loginBtn').on('click', function () {
                        return user.toLogin();
                    });

                    // 회원 가입
                    $('#_joinBtn').on('click', function () {
                        return user.toJoin();
                    });
                }
            }

            function init() {
                isLogin = user.isLogin();
                setEvent();
            }

            module.exports = init;

            /***/ }),

        /***/ 776:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * 상단 top banner
             * @author lyw31136
             * @since 2017.06.18
             * @type {Object}
             */

            var $ = __webpack_require__(0);

// 쿠키 set
            var COOKIE_PREFIX = 'WemepEdge';
            var COOKIE_TOPBANNER = 'TopBanner';
            var COOKIE_DOMAIN = '.wemakeprice.com';

// 쿠키 이름
            var cookieName = COOKIE_PREFIX + COOKIE_TOPBANNER;
// 쿠키 value
            var cookieValue = void 0;

// 배너 닫기 버튼
            var $topBannerCloseBtn = void 0;

            function closeBanner() {
                $.cookie(cookieName, cookieValue, { expires: 365, path: '/', domain: COOKIE_DOMAIN });
                $('#_topBannerContainer').slideUp('fast');
            }

            function init() {
                $topBannerCloseBtn = $('#_topBannerCloseBtn');
                cookieValue = $topBannerCloseBtn.attr('data-banner-seq');

                // 활성화 체크
                // - 해당 배너가 활성화 되지 않으면 기능을 실행하지 않는다.
                if (!cookieValue) {
                    return;
                }

                // 쿠키가 매치되지 않거나 없는 경우에만 실행
                if (!$.cookie(cookieName) || $.cookie(cookieName) !== cookieValue) {
                    // 버튼이 있는 경우에만 실행
                    if ($topBannerCloseBtn.length > 0) {
                        $topBannerCloseBtn.on('click', closeBanner);
                    }
                }
            }

            module.exports = init;

            /***/ }),

        /***/ 777:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * 사이드 영역 스크롤 제어에 따른 position 변경
             * @author lyw31136
             * @since 2017.06.18
             * @type {Object}
             */

            var $ = __webpack_require__(0);

// elements
            var $sideInfo = void 0;
            var $sideInfoInners = void 0;

// window
            var $win = void 0;

// 사이드 바의 offset Top
            var sideInfoOffsetTop = void 0;

// top 기준 fixed일때 위쪽 여백
            var TOP_GAP_IN_FIXED = 20;

            /**
             * #_sideWrapper fixed일때 window 가로 스크롤 움직일 경우 position문제 해결
             * @return {undefined}
             */
            function fixPositionHorizon() {
                var marginLeft = $sideInfo.attr('data-state') === 'fixed' && window.innerWidth <= 1094 ? -$win.scrollLeft() : 0;
                $sideInfoInners.css('margin-left', marginLeft);
            }

            /**
             * 현재 스크롤 위치 파악 후, 그에 맞게 fixed 제어
             * @return {undefined}
             */
            function setHandler() {
                sideInfoOffsetTop = $sideInfo.offset().top;

                var winScrollTop = $win.scrollTop();
                var sideInfoOffsetTopValue = sideInfoOffsetTop - TOP_GAP_IN_FIXED;

                if (winScrollTop >= sideInfoOffsetTopValue) {
                    $sideInfo.attr('data-state', 'fixed');

                    $sideInfoInners.css({
                        position: 'fixed',
                        top: TOP_GAP_IN_FIXED
                    });
                }

                if (winScrollTop < sideInfoOffsetTopValue && $sideInfo.attr('data-state') === 'fixed') {
                    $sideInfo.removeAttr('data-state');
                    $sideInfoInners.removeAttr('style');
                }
            }

            /**
             * scroll, resize event
             */
            function setEvent() {
                $win.off().on('scroll resize', function (e) {
                    setHandler();

                    if (e.type === 'scroll') {
                        fixPositionHorizon();
                    }
                });
            }

            function init() {
                $sideInfo = $('#_sideInfo');
                $sideInfoInners = $('#_sideInfo').children();
                $win = $(window);

                setEvent();
                setHandler();
                fixPositionHorizon();
            }

            module.exports = init;

            /***/ }),

        /***/ 778:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * 최근 본 상품
             * @author lyw31136
             * @since 2017.06.21
             * @since 2017.09.26 초기 dom ready 이후 통신시 데이터가 없는 케이스에 대한 화면 처리 진행
             *        - API에서 응답하는 데이터에 빈 배열이 담긴 data를 필수로 반환할지 논의 후 수정 필요
             * @since 2017.10.19 최근본상품 리스팅 없을때 res.data = [] (API-관리개발팀 Set 완료) 반영
             *        - API에서 응답하는 데이터에 빈 배열이 담긴 data를 필수로 반환 완료
             * @type {Object}
             */

            var $ = __webpack_require__(0);
            var GV = __webpack_require__(8);
            var ua = GV.get('ua');

            var _require = __webpack_require__(3),
                alert = _require.alert;

            var API_LIST = {
                // 리스트 로드
                LIST: '/api/edge/latestSaw/list',

                // 리스트 삭제시
                UPDATE: '/api/edge/latestSaw/update'
            };

            var ERROR_MSG = {
                // 500 오류 시 정의 된 액션이 없을때
                CONNECT: '처리 중 오류가 발생하였습니다.\n잠시 후 다시 이용해 주시기 바랍니다.'
            };

            /* eslint-disable */
            var datas = [{
                "linkType": "DEAL",
                "linkInfo": "3",
                "thumb": {
                    "imgUrl": "http://view-dev.wemakeprice.com/wmp-product/3/000/0003/3_thumbnail.jpg",
                    "imgWidth": 70,
                    "imgHeight": 70
                },
                "adultLimitYn": "Y"
            }, {
                "linkType": "PROD",
                "linkInfo": "10000020",
                "thumb": {
                    "imgUrl": "http://img.wemep.co.kr/deal/6/965/2149656/1ecaefbe8474d86fa06c33ef96fc6bf7f9ef7579.jpg",
                    "imgWidth": 70,
                    "imgHeight": 70
                },
                "adultLimitYn": "N"
            }, {
                "linkType": "DEAL",
                "linkInfo": "1",
                "thumb": {
                    "imgUrl": "http://img.wemep.co.kr/deal/6/197/2191976/08a3dd82f744171f64559bcb693189dca3185a8a.jpg",
                    "imgWidth": 70,
                    "imgHeight": 70
                },
                "adultLimitYn": "N"
            }, {
                "linkType": "PROD",
                "linkInfo": "10000039",
                "thumb": {
                    "imgUrl": "http://view-dev.wemakeprice.com/wmp-product/9/003/10000039/10000039_thumbnail.jpg",
                    "imgWidth": 70,
                    "imgHeight": 70
                },
                "adultLimitYn": "N"
            }, {
                "linkType": "PROD",
                "linkInfo": "10000035",
                "thumb": {
                    "imgUrl": "http://view-dev.wemakeprice.com/wmp-product/5/003/10000035/10000035_thumbnail.jpg",
                    "imgWidth": 70,
                    "imgHeight": 70
                },
                "adultLimitYn": "Y"
            }, {
                "linkType": "DEAL",
                "linkInfo": "2",
                "thumb": {
                    "imgUrl": "http://img.wemep.co.kr/deal/8/435/2214358/c723aad41f49a9e8db59b768764c0a9f2ad84260.jpg",
                    "imgWidth": 70,
                    "imgHeight": 70
                },
                "adultLimitYn": "N"
            }];
            /* eslint-enable */

// 유저 데이터
            var user = __webpack_require__(42);

// ajax Loader
            var apiLoader = __webpack_require__(7);

// tmpl
            var tmpl = __webpack_require__(853);

// 최근 본 상품 데이터 + 유저 데이터
            var bindTotalDatas = null;

// 리스트 제어 변수 ========================
// 그룹당 리스트 개수
            var LIST_OF_PAGE = 3;
// 리스트 Total
            var listTotal = 0;
// 리스트 그룹 (LIST_OF_PAGE 개수당 1그룹)
            var totalGroup = 0;
// 현재 그룹 번호
            var nowGroup = 0;
// =====================================

// elements ============================
// 최근 본 상품 컨테이너
            var $receneListContainer = void 0;
// 최근 본 상품 리스트 개수 표시
            var $recentListCount = void 0;
// 총 리스트 개수 그룹
            var $recentTotalGroup = void 0;
// 현재 리스트 그룹
            var $recentCurrentGroup = void 0;
// 그룹 컨트롤 UI
            var $recentControllUi = void 0;
// 최근 본 상품 리스트들
            var $recentLists = void 0;
// 이전 그룹 버튼
            var $recentPrevBtn = void 0;
// 다음 그룹 버튼
            var $recentNextBtn = void 0;
// 리스트 없을시
            var $recentNoList = void 0;
// =====================================

// Browser 가 Firefox 인지 여부
            var isFF = ua.family === 'Firefox';

            function activeButtonListener($this, eventType) {
                var $classEl = $this.parent();
                if (eventType === 'mouseenter' || eventType === 'focusin') {
                    $classEl.addClass('on');
                    if (eventType === 'mouseenter' && isFF) {
                        $this.off('focusin focusout');
                    }
                }
                if (eventType === 'mouseleave' || eventType === 'focusout') {
                    $classEl.removeClass('on');
                    if (eventType === 'mouseleave' && isFF) {
                        $this.on('focusin focusout', function (e) {
                            activeButtonListener($(this), e.type);
                        });
                    }
                }
            }

            /**
             * 해당 그룹핑에 맞는 UI 를 활성화 한다.
             * @param  {number} groupN 그룹핑 번호
             * @return {undefined}
             */
            function viewList(groupN) {

                if (groupN === null) {
                    return;
                }

                var viewGroupNum = groupN - 1;
                nowGroup = groupN;

                $recentLists.each(function (index, dom) {
                    var $this = $(dom);

                    var displayOpt = parseInt($this.attr('data-group')) === viewGroupNum ? '' : 'none';
                    $this.css('display', displayOpt);
                });

                $recentCurrentGroup.text(nowGroup);
            }

            /**
             * 그룹핑 UI 계산(PREV, NEXT)
             * - 각 UI 의 액션에 맞게 현재 그룹핑 되어 있는 부분이 어떤것인가를 산출한다.
             * @param  {string} mode 'prev', 'next'
             * @return {numbrt} 그룹핑 번호
             */
            function getMovingGroup(mode) {
                if (totalGroup <= 1) {
                    return null;
                }
                var n = nowGroup;
                if (mode === 'prev') {
                    n--;
                    if (n < 1) {
                        n = totalGroup;
                    }
                }
                if (mode === 'next') {
                    n++;
                    if (n > totalGroup) {
                        n = 1;
                    }
                }

                return n;
            }

            /**
             * 리스팅 삭제시
             * @param  {string} listSeq 리스팅 고유 seq 번호
             * @return {undefined}
             */
            function deleteList(listSeq) {
                var $remoteList = $receneListContainer.find('[data-seq=' + listSeq + ']');
                var data = {
                    type: $remoteList.attr('data-link-type'),
                    itemId: $remoteList.attr('data-link-info')
                };

                //return;
                apiLoader(API_LIST.UPDATE, {
                    type: 'POST',
                    data: data,
                    cache: false
                }, function (res) {
                    // success
                    if (res && res.data && res.data.resultSet && res.data.resultSet === 'SUCCESS') {
                        $remoteList.remove();
                        listTotal -= 1;
                        recentListGroupRefresh();
                        recentListRefresh();
                    } else {
                        // error
                        alert(ERROR_MSG.CONNECT);
                    }
                }, function () {
                    // error
                    alert(ERROR_MSG.CONNECT);
                });
            }

            /**
             * 리스트 위치 재정의
             * @return {undefined}
             */
            function recentListRefresh() {
                if (listTotal === 0) {
                    recentListNothing();
                } else {
                    // 초기화
                    $recentLists = $receneListContainer.find('li');
                    $recentLists.each(function (index, dom) {
                        var $this = $(dom);
                        var idx = Math.floor(index / LIST_OF_PAGE);
                        $this.attr('data-group', idx);
                    });

                    viewList(nowGroup);
                }
            }

            /**
             * 그룹핑 재정의
             * @return {undefined}
             */
            function recentListGroupRefresh() {
                totalGroup = Math.ceil(listTotal / LIST_OF_PAGE);
                nowGroup = 1;

                $recentTotalGroup.text(totalGroup);
                $recentListCount.text(listTotal);
            }

            /**
             * UI Event
             */
            function setEvent() {
                $recentPrevBtn.on('click', function () {
                    viewList(getMovingGroup('prev'));
                });

                $recentNextBtn.on('click', function () {
                    viewList(getMovingGroup('next'));
                });

                $recentLists.find('[data-recent-ui=remove]').on('click', function (e) {
                    var $listRoot = $(this).parent();
                    /*deleteList({
                     linkType: $listRoot.attr('data-link-type'),
                     linkInfo: $listRoot.attr('data-link-info'),
                     });*/
                    deleteList($listRoot.attr('data-seq'));
                    e.preventDefault();
                    return false;
                });

                $recentLists.find('a').on('focusin focusout mouseenter mouseleave', function (e) {
                    activeButtonListener($(this), e.type);
                });
            }

            /**
             * 최근 본 상품 없을시
             * @return {undefined}
             */
            function recentListNothing() {
                $receneListContainer.remove();
                $recentNoList.css('display', '');
                $recentControllUi.css('display', 'none');
            }

            /**
             * 데이터 세팅 및 템플릿 바인딩
             * - 바인딩 시 데이터를 가공 하여 진행한다.
             * - 1. 최근 본 상품 데이터
             * - 2. user 데이터
             * - 3. 화면 제어를 위한 커스텀 데이터
             * @param {Object} recentDatas 최근 본 상품 데이터
             */
            function setLayout(recentDatas) {
                $receneListContainer = $('#_receneListContainer');
                $recentListCount = $('#_recentListCount');
                $recentTotalGroup = $('#_recentTotalGroup');
                $recentCurrentGroup = $('#_recentCurrentGroup');
                $recentControllUi = $('#_recentControllUi');
                $recentPrevBtn = $('#_recentPrevBtn');
                $recentNextBtn = $('#_recentNextBtn');
                $recentNoList = $('#_recentNoList');

                bindTotalDatas = Object.assign({}, { recent: recentDatas }, { member: user.getInfo() });

                // 데이터 가공
                bindTotalDatas.recent.forEach(function (list, index) {
                    list.custom = {
                        linkType: list.linkType === 'PROD' ? 'product' : list.linkType.toLowerCase(),
                        group: Math.floor(index / LIST_OF_PAGE),
                        isInitActive: index < LIST_OF_PAGE,
                        seq: 'list-' + index
                    };
                });

                listTotal = recentDatas.length;
                $recentListCount.text('(' + listTotal + ')');

                if (listTotal > 0) {
                    $receneListContainer.append(tmpl(bindTotalDatas));
                    $recentTotalGroup.text(listTotal);
                    $recentControllUi.css('display', '');
                    $recentLists = $receneListContainer.find('li');
                    recentListGroupRefresh();
                    viewList(nowGroup);
                    setEvent();
                } else {
                    recentListNothing();
                }
            }

            /**
             * api 통신
             * @return {undefined}
             */
            function getConnectLists() {
                /*
                 setLayout(datas);
                 return;
                 */
                apiLoader(API_LIST.LIST, {
                    cache: false
                }, function (res) {
                    setLayout(res.data);
                }, function () {
                    // error
                });
            }

            function init() {
                getConnectLists();
            }

            module.exports = init;

            /***/ }),

        /***/ 779:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * up & down 버튼
             * @author lyw31136
             * @since 2017.06.21
             * @type {Object}
             */

            var $ = __webpack_require__(0);

// window, document
            var $win = void 0;
            var $doc = void 0;

            function getContentSize() {
                return Math.max($doc.height(), $win.height());
            }

            function toScrollTop() {
                // top 버튼 클릭시 addition, nav top:0으로 조정
                var $controlEle = $('#_contents').find('[data-wscrollspy-addition]').add($('#_contents').find('[data-wscrollspy-nav]'));
                $controlEle.css('top', 0);

                $win.scrollTop(0);
            }

            function toScrollDown() {
                var contentHeight = getContentSize();
                var winHeight = $win.height();
                var footerOffsetTop = $('#_footer').offset().top;

                var scrollTopValue = winHeight < contentHeight ? footerOffsetTop : contentHeight;
                $win.scrollTop(scrollTopValue);
            }

            function init() {
                $win = $(window);
                $doc = $(document);
                $('#_upBtn').on('click', toScrollTop);
                $('#_downBtn').on('click', toScrollDown);
            }

            module.exports = init;

            /***/ }),

        /***/ 8:
        /***/ (function(module, exports) {

            module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

            /***/ }),

        /***/ 850:
        /***/ (function(module, exports, __webpack_require__) {

            var Handlebars = __webpack_require__(2);
            function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
            module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
                var stack1, alias1=depth0 != null ? depth0 : {};

                return ((stack1 = __default(__webpack_require__(1)).call(alias1,__default(__webpack_require__(158)).call(alias1,(data && data.index),5,{"name":"math/modulus","hash":{},"data":data}),"===",0,{"name":"compare","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
                    + "\n  <li>\n    <dl>\n      <dt>"
                    + container.escapeExpression(container.lambda((depth0 != null ? depth0.gcateNm : depth0), depth0))
                    + "</dt>\n      <dd>\n"
                    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lcateList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
                    + "      </dd>\n    </dl>\n  </li>\n"
                    + ((stack1 = __default(__webpack_require__(1)).call(alias1,__default(__webpack_require__(158)).call(alias1,(data && data.index),5,{"name":"math/modulus","hash":{},"data":data}),"===",4,{"name":"compare","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
                    + "\n";
            },"2":function(container,depth0,helpers,partials,data) {
                return "<ul>";
            },"4":function(container,depth0,helpers,partials,data) {
                var stack1;

                return ((stack1 = __default(__webpack_require__(1)).call(depth0 != null ? depth0 : {},(data && data.index),"<",6,{"name":"compare","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
            },"5":function(container,depth0,helpers,partials,data) {
                var alias1=container.escapeExpression, alias2=container.lambda;

                return "          <a href=\""
                    + alias1(__default(__webpack_require__(10)).call(depth0 != null ? depth0 : {},"CATEGORY",(depth0 != null ? depth0.lcateCd : depth0),{"name":"urlRules","hash":{},"data":data}))
                    + "\" data-lcate-cd=\""
                    + alias1(alias2((depth0 != null ? depth0.lcateCd : depth0), depth0))
                    + "\">"
                    + alias1(alias2((depth0 != null ? depth0.lcateNm : depth0), depth0))
                    + "</a>\n";
            },"7":function(container,depth0,helpers,partials,data) {
                return "</ul>";
            },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
                var stack1;

                return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
            },"useData":true});

            /***/ }),

        /***/ 851:
        /***/ (function(module, exports, __webpack_require__) {

            var Handlebars = __webpack_require__(2);
            function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
            module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
                return "<div class=\"layer_pop_wrap com\" style=\"width:420px\" id=\"_appDownloadLayer\">\n  <div class=\"layer_pop_head\">\n    <h4 class=\"tit t_app_down\">위메프 앱다운</h4>\n  </div>\n  <div class=\"layer_pop_body\">\n    <div class=\"com_title\">\n      <p class=\"tit t_app_txt\">지금 위메프 APP 다운받자! 모바일로 위메프를 쉽고 편리하게!</p>\n    </div>\n    <div class=\"com_contents\">\n      <p class=\"title_1\">SMS로 바로 다운받기</p>\n      <p class=\"pt_08\">입력하신 번호로 위메프 APP다운 링크가 발송됩니다.</p>\n      <div class=\"input_area\" data-ui=\"inputArea\">\n        <label for=\"_phoneInsertInp\" class=\"lbl_type\" data-placeholder=\"휴대폰 번호를 입력하세요\" data-placeholder-for=\"text\"></label>\n        <input type=\"text\" id=\"_phoneInsertInp\" data-placeholder-input=\"text\" class=\"inpt_default\" value=\"\" style=\"width:255px;\" maxlength=\"13\">\n        <a href=\"javascript:void(0);\" class=\"btn_sys red_m\" id=\"_appDownloadReqBtn\">전송</a>\n      </div>\n      <ul class=\"list_type\">\n        <li>SMS발송은 무료이며, 개인정보는 저장하지 않습니다.</li>\n      </ul>\n      <div class=\"com_contents_1\">\n        <p class=\"title_1\">QR코드로 다운받기</p>\n        <p class=\"pt_08\">QR코드를 스캔하면 앱 설치페이지로 이동합니다.</p>\n        <span class=\"qr_code\"><img src=\"//image.wemakeprice.com/images/resources_v2/front/popup/app_down_qrcode.png\" alt=\"app 다운로드 QR코드\" /></span>\n      </div>\n    </div>\n  </div>\n  <a href=\"javascript:void(0);\" class=\"ico layer_close\" data-ui=\"close\">레이어 팝업 닫기</a>\n</div>\n";
            },"useData":true});

            /***/ }),

        /***/ 852:
        /***/ (function(module, exports, __webpack_require__) {

            var Handlebars = __webpack_require__(2);
            function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
            module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
                return "disabled=\"disabled\"";
            },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
                var stack1, helper, alias1=depth0 != null ? depth0 : {};

                return "<div class=\"layer_pop_wrap com\" style=\"width:420px\" id=\"_mailCollectLayer\">\n  <div class=\"layer_pop_head\">\n    <h4 class=\"tit t_email\">이메일 구독</h4>\n  </div>\n  <div class=\"layer_pop_body\" data-step=\"start\">\n    <div class=\"com_title\">\n      <p class=\"tit t_email_txt_1\">위메프 오늘의 특가정보를 놓치지 마세요</p>\n    </div>\n    <div class=\"com_contents type2\">\n      <div class=\"input_area\" data-ui=\"inputArea\">\n        <label for=\"_mailInsertInp\" class=\"lbl_type\" data-placeholder=\"이메일을 입력하세요.\" data-placeholder-for=\"text\"></label>\n        <input\n          type=\"text\"\n          data-placeholder-input=\"text\"\n          id=\"_mailInsertInp\"\n          class=\"inpt_default\"\n          value=\""
                    + container.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
                    + "\"\n          style=\"width:330px;\"\n          maxlength=\"30\"\n          "
                    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLogin : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
                    + "\n        >\n        <!-- 경고 창 -->\n        <p class=\"err_email\" id=\"_mailValidation\"></p>\n      </div>\n    </div>\n    <div class=\"com_contents_1 type2\">\n      <p class=\"title_2\">할인 정보 안내를 위한 이메일 수집 및 광고메일 수신에 동의합니다.</p>\n      <ul class=\"list_type\">\n        <li>수집 및 이용 목적 : 광고 메일 발송 및 마케팅 활용</li>\n        <li>수집항목 : 이메일</li>\n        <li>보유 및 이용기간 : 광고메일 수신거부 시 및 회원의 경우 회원탈퇴 시</li>\n      </ul>\n    </div>\n    <div class=\"com_btn_area\">\n      <a href=\"javascript:void(0);\" class=\"btn_sys red_b\" id=\"_mailAgreeBtn\">동의하고 구독하기</a>\n    </div>\n  </div>\n\n  <div class=\"layer_pop_body\" data-step=\"finish\" style=\"display:none;\">\n    <div class=\"com_title\">\n      <p class=\"tit t_email_txt_3\">고객님의 이메일이 등록 완료 되었습니다. 이제 위메프 오늘의 특가 정보를 매일 받아 보실 수 있습니다.</p>\n    </div>\n    <div class=\"com_contents\">\n      <ul class=\"list_type type2\">\n        <li>회원은 <a href=\"javascript:void(0);\" class=\"link\" data-ui=\"toMypage\">마이페이지>회원정보수정</a>에서 이메일 수신동의 상태를 변경 할 수 있습니다.</li>\n        <li>비회원은 발송된 이메일 하단의 수신거부 버튼을 통해 수신거부 할 수 있습니다.</li>\n      </ul>\n    </div>\n    <div class=\"com_btn_area\">\n      <a href=\"javascript:void(0);\" class=\"btns pop_close\" data-ui=\"close\">닫기</a>\n    </div>\n  </div>\n\n  <a href=\"javascript:void(0);\" class=\"ico layer_close\" data-ui=\"close\">레이어 팝업 닫기</a>\n</div>\n";
            },"useData":true});

            /***/ }),

        /***/ 853:
        /***/ (function(module, exports, __webpack_require__) {

            var Handlebars = __webpack_require__(2);
            function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
            module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
                var stack1;

                return "  <ul class=\"list_today\">\n"
                    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recent : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
                    + "  </ul>\n";
            },"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
                var stack1;

                return ((stack1 = __default(__webpack_require__(1)).call(depth0 != null ? depth0 : {},(data && data.index),"<",15,{"name":"compare","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
            },"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
                var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

                return "      <li\n        data-group=\""
                    + alias2(alias1(((stack1 = (depth0 != null ? depth0.custom : depth0)) != null ? stack1.group : stack1), depth0))
                    + "\"\n        data-seq=\""
                    + alias2(alias1(((stack1 = (depth0 != null ? depth0.custom : depth0)) != null ? stack1.seq : stack1), depth0))
                    + "\"\n        data-link-type=\""
                    + alias2(alias1(((stack1 = (depth0 != null ? depth0.custom : depth0)) != null ? stack1.linkType : stack1), depth0))
                    + "\"\n        data-link-info=\""
                    + alias2(alias1((depth0 != null ? depth0.linkInfo : depth0), depth0))
                    + "\"\n        "
                    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.custom : depth0)) != null ? stack1.isInitActive : stack1),{"name":"unless","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
                    + "\n      >\n        <a href=\""
                    + alias2(__default(__webpack_require__(10)).call(alias3,(depth0 != null ? depth0.linkType : depth0),(depth0 != null ? depth0.linkInfo : depth0),{"name":"urlRules","hash":{},"data":data}))
                    + "\" class=\"thumb\">\n          <span class=\"frame\"></span>\n"
                    + ((stack1 = __default(__webpack_require__(1)).call(alias3,(depth0 != null ? depth0.adultLimitYn : depth0),"===","Y",{"name":"compare","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
                    + "        </a>\n        <a href=\"javascript:void(0);\" class=\"lay_ico btn_close\" data-recent-ui=\"remove\">삭제</a>\n      </li>\n";
            },"4":function(container,depth0,helpers,partials,data) {
                return "style=\"display:none;\"";
            },"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
                var stack1;

                return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = (depths[1] != null ? depths[1].member : depths[1])) != null ? stack1.isAdult : stack1),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
            },"7":function(container,depth0,helpers,partials,data) {
                return "              <span class=\"adult_layer\">성인</span>\n";
            },"9":function(container,depth0,helpers,partials,data) {
                var stack1;

                return "              <img src=\""
                    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.thumb : depth0)) != null ? stack1.imgUrl : stack1), depth0))
                    + "\" alt=\"최근 본 상품\" />\n";
            },"11":function(container,depth0,helpers,partials,data) {
                var stack1;

                return "            <img src=\""
                    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.thumb : depth0)) != null ? stack1.imgUrl : stack1), depth0))
                    + "\" alt=\"최근 본 상품\" />\n";
            },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
                var stack1;

                return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.recent : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
            },"useData":true,"useDepths":true});

            /***/ }),

        /***/ 9:
        /***/ (function(module, exports, __webpack_require__) {

            "use strict";


            /**
             * String의 양옆의 공백을 삭제한다.
             *
             * @memberOf module:utils
             *
             * @param  {string} obj 양옆의 공백을 줄일 대상 String
             * @return {strung} trim result String
             *
             */

            exports.trim = function (obj) {
                var natTrim = String.prototype.trim;
                if (natTrim) {
                    return natTrim.call(obj);
                }
                return obj.replace(/^\s+|\s+$/gm, '');
            };

            /**
             * 숫자의 3자리수마다 ,를 찍는다.
             *
             * @memberOf module:utils
             *
             * @param  {number} value 양옆의 공백을 줄일 대상 String
             * @return {string} 3자리 수마다 ,를 넣은 string
             *
             */
            exports.formatToAmount = function (value) {
                var transValue = String(Number(value));
                var reg = /(^[+-]?\d+)(\d{3})/;
                transValue += '';

                while (reg.test(transValue)) {
                    transValue = transValue.replace(reg, '$1' + ',' + '$2');
                }
                return transValue;
            };

            /**
             * ,가 들어가 있는 String을 숫자로 바꾸어준다.
             *
             * @memberOf module:utils
             *
             * @param  {string} value ,가 들어가 있는 String
             * @return {number} 치환한 숫자
             *
             */
            exports.formatToNumber = function (value) {
                var isMinus = String(value).indexOf('-') === 0 ? true : false;
                var transValue = String(value).replace(/[^0-9]/g, '');
                if (isMinus) {
                    transValue = '-' + transValue;
                }
                return Number(transValue);
            };

            /**
             * \r, \n, \r\n, \n\r 등을 br 태그로 치환
             *
             * @memberOf module:utils
             *
             * @param  {string} value 치환할 string
             * @return {string} <br>태그가 치환된 string
             */
            exports.rn2br = function (value) {
                return value.replace(/(\r\n|\n\r|\n|\r)/gm, '<br/>');
            };

            /**
             * 10 미만은 앞에 0을 붙이고 10 이상은 그대로 리턴
             * @param  {number} value 숫자
             * @return {string} 변환된 숫자
             */
            exports.digit = function (value) {
                return value < 10 ? '0' + value : value;
            };

            /***/ })

        /******/ });
});
//# sourceMappingURL=layout-common-bundle.js.map