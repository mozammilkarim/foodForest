let subBtn=document.getElementById("submit");
subBtn.addEventListener("click",success);
function success(){
    setTimeout(() => {
        alert("Your information is stored safely");
    }, 1000);
}
