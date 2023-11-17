function removeDuplicate(array: number[]): number {
  if (array.length === 0) {
    return 0
  }

  let result: number = 1

  for (let i: number = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      array[result] = array[i]
      result++
    }
  }
  return result
}

console.log(removeDuplicate([2, 3, 3, 3, 6, 9, 9]))
console.log(removeDuplicate([2, 3, 4, 5, 6, 9, 9]))
console.log(removeDuplicate([2, 2, 2, 11]))
console.log(removeDuplicate([1, 1, 2, 2, 3, 3, 4, 4]))
console.log(removeDuplicate([1, 2, 3, 11, 11]))
