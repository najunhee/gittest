/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// UNUSED EXPORTS: default

;// CONCATENATED MODULE: ./common/js/abstract/dom.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * div를 기본 태그로 설정한 Element를 생성하는 컴포넌트
 */
var Dom = /*#__PURE__*/function () {
  /**
   * div Element 하나를 생성하고 this._dom 변수에 지정한다
   */
  function Dom() {
    var _this = this;

    _classCallCheck(this, Dom);

    _defineProperty(this, "convertCss", function (css) {
      var styleString = Object.entries(css).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return "".concat(k, ":").concat(v);
      }).join(';');
      return styleString;
    });

    _defineProperty(this, "delete", function () {
      _this.dom.remove();
    });

    _defineProperty(this, "addEvent", function (event, callback) {
      _this.dom.addEventListener(event, function (ev) {
        callback(ev);
      });
    });

    _defineProperty(this, "setMargin", function (smargin) {
      _this.dom.style.margin = smargin;
    });

    this._dom = document.createElement("div");
  }
  /**
   * this._dom 변수를 리턴하는 getter 함수
   */


  _createClass(Dom, [{
    key: "dom",
    get: function get() {
      return this._dom;
    }
    /**
     * this._dom 변수를 지정하는 setter 함수
     */
    ,
    set: function set(newDom) {
      if (newDom instanceof Element) {
        this._dom = newDom;
      } else {
        throw new Error("parameter is not an Element");
      }
    }
    /**
     * dom Element의 id를 지정하는 setter 함수
     */

  }, {
    key: "id",
    get:
    /**
     * dom Element의 id를 리턴하는 getter 함수
     */
    function get() {
      return this.dom.id ? this.dom.id : null;
    }
    /**
     * dom Element의 class를 지정하는 setter 함수
     */
    ,
    set: function set(new_id) {
      this.dom.id = new_id;
    }
  }, {
    key: "class",
    get:
    /**
     * dom Element의 class를 리턴하는 getter 함수
     */
    function get() {
      return this.dom.className ? this.dom.className : null;
    }
    /**
     * dom Element안에 파라미터를 집어넣는 setter 함수
     */
    ,
    set: function set(new_class) {
      this.dom.className = new_class;
    }
  }, {
    key: "render",
    get:
    /**
     * dom Element안의 innerHTML을 리턴하는 getter 함수
     */
    function get() {
      return this.dom.innerHTML;
    }
    /**
     * Object 형태의 css 상수를 태그의 style에 맞게 변형시켜주는 함수
     */
    ,
    set: function set(inner) {
      this.dom.innerHTML = inner;
    }
  }, {
    key: "append",
    value:
    /**
     * dom Element를 파라미터인 parent안에 집어넣는 함수
     */
    function append(parent) {
      if (parent instanceof Element) {
        parent.appendChild(this.dom);
      } else {
        throw new Error("parent parameter is not an Element");
      }
    }
    /**
     * dom Element를 삭제하는 함수
     */

  }]);

  return Dom;
}();


;// CONCATENATED MODULE: ./home/js/sample.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function sample_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sample_createClass(Constructor, protoProps, staticProps) { if (protoProps) sample_defineProperties(Constructor.prototype, protoProps); if (staticProps) sample_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function sample_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function sample_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Popup = /*#__PURE__*/function (_Dom) {
  _inherits(Popup, _Dom);

  var _super = _createSuper(Popup);

  function Popup() {
    var _this;

    sample_classCallCheck(this, Popup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    sample_defineProperty(_assertThisInitialized(_this), "createRact", function () {
      var SAMPLE_CSS = {
        "border": "1.5px solid #432918",
        "height": "100px",
        "background": "red"
      };
      var lect = "<div>\n                        <div style=\"".concat(_this.convertCss(SAMPLE_CSS), "\">\n                        </div>\n                    </div>");
      _this.render = lect;
    });

    return _this;
  }

  return sample_createClass(Popup);
}(Dom);


var pop = new Popup();
pop.createRact();
pop.append(document.body);
/******/ })()
;