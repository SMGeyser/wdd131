const form = document.querySelector("#Form");
const person = document.querySelector("#person");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = person.value;
  
  if (value == 'guest') {
    notesContainer.hidden = false;
    //notes.required = true;
    notesContainer.innerHTML = `
    <label for="notes">Access Code</label>
    <input id="notes" name="notes" type="text" />`

  } else if (value == 'student') {
    notesContainer.hidden = false;
    //notes.required = true;
    notesContainer.innerHTML = `
    <label for="notes">Student ID</label>
    <input id="notes" name="notes" type="text" pattern="\\d{9}" inputmode="numeric" title="Please enter your 9 digit Student ID"/>`;
  } else {
    notesContainer.hidden = true;
    notesContainer.innerHTML = '';
  }
  
}

person.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedType() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.person.value;
  const availableDate = form.availableDate.value;
  const note = form.notes.value.trim();

  // Validate the input
  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }


  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Date of Event: ${availableDate}</p>
  <p>Type: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});
          