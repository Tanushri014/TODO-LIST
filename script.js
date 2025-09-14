let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

function addtask() {
    if (input.value.trim() === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.textContent = input.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";       // × delete symbol
        li.appendChild(span);

        list.appendChild(li);
        savedata();
    }
    input.value = "";
}

list.addEventListener("click", function (e) {
    //e – The event object, which tells you exactly what was clicked.
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();//we need to save data after every change

        //e.target.parentElement is the <li> that holds the span.

        //.remove() deletes that <li> from the DOM.
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}

function showtask() {
    list.innerHTML = localStorage.getItem("data") || "";
}
showtask();
