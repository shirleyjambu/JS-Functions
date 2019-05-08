const functionArr = [getFactorial, doubleArr];

// To clear results
$(".fa-brush").on("click", clearResult);

//To display function
const print = str => {
  $("#func").append(str);
};

//To clear the result div
function clearResult() {
  $("#result").text("");
}

//Get an array input from user
function getNumberArray() {
  let str = prompt("Enter numbers for the array separated by commas");
  return str.split(",");
}

// Get sentence from user
function getSentence() {
  let sentence = prompt("Enter Sentence").trim();
  return sentence;
}

// Function to find factorial
function getFactorial() {
  let num = prompt("Enter number to get Factorial");

  var sum = 0;
  for (var i = 1; i <= num; i++) {
    //sum = sum + i;
    sum += i;
  }
  $("#result").text(`The factorial of ${num} is ${sum}`);
}

// Find highest number in an array
function getHighestNumber() {
  let arr = getNumberArray();

  var highNum = 0;
  /*for(var i=0;i<arr.length;i++){
    if(arr[i] > highNum){
      highNum = arr[i];
    }
  }*/

  // Using ES6
  highNum = arr
    .sort(function(a, b) {
      return a - b;
    })
    .pop();

  $("#result").text(`The highest number is ${highNum}`);
}

// To check if a word is a palindrome
function isPalindrome() {
  let word = prompt("Enter word to check for palindrome.");
  var revWord = word
    .split("")
    .reverse()
    .join("");

  if (word === revWord) {
    $("#result").text(word + " is a palindrome");
  } else {
    $("#result").text(word + " is not a palindrome");
  }
}

// Function to count the number of words in a sentence
function countWords() {
  let sentence = getSentence();

  /*if(sentence===""){
    alert("No sentence entered");
  }else{
    for(var i=0;i<sentence.length;i++){
      if(sentence.charAt(i) === " "){
        wordCount++;
      }
    }
    alert("No of words : " + wordCount);
  }*/

  var arrSentence = sentence.split(" ");
  $("#result").text(
    `The sentence '${sentence}' has ${arrSentence.length} words.`
  );
}

// Find the average of an array
function average() {
  var arrNum = getNumberArray();
  var total = 0;
  var avg = 0;
  for (var i = 0; i < arrNum.length; i++) {
    total = total + parseInt(arrNum[i]);
  }

  avg = total / arrNum.length;
  /*arrNum.reduce(function(total,num){
    return total += num;
  },0)/arrNum.length;*/

  $("#result").html(`Average is ${avg}`);
}

// Check if the input is a integer
function isInteger() {
  let input = prompt("Enter number to check for integer.");
  let check = !isNaN(input);
  $("#result").html("Is " + input + " an integer? " + check);
}

//Check to see if character is a vowel
function isVowel() {
  let vStr = "aeiou";
  let input = prompt("Enter character to check for vowel.");
  let check = vStr.includes(input) ? true : false;
  $("#result").html("Is " + input + " an vowel? " + check);
}

// Find the first dulpicate in an array
function findFirstDuplicate() {
  var arrNum = getNumberArray();
  var checkNum = 0;
  var isDuplicate = false;
  let duplicate = "NA";
  for (var i = 0; i < arrNum.length; i++) {
    checkNum = arrNum[i];
    for (var j = i + 1; j < arrNum.length; j++) {
      if (checkNum === arrNum[j]) {
        isDuplicate = true;
        duplicate = checkNum;
        break;
      }
    }
  }
  $("#result").html("First Duplicate : " + duplicate);
}

//Check to see if a sentence is a pangram
// sentence which has all the alphabets
function isPangram() {
  let sentence = getSentence();
  var isPangram = true;
  var alphabets = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < alphabets.length; i++) {
    if (sentence.indexOf(alphabets[i]) < 0) {
      isPangram = false;

      //return here would be better, can use includes
    }
  }
  $("#result").text(`${sentence} : ${isPangram}`);
}

// Check for day using number
function checkday() {
  let dayNum = prompt("Enter a number");
  dayNum = parseInt(dayNum);
  var result = "";
  switch (dayNum) {
    case 1:
      result = "Monday";
      break;
    case 2:
      result = "Tuesday";
      break;
    case 3:
      result = "Wednesday";
      break;
    case 4:
      result = "Thursday";
      break;
    case 5:
      result = "Friday";
      break;
    case 6:
      result = "Saturday";
      break;
    case 7:
      result = "Sunday";
      break;
    default:
      result = "Undefined";
      break;
  }
  $("#result").text(result);
}

/* 
  Write a function that takes in an array of integers and the array with duplicates removed

  Ex:
    Input: [1, 2, 2, 3]
    Output: [1, 2, 3]

    Input: [4, 5, 4, 4, 7, 5]
    Output: [4, 5, 7]

    Input: [1, 2, 3, 5]
    Output: [1, 2, 3, 5]
*/

function removeDuplicates() {
  let arr = getNumberArray();

  // using ES6
  //let newArray = (arr) => [...new Set(arr)];

  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  $("#result").text(newArray);
}

// Double all the elements in the array
function doubleArr() {
  let arr = getNumberArray();

  // pass a function to map, es6
  const map1 = arr.map(x => x * 2);
  $("#result").text(map1);
}

