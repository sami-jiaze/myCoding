function shuffleArray(array) {
  let len = array.length - 1
  while (len > 0) {
    let random = Math.floor(Math.random() * len)
    let temp = array[random]
    array[random] = array[len]
    array[len] = temp
    len--
  }
  return array
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(shuffleArray(arr))
