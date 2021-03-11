// ### Parse JSON-file ###

let books = JSON.parse(booklist);

// ### Build booklist-page ###

var shelf = document.getElementById("bookshelf");

for (i = 0; i < books.length; i++) {
  var boolCheck = books[i].read;
  shelf.innerHTML +=
    "<img src=" +
    books[i].image +
    "><p>" +
    books[i].title +
    "<br>" +
    books[i].author +
    "</p>";
  console.log(boolCheck);
  if (boolCheck) {
    shelf.style.color = "green";
  } else {
    shelf.style.color = "red";
  }
}

console.log(shelf);
