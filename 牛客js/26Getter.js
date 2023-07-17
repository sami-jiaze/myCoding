// 请补全JavaScript代码，完成名为"Rectangle"的矩形类。要求如下：
// 1. 构造函数只包含两个参数，依次为"height"、"width"
// 2. 设置Getter，当获取该对象的"area"属性时，返回该对象"height"与"width"属性的乘积

// 输入： new Rectangle(12,12).area
// 输出： 144

class Rectangle {
  // 补全代码
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  get area() {
    return this.width * this.height
  }
}

// test
function test() {
  let rect = new Rectangle(12, 12)
  return rect.area === 144
}
console.log(test())
