// let fullName = "Yunus Ibrahim"; //string value
// let age = 23; // number value
// // key let to declare a variable
// // variable name
// // variable content 
// let address = "Bujumbura, Burundi";

// fullName = "Rajab";
// let longeur = 23;
// let largeur = 10;
// let surface = longeur / largeur

// console.log(fullName, "is", age, "years old and lives in", address); //print content to the debugger

// console.log(surface)

let myAge = 12 // Number (1, -1, 2.0)
let firstName = "Yunus" // String (Letters, numbers, Symbols)
let lastName = "Ibrahim" // String
let isAlive = true // Boolean
    // let classList = ["Rajab", "Emma","Iddi","Zai", "Willy"]
let favoriteColors = ["black", "white", "red", "blue"] // Array (String, Boolean, Array, Object, function, numbers)
let isStudent = true // Boolean -> True / False (1 / 0)
let studentInfo = { // Object -> KEY:VALUE (Number, String, Boolean, Array, function)
    firstName,
    lastName,
    myAge,
    favoriteColors,
    isStudent,
    houseNumber: 20
}

// alert
// alert(studentInfo.favoriteColors) 
//-> Displays only a message and Return nothing

// confirm
//let doYouLikePizza = confirm("Do you like Pizza?") 
//-> Displays a  message and Return True(OK) / False (Cancel)

// Prompt
// let howManyPiece = prompt("How many piece?") 
// -> Displays a message and Gives an input option 
//that return a String value 

// alert(doYouLikePizza + howManyPiece)
// alert(howManyPiece)

// console.log(doYouLikePizza, howManyPiece);

// reference page element
//let myText = document.getElementById("myText"); 
// let myText = document.querySelector("#myText");
// Reference (link) the element in the document 
//and we save the element in a variable

//myText.textContent = doYouLikePizza

// console.log('myText', myText)
// ======== Activity =====
// ASk a user if they like to eat Steak? 
// If they respond with "Yes(True)"
// -> "Here's the Steak Sandwich!"
// if they respond with "No(False)"
// -> "Here's a Tofu Stir-Fry!"
// Ask a user they birth year 
// if they are under 21 display the following 
//"No Sake for you!"

// let userAnswer = document.getElementById("userAnswer");

// let userResponse = confirm("Do you like to eat Steak?");

// if (userResponse) {
//     userAnswer.textContent = "Here's the Steak Sandwich!";
// } else {
//     userAnswer.textContent = "Here's a Tofu Stir-Fry!";
// }

// const user = document.querySelector("#userAnswer");
// const userAnswer = prompt("How old are you?");
// Operateur logic > < >= <= && || == === != !==
// Arithmetic operators + - * / %
// parseInt convert string to number / integer
// let myNumber1 = 5;

// // myNumber1 = myNumber1 + 5;
// myNumber1 += 5;

// const myNumber2 = 2;

// if ((myNumber1 % myNumber2) !== 0) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// if user is between 12 and 21 years old display ""
// is user is either equal or less than 12 or user  is less or equal that 21

// if ((userAnswer >= 12) && (userAnswer <= 21)) {
//     user.textContent = "No Sake for you!";
// } else if (userAnswer !== 12) {
//     user.textContent = "Comeback later!!";
// } else {
//     user.textContent = "Get as much Sake as you want! lol";
// }

// // condition ya true / false 

// if (!userAnswer) {

// }

// switch (true) {
//     case (userAnswer < 21):
//         user.textContent = "No Sake for you!";
//         break;
//     case (userAnswer === 12):
//         user.textContent = "Comeback later!!";
//         break;

//     default:
//         user.textContent = "Get as much Sake as you want! lol";
//         break;
// }

// ARRAYS

const animals = ["Lion", "zebra", "Cat", "Duck", "Dog"];
// index 0,1,2,3,4

let userAnswer = prompt("What is your favorite animal?");

// userAnswer = userAnswer.toLowerCase(); //C put everything in lowecase (miniscule)
console.log(userAnswer)
console.log(animals)
    // console.log(animals[3]) // get elment based on index
    // console.log(animals.length) // array length (taille)
    // console.log(animals.indexOf("Dogs")); // lookup if the element exist in the array and return the index
const animalIndex = animals.indexOf(userAnswer);
console.log(animalIndex);
if (animalIndex !== -1) {

    if (animals[animalIndex].toLowerCase() === "cat") {
        console.log("Is  my favorite too!")
    } else {
        console.log("Not my favorite!");
    }

} else {
    console.log("Animal not found in the list!");
}































// Timer
// let timerField = document.getElementById('timer');
// let morningOrEvening = "AM";

// let timer = () => {
//     let date = new Date
//     let seconds = date.getSeconds();
//     let minutes = date.getMinutes();
//     let hours = date.getHours();

//     if (hours >= 12) {
//         morningOrEvening = "PM"
//     } else {
//         morningOrEvening = "AM"
//     }

//     if (hours > 12) {
//         hours -= 12;
//     }

//     let paddedSeconds = String(seconds).padStart(2, "0")
//     let paddedMinutes = String(minutes).padStart(2, "0")

//     timerField.textContent = `${hours}:${paddedMinutes}:${paddedSeconds} ${morningOrEvening}`

//     requestAnimationFrame(timer);
// }

// timer()