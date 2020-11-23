// const title = document.getElementById("title");

// 노드의 첫번째 자식을 반환한다.
// id: #id
// class: .classname
// const title = document.querySelector("#title");
// console.log(title);

// DOM : Document Object Model
// innerHTML
// title.innerHTML = "Hi From JS";
// title.style.color = "red";

// document.title = "I own you";
// console.dir(title);

// event
// function handleResize(event) {
//     // 자바스크립트에서 온 이벤트
//     console.log(event);

//     console.log("I have been resized");
// }



// if else 

// prompt : old 
// const age = prompt("How old are you");
// if (age > 21) {
//     console.log("you can drink");
// } else if (age >= 18 && age <= 21) {
//     console.log("you can drink but you should not");
// } else {
//     console.log("too young");
// }

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#A593E0";

// function handleClick() {
//     const currentColor = title.style.color;
//     console.log(currentColor);
//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// 지금 즉시 호출 : handleResize()
// 
// window.addEventListener("resize", handleResize);
// title.addEventListener("click", handleClick);

// function init() {
//     title.style.color = BASE_COLOR;
// }
// init();