// var longestAlternatingSubarray = function (nums, threshold) {
//   let result = 0;
//   let localResult = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > threshold) {
//       localResult = 0;
//       continue;
//     }
//     if (localResult !== 0) {
//       if (nums[i] % 2 !== nums[i - 1] % 2) {
//         localResult++;
//       } else {
//         localResult = 0;
//       }
//     }
//     if (localResult === 0 && nums[i] % 2 === 0) {
//       localResult++;
//     }
//     result = Math.max(localResult, result);
//   }
//   return result;
// };
// var primeMap = new Map();
// var findPrimePairs = function (n) {
//   let result = [];
//   let i = 2;
//   while (i <= n / 2) {
//     if (isPrime(i) && isPrime(n - i)) {
//       result.push([i, n - i]);
//     }
//     i++;
//   }
//   return result;
// };
// function isPrime(num) {
//   if (primeMap.has(num)) {
//     return primeMap.get(num);
//   }
//   var m = Math.sqrt(num);
//   for (let i = 2; i <= m; i++) {
//     if (num % i === 0) {
//       primeMap.set(num, false);
//       return false;
//     }
//   }
//   primeMap.set(num, true);
//   return true;
// }
// var continuousSubarrays = function (nums) {};
// console.log(continuousSubarrays([5, 4, 2, 4]));
// //console.log(longestAlternatingSubarray([4, 10, 3], 18));
// var findTargetSumWays = function (nums, target) {
//   var hash = {};
//   function findPossibleValues(values, num) {
//     const key = "" + values.length + "_" + num;
//     if (hash[key]) {
//       console.log(key);
//       return hash[key];
//     }
//     if (values.length === 0) {
//       if (num === 0) {
//         return 1;
//       } else {
//         return 0;
//       }
//     }
//     const arr = values.slice(1);
//     const result =
//       findPossibleValues(arr, num + values[0]) +
//       findPossibleValues(arr, num - values[0]);

//     hash[key] = result;

//     return result;
//   }
//   return findPossibleValues(nums, -target);
// };

// console.log(
//   findTargetSumWays(
//     [
//       42, 24, 30, 14, 38, 27, 12, 29, 43, 42, 5, 18, 0, 1, 12, 44, 45, 50, 21,
//       47,
//     ],
//     38
//   )
// );
// function undefinedToNull(arg) {
//   if (Array.isArray(arg)) {
//     arg.forEach((val, i) => {
//       assignValues(val, i);
//     });
//   } else {
//     Object.entries(arg).forEach(([key, value]) => {
//       assignValues(value, key);
//     });
//   }
//   function assignValues(val, i) {
//     if (val === undefined) {
//       arg[i] = null;
//     } else if (typeof val === "object" && val === null) {
//       undefinedToNull(val);
//     }
//   }
//   return arg;
// }
// const input = ["BFE.dev", undefined, null, { a: ["BFE.dev", undefined] }];
// console.log(undefinedToNull(input));
// function uncompress(str) {
//   const digitRegex = /\d/;
//   let numArr = [];
//   let numberStr = "";
//   let strArr = [];
//   let currentStr = "";

//   for (i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (digitRegex.test(char)) {
//       numberStr += char;
//     } else if (char === "(") {
//       numArr.push(numberStr);
//       numberStr = "";
//       strArr.push(currentStr);
//       currentStr = "";
//     } else if (char === ")") {
//       let mulitple = numArr.pop();
//       currentStr = multiplyString(currentStr, mulitple);
//       currentStr = strArr.pop() + currentStr;
//     } else {
//       currentStr += char;
//     }
//   }
//   return currentStr;
// }
// function multiplyString(str, num) {
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     result += str;
//   }
//   return result;
// }
// console.log(uncompress("a2(b2(c))f2(d2(e))"));
// 100(fdghfg7(88))3432(fgf2(fhgf))
// 100 (2748624376)
