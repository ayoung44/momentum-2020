const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_ON = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();

    // placeholder change
    // input.placeholder = "";
    
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);

    // submit => paintGreeting, save name
}
function askForName() {
    // user 이름 요청
    form.classList.add(SHOWING_ON);
    
    
    form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
    // form remove
    form.classList.remove(SHOWING_ON);
    
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}.`;

}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        // current user 없음 
        askForName();
    } else {
        // 로컬스토리지에 current user가 있으면 
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init(); 



