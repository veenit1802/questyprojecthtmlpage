

var signup = document.getElementsByClassName("signup")[0];


var login = document.getElementsByClassName("loginbutton")[0];

signup.addEventListener('click',killer);

login.addEventListener("click",killer12);


// function to change the gradient color when signup button is pressed
function killer()
{
    if(document.getElementsByClassName("loginsignupbutton")[0]) //to check if the color is been change previously or not
    {
    var loginclass = document.getElementsByClassName("loginsignupbutton")[0];//add the current class
    
    
    var signloginbox = document.getElementsByClassName("loginsignupbox")[0];//add the current class


    signloginbox.style.visibility="hidden";           //make the existing style visibility to hidden
    signloginbox.className="loginsignupbox1";         //add the latest class
    signloginbox.style.visibility ="visible";         //add the visibility to the class


    loginclass.style.visibility="hidden";             //make the existing style visibility to hidden
    loginclass.className = "loginsignupbutton1";      //add the latest class
    loginclass.style.visibility="visible";            //add the visibility to the class

    signup.style.color = "#ff0ab5";                    //change the signup button color
    login.style.color="orange";                        //change the login button color
}
}



// function to change the gradient color when login button is pressed
function  killer12()
{
    if(document.getElementsByClassName("loginsignupbutton1")[0])        // to check if the color is been change previously or not
    {
          var loginclass= document.getElementsByClassName("loginsignupbutton1")[0];         //add the current class 
          loginclass.style.visibility="hidden";                                             //make the existing style visibility to hidden
          loginclass.className="loginsignupbutton";                                         //add the latest class
          loginclass.style.visibility = "visible";                                          //add the visibility to the class

          var signloginbox = document.getElementsByClassName("loginsignupbox1")[0];        // add the current class
          signloginbox.style.visibility = "hidden";                                         //make the existing style visibility to hidden
          signloginbox.className = "loginsignupbox";                                        //add the latest class
          signloginbox.style.visibility = "visible";                                        //add the visibility to the class
          signup.style.color = "orange";                                                     //change the signup button color
          login.style.color="#ff0ab5";                                                      //change the login button color
    }
}