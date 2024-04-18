const product_page1=document.querySelector(".page1");
const product_page2=document.querySelector(".page2");
const page1=document.querySelector("#pg1");
const page2=document.querySelector("#pg2");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");

let visible=true;
const isVisible=()=>
{
    if(visible)
    {
        product_page1.classList.remove("invisible");
        product_page2.classList.add("invisible");
        prev.classList.add("invisible");
        next.classList.remove("invisible");
    }
    else
    {
        product_page1.classList.add("invisible");
        product_page2.classList.remove("invisible");
        prev.classList.remove("invisible");
        next.classList.add("invisible");
    }
}
page1.addEventListener("click", ()=>
{
    visible=true
    isVisible();
})
page2.addEventListener("click",()=>
{
    visible=false
    isVisible();
})
next.addEventListener("click",()=>
{
    visible=!visible
    isVisible();
});
prev.addEventListener("click",()=>
{
    visible=!visible
    isVisible();
});

const prods=document.querySelectorAll(".page1 .product");
prods.forEach((prod)=>
{

    prod.addEventListener("click",()=>
    { 
        window.location.href="sproduct.html"
    })
})