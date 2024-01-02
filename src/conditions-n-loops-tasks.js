/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (
    (a === b && a + b > c) ||
    (a === c && a + c > b) ||
    (b === c && b + c > a)
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNum = [
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];
  let resultString = '';
  let numLocalCopy = num;

  for (let i = 0; i < romanNum.length; i += 1) {
    const e = romanNum[i];
    while (numLocalCopy >= e[1]) {
      resultString += e[0];
      numLocalCopy -= e[1];
    }
  }
  return resultString;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let resultStr = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];
    switch (char) {
      case '0':
        resultStr += 'zero';
        break;
      case '1':
        resultStr += 'one';
        break;
      case '2':
        resultStr += 'two';
        break;
      case '3':
        resultStr += 'three';
        break;
      case '4':
        resultStr += 'four';
        break;
      case '5':
        resultStr += 'five';
        break;
      case '6':
        resultStr += 'six';
        break;
      case '7':
        resultStr += 'seven';
        break;
      case '8':
        resultStr += 'eight';
        break;
      case '9':
        resultStr += 'nine';
        break;
      case '-':
        resultStr += 'minus';
        break;
      case '+':
        resultStr += 'plus';
        break;
      case ',':
      case '.':
        resultStr += 'point';
        break;
      default:
        break;
    }
    if (i < numberStr.length - 1) {
      resultStr += ' ';
    }
  }
  return resultStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < j; i += 1, j -= 1) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;
  while (n > 0) {
    if (n % 10 === digit) {
      return true;
    }
    n = Math.trunc(n / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sumLeft = 0;
  const sumRight = (index) => {
    let sum = 0;
    for (let j = index; j < arr.length; j += 1) {
      sum += arr[j];
    }
    return sum;
  };

  for (let i = 0; i < arr.length; i += 1) {
    if (sumLeft === sumRight(i + 1)) {
      return i;
    }
    sumLeft += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  if (size <= 0) {
    throw new Error('Size of matrix cannot be less or equal zero.');
  }

  let rowStartIdx = 0;
  let columnStartIdx = 0;
  let rowEndIdx = size - 1;
  let columnEndIdx = size - 1;
  let value = 1;

  const matrix = Array(...Array(size));

  for (let i = 0; i < size; i += 1) {
    const arr = Array(...Array(size));
    matrix[i] = arr;
  }

  while (value <= size * size) {
    for (let i = columnStartIdx; i <= columnEndIdx; i += 1) {
      matrix[rowStartIdx][i] = value;
      value += 1;
    }

    rowStartIdx += 1;

    for (let i = rowStartIdx; i <= rowEndIdx; i += 1) {
      matrix[i][columnEndIdx] = value;
      value += 1;
    }

    columnEndIdx -= 1;

    for (let i = columnEndIdx; i >= columnStartIdx; i -= 1) {
      matrix[rowEndIdx][i] = value;
      value += 1;
    }

    rowEndIdx -= 1;

    for (let i = rowEndIdx; i >= rowStartIdx; i -= 1) {
      matrix[i][columnStartIdx] = value;
      value += 1;
    }

    columnStartIdx += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const { length } = matrix;
  const arr = Array(...Array(length));

  for (let i = 0; i < length; i += 1) {
    const arr2 = Array(...Array(length));
    arr[i] = arr2;
  }

  function fillColumn(row, colIndex) {
    for (let i = 0; i < length; i += 1) {
      arr[i][colIndex] = row[i];
    }
  }

  for (let i = 0, j = length - 1; j >= 0; i += 1, j -= 1) {
    const element = matrix[i];
    fillColumn(element, j);
  }

  Object.assign(matrix, arr);
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(array) {
  const temp = Object.assign([], array);

  const partition = (start, end) => {
    const pivot = temp[end];
    let i = start;

    for (let j = start; j <= end - 1; j += 1) {
      if (temp[j] <= pivot) {
        [temp[i], temp[j]] = [temp[j], temp[i]];
        i += 1;
      }
    }

    [temp[i], temp[end]] = [temp[end], temp[i]];
    return i;
  };

  const quickSort = (start, end) => {
    if (start < end) {
      const pi = partition(start, end);

      quickSort(start, pi - 1);
      quickSort(pi + 1, end);
    }
  };

  quickSort(0, array.length - 1);
  Object.assign(array, temp);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let temp = [...str];
  const arrFromStr = [...str];
  const str2 = JSON.stringify(arrFromStr);
  let count = iterations;
  let period = 0;
  let isPeriod = true;

  function shuffle() {
    const tmp = Object.assign([], temp);
    const middleOfArray =
      temp.length % 2 === 0 ? temp.length / 2 : temp.length / 2 + 1;
    let indexOfEven = 0;
    let indexOfOdd = 0;
    for (let i = 0; i < temp.length; i += 1) {
      if (i % 2 === 0) {
        tmp[indexOfEven] = temp[i];
        indexOfEven += 1;
      } else {
        tmp[middleOfArray + indexOfOdd] = temp[i];
        indexOfOdd += 1;
      }
    }
    temp = tmp;
  }

  while (isPeriod) {
    shuffle();
    period += 1;
    if (JSON.stringify(temp) === str2) {
      isPeriod = false;
    }
  }

  while (count > period) {
    count %= period;
  }

  for (let i = 0; i < count; i += 1) {
    shuffle();
  }
  let res = '';
  for (let i = 0; i < temp.length; i += 1) {
    res += temp[i];
  }
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let n = number;
  const num = [];
  while (n > 0) {
    num.unshift(n % 10);
    n = Math.trunc(n / 10);
  }
  let pi = -1;
  for (let i = num.length - 1; i >= 0; i -= 1) {
    if (num[i - 1] < num[i]) {
      pi = i - 1;
      break;
    }
  }
  if (pi === -1) {
    return number;
  }

  for (let i = num.length - 1; i > pi; i -= 1) {
    if (num[i] > num[pi]) {
      [num[pi], num[i]] = [num[i], num[pi]];
      break;
    }
  }
  const head = [];
  for (let i = 0; i <= pi; i += 1) {
    head.push(num[i]);
  }
  const tail = [];
  for (let i = pi + 1; i < num.length; i += 1) {
    tail.push(num[i]);
  }

  tail.sort();

  return +[...head, ...tail].join('');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
