
const MainImg=document.querySelector("#MainImg");
const SmallImg=document.querySelectorAll(".small-img")

const changeImg=(url)=>
{
    MainImg.src=url;
}

SmallImg.forEach((img)=>
{
    img.addEventListener("click",()=>
    {
        MainImg.src=img.src;
    })
})

const quantity=document.querySelectorAll(".quantity");
quantity.forEach((quantity)=>
{
    for(let i=1;i<=10;i++)
    {
        let num_items=document.createElement("option");
        num_items.innerText=i;
        quantity.appendChild(num_items);
    }
})


const products=['f1','f2','f3','f4','f5','f6','f7','f8','n1','n2','n3','n4','n5','n6','n7','n8',
'p1','p2','p3','p4','p5','p6','p7','p8']
const fetaure_img_shop=document.querySelectorAll(".single-prod-shop");
let previous=0
const checkRandom=(random,prev)=>
{
    if(random==previous)
    {
        random=Math.floor(Math.random()*10)
        return checkRandom(random, prev)
    }
    return random;
}
fetaure_img_shop.forEach((image)=>
{
    let random=Math.floor(Math.random()*10)
    checkRandom(random, previous)
    previous=random;
    let url=`images/products/${products[random]}.jpg`;
    image.src=url;
})

