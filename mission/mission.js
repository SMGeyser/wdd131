let theme = document.querySelector("select");
let logo = document.querySelector("img");

theme.addEventListener('change', changeTheme);

function changeTheme() {
    let current = theme.value;
    if (current == 'dark') {
        document.querySelector('h2').style.color = 'white';
        document.querySelector('#mission').style.color = 'white';
        document.querySelector('#list-head').style.color = 'white';
        document.querySelector('ul').style.color = 'white';
        document.body.style.backgroundColor = 'black';
        logo.src = 'byui-logo-dark.png';
    } else {
        document.querySelector('h2').style.color = 'black';
        document.querySelector('#mission').style.color = 'black';
        document.querySelector('#list-head').style.color = 'black';
        document.querySelector('ul').style.color = 'black';
        document.body.style.backgroundColor = 'white';
        logo.src = 'byui-logo.jpg';
    }
}