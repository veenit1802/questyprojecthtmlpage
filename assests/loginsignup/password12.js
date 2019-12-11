function passwordfreezer()
{
    var buttontype=document.getElementsByClassName("passwordinput")[0];
    if(buttontype.type == "password")
        buttontype.type = "text";
    else
        buttontype.type = "password";
}


var showpass = document.getElementsByClassName("showpassword")[0];

showpass.addEventListener("click",checkboxchecked);


function checkboxchecked()
{
    checkbox1 = document.getElementsByClassName("checkbox1")[0];
    if(checkbox1.checked)
    {
        checkbox1.checked=false;
        passwordfreezer();
    }
    else
    {       
        checkbox1.checked=true;
        passwordfreezer();
    }
}