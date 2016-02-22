function validate(form){
    var pass1Obj = document.getElementById("Pass1");
    var pass1 = pass1Obj.form.Password1.value;
    var pass2Obj = document.getElementById("Pass2");
    var pass2 = pass2Obj.form.Password2.value;
    if((pass1.length < 8) || (pass2.length < 8)){
        alert("ERROR: Password length must be greater than 8 characters.");
    } else if (pass1 != pass2){
    
        alert("ERROR: Passwords do not match.");
    } else {
    
        alert("Match!");
    }
}