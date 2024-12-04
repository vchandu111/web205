document.querySelector("form").addEventListener("submit", createTodo);
var todoArr = JSON.parse(localStorage.getItem("todo")) || [];
console.log(todoArr);
displayTodo(todoArr);

function createTodo(e) {
  e.preventDefault();
  var task = document.getElementById("task").value;
  var priority = document.getElementById("priority").value;
  var todo = { task, priority };
  todoArr.push(todo);
  localStorage.setItem("todo", JSON.stringify(todoArr));

  displayTodo(todoArr);
}

function displayTodo(arr) {
  document.querySelector("tbody").textContent = "";

  arr.forEach((todoItem) => {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.textContent = todoItem.task;

    var td2 = document.createElement("td");
    td2.textContent = todoItem.priority;
    if (todoItem.priority === "High") {
      td2.style.backgroundColor = "crimson";
    } else if (todoItem.priority === "Low") {
      td2.style.backgroundColor = "green";
    } else {
      td2.style.backgroundColor = "orange";
    }

    var td3 = document.createElement("td");
    td3.textContent = "Delete";
    // icon <i> => tr > td > i > click

    td3.addEventListener("click", deleteRow);

    tr.append(td1, td2, td3);
    document.querySelector("tbody").appendChild(tr);
  });
}

function deleteRow(e) {
  console.log(e);
  e.target.parentNode.remove();
}
