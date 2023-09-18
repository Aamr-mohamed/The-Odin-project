let myLibrary = [];
function addBookToLibrary() {
  const bookTitle = document.getElementById("Title").value;
  const bookName = document.getElementById("Name").value;
  const bookAuthor = document.getElementById("Author").value;
  const bookPages = document.getElementById("Pages").value;
  const bookIsRead = document.getElementById("Read").value;
  book(bookTitle, bookName, bookAuthor, bookPages, bookIsRead);
}
function book(bookTitle, bookName, bookAuthor, bookPages, bookIsRead) {
  this.title = bookTitle;
  this.name = bookName;
  this.author = bookAuthor;
  this.pages = bookPages;
  this.read = bookIsRead ? "read" : "not read yet";
  myLibrary.push({
    title: this.title,
    name: this.name,
    author: this.author,
    pages: this.pages,
    read: this.read,
  });
  displayBooks();
}

function displayBooks() {
  const booksContainer = document.getElementById("booksContainer");
  console.log("working");
  booksContainer.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookInfo = document.createElement("p");
    bookInfo.textContent = `Title: ${book.title}, Name: ${book.name}, Author: ${book.author}, Pages: ${book.pages}, Status: ${book.read}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeBook(index));
    bookCard.appendChild(bookInfo);
    bookCard.appendChild(removeButton);
    booksContainer.appendChild(bookCard);
  });
}

// Call displayBooks to initially display the books on page load
