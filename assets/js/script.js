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

// let myAge = 12 // Number (1, -1, 2.0)
// let firstName = "Yunus" // String (Letters, numbers, Symbols)
// let lastName = "Ibrahim" // String
// let isAlive = true // Boolean
//     // let classList = ["Rajab", "Emma","Iddi","Zai", "Willy"]
// let favoriteColors = ["black", "white", "red", "blue"] // Array (String, Boolean, Array, Object, function, numbers)
// let isStudent = true // Boolean -> True / False (1 / 0)
// let studentInfo = { // Object -> KEY:VALUE (Number, String, Boolean, Array, function)
//     firstName,
//     lastName,
//     myAge,
//     favoriteColors,
//     isStudent,
//     houseNumber: 20
// }

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

// const animals = ["Lion", "zebra", "Cat", "Duck", "Dog"];
// index 0,1,2,3,4

// let userAnswer = prompt("What is your favorite animal?");

// userAnswer = userAnswer.toLowerCase(); //C put everything in lowecase (miniscule)
// const arrayLength = animals.length;
// console.log(userAnswer)
// console.log(animals)
// console.log(animals[3]) // get elment based on index
// console.log(animals.length) // array length (taille)
// console.log(animals.indexOf("Dogs")); // lookup if the element exist in the array and return the index
// const animalIndex = animals.indexOf(userAnswer);
// let animalIndex = -1; // initialize with -1 not found

// For Loop
// for (let i = 0; i < arrayLength; i++) {
//     const animal = animals[i].toLowerCase();
//     if (animal === userAnswer) {
//         animalIndex = i;
//         // animalIndex = animals.indexOf(animals[i])
//         // console.log(animalIndex);
//     }
// }

// console.log(animalIndex);
// if (animalIndex !== -1) {

//     if (animals[animalIndex].toLowerCase() === "cat") {
//         console.log("Is  my favorite too!")
//     } else {
//         console.log("Not my favorite!");
//     }

// } else {
//     console.log("Animal not found in the list!");
// }

// For Loop ->

// const animals = ["Lion", "zebra", "Cat", "Duck", "Dog", "Chiken"]; // 6 elements => 5 indexes each array start with 0 index
// console.log(animals.length);
// console.log(animals[0])
// console.log(animals[1])
// console.log(animals[2])
// console.log(animals[3])
// console.log(animals[4])

// const arrayLength = animals.length;

// Loops through each index of the Array.
// 1. initialize the loop by the variable declaration or counter(iterator) let i = 0;
// 2. Loop condition
// 3. Iteration (addition) or increment
// => at the beggining 0
// => after each iteration we add (0 + 1)
// code goes inside the loop
// for (let i = 0; i < arrayLength; i++) {
//     console.log(`I eat ${animals[i].toLowerCase()}`);
//     // console.log("I love" + animals[i]);
// }


// document.onkeyup = function(event) {
//     const userGuess = event.key;

//     console.log('userGuess', userGuess);
// }



// const myFarm = ["chikens", "pigs", "cows", "horses", "ostriches"]
// const myFarmLenght = myFarm.length

// for (let i = 0; i < myFarmLenght; i++) {
//     const animal = myFarm[i]
//     console.log(animal) // solution1

//     //Solution 2
//     if (animal.charAt(0) === "c" || animal.charAt(0) === "o") {
//         console.log(`${animal} Stars with c or an o!`)
//     }
// }
// Loop iteration
//1. chickens ->index(0)
//2. pigs ->index(1)
//3. cows ->index(2)
//4. horses ->index(3)
//5. ostriches ->index(4)

/* JS Warmp UP - Student APP */

// let studentName = ""
// let studentArray = []
// let userIndex = -1





// function runApp() {
//     studentName = prompt("Add a Student Name");
// }

// function getStudentIndex() {

//     if (JSON.parse(sessionStorage.getItem("studentsArray")) !== null) {
//         return userIndex = JSON.parse(sessionStorage.getItem("studentsArray")).indexOf(studentName)
//     }
// }

// function getStudentArray() {
//     return studentArray = JSON.parse(sessionStorage.getItem("studentsArray"))
// }

// function saveStudentArray() {
//     sessionStorage.setItem("studentsArray", JSON.stringify(studentArray));
// }

// runApp()

// if (userIndex === -1) {

//     if (JSON.parse(sessionStorage.getItem("studentsArray")) !== null) {
//         studentArray = JSON.parse(sessionStorage.getItem("studentsArray"))
//     } else {
//         studentArray.push(studentName);
//         sessionStorage.setItem("studentsArray", JSON.stringify(studentArray));
//     }

// } else {
//     alert("User exist !!")
//     studentName = prompt("Add another Student Name");

//     userIndex = JSON.parse(sessionStorage.getItem("studentsArray").indexOf(studentName))

//     if (userIndex === -1) {
//         studentArray = JSON.parse(sessionStorage.getItem("studentsArray"))
//         studentArray.push(studentName);

//         sessionStorage.setItem("studentsArray", JSON.stringify(studentArray));
//     }
// }

// if (studentArray.length > 0) {
//     console.log(`====== Students Array =======`);
//     console.log(studentArray);
// } else {
//     console.log(`====== No Students Added =======`);
// }



// let studentName = ""
// let studentArray = []
// let userIndex = -1


// studentName = prompt("Add a Student Name");

