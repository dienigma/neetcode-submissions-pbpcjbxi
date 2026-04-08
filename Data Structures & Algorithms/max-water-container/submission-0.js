class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0
        
        const n = heights.length
            let left = 0
            let right = n-1
            while(left<right){
                let width = right - left;
                let consolidatedWidth = Math.min(heights[left], heights[right])
                maxArea = Math.max(maxArea, width * consolidatedWidth)
                  if (heights[left] < heights[right]) {                           
      left++;                                                                                                                                                                                                      
  } else {
      right--;                                                                                                                                                                                                     
  }  
            }
        
        return maxArea
    }
}
