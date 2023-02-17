console.log ('working')

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault(); 

    let firstNameVal = document.querySelector("#firstName").value
    console.log(firstNameVal)
    let lastNameVal = document.querySelector("#lastName").value
    console.log(lastNameVal)
    let idVal = Number(document.querySelector("#id").value)
    console.log(idVal)
    let titleVal = document.querySelector("#Title").value
    console.log(titleVal)
    let salaryVal = Number(document.querySelector("#annualSalary").value)
    console.log(salaryVal) 

    let dataTable = document.querySelector("#employee")

    dataTable.innerHTML += `            <tr>
    <td>${firstNameVal}</td>
    <td>${lastNameVal}</td>
    <td>${idVal}</td>
    <td>${titleVal}</td>
    <td>$ ${salaryVal}</td>
    <td><button onClick="deleteRow(event)">Delete Row</button></td>
</tr>` }

function deleteRow(event){
    console.log(this.event)
    //closest get closest element passed through
    //better than parentElement.parentElement.parentElement...
    event.target.closest('tr').remove() 
}