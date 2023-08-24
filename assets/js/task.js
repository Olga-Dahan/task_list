var taskList = [];  
loadData();


function loadTask() {

    var task = document.getElementById("the-task").value;      
    var ifDone = document.getElementById("if-Done").value;     
    var date = document.getElementById("the-date").value;   

    
    var data = new Object();
    data.task = task;
    data.ifDone = ifDone;
    data.date = date;

    taskList.push(data);

    createTable();
    saveData();
    
    document.getElementById("taskForm").reset();

}

function createTable() {

    var data = document.getElementById("data");                     

    
    var info = "";

    for (var index = 0; index < taskList.length; index++) {
        info += `
        <tr>
            <td>${taskList[index].date}</td>
            <td>${taskList[index].ifDone}</td>
            <td>${taskList[index].task}</td>
        </tr>
    `
    }

    data.innerHTML = info;
}

function clearTable() {
    document.getElementById("data").innerHTML = "";
    taskList = [];
}

function removeLast() {
    taskList.pop();
    createTable();
}

function loadData() {
    taskList = JSON.parse(localStorage.getItem("tasks"));
    createTable();
}

function saveData() {
    localStorage.setItem("tasks", JSON.stringify(taskList));
}
