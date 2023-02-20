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
    <td id="salary">${salaryVal}</td>
    <td><button onClick="deleteRow(event)">Delete Row</button></td>
</tr>` 
//get the values of the annual salary column and add them together
var table = document.getElementById("employee"), sumVal = 0;
            
    for(var i = 1; i < table.rows.length; i++)
    {
        sumVal = sumVal + parseInt(table.rows[i].cells[4].innerHTML);
    }
    
    document.getElementById("totalMonth").innerHTML =  `Total Montly $${Number(sumVal)/12}`;
    console.log(sumVal);
 
    document.getElementById("totalYear").innerHTML =  `Total Montly $${Number(sumVal)}`;
    console.log(sumVal);
}

function deleteRow(event){
    console.log(this.event)
    //closest get closest element passed through
    //better than parentElement.parentElement.parentElement...
    event.target.closest('tr').remove() 
//get the values of the annual salary column and subtract what is missing
    var table = document.getElementById("employee"), sumVal = 0;
            
    for(var i = 1; i < table.rows.length; i++)
    {
        sumVal = sumVal + parseInt(table.rows[i].cells[4].innerHTML);
    }
    
    document.getElementById("totalMonth").innerHTML =  `Total Montly $${Number(sumVal)/12}`;
    console.log(sumVal);
    document.getElementById("totalYear").innerHTML =  `Total Yearly $${Number(sumVal)}`;
    console.log(sumVal);
}




