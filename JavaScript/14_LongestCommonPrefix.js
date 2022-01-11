/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs == null || strs.length == 0) return "";

    var same = strs[0];

    for(var i = 1 ; i<strs.length ; i++){
        var str = strs[i];

        var j = 0;
        for(; j < same.length ; j++){
            if(same[j] != str.charAt(j)){
                break;
            } 
        }
        same = same.slice(0,j);
    }

    return same;
};