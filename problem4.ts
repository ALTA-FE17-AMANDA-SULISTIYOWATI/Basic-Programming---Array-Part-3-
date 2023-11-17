const calculateMean = (arr: number[]): number => {
  const sum = arr.reduce((acc, val) => acc + val, 0)
  const mean = sum / arr.length
  return Math.round(mean * 10) / 10
}

const calculateMedian = (arr: number[]): number => {
  const n = arr.length
  if (n % 2 === 0) {
    const median = (arr[n / 2 - 1] + arr[n / 2]) / 2
    return Math.round(median * 10) / 10
  } else {
    return arr[Math.floor(n / 2)]
  }
}

const retrieveMeanAndMedian = (optInput: number[] = [1, 2, 3, 4]): void => {
  const meanResult = calculateMean(optInput)
  const medianResult = calculateMedian(optInput)

  console.log(meanResult, medianResult)
}

retrieveMeanAndMedian([1, 2, 3, 4])
retrieveMeanAndMedian([1, 2, 3, 4, 5])
retrieveMeanAndMedian([7, 8, 9, 13, 15])
retrieveMeanAndMedian([10, 20, 30, 40, 50])
retrieveMeanAndMedian([15, 20, 30, 60, 120])

// retrieveMeanAndMedian() user doesn't input any array params => use default value [1, 2, 3, 4]
// retrieveMeanAndMedian([21, 32, 78, 41, 65, 61, 70, 18, 39]) can be use whatever the value params, BUT should be in type Array of number
