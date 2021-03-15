function firstElements(arr, n){
let x = [];  
for (i = 0; i < n && i < arr.length; ++i)
   x.push(arr[i]);
   return x;
}




let heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
// var eji=new Array(5).fill(null);
console.log(firstElements(heroes, 5));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]

console.log(firstElements(heroes, 1));
// ["Captain America"]

console.log(firstElements(heroes, 3));
// ["Captain America", "Hulk", "Thor"]

console.log(firstElements(heroes, 6));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]

console.log(firstElements(heroes, -1));
// []