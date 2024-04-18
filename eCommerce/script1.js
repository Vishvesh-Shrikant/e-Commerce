const menubar=document.querySelector("#menu");
const nav= document.querySelector("#navitems");
const close= document.querySelector("#close");

if(menubar)
{
    menubar.addEventListener("click",()=>
    {
        nav.classList.add('active');
    })
}
if(close)
{
    close.addEventListener("click",()=>
    {
        nav.classList.remove("active");
    })
}

const banners= document.querySelectorAll("#txt-banner");
banners.forEach((banner)=>
{
    banner.addEventListener("click", ()=>
    {
        window.location.href="shop.html";
    })
})
const click_banner=document.querySelectorAll("#sm-banner button")
click_banner.forEach((button)=>
{
    button.addEventListener("click",()=>
    {
        window.location.href="shop.html";
    })
})

const home_products=document.querySelectorAll(".home .product")
home_products.forEach((item)=>
{
    item.addEventListener("click", ()=>
    {
        window.location.href="sproduct.html";
    })
})

const hero_button=document.querySelector("#hero button")
hero_button.addEventListener("click", ()=>
{
    window.location.href="shop.html";
})


