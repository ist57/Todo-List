
//Todo Eleman Ekleme

//Eleman Seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();
function eventListeners() {
    //submit event
    form.addEventListener("submit", addNewItem);
    //delete an item
    taskList.addEventListener("click", deleteItem);
    //delete all item
   btnDeleteAll.addEventListener("click",deleteAllItems);


}

function addNewItem(e) {
    if (input.value === '') {
        alert("add new item");
        console.log("submit");
    }


    //li Oluşturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary"
    li.appendChild(document.createTextNode(input.value));


    // a Oluştruma

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);

    input.value = "";

    e.preventDefault();

}

//Eleman Silme

function deleteItem(e) {
    
        if (e.target.className === "fas fa-times") {
            if (confirm("Silmek İstediğinize Emin Misiniz?")) {
            //console.log(e.target);
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}


//Tüm Elemanları Silme

function deleteAllItems(e){
    if(confirm("Tümünü silmek istediğinize eminmisiniz?")){
        taskList.childNodes.forEach(function(item){
            //console.log(item);
            if(item.nodeType=== 1){
                item.remove();
            }
        })
    }
   // taskList.innerHTML=""; (alternatif)
}