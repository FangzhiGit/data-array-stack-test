"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _common = require("./common");
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// 数组堆栈基类
var ArrayBasedStructure = /*#__PURE__*/function () {
  function ArrayBasedStructure() {
    _classCallCheck(this, ArrayBasedStructure);
    this.dataStack = [];
  }
  // 获取所有数据
  _createClass(ArrayBasedStructure, [{
    key: "getAllItems",
    value: function getAllItems() {
      return (0, _common.deepCopy)(this.dataStack);
    }
    // 获取数组大小
  }, {
    key: "size",
    get: function get() {
      return this.dataStack.length;
    }
    // 判断数组是否为空
  }, {
    key: "isEmpty",
    get: function get() {
      return this.dataStack.length === 0;
    }
    // 清空数组元素
  }, {
    key: "clear",
    value: function clear() {
      this.dataStack.length = 0;
    }
  }]);
  return ArrayBasedStructure;
}(); // 堆栈
var Stack = /*#__PURE__*/function (_ArrayBasedStructure) {
  _inherits(Stack, _ArrayBasedStructure);
  function Stack() {
    _classCallCheck(this, Stack);
    return _callSuper(this, Stack);
  }

  /**
   *将新元素入栈
   *
   * @param {*} element
   * @memberof Stack
   */
  _createClass(Stack, [{
    key: "push",
    value: function push(element) {
      return this.dataStack.push(element);
    }

    /**
     *栈顶元素出栈
     *
     * @returns 栈顶元素
     * @memberof Stack
     */
  }, {
    key: "pop",
    value: function pop() {
      return this.dataStack.pop();
    }

    /**
     *查看栈顶元素
     *
     * @returns 栈顶元素
     * @memberof Stack
     */
  }, {
    key: "peek",
    value: function peek() {
      if (!this.dataStack.length) return undefined;
      return (0, _common.deepCopy)(this.dataStack[this.dataStack.length - 1]);
    }

    /**
     *遍历栈结构
     *
     * @param {function} callback
     * @param {boolean} [reversal=false]
     * @memberof Stack
     */
  }, {
    key: "traverse",
    value: function traverse(callback) {
      var reversal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // 检查回调函数
      if (!(0, _common.isFunction)(callback)) return;
      var items = this.getAllItems(this.dataStack);
      var from = reversal ? items.length - 1 : 0;
      var to = reversal ? 0 : items.length - 1;
      // 循环条件
      var loopCondition = function loopCondition(current) {
        if (reversal) {
          return current >= to;
        } else {
          return current <= to;
        }
      };
      // 游标前进
      var stepIn = function stepIn(current) {
        if (reversal) {
          return current - 1;
        } else {
          return current + 1;
        }
      };

      // 进行遍历
      for (var index = from; loopCondition(index); index = stepIn(index)) {
        var element = items[index];
        callback(element, index);
      }
    }

    /**
     *转为字符串
     *
     * @returns
     * @memberof Stack
     */
  }, {
    key: "toString",
    value: function toString() {
      return this.dataStack.map(function (element) {
        return element.toString();
      }).join(' ');
    }
  }]);
  return Stack;
}(ArrayBasedStructure);
var _default = exports["default"] = Stack;