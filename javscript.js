const showPass = document.getElementById("showPass");
const inputPass = document.getElementById("inputPassword3");
const btnLogin = document.getElementById("login")
// this is for heidden password and show  
showPass.addEventListener("click",(eo)=> {
    if(inputPass.type === "password"){
        inputPass.removeAttribute("type","password");
        inputPass.setAttribute("type","text");
        showPass.removeAttribute("class","icon-eye-slash");
        showPass.setAttribute("class","icon-eye");    

    } else {
        inputPass.removeAttribute("type","text");
        inputPass.setAttribute("type","password");
        showPass.removeAttribute("class","icon-eye");
        showPass.setAttribute("class","icon-eye-slash") 
    }
        
})
// this for 
btnLogin.addEventListener("click",(eo)=>{
    eo.preventDefault();
})
