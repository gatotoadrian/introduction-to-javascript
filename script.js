// console.log("hello world")a


      // VARIABLES
// variable are used to store data teporarilly in a computer memory.  
// to identify a variable we use {let} 
// there values are undefined

      // RULES OF VARIABLES
// a variable can only be declared once
// they are case sensitive (firstName lastName)
// they should be meaningfull (name, tall)
// can be used in multiple places
// can not contain space or hypens
// they can not start with numbers
// the value of a variable can change

// in this case myName  and fristName are the variable
// shaban is a string because it has"
let myName = "Shaban"
let firstName = "nani"


      //  CONSTANT
// constant values do not cchange (const)

let intrestRate = 0.3
intrestRate = 1 


    //EXAMPLES OF PRIMITIVE/VALUE TYPES
let name = "habibi" //this is a string"""
let age = 30 //number 
let isApproved = false //boolean type (it is either true or false)
let selectedColor = null //used to clear the value of a variable olso u can use (UNDEFINED)
 
 //typeof is used to ceck the type of a variable


     //OBJECTS
// in objects we use  {}  to define objects/

let person = {
  name: "Shaban",
  age: 30,
  isApproved: false,
  selectedColor: null
}

    // dot notation//  
// it can be used to change any thing in the object
person.name = "eddie"
// or you can change the using the BLACKET NOTATION
person["name"] = "bazenga"



      // ARRAYS
// arrsy uses []
// it s a stracture used to present a list of items 
// an array is an OBJECT
let colors = ["red", "blue", "green"]
// [0].[1],[3] this are the index or numbering of the array accoring to there order
// colors[0] = "red"
// colors[1] = "blue"
// colors[2] = "green"
// you can you the DOT NOTATION method to add or change an array 
colors[2] = 1


      // FUNCTIONS  
// function perfomes task 
// functions calcutates or returns a value
// functions can be used in loops
// functions can be used in if statements


// /   / functions of perfoming a task// 
// call is a variable which is a parameter
 function greet(call, otherName){
  // to space between the variable hello en the patamite call you should space the speech marks 
  console.log("hello " + call + " " + otherName)
 }
//  eddie is theARGUMENT of the variable parameter
//  greet("eddie", "nani")


    // function for calcutating values///
function square(number){
  return number * number
}

console.log(square(4))