let shop = document.querySelector("#shop");
let shopItemsData = [{
    id: "item_1",
    name: "Casual Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum",
    img: "images/img1.jpg"
},
{
    id: "item_2",
    name: "T Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum",
    img: "images/img2.jpg"
},
{
    id: "item_3",
    name: "Suit",
    price: 255,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum",
    img: "images/img3.jpg"
},
{
    id: "item_4",
    name: "Casual Jeans",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum",
    img: "images/img4.jpg"
}];
// let basket = JSON.parse(localStorage.getItem("data")) || [];
let basket = [];
// console.log(basket);

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x;
            ///console.log(search);
            console.log(`${id}`);
            return `<div id="product-id-${id}" class="item">
        <img src="${img}" alt="picture" width="220">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="button">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">
                        ${0}
                    </div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div> `
        }).join(""));
}
generateShop();
console.log(basket);

let increment = (id) => {
    let selectedItem = id;
    // console.log(selectedItem.id);
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    }
    else {
        search.item++;
    }

    console.log(basket);
}
let decrement = (id) => {
    let selectedItem = id;
    // console.log(selectedItem.id);
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) {
        return;
    }
    else {
        search.item--;
    }
}
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).textContent = search.item;
    // console.log(document.getElementById(search.id));
}

let calculation = () => {
    let total = 0;
    let cartAmount = document.getElementById('cartAmount');
    basket.forEach(element => {
        total += element.item;
    });
    // console.log(`Total amount = ${total}`);
    cartAmount.innerHTML = total;
}