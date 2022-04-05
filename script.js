let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirmPassword")
let passMatch = document.querySelector(".passMatch")
let passConfirm = () => {
    if(password.value != confirmPassword.value){
        passMatch.innerHTML = ("Passwords do not match")
        password.classList.add("noMatch")
        confirmPassword.classList.add("noMatch")
        document.querySelector("#submitBttn").disabled = true
    }
    else {passMatch.innerHTML=("")
    password.classList.remove("noMatch")
    confirmPassword.classList.remove("noMatch")
    document.querySelector("#submitBttn").disabled = false
}
    

}
// let passConfirm = () => console.log(password.value)  a