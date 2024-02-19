"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepCopy = deepCopy;
exports.isFunction = isFunction;
// 深拷贝
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function isFunction(func) {
  if (!func || toString.call(func) !== '[object Function]') return false;
  return true;
}