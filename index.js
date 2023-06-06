// Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahToCel (f){
    c= (f-32) *5/9;
    console.log (c)
    
}//fahToCel(100)


// Create a function that will calculate the average of numbers in an array. 

function average (array){
    let sum = array.reduce((n, y) => n + y)
    // console.log(sum)
    let newAve= sum/array.length

    console.log(newAve)

}//average([1, 2, 3, 4, 5])


// Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function divided(n, x, y){
    if (n%x ==0 && n%y ==0){
        return true
    }else{
        return false
    }

}
//divided(20, 2, 4)
//divided(20, 3, 4)


// Create a function that will output the first 100 prime numbers.
function outputPrime (n){
    let num =2;
    let totalNum = [];
    while(totalNum.length < n){
        if(checkPrime(num)){
            totalNum.push(num);
        }
        num++
    }
    return totalNum;
}

function checkPrime(num){
    for(let i =2; i<num; i++){
        if(num%i ==0){
            return false;
        }
    }
    return true;
}outputPrime(100)


// Create a function that will return a boolean specifying if a number is a prime number.
function isAPrime(num){
        if(num%2 ==0){
            return false
    }
    return true;
}
//isAPrime(3)



// Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

function diverseNum(num){
    let arrayNum = [];
    for(let i=0; i<num.length; i++){
        if(num[i] >0){
            arrayNum.push(num[i]);
        }
    }
    return arrayNum
}//diverseNum([1, 2, -5,])


// Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

function multiplesNum(num){
    for(let i=0; i<=num; i++){
        if(i%3==0){
            console.log("Fizz")
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else if(i%3 ==0 && num%5 ==0){
            console.log("FizzBuzz")
        }
        else{
            console.log(i)
        }
    }
}multiplesNum(100)


// The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
// It must start with a hash symbol, #.
// Ignore all spaces in the input.
// All words must have their first letter capitalized.
// If the final result is going to be longer than 140 characters, it should return false.
// If the input or result is an empty string, it should return false.

function hashTagGenerator(letter){
    //removing spaces
    let words = letter.replace(/\s+/g,'').split('');
    console.log(words)
    
    for(let i =0; i<words.length; i++){
        words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    let newWords ='#' + words.join('');

    if(newWords > 140 || newWords == '#'){
        return false
    }
    return newWords

}hashTagGenerator("enery")