
// ** add two numbers

function addTwoNumbers(num1, num2){
  console.log(num1 + num2)
};
addTwoNumbers(2, 2)



// ** sum an array

var array = [1,2,3,4,75];
var sum = 0;

for (var i = 0; i < array.length ; i++){
  var value = array[i];
  var sum = value + sum;
};

console.log(sum)

// ** farenheit to celsius converted

function farenheitToCelsius(temp){
  console.log((temp - 32) * (5/9))
}

farenheitToCelsius(212)

// ** vowel counter

var word = "";
var vowels = [];

for (i = 0; i < word.length ; i++){
  var letter = word.toLowerCase()[i];
  if(letter === "a"){
    vowels.push(letter)
  } else if (letter === "e"){
    vowels.push(letter)
  } else if (letter === "i"){
    vowels.push(letter)
  } else if (letter === "o"){
    vowels.push(letter)
  } else if (letter === "u"){
    vowels.push(letter)
  };
};
console.log(vowels.length)

// ** two dice roll

var dice1 = Math.ceil(Math.random() * 6)
var dice2 = Math.ceil(Math.random() * 6)

function rollTwoDice(){
  console.log("Roll1: " + dice1 + "\n Roll2: " + dice2)
}

rollTwoDice()

// ** average

var array = [1,2,3,4,5];
var sum = 0;

for (var i = 0; i < array.length ; i++){
  var value = array[i];
  var sum = value + sum;
  var avg = sum / array.length
};

console.log(avg)

// ** Fizzbuzz

for (var i = 1; i < 101 ; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
  } else if (i % 3 === 0){
    console.log('Fizz')
  } else if (i % 5 === 0){
    console.log('Buzz')
  } else {
    console.log(i)
  }
};


// ** factorial

var val = ""
var factorial = 1

for (i = val ; i > 0 ; i--){
  factorial = i * factorial
};

console.log(factorial)

// ** fibonacci

var fib = [1,1]

function fibonacci(num){
  while( num > fib.length-1 ){
    fib.push(fib[fib.length - 1] + fib[fib.length -2 ])
  };
  console.log(fib[fib.length - 1])
};

fibonacci(5)
