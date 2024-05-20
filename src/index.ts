// Two Sum
function twoSum ( nums: number[], target: number ): number[] {
  const complementObj: {[key: number]: number} = {}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - num

    if (complement in complementObj) {
      return [complementObj[complement], i]
    }

    complementObj[num] = i
  }

  return []
}

// Palindrome Number
function isPalindrome ( x: number ): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  let reversedNum = 0
  let originalNum = x

  while (x > 0) {
    const lsd = x % 10
    reversedNum = reversedNum * 10 + lsd
    x = Math.floor(x / 10)
  }

  return originalNum === reversedNum
}

// Roman to Integer
function romanToInt ( s: string ): number {
  const romanIntMap: {[key: string]: number} = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0
  let previous = 0

  for (let i = s.length - 1; i >= 0; i--) {
    const current = romanIntMap[s[i]]

    if (current < previous) {
      result -= current
    } else {
      result += current
    }

    previous = current
  }

  return result
}

// Longest Common Prefix
function longestCommonPrefix ( strs: string[] ): string {
    if (strs.length === 0) return ''

    let prefix = strs[0]

    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)

            if (prefix === '') return ''
        }
    }

    return prefix
};
