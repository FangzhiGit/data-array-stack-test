
// 深拷贝
export function deepCopy(obj){
  return JSON.parse(JSON.stringify(obj))
}
export function isFunction (func) {
  if (!func || toString.call(func) !== '[object Function]') return false
  return true
}