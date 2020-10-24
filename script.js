var calc = document.body.querySelector(".calculator");

var firstnumber = prompt("Enter a number");

if(isNaN(firstnumber)){
 calc.innerHTML="A valid number was not inputed";
}
else {
    var operation = prompt("Enter a operation sign");
}

 if(operation == "/" || "*" || "+" || "-"){
  var secondnumber = prompt("Enter a second number");
}
else{
  calc.innerHTML="A valid operation was not inputted";
}
if(isNaN(secondnumber)){
 calc.innerHTML="A valid number was not inputed";
} else {
var calculation = firstnumber +  operation + secondnumber;
}
document.body.querySelector(".calculator").innerHTML=
      calculation;