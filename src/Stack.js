
import { deepCopy, isFunction } from "./common";

// 数组堆栈基类
class ArrayBasedStructure {
  constructor() {
    this.dataStack = [];
  }
  // 获取所有数据
  getAllItems() {
    return deepCopy(this.dataStack)
  }
  // 获取数组大小
  get size() {
    return this.dataStack.length
  }
  // 判断数组是否为空
  get isEmpty() {
    return this.dataStack.length === 0
  }
  // 清空数组元素
  clear() {
    this.dataStack.length = 0
  }

}

// 堆栈
class Stack extends ArrayBasedStructure {
  constructor() {
    super()
  }

  /**
   *将新元素入栈
   *
   * @param {*} element
   * @memberof Stack
   */
  push(element) {
    return this.dataStack.push(element)
  }

  /**
   *栈顶元素出栈
   *
   * @returns 栈顶元素
   * @memberof Stack
   */
  pop() {
    return this.dataStack.pop()
  }

  /**
   *查看栈顶元素
   *
   * @returns 栈顶元素
   * @memberof Stack
   */
  peek() {
    if (!this.dataStack.length) return undefined
    return deepCopy(this.dataStack[this.dataStack.length - 1])
  }

  /**
   *遍历栈结构
   *
   * @param {function} callback
   * @param {boolean} [reversal=false]
   * @memberof Stack
   */
  traverse(callback, reversal = false) {
    // 检查回调函数
    if (!isFunction(callback)) return

    var items = this.getAllItems(this.dataStack)
    var from = reversal ? items.length - 1 : 0
    var to = reversal ? 0 : items.length - 1
    // 循环条件
    var loopCondition = function (current) {
      if (reversal) {
        return current >= to
      } else {
        return current <= to
      }
    }
    // 游标前进
    var stepIn = function (current) {
      if (reversal) {
        return current - 1
      } else {
        return current + 1
      }
    }

    // 进行遍历
    for (var index = from; loopCondition(index); index = stepIn(index)) {
      var element = items[index];
      callback(element, index)
    }
  }

  /**
   *转为字符串
   *
   * @returns
   * @memberof Stack
   */
  toString() {
    return this.dataStack.map(element => element.toString()).join(' ')
  }
}
export default Stack