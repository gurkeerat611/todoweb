document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const closeBtn = document.getElementsByClassName('close')[0];
    const submitTaskBtn = document.getElementById('submitTaskBtn');

    addTaskBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    submitTaskBtn.addEventListener('click', () => {
        const taskInput = document.getElementById('taskInput').value;
        const priorityInput = document.getElementById('priorityInput').value;
        const deadlineInput = document.getElementById('deadlineInput').value;

        if (taskInput.trim() === '' || priorityInput.trim() === '' || deadlineInput.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('div');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <h3>${taskInput}</h3>
            <p>Priority: ${priorityInput}</p>
            <p>Deadline: ${deadlineInput}</p>
        `;
        taskList.appendChild(taskItem);

        modal.style.display = 'none';
        document.getElementById('taskInput').value = '';
        document.getElementById('priorityInput').value = '';
        document.getElementById('deadlineInput').value = '';
    });
});
