/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let calc = parseInt(dividend / divisor)
    if (dividend / divisor > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    } else if (dividend / divisor < Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
    } else {
        return calc
    }
};
// @lc code=end

