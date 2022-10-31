var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["productid"] = document.getElementById("productid").value;
    formData["productname"] = document.getElementById("productname").value;
    formData["categoryname"] = document.getElementById("categoryname").value;
    formData["categoryid"] = document.getElementById("categoryid").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productid;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.productname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.categoryname;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.categoryid;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("categoryname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("categoryid").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productid;
    selectedRow.cells[1].innerHTML = formData.productname;
    selectedRow.cells[2].innerHTML = formData.categoryname;
    selectedRow.cells[3].innerHTML = formData.categoryid;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productid").value = '';
    document.getElementById("productname").value = '';
    document.getElementById("categoryname").value = '';
    document.getElementById("categoryid").value = '';
    selectedRow = null;
}