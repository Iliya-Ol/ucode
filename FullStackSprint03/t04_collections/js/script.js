let denys = {},
    luda = {},
    olexandra = {};
    dora = {};

let guestList = new WeakMap();

guestList
    .set(denys)
    .set(luda)
    .set(olexandra)
    .set(dora)

console.log(guestList.has(denys))
console.log(guestList.size)
console.log(guestList.delete(dora))

let menu = new Map()

menu
    .set("burger", "$15")
    .set("chips", "$7")
    .set("pizza", "$5")
    .set("salat", "$12")
    .set("pasta", "$17");

let box00 = {},
    box01 = {},
    box02 = {},
    box03 = {},
    box04 = {};

let bankVault = new WeakSet();
       
bankVault
    .add(box00, "USD")
    .add(box01, "UAH")
    .add(box02, "EUR")
    .add(box03, "PLN")
    .add(box04, "RUB");

let coinCollection = new Set();

    coinCollection.add(1)
    coinCollection.add(2)
    coinCollection.add(5)
    coinCollection.add(10)
    coinCollection.add(50)