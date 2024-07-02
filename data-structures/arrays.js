let numbers = [1, 2, 3, 4, 5]
numbers.push(6)
numbers.pop()
//checking for the length of an array
console.log(numbers.length)

//checking if a data structure is an arrauy
console.log(Array.isArray(numbers))

//writting to an array
let nums =[]
for(let i = 0; i <= 100; i++){
    nums[i] = i + 1
}

//accessing values
console.log(nums[100])

//finding the total
let total = 0
nums.forEach(num => total+=num)
console.log(total)

//creating arrays for string
let sentence = "the quick brown fox jumped fox jumped over the lazy dog"
let words = sentence.split(" ")
console.log(words)

// arrays concatination
let cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
let dmpDept = ["Raymond", "Cynthia", "Bryan"];
let itDiv = cisDept.concat(dmpDept);
console.log(itDiv);

//slicing
var div = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmp = div.splice(3,3);
console.log(dmp)

//checking if a number is even
let all_numbers = [2,4,6,8,10,11]
function isEven(num){
    return num % 2 === 0
}
let even = all_numbers.every(isEven)
if(even){
    console.log('all numbers are even')
}
else{
    console.log('not all number are even')
}

let all_words = ["the ", "quick ","brown ", "fox "];
function concat_str(acculatedStr, item){
    return acculatedStr + item
}
let new_sentence = words.reduce(concat_str)
console.log(new_sentence)