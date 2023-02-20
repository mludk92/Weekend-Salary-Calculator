# Project Name

Weekend Salary Calculator

## Description

Usage :
enter a value for first, last, ID, Title, and Annual Sal. 
-Then press submit
this will add all of that information to a table and update the amount owed for a each month, and a whole year. 
-If you need to delete any values press teh delete row button and all elements will be updated to reflect the new table data. 


--challenges 
    it was very difficult to find a way to get the values of each row of the table, and even more so the cells. 
    i was able to find some documentation on parseInt and row and cell keys
    parseInt(table.rows[i].cells[4].innerHTML

    this allowed me to loop through the rows and cell index 4 or my annual salary and add these values together in a variable. i used this to update the totals at the end. Montly is just divided by 12. 

    this functionalilty took close to 2 hours to solve. 
