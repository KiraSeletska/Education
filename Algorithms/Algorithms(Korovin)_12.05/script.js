/*
const containsString = (mainSyting, subString) => {
  let subStringPointer = 0;
  for (let i = 0; i < mainSyting.length; i++) {
    if (mainSyting[i] === subString[subStringPointer]) {
      subStringPointer++;
    }
    if (subStringPointer === subString.length) {
      return true;
    }
  }
  return false;
};
*/
const arr1 = [-4, -3, 0, 1, 2, 10];
const squareSorted = (arr) => {
  const double = [];
  for (let i = 0; i < arr.length; i++) {
    double.push(arr[i] ** 2);
  }
  return double.sort((a, b) => a - b);
};
console.log(squareSorted(arr1));

const squareSorted2 = (arr) => {
  const res = [];

  const negativeReversedSorted = []; // [ 16, 9, 9 ]
  const positiveSorted = []; // [ 0, 1, 4, 100 ]

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item < 0) {
      negativeReversedSorted.push(item ** 2);
    } else {
      positiveSorted.push(item ** 2);
    }
  }

  const negativeSorted = negativeReversedSorted.reverse(); // [ 9, 9, 16 ]

  let aPointer = 0;
  let bPointer = 0;

  while (aPointer < negativeSorted.length && bPointer < positiveSorted.length) {
    const a = negativeSorted[aPointer];
    const b = positiveSorted[bPointer];

    if (a < b) {
      res.push(a);
      aPointer++;
    } else {
      res.push(b);
      bPointer++;
    }
  }

  while (aPointer < negativeSorted.length) {
    res.push(negativeSorted[aPointer]);
    aPointer++;
  }

  while (bPointer < positiveSorted.length) {
    res.push(positiveSorted[bPointer]);
    bPointer++;
  }

  return res;
};

console.log(squareSorted2(arr1));

const array = [3, 1, 1, 1, 7, 0, -5, 16, 4, 1, 0];

// [ 3, 1, 1, 1, 7, 0, -5, 16, 4, 1, 0 ]
// maxSubArray(arr, k)

const maxSubArray = (arr, k) => {
  const sum = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  let leftPointer = 0;
  let rightPointer = 0;

  let currentCandidate = [];
  while (rightPointer < arr.length) {
    const currentSum = sum(leftPointer, rightPointer);
    if (currentSum <= k) {
      rightPointer++;
    } else {
      const newCandidate = [];
      for (let i = leftPointer; i < rightPointer; i++) {
        newCandidate.push(arr[i]);
      }
      if (newCandidate.length >= currentCandidate.length) {
        currentCandidate = newCandidate;
      }
      leftPointer++;
    }
    if (leftPointer > rightPointer) {
      rightPointer++;
    }
  }

  const newCandidate = [];
  for (let i = leftPointer; i < rightPointer; i++) {
    newCandidate.push(arr[i]);
  }
  if (newCandidate.length >= currentCandidate.length) {
    currentCandidate = newCandidate;
  }

  return currentCandidate;
};

console.log(maxSubArray(array, 9));

const longestRun = (arr) => {
  //вторыйм аргументом - сколько оошибок мы прощаем (дз)
  const howMenyZero = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      if (arr[i] === 0) {
        sum++;
      }
    }
    return sum;
  };
  let leftPointer = 0;
  let rightPointer = 0;

  let currentCandidate = [];
  while (rightPointer < arr.length) {
    const currentAmounOfZero = howMenyZero(leftPointer, rightPointer);
    if (currentAmounOfZero <= 1) {
      rightPointer++;
    } else {
      if (currentCandidate < rightPointer - leftPointer) {
        currentCandidate = rightPointer - leftPointer;
      }
      leftPointer++;
    }
    if (leftPointer > rightPointer) {
      rightPointer++;
    }
  }

  if (currentCandidate < rightPointer - leftPointer) {
    currentCandidate = rightPointer - leftPointer;
  }

  return currentCandidate;
};

const newArr = [1, 0, 1, 1, 0, 0, 1, 1, 1, 1];
console.log(longestRun(newArr));

//19.05
const produceLessThenk = (arr, k) => {
  const mult = (left, right) => {
    let res = 1;
    for (let i = left; i <= right; i++) {
      res = res * arr[i];
    }
    return res;
  };
  let res = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  /*
  while(rightPointer < arr.length){
    const currentMult = mult(leftPointer, rightPointer)
    if (currentMult < k){
      rightPointer++;
    } else {
      leftPointer++;
      res = res + rightPointer - leftPointer;
      rightPointer = leftPointer
    }
  }*/
  while (leftPointer < arr.length) {
    const currentMult = mult(leftPointer, rightPointer);
    if (currentMult < k && rightPointer !== arr.length - 1) {
      rightPointer++;
    } else {
      res = res + rightPointer - leftPointer + 1;
      leftPointer++;
      rightPointer = leftPointer;
    }
  }

  return res;
};

console.log(produceLessThenk([1, 2, 3, 4], 10));

const arr = [3, -1, 4, 12, -8, 5, 6];
const a = 4;

const maxSubArraySum = (arr, k) => {
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum = currentSum + arr[i];
  }
  let maxSum = currentSum;
  for (let leftPointer = 1; leftPointer <= arr.length - k; leftPointer++) {
    let diff = -arr[leftPointer - 1] + arr[leftPointer + k - 1];
    currentSum = currentSum + diff;
    if (diff > 0) {
      maxSum = Math.max(currentSum, maxSum);
    }
  }
  return maxSum;
};

