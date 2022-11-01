let label = document.querySelector('#label');
let shoppingCart = document.querySelector('#shopping-cart');
let basket = JSON.parse(localStorage.getItem('data')) || [];
// console.log(basket);

let calculation = () => {
    let total = 0;
    let cartAmount = document.getElementById('cartAmount');
    basket.forEach(element => {
        total += element.item;
    });
    // console.log(`Total amount = ${total}`);
    cartAmount.innerHTML = total;
}
let generateCartItems = () => {
    if (basket.length === 0) {
        // console.log('Basket is :>> ', basket.length);
        shoppingCart.innerHTML = ``;
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.htm">
            <button class="homeBtn">Back To Home</button>
        </a>
        `;
    }
    else {
        // console.log('Basket is not Emtpy :>> ', basket.length);
        return shoppingCart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return `
            <div class="cart-item">
            <img src=${search.img} width="100"></img> 
            <div class="details">
                <div class="title-price-x">
                    <h4 class="title-price">
                        <p>${search.name}</p>
                        <p class="cart-item-price"> $ ${search.price}</p>
                    </h4>
                    <i class="bi bi-x-lg" onclick="removeItem(${id})"></i>
                </div>
                    <div class="button">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">${item}</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                    <h3>
                            $ ${item * search.price}
                    </h3>
            </div>           
            </div>
            `
        }).join("");
    }
}
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
    totalAmount();
    generateCartItems();
    calculation();
    // console.log(basket);
}
let decrement = (id) => {
    let selectedItem = id;
    // console.log(selectedItem.id);
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item--;
    }
    update(search.id);
    calculation();
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    totalAmount();
    localStorage.setItem('data', JSON.stringify(basket));
}
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).textContent = search.item;
    // console.log(document.getElementById(search.id));
    localStorage.setItem('data', JSON.stringify(basket));
}
let removeItem = (id) =>{
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
    generateCartItems();
    calculation();
    totalAmount();
}
let clearCart = () =>{
    // console.log("Button pressed");
    basket = [];
    generateCartItems();
    localStorage.setItem("data",JSON.stringify(basket));
    calculation();
}
let totalAmount = ()=>{
    if(basket.length !== 0){
        let amount = basket.map((x) =>{
            let {id,item} = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return item * search.price
        }).reduce((x,y) => x+y,0);
        // console.log(amount)
        label.innerHTML = `
            <h2> Total Bill : $ ${amount}</h2>
            <button class="checkout">Checkout</button>
            <button class="removeAll" onclick="clearCart()">Clear Cart</button>
        `
    }
    else return
}










totalAmount();
calculation();
generateCartItems();