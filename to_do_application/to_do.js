let close = document.getElementsByClassName("close");
let importantIcon = document.getElementsByClassName('un-important');
let taskStatus = document.getElementsByClassName("in-Completed")
document.getElementById("add-button").addEventListener("click", newElement);

function newElement() {
    let li = document.createElement("li");
    let unCompleted = document.createElement("span");
    unCompleted.className = "material-symbols-outlined in-Completed";
    li.appendChild(unCompleted);
    let inputValue = document.getElementById("task").value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("task").value = "";

    let remove = document.createElement("SPAN");
    let removeSymbol = document.createTextNode("\u00D7");
    remove.className = "close";
    remove.appendChild(removeSymbol);
    li.appendChild(remove);

    let unImportant = document.createElement("SPAN");
    unImportant.className = "un-important";
    li.appendChild(unImportant);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            if (confirm("Do You Want To Delete The Task")) {
                let div = this.parentElement;
                div.remove();
            }
        }
    }
    for (let i = 0; i < importantIcon.length; i++) {
        importantIcon[i].onclick = function () {
            let imp = importantIcon[i].classList;
            imp.toggle('important')
        };
    }
    for (let i = 0; i < taskStatus.length; i++) {
        taskStatus[i].onclick = function () {
            this.parentElement.classList.toggle("checked");
            taskStatus[i].classList.toggle("completed")
        }
    }
}





