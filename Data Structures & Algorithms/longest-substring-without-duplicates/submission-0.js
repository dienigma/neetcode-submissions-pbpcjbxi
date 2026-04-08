class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 1
         if (s.length === 0) return 0;
        const window = new Set();
        let left = 0;
        for(let right = 0;right<s.length ;right++){
            while(window.has(s[right])){
                window.delete(s[left])
                left++
            }
            window.add(s[right])
            max = Math.max(max, right - left + 1)

        }
        return max
        
    }
}
