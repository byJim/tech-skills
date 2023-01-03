//https://www.hackerrank.com/challenges/max-array-sum
function maxSubsetSum(arr) {
  let max = 0;
  let max2 = 0;
  let max3 = 0;
  for (let i = 0; i < arr.length; i++) {
    max3 = Math.max(max, max2 + arr[i]);
    max2 = max;
    max = max3;
  }
  return max;
}
