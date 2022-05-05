let btnOne = document.querySelector("#liveToastBtn");
let listOne = document.querySelector("#list");
let taskOne = document.querySelector("#task");
let ulSize = document.getElementsByTagName("li");


for (let i = 0 ; i < ulSize.length;i++){
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u2BBE";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ulSize[i].append(closeButton);
    ulSize[i].onclick = check;
}

btnOne.addEventListener("click",itemPush);

function check(){
    this.classList.toggle("checked");

}

function removeButton(){
    this.parentElement.remove();
}

function itemPush(){
    if (taskOne.value == ""){
        $(".error").toast("show");
    } else {
        $(".success").toast("show");

        let liOne = document.createElement("li");
        listOne.appendChild(liOne);
        liOne.innerHTML = task.value;
        taskOne.value = "";


        liOne.onclick = check;

        let closeButton = document.createElement("span");
            closeButton.textContent = "\u2BBE";
            closeButton.classList.add("close");
            closeButton.onclick = removeButton;

            liOne.append(closeButton);
            listOne.append(liOne);
            inputElement.value = ("");
    }
}