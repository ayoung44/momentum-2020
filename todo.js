const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    toDoTitle = toDoList.querySelector(".js-toDoListTitle");

const TODOS_LS = 'toDos';
let toDos = [];

    // Filter(filterFn) : id 1인 경우만 true
function filterFn(toDo) {
    // return toDo.id === 1;
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function delToDo(event) {
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    // parseInt : string -> int
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
    
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null) {
        // toDos is 
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        
        // have arrary 
        // array 각각 한번씩 실행 
        parsedToDos.forEach(function(toDo) {
            // console.log(toDo.text);
            paintToDo(toDo.text);
        });
    } 
}

function paintToDo(text) {
    // console.log(text);    
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    // empty array일 때 .length+1 == 1
    const newId = toDos.length + 1;
    
    delBtn.innerText = "❌ "; 
    delBtn.addEventListener("click", delToDo);
    // handle submit에서 온 값 
    span.innerText = text; 
    
    // li 안에 span, delete btn 생성 
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId  
    };
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;    
    paintToDo(currentValue);

    toDoInput.value = "";
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();