let placeholder = document.getElementById('placeholder');
let notification = document.getElementById('notification');

let thisId = '';

let heroes = [
	{name: 'Black Panther', strenght: 66, age: 53},
	{name: 'Captain America', strenght: 79, age: 137},
	{name: 'Captain Marvel', strenght: 97, age: 26},
	{name: 'Hulk', strenght: 80, age: 49},
	{name: 'Iron Man', strenght: 88, age: 48},
	{name: 'Spider-Man', strenght: 78, age: 16},
	{name: 'Thanos', strenght: 99, age: 1000},
	{name: 'Thor', strenght: 95, age: 1000},
	{name: 'Yon-Rogg', strenght: 73, age: 52},
]
let sorting = {
	name: 'Desc', strenght: 'Asc', age: 'Asc'
}

placeholder.innerHTML = getTable(heroes)

function getTable(heroes){

    let html = '<table>\n';
    html +='<tr><th id="name" onclick="clickName()">Name</th><th id="strenght" onclick="clickStrength()">Strength</th><th id="age" onclick="clickAge()">Age</th>';
    heroes.forEach((item) => html += '<tr><td>' + item.name + '</td><td>' + item.strenght + '</td><td>' + item.age + '</td></tr>');
    html += '</table>'
    return html;
} 

