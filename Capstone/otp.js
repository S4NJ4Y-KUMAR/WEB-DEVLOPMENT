function validateNumber(){
	let mobileNumber=document.getElementById("mobile").value;
	if(mobileNumber){
		if(mobileNumber.match(/^\d{10}$/)){
			document.getElementById("alert").innerHTML="";
			return true;
		}
		else{
			document.getElementById("alert").innerHTML="Enter a valid mobile number";
			}
		}
	}



function sendOTP(){
	if(validateNumber()){
	otp=Math.floor(1000+Math.random() * 9000);
	if(typeof(Storage) !== "undefined"){
	sessionStorage.setItem("otp", otp);
	}
	alert(otp);
	}
	else{
	document.getElementById("alert").innerHTML="Enter a valid mobile number" ;
	alert(innerHTML.fontcolor( "red" ));
		return false;
	}
}

function validateOTP(){
	let userOTP=document.getElementById("otp").value;
	console.log(otp);
	if(userOTP.match(/^\d{4}$/)){
		document.getElementById("alert").innerHTML="";
		return true;
	}
	else{
		document.getElementById("alert").innerHTML="Enter a valid OTP";
		return false
	}
}
function verifyOTP(){
	let userOTP=document.getElementById("otp").value;
	if(validateOTP()){
		if(userOTP==sessionStorage.getItem("otp")){
			alert("success");
			window.location.href="success.html"
			return true;
		}
		else {alert("failed! Please retry");
		return false}
	}
	else{
		document.getElementById("alert").innerHTML="Enter a valid OTP";
	}
}

