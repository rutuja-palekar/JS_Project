const task = document.getElementById('addTask');

const modal = document.getElementById("myModal");

const saveTask = document.getElementById('save_task');

const taskDataTable = document.getElementById('taskDataTable')

const model_close_button = document.getElementsByClassName("close")[0];

const taskTitle = document.getElementById('task_title');

const tasksStatus = document.getElementsByName('task_status');


function onAddTask() {
  const status = getTaskStatus();
  const title = taskTitle.value;

  const task = {
    title,
    status,
    createdOn: new Date()
  };

  console.log(task);

}

function getTaskStatus() {
  for (let status of tasksStatus) {
    if (status.checked) {
      return status.value;
    }
  }
}

function addTask() {
  modal.style.display = "block";

}

function loadTasks() {
  let fetchData = fetch("https://jsonplaceholder.typicode.com/todos");

  fetchData.then((fetchData) => {
    return fetchData.json()
  }).then((fetchData) => {
    let count = 1;
    const head_row = document.createElement('tr');
    const srNoHeader = document.createElement('th');
    srNoHeader.innerHTML = 'Serial No';
    head_row.append(srNoHeader);
    
    for (let prop in fetchData[0]) {
      th = document.createElement('th');
      th.innerHTML = prop;
      head_row.append(th);
    }

    taskDataTable.append(head_row)

    for (let rowData of fetchData) {
      const tr = document.createElement('tr');

      td0 = document.createElement('td');
      td0.innerHTML = count++;
      tr.append(td0);

      for (let prop in rowData) {
        td = document.createElement('td');
        td.innerHTML = rowData[prop];
        tr.append(td);
      }
      taskDataTable.append(tr);
    }

  }).catch((error) => {
    console.log(error);
  })
}

loadTasks();

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

task.addEventListener("click", addTask, { once: true });
model_close_button.addEventListener('click', () => modal.style.display = 'none');
saveTask.addEventListener('click', onAddTask);

