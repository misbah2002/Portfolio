const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <p>${taskValue}</p>
            <button onclick="this.parentElement.remove()">&times;</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});
