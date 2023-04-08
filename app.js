// document.write("Hello world");

// assignment session 4
// deviding the amount between notes
// function countNotes(amount) {
//   const notes = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1];
//   let remainingAmount = amount;

//   for (let i = 0; i < notes.length; i++) {
//     const note = notes[i];
//     const count = Math.floor(remainingAmount / note);
//     if (count > 0) {
//       console.log(`${count} notes of ${note}`);
//       remainingAmount %= note;
//     }
//   }
// }
// countNotes(6350);

//assignment session 5
//1 vote eligibility
// let age = +prompt("Enter your age: ");
// if (age >= 18) {
//     alert("you are eligible for vote");
// }else{
//     alert("you are too young for voting");
// }

//2 fruits colors
// let userFruit = prompt("select your fruit Apple , banana or orange");
// switch (userFruit) {
//   case "apple":
//     alert("the color of Apple is red");
//     break;
//   case "banana":
//     alert("the color of banana is yellow");
//     break;
//   case "orange":
//     alert("the color of orange is orange");
//     break;

//   default:
//     alert("please select the correct fruit");
//     break;
// };


//3 table of any given number
// let num = +prompt("Enter your number to see it's table");
// for (let i = 1; i <= 10; i++) {
//     document.write(`${num} X ${i} = ${num * i} <br>`);
    
// }


//assignment session 6

//Q1 Write a function that takes two numbers as arguments and returns their sum

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// function add(n1,n2){
//     alert(n1 + n2);
// }
// add(num1, num2)

//Q2 Write a function that takes a number as an argument and returns true if the number is even, and false if it's odd

// let num = +prompt("Enter the number to check if it is even or odd");
// if (num % 2 === 0) {
//     alert("even number");
// }else{
//     alert("odd number");
// }


//assignment session 7

//Q1 Declare An Array And Print Each And Every Element To The Console

// let cities = ["Karachi","Lahore","Islamabad","Peshawar"];
// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
// }

//Q2 Write A Function Which Takes An Array As Argument And Returns All Array Elements
// function getElements (arr){
//     return(arr);
// }

// console.log(getElements(["karachi",'lahore','multan']));

//Q3 Write a program that takes an array of integers and prints the sum of all the elements in the array.

// function sumArrayElements(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     console.log("The sum of all elements in the array is:", sum);
//   }
  
//   sumArrayElements([5,10,3,2]);