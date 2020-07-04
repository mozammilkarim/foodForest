//  for signUp button to present a modal
let signUp = document.getElementById("signUp");
signUp.addEventListener('click', () => {
    let modal = document.getElementById("modal");
    modal.style.display = 'block';
});
//  to close the modal
let modal = document.getElementById("modal");
let modalClose = document.getElementById("modalClose");
modalClose.addEventListener('click', () => {

    modal.style.display = 'none';
    myTextArea.value = "";
    email.value = "";
});
let email = document.getElementById('email');
let myTextArea = document.getElementById('myTextArea');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        myTextArea.value = "";
        email.value = "";
    }
}
//  for toggling a menubar
let menu = document.getElementById("menu");
menu.addEventListener('click', () => {
    let menubar = document.getElementById("menuBar");
    if (menubar.style.display == 'block') {
        menubar.style.display = 'none';
    } else {
        menubar.style.display = 'block';
    }
});
// for toggling layer dropDown
let dropDownBtn = document.getElementById("dropDownBtn");
let dropDownContent = document.getElementById("dropDownContent");
dropDownBtn.addEventListener('click', () => {
    if (dropDownContent.style.display == 'block') {
        dropDownContent.style.display = 'none';
    } else {
        dropDownContent.style.display = 'block';
    }
});

// now setting up slide show of images
let activeImg = document.getElementById("activeImg");
let slideImg = document.getElementById("slideImg");
setInterval(() => {
    if (activeImg.style.display=='block') {
        activeImg.style.display='none';
        slideImg.style.display='block';
    }
    else{
        activeImg.style.display='block';
        slideImg.style.display='none';
    }
}, 3000);

// now hide the paragraphs of benefit content
let benefitBtn1=document.getElementById("benefitBtn1");
let benefitContent1=document.getElementById("benefitContent1");
benefitBtn1.addEventListener('click',()=>{
    if ( benefitContent1.style.display=='none') {
        benefitContent1.style.display='block';
    } else {
        benefitContent1.style.display='none';
    }
});
let benefitBtn2=document.getElementById("benefitBtn2");
let benefitContent2=document.getElementById("benefitContent2");
benefitBtn2.addEventListener('click',()=>{
    if ( benefitContent2.style.display=='none') {
        benefitContent2.style.display='block';
    } else {
        benefitContent2.style.display='none';
    }
   ;
});
let benefitBtn3=document.getElementById("benefitBtn3");
let benefitContent3=document.getElementById("benefitContent3");
benefitContent1.style.display='block';
benefitContent2.style.display='none';
benefitContent3.style.display='none';
benefitBtn3.addEventListener('click',()=>{
    if ( benefitContent3.style.display=='none') {
        benefitContent3.style.display='block';
    } else {
        benefitContent3.style.display='none';
    }
   ;
});
