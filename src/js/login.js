function validate(){
    var email = document.getElementById('email');
    var pass = document.getElementById("password");
    var status= true;
    if(email.value==""){
        document.getElementById('email-errol').innerHTML="Please enter your email"
        status= false;
    }else{
        status= true;
        document.getElementById('email-errol').innerHTML=""
    }

    if(pass.value==""){
        document.getElementById("pass-errol").innerHTML="Please enter your password"
        status=false;
    }else{
        status=true;
        document.getElementById("pass-errol").innerHTML=""
    }

    return status;
}