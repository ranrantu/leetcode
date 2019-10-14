/**
 * 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 1) {
        return 0;
    }
    let i = 0, j = 1, longest = 1;

    while(index < s.length) {
        if (s.slice(i, j).indexOf(s.charAt(j)) > -1) {
            i += s.slice(i, j).length;
        } else {
            longest = Math.max(j - i + 1, longest);
        }
        j++;
    }
    return longest;
};