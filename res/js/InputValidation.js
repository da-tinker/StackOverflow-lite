<!-- Purpose: Validate user input on the Member Sign up form

function CheckForm(theForm, theDivID) {
    var NewMbrEmail = theForm.txtEmail.value;
    var str = theForm.txtPassword.value;
    var err = {};
    var Valid_Email_format = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var Valid_Date_format = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    var currYear = (new Date()).getFullYear();

    //check password field, minimum 4 chars
    if ((str.length < 4)) {
        err.message = "Password too short";
        err.field = theForm.txtPassword;
    }

    //check for correct email format
    if (!(Valid_Email_format.test(NewMbrEmail))) {
        err.message = "Invalid Email Address";
        err.field = theForm.txtEmail;
    }

    //check for correct date format	
    if (theForm.txtSignupDate.value.match(Valid_Date_format)) {
        DateGiven = theForm.txtSignupDate.value;
        D8 = DateGiven.split("/", 3);

        //day not between 1 and 31
        if (D8[0] < 1 || D8[0] > 31) {
            err.message = "Invalid Entry - Day of Month: " + D8[0];
        }
        //month not between 1 and 12
        if (D8[1] < 1 || D8[1] > 12) {
            err.message = "Invalid Entry - Month: " + D8[1];
        }
        //year not between 1913 and current year
        if (D8[2] < 1913 || D8[2] > currYear) {
            err.message = "Invalid Entry - Year: " + D8[2];
        }
        //format the date input to correspond with the database format (YYYY-MM-DD)
        dbCompatibleDate = D8[2] + '/' + D8[1] + '/' + D8[0];

        //set the error field i.e the date field if an error is found within any of the date components
        if (err.message) {
            err.field = theForm.txtSignupDate;
        }
    } else {
        err.message = "Invalid Date Format";
        err.field = theForm.txtSignupDate;
    }

    //display error messages if found
    if (err.message) {
        document.getElementById(theDivID).innerHTML = err.message;
        err.field.focus();
        return false;
    }
    //change the textbox value for the date to the database compatible date 
    theForm.txtSignupDate.value = dbCompatibleDate;
    return true;
}
-->
