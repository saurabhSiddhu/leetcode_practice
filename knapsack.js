var findTargetSumWays = function(nums, target) {
   return recursiveExpression(nums, target,0,[]);
};

function recursiveExpression(nums, target, level, exp){
    const num = nums[level];
    if(nums.length===level){
       const sum= exp.reduce((acc,num)=>acc+num,0);
       return sum === target? 1: 0;
    } 
    return recursiveExpression(nums, target, level+1, [...exp,num]) +  recursiveExpression(nums, target, level+1, [...exp,-num])

}
console.log(findTargetSumWays([20,48,33,16,19,44,14,31,42,34,38,32,27,7,22,22,48,18,48,39], 1))