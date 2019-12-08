function mySubmit() {
	alert("Successfully Submitted ! ! !");
}

function myRegistration() {
	alert("Registration Successfully ! ! !");
}

function mySignIn() {
	alert("Login Successfully ! ! !");
}

function pay() {
	window.open("file:Payment.html");
}

function Calculate_Item1(){
	var total1;
	var qty1 = document.getElementById('Qty1').value;	
	total1= eval(qty1)* eval(19.90);
	document.getElementById('Total1').value= total1;
}
	

function Calculate_Item2(){
	var total2;
	var qty2 = document.getElementById('Qty2').value;

	total2= eval(qty2)* eval(19.90);
	document.getElementById('Total2').value= total2;
}

function Calculate(){
	var total;
	var total1;
   	var total2;
	var qty1 = document.getElementById('Qty1').value;
	var qty2 = document.getElementById('Qty2').value;

	total1= eval(qty1)* eval(19.90);
	total2= eval(qty2)* eval(19.90);
	
	total = total1 + total2;

	document.getElementById('Total').value= total;
}

function printPage() {
	window.print();
}