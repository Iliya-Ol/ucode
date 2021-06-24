function total(addCount, addPrice, currentTotal = 0){ 
    return currentTotal += addCount * addPrice;
    }

let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
// sum = total(1, 0.3, sum);
// sum = total(1, 0.4, sum);
// sum = total(2, 0.9, sum);
// sum = total(1, 0.2, sum);
// sum = total(2, 0.25, sum);
// sum = total(1, 0.88, sum);
console.log(sum); // will return 1.08