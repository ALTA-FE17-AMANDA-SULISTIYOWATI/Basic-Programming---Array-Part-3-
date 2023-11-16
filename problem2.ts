function joinArrayRemoveDuplicate(arrayA: string[], arrayB: string[]) {
  const mergedSet = new Set([...arrayA, ...arrayB])
  const mergedArray: string[] = Array.from(mergedSet)
  return mergedArray
}

console.log(
  joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])
)

console.log(
  joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"])
)

console.log(
  joinArrayRemoveDuplicate(
    ["football", "basketball"],
    ["basketball", "football"]
  )
)
