
var allreg = [];

//validates parameters entered in the form
function validate()
{ 
   if( document.RegistrationForm.name.value == "" )
   {
    alert( "Please enter your name" );
    document.RegistrationForm.name.focus() ;
     
   }
    var email = document.RegistrationForm.emailid.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
    {
        alert("Please enter your Email ID");
        document.RegistrationForm.emailid.focus();
	}
  
   else 
   {
        var curr_reg = {};
        curr_reg['name'] = document.RegistrationForm.name.value;
        curr_reg['email'] =  document.RegistrationForm.emailid.value;
        curr_reg['time'] = new Date();
        //console.log(allreg);
		allreg.push(curr_reg);
		sessionStorage.setItem('regs', JSON.stringify(allreg));
        document.getElementById('formreset').reset();    
    }
}



function displayreg() 
{   
    var registrations = JSON.parse(sessionStorage.getItem('regs'));
	var otp=""
    console.log("The registration details are as follows: ");
    registrations.forEach( element => {
	var currotp= "The name is : " + element['name'] + " the email ID is " + element['email'] + " and the timestamp is " + element['time'];
    console.log(currotp);
    otp = otp + "<br>" +currotp;
    });
	document.getElementById("All Registrations").innerHTML = otp;
}