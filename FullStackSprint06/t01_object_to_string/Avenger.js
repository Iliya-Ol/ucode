// exports.Avenger = class {
//   constructor(obj) {
//     this.obj = obj;
//     this.name = obj.name;
//     this.alias = obj.alias;
//     this.gender = obj.gender;
//     this.age = obj.age;
//     this.powers = obj.powers;
//   }

//   toString() {
//     return `${Object.keys(this.obj)[0]}: ${this.name}
// ${Object.keys(this.obj)[2]}: ${this.gender}
// ${Object.keys(this.obj)[3]}: ${this.age}`;
//   }
//   avenger(){
//     return this.alias.toUpperCase()
//   }
// };

// Avenger.prototype.avenger = function(){
//   return this.name
// }


function avenger(option){
  let Avenger = () => ([
    `${option.alias.toUpperCase()}`,
    `${option.powers.join('\n')}`
  ]).join('\n')
      Avenger.toString = () => [
        `name: ${option.name}`,
        `gender: ${option.gender}`,
        `age: ${option.age}`
      ].join('\n');
      return Avenger
}

module.exports.Avenger = avenger



//------TEST------//

//const { Avenger } = require("./Avenger");

// const stark = new Avenger({
//   name: "Tony Stark",
//   alias: "Iron Man",
//   gender: "man",
//   age: 38,
//   powers: ["intelligence", "durability", "magnetism"],
// });
// // console.log(stark)
// // console.log(stark.toString())

// const natasha = new Avenger({
//   name: "Natasha Romanoff",
//   alias: "Black Widow",
//   gender: "woman",
//   age: 35,
//   powers: ["agility", "martial arts"],
// });

// const examine = (avenger) => {
//   console.count("Avenger");
//   console.group("*** Avenger introduced ***");
//   console.log(avenger.toString());
//   console.groupEnd();
//   console.group("*** Avenger called ***");
//   console.log(avenger())
//   console.groupEnd();
//   console.group("*** Avenger\'s internals ***");
//   console.log(avenger, '\n');
//   console.groupEnd();
// };
// examine(stark);
// examine(natasha);