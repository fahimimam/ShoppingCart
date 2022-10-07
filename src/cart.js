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
calculation();

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
                    <h4>
                        <p>${search.name}</p>
                        <p> $ ${search.price}</[]>
                    </h4>
                    <i class="bi bi-x-lg"></i>
                </div>
                <div class="cart-buttons"></div>
            </div>           
            </div>
            `
        }).join("");
    }
}
generateCartItems();