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
// const btnSubmit = document.querySelector("#btnSubmit")
// const foodList = document.querySelector("#foodList")
// const inputArrayElement = document.querySelector("#inputArrayElement")

// // Array
// // let foods = (sessionStorage.getItem("foods") !== null) ? sessionStorage.getItem("foods") : [] // ternary operator -> if / else statement
// let foods = [];

// // SAve to SessionStorage / LocalStorage
// function saveToArray(food) {
//     /* Save array to
//     sessionStorage -> Save temporary expire when session ends

//     localStorage -> Save indefinetely never expire
//     */
//     // Save element into Array
//     foods.push(food)
//         // JSON.stringify -> Array (Object) transform into a string
//     sessionStorage.setItem("foods", JSON.stringify(foods))

//     // sessionStorage.removeItem("foods") -> Remove saved data from sessionStorage
//     // sessionStorage.clear() -> remove all saved data from sessionStorage
// }

//Function
// const displayFood = (foods) => {
//     const ul = document.createElement("ul")

//     foodList.textContent = ""

//     for (let i = 0; i < foods.length; i++) {
//         const li = document.createElement("li")
//         li.textContent = foods[i]

//         ul.appendChild(li)
//         console.log(foods[i])
//     }

//     foodList.appendChild(ul)


//     inputArrayElement.value = ""
//     inputArrayElement.focus()
//         /*
//         <div id="foodList">
//             <ul>
//                 <li>Beans</li>
//                 ...
//             </u>
//         </div>
//         */
// }

//Add element to Array
// function addElementToArray(food) {
//     // // Add food to the Array
//     // foods.push(food)

//     // Save Array to Session
//     saveToArray(food)

//     // Display the elements of the Foods Array

//     if (sessionStorage.getItem("foods") !== null) {
//         foods = JSON.parse(sessionStorage.getItem("foods"));

//         displayFood(foods)
//     }


// }

//EVENT - CLick
// btnSubmit.addEventListener("click", () => {
//     // food(foods)
//     const food = inputArrayElement.value

//     /*
//     - Send value to the function so it can be added to the array
//     - Display the array list
//     */

//     if (foods.indexOf(food) !== -1) {
//         alert("Food already exist!!")
//         inputArrayElement.value = ""
//     } else {
//         //Call the function addElementToArray
//         addElementToArray(food)
//     }

// })

// When page load
// if (sessionStorage.getItem("foods") !== null) {

//     foods = JSON.parse(sessionStorage.getItem("foods"))

//     /*
//     JSON.stringify() -> Array transform into string
//     JSON.parse() -> convert from string back to a object (array)
//     */

//     displayFood(foods)
// }


// ===> COMING
/// Session Storage - LocalStorage - Cookie -->

// MORE LOOP (MAP, FILTER, FOREACH)


/* FUNCTION
 WHY / WHEN
 -> Reduce code repetition
 -> To execute a certain logic (task)
 -> invoke myFunction(arguments-value)
 -> take paramater function(parameter)
 -> can be used as a callback function in events
 or when it's used as an argument to another function

 TYPE
 -> Return a result "return (value)"
 -> VOID does not return any result just execute
 -> anonymous - no name

 FORM
 -> function() {
    ...
 }

 -> () => {
    ....
 }

 const myFunction = () => {
    .....
 }

const myFunction = function() {
    ....
}

INVOKE
myFunction()
*/

//WILLY
// function calculate(surface){
//     return longeur * largeur
// }

// let surface = longeur * largeur

//EMMAK
// const inputLargeur = document.querySelector("#inputLargeur")
// const inputLongeur = document.querySelector("#inputLongeur")
// const buttonCalculate = document.querySelector("#buttonCalculate")
// const surfaceResult = document.querySelector("#surfaceResult")

// function calculateSurface(longeur, largeur) {
//     return longeur * largeur
// }

// buttonCalculate.addEventListener("click", () => {

//     let longeur = parseInt(inputLongeur.value)
//     let largeur = parseInt(inputLargeur.value)
//     let dimension = {
//         "longeur": longeur,
//         "largeur": largeur,
//         "surface": surface
//     }

