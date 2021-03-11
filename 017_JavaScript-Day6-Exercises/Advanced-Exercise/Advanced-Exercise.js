// ### Parse JSON-file ###

let books = JSON.parse(booklist);

// ### Build booklist-page ###

var shelf = document.getElementById("bookshelf");

for (i = 0; i < books.length; i++) {
  shelf.innerHTML += "<p>" + books[i].title + "<br>" + books[i].author + "</p>";
}

console.table(books);
