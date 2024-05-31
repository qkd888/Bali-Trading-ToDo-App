function addTask() {
    const inputValue = document.getElementById("myInput").value;
    if (inputValue.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = inputValue;

        // Add a delete button
        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";
        deleteBtn.onclick = function () {
            li.remove();
        };

        li.appendChild(deleteBtn);
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myInput").value = "";
    }
}

const div = document.createElement("div");
div.innerHTML = "Your content here"; // Replace with your desired content
