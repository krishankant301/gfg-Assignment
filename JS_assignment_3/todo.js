const add_item = document.querySelector("#add_item");
const add_section = document.querySelector(".add_section");
const add_btn = document.querySelector("#add_btn");
const list = document.querySelector("#list");

loadTask();

add_item.addEventListener("click", ()=>{
    add_section.style.display = "block";

});

add_btn.addEventListener("click",()=>{
    const add_input = document.querySelector("#add_input");
    if(add_input){
        addTasks(add_input.value);
        add_input.value = "";
        saveTasks();
    }
    else {
        return ;
    }
});

list.addEventListener("click", (e)=>{
    if(e.target.classList.contains("edit_btn")){
        const li = e.target.parentElement;
        const div = li.querySelector("div");
        const edit_Btn = e.target;

        if(edit_Btn.textContent == "Save"){
            const input = li.querySelector("input");
            const text = input.value.trim();
            
            if(!text){
                div.textContent= text;
                input.replaceWith(div);
                saveTasks();
                edit_Btn.textContent="Edit";
            }
            else{
                const input = document.createElement("input");
                input.type = "text";
                input.value = div.textContent;

                div.replaceWith(input);
                input.focus();
                edit_Btn.textContent = "Save";
            }
        }
    }


    if(e.target.classList.contains( "delete_btn")){
        e.target.parentElement.remove();
        saveTasks();
    }
})

function loadTask(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTasks(task));
}

function addTasks(task){
    const li = document.createElement("li");
    li.innerHTML=`<div class="li_div">${task}</div>
    <button class = "edit_btn">Edit</button>
    <button class = "delete_btn">Delete</button>`
    list.appendChild(li);
}
function saveTasks(){
    const tasks = [];
    document.querySelectorAll("#list div").forEach(div => {
        tasks.push(div.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

