let book1 = {
    Book_Name: "HarryPotter",
    Author: "J.K. Rowling",
    link: "https://en.wikipedia.org/wiki/Harry_Potter"
};
let book2 = {
    Book_Name: "HarryPotter",
    Author: "J.K. Rowling",
    link: "https://en.wikipedia.org/wiki/Harry_Potter"
};
var r;
let update = false;
let update2 = false;
function BookData() {
    if (update == false) {
        book1 = {
            Book_Name: document.getElementById("Book_Name").value,
            Author: document.getElementById("Author").value,
            link: document.getElementById("Source").value
        };
        if (book1.Book_Name == "") {
            alert("Please Enter Book Name");
        }
        else if (book1.Author == "") {
            alert("Please Enter Book Author Name");
        }
        else if (book1.link == "") {
            alert("Please Enter Book Link");
        }
        else {
            AddBook(book1);
        }
    }
    else {
        if (update2 == false) {
            console.log(r);
            document.getElementById("Book_Name").value = book[r].Book_Name;
            document.getElementById("Author").value = book[r].Author;
            document.getElementById("Source").value = book[r].link;
            update2 = true;
        }
        else {
            book[r].Book_Name = document.getElementById("Book_Name").value;
            book[r].Author = document.getElementById("Author").value;
            book[r].link = document.getElementById("Source").value;
            update = false;
            update2 = false;
            bookList();
        }

    }
}
var book = [];
function bookList() {
    const myNode = document.getElementById("right");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    for (let i = 0; i < book.length; i++) {
        const d = document.createElement("div");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");
        const p5 = document.createElement("p");
        const a = document.createElement("a");
        const button = document.createElement("input");
        button.setAttribute("type", "button");
        button.value = "Started"
        a.href = book[i].link;
        const Book_Name = document.createTextNode(`Book Name:${book[i].Book_Name}.`);
        const Author = document.createTextNode(`Author:${book[i].Author}.`);
        const Link = document.createTextNode("Link: Click me");
        const Edit = document.createTextNode("⚙️ EDIT");
        const del = document.createTextNode("🗑️ DELETE");
        p1.appendChild(Book_Name);
        p2.appendChild(Author);
        a.appendChild(Link);
        p4.appendChild(Edit);
        p4.className = "edit";
        p3.className = "edit";
        p2.className = "edit";
        p1.className = "edit";
        a.className = "edit";
        p5.appendChild(del);
        p5.className = "del";
        d.id = `${i}`;
        p1.id = `${i}`;
        p2.id = `${i}`;
        p3.id = `${i}`;
        p4.id = `${i}`;
        p5.id = `${i}`;
        a.id = `${i}`;
        d.className = 'unit';
        document.getElementById("right").appendChild(d);
        d.appendChild(p5);
        d.appendChild(p4);
        d.appendChild(p1);
        d.appendChild(p2);
        d.appendChild(a);
        button.className = "submit";
        button.id = `button${i}`
        d.appendChild(button);
    }
    document.getElementById("update").textContent = "";
    const actions = document.querySelectorAll(".unit");
    const reader = document.querySelectorAll(".submit");
    reader.forEach(re => re.addEventListener("click", handlechange));
    actions.forEach(action => action.addEventListener("click", test));
    document.getElementById("Book_Name").value = "";
    document.getElementById("Author").value = "";
    document.getElementById("Source").value = "";
}
function AddBook(e) {
    book.push(e);
    document.getElementById("Book_Name").value = "";
    document.getElementById("Author").value = "";
    document.getElementById("Source").value = "";
    console.log(book);
    bookList();
}
AddBook(book1);
function test(e) {
    r = parseInt(e.target.id);
    if (isNaN(r)) {
        document.getElementById("update").textContent = "Book Read or Completed Status changed";
    }
    else {
        document.getElementById("update").textContent = `update values of Book number ${r + 1}`;
        if (e.target.className == "del") {
            book.splice(r, 1);
            bookList();
        }
        else {
            update = true;
            BookData();
        }
    }
}
var s = false;
function handlechange(e) {
    if (!s) {
        document.getElementById(e.target.id).value = "Completed";
        s = (!s);
    }
    else {
        document.getElementById(e.target.id).value = "Started";
        s = (!s);
    }

}