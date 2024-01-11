// function maxProfitBasic(weightArr, profitArr, maxWeight) {
//   let maxProfit = 0;
//   for (let i = 0; i < weightArr.length; i++) {
//     let currentWeight = weightArr[i];
//     let currentProfit = profitArr[i];
//     for (let j = i + 1; j < weightArr.length; j++) {
//       currentWeight += weightArr[j];
//       if (currentWeight > maxWeight) {
//         currentWeight = weightArr[i];
//         maxProfit = Math.max(currentProfit, maxProfit);
//         currentProfit = profitArr[i];
//       } else {
//         currentProfit += profitArr[j];
//       }
//     }
//     maxProfit = Math.max(currentProfit, maxProfit);
//   }
//   return maxProfit;
// }
// function maxProfit(weightArr, profitArr, maxWeight) {
//   weightArr.forEach((element, index) => {
//     dp[index] = {};
//   });
//   return getProfit(weightArr, profitArr, maxWeight, 0);
// }

// function getProfit(weightArr, profitArr, capacity, i) {
//   let profitAdd = 0;
//   if (i >= weightArr.length || capacity <= 0) {
//     return 0;
//   }
//   if (dp[i][capacity]) {
//     return dp[i][capacity];
//   }
//   if (weightArr[i] <= capacity) {
//     profitAdd =
//       profitArr[i] +
//       getProfit(weightArr, profitArr, capacity - weightArr[i], i + 1);
//   }
//   let profitSkip = getProfit(weightArr, profitArr, capacity, i + 1);
//   dp[i][capacity] = Math.max(profitAdd, profitSkip);
//   return dp[i][capacity];
// }

var canPartition = function (nums) {
  nums.forEach((element, index) => {
    dp[index] = {};
  });
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  if (totalSum % 2 !== 0) return false;
  return isPartionable(nums, 0, totalSum / 2);
};
let dp = {};
function isPartionable(nums, index, sum) {
  if (index >= nums.length || sum < 0) {
    return false;
  }
  if (nums[index] === sum) return true;
  if (dp[index][sum]) return dp[index][sum];
  let partition1;
  if (nums[index] <= sum) {
    partition1 = isPartionable(nums, index + 1, sum - nums[index]);
  }
  let partition2 = isPartionable(nums, index + 1, sum);
  dp[index][sum] = partition1 || partition2;
  console.log(dp);
  return dp[index][sum];
}

console.log(
  canPartition([
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 99, 97,
  ])
);
console.log(dp);
// console.log(maxProfitBasic([], [], 2) === 0);
// console.log(maxProfitBasic([9, 7, 6, 5, 3, 1], [2, 3, 4, 5, 6, 7], 8));
// console.log(maxProfitBasic([2, 3, 4, 5, 6, 7], [3, 6, 9, 7, 6, 5], 10) === 18);
