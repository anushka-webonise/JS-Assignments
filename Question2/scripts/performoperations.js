function addition()
{
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;
	//checking if either number is null
	if (!num1) {
		alert("Please enter first number");
		return false;
	}
	if (!num2) {
		alert("Please enter second number");
		return false;
	}
	var result = Number.parseInt(num1) + Number.parseInt(num2);
    document.getElementById("result").innerHTML = "The sum is " + result;
}

function subtraction() 
{ 
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
	//checking if either number is null
	if (!num1) {
		alert("Please enter first number");
		return false;
	}
	if (!num2) {
		alert("Please enter second number");
		return false;
	}
	var result = Number.parseInt(num1) - Number.parseInt(num2);
    document.getElementById("result").innerHTML = "The difference is " + result;
}
