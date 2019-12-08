var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day_names = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = new Date();   
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
var day = today.getDay();
document.write( day_names[day]  + "," + " " + date + " " + month_names[month] + " " + year);