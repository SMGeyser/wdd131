const student = [
    {
        last: 'Tinney',
        first: 'Tyler'
    },{
        last: 'Geyser',
        first: 'Sam'
    },{
        last: 'Jackson',
        first: 'Daniel'
    },{
        last: 'McClure',
        first: 'Eldon'
    }
];

let container = document.querySelector('#student_container');

student.forEach(function(item){
    let name = document.createElement('div');
    name.className = 'format';


    let html = `
    <p class="details">${item.first}</p>
    <p class="details">${item.last}</p>
    <hr>
    `;

    name.innerHTML = html;

    container.appendChild(name);
})


const pets = ["cat", "dog", "bird"];

const animals = new Array('pig', 'goat', 'sheep');

pets.push('lizard');

console.log(pets);

console.log(pets[0]);

pets[3] = 'bunny';

console.log(pets);

pets.pop();

console.log(pets);

pets.shift();

console.log(pets);


function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
          

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
          