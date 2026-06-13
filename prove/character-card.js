const level = document.querySelector('#level');
let level_value = 1;
const health = document.querySelector('#health');
let health_value = 10;
const atk_btn = document.querySelector('#attacked');
const lvl_btn = document.querySelector('#level-up');

function update_level(lvl) {
    level.innerHTML = `
        <strong>Level:</strong> ${lvl}`;
    return;
}

function update_health(hp) {
    health.innerHTML = `
        <strong>Health:</strong> ${hp}`;
    return;
}

update_health(health_value);
update_level(level_value);

atk_btn.addEventListener('click', function() {
    health_value += -5;
    if (health_value >= 0) {
        update_health(health_value);
        if (health_value == 0) {
            alert('You died!!!');
            return;
        } else {return;}
    } else {
        alert('You died!!!');
        return;
    }
});

lvl_btn.addEventListener('click', function() {
    level_value += 1;
    health_value = 10 * level_value;
    update_health(health_value);
    update_level(level_value);
})