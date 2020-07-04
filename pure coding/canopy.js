//here i will add some canopy trees in a JSON  format and then access those values when needed
const canopyDrought=[
    // {,origin,climate conditions, description,benefits,Tips}
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"},
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"}   ,
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"},
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"}   
]
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

// for adding click event on drought button
let droughtContent=document.getElementById('droughtContent');
let droughtBtn=document.getElementById('droughtBtn');
droughtContent.style.display='none';
droughtBtn.addEventListener('click',()=>{
    if (droughtContent.style.display=='none') {
        droughtContent.style.display='block';
    } else {
        droughtContent.style.display='none';
    }
    console.log('ji')
});

//replacing the toggleable content in drought section
let content="";
canopyDrought.forEach( (item)=> {
    content+=` <div class="cardBox">
    <img class="imgCard" src='${item.imgSrc}'
      alt='${item.name}'>
    <div>
        <h5 class="plantName">${item.name}</h5>
        <p class='plantDescription'>${item.description}</p>
    </div>
    <hr>
    <h5 class="plantName">Details & Tips</h5>
    <hr>
    <ul class='cardDetails'>
        <li >${item.benefits}</li>
        <br>
        <li ><h4>Origin:</h4>${item.origin}</li>
        <li ><h4>Tip:</h4>${item.Tips}</li>
    </ul>
</div>
</div>`;
});

droughtContent.innerHTML=content;
//similarly adding key listeners for moderate and cold section
let moderateContent=document.getElementById('moderateContent');
let moderateBtn=document.getElementById('moderateBtn');
moderateContent.style.display='none';
moderateBtn.addEventListener('click',()=>{
    if (moderateContent.style.display=='none') {
        moderateContent.style.display='block';
    } else {
        moderateContent.style.display='none';
    }
});
moderateContent.innerHTML=content;

let coldContent=document.getElementById('coldContent');
let coldBtn=document.getElementById('coldBtn');
coldContent.style.display='none';
coldBtn.addEventListener('click',()=>{
    if (coldContent.style.display=='none') {
        coldContent.style.display='block';
    } else {
        coldContent.style.display='none';
    }
});
coldContent.innerHTML=content;



