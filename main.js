let myform = document.querySelector("form");
let myinput = document.querySelector("input");
let listGroup = document.querySelector("ul");


const savetodo = (e) => {
    e.preventDefault();
    let newLi = document.createElement("li");
    newLi = document.createElement("li");
    newLi.innerText = myinput.value;
    newLi.classList = "list-group-item rounded-0;"
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    newLi.appendChild(delBtn);
    delBtn.className = "btn btn-sm btn-danger rounded-0 float-end";
    listGroup.appendChild(newLi);
    myform.reset();

    console.log(newLi);
    // console.log(myinput.value);
    // console.log(parseInt(myinput.value));
    // console.log("form submitted");
};

myform.addEventListener("submit", savetodo)


const deleteTodo = (e) => {
    if (e.target.className.includes("btn-danger")) {
        // console.log("Delete Clicked");
        let li = e.target.parentElement;
        // listGroup.removeChild(li);
        if (window.confirm("are you sure?")) {
            listGroup.removeChild(li);
        }
    }
};
listGroup.addEventListener("click", deleteTodo);

