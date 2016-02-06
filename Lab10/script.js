function submitform() {
	
//You must validate each input item (its format) using JavaScript upon completion of each item
//With the phone number’s input, you should allow any one of the following formats:  618 123 4567, or (618)1234567, or 618 123-4567, 618-123-4567, or, 123 4567, or 123-4567. 
//When the area code is missing, your script should automatically fill in 618 as the default, and then redisplay the phone using this standard form: 618-123-4567	
	
//get the form values and submit them
}

function phonenumber(inputtxt)  {  
   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
   if((inputtxt.value.match(phoneno)){  
		return true;  
    } else{  
        alert("message");  
        return false;  
    }  
}  