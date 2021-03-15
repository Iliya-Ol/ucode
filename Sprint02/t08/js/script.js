function Func(){
    let number1 = prompt('Enter the value: ')
    if (number1 === '1'){
    alert( number1 * 2 / 'a')
    } else if(number1 === '2'){
    alert( (number1 - number1) / 0)
    } else if(number1 === '3'){
    alert( (number1 * Infinity)) 
    } else if(number1 === '4'){
    alert( number1 * 40000000 === Infinity )
    } else {
        alert('Wrong input')
    } 

}
Func()