function compareString(A: string, B: string): string {
  const m = A.length
  const n = B.length

  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  )

  let maxLength = 0

  let endIndexA = 0

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j]
          endIndexA = i - 1
        }
      } else {
        dp[i][j] = 0
      }
    }
  }

  const commonSubstring = A.slice(endIndexA - maxLength + 1, endIndexA + 1)

  return commonSubstring
}

console.log(compareString("AKA", "AKASHI"))
console.log(compareString("KANGAROO", "KANG"))
console.log(compareString("KI", "KIJANG"))
console.log(compareString("KUPU-KUPU", "KUPU"))
console.log(compareString("ILALANG", "ILA"))
