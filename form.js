function checkUsername(){
    var username=document.getElementById("username").value;///get id with value
    var usernamepattern=/^[A-Za-z .]{0,5}$/;////Regular expression
    if(usernamepattern.test(username))
    {
        document.getElementById("username").value;
        alert("username no cumple los requisitos")
        return False;
    }
    else
    {
        document.getElementById("username").value;
        alert("cumple con los requisitos")
        return True;
    }
    }

// function  checkCorreo(){
//     var username=document.getElementById("Correo").value;///get id with value
//     var usernamepattern=/^[A-Za-z .]{0,30}$/;////Regular expression
//     if(usernamepattern.test(username))
//     {
//         document.getElementById("Correo").innerHTML="cumple con los requerimientos";
//     }
//     else
//     {
//         document.getElementById("Correo").style.backgroundColor='red'; }
//     }

// function checkContrasena(){
//     var username=document.getElementById("contrasena").value;///get id with value
//     var usernamepattern=/^[A-Za-z .]{0,30}$/;////Regular expression
//     if(usernamepattern.test(username))
//     {
//         document.getElementById("contrasena").style.backgroundColor='yellow';
//     }
//     else
//     {
//         document.getElementById("contrasena").style.backgroundColor='red'; }
//     }

// function checkCofirmContrasena(){
//     var username=document.getElementById("confirm_contrasena").value;///get id with value
//     var usernamepattern=/^[A-Za-z .]{0,30}$/;////Regular expression
//     if(usernamepattern.test(username))
//     {
//         document.getElementById("confirm_contrasena").style.backgroundColor='yellow';
//     }
//     else
//     {
//         document.getElementById("confirm_contrasena").style.backgroundColor='red'; }
//     }
