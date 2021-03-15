let x = 5; 
let result = '';
let result1 = '';
let k = 0;
let i = 0;

while (i <= 10){
    result = result + x + ' * ' + i + ' = ' + x * i + '\n';
    i++;
}

alert(result);

do {
    result1 = result1 + x + ' * ' + k + ' = ' + x * k + '\n';
    k++;
    
    
} 
while(k <= 10);
alert(result1)
