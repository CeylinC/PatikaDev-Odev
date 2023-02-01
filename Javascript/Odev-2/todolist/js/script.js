function newElement(){
    const input = document.querySelector("#task");
    if(input.value.length == 0){
        document.querySelector(".alert-danger").style.opacity= '1';
    }
    else{
        document.querySelector(".alert-success").style.opacity= '1';
        let li = document.createElement("li")
        li.innerHTML = input.value+'<span class="X" onclick="this.parentElement.remove()">X</span>';
        li.setAttribute("onclick","this.style.backgroundColor = 'green'");
        document.getElementById("list").appendChild(li);
        input.value = "";
    }
}