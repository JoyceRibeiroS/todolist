const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

// pegou a input de texto e o input de botão

//criou uma funcao de adicionar tasks
function addTask() {
    const taskText = taskInput.value.trim(); //criou uma var para o texto de adicionar tasks
    if (taskText !== "") {

        const maxText = taskText.substring(0, 27);

        const li = document.createElement("li");
        li.innerHTML = `
        <span>${maxText}</span>
        <button class="editButton" onClick="editTask(this)"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="deleteButton" onClick="deleteTask(this)"><i class="fa-solid fa-trash"></i></button>
        `
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");
    const newText = prompt("Editar Tarefa:", span.textContent); 
    if (newText !== null && newText.trim() !=="") {
        span.textContent = newText.trim();
    }
}

function deleteTask (button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}