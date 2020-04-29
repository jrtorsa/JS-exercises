//Amazon shopping

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

let amazonHistory = [];

const compose = (f, g) => (...args) => f(g(...args));
purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToitem,
    addItemToCart
)(user, {name:'laptop', price: 200})

function purchaseItem(...fns){ 
    return fns.reduce(compose)
}

function addItemToCart(user, item){
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart})
}

function applyTaxToitem(user){
    const {cart} = user;
    const taxRate = 1.3;
    const updateCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
    return Object.assign({}, user, { cart:updateCart})
}

function buyItem(user){
    return Object.assign({}, user, { purchases: user.cart})
}

function emptyCart(user){
    return Object.assign({}, user, { cart: []})
}


// Implement a cart feauture:
// 1. Add items to the cart
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
//accept refunds
//track user history

function refundItem(){

}