//here i will add some canopy trees in a JSON  format and then access those values when needed
const canopyDrought=[
    // {,origin,climate conditions, description,benefits,Tips}
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"},
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"}   ,
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"},
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"}   
]

let droughtSection=document.getElementById('collapseOne');
let content="";
canopyDrought.forEach( (item)=> {
    content+=` <div class="card realCard">
    <img src='${item.imgSrc}'
     class="card-img-top" alt='${item.name}'>
    <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.benefits}</li>
        <li class="list-group-item">${item.origin}</li>
        <li class="list-group-item">${item.Tips}</li>
    </ul>
    <div class="card-body">
        <a href="https://www.google.com" class="card-link">Search in Google</a>

    </div>
</div>
</div>`;
});

droughtSection.innerHTML=content;


const canopyModerate=[
    // {,origin,climate conditions, description,benefits,Tips}
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"},
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"}   ,
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"}  
]

let moderateSection=document.getElementById('collapseTwo');

content="";
canopyModerate.forEach( (item)=> {
    content+=` <div class="card realCard">
    <img src='${item.imgSrc}'
     class="card-img-top" alt='${item.name}'>
    <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.benefits}</li>
        <li class="list-group-item">${item.origin}</li>
        <li class="list-group-item">${item.Tips}</li>
    </ul>
    <div class="card-body">
        <a href="https://www.google.com" class="card-link">Search in Google</a>

    </div>
</div>
</div>`;
});

moderateSection.innerHTML=content;

const canopyCold=[
    // {,origin,climate conditions, description,benefits,Tips}
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"},
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"}   ,
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"},
    {imgSrc:"images/carousel2.jpeg",name:"banyan",origin:"India",conditions:"moderate/drought",description:"voluptates voluptatum ea commodi voluptas! Distinctio qui soluta sapiente architecto nostrum nam cupiditate. Veniam autem excepturi possimus voluptas repudiandae. Nam atque earum quisquam blanditiis debitis asperiores perspiciatis delectus similique accusantium, ratione repellat tempora aspernatur beatae enim culpa alias voluptate esse adipisci! Fuga laborum aliquid officiis",benefits:"Shade giving,oxygen giving,spiritual importance to some religions",Tips:"no tip for now"}   
]

let coldSection=document.getElementById('collapseThree');

content="";
canopyCold.forEach( (item)=> {
    content+=` <div class="card realCard">
    <img src='${item.imgSrc}'
     class="card-img-top" alt='${item.name}'>
    <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${item.benefits}</li>
        <li class="list-group-item">${item.origin}</li>
        <li class="list-group-item">${item.Tips}</li>
    </ul>
    <div class="card-body">
        <a href="https://www.google.com" class="card-link">Search in Google</a>

    </div>
</div>
</div>`;
});

coldSection.innerHTML=content;