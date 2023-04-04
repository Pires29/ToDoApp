document.getElementById("task_add").onclick =function () {
    document.getElementById("task_add").style.display = "none"
    document.getElementById("task_hold").style.display = "block"

    event.preventDefault()
}

document.getElementById("task_hold_cancel").onclick =function () {
    document.getElementById("task_hold").style.display = "none"
    document.getElementById("task_add").style.display = "block"
    event.preventDefault()
}

document.getElementById("add_task_button").onclick = function () {


        if(document.getElementById('input_1').value.length === 0){
            alert("Kindly Enter Task Name!!!!")
        }

        else{
            document.getElementById("tasks").innerHTML += `
            <li id="li" class="task d-flex w-100">
               
                <div class="d-flex w-100 justify-content-between hr-div">
                
                <span id="taskname">
                    <h5>${document.getElementById('input_1').value}</h5>
                    <p>${document.getElementById('input_2').value}</p>
                </span>
                    
                    <button class="fs-5 bi bi-check-circle delete"></button>
                    
                </div>
            </li>
        `;
            document.getElementById('input_1').value = ""
            document.getElementById('input_2').value = ""
            current_tasks = document.querySelectorAll(".delete");
            var i
            for(i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();

                }
            }
        }

}


state_navbar = true
document.getElementById("hamburguer").onclick = function () {
    if (state_navbar == true){
        document.getElementById("navbar").style.display = "none"

        state_navbar = false

        document.getElementById("global-task").classList.remove("col-sm-9");
        document.getElementById("global-task").classList.add("col-sm-12");

    }
    else{
        document.getElementById("navbar").style.display = "block"

        state_navbar = true

        document.getElementById("global-task").classList.remove("col-sm-12");
        document.getElementById("global-task").classList.add("col-sm-9");


    }
}



