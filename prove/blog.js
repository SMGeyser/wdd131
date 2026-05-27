let bookList = document.querySelector('#book-list');

let html = `<article class="book">
        <hr>
        <p class="date">July 5, 2022</p>
        <p class="age">10-14</p>
        <p class="genre">Fantasy</p>
        <p><span aria-label="four out of five stars" role="none">⭐⭐⭐⭐</span></p>
        <h2>Septimus Heap Book One: Magyk</h2>
        <img src="https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg" alt="Book cover of the Septimus Heap Book One: Magic. With a gold ring on the cover.">
        <p class='desc'>If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.</p>
        </article>`

bookList.innerHTML = html;

