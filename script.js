let selectedRow = null;


//show alerts

function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main)

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
};

// clear all list

function crearFields(){
    document.getElementById('lastName').value = "";
    document.getElementById('firstName').value = "";
    document.getElementById('RollNo').value = "";

};

//add data
document.getElementById('student-form').addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form Values
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const RollNo = document.getElementById('RollNo').value;

    // Validate

    if (firstName == "" || lastName == "" || RollNo == "") {
        showAlert("Please fill in all fields mi perro :)", "danger");
    }
    else{
        if (selectedRow == null) {
            const list = document.getElementById("student-list");
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${lastName}</td>
            <td>${firstName}</td>
            <td>${RollNo}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
             </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added mi perro", "success")
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = RollNo;
            selectedRow = null
            showAlert("Student infor edited", "info");
        }
        crearFields();
    } 

});

//Edit Data
document.getElementById('student-list').addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.getElementById("firstName").value = selectedRow.children[0].textContent;
        document.getElementById("lastName").value = selectedRow.children[1].textContent;
        document.getElementById("RollNo").value = selectedRow.children[2].textContent;
    }
})



//delete data

document.getElementById("student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger")
    } else {
        
    }
});