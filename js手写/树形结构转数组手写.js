let tree = [
  {
    id: '01',
    name: '张大大',
    pid: '',
    job: '项目经理',
    children: [
      {
        id: '02',
        name: '小亮',
        pid: '01',
        job: '产品leader',
        children: [
          { id: '07', name: '小丽', pid: '02', job: '产品经理', children: [] },
          { id: '08', name: '大光', pid: '02', job: '产品经理', children: [] }
        ]
      },
      { id: '03', name: '小美', pid: '01', job: 'UIleader', children: [{ id: '09', name: '小高', pid: '03', job: 'UI设计师', children: [] }] },
      {
        id: '04',
        name: '老马',
        pid: '01',
        job: '技术leader',
        children: [
          { id: '10', name: '小刘', pid: '04', job: '前端工程师', children: [] },
          { id: '11', name: '小华', pid: '04', job: '后端工程师', children: [] },
          { id: '12', name: '小李', pid: '04', job: '后端工程师', children: [] }
        ]
      },
      {
        id: '05',
        name: '老王',
        pid: '01',
        job: '测试leader',
        children: [
          { id: '13', name: '小赵', pid: '05', job: '测试工程师', children: [] },
          { id: '14', name: '小强', pid: '05', job: '测试工程师', children: [] }
        ]
      },
      { id: '06', name: '老李', pid: '01', job: '运维leader', children: [{ id: '15', name: '小涛', pid: '06', job: '运维工程师', children: [] }] }
    ]
  }
]

function treeToList(data) {
  let res = []
  const dfs = tree => {
    tree.forEach(item => {
      if (item.children) {
        dfs(item.children)
        delete item.children
      }
      res.push(item)
    })
  }
  dfs(data)
  return res
}

treeToList(tree)