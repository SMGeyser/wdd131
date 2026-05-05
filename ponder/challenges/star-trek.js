
let intro = document.getElementById("intro");
intro.style.backgroundColor =  '#f2c556';

let voyager = document.querySelector("em");
voyager.style.backgroundColor = '#acbfcc';
voyager.textContent = 'USS Voyager Starship';

let ship = document.createElement('img');
ship.setAttribute = ('src', 'https://bit.ly/3RfG4sY');  
let shipDiv = document.querySelector('#starship');
shipDiv.appendChild(ship);
ship.classList(rounded)