// if (JSON.parse(sessionStorage.getItem("studentsArray")) !== null) {
//     userIndex = JSON.parse(sessionStorage.getItem("studentsArray")).indexOf(studentName)
// }


// if (userIndex === -1) {

//     if (JSON.parse(sessionStorage.getItem("studentsArray")) !== null) {
//         studentArray = JSON.parse(sessionStorage.getItem("studentsArray"))
//     } else {
//         studentArray.push(studentName);
//         sessionStorage.setItem("studentsArray", JSON.stringify(studentArray));
//     }

// } else {
//     alert("User exist !!")
//     studentName = prompt("Add another Student Name");

//     userIndex = JSON.parse(sessionStorage.getItem("studentsArray").indexOf(studentName))

//     if (userIndex === -1) {
//         studentArray = JSON.parse(sessionStorage.getItem("studentsArray"))
//         studentArray.push(studentName);

//         sessionStorage.setItem("studentsArray", JSON.stringify(studentArray));
//     }
// }

// if (studentArray.length > 0) {
//     console.log(`====== Students Array =======`);
//     console.log(studentArray);
// } else {
//     console.log(`====== No Students Added =======`);
// }

// Functions

// function calculate(number1, number2) {
//     return number1 + number2
// }

// const calculate = (number1, number2) => {
//     return number1 + number2
// }

// console.log(calculate(2, 3))

// function consoleInside(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }

//     console.log("----------------")
// }



// const myFarm = ["Chicken", "Dog", "Cat"]
// const classArray = ["Rajab", "Emma", "Iddi", "Zai", "Willy"]
// const numbers = 10


// EVENT

// const btnSubmit = document.getElementById("btnSubmit")
// const btnSubmit = document.querySelector("#btnSubmit")

// Event onclick
// btnSubmit.addEventListener("click", () => {
//     console.log("clicked")
//         // console.log(e)
//     consoleInside(myFarm)
//     consoleInside(classArray)
// });

// let number = 0

// document.addEventListener("keyup", (e) => {
//     console.log(e.key)
//     const userKeyInput = e.key

//     if (userKeyInput === "y") {
//         number++
//     }

//     console.log(number);
// })

// console.log(calculate(20, 30))

// consoleInside(myFarm)
// consoleInside(classArray)

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
//    const computerChoices = ["r", "p", "s"];

// Randomly chooses a choice from the options array. This is the Computer's guess.
// const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
//let computerChoices = ["r", "p", "s"];

// Creating letiables to hold the number of wins, losses, and ties. They start at 0.
// let wins = 0;
// let losses = 0;
// let ties = 0;

// Create letiables that hold references to the places in the HTML where we want to display things.
// let directionsText = document.getElementById("directions-text");
// let userChoiceText = document.getElementById("userchoice-text");
// let computerChoiceText = document.getElementById("computerchoice-text");
// let winsText = document.getElementById("wins-text");
// let lossesText = document.getElementById("losses-text");
// let tiesText = document.getElementById("ties-text");

// This function is run whenever the user presses a key.
//document.onkeyup = function(e) {

// Determines which key was pressed.
// let userGuess = e.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
// let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Reworked our code from last step to use "else if" instead of lots of if statements.

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
// if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

//     if ((userGuess === "r" && computerGuess === "s") ||
//         (userGuess === "s" && computerGuess === "p") ||
//         (userGuess === "p" && computerGuess === "r")) {
//         wins++;
//     } else if (userGuess === computerGuess) {
//         ties++;
//     } else {
//         losses++;
//     }

//     // Hide the directions
//     directionsText.textContent = "";

//     // Display the user and computer guesses, and wins/losses/ties.
//     userChoiceText.textContent = "You chose: " + userGuess;
//     computerChoiceText.textContent = "The computer chose: " + computerGuess;
//     winsText.textContent = "wins: " + wins;
//     lossesText.textContent = "losses: " + losses;
//     tiesText.textContent = "ties: " + ties;
// }
//};
// ===> DONE
// TYPES VARIABLES (NUMBER, STRING, BOOLEAN, ARRAY, FUNCTION, OBJECT)
// LOOP (FOR)
// FUnctions
// EVENTS (KEYUP, CLICK)
// LINK ELEMENTS JS TO HTML
// WRITE CONTENT IN THE DOM (DOCUMENT OBJECT MODEL) - PAGE
// CREATE ELEMENTS IN THE DOM FROM JS

// ELement Reference
// let btnSubmit = document.getElementById("btnSubmit")
const btnSubmit = document.querySelector("#btnSubmit")
const foodList = document.querySelector("#foodList")
const inputArrayElement = document.querySelector("#inputArrayElement")

// Array
const foods = []

//Function
const food = (foods) => {
    const ul = document.createElement("ul")
    foodList.textContent = ""
    for (let i = 0; i < foods.length; i++) {
        const li = document.createElement("li")
        li.textContent = foods[i]

        ul.appendChild(li)
        console.log(foods[i])
    }

    foodList.appendChild(ul)

    /* 
    <div id="foodList">
        <ul>
            <li>Beans</li>
            ...
        </u>
    </div>
    */
}

//
function addElementToArray() {
    foods.push()
}

//EVENT - CLick
btnSubmit.addEventListener("click", () => {
    // food(foods)
    const food = inputArrayElement.value

    /* 
    - Send value to the function so it can be added to the array
    - Display the array list 
    */
})



// ===> COMING
/// Session Storage - LocalStorage - Cookie -->

// MORE LOOP (MAP, FILTER, FOREACH)











































































































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