const maxSubArraySum2 = (arr, k) => {
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum = currentSum + arr[i];
  }
  let res = currentSum;
  for (let rightPointer = k; rightPointer < arr.length; rightPointer++) {
    const diff = arr[rightPointer] - arr[rightPointer - k];
    currentSum = currentSum + diff;
    if (diff > 0) {
      res = Math.max(res, currentSum);
    }
  }

  return res;
};

// const maxSubArraySum = (arr, k) => {
//     let currentSum = 0;
//     for (let i = 0; i < k; i++) {
//         currentSum = currentSum + arr[i];
//     }
//     let maxSum = currentSum;
//     for (let leftPointer = 1; leftPointer <= arr.length - k; leftPointer++) {
//         let diff = arr[leftPointer + k - 1] - arr[leftPointer - 1];
//         currentSum = currentSum + diff;
//         if (diff > 0) {
//             maxSum = Math.max(currentSum, maxSum);
//         }
//     }

//     return maxSum;
// }

console.log(maxSubArraySum(arr, a));
console.log(maxSubArraySum2(arr, a));

const maxAverage = (arr, k) => {
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum = currentSum + arr[i];
  }
  let res = currentSum;
  for (let rightPointer = k; rightPointer < arr.length; rightPointer++) {
    const diff = arr[rightPointer] - arr[rightPointer - k];
    currentSum += diff;
    if (diff > 0) {
      res = Math.max(res, currentSum);
    }
  }

  return res / k;
};
const anotherArr = [1, 12, -5, -6, 50, 3];
const k = 4;

console.log(maxAverage(anotherArr, k));

const arrrr = [1, 3, 5, 4, 10];

/*
const arr = [1, 3, 5, -4, 10];
const prefix = [ 1, 4, 9, 5, 15 ]; // o(n)

// sum([3, 5, -4]) = sum([1, 3, 5, -4]) - sum([1]) = prefix[3] - prefix[0] = 4
// sum([-4, 10]) = sum([1, 3, 5, -4, 10]) - sum([1, 3, 5]) = prefix[4] - prefix[2] = 15 - 9 = 6
// sum([i..j]) = prefix[j] - prefix[j - subarray.length] = prefix[j] - prefix[i-1]
*/

const numberOfSplit = (arr) => {
  const prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefix.push(prefix[i - 1] + arr[i]);
  }
  let result = 0;
  for(let delimeter = 1; delimeter < arr.length; delimeter++){
    const leftSum = prefix[delimeter - 1]
    const rightSum = prefix[arr.length - 1] - prefix[delimeter-1]
  if(leftSum >= rightSum){
    result++
  }
  }
  return result
};

// const minimumPositive = (arr) => {
//     let minPrefixSum = 0;
//     let previousPrefixSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         previousPrefixSum = previousPrefixSum + arr[i];
//         if (previousPrefixSum < minPrefixSum) {
//             minPrefixSum = previousPrefixSum;
//         }
//     }

//     return -minPrefixSum + 1;
// }

// console.log(minimumPositive([-3, 2, -3, 4, 2]));

// [-3, 2, -3, 4, 2]
// startNumber = x
// x = x - 3
// x = x + 2
// x = x - 3
// x = x + 4 

// x = 2
// 2 - 3 = -1 <- loose
// x = 1000
// 1000 - 3 = 997 + 2 = 999 - 3 = 996 + 4 = 1000

// arr = [a, b, c, d]
// x0 > 0
// x1 = x0 + a > 0
// x2 = x1 + b = x0 + a + b > 0
// x3 = x2 + c = x0 + a + b + c > 0
// x4 = x3 + d = x0 + a + b + c + d > 0

// x0 > 0
// x1 = x0 + prefix[0] > 0
// x2 = x0 + prefix[1] > 0
// x3 = x0 + prefix[2] > 0
// x4 = x0 + prefix[3] > 0

// x0 > 0
// x0 > -prefix[0] // -1
// x0 > -prefix[1] // -2
// x0 > -prefix[2] // -(-4) = 4
// x0 > -prefix[3] // -4

// Вариант 1: все префиксные суммы неотрицательны, то x0 = 1
// Вариант 2: есть отрицательные префиксные суммы. Тогда x = -min(prefix) + 1


// ДЗ: переписать numberOfSplit с использованием памяти о(1)

///[a-zA-Z]/.test("!")
//чистый поллендром
const reverseOnlyLetters = (str) => {
  let leftPointer = 0
  let rightPointer = str.length - 1;
  const arr = new Array(str.length).fill("");
  while (leftPointer <= rightPointer) {
      arr[leftPointer] = str[rightPointer];
      arr[rightPointer] = str[leftPointer];
      leftPointer++;
      rightPointer--;
  }
  return arr.join("");
}

// console.log(/[a-zA-Z]/.test("!"));
console.log(reverseOnlyLetters("abcd")); // "dcba"
console.log(reverseOnlyLetters("Hello, world!")); // "dlrow, olleH!"
console.log(reverseOnlyLetters("a-bc-de--f")); // "f-ed-cb--a"

const reverseOnlyNum = (arr) => {
  const res = new Array(arr.lrngth)
  let leftPointer = 0
let rightPointer = arr.length - 1;
for (let i = 0; i < arr.length; i++){
  const number = arr[i]
  if(number === 0){
    res[rightPointer] = number;
    rightPointer--
  } else {
    res [leftPointer] = number;
    leftPointer++
  }
}
  return res;
}
const b = [1, 0, 1, 0]
const c = [0, 0, 1] 
console.log(reverseOnlyNum(b))
console.log(reverseOnlyNum(c))

// Написать функцию maxVowelLetters которая принимает 2 аргумента
// str - строка
// k - максимальная длина подстроки
// вернуть подстроку длины k, в которой содержится максимальное число гласных
// если таких подстрок несколько, вернуть любую
///[aeoui]/i.test("a")