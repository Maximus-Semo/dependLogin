
const showPass = document.getElementById("showPass");
// showpass this is icone eye
const inputPass = document.getElementById("inputPassword3");
// inputpass this is input password
const btnLogin = document.getElementById("login")
// btnLogin this is button login

// this fuction to showing password and hiddening passwiod
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
// for not refresh form or page  
btnLogin.addEventListener("click",(eo)=>{
    eo.preventDefault();
})
