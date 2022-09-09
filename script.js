let shop = document.querySelector("#shop");
let shopItemsData = [{
    id: "001",
    name:"Casual Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum",
    img: "images/img1.jpg"
},
{
    id: "002",
    name:"T Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum",
    img: "images/img2.jpg"
},
{
    id: "003",
    name:"Suit",
    price: 255,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum",
    img: "images/img3.jpg"
},
{
    id: "004",
    name:"Casual Jeans",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum",
    img: "images/img4.jpg"
}];
let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id,name,price,desc,img} = x;
        return `<div id=product-id-${id} class="item">
        <img src="${img}" alt="picture" width="220">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="button">
                    <i class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div> `
    }).join(""));
}

generateShop();