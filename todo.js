//all decalrations
let addBtn = document.getElementById("add_btn")
let inputValue = document.querySelector(".form-control")
addBtn.addEventListener("click",addTask)
inputValue.addEventListener("keypress",function(event){
  if(event.key==="Enter"){
    console.log("hello")
  }
})

//Add tasks in todo
function addTask(){
  if(inputValue.value===""){
    alert("Enter a task")
  } else{
    let newLi = document.createElement("li")
  let list = document.getElementById("list")
  newLi.className = "list-group-item d-flex justify-content-between"
  newLi.innerHTML =  `<h5 class="flex-grow-1">${inputValue.value}</h5>
  <button
    class="btn btn-outline-secondary mx-3" onclick="editTasks(this)">
    Edit
  </button>
  <button
  
  class="btn btn-outline-success" onclick="deleteTask(this)"
>
<i class="fa-solid fa-trash" ></i>
</button>
`
    list.append(newLi)
    inputValue.value=""
  } 
}

//delete fucntion
function deleteTask(currElem){
  currElem.parentElement.remove()
}

//Edit tasks in todo
function editTasks(currElement){
  if(currElement.textContent=="Save"){
    currElement.textContent =  "Edit"
    let currTaskName = currElement.previousElementSibling.value
    let newHeading = document.createElement("h5")
    newHeading.className = "flex-grow-1"
    newHeading.textContent = currTaskName
    currElement.parentElement.replaceChild(newHeading,currElement.previousElementSibling)
  }else{
    currElement.textContent = "Save"
    let currTask = currElement.previousElementSibling.textContent;
    let newinput = document.createElement("input")
    newinput.type= "text"
    newinput.classList ="form-control"
    newinput.value = currTask
    console.log(currTask)
    currElement.parentElement.replaceChild(newinput,currElement.previousElementSibling)
  }
}

//dark theme
function turnDark(){
  if(document.body.style.background=="black"){
    document.body.style.background = "white"
    addBtn.style.color = "black"
    document.querySelector(".head").style.color = "black"
  }else{
    document.body.style.background = "black"
    addBtn.style.color = "white"
    document.querySelector(".head").style.color = "White"
  }
 
}