//     if (!isNaN(largeur) && !isNaN(longeur)) {
//         let surface = calculateSurface(longeur, largeur)

//         surfaceResult.textContent = surface
//         console.log('surface', surface)
//     } else {

//         alert("Only numbers allowed!!")
//     }

//     // Reset value
//     inputLargeur.value = ""
//     inputLongeur.value = ""

//     inputLongeur.focus()
// })



// parentElement.append(students,teachers)

// parentElement.appendChild(students)
// parentElement.appendChild(teachers)



/*
TYPE VARIABLES
String
Array
Boolean
Object
Number

REFERENCE ELEMENTS

EVENTS

FUNCTIONS
Rajab, Willy

SESSION
Iddi, Rajab, Willy

LOOP
for
map

*/


/*
1. Create an object that will save the `Calculation`
- longeur
- largeur
- surface

2. Save the object into an array

3. Save the Array into the session

4. Display Array elements (calculation ) as a list on the page


*/


// LOOPS

// const myFood = ["Chicken", "Fish", "Lion"]
// const myObjectArray = [{
//     largeur: 20,
//     longeur: 20,
//     surface: 400
// }]



// For loop

// for (let i = 0; i < myFood.length; i++) {
//     const chakula = myFood[i]
//     console.log(chakula)
// }

// MAP -> loop through array, modified the array if needs too, check if the index of array
// myFood.map((element, index) => {
//     // const chakula = food

//     console.log(chakula)
// })

// myObjectArray.map(({ longeur, largeur, surface }) => {

//     console.log(`longeur ${longeur} largeur ${largeur} surface ${surface}`)
// })

// const numbers = [1, 2, 3, 4]

// console.log('numbers--->original', numbers)
// const myNewNumberArray = numbers.map((number) => {
//     return number * 2
// })


// console.log("modified--->", myNewNumberArray)

// const index = numbers.map((number) => number).indexOf(6)
// const index = numbers.indexOf(2)
// console.log("index", index)


// const courseArray = ["Math", "Bio"]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const oddNumbers = numbers.filter((number) => number % 2 == 1)

// console.log('oddNumbers', oddNumbers)

// const studentsArray = [{
//         firstName: "Yunus",
//         lastName: "Ibrahim",
//         courseName: ["Math", "Bio"]
//     },
//     {
//         firstName: "Emma",
//         lastName: "Kabale",
//         courseName: ["Math"]
//     }
// ]

// const name = studentsArray.map(({ firstName, lastName, courseName }, index) => {



// })

// const classArray = [{
//         name: "IT",
//         year: 2022,
//     },
//     {
//         name: "Coding",
//         year: 2022
//     }
// ]

// const addClass = (classObject) => {
//     const { name, year } = classObject;

//     // not destructuring the folowing object
//     const classIndex = classArray.findIndex((classInfo) => {

//         if (classInfo.name === name && classInfo.year === year) {
//             return true
//         }

//         return false
//     })

//     console.log('classIndex', classIndex)

//     // if the class does not exist add it to the array
//     if (classIndex === -1) {
//         classArray.push(classObject)
//     }
// }

// addClass({ name: "Coding", year: 2023 })

// console.log('classArray', classArray)

// courseArray.map((course) => {

//     console.log(course)
// })

// const studentsList = document.querySelector("#studentsList")
// we can use object destructuring (extract property of an object) them so we can access them easely
// studentsArray.map(({ firstName, lastName, courseName }, index) => {

//     if (index % 2 !== 0) {

//     }
//     // console.log(firstName, lastName, courseName)
//     const studentLi = document.createElement("li")
//     const firstNameP = document.createElement("p")
//     const lastNameP = document.createElement("p")
//     const courseP = document.createElement("p")
//     const courseUl = document.createElement("ul")
//     const breakSpace = document.createElement("br")

//     firstNameP.textContent = `First Name: ${firstName}`
//     lastNameP.textContent = `Last Name: ${lastName}`
//     courseP.textContent = "Courses:"


//     // studentsList.innerHTML = `
//     // <p>First Name: ${firstName}</p>
//     // <p>Last Name: ${lastName} </p>
//     // <ul>
//     // ${courseName.map((course) => `
//     //     <li>${course}</li>
//     // `)}
//     // </ul>
//     // `


