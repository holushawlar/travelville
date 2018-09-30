function validator(){
	 var email_val = documemnt.getElementById('email');
	 if (email_val.value === '') {
	 	return true;
	 }
	 else {
	 	return false;
	 }
}

var email_test = validator();
if (email_test === true) {
	alert('enter your email');
}
else if (email_test === false) {
	
}