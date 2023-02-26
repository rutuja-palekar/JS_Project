const task = document.getElementById('addTask');

function addTask() {
    let fetchData = fetch("https://jsonplaceholder.typicode.com/todos");

    fetchData.then((fetchData) => {
        return fetchData.json()
    }).then((fetchData) => {
        console.table(fetchData.slice(0, 3));
    }).catch((error) => {
        console.log(error);
    })
}

task.addEventListener("click", addTask, { once: true });