//     studentLi.appendChild(firstNameP)
//     studentLi.appendChild(lastNameP)
//     studentLi.appendChild(courseP)
//     studentLi.appendChild(breakSpace)

//     courseName.map((course) => {
//         const courseLi = document.createElement("li")

//         courseLi.textContent = course

//         courseUl.appendChild(courseLi)
//     })

//     courseP.appendChild(courseUl)
//     studentsList.appendChild(studentLi)
// })

// // const index = courseArray.map((course) => course).indexOf("Bio")
// // const index = courseArray.indexOf("Math")
// // console.log('index', index)

// let numberOne // value undefined -> type undefined
// let numberTwo = null //value empty -> type object
// let numberThree = 0 // value zero -> type number

// console.log(typeof(numberOne), typeof(numberTwo), typeof(numberThree))

/* Create a form (add a new student to a class)

- heading -> Add a new student
- inputs
  - First name
  - Last name
  - Phone number
  - Email
  - Class Name (Select -> dynamic)
  - buttons -> submit / cancel

===> Once the form is submited
- Save the student into the class array
- Save the class array into the session
- Display the list of student in the class
- Once clicked on the specific stundent display student information

CA
===
- Form need to be secured (can't send empty value) and styled
- Display student list in a class (Student full name - Phone number )
    eg: Class list "Coding"
        Emma Kabale - 79 000 000
        Iddi Juma   - 77 000 000

       Class List "Design"
       Emma Kabale - 79 000 000
       Zai Ndizeye - 75 000 000

- Display student information on the page once clicked (First name, Last name, Phone number, Email)
    eg: Fisrt name: Emma
        Last name:  Kabale
        Phone number: 79 000 000
        Email: emmak@afriticgroup.com
        classes: ["Coding"]

*/
// Reference
// const STUDENT_LIST_REF = document.querySelector("#studentsList")

// // Student List Array
// const studentListArray = [{
//     studentName: "Willy",
//     age: 18,
// }, {
//     studentName: "Rajab",
//     age: 18,
// }, {
//     studentName: "Emmak",
//     age: 18,
// }, {
//     studentName: "Zai",
//     age: 18,
// }]

// Loop throug array and display content table

// studentListArray.map((student) => {

//     const { studentName, age } = student

//     // const studentListTR = document.createElement("tr")
//     // const studentListTDStudentName = document.createElement("td")
//     // const studentListTDStudentAge = document.createElement("td")

//     // studentListTDStudentName.textContent = studentName
//     // studentListTDStudentAge.textContent = age


//     // studentListTR.append(studentListTDStudentName, studentListTDStudentAge)

//     // STUDENT_LIST_REF.appendChild(studentListTR)

//     STUDENT_LIST_REF.innerHTML += `
//         <tr>
//             <td>${studentName}</td>
//             <td>${age}</td>
//         </tr>
//     `
// })

// const students = ['Rajab', 'Emmak', 'Willy']

// const [firstStudent, secondStudent, thirdStudent] = students

// console.log(firstStudent, secondStudent, thirdStudent)

// for (let i = 0; i < studentListArray.length; i++) {
//     const { studentName, age } = studentListArray[i];

//     STUDENT_LIST_REF.innerHTML += `
//         <tr>
//             <td>${studentName}</td>
//             <td>${age}</td>
//         </tr>
//     `
// }










































































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


/*
C R U D (DATA)
Create -> add data kwenye DB, Array, Session (Form) 

Read -> Read? and Display data from DB, Array[{}], Session  

Update -> Edit existing data DB, Array[{}], Session

Delete -> Remove existing data BD, Array[{}], Session // Update field Deleted On ... (Archive)

*/
// Global Variables 
let CLASS_ARRAY = []
let STUDENT_ARRAY = []
const CLASS_ARRAY_STORAGE_KEY = "classArray"
const STUDENT_ARRAY_STORAGE_KEY = 'studentArray'
let CLASS_ARRAY_SIZE = 0
let STUDENT_ARRAY_SIZE = 0
let STORAGE_KEY = ""

