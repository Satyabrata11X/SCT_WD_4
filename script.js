function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateTimeInput = document.getElementById("taskDateTime");
  const taskText = taskInput.value.trim();
  const dateTime = dateTimeInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <div class="task-info">
      <span class="task-text">${taskText}</span><br>
      <small>${dateTime ? `⏰ ${new Date(dateTime).toLocaleString()}` : ""}</small>
    </div>
    <div class="task-controls">
      <button class="done" onclick="toggleComplete(this)">✔</button>
      <button class="edit" onclick="editTask(this)">✎</button>
      <button onclick="deleteTask(this)">🗑</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
  dateTimeInput.value = "";
}

function toggleComplete(button) {
  const li = button.closest("li");
  li.classList.toggle("completed");
}

function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
}

function editTask(button) {
  const li = button.closest("li");
  const taskSpan = li.querySelector(".task-text");

  const newTask = prompt("Edit your task:", taskSpan.textContent);
  if (newTask !== null && newTask.trim() !== "") {
    taskSpan.textContent = newTask.trim();
  }
}
