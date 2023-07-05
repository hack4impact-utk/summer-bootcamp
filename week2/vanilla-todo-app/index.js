const tasks = [];

function createTask() {
  const taskInput = document.getElementById('task-input');
  const newTask = {
    id: tasks.length,
    name: taskInput.value,
    completedAt: null,
  };
  tasks.push(newTask);
  taskInput.value = '';
  renderTaskDeps();
}

function renderTasks() {
  const taskList = document.getElementById('task-list-ul');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  tasks.forEach((task) => {
    const taskItem = renderTask(task);
    taskList.appendChild(taskItem);
  });
}

function renderTask(task) {
  const taskItem = document.createElement('li');
  const taskCheck = document.createElement('input');
  const taskText = document.createElement(task.completedAt ? 's' : 'span');

  taskCheck.type = 'checkbox';
  taskCheck.classList.add('mr-2');
  taskCheck.addEventListener('click', () => onCheckboxClick(task.id));
  taskCheck.checked = !!task.completedAt;

  taskItem.appendChild(taskCheck);
  taskItem.appendChild(taskText);

  taskText.innerText = task.name;

  return taskItem;
}

function onCheckboxClick(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  if (task.completedAt) {
    task.completedAt = null;
  } else {
    task.completedAt = new Date();
  }
  renderTaskDeps();
}

function renderTaskCount() {
  const taskCount = document.getElementById('task-count');
  const incompleteTaskCount = tasks.filter((task) => !task.completedAt).length;
  taskCount.innerText = incompleteTaskCount;
}

function renderTaskDeps() {
  renderTasks();
  renderTaskCount();
}
