const taskForm = document.getElementById('taskinputform');
const taskList = document.querySelector('#tasklist ul');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('taskinput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    taskItem.innerHTML = `
        <input type="checkbox" class="taskcheckbox">
        <span>${taskText}</span>
        <button class="deletebutton">delete</button>
    `;
    const deleteButton = taskItem.querySelector('button');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
    taskList.appendChild(taskItem);
}

taskList.addEventListener('change', (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
        const taskItem = e.target.parentElement;
        if (e.target.checked) {
            taskItem.classList.add('completed');
        } else {
            taskItem.classList.remove('completed');
        }
    }
});

