function throttle(fn, wait) {
  let last = 0
  return function (...args) {
    let now = +new Date()
    if(now - last>wait){
      last = now
      fn.apply(this, args)
    }
  }
}

// test
setInterval(
  throttle(() => {
    console.log(1)
  },3000),
  1000
)
