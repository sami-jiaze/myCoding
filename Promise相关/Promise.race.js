Promise.race = function (arr) {
  return new Promise((res, rej) => {
    let len = arr.length
    if (len == 0) return
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i])
        .then(data => {
          res(data)
          return
        })
        .catch(err => {
          rej(err)
          return
        })
    }
  })
}
