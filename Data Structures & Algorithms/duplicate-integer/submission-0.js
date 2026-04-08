class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = new Map()
        for (const n of nums){
            if(freq.get(n)) return true
            else freq.set(n, true)
        }
        return false
    }
}
