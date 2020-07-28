const dataTypes = [
  4,
  "hello",
  "2",
  { name: "Alex" },
  54,
  "random",
  23,
  "kitten",
  13.21,
  [1, 2, 3, 4],
  { type: "boolean" },
  [32, 52],
  43.1,
];

/**
 * Exercise 1
 *
 * create a function {sortedData} which will take data as param
 * (you can use){dataTypes} and sort it by type:
 * 1. strings,
 * 2. integers,
 * 3. floats,
 * 4. arrays,
 * 5. objects
 *
 * and return object with property names equals types, and values should be
 * arrays with  corespondent data
 *
 * Ex: const data = [5, 'kitten', 3.12, 12]
 *
 * result:
 * {
 *  integers: [5, 12],
 *  strings: ['kitten'],
 *  floats: [3.12]
 * }
 */

const sortedData = (data) => {
  let result = {
    strings: [],
    integers: [],
    floats: [],
    arrays: [],
    objects: [],
  };

  for (let el of data) {
    switch (true) {
      case typeof el === "string":
        result.strings.push(el);
        break;
      case Number.isInteger(el) === true:
        result.integers.push(el);
        break;
      case Number(el) === el && el % 1 !== 0:
        result.floats.push(el);
        break;
      case Array.isArray(el) === true:
        result.arrays.push(el);
        break;
      case typeof el === "object":
        result.objects.push(el);
        break;
      default:
        console.log("undefined element");
    }
  }
  return result;
};

const numbers = [4, 3, 2, 6, 1, 7];

/**
 * Exercise 2
 *
 * create a function {multipliedByNextNumber} which takes
 * an array of numbers and returns a new array where number equals
 * multiplication of number from passed array and the following number.
 * Presume that the following number for the last one is 1.
 *
 * Ex: pass [3,2,6]
 * result: [6, 12, 6]
 */

const multipliedByNextNumber = function (arr) {
  let finalArray = [];
  for (let i = 0; i < arr.length; i++) {
    finalArray.push(arr[i] * (arr[i + 1] || 1));
  }
  return finalArray;
};

/**
 * Exercise 3
 *
 * create a function {multipliedEvenNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 2.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [24, 3, 48, 16, 5, 7]
 */
const multipliedEvenNumbers = (array) => {
  return array.map((item, key, arr) => {
    if (item % 2) {
      return item;
    } else {
      let piece = arr.slice(key + 1);
      return item * (piece.find((i) => i % 2 === 0) || 2);
    }
  });
};

/**
 * Exercise 4
 *
 * create a function {multipliedOddNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 1.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [4, 15, 6, 8, 35, 7]
 */

const multipliedOddNumbers = (array) => {
  return array.map((item, key, arr) => {
    if (item % 2) {
      let piece = arr.slice(key + 1);
      return item * (piece.find((i) => i % 2 === 1) || 1);
    } else {
      return item;
    }
  });
};

/**
 * Exercise 5
 *
 * create a function {multipliedEvenOddNumbers} which will take
 * an array and type "even" or "odd".
 *
 * If you pass "even" do the same what you have for exercise 3
 * if you pass "odd" do the same what you have for exercise 4
 * else return original array.
 */

const multipliedEvenOddNumbers = (nums, type) => {
  if (type === "even") {
    return multipliedEvenNumbers(nums);
  } else if (type === "odd") {
    return multipliedOddNumbers(nums);
  } else {
    return nums;
  }
};