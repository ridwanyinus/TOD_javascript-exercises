const myLibrary = [];
const showButton = document.querySelector("#add-new-book_btn");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("#close");
const confirm = document.querySelector("#confirm");
const form = document.querySelector("form");

class Book {
	constructor(title, author, year, id, read = false) {
		this.title = title;
		this.author = author;
		this.year = year;
		this.id = id;
		this.read = read;
	}

	status() {
		if (typeof this.read === "boolean") {
			this.read = !this.read;
		} else {
			console.error("The property 'read' is not a boolean.");
		}
	}
}

class Library {
	constructor() {
		this.books = myLibrary;
		this.tableBody = document.getElementById("book-table-body");
	}

	addBook(book) {
		this.books.push(book);
		this.renderBooks();
	}

	deleteBook(id) {
		const index = this.books.findIndex((book) => book.id === id);
		if (
			index !== -1 &&
			window.confirm("Are you sure you want to delete this book?")
		) {
			this.books.splice(index, 1);
			this.renderBooks();
		}
	}

	renderBooks() {
		this.tableBody.innerHTML = "";
		for (const book of this.books) {
			const row = document.createElement("tr");

			row.innerHTML = `
                <td class="book-title">${book.title}</td>
                <td class="book-author">${book.author}</td>
                <td class="book-year">${book.year}</td>
                <td><button type="button" data-id="${book.id}" class="read-status read-${book.read}">
                    ${book.read ? "Read" : "Unread"}
                </button></td>
                <td class="actions-cell">
                    <button class="delete-btn" data-id="${book.id}">Delete</button>
                </td>
            `;

			this.tableBody.appendChild(row);
		}
	}

	toggleReadStatus(id) {
		const book = this.books.find((b) => b.id === id);
		if (book) {
			book.status();
			this.renderBooks();
		}
	}
}

class AddBookToLibrary {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
		this.uuid = self.crypto.randomUUID();
		this.newBook = new Book(this.title, this.author, this.year, this.uuid);

		library.addBook(this.newBook);
	}
}

const library = new Library();

document.getElementById("books-container").addEventListener("click", (e) => {
	if (e.target.classList.contains("delete-btn")) {
		const id = e.target.getAttribute("data-id");
		library.deleteBook(id);
	}

	if (e.target.classList.contains("read-status")) {
		const id = e.target.getAttribute("data-id");
		library.toggleReadStatus(id);
	}
});

showButton.addEventListener("click", () => {
	dialog.showModal();
});

closeButton.addEventListener("click", () => {
	dialog.close();
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const value = e.target;
	new AddBookToLibrary(value.title.value, value.author.value, value.year.value);
	dialog.close();
});

window.onload = () => library.renderBooks();