// References
// Class
const btnDisplayClassFormRef = document.querySelector("#btnDisplayClassForm")
const formClassRef = document.querySelector("#formClass")
const classNameRef = document.querySelector("#className")
const classYearRef = document.querySelector("#classYear")
const classSizeRef = document.querySelector("#classSize")
const btnSaveClassRef = document.querySelector("#btnSaveClass")
const addClassFormRef = document.querySelector("#addClassForm")
const classListDataRef = document.querySelector("#classListData")
const btnUpdateClassRef = document.querySelector("#btnUpdateClass")

// Student
const bntDisplaytudentFormRef = document.querySelector("#bntDisplaytudentForm")
const formStudentRef = document.querySelector("#formStudent")
const addStudentFormRef = document.querySelector("#addStudentForm")
const firstNameRef = document.querySelector("#firstName")
const lastNameRef = document.querySelector("#lastName")
const emailRef = document.querySelector("#email")
const phoneNumberRef = document.querySelector("#phoneNumber")
const btnEnrollStudentRef = document.querySelector("#btnEnrollStudent")
const classListRef = document.querySelector("#classList")



// FUNCTIONS

// DIsplay Class Data on the page load
const displayClassDataOnPageLoad = (classArray) => {
    classListDataRef.innerHTML = ""

    //Loop through the class data
    classArray.map(({ id, name, size, year }) => {
        classListDataRef.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${size}</td>
                <td>${year}</td>
                <td>
                    <i data-id="${id}" data-type="edit-icon" class="icon edit-icon"></i> 
                    <i data-id="${id}" data-type="delete-icon" class="icon delete-icon"></i>
                </td>
            </tr>
        `
    })
}

// Get data from storage 
const getDataFromStorage = (STORAGE_KEY) => {
    if (localStorage.getItem(STORAGE_KEY) !== null) {
        return JSON.parse(localStorage.getItem(STORAGE_KEY))
    }

    return null
}

// Save data to Storage
const saveDataToStorage = (STORAGE_KEY, arrayData, data) => {
    // Add data to Array
    arrayData.push(data)

    // Save Array to Storage (Session / Local)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arrayData))

    //Update CLass list on the page 
    displayClassDataOnPageLoad(arrayData)
}

// Delete element from array 
const deleteElementFromArray = (elementID, dataArray, STORAGE_KEY) => {
    const newDataArray = dataArray.filter(({ id }) => id !== elementID)

    // update localstore with the new array
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newDataArray))

    // Display New Data on the page
    displayClassDataOnPageLoad(newDataArray)
}

// Save Class Info
// const saveClass = (classInfo) => {
//         // Check if a class with the same name and year exist 
//         // CASE 1 -> when the storage is empty
//         if (localStorage.getItem(CLASS_ARRAY_STORAGE_KEY) === null) {
//             saveDataToStorage(CLASS_ARRAY_STORAGE_KEY, CLASS_ARRAY, classInfo)

//         } else {
//             // CASE 2 -> when the storage is not empty
//             let classArray = getDataFromStorage(CLASS_ARRAY_STORAGE_KEY)

//             if (classArray !== null) {
//                 // Add classInfo to Array
//                 const { name, year } = classInfo
//                 const classIndex = classArray.findIndex((classData) =>
//                     classData.name === name && classData.year === year)

//                 if (classIndex === -1) {
//                     saveDataToStorage(CLASS_ARRAY_STORAGE_KEY, CLASS_ARRAY, classInfo)
//                 } else {
//                     alert(`The Class Name ${name} and Year ${year} exist!!`)
//                 }
//             }
//         }
//     }
/* STEPS TO CHANGE A FUNCTION FROM A SEPEFIC ONE TO A GLOBAL ONE 
    -> Function name 
    -> Similarities / Differencies (Need to return data??) 
    -> Parameters / properties
    -> REFACTORING (Keep It Simple Stupid / Do not Repeat Yourself)
*/

// get Index 
// const getIndex = (array, ) => {

// }

const saveData = (ARRAY_STORAGE_KEY, ARRAY_DATA, data, arguments) => {
    // Check if a student with the same name and year exist 
    // CASE 1 -> when the storage is empty

    if (localStorage.getItem(ARRAY_STORAGE_KEY) === null) {
        saveDataToStorage(ARRAY_STORAGE_KEY, ARRAY_DATA, data)

    } else {
        // CASE 2 -> when the storage is not empty
        let arrayData = getDataFromStorage(ARRAY_STORAGE_KEY)

        if (arrayData !== null) {
            //Add data to Array
            //const { name, year } = data
            const dataIndex = arrayData.findIndex(arguments)

            if (dataIndex === -1) {
                saveDataToStorage(ARRAY_STORAGE_KEY, ARRAY_DATA, data)
            } else {
                alert(`The data exist!!`)
            }
        }
    }
}


// Save Student Info
// const saveStudent = (studentInfo) => {
//     // Check if a student with the same name and year exist 
//     // CASE 1 -> when the storage is empty
//     if (localStorage.getItem(STUDENT_ARRAY_STORAGE_KEY) === null) {
//         saveDataToStorage(STUDENT_ARRAY_STORAGE_KEY, STUDENT_ARRAY, studentInfo)

//     } else {
//         // CASE 2 -> when the storage is not empty
//         let studentArray = getDataFromStorage(STUDENT_ARRAY_STORAGE_KEY)

//         if (studentArray !== null) {
//             // Add studentInfo to Array
//             const { name, year } = studentInfo
// const studentIndex = studentArray.findIndex((studentData) => studentData.name === name && studentData.year === year)

//             if (studentIndex === -1) {
//                 saveDataToStorage(STUDENT_ARRAY_STORAGE_KEY, STUDENT_ARRAY, studentInfo)
//             } else {
//                 alert(`The Class Name ${name} and Year ${year} exist!!`)
//             }
//         }
//     }
// }


// Initialize  DATA 
const dataInitialization = () => {
    // Initialize class data 
    let classArray = getDataFromStorage(CLASS_ARRAY_STORAGE_KEY)

    if (classArray !== null) {
        CLASS_ARRAY = classArray
        displayClassDataOnPageLoad(CLASS_ARRAY)
    }

    // Initialize Student data
    let studentArray = getDataFromStorage(STUDENT_ARRAY_STORAGE_KEY)

    if (studentArray !== null) {
        STUDENT_ARRAY = studentArray
    }
}

// Display Class list 
const displayCheckboxClassList = () => {
    // Get the class List from the local Storage 
    let classArray = getDataFromStorage(CLASS_ARRAY_STORAGE_KEY)
    const divClassContainer = document.createElement("div")

    classListRef.innerHTML = ""

    classArray.map(({ id, name }) => {
        divClassContainer.innerHTML += `
        <div>
            <input type="checkbox" value="${id}">
            <label >${name}</label>
         </div>
         `
    })

    classListRef.appendChild(divClassContainer)
}

// EVENTS
addClassFormRef.addEventListener("submit", (e) => {
    e.preventDefault()

    const bntSubmitterId = e.submitter.id
    const classNameValue = classNameRef.value
    const classYearValue = classYearRef.value
    const classSizeValue = classSizeRef.value

    if (bntSubmitterId === "btnUpdateClass") {
        //

    }

    if (bntSubmitterId === "btnSaveClass") {

        // Get Class array from Store 
        const classArray = getDataFromStorage(CLASS_ARRAY_STORAGE_KEY)

        // update class array size variable 
        if (classArray !== null) {
            CLASS_ARRAY_SIZE = classArray.length
        }

        // Class Object 
        const classInfo = {
            id: CLASS_ARRAY_SIZE + 1,
            name: classNameValue,
            year: classYearValue,
            size: classSizeValue,
        }

        const arguments = (classData) => classData.name === classInfo.name && classData.year === classInfo.year

        // Save Class info 
        saveData(CLASS_ARRAY_STORAGE_KEY, CLASS_ARRAY, classInfo, arguments)

        //Clear form
        addClassFormRef.reset()
    }
})

// Enroll students 
addStudentFormRef.addEventListener("submit", (e) => {
    e.preventDefault()

    const firstNameValue = firstNameRef.value
    const lastNameValue = lastNameRef.value
    const emailValue = emailRef.value
    const phoneNumberValue = phoneNumberRef.value
    const classListCheckboxes = document.querySelectorAll('input[type=checkbox]:checked')
    const checkboxesArrayLength = classListCheckboxes.length

    // Check if a class was selected 
    if (checkboxesArrayLength > 0) {

        // Get Student array from LocalStorage 
        const studentArray = getDataFromStorage(STUDENT_ARRAY_STORAGE_KEY)


        // update class array size variable 
        if (studentArray !== null) {
            STUDENT_ARRAY_SIZE = studentArray.length
        }

        // Student Object 
        let studentInfo = {
            id: STUDENT_ARRAY_SIZE + 1,
            firstName: firstNameValue,
            lastName: lastNameValue,
            email: emailValue,
            phoneNumber: phoneNumberValue,
            classList: [],
        }

        // Get Selected Class value
        classListCheckboxes.forEach((checkbox) => studentInfo.classList.push(checkbox.value))

        const arguments = (studentData) => studentData.email === studentInfo.email && studentData.phoneNumber === studentInfo.phoneNumber

        // Save Student Info
        saveData(STUDENT_ARRAY_STORAGE_KEY, STUDENT_ARRAY, studentInfo, arguments)

        // Clear form 
        addStudentFormRef.reset()

    } else {
        alert("Please select at least one class!")
    }
})



// Unhide Class form 
btnDisplayClassFormRef.addEventListener("click", () => {
    formClassRef.classList.toggle("hide")
    btnAddClassRef.classList.remove("hide")
    btnUpdateClassRef.classList.add("hide")
})

// Unhide / Show Student form 
bntDisplaytudentFormRef.addEventListener("click", () => {

    displayCheckboxClassList()

    formStudentRef.classList.toggle("hide")

    // setTimeout(() => {
    //     console.log("inside timeout")
    //     formStudentRef.classList.toggle("hide")
    // }, 2000);

    // setInterval(() => {
    //     console.log("every-second")
    // }, 1000);

})

// Listening to all click event
document.addEventListener("click", (e) => {
    //target.nodeName -> determine the name of the element "I","DIV","BUTTON"

    // Get Class Array
    let classArray = getDataFromStorage(CLASS_ARRAY_STORAGE_KEY)

    // Run only when an icon is clicked
    if (e.target.nodeName === "I") {
        // Get the element that we want to delete from the array
        const classId = parseInt(e.target.dataset.id)

        // RUn only when the delete icon is clicked
        if (e.target.dataset.type === "delete-icon") {

            if (confirm("Are you sure you want to delete it!!")) {
                // Check if classArray is not empty
                if (classArray !== null) {
                    CLASS_ARRAY = classArray
                    deleteElementFromArray(classId, CLASS_ARRAY, CLASS_ARRAY_STORAGE_KEY)
                }
            }
        }

        // Run only when the edit icon is clicked
        if (e.target.dataset.type === "edit-icon") {
            console.log('edit', classId)
                /*
                Step 0 - Trigrer event (Click on edit button) -> done
                Step 1 - Get ClassId  -> done
                Step 2 - Access / Read the selected class information from the lacalstorage
                Step 3 - Display a form with class information filled already 
                Step 4 - Update the class information on the array
                            - Get class index from the class
                            - Update class information (replace)
                            - Save updated array to localstorage
                Step 5 - Display updated information to the page 
                */

            //Step 2 Access / Read the selected class information from the lacalstorage
            const selectedClassInformation = classArray.find((classInfo) => classInfo.id === classId)
            console.log('selectedClassInformation', selectedClassInformation)

            // Step 3 Display a form with class information filled already
            // Step 3-1 open class form 
            formClassRef.classList.toggle("hide")
            btnSaveClassRef.classList.add("hide")
            btnUpdateClassRef.classList.remove("hide")

            // Step 3-2 Fill the information on the form 
            const { name, year, size } = selectedClassInformation

            classNameRef.value = name
            classYearRef.value = year
            classSizeRef.value = size

            /* How to get the class id to the form before submitting
                - 
            ```
            */
        }
    }
})

// // Update class 
// btnUpdateClassRef.addEventListener("click", (e) => {
//     e.preventDefault()

//     console.log('e', e)
// })

// APP init
dataInitialization()