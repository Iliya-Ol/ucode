let beginRange = +prompt('Begin from ...? ')
let endRange = +prompt('Finish to ...? ')
let result = ''

function checkDivision(beginRange, endRange){
    
    if (beginRange  > 0 && endRange <= 100){
    for(i = +beginRange; i <= +endRange; i++){
        if (i % 2 == 0) {
            result += i + "  is even";
            if (i % 3 == 0) {
              result += ", is a multiple of 3";
                if (i % 10 == 0)
                  result += ", is a multiple of 10";
            }
            else if (i % 10 == 0)
              result += ", is a multiple of 10";
          }
          else if (i % 2 == 0) {
            result += i + "  is even";
          }
          else if (i % 3 == 0) {
            result += i + "  is a multiple of 3";
          }
          else if (i % 10 == 0) {
            result += i + "  is a multiple of 10";
          }
          else
          result += i + "  -";
          result += "\n";
        
    }

    return result
} else {
    return 'Wrong input!';
}

    


}
console.log(checkDivision(beginRange, endRange));




// 1 -
// 2 is even
// 3 is a multiple of 3
// 4 is even
// 5 -
// ...
// 60 is even, a multiple of 3, a multiple of 10