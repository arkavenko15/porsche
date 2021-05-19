
// menu
let menu = document.querySelector(".menu");
let hiddenMenu = document.querySelector(".hidden-menu");
menu.addEventListener("click",function(){
    menu.classList.toggle("active-menu");
    if(menu.classList.contains("active-menu")){
        hiddenMenu.setAttribute("style","display:flex");
    }else{
        hiddenMenu.setAttribute("style","display:none");
    }
})
//search
let searchBtn = document.querySelector(".search-img");
let search = document.querySelector(".search");
searchBtn.addEventListener("click",function(){
    search.classList.toggle("active-search")
})
//continue button
let detailsBtn = document.querySelector(".details-btn")
let closeBtn = document.querySelector(".close-btn")
let moreDescription = document.querySelector(".more-description")
detailsBtn.addEventListener("click",function(){
    moreDescription.classList.toggle("description")
    if(moreDescription.classList.contains("description")){
        detailsBtn.setAttribute("style","display:none")
        closeBtn.setAttribute("style","display:block")
        closeBtn.addEventListener("click",function(){
            moreDescription.classList.remove("description")
            detailsBtn.setAttribute("style","display:block")
            closeBtn.setAttribute("style", "display:none")
        })
        
    }else{
        detailsBtn.setAttribute("style","display:block")
        
    }
})
// SLIDER
let offset = 0;
const sliderLine = document.querySelector('.slides');

document.querySelector('.slider-next').addEventListener('click',function()
{
    offset+=300;
    if(offset>900)
    {
        offset=0;
    }
    sliderLine.style.left = -offset +'px';
});

document.querySelector('.slider-prev').addEventListener('click',function()
{
    offset-=300;
    if(offset<0)
    {
        offset=900;
    }
    sliderLine.style.left = -offset +'px';
});

// MOBILE VERSION
let arrowDown = document.querySelector(".arrow-down");
let leftBlock = document.querySelector(".left-block")
arrowDown.addEventListener("click",function(){
    leftBlock.setAttribute("style" ,"display:none")
})

