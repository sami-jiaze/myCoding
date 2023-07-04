/*
  比较相邻元素，如果第一个比第二大就交换它们两个;
  对每一对相邻元素做相同的工作，从开始第一对到结尾的最后一对
  这样在最后的元素应该会是最大的数
  
  算法稳定性: 冒牌排序是稳定性的。
  时间复杂度:O(n^2)
*/

let arr = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 为什么-i：因为前i个无需继续在遍历; 为什么-1：防止 arr[j+1]越界
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let temp = arr[j]
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))
