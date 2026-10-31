class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    displayDetails() {
        return `ID: ${this.id}
Name: ${this.name}
Price: ₹${this.price}
Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mobile", 15000, "Electronics"),
    new Product(3, "Book", 500, "Education"),
    new Product(4, "Headphones", 2000, "Accessories")
];

products[0].applyDiscount(10);

products.forEach(product => {
    console.log(product.displayDetails());
    console.log("------------------");
});

const filteredProducts = products.filter(product => product.price > 1000);

console.log("Products with price greater than ₹1000:");

filteredProducts.forEach(product => {
    console.log(product.displayDetails());
});