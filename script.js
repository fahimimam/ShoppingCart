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
let basket = JSON.parse(localStorage.getItem('data')) || [];
// console.log(basket);
let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x;
            let search = basket.find((y) => y.id === id) || [];
            // calculation();
            ///console.log(search);
            // console.log(`${id}`);
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
                        ${search.item === undefined ? 0 : search.item}
                    </div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div> `
        }).join(""));
}
// calculation();
generateShop();

// console.log(basket);

let increment = (id) => {
    let selectedItem = id;
    // console.log(selectedItem.id);
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
        localStorage.setItem('data', JSON.stringify(basket));
        update(selectedItem.id);
    }
    else {
        search.item++;
        localStorage.setItem('data', JSON.stringify(basket));
        update(search.id);
    }


    calculation();
    // console.log(basket);
}
let decrement = (id) => {
    let selectedItem = id;
    // console.log(selectedItem.id);
    let search = basket.find((x) => x.id === selectedItem.id);
    if(search === undefined) return;
    else if(search.item === 0) return;
    else
    {
        search.item--;
    }
    update(search.id);
    calculation();
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem('data',JSON.stringify(basket));
}
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).textContent = search.item;
    // console.log(document.getElementById(search.id));
    localStorage.setItem('data', JSON.stringify(basket));
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

calculation();