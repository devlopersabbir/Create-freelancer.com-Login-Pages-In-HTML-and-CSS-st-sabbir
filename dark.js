const bodyDarkColor = document.getElementsByTagName("body")[0];
const darkMode = document.getElementById("darkMode");


darkMode.addEventListener("click",()=>{
    darkMode.classList.toggle("active");
    bodyDarkColor.classList.toggle("night");
},2000);
