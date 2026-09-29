// Task 01: Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Task 02: FizzBuzz Scenario
function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

// Task 03: Find the Largest Number
function findMax(arr) {
  return Math.max(...arr);
}

// Task 04: Count Vowels
function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";
  let lowerStr = str.toLowerCase();

  for (let char of lowerStr) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Task 05: Remove Duplicates from Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Task 06: Check for Palindrome
function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
}

// Task 07: Title Case a Sentence
function titleCase(str) {
  let words = str.toLowerCase().split(' ');
  let result = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return result.join(' ');
}

// Task 08: Two Sum Algorithm
function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

// Task 09: Memoized Function Decorator
function memoize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    let output = fn(...args);
    cache[key] = output;
    return output;
  };
}

// Task 10: Asynchronous Fetch Timeout Wrapper
function fetchWithTimeout(url, ms) {
  let fetchPromise = fetch(url);
  let timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request Timed Out"));
    }, ms);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
}


console.log("------------------------------------------");
console.log("Task 01 (Reverse String = hello world):", reverseString("hello world"));
console.log("------------------------------------------");

console.log("Task 02 (FizzBuzz for n=15):");
console.log(fizzBuzz(15).join(", "));
console.log("------------------------------------------");

console.log("Task 03 (Find Max in [1, 5, 8, 3, 18]):", findMax([1, 5, 8, 3, 18]));
console.log("------------------------------------------");

console.log("Task 04 (Count Vowels in 'Supercalifragilisticexpialidocious'):", countVowels("Supercalifragilisticexpialidocious"));
console.log("------------------------------------------");

console.log("Task 05 (Remove Duplicates from [1, 2, 2, 3, 4, 4, 6, 2]):", removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2]));
console.log("------------------------------------------");

console.log("Task 06 (Is Palindrome 'racecar'):", isPalindrome("racecar"));
console.log("------------------------------------------");

console.log("Task 07 (Title Case):", titleCase("i have completed all ten javascript problem solving tasks"));
console.log("------------------------------------------");

console.log("Task 08 (Two Sum [2, 7, 11, 15], Target 9):", twoSum([2, 7, 11, 15], 9));
console.log("------------------------------------------");


const double = memoize(n => n * 2);
console.log("Task 09: Memoized Function Decorator", double(5));
console.log("Task 09 (from cache):", double(5));


fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 2000)
  .then(() => console.log("Task 10 (Asynchronous Fetch Timeout wrapper): fetch success"))
  .catch(err => console.log("Task 10 error:", err.message));