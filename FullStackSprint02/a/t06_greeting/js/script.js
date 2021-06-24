let firstName = prompt('Enter your First Name ...? ')
let lastName = prompt('Enter your Last Name ...? ')

firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()

const firstArg =/^[a-z,A-Z]{1,20}$/g.exec(firstName);
const lastArg = /^[a-z,A-Z]{1,20}$/g.exec(lastName);


if (firstArg == isNaN || lastArg == isNaN){
    alert('Wrong input')
} else {
    alert('Hello ' + firstName + ' ' + lastName + '!!!')
    console.log('Hello ' + firstName + ' ' + lastName + '!!!')
}