function validate() {
    var email = document.getElementById('email')
    var fullname = document.getElementById('name')
    var password = document.getElementById('password')
    var repass = document.getElementById('repass')
    var status = true;

    if (email.value == "") {
        document.getElementById("email-errol").innerHTML = "Please enter your Email"
        status = false;
        email.focus;
    } else {
        document.getElementById("email-errol").innerHTML = " "
        status = true
    }






    if (fullname.value == "") {
        document.getElementById('pass-errol').innerHTML = "Please enter your name"
        status = false;

    } else {
        document.getElementById("pass-errol").innerHTML = " "
        status = true
    }



    //----------//check pass//-----------//


    if (password.value === repass.value) {

        status = true
    }
    else {
        alert('password incorrect ')
        repass.focus();
        status = false;

    }



    if (password.value == "") {
        document.getElementById('passerrol').innerHTML = "Please enter your pass"
        status = false;
    }else{
        status=true;
        document.getElementById('passerrol').innerHTML=''
    }



    if (repass.value == '') {
        document.getElementById('repass-errol').innerHTML = "Please enter your repass"
        status = false;
    } else {
        document.getElementById('repass-errol').innerHTML = " "
        status = true;
    }






    return status;
}