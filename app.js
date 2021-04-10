// addToDoButton.addEventListener('click', function(){
// let paragraph = document.createElement('p');
//     paragraph.classList.add('paragraph-styling');
//     paragraph.innerHTML = inputField.value;
//     toDoContainer.appendChild(paragraph);
//     paragraph.style.background = "white";
//     inputField.value = "";
//     paragraph.addEventListener('click', function(){
//         paragraph.style.textDecoration = "line-through";
//     })
//     paragraph.addEventListener('dblclick', function(){
//         toDoContainer.removeChild(paragraph);
//     })
//     inputField.addEventListener("keyup", function(event){
//         if (event.keyCode === 13) {
//             event.preventDefault();
//             document.getElementById("addToDo").click();
//         }
//     })
// })
let submit = document.getElementById("submit");
let input = document.getElementById("duty");
let duties = document.getElementById("duties");
submit.addEventListener('click', function(){
    let paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerHTML = input.value;
        duties.appendChild(paragraph);
        paragraph.style.background = "white";
        input.value = "";
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick', function(){
            duties.removeChild(paragraph);
        })

    })
    input.addEventListener("keyup", function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("submit").click();
        }
    })