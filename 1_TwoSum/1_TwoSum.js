/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        // console.log(nums[i])
        for(let j=0; j<nums.length; j++){
            // console.log('bbbb',nums[j])
            if(nums[i]+nums[j]===target && i<j){
                // console.log('cccc',i,j)
                return [i,j]
            }
        }
    }
    // console.log(target)
    // console.log(nums)
};