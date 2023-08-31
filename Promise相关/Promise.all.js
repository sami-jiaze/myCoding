// 成功的时候返回的是一个结果数组
// 结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的
// 而失败的时候则返回最先被reject失败状态的值
// 只要有一个失败都是返回失败结果

Promise.all = function (arr) {
  return new Promise((res1, rej1) => {
    let count = 0
    let resarr = []
    let len = arr.length
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then(result => {
          resarr[i] = result
          count++
          if (count == len) {
            res1(resarr)
          }
        })
        .catch(e => {
          rej1(e)
        })
    }
  })
}

//test
const p1 = Promise.resolve(1)
const p2 = new Promise(resolve => {
  setTimeout(() => resolve(2), 3000)
})
const p3 = new Promise(resolve => {
  setTimeout(() => resolve(3), 1000)
})

const p4 = Promise.reject('err4')
// const p5 = Promise.reject('err5')

// const p11 = Promise.all([p1, p2, p3])
//   .then(console.log) // [ 1, 2, 3 ]
//   .catch(console.log)

// 2. 有一个Promise失败了
const p12 = Promise.all([p1, p2, p4]).then(console.log).catch(console.log) // err4
