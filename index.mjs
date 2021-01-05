// // const clarKent = (function () {

// //     const name = "Akosile Tayo";
// //     const secretIdentity = "Programmer";
// //     const surname = "Akosile";
// //     const introduce = function () {
// //         return `Hi, My name is ${name}`
// //     }

// //     const issuesReport = () => {
// //         return `Hi, I am a ${secretIdentity}`
// //     }

// //     const mySurname = () => {
// //         return `Hi, My surname name is ${surname}`
// //     }
// //     return { introduce, issuesReport,mySurname  };

// // })()
// // console.log(clarKent.introduce());
// // console.log(clarKent.mySurname());
// // console.log(clarKent.issuesReport());

// class User {
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//         return this;
//     }

//     login() {
//         console.log(this.email, "Just logged in")
//         return this;
//     }

//     logout() {
//         console.log(this.email, "Just logged out")
//         return this;
//     }

//     updateScore() {
//         this.score++;
//         console.log(this.email, "has a score of", this.score)
//         return this;
//     }
// }
// var userOne = new User("akosilety9gmail.com", "Tayo");
// var userTwo = new User("oluwatayoakosile.com", "Akosile");
// console.log(userOne);
// userTwo.login();
// userTwo.login().updateScore().updateScore().updateScore().updateScore().logout();

// class Admin extends User {
//     deleteUser(user) {
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }
// var users = [userOne, userTwo];
// var admin= new Admin("oluwatayoakosile.com", "Akosile");
// admin.deleteUser(userOne)
// console.log(users);

// let personalInformation = {
//     firstName: "Akosile",
//     lastName: "Oluwatayo",
//     city: "Lagos",
//     zipCode: 20002
// };
// let { firstName, lastName, city } = personalInformation;
// console.log(`Hi, i'm ${firstName} ${lastName}, i live in ${city}`);
// let [firstArray] = ["Tayo", "CodeNewbie"];

// function addressMaker(address) {
//     const { name, city, state } = address;
//     const newAddress = {
//         name,
//         city,
//         state,
//         country: "Nigeria"
//     }
//     // console.log(`Hi, im ${newAddress.name}, i live in ${newAddress.city} ${newAddress.state} ${newAddress.country}`);
// }
// // addressMaker({ name: "Akosile Oluwatayo", city: "Ebute Metta", state: "Lagos" });

// // let fullName = "Tayo is a great programmer";

// // for (const char of fullName) {
// //     console.log(char);
// // }
// let eg1 = [1, 5, 3, 4, 5, 6, 7, 8];
// let eg2 = [...eg1];
// eg2.unshift(10)
// console.log(eg1);
// console.log(eg2);

// function restParams(...nums) {
//     let total = nums.reduce((x, y) => x + y);
//     console.log(nums);
//     console.log(total);

import { Animal } from './module.mjs'
let zebra = new Animal("Zebra", "has a long Neck");
console.log(zebra.name, zebra.type);
console.log(zebra.metaData);
const set = new Set([1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6]);
set.add(3)
set.forEach(set => console.log("hallo"))
console.log(set);

