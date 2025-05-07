let tasksList = [];

function menu() {
    while (true) {
        let option = prompt(`Menu:
1. Add Task
2. List Tasks
3. Remove Task
4. Mark Task as Complete
5. Exit
Choose: `);
        
        switch (parseInt(option)) {
            case 1:
                addTask();
                break;
            case 2:
                listTasks();
                break;
            case 3:
                removeTask();
                break;
            case 4:
                markTaskComplete();
                break;
            case 5:
                console.log("Exiting...");
                return;
            default:
                alert("Invalid option. Please choose a valid option.");
        }
    }
}

function addTask() {
    let task = prompt("Enter your task:");
    let isComplete = "";
    while (isComplete !== "y" && isComplete !== "n") {
        isComplete = prompt("Is your task complete? (y/n)").trim().toLowerCase();
        if (isComplete !== "y" && isComplete !== "n") {
            alert("(y/n) Please choose 'y' or 'n'.");
        }
    }
    add(task, isComplete === "y");
}

function add(task, isComplete) {
    tasksList.push({ task, isComplete });
    alert("Task added successfully!");
}

function listTasks() {
    if (tasksList.length === 0) {
        alert("There are no tasks available.");
        return;
    }
    tasksList.forEach((task, index) => {
        alert(`${index + 1}. ${task.task} [${task.isComplete ? "Complete" : "Incomplete"}]`);
    });
}

function removeTask() {
    let taskIndex = parseInt(prompt("Enter the task number to remove:")) - 1;
    if (taskIndex >= 0 && taskIndex < tasksList.length) {
        tasksList.splice(taskIndex, 1);
        alert("Task removed successfully!");
    } else {
        alert("Invalid task number.");
    }
}

function markTaskComplete() {
    if(tasksList.length === 0) {
        alert("There are no tasks to mark as complete!");
    }
    let taskIndex = parseInt(prompt("Enter the task number to mark as complete:")) - 1;
    if (taskIndex >= 0 && taskIndex < tasksList.length) {
        tasksList[taskIndex].isComplete = true;
        alert("Task marked as complete!");
    } else {
        alert("Invalid task number.");
    }
}

menu();
