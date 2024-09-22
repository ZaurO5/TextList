// Elements
const input = document.getElementById("text-input");
const btnAdd = document.querySelector(".btn-success");
const btnClear = document.querySelector(".btn-danger");
const ul = document.querySelector(".list-group");
const alertMessages = document.querySelector(".form-row");

// Add item
btnAdd.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value.trim() === "") {
        showAlert("Input required", "bg-danger");
    } else {
        // List
        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between";
        li.innerText = input.value;

        // Span
        let span = document.createElement("span");
        span.innerText = "X";

        // Span styles
        span.style.cursor = "pointer";
        span.style.color = "red";

        // List styles
        li.style.listStyle = "none";
        li.style.border = "1px solid black";
        li.style.marginTop = "12px";
        li.style.borderRadius = "8px";
        li.style.padding = "8px";

        // AppendChild
        ul.appendChild(li);
        li.appendChild(span);

        // Success 
        showAlert("Item added", "bg-success");

        // Clear
        input.value = "";

        // Deleting
        span.addEventListener("click", () => {
            ul.removeChild(li);
            showAlert("Item removed", "bg-warning");
        });
    }
});

// Clear list
btnClear.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to clear the list?")) {
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        showAlert("All items cleared", "bg-warning");
    }
});

// Error alert
function showAlert(message, alertClass) {
    const alertLi = document.createElement("li");
    alertLi.innerText = message;
    alertLi.classList.add("list-group-item", "d-flex", "justify-content-between", alertClass, "p-3", "mb-2");
    alertLi.style.borderRadius = "10px";
    alertMessages.appendChild(alertLi);

    setTimeout(() => {
        alertMessages.removeChild(alertLi);
    }, 2000);
}
