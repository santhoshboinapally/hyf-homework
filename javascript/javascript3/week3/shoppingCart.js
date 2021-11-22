class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency) {
        fetch(
                "https://v6.exchangerate-api.com/v6/2094ae77092b17e58dd73819/latest/DKK"
            )
            .then((response) => response.json())
            .then((data) => {
                const currencies = data.conversion_rates;
                const convertCurrency = this.price * currencies[currency];
                console.log(convertCurrency);
            });
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(this.products);
    }

    removeProduct(product) {
        this.products = this.products.filter((item) => item !== product);
        console.log(this.products);
    }

    searchProduct(productName) {
        const searchedProduct = this.products.filter(
            (product) => product.name === productName
        );
        console.log(searchedProduct);
    }

    getTotal() {
        let total = 0;
        const totalPrice = this.products.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price;
        }, total);
        console.log(`The total price is : ${totalPrice}`);
    }

    renderProducts() {
        const cartDiv = document.getElementById("demo");
        const cartUl = document.createElement("ul");
        cartDiv.appendChild(cartUl);
        cartUl.innerHTML = "Shopping Cart";
        this.products.forEach((product) => {
            const li = document.createElement("li");
            li.innerHTML = `Product Name : ${product.name} <br> Product Price: ${product.price}`;
            cartUl.appendChild(li);
        });
    }

    getUser() {
        const url = "https://jsonplaceholder.typicode.com/users/1";
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => console.log(data.username))
            .catch((err) => console.log("error"));
    }
}

const shoppingCart = new ShoppingCart();
const screen = new Product("Smart TV", 5000);
const mobile = new Product("Iphone 13", 9000);
const laptop = new Product("Dell laptop", 6000);
const tab = new Product("Ipad", 4000);
const keyboard = new Product("Keyboard", 199);
const mouse = new Product("Mouse", 50);

shoppingCart.addProduct(screen);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(tab);
shoppingCart.addProduct(keyboard);
shoppingCart.addProduct(mouse);

mouse.convertToCurrency("USD");
laptop.convertToCurrency("INR");
mobile.convertToCurrency("GBP");
mouse.convertToCurrency("SEK");

shoppingCart.removeProduct(screen);
shoppingCart.removeProduct(mobile);

shoppingCart.renderProducts();
shoppingCart.getTotal();
shoppingCart.getUser();

shoppingCart.searchProduct("macbook air");
shoppingCart.searchProduct("tab");