/* 
  Write a function that takes an array of numbers and a function as parameters.
 The function paremeter should do something to a numbers (increment, double, decrement, etc) and return the result. 
Your function should return the array that results from applying the function parameter to each element in the number array. 

  Ex:
  Input: [1,2,3]  function(num){return num * 2*}
  Output: [2,4,6]

  Input: [1,2,3]  function(num){return num + 1}
  Output: [2,3,4]

  Input: [1,2,3] function(num) {return num /2}a
  Output: [.5, 1. 1.5]

  Input: [1,2,3] function(num) {return num - 2}
  Output: [-1, 0, 1] 
*/
const cbArray = () => {
  let arr = getNumberArray();
  let cb = num => {
    return num * 2;
  };

  // create a new empty array to push new values into
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const newNum = cb(arr[i]);
    newArr.push(newNum);
  }

  $("#result").text(newArr);
};

/*
Write a function that takes an array of numbers and a function as parameters. 
The function parameter should return true if the input meets a certain condition or false otherwise. 
Your function should return true if the function parameter returns true for _any_ of the array elements in the array parameter
 or false otherwise.

Ex:

Input: [1,2,3]  function(num){return num === 2}
Output: true

Input: [1,5,3]  function(num){return num === 2}
Output: false

Input: [1,2,3]  function(num){return num % 2 === 0}
Output: true

Input: [1,5,3]  function(num){return num % 2 === 0}
Output: false
*/

const anyCheck = () => {
  let arr = getNumberArray();
  // create a flag to change if anything meets our condition
  let isTrue = false;

  const isTwo = num => {
    return num === 2;
  };
  const isDivTwo = num => {
    return num % 2 === 0;
  };

  const cb = [isTwo, isDivTwo];

  for (let j = 0; j < cb.length; j++) {
    // iterate over the array and check if each element matches our condition
    for (let i = 0; i < arr.length; i++) {
      // check if arr[i] meets our condition by passing it into our callback function
      var cbOutput = cb[j](arr[i]);
      if (cbOutput) {
        isTrue = true;
      }
    }
    $("#result").append(cb[j] + " : " + isTrue + " , ");
  }
};

/*Write a function that takes in a number and reverses the order of the digits.

Ex:
  Input: 1234
  Output: 4321

  Input: 1201
  Output: 1021

  Input: 4
  Output: 4 
*/

const reverseDigit = () => {
  let num = prompt("Enter a number to be reversed");
  if (isNaN(num)) {
    return false;
  }

  // create variable to hold onto new value
  let newNum = "";

  // With ES6
  //newNum = parseInt(num.toString().split("").reverse().join(""));

  // convert num input to a string
  let numStr = num.toString();

  // loop through numStr in reverse
  for (let i = numStr.length - 1; i >= 0; i--) {
    newNum += numStr[i];
  }

  $("#result").text(parseInt(newNum));
};

/*
  Write a function that takes in a string and and returns the string with white space removed and all letters changed to lowercase.This is a common task when a variable, routeName, etc needs to be created from user input.

  Ex:
    Input: Tammer Galal
    Output: tammergalal

    Input: favorite tree ever
    Output: favoritetreeever

    Input: one word
    Output: oneword
*/
// Jar Jar Binks
const createSlug = () => {
  let str = prompt("Enter Full Name");

  // create a new string variable to hold onto final answer
  let newStr = "";

  // Could use regex
  //const singleWordRegex = (str) => str.toLowerCase().replace(/\s/g, "");
  //newStr = singleWordRegex(str);

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str[i];
    }
  }

  $("#result").text(newStr.toLowerCase());
};

// Function to parse String to get ingredients
function getIngredient() {
  var str = prompt("Enter str :");
  //var str = "200 g sushi rice";
  var yield = 4;
  var convertTo = 10;

  let arr = str.split(" ");

  let quan = arr[0];
  let meas = arr[1];
  let ingr = arr.splice(2, arr.length).join(" ");

  /*  alert("quan : " + quan);
  alert("meas : " + meas);
  alert("ingr : " + ingr);*/

  if (!isNaN(quan)) {
    let converted = parseInt((quan / yield) * convertTo) + meas + ingr;
    $("#result").text("Converted Value = " + converted);
  } else {
    let converted = str;
    $("#result").text(
      "Returning string = " + converted + " (for " + yield + " ) "
    );
  }
}

function binaryToDec() {
  let bNum = prompt("Enter Binary Number");
  let dNum = 0;
  let mCnt = 0;
  let nArr = bNum.split("");

  for (let i = nArr.length - 1; i >= 0; i--) {
    dNum = dNum + nArr[i] * Math.pow(2, mCnt);
    mCnt++;
  }

  $("#result").text(dNum);
}

function decToBinary() {
  let dNum = prompt("Enter Decimal Number");
  let quo = parseInt(dNum);
  let rem = "";
  while (quo != 0) {
    rem = rem + (quo % 2);
    quo = parseInt(quo / 2);
  }

  $("#result").text(
    rem
      .split("")
      .reverse()
      .join("")
  );
}

function getSecondLargest() {
  let nums = getNumberArray();
  // Complete the function

  /*let max;
  let sM = 0;
  nums = nums.sort();
  max = nums[nums.length -1];
  
  for(let i = nums.length-1; i >= 0; i--){
     if(nums[i] < max ){
      sM = nums[i];
      break;
    }
  }
    
  return sM;*/

  let first = nums[0];
  let second = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    }

    if (nums[i] > second && nums[i] < first) {
      second = nums[i];
    }
  }

  $("#result").text(second);
}
