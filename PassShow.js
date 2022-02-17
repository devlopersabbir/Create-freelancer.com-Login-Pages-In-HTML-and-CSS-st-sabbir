const userpasswrod = document.getElementById("userpasswrod");
const show = document.getElementById("show");
const hide = document.getElementById("hide");

function passFuc(){
    if(userpasswrod.type === "password"){
        userpasswrod.type = "text";
        show.style.display = "block";
        hide.style.display = "none";
    }
    else{
        userpasswrod.type = "password";
        show.style.display = "none";
        hide.style.display = "block";
    }
}
