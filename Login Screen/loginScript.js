        // this function is activated when clicking submit, will check fname/lname for more than 20 characters, check student id is at least 3 numbers and not more than 3 numbers as well as making sure its not blank for all inputs
        
        
        function countdownLogin() {
            var fName = document.forms.RegForm.fName.value
            var lName = document.forms.RegForm.lName.value
            var studentID = document.forms.RegForm.studentID.value

    
            if (fName == "") {
                window.alert("Please enter your first name properly.");
                return false;
            }

            if(fName.length > 20){
                alert("First name cannot be longer than 20 characters");
                return false;
    
            }
            
            if (lName == "") {
                window.alert("Please enter your last name properly.");
                return false;
            }

            if(lName.length > 20){
                alert("Last name cannot be longer than 20 characters");
                return false;
    
            }
              
            if (studentID == "") {
                alert("Please enter your ID");
                return false;
            }
    
            if(studentID.length > 3){
                alert("ID cannot be more than 3 numbers");
                return false;
    
            }

            if(studentID.length < 3){
                alert("ID cannot be more less than 3 numbers");
                return false;
    
            } 
        

                                   
        }
        