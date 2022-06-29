var nameError = document.getElementById('name-error');
var numberError = document.getElementById('number-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('Submit-error');
function validateName() {
    var name = document.getElementById('name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateNumber(){
    var number = document.getElementById('number').value;
     if(number.length == 0){
        numberError.innerHTML = 'Phone no is required'
        return false;
     }
     if(number.length !== 10){
        numberError.innerHTML = 'phone no should be 10 digits'
        return false;
     }

     if(!number.match(/^[0-9]{10}$/)){
        numberError.innerHTML = 'only digits'
        return false;
     }
     numberError.innerHTML = '<i class="fa-solid fa-check"></i>'
     return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.length ==0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)){  
        emailError.innerHTML = 'Email is invalid'
        return false;
    }
   emailError.innerHTML ='<i class="fa-solid fa-check"></i>' ;
   return true;
}
function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left =required- message.length;
    if(left>0){
        messageError.innerHTML = left + 'more character required';
        return false;
    }
    messageError.innerHTML ='<i class="fa-solid fa-check"></i>' ;
   return true;
    }
function validateForm(){
    if(!validateName() || !validateNumber() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix the error";
        setTimeout(function(){submitError.style.display = 'none';},3000)
        return false;
    }
}