function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Main task list
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = taskText;

    span.onclick = function () {
        span.classList.toggle("completed");
        updateDashboard();
    };

    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.onclick = function () {
        li.remove();
        updateDashboard();
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";

    updateDashboard();
}

// Update side dashboard
function updateDashboard() {
    let dashboard = document.getElementById("dashboardList");
    dashboard.innerHTML = "";

    let tasks = document.querySelectorAll("#taskList span");

    tasks.forEach(task => {
        let dashItem = document.createElement("li");
        dashItem.innerText = task.innerText;

        if (task.classList.contains("completed")) {
            dashItem.classList.add("completed");
        }

        dashboard.appendChild(dashItem);
    });
}
