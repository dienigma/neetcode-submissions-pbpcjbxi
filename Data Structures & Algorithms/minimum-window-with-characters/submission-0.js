class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    const need = new Map();
    for (const c of t) {
      need.set(c, (need.get(c) ?? 0) + 1);
    }
    const have = new Map();
    let formed = 0;
    const required = need.size;
    let result = '';
    let minLen = Infinity;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      have.set(s[right], (have.get(s[right]) ?? 0) + 1);
      if (have.get(s[right]) === need.get(s[right])) formed++;
      while (formed === required) {
        if (right - left + 1 < minLen) {
          minLen = right - left + 1;
          result = s.slice(left, right + 1);
        }
        have.set(s[left], have.get(s[left]) - 1);
        if (need.has(s[left]) && have.get(s[left]) < need.get(s[left])) {
          formed--;
        }
        left++;
      }
    }

    return result
  }
}
