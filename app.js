// 1. function syntex:
function greet(name = "Hello", message = "Pradeep") {
  //console.log("Hello Pradeep");
  return `${name} ${message}`;
}
console.log(greet());
// 2. arrow function syntex:
// announimous functions, only 0one default export in a component or js filr

// export default function (){
//     console.log("hello")
// }

export default (useName, status) => {
  console.log("Hello");
  return useName + status;
};

// 3. objects:
const user = {
  userName: "Max",
  age: 38,
  greet() {
    console.log("Hello");
    console.log(this.age);
  },
};
user.greet();

// 4. classes:

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi");
  }
}

const user1 = new User("Max", 30);
console.log(user1);
user1.greet();

// 5. Array :
const hobbies = ["sports", "Reading", "TV"];
console.log(hobbies[0]);

// Array Methods
// findIndex return position of index else returns -1
const result = hobbies.findIndex((item) => item === "sports");
console.log(result);
// Map method returns new array Add something transform
const editedHobbies = hobbies.map((item) => item + "!");
// example-1:
const editedHobbies1 = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies1);

// example-2 :
function transformToObjects(numberArray) {
  const result = numberArray.map((number) => ({ val: number }));
  return result;
}

const printResult = transformToObjects([1, 2, 3]);
console.log(printResult);

//  6. Destructuring both array and object and functions:

const array = ["Pradeep", "Kumar"];
// const [firstName, surName] = ["Sai", "Durga"];
const [firstName, surName] = array;
// const firstName = array[0];
// const surName = array[1];

// const userDetails = {
//   firstName: "Sai",
//   lastName: "Durga",
// };
// {firstName as name (meaning:alias)}
// const { firstName: name, lastName } = user;
//  console.log(firstName);
// console.log(name);
// console.log(lastName);

function storeOrder(order) {
  localStorage.setItem("id", order.id);
  localStorage.setItem("currency", order.currency);
}

function storeOrder({ id, currency }) {
  localStorage.setItem("id", id);
  localStorage.setItem("currency", currency);
}

// 7. spread operator

const hobbiesRoutine = ["sports", "Reading", "TV"];
const clone = [...hobbiesRoutine];
console.log(clone);

const userDetails = {
  firstName: "Sai",
  lastName: "Durga",
};

const objectClone = { ...userDetails };
console.log(objectClone);

// 8. controls
// const password = prompt();

const password = "Hello";
if (password === "Hello") {
  console.log("Hello");
} else if ((password = "hello")) {
  console.log("hello");
} else {
  console.log("Not get Access");
}

const dailyHobbies = ["sports", "Reading", "TV"];
for (let each of dailyHobbies) {
  console.log(each);
}

// 9. Using Functions as Values:

function handle() {
  console.log("One.");
}

const handle2 = () => {
  console.log("Two..");
};
setTimeout(handle, 2000);
setTimeout(handle2, 3000);
setTimeout(() => {
  console.log("Third...");
}, 4000);

function greeter(greet) {
  greet();
}
greeter(() => {
  console.log("Hello!");
});

// 10. Defining Functions Inside Of Functions

function init() {
  function greet() {
    console.log("Greet");
  }
  greet();
}

init();

// 11. Reference vs Primitive Values

let message = "Hello Everyone";
message = message.concat("!!!");
// this will produce new string instead of editing old string - premitive types
console.log(message);
// mutate original array
const habits = ["sports", "Reading", "TV"];
hobbies.push("practice");
console.log(habits);
