//Write function that take { str } as parameter and return Boolean .
//Check if the given string is palindrome

let testCase1 = "yehya";
let testCase2 = "madam";

function checkPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  if (reversedStr == str) {
    console.log(true);
  } else {
    console.log(false);
  }
}
checkPalindrome(testCase1);
checkPalindrome(testCase2);

//Write function that take 2 parameters { arr , target }
//Return array of  indexes of two element which sum of them = target

let arr = [5, 6, 8, 4];
let target = 13;

function findTwoIndexes(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

let result = findTwoIndexes(arr, target);
console.log(result);
