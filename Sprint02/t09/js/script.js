function Func(team, universe, race, eyeColor, hairColor){
    let BlackWidow = 'This is Black Widow'
    let SupermanRobin = 'This is Superman or Robin'
    if ((team == 'Avengers' || team == 'S.H.I.E.L.D') && universe == 'Marvel' && race == 'human' 
    && eyeColor == 'green' && (hairColor == 'lightBrown' || hairColor == 'green')){
        alert(BlackWidow);
    }
    if ((teams == 'Justice League Of Americ' || teams == 'Teen Titans') &&
        universe == 'DC Comics' && (race == 'human' || race == 'kryptonian') &&
        eyeColor == 'blue' && hairColor == 'black') {
          alert(SupermanRobin);
    }

}
let team = 'Avengers'
let universe = 'Marvel'
let race = 'human'
let eyeColor = 'green'
let hairColor = 'green'

Func(team, universe, race, eyeColor, hairColor)