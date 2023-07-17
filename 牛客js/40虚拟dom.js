// 请补全JavaScript代码，要求将对象参数转换为真实的DOM结构并返回。
// 注意：
// 1. tag为标签名称、props为属性、children为子元素、text为标签内容

var vnode = {
  tag: 'ul',
  props: {
    class: 'list'
  },
  text: '',
  children: [
    {
      tag: 'li',
      props: {
        class: 'item'
      },
      text: '',
      children: [
        {
          tag: undefined,
          props: {},
          text: '牛客网',
          children: []
        }
      ]
    },
    {
      tag: 'li',
      props: {},
      text: '',
      children: [
        {
          tag: undefined,
          props: {},
          text: 'nowcoder',
          children: []
        }
      ]
    }
  ]
}

const _createElm = vnode => {
  // 补全代码
  let { tag, props, text, children } = vnode
  if (typeof tag == 'string') {
    vnode.el = document.createElement(tag)
    setAttr(vnode.el, props)
    vnode.el.appendChild(document.createTextNode(text))
    children.forEach(child => {
      vnode.el.appendChild(_createElm(child))
    })
  } else {
    vnode.el = document.createTextNode(text)
  }
  return vnode.el
}

function setAttr(target, attrs) {
  for (let k in attrs) {
    target.setAttribute(k, attrs[k])
  }
}

// test
function test() {
  var dom = _createElm(vnode)
  var result = dom.className == 'list'
  return result
}
console.log(test())
