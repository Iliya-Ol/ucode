// const button = document.getElementById('btn')
const block = document.getElementById('lab')
const name = document.getElementById('hero')
// button.addEventListener('click', ()=>{
//     name.innerHTML = 'uhhuhuhuh'
//     name.style.
//     // block.style.backgroundColor = 'red'
// })
function transformation(){
    if(name.innerHTML == 'Bruce Banner'){
        block.style.backgroundColor = '#70964b'
        name.innerHTML = 'Hulk'
        name.style.fontSize = '130px'
        hero.style.letterSpacing = '6px'
    } else {
        block.style.backgroundColor = '#ffb300'
        name.innerHTML = 'Bruce Banner'
        name.style.fontSize = '60px'
        hero.style.letterSpacing = '2px'

    }
}
